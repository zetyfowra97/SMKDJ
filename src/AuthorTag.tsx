import { Link } from 'react-router-dom';

// Key = author name (lowercase, no spaces/symbols needed).
// Value = page path (must match routes.tsx exactly).
const AUTHOR_ROUTES: Record<string, string> = {
    norazilaawang: '/NorAzilaAwangList',
    mudzilmahamod: '/MudzilMahamodList',
    smkdj: '/SMKDJList',
    taekwando: '/TaekwandoList',
    tjooi: '/TjOoiList',
};

// "NorAzila Awang", "norazila-awang", "Tj Ooi" -> one key each
const normalize = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, '');

type Props = {
    /** One author only, e.g. "NorAzila Awang" */
    author: string;
};

export default function AuthorTag({ author }: Props) {
    const name = author.trim();
    const path = AUTHOR_ROUTES[normalize(name)];

    if (!path) {
        console.warn(`[AuthorTag] No route for author "${name}". Add it to AUTHOR_ROUTES.`);
    }

    return (
        <p className="text-xs font-semibold text-black">
            {path ? (
                <Link to={path} className="hover:underline">
                    {name}
                </Link>
            ) : (
                name // unknown author: plain text, no broken link
            )}
        </p>
    );
}