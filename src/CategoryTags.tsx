import { Link } from 'react-router-dom';

// Key = category name (lowercase, no spaces/dashes/symbols needed).
// Value = page path (matches routes.tsx exactly).
const CATEGORY_ROUTES: Record<string, string> = {
    academic: '/AcademicList',
    academicannouncements: '/AcademicAnnouncementList',
    tingkatan1: '/Tingkatan1List',
    spm: '/SPMList',
    cocurriculum: '/CoCurriculumList',
    clubssocieties: '/ClubsSocietiesList',
    clubsandsocieties: '/ClubsSocietiesList',
    gallery: '/GalleryList',
    pibg: '/PIBGList',
    mainpage: '/MainPageList',
    librarian: '/LibrarianList',
    pengurusansmkdj: '/PengurusanSMKDJList',
    taekwando: '/TaekwandoList',
    merejamlembing: '/MerejamLembingList',
    adminannouncements: '/AdminAnnouncementsList',
    unesco: '/UNESCOList',
    halehwalmurid: '/HalEhwalMuridList',
    robotics: '/RoboticsList',
    bmelayu: '/BMelayuList',
    english: '/EnglishList',
    choir: '/ChoirList',
    facilities: '/FacilitiesList',
    tenis: '/TenisList',
    
};

// "Academic-Announcements", "Tingkatan 1", "Clubs & Societies" all become one key
const normalize = (name: string) =>
    name
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]/g, '');

// Unknown names go to the home page instead of a 404
const getCategoryPath = (name: string) => CATEGORY_ROUTES[normalize(name)] ?? '/';

type Props = {
    /** e.g. "Academic, Academic-Announcements, Tingkatan 1" */
    categories: string;
};

export default function CategoryTags({ categories }: Props) {
    const names = categories
        .split(',')
        .map((c) => c.trim())
        .filter(Boolean);

    return (
        <h6 className="!text-secondary">
            {names.map((name, i) => (
                <span key={name}>
                    <Link to={getCategoryPath(name)} className="hover:underline">
                        {name}
                    </Link>
                    {i < names.length - 1 && ', '}
                </span>
            ))}
        </h6>
    );
}
