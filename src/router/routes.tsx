import { lazy } from 'react';
import Disclaimer from '../pages/Disclaimer';
import Policy from '../pages/Policy';
import Makluman from '../pages/Makluman';
import Kejayaan from '../pages/Kejayaan';
import SelamatBerkhidmat from '../pages/SelamatBerkhidmat';
import SMKDJShines from '../pages/SMKDJShines';
import RumahKesatria from '../pages/RumahKesatria';
import Cemerlang from '../pages/Cemerlang';
import AyunanRaket from '../pages/AyunanRaket';
import Mesyuarat from '../pages/Mesyuarat';
import Mesyuarat2025 from '../pages/Mesyuarat2025';
import SchoolEmblem from '../components/SchoolEmblem';
import NationalAnthems from '../components/NationalAnthems';
import SchoolSong from '../components/SchoolSong';
import GuidingPrinciple from '../components/GuidingPrinciple';
import VissionMissionMotto from '../components/VissionMissionMotto';
import Pentadbir from '../components/Pentadbir';
import Shop from '../components/Shop';
import Facilities from '../components/Facilities';
import UpgradingofICT from '../pages/facilities/UpgradingofICT';

import GuidetoWIFI from '../pages/facilities/GuidetoWIFI';
import MajlisPelancaranPapan from '../pages/facilities/MajlisPelancaranPapan';
import ICTTHON from '../pages/facilities/ICTTHON';
import UpgradingoftheSchoolHall from '../pages/facilities/UpgradingoftheSchoolHall';
import ICTStatus from '../pages/facilities/ICTStatus';
import Events from '../components/Events';
import ImportantUpdates from '../components/ImportantUpdates';
import MeluncurGagah from '../pages/Co-Curriculum/MeluncurGagah';
import SepakanBerani from '../pages/Co-Curriculum/SepakanBerani';
import SelamatMenduduki from '../pages/Academic/SelamatMenduduki';
import ArenaHujah from '../pages/Co-Curriculum/ArenaHujah';
import MaklumatPenundaan from '../pages/Co-Curriculum/MaklumatPenundaan';
import MahkotaIlmu from '../pages/Academic/MahkotaIlmu';
import DariTerjunan from '../pages/Academic/DariTerjunan';
import LegasiKemenangan from '../pages/Academic/LegasiKemenangan';
import OfficialSchoolTimetable from '../components/OfficialSchoolTimetable';
import AcademicMenu from '../components/AcademicMenu';
import LangkahKetiga from '../pages/Academic/LangkahKetiga';
import ChessMasters from '../pages/Academic/ChessMasters';
import BattleofPins from '../pages/Academic/BattleofPins';
import JejakInovasi from '../pages/Academic/JejakInovasi';
import LintasanBusur from '../pages/Academic/LintasanBusur';
import GesekanSonata from '../pages/Academic/GesekanSonata';
import BidikanMantap from '../pages/Academic/BidikanMantap';
import JejakLarian from '../pages/Academic/JejakLarian';
import JWUJIAN from '../pages/Academic/JWUJIAN';
import JadualSPM2025 from '../pages/Academic/JadualSPM2025';
import SenarainamamuridTingkatan1 from '../pages/Academic/SenarainamamuridTingkatan1';
import HariOrientasiT1 from '../pages/Academic/HariOrientasiT1';
import SuratHariOrientasiT1 from '../pages/Academic/SuratHariOrientasiT1';
import SenaraiBuku from '../pages/Academic/SenaraiBuku';
import MaklumatHariPendaftaran from '../pages/Academic/MaklumatHariPendaftaran';
import ProgramSekolahkuSejahtera from '../pages/Academic/ProgramSekolahkuSejahtera';
const Index = lazy(() => import('../pages/index'));
const Products = lazy(() => import('../pages/Products'));
const Services = lazy(() => import('../pages/Services'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const Career = lazy(() => import('../components/Career'));
const ServicesDetail = lazy(() => import('../pages/ServicesDetail'));
const PortfolioDetail = lazy(() => import('../pages/PortfolioDetail'));
const NewsDetail1 = lazy(() => import('../pages/News/NewsDetail1'));
const NewsDetail2 = lazy(() => import('../pages/News/NewsDetail2'));
const NewsDetail3 = lazy(() => import('../pages/News/NewsDetail3'));

// const Blog = lazy(() => import('../pages/Blog'));
const TermsCondition = lazy(() => import('../pages/TermsConditions'));
// const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const Error404 = lazy(() => import('../pages/404'));

const Jobapply = lazy(() => import('../pages/Jobapply'));

const routes = [
    {
        path: '/',
        element: <Index />,
    },
    {
        path: '/Products',
        element: <Products />,
    },
    {
        path: '/services',
        element: <Services />,
    },
    
    {
        path: '/about-us',
        element: <AboutUs />,
    },
    {
        path: '/careers',
        element: <Career />,
    },
     {
        path: '/makluman',
        element: <Makluman />,
    },
     {
        path: '/Kejayaan',
        element: <Kejayaan />,
    },
    {
        path: '/services-detail',
        element: <ServicesDetail />,
    },
    {
        path: '/portfolio-detail',
        element: <PortfolioDetail />,
    },
    {
        path: '/terms-conditions',
        element: <TermsCondition />,
    },
    {
        path: '/disclaimer',
        element: <Disclaimer />
    },
    {
        path: '/policy',
        element: <Policy />
    },
    // {
    //     path: '/privacy-policy',
    //     element: <PrivacyPolicy />,
    // },
    {
        path: '/news-detail-1',
        element: <NewsDetail1 />,
    },
    {
        path: '/news-detail-2',
        element: <NewsDetail2 />,
    },
    {
        path: '/news-detail-3',
        element: <NewsDetail3 />,
    },
    {
        path: '*',
        element: <Error404 />,
    },
    {
        path: '/jobapply',
        element: <Jobapply />,
    },

     // {
    //     post
    // },
    {
        path: '/SelamatBerkhidmat',
        element: <SelamatBerkhidmat />,
    },
     {
        path: '/SMKDJShines',
        element: <SMKDJShines />,
    },
    {
        path: '/RumahKesatria',
        element: <RumahKesatria />,
    },
      {
        path: '/Cemerlang',
        element: <Cemerlang />,
    },
       {
        path: '/AyunanRaket',
        element: <AyunanRaket />,
    },
     {
        path: '/Mesyuarat',
        element: <Mesyuarat />,
    },
     {
        path: '/Mesyuarat2025',
        element: <Mesyuarat2025 />,
    },  {
        path: '/SchoolEmblem',
        element: <SchoolEmblem />,
    },{
        path: '/NationalAnthems',
        element: <NationalAnthems />,
    },{
        path: '/SchoolSong',
        element: <SchoolSong />,
    },{
        path: '/vissionmissionmotto',
        element: <VissionMissionMotto />,
    },{
        path: '/GuidingPrinciple',
        element: <GuidingPrinciple />,
    },{
        path: '/Pentadbir',
        element: <Pentadbir />,
    },
    {
        path: '/Shop',
        element: <Shop />,
    },{
        path: '/Facilities',
        element: <Facilities />,
    },
    {
        path: '/UpgradingofICT',
        element: <UpgradingofICT />,
    },
     {
        path: '/UpgradingoftheSchoolHall',
        element: <UpgradingoftheSchoolHall />,
    },  {
        path: '/GuidetoWIFI',
        element: <GuidetoWIFI />,
    },
    {
        path: '/MajlisPelancaranPapan',
        element: <MajlisPelancaranPapan />,
    },
     {
        path: '/ICTTHON',
        element: <ICTTHON />,
    },
    {
        path: '/ICTStatus',
        element: <ICTStatus />,
    },
     {
        path: '/Events',
        element: <Events />,
    },
    {
        path: '/ImportantUpdates',
        element: <ImportantUpdates />,
    },

    {
        path: '/MeluncurGagah',
        element: <MeluncurGagah />,
    },

    {
        path: '/SepakanBerani',
        element: <SepakanBerani />,
    },

    {
        path: '/SelamatMenduduki',
        element: <SelamatMenduduki />,
    },
    {
        path: '/ArenaHujah',
        element: <ArenaHujah />,
    },
    {
        path: '/MaklumatPenundaan',
        element: <MaklumatPenundaan />,
    },
     {
        path: '/MahkotaIlmu',
        element: <MahkotaIlmu />,
    },
    {
        path: '/DariTerjunan',
        element: <DariTerjunan />,
    },
    {
        path: '/LegasiKemenangan',
        element: <LegasiKemenangan />,
    },
     {
        path: '/OfficialSchoolTimetable',
        element: <OfficialSchoolTimetable />,
    },
    {
        path: '/AcademicMenu',
        element: <AcademicMenu />,
    },
    {
        path: '/LangkahKetiga',
        element: <LangkahKetiga />,
    },
    {
        path: '/ChessMasters',
        element: <ChessMasters />,
    },
    {
        path: '/BattleofPins',
        element: <BattleofPins />,
    },
    {
        path: '/JejakInovasi',
        element: <JejakInovasi />,
    },
    {
        path: '/LintasanBusur',
        element: <LintasanBusur />,
    },
    {
        path: '/GesekanSonata',
        element: <GesekanSonata />,
    },
    {
        path: '/BidikanMantap',
        element: <BidikanMantap />,
    },
    {
        path: '/JejakLarian',
        element: <JejakLarian />,
    },
    {
        path: '/JWUJIAN',
        element: <JWUJIAN />,
    },
    {
        path: '/JadualSPM2025',
        element: <JadualSPM2025 />,
    },
    {
        path: '/SenarainamamuridTingkatan1',
        element: <SenarainamamuridTingkatan1 />,
    },
    {
        path: '/HariOrientasiT1',
        element: <HariOrientasiT1 />,
    },
    {
        path: '/SuratHariOrientasiT1',
        element: <SuratHariOrientasiT1 />,
    },
    {
        path: '/SenaraiBuku',
        element: <SenaraiBuku />,
    },
    {
        path: '/MaklumatHariPendaftaran',
        element: <MaklumatHariPendaftaran />,
    },
     {
        path: '/ProgramSekolahkuSejahtera',
        element: <ProgramSekolahkuSejahtera />,
    },
    
     
];

export { routes };
