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

// Replace with your real posts and links
const POSTS: Post[] = [
    { id: 1, title: 'Selamat Menduduki Ujian Bertutur Bahasa Melayu Calon SPM 2026!', to: '/SelamatMendudukiPeperiksaanPercubaanBertulisbuatsemuaCalonSPM2026' },
   
    { id: 2, title: 'JADUAL PENGGILIRAN SEMASA PEPERIKSAAN SPM 2026', to: '/JADUALPENGGILIRANSEMASAPEPERIKSAANSPM2026' },
    { id: 3, title: 'Tangkas Beraksi, Pingat Diraih!', to: '/TangkasBeraksiPingatDiraih' },
    { id: 4, title: 'Penampilan Rapi, Sahsiah Terpuji.', to: '/PenampilanRapiSahsiahTerpuji' },
];

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
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <SectionTitle>Recent Posts</SectionTitle>

            <ul className="mt-6 space-y-4">
                {POSTS.map((post) => (
                    <li key={post.id}>
                        <Link to={post.to} className="text-base leading-relaxed text-[#333] transition hover:text-[#e0832c]">
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
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
        <form onSubmit={handleSubmit} className="flex overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
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
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
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