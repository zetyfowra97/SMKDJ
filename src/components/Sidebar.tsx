import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type Post = {
    id: number;
    title: string;
    to: string;
};

type Comment = {
    id: number;
    author: string;
    postTitle: string;
    to: string;
};

/* ------------------------------------------------------------------ */
/* RECENT POSTS (automatic: the 5 latest posts from ANY category)      */
/*                                                                     */
/* HOW IT WORKS                                                        */
/* 1. Vite reads the source text of every post file in src/pages/.     */
/*    The path starts with "/src/pages" so it works from any folder.   */
/* 2. A file is a post if it has ANY of these:                         */
/*       - an <h6> category line (plain text OR clickable buttons)     */
/*       - a <CategoryLine ... /> (or any <Category... />) component   */
/*       - the big title: <p className="text-4xl font-bold ...">       */
/* 3. TITLE = the big text-4xl <p>. If none, the first <p> after the   */
/*    category area. If still none, the file name is used.             */
/* 4. DATE  = the first date found after the category area. These      */
/*    formats are understood (any year, 2027 and above too):           */
/*       12 November 2020   |  March 10, 2025  |  10 Mac 2025          */
/*       2025-03-10         |  10/03/2025                              */
/*    English and Malay month names both work.                         */
/* 5. LINK  = "/" + the file name (TangkasBeraksi.tsx -> /TangkasBeraksi) */
/* 6. Newest date first, only the top RECENT_COUNT are shown.          */
/*    Posts without a readable date go to the bottom.                  */
/*                                                                     */
/* Add a new post file and it appears here by itself.                  */
/* ------------------------------------------------------------------ */

const RECENT_COUNT = 5;

const POST_SOURCES = import.meta.glob<string>(
    ['/src/pages/**/*.tsx', '!/src/pages/**/index.tsx', '!/src/pages/Category/**', '!/src/pages/**/*List.tsx'],
    // If your Vite is older than v5 and this line errors, use:  { as: 'raw', eager: true }
    { query: '?raw', import: 'default', eager: true }
);

const MONTHS: Record<string, number> = {
    jan: 1,
    january: 1,
    januari: 1,
    feb: 2,
    february: 2,
    februari: 2,
    mar: 3,
    march: 3,
    mac: 3,
    apr: 4,
    april: 4,
    may: 5,
    mei: 5,
    jun: 6,
    june: 6,
    jul: 7,
    july: 7,
    julai: 7,
    aug: 8,
    august: 8,
    ogos: 8,
    sep: 9,
    sept: 9,
    september: 9,
    oct: 10,
    october: 10,
    okt: 10,
    oktober: 10,
    nov: 11,
    november: 11,
    dec: 12,
    december: 12,
    dis: 12,
    disember: 12,
};
// longest names first so "september" is tried before "sep"
const MONTH_RE = Object.keys(MONTHS)
    .sort((a, b) => b.length - a.length)
    .join('|');

const DATE_PATTERNS: { re: RegExp; read: (m: RegExpMatchArray) => [number, number, number] }[] = [
    // 12 November 2020 / 12th Nov, 2020
    {
        re: new RegExp(`\\b(\\d{1,2})(?:st|nd|rd|th)?\\s+(${MONTH_RE})\\.?,?\\s+(\\d{4})\\b`, 'i'),
        read: (m) => [+m[3], MONTHS[m[2].toLowerCase()], +m[1]],
    },
    // March 10, 2025 / Mar 10th 2025
    {
        re: new RegExp(`\\b(${MONTH_RE})\\.?\\s+(\\d{1,2})(?:st|nd|rd|th)?,?\\s+(\\d{4})\\b`, 'i'),
        read: (m) => [+m[3], MONTHS[m[1].toLowerCase()], +m[2]],
    },
    // 2025-03-10
    { re: /\b(\d{4})-(\d{1,2})-(\d{1,2})\b/, read: (m) => [+m[1], +m[2], +m[3]] },
    // 10/03/2025, 10-03-2025, 10.03.2025 (day first)
    { re: /\b(\d{1,2})[/.-](\d{1,2})[/.-](\d{4})\b/, read: (m) => [+m[3], +m[2], +m[1]] },
];

// Big post title paragraph, e.g. <p className="text-4xl font-bold text-black">Title</p>
const TITLE_RE = /<p[^>]*text-4xl[^>]*>([\s\S]*?)<\/p>/;

// A page is a post if it has a category area (h6 or a Category... component) or the big title
const hasCategoryLine = (src: string): boolean => /<h6[\s>]/.test(src) || /<Category[A-Za-z]*[\s/>]/.test(src) || TITLE_RE.test(src);

// Where the category area ends (works with plain h6 text, clickable buttons or a component)
const categoryLineEnd = (src: string): number => {
    const h6 = src.match(/<h6[\s\S]*?<\/h6>/);
    if (h6 && h6.index !== undefined) return h6.index + h6[0].length;

    const comp = src.match(/<Category[A-Za-z]*[\s\S]*?\/>/);
    if (comp && comp.index !== undefined) return comp.index + comp[0].length;

    const title = src.match(TITLE_RE);
    if (title && title.index !== undefined) return title.index;

    return 0;
};

const cleanText = (s: string) =>
    s
        .replace(/\{[^}]*\}/g, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

// Title = big text-4xl <p> if present, otherwise the first <p> after the category area
const readTitle = (src: string, fileName: string): string => {
    const big = src.match(TITLE_RE);
    const p = big || src.slice(categoryLineEnd(src)).match(/<p[^>]*>([\s\S]*?)<\/p>/);
    const title = p ? cleanText(p[1]) : '';
    return title || fileName.replace(/([a-z])([A-Z])/g, '$1 $2');
};

// First date after the category area, as a number like 20250310 (0 = not found)
const readDate = (src: string): number => {
    const part = src.slice(categoryLineEnd(src));
    let best: { idx: number; value: number } | null = null;

    for (const { re, read } of DATE_PATTERNS) {
        const m = part.match(re);
        if (!m || m.index === undefined) continue;
        const [y, mo, d] = read(m);
        if (!mo || mo < 1 || mo > 12 || d < 1 || d > 31) continue;
        if (!best || m.index < best.idx) best = { idx: m.index, value: y * 10000 + mo * 100 + d };
    }

    return best ? best.value : 0;
};

const POSTS: Post[] = Object.entries(POST_SOURCES)
    .filter(([, src]) => hasCategoryLine(src))
    .map(([path, src]) => {
        const file = (path.split('/').pop() || '').replace(/\.tsx$/, '');
        return { title: readTitle(src, file), to: '/' + file, date: readDate(src) };
    })
    .sort((a, b) => b.date - a.date || a.to.localeCompare(b.to))
    .slice(0, RECENT_COUNT)
    .map((p, i) => ({ id: i + 1, title: p.title, to: p.to }));

// Replace the links with your real post URLs
const COMMENTS: Comment[] = [
    {
        id: 1,
        author: 'TJ Ooi',
        postTitle: 'Program Sekolahku Sejahtera: Sepakat dan Selamat (Kesedaran Hentikan Buli).',
        to: '/ProgramSekolahkuSejahtera',
    },
];

/* ------------------------------------------------------------------ */
/* SITE SEARCH (automatic)                                             */
/*                                                                     */
/* Searches EVERYTHING on the website:                                 */
/*   1. every post file (title, category names, full body text)        */
/*   2. the website pages listed in STATIC_PAGES below                 */
/*   3. the category list pages                                        */
/*                                                                     */
/* New post files are searchable by themselves. To make a menu page    */
/* (that is not a post file) searchable, add one line to STATIC_PAGES. */
/* If a post file has the same link as a STATIC_PAGES line, the post   */
/* wins (so nothing shows twice).                                      */
/* ------------------------------------------------------------------ */

type StaticPage = { title: string; to: string; trail?: string; external?: boolean };

const STATIC_PAGES: StaticPage[] = [
    { title: 'Home', to: '/' },

    // About
    { title: 'About', to: '/about-us', trail: 'About' },
    { title: 'School Emblem', to: '/SchoolEmblem', trail: 'About' },
    { title: 'National Anthems', to: '/NationalAnthems', trail: 'About' },
    { title: 'School Song', to: '/SchoolSong', trail: 'About' },
    { title: 'Youtube Channel', to: 'https://www.youtube.com/channel/UCvTBr0RZGZYU-Ixz1Y8Xwqw', trail: 'About', external: true },
    { title: 'Vision, Mission, Motto', to: '/vissionmissionmotto', trail: 'About' },
    { title: 'Guiding Principle', to: '/GuidingPrinciple', trail: 'About' },
    { title: "Principal's Message", to: '/Pentadbir', trail: 'About' },
    { title: 'Shop', to: '/Shop', trail: 'About' },
    { title: 'Facilities', to: '/Facilities', trail: 'About' },
    { title: 'Webmail', to: 'https://outlook.office.com/?client_id=4345a7b9-9a63-4910-a426-35363201d503', trail: 'About › Facilities', external: true },
    { title: 'ICT Status and Tech Support', to: '/ICTStatus', trail: 'About › Facilities' },

    // Main pages
    { title: 'Events', to: '/Events' },
    { title: 'Gallery', to: '/Gallery' },
    { title: 'PIBG', to: '/PIBG' },
    { title: 'SMKDJ News', to: '/SMKDJNews', trail: 'News' },

    // Important Updates
    { title: 'Important Updates', to: '/ImportantUpdates' },
    { title: 'Official School Timetable', to: '/OfficialSchoolTimetable', trail: 'Important Updates' },
    { title: 'Academic', to: '/AcademicMenu', trail: 'Important Updates' },
    { title: 'Kehadiran', to: 'https://public.moe.gov.my/', trail: 'Important Updates › Academic', external: true },
    { title: 'Past Year Exam Papers', to: '/PastYearExamPapers', trail: 'Important Updates › Academic' },
    {
        title: 'Results Query',
        to: 'https://forms.cloud.microsoft/pages/responsepage.aspx?id=8nUdN-fBJ0u9h0zCk1vZt_Jqw-FOSchLgh6m88G3iLxUQUJXVVJPU0FCWjgzSzJRNVBUTlBQMlhRRy4u&route=shorturl',
        trail: 'Important Updates › Academic',
        external: true,
    },
    { title: 'FORMAT SPM 2021', to: '/FormatSPM2021', trail: 'Important Updates › Academic' },
    { title: 'Sijil Pelajaran Malaysia', to: '/SPM', trail: 'Important Updates › Academic' },
    { title: 'Tingkatan 1', to: '/Tingkatan1', trail: 'Important Updates › Academic' },
    { title: 'HEM', to: '/HEM', trail: 'Important Updates' },

    // Co-curriculum
    { title: 'Co-curriculum', to: '/ClubsSocieties', trail: 'Important Updates' },
    { title: 'Announcements', to: '/Announcements', trail: 'Important Updates › Co-curriculum' },
    { title: 'Uniform Units', to: '/UniformUnits', trail: 'Important Updates › Co-curriculum' },
    { title: 'Clubs & Societies', to: '/ClubsSocieties', trail: 'Important Updates › Co-curriculum' },
    { title: 'Sports and Games', to: '/SportsAndGames', trail: 'Important Updates › Co-curriculum' },
    { title: 'Lembaga Pengawas', to: '/LembagaPengawas', trail: 'Important Updates › Co-curriculum › Lembaga' },
    { title: 'Library (PSS)', to: '/Library', trail: 'Important Updates › Co-curriculum › Lembaga' },
    { title: 'Surau', to: '/Surau', trail: 'Important Updates › Co-curriculum › Lembaga' },

    // Uniform units
    { title: '37th Petaling Bear Pride', to: '/ThirtySeventhPetalingBearPride', trail: 'Co-curriculum › Uniform Units' },
    { title: 'Bulan Sabit Merah Malaysia', to: '/BulanSabitMerahMalaysia', trail: 'Co-curriculum › Uniform Units' },
    { title: 'Girl Guides', to: '/GirlGuides', trail: 'Co-curriculum › Uniform Units' },
    { title: 'Kadet Polis', to: '/KadetPolis', trail: 'Co-curriculum › Uniform Units' },
    { title: 'Kadet Remaja Sekolah', to: '/KadetRemajaSekolah', trail: 'Co-curriculum › Uniform Units' },
    { title: 'St John’s Ambulance Malaysia', to: '/StJohnsAmbulanceMalaysia', trail: 'Co-curriculum › Uniform Units' },
    { title: 'Taekwando WTF', to: '/TaekwandoWTF', trail: 'Co-curriculum › Uniform Units' },
    { title: 'Wushu', to: '/Wushu', trail: 'Co-curriculum › Uniform Units' },

    // Clubs & societies
    { title: 'Bahasa & Warisan', to: '/BahasaWarisan', trail: 'Co-curriculum › Clubs & Societies' },
    { title: 'Bahasa Cina', to: '/BahasaCina', trail: 'Co-curriculum › Clubs & Societies' },
    { title: 'Cheerleading', to: '/Cheerleading', trail: 'Co-curriculum › Clubs & Societies' },
    { title: 'Christian Fellowship', to: '/ChristianFellowship', trail: 'Co-curriculum › Clubs & Societies' },
    { title: 'English Club', to: '/EnglishClub', trail: 'Co-curriculum › Clubs & Societies' },
    { title: 'Kelab 1 Malaysia', to: '/Kelab1Malaysia', trail: 'Co-curriculum › Clubs & Societies' },
    { title: 'Kelab Kerjaya', to: '/KelabKerjaya', trail: 'Co-curriculum › Clubs & Societies' },
    { title: 'KHB & Kulinari', to: '/KHBKulinari', trail: 'Co-curriculum › Clubs & Societies' },
    { title: 'Koir & Muzik', to: '/KoirMuzik', trail: 'Co-curriculum › Clubs & Societies' },
    { title: 'Koperasi & Pengguna', to: '/KoperasiPengguna', trail: 'Co-curriculum › Clubs & Societies' },
    { title: 'Pencegah Jenayah', to: '/PencegahJenayah', trail: 'Co-curriculum › Clubs & Societies' },
    { title: 'Pendidikan Islam', to: '/PendidikanIslam', trail: 'Co-curriculum › Clubs & Societies' },
    { title: 'Pendidikan Seni Visual', to: '/PendidikanSeniVisual', trail: 'Co-curriculum › Clubs & Societies' },
    { title: 'Persatuan Pelajar Buddha', to: '/PersatuanPelajarBuddha', trail: 'Co-curriculum › Clubs & Societies' },
    { title: 'Robotics', to: '/Robotics', trail: 'Co-curriculum › Clubs & Societies' },
    { title: 'Sains & Matematik', to: '/SainsMatematik', trail: 'Co-curriculum › Clubs & Societies' },
    { title: 'SLAD & Prostar', to: '/SLADProstar', trail: 'Co-curriculum › Clubs & Societies' },

    // Sports and games
    { title: 'Bola Baling', to: '/BolaBaling', trail: 'Co-curriculum › Sports and Games' },
    { title: 'Bola Tampar', to: '/BolaTampar', trail: 'Co-curriculum › Sports and Games' },
    { title: 'Bola Jaring', to: '/BolaJaring', trail: 'Co-curriculum › Sports and Games' },
    { title: 'Ping Pong', to: '/PingPong', trail: 'Co-curriculum › Sports and Games' },
    { title: 'Badminton', to: '/Badminton', trail: 'Co-curriculum › Sports and Games' },
    { title: 'Scrabble & Catur', to: '/ScrabbleCatur', trail: 'Co-curriculum › Sports and Games' },
    { title: 'Bola Sepak', to: '/BolaSepak', trail: 'Co-curriculum › Sports and Games' },
    { title: 'Bola Keranjang', to: '/BolaKeranjang', trail: 'Co-curriculum › Sports and Games' },
    { title: 'Balapan & Padang / QM', to: '/BalapanPadang', trail: 'Co-curriculum › Sports and Games' },
    { title: 'Softball', to: '/Softball', trail: 'Co-curriculum › Sports and Games' },
];

// Category list pages (same names and links as the "Most Used Categories" panel)
const CATEGORY_PAGES: { title: string; to: string }[] = [
    { title: 'Academic', to: '/AcademicList' },
    { title: 'Academic-Announcements', to: '/AcademicAnnouncementList' },
    { title: 'Tingkatan 1', to: '/Tingkatan1List' },
    { title: 'SPM', to: '/SPMList' },
    { title: 'Co-Curriculum', to: '/CoCurriculumList' },
    { title: 'Clubs & Societies', to: '/ClubsSocietiesList' },
    { title: 'Gallery', to: '/GalleryList' },
    { title: 'PIBG', to: '/PIBGList' },
    { title: 'Main Page', to: '/MainPageList' },
    { title: 'Librarian', to: '/LibrarianList' },
];

type SearchEntry = {
    title: string;
    to: string;
    kind: 'Post' | 'Page' | 'Category';
    trail: string;
    external?: boolean;
    body: string; // original text, used for the snippet
    titleL: string;
    tagsL: string;
    bodyL: string;
    date: number;
};

type SearchHit = { entry: SearchEntry; score: number; snippet: string };

const normalize = (s: string) =>
    s
        .toLowerCase()
        .replace(/&amp;/g, '&')
        .replace(/[^a-z0-9\u00C0-\u024F]+/g, ' ')
        .trim();

// Category names written in a post: <h6>Academic, Gallery</h6> or <CategoryLine names={['Academic']} />
const extractTags = (src: string): string[] => {
    const h6 = src.match(/<h6[^>]*text-secondary[^>]*>([\s\S]*?)<\/h6>/) || src.match(/<h6[^>]*>([\s\S]*?)<\/h6>/);
    if (h6) {
        const tags = h6[1]
            .replace(/\{[^}]*\}/g, ' ')
            .replace(/<[^>]+>/g, ',')
            .replace(/&amp;/g, '&')
            .split(/[,·|;]/)
            .map((t) => t.replace(/\s+/g, ' ').trim())
            .filter(Boolean);
        if (tags.length) return tags;
    }

    const line = src.match(/<Category[A-Za-z]*[^>]*names=\{\[([\s\S]*?)\]\}/);
    if (line) {
        return Array.from(line[1].matchAll(/(['"`])(.*?)\1/g)).map((m) => m[2].trim());
    }

    return [];
};

const SEARCH_INDEX: SearchEntry[] = (() => {
    const list: SearchEntry[] = [];
    const seen = new Set<string>();

    const add = (p: {
        title: string;
        to: string;
        kind: SearchEntry['kind'];
        trail?: string;
        tags?: string;
        body?: string;
        date?: number;
        external?: boolean;
    }) => {
        // posts are unique by link; pages / categories by link + title
        const key = p.kind === 'Post' ? 'post|' + p.to : p.to + '|' + p.title;
        if (seen.has(key)) return;
        // a page that points to the same link as an existing post is skipped (the post is richer)
        if (p.kind === 'Page' && seen.has('post|' + p.to)) return;
        seen.add(key);

        list.push({
            title: p.title,
            to: p.to,
            kind: p.kind,
            trail: p.trail ?? '',
            external: p.external,
            body: p.body ?? '',
            titleL: normalize(p.title),
            tagsL: normalize(p.tags ?? ''),
            bodyL: normalize(p.body ?? ''),
            date: p.date ?? 0,
        });
    };

    // 1) Posts: every post file (title + categories + body text)
    Object.entries(POST_SOURCES).forEach(([path, src]) => {
        if (!hasCategoryLine(src)) return;
        const file = (path.split('/').pop() || '').replace(/\.tsx$/, '');
        const body = cleanText(src.replace(/^\s*import .*$/gm, '')).slice(0, 8000);
        add({
            title: readTitle(src, file),
            to: '/' + file,
            kind: 'Post',
            tags: extractTags(src).join(' '),
            body,
            date: readDate(src),
        });
    });

    // 2) Website pages
    STATIC_PAGES.forEach((p) => add({ title: p.title, to: p.to, kind: 'Page', trail: p.trail, external: p.external }));

    // 3) Categories
    CATEGORY_PAGES.forEach((c) => add({ title: c.title, to: c.to, kind: 'Category', tags: c.title }));

    return list;
})();

const makeSnippet = (body: string, terms: string[]) => {
    if (!body) return '';
    const lower = body.toLowerCase();
    const idx = terms.map((t) => lower.indexOf(t)).find((i) => i >= 0) ?? -1;
    if (idx < 0) return '';
    const start = Math.max(0, idx - 40);
    return (start > 0 ? '…' : '') + body.slice(start, idx + 100).trim() + '…';
};

// Every word typed must match. Title matches rank highest, then categories, then body text.
const runSearch = (query: string): SearchHit[] => {
    const full = normalize(query);
    const terms = full.split(' ').filter(Boolean);
    if (!terms.length) return [];

    const hits: SearchHit[] = [];
    for (const e of SEARCH_INDEX) {
        let score = 0;
        let ok = true;
        for (const t of terms) {
            if (e.titleL.includes(t)) score += 5;
            else if (e.tagsL.includes(t)) score += 3;
            else if (e.bodyL.includes(t)) score += 1;
            else {
                ok = false;
                break;
            }
        }
        if (!ok) continue;
        if (e.titleL.includes(full)) score += 5; // whole phrase found in the title
        if (e.kind !== 'Post') score += 1; // pages / categories slightly ahead on ties
        hits.push({ entry: e, score, snippet: e.kind === 'Post' ? makeSnippet(e.body, terms) : '' });
    }

    return hits.sort((a, b) => b.score - a.score || b.entry.date - a.entry.date).slice(0, 8);
};

const SectionTitle = ({ children }: { children: string }) => (
    <>
        <h3 className="text-2xl font-bold text-[#222]">{children}</h3>

        {/* Divider: gray line with orange accent on the left */}
        <div className="relative mt-4 h-[5px] w-full bg-[#e5e5e5]">
            <span className="absolute left-0 top-0 h-full w-[62px] bg-[#e0832c]" />
        </div>
    </>
);

const RecentPosts = () => {
    return (
        <div className="border-gray-200 rounded-xl border bg-white p-5 shadow-sm">
            <SectionTitle>Recent Posts</SectionTitle>

            {POSTS.length === 0 ? (
                <p className="mt-6 text-base text-[#333]">No posts found.</p>
            ) : (
                <ul className="mt-6 space-y-4">
                    {POSTS.map((post) => (
                        <li key={post.id}>
                            <Link to={post.to} className="text-base leading-relaxed text-[#333] transition hover:text-[#e0832c]">
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const SearchBox = () => {
    const navigate = useNavigate();
    const boxRef = useRef<HTMLDivElement>(null);
    const [query, setQuery] = useState('');
    const [active, setActive] = useState(0);
    const [openList, setOpenList] = useState(false);

    const results = useMemo(() => runSearch(query), [query]);

    // close the results when clicking outside the search box
    useEffect(() => {
        const onDown = (e: MouseEvent) => {
            if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpenList(false);
        };
        document.addEventListener('mousedown', onDown);
        return () => document.removeEventListener('mousedown', onDown);
    }, []);

    const go = (hit: SearchHit) => {
        const e = hit.entry;
        setQuery('');
        setOpenList(false);
        if (e.external) window.open(e.to, '_blank', 'noopener,noreferrer');
        else navigate(e.to);
    };

    // Search button / Enter key: opens the highlighted result
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (results[active]) go(results[active]);
        else setOpenList(true);
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setOpenList(true);
            setActive((i) => Math.min(i + 1, results.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActive((i) => Math.max(i - 1, 0));
        } else if (e.key === 'Escape') {
            setOpenList(false);
        }
    };

    const showList = openList && query.trim().length > 0;

    return (
        // no overflow-hidden here, otherwise the results list would be clipped
        <div ref={boxRef} className="border-gray-200 relative rounded-xl border bg-white p-5 shadow-sm">
            <form onSubmit={handleSubmit} className="flex overflow-hidden rounded-lg">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setActive(0);
                        setOpenList(true);
                    }}
                    onFocus={() => setOpenList(true)}
                    onKeyDown={onKeyDown}
                    placeholder="Search …"
                    aria-label="Search the website"
                    className="w-full rounded-l-lg bg-[#f4f6f8] px-4 py-3 text-base text-[#333] outline-none"
                />
                <button type="submit" className="rounded-r-lg bg-[#e0832c] px-5 py-3 font-bold text-white transition hover:bg-[#c97024]">
                    Search
                </button>
            </form>

            {showList && (
                <div className="border-gray-200 absolute left-5 right-5 top-full z-50 -mt-2 max-h-[70vh] overflow-y-auto overscroll-contain rounded-lg border bg-white shadow-xl">
                    {results.length === 0 ? (
                        <p className="px-4 py-3 text-sm text-[#666]">No results for “{query.trim()}”</p>
                    ) : (
                        <ul>
                            {results.map((hit, i) => (
                                <li key={hit.entry.kind + hit.entry.to + hit.entry.title}>
                                    <button
                                        type="button"
                                        onMouseDown={(ev) => ev.preventDefault()}
                                        onMouseEnter={() => setActive(i)}
                                        onClick={() => go(hit)}
                                        className={`block w-full px-4 py-2.5 text-left ${i === active ? 'bg-[#fdf1e4]' : ''}`}
                                    >
                                        <span className="flex items-center gap-2">
                                            <span className="text-sm font-semibold text-[#222]">{hit.entry.title}</span>
                                            <span className="shrink-0 rounded bg-[#e0832c] px-1.5 py-0.5 text-[9px] font-bold uppercase text-white">
                                                {hit.entry.kind}
                                            </span>
                                        </span>
                                        {hit.entry.trail && <span className="block text-xs text-[#888]">{hit.entry.trail}</span>}
                                        {hit.snippet && <span className="mt-0.5 block text-xs text-[#666]">{hit.snippet}</span>}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

const RecentComments = () => {
    return (
        <div className="border-gray-200 rounded-xl border bg-white p-5 shadow-sm">
            <SectionTitle>Recent Comments</SectionTitle>

            {COMMENTS.length === 0 ? (
                <p className="mt-6 text-base text-[#333]">No comments to show.</p>
            ) : (
                <ul className="mt-6 space-y-4">
                    {COMMENTS.map((comment) => (
                        <li key={comment.id} className="text-base leading-relaxed text-[#444]">
                            {comment.author} on{' '}
                            <Link to={comment.to} className="text-[#444] underline transition hover:text-[#e0832c]">
                                {comment.postTitle}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const Sidebar = () => {
    return (
        <aside className="space-y-6">
            <RecentPosts />
            <SearchBox />
            <RecentComments />
        </aside>
    );
};

export default Sidebar;