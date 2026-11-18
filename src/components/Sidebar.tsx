import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type Post = {
    id: number;
    title: string;
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
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query.trim())}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="border-gray-200 flex overflow-hidden rounded-xl border bg-white p-5 shadow-sm">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search …"
                className="w-full rounded-l-lg bg-[#f4f6f8] px-4 py-3 text-base text-[#333] outline-none"
            />
            <button type="submit" className="rounded-r-lg bg-[#e0832c] px-5 py-3 font-bold text-white transition hover:bg-[#c97024]">
                Search
            </button>
        </form>
    );
};

const Sidebar = () => {
    return (
        <aside className="space-y-6">
            <RecentPosts />
            <SearchBox />
        </aside>
    );
};

export default Sidebar;
