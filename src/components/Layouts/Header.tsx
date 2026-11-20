import { useState, useRef, useLayoutEffect, useEffect, useMemo, ReactNode, CSSProperties } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { IRootState } from '../../store';
import { toggleDirection } from '../../store/themeConfigSlice';

const PANEL_W = 240; // max panel width (15rem = 240px), shrinks on small screens
const EDGE_GAP = 8; // breathing room from the screen edges

type Placement = { x: 'right' | 'left' | 'inline'; top: number; maxH: number; w: number };
type MenuItem = { label: string; to: string; external?: boolean };

/* ------------------------------------------------------------------ */
/* MENU DATA (edit these lists to add / remove / rename items)        */
/* ------------------------------------------------------------------ */

const CLUBS_SOCIETIES: MenuItem[] = [
    { label: 'Bahasa & Warisan', to: '/BahasaWarisan' },
    { label: 'Bahasa Cina', to: '/BahasaCina' },
    { label: 'Cheerleading', to: '/Cheerleading' },
    { label: 'Christian Fellowship', to: '/ChristianFellowship' },
    { label: 'English Club !', to: '/EnglishClub' },
    { label: 'Kelab 1 Malaysia', to: '/Kelab1Malaysia' },
    { label: 'Kelab Kerjaya', to: '/KelabKerjaya' },
    { label: 'KHB & Kulinari', to: '/KHBKulinari' },
    { label: 'Koir & Muzik', to: '/KoirMuzik' },
    { label: 'Koperasi & Pengguna', to: '/KoperasiPengguna' },
    { label: 'Pencegah Jenayah', to: '/PencegahJenayah' },
    { label: 'Pendidikan Islam', to: '/PendidikanIslam' },
    { label: 'Pendidikan Seni Visual', to: '/PendidikanSeniVisual' },
    { label: 'Persatuan Pelajar Buddha', to: '/PersatuanPelajarBuddha' },
    { label: 'Robotics', to: '/Robotics' },
    { label: 'Sains & Matematik', to: '/SainsMatematik' },
    { label: 'SLAD & Prostar', to: '/SLADProstar' },
];

const SPORTS_GAMES: MenuItem[] = [
    { label: 'Bola Baling', to: '/BolaBaling' },
    { label: 'Bola Tampar', to: '/BolaTampar' },
    { label: 'Bola Jaring', to: '/BolaJaring' },
    { label: 'Ping Pong', to: '/PingPong' },
    { label: 'Badminton', to: '/Badminton' },
    { label: 'Scrabble & Catur', to: '/ScrabbleCatur' },
    { label: 'Bola Sepak', to: '/BolaSepak' },
    { label: 'Bola Keranjang', to: '/BolaKeranjang' },
    { label: 'Balapan & Padang / QM', to: '/BalapanPadang' },
    { label: 'Softball', to: '/Softball' },
];

const UNIFORM_UNITS: MenuItem[] = [
    { label: '37th Petaling Bear Pride', to: '/ThirtySeventhPetalingBearPride' },
    { label: 'Bulan Sabit Merah Malaysia', to: '/BulanSabitMerahMalaysia' },
    { label: 'Girl Guides', to: '/GirlGuides' },
    { label: 'Kadet Polis', to: '/KadetPolis' },
    { label: 'Kadet Remaja Sekolah', to: '/KadetRemajaSekolah' },
    { label: 'St John’s Ambulance Malaysia', to: '/StJohnsAmbulanceMalaysia' },
    { label: 'Taekwando WTF', to: '/TaekwandoWTF' },
    { label: 'Wushu', to: '/Wushu' },
];

// Items inside Lembaga > Library (PSS)
const LIBRARY_PSS: MenuItem[] = [
    {
        label: 'Past Year Papers',
        to: 'https://djians-my.sharepoint.com/personal/tongjin_smkdj_edu_my/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ftongjin%5Fsmkdj%5Fedu%5Fmy%2FDocuments%2FThiseus%20Systems%20Sdn%20Bhd%2FProjects%2FSchools%2FSMKDJ%2FOld%2FExam%20Papers%2FSMKDJ&ga=1',
        external: true,
    },
];

/* ------------------------------------------------------------------ */
/* SIDE PANEL TYPES (Recent Posts / Most Used Categories)              */
/* The Recent Posts list itself is automatic, see "RECENT POSTS" below.*/
/* ------------------------------------------------------------------ */

type SidebarLink = { label: string; to: string; external?: boolean };
type CategoryItem = { label: string; to: string; count: number; child?: boolean };

/* ------------------------------------------------------------------ */
/* CATEGORY POST COUNTS (automatic, read from the page files)          */
/*                                                                     */
/* HOW IT WORKS                                                        */
/* 1. Vite reads the source text of every post file in src/pages/.     */
/* 2. From each file it takes the category line:                       */
/*       <h6 className="!text-secondary">Facilities, Gallery, PIBG</h6>*/
/*    (or <CategoryLine names={['Facilities', 'Gallery', 'PIBG']} />). */
/*    Clickable buttons / links / spans inside the h6 also work.       */
/* 3. A post counts once for EVERY category it names, no matter if     */
/*    that category is first, in the middle or last.                   */
/* 4. The folder the file sits in also counts as one of its categories */
/*    (so Gallery/Something.tsx counts for Gallery even without a tag).*/
/*                                                                     */
/* Add, edit or delete a post file and every number updates by itself. */
/*                                                                     */
/* Index pages, the Category/ list pages and any *List.tsx file are    */
/* skipped because they are not posts. Change the patterns below if    */
/* your folder layout is different.                                    */
/* ------------------------------------------------------------------ */

const POST_SOURCES = import.meta.glob<string>(
    ['../../pages/**/*.tsx', '!../../pages/**/index.tsx', '!../../pages/Category/**', '!../../pages/**/*List.tsx'],
    // If your Vite is older than v5 and this line errors, use:  { as: 'raw', eager: true }
    { query: '?raw', import: 'default', eager: true }
);

// "Clubs & Societies", "clubs-societies" and "ClubsSocieties" all become "clubssocieties"
const keyOf = (s: string) =>
    s
        .toLowerCase()
        .replace(/&amp;/g, '&')
        .replace(/[^a-z0-9]+/g, '');

// Pulls the category names out of one page's source text
const extractTags = (src: string): string[] => {
    // 1) <h6 className="!text-secondary">Academic, Gallery, PIBG</h6>
    //    Prefers the text-secondary h6, otherwise uses the first <h6>.
    //    Buttons / links / spans inside it are treated as separate names.
    const h6 = src.match(/<h6[^>]*text-secondary[^>]*>([\s\S]*?)<\/h6>/) || src.match(/<h6[^>]*>([\s\S]*?)<\/h6>/);
    if (h6) {
        const tags = h6[1]
            .replace(/\{[^}]*\}/g, ' ') // drops things like {' '}
            .replace(/<[^>]+>/g, ',') // every tag (button, Link, span) becomes a separator
            .replace(/&amp;/g, '&')
            .split(/[,·|;]/)
            .map((t) => t.replace(/\s+/g, ' ').trim())
            .filter(Boolean);
        if (tags.length) return tags;
    }

    // 2) <CategoryLine names={['Academic', 'Gallery']} />
    const line = src.match(/<CategoryLine[^>]*names=\{\[([\s\S]*?)\]\}/);
    if (line) {
        return Array.from(line[1].matchAll(/(['"`])(.*?)\1/g)).map((m) => m[2].trim());
    }

    return [];
};

// One entry per post file: the set of category keys it belongs to (its tags + its folder)
const POST_KEYS: Set<string>[] = Object.entries(POST_SOURCES).map(([path, src]) => {
    const keys = new Set<string>();
    extractTags(src).forEach((t) => keys.add(keyOf(t)));

    // ../../pages/Gallery/Post.tsx -> "Gallery"
    const folder = path.split('/')[3];
    if (folder && !folder.endsWith('.tsx')) keys.add(keyOf(folder));

    return keys;
});

// How many posts belong to ANY of these names (a post is never counted twice)
const countByNames = (names: string[]): number => {
    const wanted = names.map(keyOf);
    return POST_KEYS.filter((keys) => wanted.some((w) => keys.has(w))).length;
};

/* ------------------------------------------------------------------ */
/* RECENT POSTS (automatic: the 5 latest posts from ANY category)      */
/*                                                                     */
/* HOW IT WORKS                                                        */
/* 1. A file is a post if it has ANY of these:                         */
/*       - an <h6> category line (plain text OR clickable buttons)     */
/*       - a <CategoryLine ... /> component (with or without names)    */
/*       - the big title <p className="text-4xl font-bold ...">        */
/* 2. TITLE = the big text-4xl <p>. If none, the first <p> after the   */
/*    category line. If still none, the file name is used.             */
/* 3. DATE  = the first date found after the category line. These      */
/*    formats are understood (any year, 2027 and above too):           */
/*       12 November 2020   |  March 10, 2025  |  10 Mac 2025          */
/*       2025-03-10         |  10/03/2025                              */
/*    English and Malay month names both work.                         */
/* 4. LINK  = "/" + the file name (TangkasBeraksi.tsx -> /TangkasBeraksi) */
/* 5. Newest date first, and only the top RECENT_COUNT are shown.      */
/*    Posts without a readable date go to the bottom.                  */
/*                                                                     */
/* Add a new post file and it appears here by itself.                  */
/* ------------------------------------------------------------------ */

const RECENT_COUNT = 5;

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

// A page is a post if it has a category line (h6 or CategoryLine) or the big title
const isPost = (src: string): boolean => /<h6[\s>]/.test(src) || /<CategoryLine[\s/>]/.test(src) || TITLE_RE.test(src);

// Where the category line ends (works for plain text, clickable buttons or a component)
const categoryLineEnd = (src: string): number => {
    const h6 = src.match(/<h6[^>]*text-secondary[^>]*>[\s\S]*?<\/h6>/) || src.match(/<h6[\s\S]*?<\/h6>/);
    if (h6 && h6.index !== undefined) return h6.index + h6[0].length;

    const line = src.match(/<CategoryLine[\s\S]*?\/>/);
    if (line && line.index !== undefined) return line.index + line[0].length;

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

// Title = big text-4xl <p> if present, otherwise the first <p> after the category line
const readTitle = (src: string, fileName: string): string => {
    const p = src.match(TITLE_RE) || src.slice(categoryLineEnd(src)).match(/<p[^>]*>([\s\S]*?)<\/p>/);
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

const RECENT_POSTS: SidebarLink[] = Object.entries(POST_SOURCES)
    .filter(([, src]) => isPost(src)) // only real posts
    .map(([path, src]) => {
        const file = (path.split('/').pop() || '').replace(/\.tsx$/, '');
        return { label: readTitle(src, file), to: '/' + file, date: readDate(src) };
    })
    .sort((a, b) => b.date - a.date || a.to.localeCompare(b.to))
    .slice(0, RECENT_COUNT)
    .map(({ label, to }) => ({ label, to }));

/* ------------------------------------------------------------------ */
/* CATEGORY LIST (names + links)                                       */
/*                                                                     */
/* `match` = every name that counts for this category. Spelling,       */
/* capitals, spaces, "-" and "&" do not matter.                        */
/* A parent lists its children's names too, so its number = its own    */
/* posts + all children (like WordPress category counts).              */
/* ------------------------------------------------------------------ */

type CategoryDef = { label: string; to: string; match: string[]; child?: boolean };

const CATEGORY_DEFS: CategoryDef[] = [
    {
        label: 'Academic',
        to: '/AcademicList',
        match: ['Academic', 'Academic-Announcements', 'Admin-Announcements', 'AcademicAnnouncement', 'Tingkatan 1', 'SPM'],
    },
    {
        label: 'Academic-Announcements',
        to: '/AcademicAnnouncementList',
        match: ['Academic-Announcements', 'Admin-Announcements', 'AcademicAnnouncement'],
        child: true,
    },
    { label: 'Tingkatan 1', to: '/Tingkatan1List', match: ['Tingkatan 1'], child: true },
    { label: 'SPM', to: '/SPMList', match: ['SPM'], child: true },
    {
        label: 'Co-Curriculum',
        to: '/CoCurriculumList',
        match: ['Co-Curriculum', 'CoCurriculum', 'Clubs & Societies', 'Clubs', 'Societies'],
    },
    { label: 'Clubs & Societies', to: '/ClubsSocietiesList', match: ['Clubs & Societies', 'Clubs', 'Societies'], child: true },
    { label: 'Gallery', to: '/GalleryList', match: ['Gallery'] },
    { label: 'PIBG', to: '/PIBGList', match: ['PIBG'] },
    { label: 'Main Page', to: '/MainPageList', match: ['Main Page'] },
    { label: 'Librarian', to: '/LibrarianList', match: ['Librarian'] },
];

const CATEGORIES: CategoryItem[] = CATEGORY_DEFS.map((d) => ({
    label: d.label,
    to: d.to,
    child: d.child,
    count: countByNames(d.match),
}));

/* ------------------------------------------------------------------ */
/* CATEGORY LABEL LINE WITH COUNTS (automatic)                         */
/*                                                                     */
/* Turns                                                               */
/*   Academic, Academic-Announcements, Co-Curriculum, Lembaga, Librarian */
/* into                                                                */
/*   Academic (12), Academic-Announcements (3), Co-Curriculum (20),    */
/*   Lembaga (4), Librarian (2)                                        */
/*                                                                     */
/* Works for EVERY name, including the last one, and also for names    */
/* that are not in "Most Used Categories" (Lembaga, Facilities,        */
/* Sepak Takraw ...): any name used in any post's category line is     */
/* counted automatically.                                              */
/*                                                                     */
/* Usage in any page:                                                  */
/*   import { CategoryLine } from '../../components/Layouts/Header';   */
/*   <CategoryLine names={['Academic', 'Lembaga', 'Librarian']} />     */
/*                                                                     */
/* Leave out `names` to list every category.                           */
/* ------------------------------------------------------------------ */

// Count for one category name. Uses the rules above if it is in CATEGORY_DEFS, otherwise counts posts that use that name.
export const getCategoryCount = (label: string): number => {
    const def = CATEGORY_DEFS.find((d) => keyOf(d.label) === keyOf(label));
    return countByNames(def ? def.match : [label]);
};

// "Academic (12), Academic-Announcements (3), ..., Librarian (2)"
export const formatCategoryLine = (names: string[]): string => names.map((n) => `${n} (${getCategoryCount(n)})`).join(', ');

export const CategoryLine = ({ names, className = '!text-secondary' }: { names?: string[]; className?: string }) => (
    <h6 className={className}>{formatCategoryLine(names ?? CATEGORY_DEFS.map((c) => c.label))}</h6>
);

const SidebarHeading = ({ children }: { children: ReactNode }) => (
    <div className="mb-6">
        <h3 className="mb-3 text-2xl font-bold text-[#3b3f4a]">{children}</h3>
        <div className="bg-gray-200 relative h-[3px]">
            <span className="absolute top-0 h-full w-16 bg-[#e98f35] ltr:left-0 rtl:right-0" />
        </div>
    </div>
);

const NewBadge = () => (
    <span className="ml-1 rounded bg-gradient-to-r from-[#ef4444] to-[#f97316] px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">New</span>
);

const ComingSoonBadge = () => <span className="ml-1 rounded bg-secondary px-2 py-1 text-[9px] font-bold uppercase text-white">Coming Soon</span>;

/* ------------------------------------------------------------------ */
/* MOBILE / TABLET MENU DATA (used only by the side drawer)            */
/* Same items as the website menu above.                               */
/* ------------------------------------------------------------------ */

type NavNode = {
    label: string;
    to: string;
    badge?: 'new' | 'soon';
    plain?: boolean; // use a normal <a href> (full page load)
    external?: boolean; // open in a new tab
    children?: NavNode[];
};

const fromItems = (items: MenuItem[]): NavNode[] => items.map((i) => ({ label: i.label, to: i.to, external: i.external }));

const MOBILE_MENU: NavNode[] = [
    { label: 'Home', to: '/' },
    {
        label: 'About',
        to: '/about-us',
        children: [
            { label: 'About', to: '/about-us', badge: 'new' },
            { label: 'School Emblem', to: '/SchoolEmblem', badge: 'new' },
            { label: 'National Anthems', to: '/NationalAnthems', badge: 'new' },
            { label: 'School Song', to: '/SchoolSong', badge: 'soon', plain: true },
            { label: 'Youtube Channel', to: 'https://www.youtube.com/channel/UCvTBr0RZGZYU-Ixz1Y8Xwqw', badge: 'soon', external: true },
            { label: 'Vision, Mission, Motto', to: '/vissionmissionmotto', badge: 'new', plain: true },
            { label: 'Guiding Principle', to: '/GuidingPrinciple', badge: 'soon', plain: true },
            { label: "Principal's Message", to: '/Pentadbir', badge: 'new', plain: true },
            { label: 'Shop', to: '/Shop', badge: 'soon', plain: true },
            {
                label: 'Facilities',
                to: '/Facilities',
                children: [
                    { label: 'Main Page', to: '/Facilities' },
                    { label: 'Webmail', to: 'https://outlook.office.com/?client_id=4345a7b9-9a63-4910-a426-35363201d503', plain: true },
                    { label: 'ICT Status and Tech Support', to: '/ICTStatus', plain: true },
                ],
            },
        ],
    },
    { label: 'Events', to: '/Events' },
    {
        label: 'Important Updates',
        to: '/ImportantUpdates',
        children: [
            { label: 'Official School Timetable', to: '/OfficialSchoolTimetable', badge: 'new' },
            {
                label: 'Academic',
                to: '/AcademicMenu',
                badge: 'new',
                children: [
                    { label: 'Kehadiran', to: 'https://public.moe.gov.my/', plain: true },
                    { label: 'Past Year Exam Papers', to: '/PastYearExamPapers' },
                    {
                        label: 'Results Query',
                        to: 'https://forms.cloud.microsoft/pages/responsepage.aspx?id=8nUdN-fBJ0u9h0zCk1vZt_Jqw-FOSchLgh6m88G3iLxUQUJXVVJPU0FCWjgzSzJRNVBUTlBQMlhRRy4u&route=shorturl',
                        plain: true,
                    },
                    { label: 'FORMAT SPM 2021', to: '/FormatSPM2021' },
                    { label: 'Sijil Pelajaran Malaysia', to: '/SPM', plain: true },
                    { label: 'Tingkatan 1', to: '/Tingkatan1', plain: true },
                ],
            },
            { label: 'HEM', to: '/HEM', badge: 'new' },
            {
                label: 'Co-curriculum',
                to: '/ClubsSocieties',
                badge: 'new',
                children: [
                    { label: 'Announcements', to: '/Announcements', plain: true },
                    { label: 'Uniform Units', to: '/UniformUnits', children: fromItems(UNIFORM_UNITS) },
                    { label: 'Clubs & Societies', to: '/ClubsSocieties', children: fromItems(CLUBS_SOCIETIES) },
                    { label: 'Sports and Games', to: '/SportsAndGames', children: fromItems(SPORTS_GAMES) },
                    {
                        label: 'Lembaga',
                        to: '/LembagaPengawas',
                        children: [
                            { label: 'Lembaga Pengawas', to: '/LembagaPengawas' },
                            { label: 'Library (PSS)', to: '/Library', children: fromItems(LIBRARY_PSS) },
                            { label: 'Surau', to: '/Surau' },
                        ],
                    },
                ],
            },
        ],
    },
    { label: 'Gallery', to: '/Gallery' },
    { label: 'PIBG', to: '/PIBG' },
    {
        label: 'News',
        to: '/SMKDJNews',
        children: [{ label: 'SMKDJ News', to: '/SMKDJNews', badge: 'new' }],
    },
];

const Badge = ({ type }: { type?: 'new' | 'soon' }) => (type === 'new' ? <NewBadge /> : type === 'soon' ? <ComingSoonBadge /> : null);

// One link (internal / plain / external) with its badge
const LeafLink = ({ node, className }: { node: NavNode; className: string }) => {
    const content = (
        <>
            {node.label}
            <Badge type={node.badge} />
        </>
    );
    if (node.external) {
        return (
            <a href={node.to} target="_blank" rel="noopener noreferrer" className={className}>
                {content}
            </a>
        );
    }
    if (node.plain) {
        return (
            <a href={node.to} className={className}>
                {content}
            </a>
        );
    }
    return (
        <NavLink to={node.to} end={node.to === '/'} className={className}>
            {content}
        </NavLink>
    );
};

// Accordion item for the mobile / tablet drawer (works at any depth)
const MobileNode = ({ node, level = 0 }: { node: NavNode; level?: number }) => {
    const [open, setOpen] = useState(false);

    const pad: CSSProperties = { paddingInlineStart: 16 + level * 16 };
    const rowCls = `block flex-1 py-3 text-white [&.active]:text-primary ${level === 0 ? 'text-base font-bold' : 'text-sm font-medium'}`;
    const wrapCls = level === 0 ? 'border-b border-white/10' : '';

    if (!node.children) {
        return (
            <div className={wrapCls} style={pad}>
                <LeafLink node={node} className={rowCls} />
            </div>
        );
    }

    return (
        <div className={wrapCls}>
            <div className="flex items-center" style={pad}>
                <LeafLink node={node} className={rowCls} />
                <button
                    type="button"
                    aria-label={`Toggle ${node.label}`}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                    className="px-4 py-3 text-white"
                >
                    <svg
                        className={`h-5 w-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </button>
            </div>

            <div className={open ? 'block bg-black/20' : 'hidden'}>
                {node.children.map((child) => (
                    <MobileNode key={child.label + child.to} node={child} level={level + 1} />
                ))}
            </div>
        </div>
    );
};

/* ------------------------------------------------------------------ */
/* SITE SEARCH (automatic)                                             */
/* Indexes: every post file (title, categories, body text), every      */
/* menu page and every category. New post files are searchable at once.*/
/* ------------------------------------------------------------------ */

type SearchEntry = {
    title: string;
    to: string;
    kind: 'Post' | 'Page' | 'Category';
    trail: string; // e.g. "Important Updates › Academic"
    external?: boolean;
    plain?: boolean;
    body: string; // original-case text, used for the snippet
    titleL: string;
    tagsL: string;
    bodyL: string;
    date: number;
};

const normalize = (s: string) =>
    s
        .toLowerCase()
        .replace(/&amp;/g, '&')
        .replace(/[^a-z0-9\u00C0-\u024F]+/g, ' ')
        .trim();

const flattenMenu = (nodes: NavNode[], trail: string[] = []): { node: NavNode; trail: string[] }[] =>
    nodes.flatMap((n) => [{ node: n, trail }, ...(n.children ? flattenMenu(n.children, [...trail, n.label]) : [])]);

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
        plain?: boolean;
    }) => {
        const key = p.kind + '|' + p.to + '|' + (p.kind === 'Post' ? '' : p.title);
        if (seen.has(key)) return;
        seen.add(key);
        list.push({
            title: p.title,
            to: p.to,
            kind: p.kind,
            trail: p.trail ?? '',
            external: p.external,
            plain: p.plain,
            body: p.body ?? '',
            titleL: normalize(p.title),
            tagsL: normalize(p.tags ?? ''),
            bodyL: normalize(p.body ?? ''),
            date: p.date ?? 0,
        });
    };

    // 1) Posts (all page files, title + categories + full text)
    Object.entries(POST_SOURCES).forEach(([path, src]) => {
        if (!isPost(src)) return;
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

    // 2) Menu pages (About, Events, Clubs, Sports, Library ...)
    flattenMenu(MOBILE_MENU).forEach(({ node, trail }) =>
        add({ title: node.label, to: node.to, kind: 'Page', trail: trail.join(' › '), external: node.external, plain: node.plain })
    );

    // 3) Categories
    CATEGORY_DEFS.forEach((c) => add({ title: c.label, to: c.to, kind: 'Category', tags: c.match.join(' ') }));

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

type SearchHit = { entry: SearchEntry; score: number; snippet: string };

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
        if (e.titleL.includes(full)) score += 5;
        if (e.kind !== 'Post') score += 1;
        hits.push({ entry: e, score, snippet: e.kind === 'Post' ? makeSnippet(e.body, terms) : '' });
    }

    return hits.sort((a, b) => b.score - a.score || b.entry.date - a.entry.date).slice(0, 10);
};

const SearchBox = ({
    variant,
    autoFocus,
    onDone,
    onClose,
}: {
    variant: 'desktop' | 'mobile';
    autoFocus?: boolean;
    onDone?: () => void;
    onClose?: () => void;
}) => {
    const navigate = useNavigate();
    const boxRef = useRef<HTMLDivElement>(null);
    const [q, setQ] = useState('');
    const [active, setActive] = useState(0);
    const [openList, setOpenList] = useState(false);

    const results = useMemo(() => runSearch(q), [q]);

    // close the list when clicking outside
    useEffect(() => {
        const onDown = (e: MouseEvent) => {
            if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpenList(false);
        };
        document.addEventListener('mousedown', onDown);
        return () => document.removeEventListener('mousedown', onDown);
    }, []);

    const go = (h: SearchHit) => {
        const e = h.entry;
        setQ('');
        setOpenList(false);
        onDone?.();
        if (e.external) window.open(e.to, '_blank', 'noopener,noreferrer');
        else if (e.plain) window.location.href = e.to;
        else navigate(e.to);
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActive((i) => Math.min(i + 1, results.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActive((i) => Math.max(i - 1, 0));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (results[active]) go(results[active]);
        } else if (e.key === 'Escape') {
            setQ('');
            setOpenList(false);
            onClose?.();
        }
    };

    const showList = openList && q.trim().length > 0;

    return (
        <div ref={boxRef} className="relative">
            <input
                type="text"
                value={q}
                autoFocus={autoFocus}
                placeholder="Search"
                aria-label="Search the website"
                onChange={(e) => {
                    setQ(e.target.value);
                    setActive(0);
                    setOpenList(true);
                }}
                onFocus={() => setOpenList(true)}
                onKeyDown={onKeyDown}
                className="w-full border-b border-white bg-transparent py-1 text-white outline-none ltr:pl-2 ltr:pr-8 rtl:pl-8 rtl:pr-2"
            />
            {onClose ? (
                <button
                    type="button"
                    aria-label="Close search"
                    className="absolute top-1/2 -translate-y-1/2 text-white hover:text-primary ltr:right-0 rtl:left-0"
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            ) : null}

            {showList && (
                <div
                    className={`${
                        variant === 'desktop' ? 'absolute left-0 right-0 top-full z-[60] mt-2 max-h-[70vh] shadow-2xl' : 'mt-3'
                    } overflow-y-auto overscroll-contain rounded-md bg-white text-left text-[#3b3f4a]`}
                >
                    {results.length === 0 ? (
                        <p className="text-gray-500 px-4 py-3 text-sm">No results for “{q.trim()}”</p>
                    ) : (
                        <ul>
                            {results.map((h, i) => (
                                <li key={h.entry.kind + h.entry.to + h.entry.title}>
                                    <button
                                        type="button"
                                        onMouseDown={(ev) => ev.preventDefault()}
                                        onMouseEnter={() => setActive(i)}
                                        onClick={() => go(h)}
                                        className={`block w-full px-4 py-2.5 text-left ${i === active ? 'bg-[#fdf1e4]' : ''}`}
                                    >
                                        <span className="flex items-center gap-2">
                                            <span className="text-sm font-semibold">{h.entry.title}</span>
                                            <span className="rounded bg-[#e98f35] px-1.5 py-0.5 text-[9px] font-bold uppercase text-white">{h.entry.kind}</span>
                                        </span>
                                        {h.entry.trail && <span className="text-gray-500 block text-xs">{h.entry.trail}</span>}
                                        {h.snippet && <span className="text-gray-600 mt-0.5 block text-xs">{h.snippet}</span>}
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

/* ------------------------------------------------------------------ */
/* WEBSITE VIEW: TOP-LEVEL DROPDOWN (About, Important Updates, News)   */
/*                                                                     */
/* Same original look (group-hover + .submenu), but after you click    */
/* anything inside it, the dropdown closes right away. It opens again  */
/* the next time the mouse enters the item.                            */
/* ------------------------------------------------------------------ */

const DropdownItem = ({ to, label, active, chevron, children }: { to: string; label: string; active?: boolean; chevron: ReactNode; children: ReactNode }) => {
    const [closed, setClosed] = useState(false);

    return (
        <li
            // removing `group` while closed switches off every group-hover style (menu + chevron rotation)
            className={`relative ${closed ? '' : 'group'}`}
            onMouseLeave={() => setClosed(false)}
        >
            <Link to={to} className={active ? 'active' : ''} onClick={() => setClosed(true)}>
                {label}
                {chevron}
            </Link>
            <div
                // `!hidden` guarantees it is hidden, whatever the global CSS does
                className={`submenu ${closed ? '!hidden' : ''}`}
                onClick={(e) => {
                    if ((e.target as HTMLElement).closest('a')) setClosed(true);
                }}
            >
                {children}
            </div>
        </li>
    );
};

/* ------------------------------------------------------------------ */
/* WEBSITE VIEW: NESTED MENU                                           */
/*                                                                     */
/* - Desktop (lg+): opens on hover and automatically:                  */
/*     • opens to the RIGHT if there is room, otherwise flips LEFT,    */
/*       otherwise stacks INLINE,                                      */
/*     • shifts up/down so it never runs off the top or bottom,        */
/*     • scrolls with wheel/touch if taller than the screen,           */
/*       with the scrollbars hidden (no right or bottom bar),          */
/*     • shrinks its width on narrow screens (responsive).             */
/* - Clicking any link inside closes the flyout.                       */
/*                                                                     */
/* `hasNested` = true when this panel contains other NestedMenus.      */
/* Those panels must NOT scroll (it would clip the inner flyouts),     */
/* so they are only repositioned.                                      */
/* ------------------------------------------------------------------ */

const NestedMenu = ({
    to,
    label,
    isNew = false,
    linkClassName = '',
    hasNested = false,
    children,
}: {
    to: string;
    label: string;
    isNew?: boolean;
    linkClassName?: string;
    hasNested?: boolean;
    children: ReactNode;
}) => {
    const wrapRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout>>();

    const [open, setOpen] = useState(false); // accordion
    const [hover, setHover] = useState(false); // desktop hover
    const [place, setPlace] = useState<Placement>({ x: 'right', top: 0, maxH: 0, w: PANEL_W });

    const onEnter = () => {
        if (window.innerWidth < 1024) return;
        clearTimeout(closeTimer.current);
        setHover(true);
    };
    const onLeave = () => {
        if (window.innerWidth < 1024) return;
        // small delay so the menu doesn't flicker when the mouse moves diagonally
        closeTimer.current = setTimeout(() => setHover(false), 120);
    };

    // Clicking a link inside closes this flyout (and, because the click bubbles up, every parent flyout too)
    const onClickClose = (e: React.MouseEvent) => {
        if ((e.target as HTMLElement).closest('a')) {
            clearTimeout(closeTimer.current);
            setHover(false);
            setOpen(false);
        }
    };

    useEffect(() => () => clearTimeout(closeTimer.current), []);

    // Measure space and choose the best placement whenever the panel is hovered open
    useLayoutEffect(() => {
        if (!hover) return;

        const measure = () => {
            if (!wrapRef.current || !panelRef.current) return;
            const w = wrapRef.current.getBoundingClientRect();
            const vw = window.innerWidth;
            const vh = window.innerHeight;

            // responsive width: never wider than the screen
            const pw = Math.min(PANEL_W, vw - EDGE_GAP * 2);

            const maxH = vh - EDGE_GAP * 2;
            const naturalH = panelRef.current.scrollHeight;
            const h = hasNested ? naturalH : Math.min(naturalH, maxH);

            // horizontal: right -> left -> inline
            const x: Placement['x'] = w.right + pw <= vw - EDGE_GAP ? 'right' : w.left - pw >= EDGE_GAP ? 'left' : 'inline';

            // vertical: keep the panel fully inside the screen
            let absTop = w.top; // where the panel top would sit on screen
            if (absTop + h > vh - EDGE_GAP) absTop = vh - EDGE_GAP - h;
            if (absTop < EDGE_GAP) absTop = EDGE_GAP;

            setPlace({ x, top: absTop - w.top, maxH, w: pw });
        };

        measure();
        window.addEventListener('resize', measure);
        window.addEventListener('scroll', measure, { passive: true });
        return () => {
            window.removeEventListener('resize', measure);
            window.removeEventListener('scroll', measure);
        };
    }, [hover, hasNested]);

    const toggle = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setOpen((v) => !v);
    };

    const visibility = `${open ? 'block' : 'hidden'} ${hover ? 'lg:block' : 'lg:hidden'}`;

    // Scrolls with wheel / touch, but both scrollbars are hidden and horizontal overflow is blocked
    const scrollCls = hasNested
        ? ''
        : 'lg:overflow-y-auto lg:overflow-x-hidden lg:overscroll-contain lg:scroll-smooth lg:[scrollbar-width:none] lg:[-ms-overflow-style:none] lg:[&::-webkit-scrollbar]:hidden';

    const position =
        place.x === 'inline'
            ? 'lg:static lg:w-full lg:pl-4'
            : `lg:absolute lg:z-10 lg:rounded-md lg:bg-[#1b2230] lg:shadow-lg ${place.x === 'right' ? 'lg:left-full' : 'lg:right-full'} ${scrollCls}`;

    // Inline styles only apply while hovered on desktop (width is responsive)
    const panelStyle: CSSProperties | undefined =
        hover && place.x !== 'inline' ? { top: place.top, width: place.w, ...(hasNested ? {} : { maxHeight: place.maxH }) } : undefined;

    return (
        <div ref={wrapRef} className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave} onClick={onClickClose}>
            <div className="flex items-center justify-between">
                <NavLink to={to} className={`flex-1 ${linkClassName}`}>
                    {label}
                    {isNew && <NewBadge />}
                </NavLink>
                <button type="button" aria-label={`Toggle ${label}`} aria-expanded={open} onClick={toggle} className="px-4 py-2 lg:pointer-events-none">
                    <span
                        className={`inline-block transition-transform duration-300 ${open ? 'rotate-90 lg:rotate-0' : ''} ${
                            place.x === 'left' ? 'lg:-scale-x-100' : ''
                        }`}
                    >
                        ▶
                    </span>
                </button>
            </div>

            {/* NESTED PANEL */}
            <div ref={panelRef} style={panelStyle} className={`whitespace-normal break-words pl-4 ${visibility} ${position}`}>
                {children}
            </div>
        </div>
    );
};

/* ------------------------------------------------------------------ */
/* HEADER                                                              */
/* - lg+ (website): the original header and menu, plus a 3-line button */
/*   that opens the Recent Posts / Most Used Categories side panel     */
/* - below lg (tablet / mobile, 0px to 1023px):                        */
/*     LEFT   = original navbar button (opens the menu drawer)         */
/*     MIDDLE = logo                                                   */
/*     RIGHT  = Recent Posts / Most Used Categories button             */
/* ------------------------------------------------------------------ */

const Header = (props: any) => {
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();
    const location = useLocation();

    // Mobile / tablet (below lg) navbar drawer
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu((v) => !v);
    const closeMenu = () => setShowMenu(false);

    // Recent Posts / Most Used Categories side panel (all screen sizes)
    const [showSidebar, setShowSidebar] = useState(false);
    const closeSidebar = () => setShowSidebar(false);

    // Lock page scroll behind the drawer / side panel so only the panel scrolls
    useEffect(() => {
        document.body.style.overflow = showMenu || showSidebar ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [showMenu, showSidebar]);

    // Close the drawer / side panel when the page changes
    useEffect(() => {
        setShowMenu(false);
        setShowSidebar(false);
    }, [location.pathname]);

    // The navbar drawer only exists below the desktop breakpoint, so close it when crossing into desktop
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 1024) setShowMenu(false);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const [showSearch, setShowSearch] = useState(false);
    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    const itemCls = 'block px-4 py-2';

    const renderItems = (items: MenuItem[]) =>
        items.map((item) =>
            item.external ? (
                <a key={item.to} href={item.to} target="_blank" rel="noopener noreferrer" className={itemCls}>
                    {item.label}
                </a>
            ) : (
                <NavLink key={item.to} to={item.to} className={itemCls}>
                    {item.label}
                </NavLink>
            )
        );

    const chevron = (
        <div className="transition duration-500 group-hover:rotate-180 ltr:ml-2 rtl:mr-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 9L12 15L10.25 13.5M5 9L7.33333 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );

    // The 3-line icon (shared by the left navbar button and the right sidebar button)
    const hamburgerPaths = (
        <>
            <path d="M2 15H11C11.552 15 12 15.447 12 16C12 16.553 11.552 17 11 17H2C1.448 17 1 16.553 1 16C1 15.447 1.448 15 2 15Z" fill="currentColor" />
            <path d="M2 8H20C20.552 8 21 8.447 21 9C21 9.553 20.552 10 20 10H2C1.448 10 1 9.553 1 9C1 8.447 1.448 8 2 8Z" fill="currentColor" />
            <path d="M21 2C21 1.447 20.552 1 20 1H7C6.448 1 6 1.447 6 2C6 2.553 6.448 3 7 3H20C20.552 3 21 2.553 21 2Z" fill="currentColor" />
        </>
    );

    return (
        // Solid dark background
        <header className={`sticky top-0 z-50 bg-[#101926] transition duration-300 ${props.className ?? ''}`}>
            <div className="container">
                <div className="flex items-center justify-between py-5 lg:py-0">
                    {/* MOBILE / TABLET (below lg): LEFT = original navbar button */}
                    <button
                        type="button"
                        aria-label="Open menu"
                        aria-expanded={showMenu}
                        onClick={toggleMenu}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary lg:hidden"
                    >
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                            {hamburgerPaths}
                        </svg>
                    </button>

                    {/* LOGO (centered on mobile because both side buttons are 40px wide) */}
                    <Link to="/">
                        <img className="h-20 w-20" src="/assets/images/SMKDJlogo.png" alt="logo" />
                    </Link>

                    <div className="flex items-center">
                        {/* ============================================================ */}
                        {/* WEBSITE VIEW (lg+): ORIGINAL MENU                             */}
                        {/* `hidden lg:contents` = not shown on mobile/tablet, and on     */}
                        {/* desktop the wrapper disappears so the layout stays original.  */}
                        {/* ============================================================ */}
                        <div className="hidden lg:contents">
                            <div className="menus">
                                <ul>
                                    <li>
                                        <NavLink to="/">Home</NavLink>
                                    </li>

                                    {/* ABOUT */}
                                    <DropdownItem to="/about-us" label="About" active={location.pathname.startsWith('/about')} chevron={chevron}>
                                        <NavLink to="/about-us">
                                            About
                                            <NewBadge />
                                        </NavLink>
                                        <NavLink to="/SchoolEmblem">
                                            School Emblem
                                            <NewBadge />
                                        </NavLink>
                                        <NavLink to="/NationalAnthems">
                                            National Anthems
                                            <NewBadge />
                                        </NavLink>
                                        <a href="/SchoolSong">
                                            School Song
                                            <ComingSoonBadge />
                                        </a>
                                        <a href="https://www.youtube.com/channel/UCvTBr0RZGZYU-Ixz1Y8Xwqw" target="_blank" rel="noopener noreferrer">
                                            Youtube Channel
                                            <ComingSoonBadge />
                                        </a>
                                        <a href="/vissionmissionmotto">
                                            Vision, Mission, Motto
                                            <NewBadge />
                                        </a>
                                        <a href="/GuidingPrinciple">
                                            Guiding Principle
                                            <ComingSoonBadge />
                                        </a>
                                        <a href="/Pentadbir">
                                            Principal's Message
                                            <NewBadge />
                                        </a>
                                        <a href="/Shop">
                                            Shop
                                            <ComingSoonBadge />
                                        </a>

                                        {/* FACILITIES */}
                                        <NestedMenu to="/Facilities" label="Facilities">
                                            <NavLink to="/Facilities" className={itemCls}>
                                                Main Page
                                            </NavLink>
                                            <a href="https://outlook.office.com/?client_id=4345a7b9-9a63-4910-a426-35363201d503" className={itemCls}>
                                                Webmail
                                            </a>
                                            <a href="/ICTStatus" className={itemCls}>
                                                ICT Status and Tech Support
                                            </a>
                                        </NestedMenu>
                                    </DropdownItem>

                                    <li>
                                        <NavLink to="/Events">Events</NavLink>
                                    </li>

                                    {/* IMPORTANT UPDATES */}
                                    <DropdownItem
                                        to="/ImportantUpdates"
                                        label="Important Updates"
                                        active={location.pathname.startsWith('/ImportantUpdates')}
                                        chevron={chevron}
                                    >
                                        <NavLink to="/OfficialSchoolTimetable">
                                            Official School Timetable
                                            <NewBadge />
                                        </NavLink>

                                        {/* ACADEMIC */}
                                        <NestedMenu to="/AcademicMenu" label="Academic" isNew>
                                            <a href="https://public.moe.gov.my/" className={itemCls}>
                                                Kehadiran
                                            </a>
                                            <NavLink to="/PastYearExamPapers" className={itemCls}>
                                                Past Year Exam Papers
                                            </NavLink>
                                            <a
                                                href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=8nUdN-fBJ0u9h0zCk1vZt_Jqw-FOSchLgh6m88G3iLxUQUJXVVJPU0FCWjgzSzJRNVBUTlBQMlhRRy4u&route=shorturl"
                                                className={itemCls}
                                            >
                                                Results Query
                                            </a>
                                            <NavLink to="/FormatSPM2021" className={itemCls}>
                                                FORMAT SPM 2021
                                            </NavLink>
                                            <a href="/SPM" className={itemCls}>
                                                Sijil Pelajaran Malaysia
                                            </a>
                                            <a href="/Tingkatan1" className={itemCls}>
                                                Tingkatan 1
                                            </a>
                                        </NestedMenu>

                                        <NavLink to="/HEM">
                                            HEM
                                            <NewBadge />
                                        </NavLink>

                                        {/* CO-CURRICULUM (contains flyouts, so it only repositions, never scrolls) */}
                                        <NestedMenu to="/ClubsSocieties" label="Co-curriculum" isNew hasNested>
                                            <a href="/Announcements" className={itemCls}>
                                                Announcements
                                            </a>

                                            {/* UNIFORM UNITS (third level) */}
                                            <NestedMenu to="/UniformUnits" label="Uniform Units" linkClassName={itemCls}>
                                                {renderItems(UNIFORM_UNITS)}
                                            </NestedMenu>

                                            {/* CLUBS & SOCIETIES (third level, scrolls if tall) */}
                                            <NestedMenu to="/ClubsSocieties" label="Clubs & Societies" linkClassName={itemCls}>
                                                {renderItems(CLUBS_SOCIETIES)}
                                            </NestedMenu>

                                            {/* SPORTS AND GAMES (third level) */}
                                            <NestedMenu to="/SportsAndGames" label="Sports and Games" linkClassName={itemCls}>
                                                {renderItems(SPORTS_GAMES)}
                                            </NestedMenu>

                                            {/* LEMBAGA (third level, contains a flyout, so hasNested) */}
                                            <NestedMenu to="/LembagaPengawas" label="Lembaga" linkClassName={itemCls} hasNested>
                                                <NavLink to="/LembagaPengawas" className={itemCls}>
                                                    Lembaga Pengawas
                                                </NavLink>

                                                {/* LIBRARY (PSS) (fourth level) */}
                                                <NestedMenu to="/Library" label="Library (PSS)" linkClassName={itemCls}>
                                                    {renderItems(LIBRARY_PSS)}
                                                </NestedMenu>

                                                <NavLink to="/Surau" className={itemCls}>
                                                    Surau
                                                </NavLink>
                                            </NestedMenu>
                                        </NestedMenu>
                                    </DropdownItem>

                                    <li>
                                        <NavLink to="/Gallery" className={location.pathname === '/portfolio-detail' ? 'active' : ''}>
                                            Gallery
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/PIBG">PIBG</NavLink>
                                    </li>

                                    {/* NEWS */}
                                    <DropdownItem to="/SMKDJNews" label="News" chevron={chevron}>
                                        <NavLink to="/SMKDJNews">
                                            SMKDJ News
                                            <NewBadge />
                                        </NavLink>
                                    </DropdownItem>

                                    {/* SEARCH BUTTON */}
                                    <li className="relative hidden items-center before:absolute before:top-1/2 before:h-[30px] before:w-[2px] before:-translate-y-1/2 before:bg-gray/30 ltr:pl-9 ltr:before:-left-[2px] rtl:pr-9 rtl:before:-right-[2px] lg:inline-flex">
                                        <button type="button" onClick={() => toggleSearch()} className="text-white hover:text-primary">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.7363 17.4637L14.6512 13.3785C15.6799 12.0753 16.3 10.4347 16.3 8.65C16.3 4.4317 12.8683 1 8.65 1C4.4317 1 1 4.4317 1 8.65C1 12.8683 4.4317 16.3 8.65 16.3C10.4356 16.3 12.0754 15.6808 13.3786 14.6512L17.4637 18.7363C17.6392 18.9118 17.8696 19 18.1 19C18.3304 19 18.5608 18.9118 18.7363 18.7363C19.0882 18.3844 19.0882 17.8156 18.7363 17.4637ZM2.8 8.65C2.8 5.4244 5.4244 2.8 8.65 2.8C11.8756 2.8 14.5 5.4244 14.5 8.65C14.5 11.8756 11.8756 14.5 8.65 14.5C5.4244 14.5 2.8 11.8756 2.8 8.65Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </button>
                                    </li>

                                    {/* SEARCH BAR */}
                                    <li
                                        className={`search-bar absolute hidden w-0 bg-black transition-all duration-500 ltr:right-0 rtl:left-0 lg:block ${
                                            showSearch ? '!w-full overflow-visible' : 'overflow-hidden'
                                        }`}
                                    >
                                        {showSearch && (
                                            <SearchBox variant="desktop" autoFocus onDone={() => setShowSearch(false)} onClose={() => setShowSearch(false)} />
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* RIGHT BUTTON -> RECENT POSTS / MOST USED CATEGORIES PANEL (all screen sizes) */}
                        <button
                            type="button"
                            aria-label="Open sidebar"
                            aria-expanded={showSidebar}
                            onClick={() => setShowSidebar(true)}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white lg:rounded-none lg:bg-transparent lg:hover:text-primary ltr:lg:ml-5 rtl:lg:mr-5"
                        >
                            <svg width="24" height="20" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {hamburgerPaths}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* ============================================================ */}
            {/* MOBILE / TABLET NAVBAR DRAWER (below lg only, opens on LEFT)  */}
            {/* ============================================================ */}

            {/* Dark overlay (tap to close) */}
            <div
                onClick={closeMenu}
                className={`fixed inset-0 z-[51] bg-black/60 transition-opacity duration-300 lg:hidden ${
                    showMenu ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
            />

            <aside
                aria-hidden={!showMenu}
                // closes the drawer after tapping any link (but not the expand arrows)
                onClick={(e) => {
                    if ((e.target as HTMLElement).closest('a')) closeMenu();
                }}
                className={`fixed top-0 z-[52] h-full w-[85%] max-w-sm overflow-y-auto overflow-x-hidden overscroll-contain scroll-smooth bg-[#101926] pb-24 shadow-2xl transition-[transform,visibility] duration-300 ltr:left-0 rtl:right-0 lg:hidden ${
                    showMenu ? 'visible translate-x-0' : 'invisible ltr:-translate-x-full rtl:translate-x-full'
                }`}
            >
                {/* Close button */}
                <div className="sticky top-0 z-10 border-b border-white/10 bg-[#101926] ltr:text-right rtl:text-left">
                    <button type="button" aria-label="Close menu" onClick={closeMenu} className="p-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6 text-white"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Search (same as the website) */}
                <div className="border-b border-white/10 px-4 py-3">
                    <SearchBox variant="mobile" onDone={closeMenu} />
                </div>

                {/* Full menu */}
                <nav>
                    {MOBILE_MENU.map((node) => (
                        <MobileNode key={node.label} node={node} />
                    ))}
                </nav>
            </aside>

            {/* ============================================================ */}
            {/* RECENT POSTS / MOST USED CATEGORIES PANEL (all screen sizes, */}
            {/* opens on the RIGHT)                                          */}
            {/* ============================================================ */}

            {/* Dark overlay (click to close) */}
            <div
                onClick={closeSidebar}
                className={`fixed inset-0 z-[51] bg-black/60 transition-opacity duration-300 ${showSidebar ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
            />

            <aside
                aria-hidden={!showSidebar}
                // closes the panel after clicking any link
                onClick={(e) => {
                    if ((e.target as HTMLElement).closest('a')) closeSidebar();
                }}
                className={`fixed top-0 z-[52] h-full w-[360px] max-w-[88%] bg-white shadow-2xl transition-[transform,visibility] duration-300 ltr:right-0 rtl:left-0 ${
                    showSidebar ? 'visible translate-x-0' : 'invisible ltr:translate-x-full rtl:-translate-x-full'
                }`}
            >
                {/* Close button: inside the panel on mobile, outside the panel edge on desktop */}
                <button
                    type="button"
                    aria-label="Close sidebar"
                    onClick={closeSidebar}
                    className="bg-gray-100 absolute top-3 z-10 flex h-11 w-11 items-center justify-center rounded-md text-[#1b2230] ltr:right-3 rtl:left-3 lg:top-14 lg:bg-white lg:shadow-md ltr:lg:right-full rtl:lg:left-full"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Scrollable content */}
                <div className="h-full overflow-y-auto overscroll-contain px-7 pb-12 pt-16 [scrollbar-width:thin] lg:py-12">
                    {/* RECENT POSTS (automatic: 5 latest posts from any category) */}
                    <SidebarHeading>Recent Posts</SidebarHeading>
                    <ul className="mb-14 space-y-4">
                        {RECENT_POSTS.map((post, i) => (
                            <li key={post.to + i}>
                                {post.external ? (
                                    <a
                                        href={post.to}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="leading-8 text-[#e98f35] underline hover:text-primary"
                                    >
                                        {post.label}
                                    </a>
                                ) : (
                                    <Link to={post.to} className="leading-8 text-[#4a4f5a] hover:text-[#e98f35]">
                                        {post.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* MOST USED CATEGORIES */}
                    <SidebarHeading>Most Used Categories</SidebarHeading>
                    <ul>
                        {CATEGORIES.map((cat) => (
                            <li key={cat.label + cat.to} className="flex items-center justify-between py-2.5">
                                <Link to={cat.to} className={`text-[#4a4f5a] hover:text-[#e98f35] ${cat.child ? 'text-[15px] ltr:pl-3 rtl:pr-3' : ''}`}>
                                    {cat.child ? '- ' : ''}
                                    {cat.label}
                                </Link>
                                <span className="min-w-[34px] rounded-md bg-[#e98f35] px-2 py-1 text-center text-xs font-bold text-white">{cat.count}</span>
                            </li>
                        ))}
                    </ul>

                    {/* DIRECTION TOGGLE (lives inside the side panel on every screen size) */}
                    <div className="border-gray-200 mt-10 flex items-center justify-between border-t pt-6">
                        <span className="text-[#4a4f5a]">Text direction ({themeConfig.direction.toUpperCase()})</span>
                        <button
                            type="button"
                            className="rounded-md bg-[#101926] px-4 py-2 text-sm font-semibold text-white hover:bg-primary"
                            onClick={() => dispatch(toggleDirection(`${themeConfig.direction === 'rtl' ? 'ltr' : 'rtl'}`))}
                        >
                            Switch to {themeConfig.direction === 'rtl' ? 'LTR' : 'RTL'}
                        </button>
                    </div>
                </div>
            </aside>
        </header>
    );
};

export default Header;
