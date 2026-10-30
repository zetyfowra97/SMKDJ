import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { useEffect } from 'react';

const AcademicMenu = () => {
    const { hash } = useLocation();

    const handleClickScroll = () => {
        const element = document.getElementById('section-1');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        console.log('hash', hash);
        if (hash === '#section-1') {
            setTimeout(() => {
                handleClickScroll();
            }, 1000);
        }
    }, [hash]);

    document.title = 'About Us | FPG Solution & Consultancy';

    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div className="w-full bg-white bg-cover bg-bottom bg-no-repeat pb-20 pt-8">
            <section id="section-1" className="items-center justify-center justify-items-center gap-10 md:gap-16 lg:gap-20">
                {/* TEXT SECTION */}
                <div className="w-full px-5 md:w-1/2 md:px-0" data-aos="fade-right" data-aos-duration="1500">
                    <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right">
                        <p className="pt-10 text-4xl font-bold text-black">Academic</p>
                        <div>
                            <div>
                                <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    <a
                                        href="/SelamatMenduduki"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 underline"
                                    >
                                        Selamat Menduduki Peperiksaan Percubaan Bertulis buat semua Calon SPM 2026.
                                    </a>{' '}
                                    <div className="text-sm">July 6, 2026</div>
                                    Semoga kejayaan menjadi milik kalian!
                                </p>

                                <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    <a href="/MahkotaIlmu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Mahkota Ilmu Diraja milik Choo En Li!
                                    </a>{' '}
                                    <div className="text-sm">May 2, 2026</div>
                                    Mentari pagi cerah berseri, Burung terbang tinggi di awan, Choo
                                </p>

                                <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    <a href="/DariTerjunan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Dari Terjunan ke Takhta Pingat!
                                    </a>{' '}
                                    <div className="text-sm">May 2, 2026</div>
                                    Dominasi Akuatik Koleksi Cemerlang: 5 Emas, 6 Perak, 2 Gangsa
                                </p>

                                <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    <a
                                        href="/LegasiKemenangan"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 underline"
                                    >
                                        Legasi Kemenangan Berterusan!
                                    </a>{' '}
                                    <div className="text-sm">May 2, 2026</div>
                                    SMKDJ sekali lagi telah menjadi Johan keseluruhan Kategori Sekolah Menengah
                                </p>

                                <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    <a href="/LangkahKetiga" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Langkah Ketiga, Jiwa Juara!
                                    </a>{' '}
                                    <div className="text-sm">May 2, 2026</div>
                                    Tahniah atlet Bola Tampar Lelaki memperoleh tempat ketiga di peringkat
                                </p>

                                <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    <a href="/ChessMasters" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Chess Masters Challenge!
                                    </a>{' '}
                                    <div className="text-sm">May 2, 2026</div>
                                    Tahniah semua peserta Catur SMKDJ kerana masing-masing pulang mebawa pingat!
                                </p>

                                <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    <a href="/BattleofPins" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Battle of Pins!
                                    </a>{' '}
                                    <div className="text-sm">May 2, 2026</div>
                                </p>

                                <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    <a href="/JejakInovasi" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Jejak Inovasi Robotik di WTC!
                                    </a>{' '}
                                    <div className="text-sm">May 2, 2026</div>
                                </p>

                                <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    <a href="/LintasanBusur" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Lintasan Busur!
                                    </a>{' '}
                                    <div className="text-sm">May 2, 2026</div>
                                </p>

                                <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    <a href="/GesekanSonata" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Gesekan Sonata
                                    </a>{' '}
                                    <div className="text-sm">May 2, 2026</div>
                                </p>

                                <div className="flex items-start gap-4 bg-white pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    {/* TEXT CONTENT */}
                                    <div className="min-w-0 flex-1">
                                        <a href="/BidikanMantap" className="text-blue-600 hover:text-blue-800 underline">
                                            Bidikan Mantap dari Lim Shyee Qing (1 Angsana)
                                        </a>

                                        <p className="mt-2 text-sm text-black md:text-base">April 17, 2026</p>

                                        <p className="mt-5 text-sm leading-relaxed text-black md:text-lg">
                                            Tahniah. Peserta tunggal dari SMKDJ mendapat tempat ke-5 kategori recurve.
                                        </p>
                                    </div>

                                    {/* RIGHT IMAGE */}
                                    <a href="/BidikanMantap" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                        <img
                                            src="/assets/images/AcademicBidikanMantap.JPEG"
                                            alt="Bidikan Mantap dari Lim Shyee Qing"
                                            className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </a>
                                </div>

                                <div className="flex items-start gap-4 bg-white pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    {/* TEXT CONTENT */}
                                    <div className="min-w-0 flex-1">
                                        <a href="/JejakLarian" className="text-blue-600 hover:text-blue-800 underline">
                                            Jejak Larian, Memburu Kegemilangan!
                                        </a>

                                        <p className="mt-2 text-sm text-black md:text-base">April 17, 2026</p>

                                        <p className="mt-5 text-sm leading-relaxed text-black md:text-lg">
                                            Tahniah diucapkan kepada atlet SMK Damansara Jaya yang telah menunjukkan
                                        </p>
                                    </div>

                                    {/* RIGHT IMAGE */}
                                    <a href="/JejakLarian" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                        <img
                                            src="/assets/images/AcademicJejakLarian.JPEG"
                                            alt="Bidikan Mantap dari Lim Shyee Qing"
                                            className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </a>
                                </div>

                                <div className="flex items-start gap-4 bg-white pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    {/* TEXT CONTENT */}
                                    <div className="min-w-0 flex-1">
                                        <a href="/JWUJIAN" className="text-blue-600 hover:text-blue-800 underline">
                                            JW UJIAN PERTENGAHAN SESI AKADEMIK 2026
                                        </a>{' '}
                                        <p className="mt-2 text-sm text-black md:text-base">April 17, 2026</p>
                                    </div>

                                    {/* RIGHT IMAGE */}
                                    <a href="/JWUJIAN" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                        <img
                                            src="/assets/images/AcademicJWUJIAN.JPEG"
                                            alt="Bidikan Mantap dari Lim Shyee Qing"
                                            className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </a>
                                </div>

                                <div className="flex items-start gap-4 bg-white pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    {/* TEXT CONTENT */}
                                    <div className="min-w-0 flex-1">
                                        <a href="/JadualSPM2025" className="text-blue-600 hover:text-blue-800 underline">
                                            Jadual SPM 2025
                                        </a>{' '}
                                        <p className="mt-2 text-sm text-black md:text-base">October 30, 2025</p>
                                    </div>

                                    {/* RIGHT IMAGE */}
                                    <a href="/JadualSPM2025" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                        <img
                                            src="/assets/images/AcademicJadualSPM.gif"
                                            alt="Bidikan Mantap dari Lim Shyee Qing"
                                            className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </a>
                                </div>

                                <div className="flex items-start gap-4 bg-white pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    {/* TEXT CONTENT */}
                                    <div className="min-w-0 flex-1">
                                        <a href="/SenarainamamuridTingkatan1" className="text-blue-600 hover:text-blue-800 underline">
                                            Senarai nama murid Tingkatan 1 mengikut kumpulan yang terkini.
                                        </a>{' '}
                                        <p className="mt-2 text-sm text-black md:text-base">March 17, 2023</p>
                                    </div>

                                    {/* RIGHT IMAGE */}
                                    <a href="/SenarainamamuridTingkatan1" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                        <img
                                            src="/assets/images/AcademicSenarainamamurid.jpg"
                                            alt="Bidikan Mantap dari Lim Shyee Qing"
                                            className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </a>
                                </div>

                                <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    <a
                                        href="/HariOrientasiT1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 underline"
                                    >
                                        Hari Orientasi T1
                                    </a>{' '}
                                    <div className="text-sm">March 14, 2023</div>
                                </p>

                                <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    <a
                                        href="/SuratHariOrientasiT1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 underline"
                                    >
                                        Surat Hari Orientasi T1 SMK Damansara Jaya 2023
                                    </a>{' '}
                                    <div className="text-sm">February 21, 2023</div>
                                </p>

                                <div className="flex items-start gap-4 bg-white pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    {/* TEXT CONTENT */}
                                    <div className="min-w-0 flex-1">
                                        <a href="/SenaraiBuku" className="text-blue-600 hover:text-blue-800 underline">
                                            Senarai Buku dan Alat Tulis Tahun 2023
                                        </a>{' '}
                                        <p className="mt-2 text-sm text-black md:text-base">February 20, 2023</p>
                                    </div>

                                    {/* RIGHT IMAGE */}
                                    <a href="/SenaraiBuku" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                        <img
                                            src="/assets/images/AcademicSenaraiBuku.png"
                                            alt="Bidikan Mantap dari Lim Shyee Qing"
                                            className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </a>
                                </div>

                                <div className="flex items-start gap-4 bg-white pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    {/* TEXT CONTENT */}
                                    <div className="min-w-0 flex-1">
                                        <a href="/MaklumatHariPendaftaran" className="text-blue-600 hover:text-blue-800 underline">
                                            Maklumat Hari Pendaftaran Murid Tingkatan 1 2023 SMK Damansara Jaya
                                        </a>{' '}
                                        <p className="mt-2 text-sm text-black md:text-base">February 20, 2023</p>
                                    </div>

                                    {/* RIGHT IMAGE */}
                                    <a href="/MaklumatHariPendaftaran" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                        <img
                                            src="/assets/images/AcademicMaklumatHariPendaftaran.jpeg"
                                            alt="Bidikan Mantap dari Lim Shyee Qing"
                                            className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </a>
                                </div>

                                <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    <a
                                        href="/ProgramSekolahkuSejahtera"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 underline"
                                    >
                                        Program Sekolahku Sejahtera: Sepakat dan Selamat (Kesedaran Hentikan Buli).
                                    </a>{' '}
                                    <div className="text-sm">September 21, 2022</div>
                                </p>

                                <div className="flex items-start gap-4 bg-white pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    {/* TEXT CONTENT */}
                                    <div className="min-w-0 flex-1">
                                        <a href="/MicrosoftEducationProgram" className="text-blue-600 hover:text-blue-800 underline">
                                            Microsoft Education Program Showcase School
                                        </a>{' '}
                                        <p className="mt-2 text-sm text-black md:text-base">September 18, 2022</p>
                                        The Microsoft Showcase Schools Program is an opportunity to engage
                                    </div>

                                    {/* RIGHT IMAGE */}
                                    <a href="/MicrosoftEducationProgram" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                        <img
                                            src="/assets/images/AcademicMicrosoftEducation.png"
                                            alt="Bidikan Mantap dari Lim Shyee Qing"
                                            className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </a>
                                </div>

                                <div className="flex items-start gap-4 bg-white pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    {/* TEXT CONTENT */}
                                    <div className="min-w-0 flex-1">
                                        <a href="/ELibraryNewReleases" className="text-blue-600 hover:text-blue-800 underline">
                                            e-Library New Releases September 2022
                                        </a>{' '}
                                        <p className="mt-2 text-sm text-black md:text-base">September 3, 2022</p>
                                        The Microsoft Showcase Schools Program is an opportunity to engage
                                    </div>

                                    {/* RIGHT IMAGE */}
                                    <a href="/ELibraryNewReleases" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                        <img
                                            src="/assets/images/Academice-Library.jpg"
                                            alt="Bidikan Mantap dari Lim Shyee Qing"
                                            className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </a>
                                </div>

                                <div className="flex items-start gap-4 bg-white pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    {/* TEXT CONTENT */}
                                    <div className="min-w-0 flex-1">
                                        <a href="/FunChallenge2022" className="text-blue-600 hover:text-blue-800 underline">
                                            Fun Challenge 2022
                                        </a>{' '}
                                        <p className="mt-2 text-sm text-black md:text-base">August 29, 2022</p>
                                        The objective of the FUN CHALLENGE with ZOOM:BIT is to
                                    </div>

                                    {/* RIGHT IMAGE */}
                                    <a href="/FunChallenge2022" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                        <img
                                            src="/assets/images/AcademicFunChallenge.jpeg"
                                            alt="Bidikan Mantap dari Lim Shyee Qing"
                                            className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </a>
                                </div>

                                <div className="flex items-start gap-4 bg-white pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    {/* TEXT CONTENT */}
                                    <div className="min-w-0 flex-1">
                                        <a href="/InternationalResearch" className="text-blue-600 hover:text-blue-800 underline">
                                            International Research Project Olympiad
                                        </a>{' '}
                                        <p className="mt-2 text-sm text-black md:text-base">July 31, 2022</p>
                                        Congratulations to Jayven Lee and Seen Ning on winning the
                                    </div>

                                    {/* RIGHT IMAGE */}
                                    <a href="/InternationalResearch" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                        <img
                                            src="/assets/images/AcademicInternationalResearch.jpeg"
                                            alt="Bidikan Mantap dari Lim Shyee Qing"
                                            className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </a>
                                </div>

                                <div className="flex items-start gap-4 bg-white pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    {/* TEXT CONTENT */}
                                    <div className="min-w-0 flex-1">
                                        <a href="/PelancaranProgramNILAM2022" className="text-blue-600 hover:text-blue-800 underline">
                                            Pelancaran Program NILAM 2022
                                        </a>{' '}
                                        <p className="mt-2 text-sm text-black md:text-base">July 2, 2022</p>
                                    </div>

                                    {/* RIGHT IMAGE */}
                                    <a href="/PelancaranProgramNILAM2022" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                        <img
                                            src="/assets/images/AcademicPelancaranProgramNILAM.png"
                                            alt="Bidikan Mantap dari Lim Shyee Qing"
                                            className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AcademicMenu;
