import { FormEvent, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export type SiteComment = {
    id: string;
    page: string; // e.g. "/Robotics"
    pageTitle: string;
    author: string;
    text: string;
    createdAt: number;
    ownerId: string; // who posted it (per browser), only the owner can delete
};

/* ------------------------------------------------------------------ */
/* SETTINGS                                                            */
/*                                                                     */
/* COMMENTS_API = ''  -> comments are saved in the visitor's browser   */
/*                       (each visitor only sees their own).           */
/* COMMENTS_API = 'https://your-server.com/api/comments'               */
/*                    -> comments are shared by everyone. Your server  */
/*                       must support:                                 */
/*                         GET    /api/comments          -> SiteComment[] (newest first) */
/*                         POST   /api/comments          (JSON body = SiteComment)       */
/*                         DELETE /api/comments/:id?ownerId=...                          */
/* ------------------------------------------------------------------ */

const COMMENTS_API = '';

// Pages that must NOT show the comment section
const EXCLUDED_PATHS = ['/'];

const STORE_KEY = 'smkdj-comments';
const OWNER_KEY = 'smkdj-comment-owner';
const NAME_KEY = 'smkdj-comment-name';
const CHANGED_EVENT = 'smkdj-comments-changed';
const MAX_NAME = 40;
const MAX_TEXT = 1000;
const MAX_LOCAL = 500;

const cleanPath = (p: string) => p.replace(/\/+$/, '') || '/';

const makeId = () =>
    typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2);

const getOwnerId = (): string => {
    try {
        let id = localStorage.getItem(OWNER_KEY);
        if (!id) {
            id = makeId();
            localStorage.setItem(OWNER_KEY, id);
        }
        return id;
    } catch {
        return 'anonymous';
    }
};

const readLocal = (): SiteComment[] => {
    try {
        const raw = localStorage.getItem(STORE_KEY);
        const data = raw ? JSON.parse(raw) : [];
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
};

const writeLocal = (items: SiteComment[]) => {
    try {
        localStorage.setItem(STORE_KEY, JSON.stringify(items.slice(0, MAX_LOCAL)));
    } catch {
        /* storage full or blocked */
    }
    window.dispatchEvent(new Event(CHANGED_EVENT));
};

/* ------------------------------------------------------------------ */
/* useComments: shared by the comment section and the sidebar's        */
/* "Recent Comments", so both always show the same data.               */
/* ------------------------------------------------------------------ */

export const useComments = () => {
    const [items, setItems] = useState<SiteComment[]>(() => (COMMENTS_API ? [] : readLocal()));
    const ownerId = getOwnerId();

    const refresh = useCallback(async () => {
        if (COMMENTS_API) {
            try {
                const res = await fetch(COMMENTS_API);
                if (res.ok) setItems(await res.json());
            } catch {
                /* offline: keep what we have */
            }
        } else {
            setItems(readLocal());
        }
    }, []);

    useEffect(() => {
        refresh();
        window.addEventListener(CHANGED_EVENT, refresh);
        window.addEventListener('storage', refresh); // other tabs
        return () => {
            window.removeEventListener(CHANGED_EVENT, refresh);
            window.removeEventListener('storage', refresh);
        };
    }, [refresh]);

    const add = async (page: string, author: string, text: string) => {
        const comment: SiteComment = {
            id: makeId(),
            page,
            pageTitle: document.title || page,
            author,
            text,
            createdAt: Date.now(),
            ownerId,
        };
        if (COMMENTS_API) {
            const res = await fetch(COMMENTS_API, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(comment),
            });
            if (!res.ok) throw new Error('send failed');
            window.dispatchEvent(new Event(CHANGED_EVENT));
        } else {
            writeLocal([comment, ...readLocal()]);
        }
    };

    const remove = async (id: string) => {
        if (COMMENTS_API) {
            const res = await fetch(`${COMMENTS_API}/${encodeURIComponent(id)}?ownerId=${encodeURIComponent(ownerId)}`, { method: 'DELETE' });
            if (!res.ok) throw new Error('delete failed');
            window.dispatchEvent(new Event(CHANGED_EVENT));
        } else {
            writeLocal(readLocal().filter((c) => c.id !== id));
        }
    };

    return { items, add, remove, ownerId };
};

/* ------------------------------------------------------------------ */
/* COMMENT SECTION (one per page)                                      */
/* ------------------------------------------------------------------ */

const formatTime = (t: number) => new Date(t).toLocaleString('en-MY', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

const CommentSection = ({ page }: { page: string }) => {
    const { items, add, remove, ownerId } = useComments();

    const [author, setAuthor] = useState(() => {
        try {
            return localStorage.getItem(NAME_KEY) ?? '';
        } catch {
            return '';
        }
    });
    const [text, setText] = useState('');
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState('');

    const list = items.filter((c) => c.page === page);

    const submit = async (e: FormEvent) => {
        e.preventDefault();
        const a = author.trim();
        const t = text.trim();
        if (!a || !t) {
            setError('Please enter your name and a comment.');
            return;
        }
        setBusy(true);
        setError('');
        try {
            await add(page, a, t);
            try {
                localStorage.setItem(NAME_KEY, a);
            } catch {
                /* ignore */
            }
            setText('');
        } catch {
            setError('Could not send your comment. Please try again.');
        } finally {
            setBusy(false);
        }
    };

    const onDelete = async (id: string) => {
        if (!window.confirm('Delete this comment?')) return;
        try {
            await remove(id);
        } catch {
            setError('Could not delete the comment. Please try again.');
        }
    };

    return (
        <section className="container my-10">
            <div className="border-gray-200 rounded-xl border bg-white p-5 shadow-sm">
                <h3 className="text-2xl font-bold text-[#222]">Comments ({list.length})</h3>
                <div className="relative mt-4 h-[5px] w-full bg-[#e5e5e5]">
                    <span className="absolute left-0 top-0 h-full w-[62px] bg-[#e0832c]" />
                </div>

                {/* COMMENT LIST */}
                {list.length === 0 ? (
                    <p className="mt-6 text-base text-[#555]">No comments yet. Be the first to comment.</p>
                ) : (
                    <ul className="mt-6 space-y-4">
                        {list.map((c) => (
                            <li key={c.id} className="rounded-lg bg-[#f4f6f8] p-4">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <span className="font-bold text-[#222]">{c.author}</span>
                                        <span className="ml-2 text-xs text-[#888]">{formatTime(c.createdAt)}</span>
                                    </div>
                                    {c.ownerId === ownerId && (
                                        <button
                                            type="button"
                                            onClick={() => onDelete(c.id)}
                                            className="shrink-0 rounded-md bg-[#ef4444] px-3 py-1 text-xs font-bold text-white transition hover:bg-[#dc2626]"
                                        >
                                            Delete
                                        </button>
                                    )}
                                </div>
                                <p className="mt-2 whitespace-pre-wrap break-words text-base leading-relaxed text-[#333]">{c.text}</p>
                            </li>
                        ))}
                    </ul>
                )}

                {/* COMMENT FORM */}
                <form onSubmit={submit} className="mt-8 space-y-3">
                    <input
                        type="text"
                        value={author}
                        maxLength={MAX_NAME}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Your name"
                        aria-label="Your name"
                        className="w-full rounded-lg bg-[#f4f6f8] px-4 py-3 text-base text-[#333] outline-none"
                    />
                    <textarea
                        value={text}
                        maxLength={MAX_TEXT}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Write your comment …"
                        aria-label="Your comment"
                        rows={4}
                        className="w-full resize-y rounded-lg bg-[#f4f6f8] px-4 py-3 text-base text-[#333] outline-none"
                    />
                    <div className="flex items-center justify-between gap-3">
                        <span className="text-xs text-[#888]">
                            {text.length}/{MAX_TEXT}
                        </span>
                        <button
                            type="submit"
                            disabled={busy}
                            className="rounded-lg bg-[#e0832c] px-6 py-3 font-bold text-white transition hover:bg-[#c97024] disabled:opacity-60"
                        >
                            {busy ? 'Sending…' : 'Send'}
                        </button>
                    </div>
                    {error && <p className="text-sm text-[#ef4444]">{error}</p>}
                </form>
            </div>
        </section>
    );
};

/* ------------------------------------------------------------------ */
/* CommentsGate: put this ONCE in your layout. It shows the comment    */
/* section on every page except the ones in EXCLUDED_PATHS (Home).     */
/* ------------------------------------------------------------------ */

export const CommentsGate = () => {
    const { pathname } = useLocation();
    const page = cleanPath(pathname);
    if (EXCLUDED_PATHS.includes(page)) return null;
    return <CommentSection key={page} page={page} />;
};

export default CommentsGate;
