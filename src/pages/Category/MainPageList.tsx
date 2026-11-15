import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';

// ---- Settings -------------------------------------------------------------
// A page is listed when ANY of its tags matches ANY name here, OR when the page
// lives inside one of the INCLUDE_FOLDERS. Spaces, hyphens, dots, "&" and capitals
// are ignored: "Main Page" = "main-page" = "MainPage".
// "and" is a real word to the matcher, so that spelling is listed separately.
// To reuse this file for another category, change only these lists plus PAGE_HEADING.
const CATEGORY_TAGS = ['Main Page', 'Laman Utama'];
const INCLUDE_FOLDERS = ['MainPage']; // every page in pages/MainPage is listed, tagged or not ([] = tag-only)
const PAGE_HEADING = 'Laman Utama';
const ROUTE_FALLBACK_BASE = ''; // only used if a page has no route in the router
const PAGE_SIZE = 12;
// ---------------------------------------------------------------------------

// Every .tsx file in every folder under pages/ (nested folders too), read as plain
// text and never executed, so a broken page cannot crash this list.
// The Category folder is excluded so list pages don't list themselves.
const sourceLoaders = import.meta.glob<string>(['../**/*.tsx', '!../Category/**'], {
    query: '?raw',
    import: 'default',
});

// Your router file(s) as plain text: src/router/*.ts(x).
// If your routes live somewhere else, change this path.
const routeSources = import.meta.glob<string>('../../router/*.{ts,tsx}', {
    query: '?raw',
    import: 'default',
    eager: true,
});

interface PageItem {
    key: string; // "Folder/FileName"
    folder: string;
    slug: string;
    to: string;
    title: string;
    titleSource: string; // where the title was found (shown in the dev console)
    tags: string[];
    author: string;
    date: Date | null;
    dateText: string;
}

/* ------------------------------ ROUTE LOOKUP ------------------------------ */

interface RouteMaps {
    byKey: Record<string, string>; // 'Folder/FileName' -> '/url'
    bySlug: Record<string, string>; // 'FileName' -> '/url' (only when unambiguous)
}

const buildRouteMaps = (): RouteMaps => {
    const text = Object.values(routeSources).join('\n');
    const componentToKey: Record<string, string> = {};

    const register = (regex: RegExp) => {
        let m: RegExpExecArray | null;
        while ((m = regex.exec(text))) {
            componentToKey[m[1]] = `${m[2]}/${m[3].replace(/\.tsx$/, '')}`;
        }
    };

    // const Name = lazy(() => import('../pages/Folder/File'))
    register(/(\w+)\s*=\s*(?:React\.)?lazy\(\s*\(\)\s*=>\s*import\(\s*['"][^'"]*\/([^'"/]+)\/([^'"/]+)['"]\s*\)/g);
    // import Name from '../pages/Folder/File'
    register(/import\s+(\w+)\s+from\s+['"][^'"]*\/([^'"/]+)\/([^'"/]+)['"]/g);

    const byKey: Record<string, string> = {};
    const pathRegex = /path:\s*['"`]([^'"`]+)['"`]/g;
    const hits: { path: string; start: number; end: number }[] = [];

    let match: RegExpExecArray | null;
    while ((match = pathRegex.exec(text))) {
        hits.push({ path: match[1], start: match.index, end: match.index + match[0].length });
    }

    hits.forEach((hit, i) => {
        if (hit.path.includes(':') || hit.path.includes('*')) return; // skip dynamic routes
        const chunk = text.slice(hit.end, hits[i + 1]?.start ?? text.length);
        const tags = chunk.match(/<\s*([A-Z]\w*)/g) ?? [];

        for (const tag of tags) {
            const name = tag.replace(/<\s*/, '');
            const key = componentToKey[name];
            if (key && !byKey[key]) {
                byKey[key] = hit.path;
                break;
            }
        }
    });

    // Second lookup by file name alone, only for names that are unique.
    const bySlug: Record<string, string> = {};
    const seen: Record<string, number> = {};
    Object.entries(byKey).forEach(([key, url]) => {
        const slug = key.split('/')[1];
        seen[slug] = (seen[slug] ?? 0) + 1;
        bySlug[slug] = url;
    });
    Object.keys(seen).forEach((slug) => {
        if (seen[slug] > 1) delete bySlug[slug];
    });

    return { byKey, bySlug };
};

/* ------------------------------- DATE PARSING ------------------------------ */

// English and Malay month names. No year is hard-coded anywhere: 2027, 2030 or
// 2099 all work, as long as the date is a real calendar date.
const MONTHS: Record<string, number> = {
    january: 0,
    jan: 0,
    januari: 0,
    february: 1,
    feb: 1,
    februari: 1,
    march: 2,
    mar: 2,
    mac: 2,
    april: 3,
    apr: 3,
    may: 4,
    mei: 4,
    june: 5,
    jun: 5,
    july: 6,
    jul: 6,
    julai: 6,
    august: 7,
    aug: 7,
    ogos: 7,
    september: 8,
    sep: 8,
    sept: 8,
    october: 9,
    oct: 9,
    oktober: 9,
    okt: 9,
    november: 10,
    nov: 10,
    december: 11,
    dec: 11,
    disember: 11,
    dis: 11,
};

// Builds a date and rejects impossible ones (e.g. 31 February rolling into March).
const makeDate = (year: number, month: number, day: number): Date | null => {
    const date = new Date(year, month, day);
    return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day ? date : null;
};

const monthFromName = (name: string): number | undefined => MONTHS[name.toLowerCase()];

const DATE_PATTERNS: { regex: RegExp; read: (m: RegExpExecArray) => Date | null }[] = [
    {
        // July 2, 2027 | Jul 2 2027 | July 2nd, 2027 | Julai 2, 2027
        regex: /\b([A-Za-z]{3,9})\.?\s+(\d{1,2})(?:st|nd|rd|th)?,?\s+(\d{4})\b/,
        read: (m) => {
            const month = monthFromName(m[1]);
            return month === undefined ? null : makeDate(Number(m[3]), month, Number(m[2]));
        },
    },
    {
        // 2 July 2027 | 2nd July 2027 | 2 Julai 2027 | 2 Okt 2027
        regex: /\b(\d{1,2})(?:st|nd|rd|th)?\s+([A-Za-z]{3,9})\.?,?\s+(\d{4})\b/,
        read: (m) => {
            const month = monthFromName(m[2]);
            return month === undefined ? null : makeDate(Number(m[3]), month, Number(m[1]));
        },
    },
    {
        // 2027-07-02
        regex: /\b(\d{4})-(\d{1,2})-(\d{1,2})\b/,
        read: (m) => makeDate(Number(m[1]), Number(m[2]) - 1, Number(m[3])),
    },
    {
        // 02/07/2027 | 02-07-2027 | 02.07.2027 (day first, the Malaysian convention)
        regex: /\b(\d{1,2})[/.-](\d{1,2})[/.-](\d{4})\b/,
        read: (m) => makeDate(Number(m[3]), Number(m[2]) - 1, Number(m[1])),
    },
];

// Finds the first real date anywhere inside a piece of text.
const findDate = (text: string): { date: Date; text: string } | null => {
    for (const { regex, read } of DATE_PATTERNS) {
        const match = regex.exec(text);
        if (!match) continue;
        const date = read(match);
        if (date) return { date, text: match[0] };
    }
    return null;
};

/* ------------------------------- PAGE PARSING ------------------------------ */

// Removes JSX leftovers so only readable text remains.
const cleanText = (raw: string): string =>
    raw
        .replace(/<br\s*\/?>/gi, ' ') // line breaks become a space, so words don't merge
        .replace(/\{\s*(['"`])([\s\S]*?)\1\s*\}/g, ' $2 ') // {'text'} and {" "} -> text / space
        .replace(/\{[^}]*\}/g, '') // drop other {expressions}
        .replace(/<[^>]+>/g, ' ') // drop nested tags (replaced by a space)
        .replace(/&amp;/g, '&')
        .replace(/&nbsp;/g, ' ')
        .replace(/&quot;/g, '"')
        .replace(/&#39;|&apos;|&rsquo;|&lsquo;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code))) // &#8217; etc.
        .replace(/\s+/g, ' ')
        .replace(/\s+([.,:;!?])/g, '$1') // no stray space before punctuation
        .trim();

const humanize = (slug: string) =>
    slug
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/([A-Za-z])(\d)/g, '$1 $2')
        .trim();

// First capture group of the first match, cleaned. Empty string if nothing found.
const pick = (source: string, regex: RegExp): string => {
    const match = regex.exec(source);
    return match ? cleanText(match[1]) : '';
};

// "Main Page" / "main-page" / "MAINPAGE" -> "mainpage"
const normalizeTag = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '');

const TARGET_TAGS = CATEGORY_TAGS.map(normalizeTag).filter(Boolean);
const INCLUDE_FOLDER_KEYS = INCLUDE_FOLDERS.map(normalizeTag).filter(Boolean);

// One pattern per category name. It finds the name inside a tag line even when the
// separators differ ("Clubs & Societies", "Clubs-Societies", "ClubsSocieties").
const TAG_PATTERNS: RegExp[] = CATEGORY_TAGS.map((tag) => {
    const chunks = tag.toLowerCase().match(/[a-z0-9]+/g);
    return chunks ? new RegExp(`(^|[^a-z0-9])${chunks.join('[^a-z0-9]*')}(?![a-z0-9])`, 'gi') : null;
}).filter((pattern): pattern is RegExp => pattern !== null);

// Separator characters are swapped for private symbols inside a category name, so a
// name such as "Clubs & Societies" is not cut in half when the line is split.
const SEP_TO_PRIVATE: Record<string, string> = {
    ',': '\uE000',
    ';': '\uE001',
    '|': '\uE002',
    '/': '\uE003',
    '&': '\uE004',
    '·': '\uE005',
    '•': '\uE006',
};
const PRIVATE_TO_SEP: Record<string, string> = Object.fromEntries(Object.entries(SEP_TO_PRIVATE).map(([sep, priv]) => [priv, sep]));

const protectNames = (text: string): string => {
    let out = text;
    for (const pattern of TAG_PATTERNS) {
        out = out.replace(pattern, (full: string, pre: string) => {
            const name = full.slice(pre.length);
            return pre + name.replace(/[,;|/&·•]/g, (c) => SEP_TO_PRIVATE[c]).replace(/\s+(and|dan)\s+/gi, (_m, word: string) => ` \uE007${word}\uE007 `);
        });
    }
    return out;
};

const restoreNames = (text: string): string => text.replace(/[\uE000-\uE006]/g, (c) => PRIVATE_TO_SEP[c]).replace(/\uE007/g, '');

// Splits a mixed tag line on commas, semicolons, pipes, slashes, "&", bullets and the
// words "and" / "dan", while keeping the category's own name in one piece:
// "Academic, Main Page and Tingkatan 1" -> three tags.
const splitTags = (text: string): string[] =>
    protectNames(text)
        .split(/\s*(?:,|;|\||\/|&|·|•|\s+dan\s+|\s+and\s+)\s*/i)
        .map((tag) => restoreNames(tag).trim())
        .filter(Boolean);

// All <h6> lines in the page (some pages have more than one).
const readH6Lines = (source: string): { text: string; index: number }[] => {
    const lines: { text: string; index: number }[] = [];
    const regex = /<h6[^>]*>([\s\S]*?)<\/h6>/g;
    let m: RegExpExecArray | null;
    while ((m = regex.exec(source))) {
        const text = cleanText(m[1]);
        if (text) lines.push({ text, index: m.index });
    }
    return lines;
};

/* ------------------------------- TITLE READING ----------------------------- */

// Removes the site name from a browser-tab title: "Full Title | SMKDJ" -> "Full Title"
const stripSiteName = (title: string) => title.replace(/\s*[|–—-]\s*(?:SMKDJ|SMK\s*Damansara\s*Jaya)[^|]*$/i, '').trim();

// True when the tag's attributes contain a BIG text size: text-2xl ... text-9xl,
// or an arbitrary size of 24px / 1.5rem and up (text-[40px]). Small sizes such as
// text-sm, text-lg or text-[12px] are NOT big, so author/date lines are never
// mistaken for the title. Works with md:text-4xl, !text-4xl, className={`text-4xl`}.
const isBigClass = (attrs: string): boolean => {
    const regex = /(?:^|[\s"'`:!{(,])text-(2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl|\[(\d+(?:\.\d+)?)(px|rem|em)\])(?=$|[\s"'`,)}])/g;
    let m: RegExpExecArray | null;
    while ((m = regex.exec(attrs))) {
        if (!m[1].startsWith('[')) return true;
        const size = Number(m[2]);
        if (m[3] === 'px' ? size >= 24 : size >= 1.5) return true;
    }
    return false;
};

// Looks up a plain string value in the page: const title = '...' | title: '...'
const readStringVariable = (source: string, name: string): string => {
    if (!/^[A-Za-z_]\w*$/.test(name)) return '';
    const regex = new RegExp('(?:(?:const|let|var)\\s+' + name + '\\s*(?::[^=]+?)?=|\\b' + name + '\\s*:)\\s*([\'"`])((?:\\\\.|(?!\\1)[\\s\\S])*?)\\1');
    const m = regex.exec(source);
    if (!m || m[2].includes('${')) return '';
    return m[2].replace(/\\(['"`\\])/g, '$1');
};

// Turns {title} / {item.title} inside a title element into the string it holds,
// when that string is defined in the same file.
const resolveExpressions = (raw: string, source: string): string =>
    raw.replace(/\{\s*([A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*)\s*\}/g, (whole, expr: string) => {
        const name = expr.split('.').pop() as string;
        const value = readStringVariable(source, name);
        return value ? ` ${value} ` : whole;
    });

const readDocumentTitle = (source: string): string => {
    const regex = /document\.title\s*=\s*(['"`])((?:\\.|(?!\1)[\s\S])*?)\1/g;
    let m: RegExpExecArray | null;
    while ((m = regex.exec(source))) {
        if (m[2].includes('${')) continue;
        const text = cleanText(stripSiteName(m[2].replace(/\\(['"`\\])/g, '$1')));
        if (text) return text;
    }
    return '';
};

const readTitleVariable = (source: string): string => {
    for (const name of ['pageTitle', 'title', 'Title', 'heading']) {
        const value = readStringVariable(source, name);
        if (value) return cleanText(stripSiteName(value));
    }
    return '';
};

const readTitle = (source: string): { title: string; from: string } => {
    const h6 = /<h6[^>]*>[\s\S]*?<\/h6>/.exec(source);
    const afterH6 = h6 ? h6.index + h6[0].length : 0;

    // 1) Big <p> / heading. The first one AFTER the category <h6> wins:
    //    <p className="text-4xl font-bold text-black">Full Title Here</p>
    //    A big element found only BEFORE the <h6> is kept as a backup.
    const bigRegex = /<(p|h1|h2|h3|h4|h5)\b([^>]*)>([\s\S]*?)<\/\1>/g;
    let backup = '';
    let m: RegExpExecArray | null;
    while ((m = bigRegex.exec(source))) {
        const isHeadingTag = m[1] !== 'p';
        if (!isHeadingTag && !isBigClass(m[2])) continue;

        const text = cleanText(resolveExpressions(m[3], source));
        if (!text) continue;

        if (m.index >= afterH6) {
            return { title: text, from: h6 ? 'big title after <h6>' : 'first big heading' };
        }
        if (!backup) backup = text;
    }
    if (backup) return { title: backup, from: 'big heading before <h6>' };

    // 2) The first <p> with text right after the <h6>, whatever its class
    if (h6) {
        const pRegex = /<p\b[^>]*>([\s\S]*?)<\/p>/g;
        pRegex.lastIndex = afterH6;
        while ((m = pRegex.exec(source))) {
            if (m.index - afterH6 > 2500) break;
            const text = cleanText(resolveExpressions(m[1], source));
            if (text) return { title: text, from: 'first <p> after <h6>' };
        }
    }

    // 3) document.title = 'Full Title | SMKDJ'
    const docTitle = readDocumentTitle(source);
    if (docTitle) return { title: docTitle, from: 'document.title' };

    // 4) <title> / <Helmet><title>
    const titleTag = pick(source, /<title[^>]*>([\s\S]*?)<\/title>/);
    if (titleTag) return { title: stripSiteName(titleTag), from: '<title>' };

    // 5) const title = '...'
    const variable = readTitleVariable(source);
    if (variable) return { title: variable, from: 'title variable' };

    return { title: '', from: 'none' };
};

// Date: the text after the date icon. Falls back to the first real date close to
// the page header if the icon block is missing or written differently.
const readDate = (source: string, headerIndex: number): { date: Date | null; text: string } => {
    const iconText = pick(source, /dateandtime\.png[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/);
    const fromIcon = findDate(iconText);
    if (fromIcon) return fromIcon;

    const start = Math.max(0, headerIndex);
    const fromHeader = findDate(source.slice(start, start + 2500));
    if (fromHeader) return fromHeader;

    return { date: null, text: iconText };
};

const extractItem = (path: string, source: string, routes: RouteMaps): PageItem | null => {
    const parts = path.split('/');
    const folder = parts[parts.length - 2];
    const slug = parts[parts.length - 1].replace(/\.tsx$/, '');
    const key = `${folder}/${slug}`;

    // Collect tags from every <h6> in the page, in any mix of separators.
    const h6Lines = readH6Lines(source);
    const tags = Array.from(new Set(h6Lines.flatMap((line) => splitTags(line.text))));

    const inIncludedFolder = parts.slice(0, -1).some((part) => INCLUDE_FOLDER_KEYS.includes(normalizeTag(part)));
    const hasTargetTag = tags.some((tag) => TARGET_TAGS.includes(normalizeTag(tag)));

    // Neither in the folder nor tagged for this category -> skip the page.
    if (!inIncludedFolder && !hasTargetTag) return null;

    const author = pick(source, /userimages\.png[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/);
    const { date, text: dateText } = readDate(source, h6Lines[0]?.index ?? 0);

    const to = routes.byKey[key] ?? routes.bySlug[slug];
    if (!to) {
        console.warn(`[MainPageList] No route found in router for "${key}", using ${ROUTE_FALLBACK_BASE}/${slug}`);
    }

    const { title, from } = readTitle(source);
    if (!title) {
        console.warn(`[MainPageList] Could not read a title from "${key}", using the file name instead`);
    }

    return {
        key,
        folder,
        slug,
        to: to ?? `${ROUTE_FALLBACK_BASE}/${slug}`,
        title: title || humanize(slug),
        titleSource: title ? from : 'file name',
        tags: tags.length > 0 ? tags : [CATEGORY_TAGS[0]],
        author: author || 'SMKDJ',
        date,
        dateText,
    };
};

// Newest first. Pages without a readable date go to the bottom, A-Z.
const sortItems = (items: PageItem[]) =>
    [...items].sort((a, b) => {
        if (a.date && b.date && a.date.getTime() !== b.date.getTime()) return b.date.getTime() - a.date.getTime();
        if (a.date && !b.date) return -1;
        if (!a.date && b.date) return 1;
        return a.title.localeCompare(b.title);
    });

const formatDate = (item: PageItem) =>
    item.date ? item.date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : item.dateText || 'No date';

/* -------------------------------- COMPONENT -------------------------------- */

const MainPageList = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl';
    const [items, setItems] = useState<PageItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        document.title = 'Laman Utama | SMKDJ';
    }, []);

    useEffect(() => {
        let cancelled = false;

        const load = async () => {
            let routes: RouteMaps = { byKey: {}, bySlug: {} };
            try {
                routes = buildRouteMaps();
            } catch (error) {
                console.warn('[MainPageList] Could not read router file', error);
            }

            const entries = Object.entries(sourceLoaders);
            const results = await Promise.all(
                entries.map(async ([path, loader]) => {
                    try {
                        return extractItem(path, await loader(), routes);
                    } catch (error) {
                        console.warn(`[MainPageList] Could not read ${path}`, error);
                        return null;
                    }
                })
            );

            const matched = results.filter((item): item is PageItem => item !== null);

            if (import.meta.env.DEV) {
                console.info(`[MainPageList] ${matched.length} of ${entries.length} pages matched`);
                console.table(matched.map((item) => ({ page: item.key, titleFrom: item.titleSource, title: item.title })));
            }

            if (!cancelled) {
                setItems(sortItems(matched));
                setLoading(false);
            }
        };

        load();
        return () => {
            cancelled = true;
        };
    }, []);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return items;
        return items.filter((item) => item.title.toLowerCase().includes(q) || item.tags.some((tag) => tag.toLowerCase().includes(q)));
    }, [items, query]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const currentPage = Math.min(page, totalPages);
    const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

    return (
        <div className="w-full bg-white pb-20 pt-8">
            <section className="container mx-auto px-4 md:px-5">
                <div className={`heading mt-10 text-center ${isRtl ? 'rtl:lg:text-right' : 'ltr:lg:text-left'}`}>
                    <h6 className="!text-secondary">{CATEGORY_TAGS[0]}</h6>
                    <p className="text-3xl font-bold text-black md:text-4xl">{PAGE_HEADING}</p>
                </div>

                <div className="mt-6">
                    <input
                        type="search"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setPage(1);
                        }}
                        placeholder="Cari tajuk..."
                        className="border-gray-300 focus:border-blue-600 w-full rounded-lg border bg-white px-4 py-2 text-sm text-black outline-none md:w-80"
                    />
                </div>

                {loading ? (
                    <p className="text-gray-600 mt-10 text-center text-sm">Memuatkan...</p>
                ) : visible.length === 0 ? (
                    <p className="text-gray-600 mt-10 text-center text-sm">Tiada maklumat dijumpai.</p>
                ) : (
                    <ul className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {visible.map((item) => (
                            <li key={item.key}>
                                <Link to={item.to} className="border-gray-300 block h-full rounded-lg border bg-white p-5 shadow-md transition hover:shadow-lg">
                                    <span className="text-blue-600 text-xs font-semibold uppercase">{item.tags.join(' · ')}</span>
                                    <h3 className="mt-2 break-words text-lg font-bold text-black">{item.title}</h3>

                                    <div className="mt-4 flex flex-wrap items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <img src="/assets/images/userimages.png" alt="Author" className="h-6 w-6 object-contain" />
                                            <p className="text-xs font-semibold text-black">{item.author}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <img src="/assets/images/dateandtime.png" alt="Date" className="h-4 w-4 object-contain" />
                                            <p className="text-xs font-semibold text-black">{formatDate(item)}</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}

                {totalPages > 1 && (
                    <div className="mt-8 flex items-center justify-center gap-3">
                        <button
                            type="button"
                            disabled={currentPage === 1}
                            onClick={() => setPage(currentPage - 1)}
                            className="border-gray-300 hover:bg-gray-100 rounded-lg border bg-white px-4 py-2 text-sm font-semibold text-black transition disabled:opacity-40"
                        >
                            Prev
                        </button>
                        <span className="text-sm font-medium text-black">
                            {currentPage} / {totalPages}
                        </span>
                        <button
                            type="button"
                            disabled={currentPage === totalPages}
                            onClick={() => setPage(currentPage + 1)}
                            className="border-gray-300 hover:bg-gray-100 rounded-lg border bg-white px-4 py-2 text-sm font-semibold text-black transition disabled:opacity-40"
                        >
                            Next
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default MainPageList;
