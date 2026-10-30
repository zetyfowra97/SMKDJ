import { useState, useRef, useLayoutEffect, useEffect, ReactNode, CSSProperties } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
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
                <button type="button" aria-label={`Toggle ${node.label}`} aria-expanded={open} onClick={() => setOpen((v) => !v)} className="px-4 py-3 text-white">
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
/* - lg+ (website): the original header, menu and sizes                */
/* - below lg (tablet / mobile): logo + direction toggle + round menu  */
/*   button, with the full menu in a side drawer                       */
/* ------------------------------------------------------------------ */

const Header = (props: any) => {
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();
    const location = useLocation();

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu((v) => !v);
    const closeMenu = () => setShowMenu(false);

    // Lock page scroll behind the mobile / tablet drawer so only the menu scrolls
    useEffect(() => {
        document.body.style.overflow = showMenu ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [showMenu]);

    // Close the drawer when the page changes
    useEffect(() => {
        setShowMenu(false);
    }, [location.pathname]);

    // Close the drawer if the screen grows to desktop size
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

    return (
        // Solid dark background
        <header className={`sticky top-0 z-50 bg-[#101926] transition duration-300 ${props.className ?? ''}`}>
            <div className="container">
                <div className="flex items-center justify-between py-5 lg:py-0">
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
                                        className={`${showSearch ? '!w-full' : ''}
                  search-bar absolute hidden w-0 overflow-hidden bg-black transition-all duration-500 ltr:right-0 rtl:left-0 lg:block`}
                                    >
                                        <form action="" className="relative">
                                            <input
                                                type="text"
                                                placeholder="Search"
                                                className="w-full border-b border-white bg-transparent py-1 outline-none ltr:pl-2 ltr:pr-8 rtl:pr-2 rtl:pl-8"
                                            />
                                            <button
                                                type="button"
                                                className="absolute top-1/2 -translate-y-1/2 hover:text-primary ltr:right-0 rtl:left-0"
                                                onClick={() => toggleSearch()}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* DIRECTION TOGGLE */}
                        <ul className="flex items-center gap-5 ltr:pr-5 rtl:pl-5 ltr:lg:pl-5 ltr:lg:pr-0 rtl:lg:pr-5 rtl:lg:pl-0">
                            <li>
                                <button
                                    type="button"
                                    className="flex h-5 w-5 items-center text-white hover:text-primary rtl:text-primary"
                                    onClick={() => dispatch(toggleDirection(`${themeConfig.direction === 'rtl' ? 'ltr' : 'rtl'}`))}
                                >
                                    <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 18.9439H7.72074" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                        <path
                                            d="M13.8571 21L16 18.9439L13.8571 16.8879"
                                            stroke="currentColor"
                                            strokeWidth="1.4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path d="M1 16.4206H9.27926" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                        <path
                                            d="M3.14287 18.4766L1 16.4206L3.14287 14.3645"
                                            stroke="currentColor"
                                            strokeWidth="1.4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12.7855 1H5.82118C4.82662 1 3.87279 1.37909 3.16952 2.05387C2.46626 2.72865 2.07117 3.64385 2.07117 4.59813C2.07117 5.55242 2.46626 6.46761 3.16952 7.14239C3.87279 7.81717 4.82662 8.19626 5.82118 8.19626H6.3569"
                                            stroke="currentColor"
                                            strokeWidth="1.4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path d="M10.6426 12.3084V1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.3573 12.3084V1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </li>
                        </ul>

                        {/* MOBILE / TABLET MENU BUTTON (below lg) */}
                        <button
                            type="button"
                            aria-label="Open menu"
                            aria-expanded={showMenu}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary lg:hidden"
                            onClick={toggleMenu}
                        >
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                <path
                                    d="M2 15H11C11.552 15 12 15.447 12 16C12 16.553 11.552 17 11 17H2C1.448 17 1 16.553 1 16C1 15.447 1.448 15 2 15Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M2 8H20C20.552 8 21 8.447 21 9C21 9.553 20.552 10 20 10H2C1.448 10 1 9.553 1 9C1 8.447 1.448 8 2 8Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M21 2C21 1.447 20.552 1 20 1H7C6.448 1 6 1.447 6 2C6 2.553 6.448 3 7 3H20C20.552 3 21 2.553 21 2Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* ============================================================ */}
            {/* MOBILE / TABLET DRAWER (below lg only)                        */}
            {/* ============================================================ */}

            {/* Dark overlay (tap to close) */}
            <div
                onClick={closeMenu}
                className={`fixed inset-0 z-[51] bg-black/60 transition-opacity duration-300 lg:hidden ${showMenu ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
            />

            <aside
                aria-hidden={!showMenu}
                // closes the drawer after tapping any link (but not the expand arrows)
                onClick={(e) => {
                    if ((e.target as HTMLElement).closest('a')) closeMenu();
                }}
                className={`fixed top-0 z-[52] h-full w-[85%] max-w-sm overflow-y-auto overflow-x-hidden overscroll-contain scroll-smooth bg-[#101926] pb-24 shadow-2xl transition-[transform,visibility] duration-300 ltr:right-0 rtl:left-0 lg:hidden ${
                    showMenu ? 'visible translate-x-0' : 'invisible ltr:translate-x-full rtl:-translate-x-full'
                }`}
            >
                {/* Close button */}
                <div className="sticky top-0 z-10 border-b border-white/10 bg-[#101926] ltr:text-right rtl:text-left">
                    <button type="button" aria-label="Close menu" onClick={closeMenu} className="p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Search (same as the website) */}
                <form action="" className="relative border-b border-white/10 px-4 py-3">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full border-b border-white bg-transparent py-1 text-white outline-none ltr:pl-2 ltr:pr-8 rtl:pl-8 rtl:pr-2"
                    />
                    <button type="submit" aria-label="Search" className="absolute top-1/2 -translate-y-1/2 text-white hover:text-primary ltr:right-4 rtl:left-4">
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.7363 17.4637L14.6512 13.3785C15.6799 12.0753 16.3 10.4347 16.3 8.65C16.3 4.4317 12.8683 1 8.65 1C4.4317 1 1 4.4317 1 8.65C1 12.8683 4.4317 16.3 8.65 16.3C10.4356 16.3 12.0754 15.6808 13.3786 14.6512L17.4637 18.7363C17.6392 18.9118 17.8696 19 18.1 19C18.3304 19 18.5608 18.9118 18.7363 18.7363C19.0882 18.3844 19.0882 17.8156 18.7363 17.4637ZM2.8 8.65C2.8 5.4244 5.4244 2.8 8.65 2.8C11.8756 2.8 14.5 5.4244 14.5 8.65C14.5 11.8756 11.8756 14.5 8.65 14.5C5.4244 14.5 2.8 11.8756 2.8 8.65Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </form>

                {/* Full menu */}
                <nav>
                    {MOBILE_MENU.map((node) => (
                        <MobileNode key={node.label} node={node} />
                    ))}
                </nav>
            </aside>
        </header>
    );
};

export default Header;