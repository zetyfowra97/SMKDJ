import { FormEvent, useState } from 'react';
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
/* 2. Every file that has a category line is a post:                   */
/*       <h6 className="!text-secondary">Facilities, Gallery</h6>      */
/*    (or <CategoryLine names={['Facilities', 'Gallery']} />).         */
/* 3. TITLE = the first <p>...</p> after the category line             */
/*    (e.g. <p className="text-4xl font-bold text-black">Title</p>).   */
/*    If none is found, the file name is used as a fallback.           */
/* 4. DATE  = the first date found after the category line. These      */
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
    jan: 1, january: 1, januari: 1,
    feb: 2, february: 2, februari: 2,
    mar: 3, march: 3, mac: 3,
    apr: 4, april: 4,
    may: 5, mei: 5,
    jun: 6, june: 6,
    jul: 7, july: 7, julai: 7,
    aug: 8, august: 8, ogos: 8,
    sep: 9, sept: 9, september: 9,
    oct: 10, october: 10, okt: 10, oktober: 10,
    nov: 11, november: 11,
    dec: 12, december: 12, dis: 12, disember: 12,
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

// True when the page has a category line (so it is a real post)
const hasCategoryLine = (src: string): boolean => /<h6[^>]*text-secondary[^>]*>/.test(src) || /<CategoryLine/.test(src);

// Where the category line ends (0 if the page has none)
const categoryLineEnd = (src: string): number => {
    const h6 = src.match(/<h6[^>]*text-secondary[^>]*>[\s\S]*?<\/h6>/);
    if (h6 && h6.index !== undefined) return h6.index + h6[0].length;
    const line = src.match(/<CategoryLine[^>]*\/>/);
    if (line && line.index !== undefined) return line.index + line[0].length;
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

// First <p> after the category line = the big post title
const readTitle = (src: string, fileName: string): string => {
    const p = src.slice(categoryLineEnd(src)).match(/<p[^>]*>([\s\S]*?)<\/p>/);
    const title = p ? cleanText(p[1]) : '';
    return title || fileName.replace(/([a-z])([A-Z])/g, '$1 $2');
};

// First date after the category line, as a number like 20250310 (0 = not found)
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