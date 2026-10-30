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
import MicrosoftEducationProgram from '../pages/Academic/MicrosoftEducationProgram';
import ELibraryNewReleases from '../pages/Academic/ELibraryNewReleases';
import FunChallenge2022 from '../pages/Academic/FunChallenge2022';
import InternationalResearch from '../pages/Academic/InternationalResearch';
import PelancaranProgramNILAM2022 from '../pages/Academic/PelancaranProgramNILAM2022';
import PastYearExamPapers from '../components/PastYearExamPapers';
import FormatSPM2021 from '../components/FormatSPM2021';
import SPM from '../components/SPM';
import PercubaanJadualUjianLisan from '../pages/Academic/PercubaanJadualUjianLisan';
import JadualWaktuPentaksiranPercubaanSPM2021 from '../pages/Academic/JadualWaktuPentaksiranPercubaanSPM2021';
import SuratPeringatanTatacara from '../pages/Academic/SuratPeringatanTatacara';
import KoleksiVideoMajlisAnugerahCemerlang2020 from '../pages/Academic/KoleksiVideoMajlisAnugerahCemerlang2020';
import HariIniDalamSejarah from '../pages/Academic/HariIniDalamSejarah';

import MajlisRestuIlmu from '../pages/Academic/MajlisRestuIlmu';
import MaklumanPengoperasianSesiPersekolahan from '../pages/Academic/MaklumanPengoperasianSesiPersekolahan';
import SPMBankSoalan from '../pages/Academic/SPMBankSoalan';
import JadualWaktuPeperiksaanBertulisSPM2020 from '../pages/Academic/JadualWaktuPeperiksaanBertulisSPM2020';
import Tingkatan1 from '../components/Tingkatan1';
import MajlisBacaanYassin from '../pages/Academic/MajlisBacaanYassin';
import HEM from '../components/HEM';
import ClubsSocieties from '../components/ClubsSocieties';
import Announcements from '../components/Announcements';
import UniformUnits from '../components/UniformUnits';
import BulanSabitMerahMalaysia from '../components/BulanSabitMerahMalaysia';
import GirlGuides from '../components/GirlGuides';
import KadetPolis from '../components/KadetPolis';
import KadetRemajaSekolah from '../components/KadetRemajaSekolah';
import StJohnsAmbulanceMalaysia from '../components/StJohnsAmbulanceMalaysia';
import TaekwandoWTF from '../components/TaekwandoWTF';
import TangkasBeraksiPingatDiraih from '../pages/Co-Curriculum/TangkasBeraksiPingatDiraih';
import Wushu from '../pages/Academic/Wushu';
import BahasaWarisan from '../components/BahasaWarisan';
import BahasaCina from '../components/BahasaCina';
import Cheerleading from '../components/Cheerleading';
import ChristianFellowship from '../components/ChristianFellowship';
import EnglishClub from '../components/EnglishClub';
import Kelab1Malaysia from '../components/Kelab1Malaysia';
import KelabKerjaya from '../components/KelabKerjaya';
import KHBKulinari from '../components/KHBKulinari';
import KoirMuzik from '../components/KoirMuzik';
import KoperasiPengguna from '../components/KoperasiPengguna';
import PencegahJenayah from '../components/PencegahJenayah';
import PendidikanIslam from '../components/PendidikanIslam';
import PendidikanSeniVisual from '../components/PendidikanSeniVisual';
import PersatuanPelajarBuddha from '../components/PersatuanPelajarBuddha';
import Robotics from '../components/Robotics';
import SainsMatematik from '../components/SainsMatematik';
import SLADProstar from '../components/SLADProstar';
import SportsandGames from '../components/SportsandGames';
import BolaBaling from '../components/BolaBaling';
import BolaTampar from '../components/BolaTampar';
import BolaJaring from '../components/BolaJaring';
import PingPong from '../components/PingPong';
import Badminton from '../components/Badminton';
import ScrabbleCatur from '../components/ScrabbleCatur';
import BolaSepak from '../components/BolaSepak';
import BolaKeranjang from '../components/BolaKeranjang';
import BalapanPadang from '../components/BalapanPadang';
import Softball from '../components/Softball';
import LembagaPengawas from '../components/LembagaPengawas';
import Library from '../components/Library';
import Surau from '../components/Surau';
import ThirtySeventhPetalingBearPride from '../components/ThirtySeventhPetalingBearPride';
import Gallery from '../pages/Gallery';
import PIBG from '../components/PIBG';
import SMKDJNews from '../components/SMKDJNews';
import PenampilanRapiSahsiahTerpuji from '../pages/AcademicAnnouncement/PenampilanRapiSahsiahTerpuji';
import PindaanJadualUjianAkhirSesiAkademikUASA2026bagiTingkatan1dan3 from '../pages/AcademicAnnouncement/PindaanJadualUjianAkhirSesiAkademikUASA2026bagiTingkatan1dan3';
import JADUALPENGGILIRANSEMASAPEPERIKSAANSPM2026 from '../pages/AcademicAnnouncement/JADUALPENGGILIRANSEMASAPEPERIKSAANSPM2026';
import SelamatKembalikeSeolahWargaSMKDJdariTuanPengetua from '../pages/PENGURUSANSMKDJ/SelamatKembalikeSeolahWargaSMKDJdariTuanPengetua';
import MaklumanPenutupanSekolahAktivitiakibatJerebu from '../pages/PENGURUSANSMKDJ/MaklumanPenutupanSekolahAktivitiakibatJerebu';
import JEREBULINDUNGIDIRIJAGAKESIHATAN from '../pages/PENGURUSANSMKDJ/JEREBULINDUNGIDIRIJAGAKESIHATAN';
import SelamatMendudukiPeperiksaanPercubaanBertulisbuatsemuaCalonSPM2026 from '../pages/Academic/SelamatMendudukiPeperiksaanPercubaanBertulisbuatsemuaCalonSPM2026';
import IramaMenggetarkanPentas from '../pages/AdminAnnouncement/IramaMenggetarkanPentas';
import MerentasCabaranMenjulangKejayaan from '../pages/AdminAnnouncement/MerentasCabaranMenjulangKejayaan';
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
        element: <Disclaimer />,
    },
    {
        path: '/policy',
        element: <Policy />,
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
    },
    {
        path: '/SchoolEmblem',
        element: <SchoolEmblem />,
    },
    {
        path: '/NationalAnthems',
        element: <NationalAnthems />,
    },
    {
        path: '/SchoolSong',
        element: <SchoolSong />,
    },
    {
        path: '/vissionmissionmotto',
        element: <VissionMissionMotto />,
    },
    {
        path: '/GuidingPrinciple',
        element: <GuidingPrinciple />,
    },
    {
        path: '/Pentadbir',
        element: <Pentadbir />,
    },
    {
        path: '/Shop',
        element: <Shop />,
    },
    {
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
    },
    {
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
    {
        path: '/MicrosoftEducationProgram',
        element: <MicrosoftEducationProgram />,
    },
    {
        path: '/ELibraryNewReleases',
        element: <ELibraryNewReleases />,
    },
    {
        path: '/FunChallenge2022',
        element: <FunChallenge2022 />,
    },
    {
        path: '/InternationalResearch',
        element: <InternationalResearch />,
    },
    {
        path: '/PelancaranProgramNILAM2022',
        element: <PelancaranProgramNILAM2022 />,
    },
    {
        path: '/PastYearExamPapers',
        element: <PastYearExamPapers />,
    },
    {
        path: '/FormatSPM2021',
        element: <FormatSPM2021 />,
    },
    {
        path: '/SPM',
        element: <SPM />,
    },
    {
        path: '/PercubaanJadualUjianLisan',
        element: <PercubaanJadualUjianLisan />,
    },
    {
        path: '/JadualWaktuPentaksiranPercubaanSPM2021',
        element: <JadualWaktuPentaksiranPercubaanSPM2021 />,
    },
    {
        path: '/SuratPeringatanTatacara',
        element: <SuratPeringatanTatacara />,
    },
    {
        path: '/KoleksiVideoMajlisAnugerahCemerlang2020',
        element: <KoleksiVideoMajlisAnugerahCemerlang2020 />,
    },
    {
        path: '/HariIniDalamSejarah',
        element: <HariIniDalamSejarah />,
    },
    {
        path: '/MajlisBacaanYassin',
        element: <MajlisBacaanYassin />,
    },
    {
        path: '/MajlisRestuIlmu',
        element: <MajlisRestuIlmu />,
    },
    {
        path: '/MaklumanPengoperasianSesiPersekolahan',
        element: <MaklumanPengoperasianSesiPersekolahan />,
    },
    {
        path: '/SPMBankSoalan',
        element: <SPMBankSoalan />,
    },
    {
        path: '/JadualWaktuPeperiksaanBertulisSPM2020',
        element: <JadualWaktuPeperiksaanBertulisSPM2020 />,
    },
    {
        path: '/Tingkatan1',
        element: <Tingkatan1 />,
    },
    {
        path: '/HEM',
        element: <HEM />,
    },
    {
        path: '/ClubsSocieties',
        element: <ClubsSocieties />,
    },
    {
        path: '/Announcements',
        element: <Announcements />,
    },
    {
        path: '/UniformUnits',
        element: <UniformUnits />,
    },
    {
        path: '/UniformUnits',
        element: <UniformUnits />,
    },
    {
        path: '/ThirtySeventhPetalingBearPride',
        element: <ThirtySeventhPetalingBearPride />,
    },
    {
        path: '/BulanSabitMerahMalaysia',
        element: <BulanSabitMerahMalaysia />,
    },
    {
        path: '/GirlGuides',
        element: <GirlGuides />,
    },
    {
        path: '/KadetPolis',
        element: <KadetPolis />,
    },
    {
        path: '/KadetRemajaSekolah',
        element: <KadetRemajaSekolah />,
    },
    {
        path: '/StJohnsAmbulanceMalaysia',
        element: <StJohnsAmbulanceMalaysia />,
    },
    {
        path: '/TaekwandoWTF',
        element: <TaekwandoWTF />,
    },
    {
        path: '/TangkasBeraksiPingatDiraih',
        element: <TangkasBeraksiPingatDiraih />,
    },
    {
        path: '/Wushu',
        element: <Wushu />,
    },
    {
        path: '/BahasaWarisan',
        element: <BahasaWarisan />,
    },
    {
        path: '/BahasaCina',
        element: <BahasaCina />,
    },
    {
        path: '/Cheerleading',
        element: <Cheerleading />,
    },
    {
        path: '/ChristianFellowship',
        element: <ChristianFellowship />,
    },
    {
        path: '/EnglishClub',
        element: <EnglishClub />,
    },
    {
        path: '/Kelab1Malaysia',
        element: <Kelab1Malaysia />,
    },
    {
        path: '/KelabKerjaya',
        element: <KelabKerjaya />,
    },
    {
        path: '/KHBKulinari',
        element: <KHBKulinari />,
    },
    {
        path: '/KHBKulinari',
        element: <KHBKulinari />,
    },
    {
        path: '/KoirMuzik',
        element: <KoirMuzik />,
    },
    {
        path: '/KoperasiPengguna',
        element: <KoperasiPengguna />,
    },
    {
        path: '/PencegahJenayah',
        element: <PencegahJenayah />,
    },
    {
        path: '/PendidikanIslam',
        element: <PendidikanIslam />,
    },

    {
        path: '/PendidikanSeniVisual',
        element: <PendidikanSeniVisual />,
    },
    {
        path: '/PersatuanPelajarBuddha',
        element: <PersatuanPelajarBuddha />,
    },
    {
        path: '/Robotics',
        element: <Robotics />,
    },

    {
        path: '/SainsMatematik',
        element: <SainsMatematik />,
    },
    {
        path: '/SLADProstar',
        element: <SLADProstar />,
    },
    {
        path: '/SportsandGames',
        element: <SportsandGames />,
    },
    {
        path: '/BolaBaling',
        element: <BolaBaling />,
    },
    {
        path: '/BolaTampar',
        element: <BolaTampar />,
    },

    {
        path: '/BolaJaring',
        element: <BolaJaring />,
    },
    {
        path: '/PingPong',
        element: <PingPong />,
    },
    {
        path: '/Badminton',
        element: <Badminton />,
    },
    {
        path: '/ScrabbleCatur',
        element: <ScrabbleCatur />,
    },
    {
        path: '/BolaSepak',
        element: <BolaSepak />,
    },
    {
        path: '/BolaKeranjang',
        element: <BolaKeranjang />,
    },
    {
        path: '/BalapanPadang',
        element: <BalapanPadang />,
    },
    {
        path: '/Softball',
        element: <Softball />,
    },
    {
        path: '/LembagaPengawas',
        element: <LembagaPengawas />,
    },
    {
        path: '/Library',
        element: <Library />,
    },
    {
        path: '/Surau',
        element: <Surau />,
    },
    {
        path: '/Gallery',
        element: <Gallery />,
    },
    {
        path: '/PIBG',
        element: <PIBG />,
    },
    {
        path: '/SMKDJNews',
        element: <SMKDJNews />,
    },
    {
        path: '/PenampilanRapiSahsiahTerpuji',
        element: <PenampilanRapiSahsiahTerpuji />,
    },
    {
        path: '/PindaanJadualUjianAkhirSesiAkademikUASA2026bagiTingkatan1dan3',
        element: <PindaanJadualUjianAkhirSesiAkademikUASA2026bagiTingkatan1dan3 />,
    },
    
    {
        path: '/JADUALPENGGILIRANSEMASAPEPERIKSAANSPM2026',
        element: <JADUALPENGGILIRANSEMASAPEPERIKSAANSPM2026 />,
    },
    {
        path: '/SelamatKembalikeSeolahWargaSMKDJdariTuanPengetua',
        element: <SelamatKembalikeSeolahWargaSMKDJdariTuanPengetua />,
    },
    {
        path: '/MaklumanPenutupanSekolahAktivitiakibatJerebu',
        element: <MaklumanPenutupanSekolahAktivitiakibatJerebu />,
    },
    {
        path: '/JEREBULINDUNGIDIRIJAGAKESIHATAN',
        element: <JEREBULINDUNGIDIRIJAGAKESIHATAN />,
    },
    {
        path: '/SelamatMendudukiPeperiksaanPercubaanBertulisbuatsemuaCalonSPM2026',
        element: <SelamatMendudukiPeperiksaanPercubaanBertulisbuatsemuaCalonSPM2026 />,
    },
    {
        path: '/IramaMenggetarkanPentas',
        element: <IramaMenggetarkanPentas />,
    },
    {
        path: '/MerentasCabaranMenjulangKejayaan',
        element: <MerentasCabaranMenjulangKejayaan />,
    },
    
    
];

export { routes };
