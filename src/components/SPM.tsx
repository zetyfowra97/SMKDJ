import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { useEffect } from 'react';

const SPM = () => {
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
            <section id="section-1" className="container items-center justify-center gap-10 md:gap-16 lg:gap-20">
                {/* TEXT SECTION */}
                <div className="" data-aos="fade-right" data-aos-duration="1500">
                    <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right">
                        <p className="pt-10 text-4xl font-bold text-black">SPM</p>
                        <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">Sijil Pelajaran Malaysia – Information for students</p>
                        <div>
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl">
                                <img
                                    src="/assets/images/Academic/SPM.jpg"
                                    alt="gallery-1"
                                    className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                            </div>
                            <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                Ready for CEFR B1. SPM Form 5 English Exam Papers
                                <a
                                    href="https://djians-my.sharepoint.com/personal/pss_smkdj_edu_my/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fpss%5Fsmkdj%5Fedu%5Fmy%2FDocuments%2FEnglish&ga=1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 underline"
                                >
                                    <></> Audio Tracks
                                </a>{' '}
                            </p>

                            {/* 1- JADUAL SPM2025 */}
                            <div className="flex items-start gap-4 bg-white pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                {/* TEXT CONTENT */}
                                <div className="min-w-0 flex-1">
                                    <a href="/JadualSPM2025" className="text-blue-600 hover:text-blue-800 underline">
                                        Jadual SPM 2025
                                    </a>{' '}
                                    <p className="mt-2 text-sm text-black md:text-base">by TJ Ooi</p>
                                    <p className="mt-2 text-sm text-gray md:text-base">October 30, 2025</p>
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

                            {/* 2- Percubaan Jadual Ujian Lisan (Bertutur) dan Mendengar SPM 2021 */}
                            <div className="flex items-start gap-4 bg-white pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                {/* TEXT CONTENT */}
                                <div className="min-w-0 flex-1">
                                    <a href="/PercubaanJadualUjianLisan" className="text-blue-600 hover:text-blue-800 underline">
                                        Percubaan Jadual Ujian Lisan (Bertutur) dan Mendengar SPM 2021
                                    </a>{' '}
                                    <p className="mt-2 text-sm text-black md:text-base">by SMKDJ</p>
                                    <p className="mt-2 text-sm text-gray md:text-base">November 19, 2021</p>
                                    <p className="mt-2 text-[5px] text-black md:text-base">BAHASA INGGERIS (Ujian Lisan (Bertutur) dan Mendengar):</p>
                                    <p className="mt-2 text-[5px] text-black md:text-base">BAHASA MELAYU: UJIAN</p>
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

                            {/* 3- Jadual Waktu Pentaksiran Percubaan SPM 2021 */}
                            <div className="flex items-start gap-4 bg-white pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                {/* TEXT CONTENT */}
                                <div className="min-w-0 flex-1">
                                    <a href="/JadualWaktuPentaksiranPercubaanSPM2021" className="text-blue-600 hover:text-blue-800 underline">
                                        Jadual Waktu Pentaksiran Percubaan SPM 2021
                                    </a>{' '}
                                    <p className="mt-2 text-sm text-black md:text-base">by SMKDJ</p>
                                    <p className="mt-2 text-sm text-gray md:text-base">November 13, 2021</p>
                                </div>

                                {/* RIGHT IMAGE */}
                                <a href="/JadualSPM2025" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                    <img
                                        src="/assets/images/Academic/JadualWaktuPentaksiranPercubaanSPM2021.JPEG"
                                        alt="Bidikan Mantap dari Lim Shyee Qing"
                                        className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </a>
                            </div>

                            {/* 4- SURAT PERINGATAN TATACARA PENGURUSAN DAN PENGOPERASIAN PP SPM 2021 */}
                            <div className="flex items-start gap-4 bg-white pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                {/* TEXT CONTENT */}
                                <div className="min-w-0 flex-1">
                                    <a href="/SuratPeringatanTatacara" className="text-blue-600 hover:text-blue-800 underline">
                                        SURAT PERINGATAN TATACARA PENGURUSAN DAN PENGOPERASIAN PP SPM 2021
                                    </a>{' '}
                                    <p className="mt-2 text-sm text-black md:text-base">by SMKDJ</p>
                                    <p className="mt-2 text-sm text-gray md:text-base">October 11, 2021</p>
                                </div>
                            </div>

                            {/* 5- Koleksi Video Majlis Anugerah Cemerlang 2020 & Mesyuarat Agung PIBG 38 */}
                            <div className="flex items-start gap-4 bg-white pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                {/* TEXT CONTENT */}
                                <div className="min-w-0 flex-1">
                                    <a href="/KoleksiVideoMajlisAnugerahCemerlang2020" className="text-blue-600 hover:text-blue-800 underline">
                                        Koleksi Video Majlis Anugerah Cemerlang 2020 & Mesyuarat Agung PIBG 38
                                    </a>{' '}
                                    <p className="mt-2 text-sm text-black md:text-base">by TJ Ooi</p>
                                    <p className="mt-2 text-sm text-gray md:text-base">October 9, 2021</p>
                                    <p className="mt-2 text-[5px] text-black md:text-base">1 Photo Montage 2 Bingkisan Untuk Guru 3 Pelancaran Bulan</p>
                                </div>

                                {/* RIGHT IMAGE */}
                                <a href="/JadualSPM2025" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                    <img
                                        src="/assets/images/Academic/koleksivideomajlis.png"
                                        alt="Bidikan Mantap dari Lim Shyee Qing"
                                        className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </a>
                            </div>

                            {/* 6- “Hari Ini Dalam Sejarah” Lawatan Rasmi Pengarah JPNS ke Pusat Peperiksaan SPM SMKDJ */}
                            <div className="flex items-start gap-4 bg-white pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                {/* TEXT CONTENT */}
                                <div className="min-w-0 flex-1">
                                    <a href="/HariIniDalamSejarah" className="text-blue-600 hover:text-blue-800 underline">
                                        “Hari Ini Dalam Sejarah” Lawatan Rasmi Pengarah JPNS ke Pusat Peperiksaan SPM SMKDJ
                                    </a>{' '}
                                    <p className="mt-2 text-sm text-black md:text-base">by SMKDJ</p>
                                    <p className="mt-2 text-sm text-gray md:text-base">February 22, 2021</p>
                                    <p className="mt-2 text-[5px] text-black md:text-base">“Hari Ini Dalam Sejarah” – Lawatan Rasmi Pengarah JPNS, Tuan</p>
                                </div>

                                {/* RIGHT IMAGE */}
                                <a href="/JadualSPM2025" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                    <img
                                        src="/assets/images/Academic/hariinidalamsejarah.jpeg"
                                        alt="Bidikan Mantap dari Lim Shyee Qing"
                                        className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </a>
                            </div>
                            {/* 7- “Majlis Bacaan Yassin dan Tazkirah Untuk Murid SPM 2020 */}
                            <div className="flex items-start gap-4 bg-white pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                {/* TEXT CONTENT */}
                                <div className="min-w-0 flex-1">
                                    <a href="/MajlisBacaanYassin" className="text-blue-600 hover:text-blue-800 underline">
                                        Majlis Bacaan Yassin dan Tazkirah Untuk Murid SPM 2020
                                    </a>{' '}
                                    <p className="mt-2 text-sm text-black md:text-base">by SMKDJ</p>
                                    <p className="mt-2 text-sm text-gray md:text-base">February 19, 2021</p>
                                </div>

                                {/* RIGHT IMAGE */}
                                <a href="/JadualSPM2025" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                    <img
                                        src="/assets/images/Academic/MajlisBacaanYassin.jpeg"
                                        alt="Bidikan Mantap dari Lim Shyee Qing"
                                        className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </a>
                            </div>
                            {/* 8- “Majlis Restu Ilmu & Taklimat SPM 2020 */}
                            <div className="flex items-start gap-4 bg-white pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                {/* TEXT CONTENT */}
                                <div className="min-w-0 flex-1">
                                    <a href="/MajlisRestuIlmu" className="text-blue-600 hover:text-blue-800 underline">
                                        Majlis Restu Ilmu & Taklimat SPM 2020
                                    </a>{' '}
                                    <p className="mt-2 text-sm text-black md:text-base">by SMKDJ</p>
                                    <p className="mt-2 text-sm text-gray md:text-base">February 17, 2021</p>
                                </div>

                                {/* RIGHT IMAGE */}
                                <a href="/JadualSPM2025" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                    <img
                                        src="/assets/images/Academic/MajlisRestuIlmu.jpeg"
                                        alt="Bidikan Mantap dari Lim Shyee Qing"
                                        className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </a>
                            </div>
                            {/* 9- Makluman Pengoperasian Sesi Persekolahan Secara Bersemuka Bagi Calon Peperiksaan SPM 2020 dan Cuti Perayaan Tahun Baru Cina 2021 */}
                            <div className="flex items-start gap-4 bg-white pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                {/* TEXT CONTENT */}
                                <div className="min-w-0 flex-1">
                                    <a href="/MaklumanPengoperasianSesiPersekolahan" className="text-blue-600 hover:text-blue-800 underline">
                                        Makluman Pengoperasian Sesi Persekolahan Secara Bersemuka Bagi Calon Peperiksaan SPM 2020 dan Cuti Perayaan Tahun Baru
                                        Cina 2021
                                    </a>{' '}
                                    <p className="mt-2 text-sm text-black md:text-base">by SMKDJ</p>
                                    <p className="mt-2 text-sm text-gray md:text-base">February 9, 2021</p>
                                </div>

                                {/* RIGHT IMAGE */}
                                <a href="/JadualSPM2025" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                    <img
                                        src="/assets/images/Academic/MaklumanPengoperasianSesiPersekolahan.jpg"
                                        alt="Bidikan Mantap dari Lim Shyee Qing"
                                        className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </a>
                            </div>
                            {/* 10- SPM Bank Soalan */}
                            <div className="flex items-start gap-4 bg-white pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                {/* TEXT CONTENT */}
                                <div className="min-w-0 flex-1">
                                    <a href="/SPMBankSoalan" className="text-blue-600 hover:text-blue-800 underline">
                                        SPM Bank Soalan
                                    </a>{' '}
                                    <p className="mt-2 text-sm text-black md:text-base">by SMKDJ</p>
                                    <p className="mt-2 text-sm text-gray md:text-base">February 7, 2021</p>
                                    <p className="mt-2 text-[5px] text-black md:text-base">The attachment below is the Google Drive link for SPM</p>
                                </div>

                                {/* RIGHT IMAGE */}
                                <a href="/JadualSPM2025" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                    <img
                                        src="/assets/images/Academic/SPMBankSoalan.jpg"
                                        alt="Bidikan Mantap dari Lim Shyee Qing"
                                        className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </a>
                            </div>
                            {/* 11- Jadual Waktu Peperiksaan Bertulis SPM 2020 */}
                            <div className="flex items-start gap-4 bg-white pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                {/* TEXT CONTENT */}
                                <div className="min-w-0 flex-1">
                                    <a href="/JadualWaktuPeperiksaanBertulisSPM2020" className="text-blue-600 hover:text-blue-800 underline">
                                        Jadual Waktu Peperiksaan Bertulis SPM 2020
                                    </a>{' '}
                                    <p className="mt-2 text-sm text-black md:text-base">by SMKDJ</p>
                                    <p className="mt-2 text-sm text-gray md:text-base">February 2, 2021</p>
                                </div>

                                {/* RIGHT IMAGE */}
                                <a href="/JadualSPM2025" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                    <img
                                        src="/assets/images/Academic/JadualWaktuPeperiksaan.jpg"
                                        alt="Bidikan Mantap dari Lim Shyee Qing"
                                        className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </a>
                            </div>
                            {/* 12- Jadual Pemulangan Buku Teks 2020 dan Pengagihan Buku Teks 2021 */}
                            <div className="flex items-start gap-4 bg-white pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                {/* TEXT CONTENT */}
                                <div className="min-w-0 flex-1">
                                    <a href="/JadualWaktuPeperiksaanBertulisSPM2020" className="text-blue-600 hover:text-blue-800 underline">
                                        Jadual Pemulangan Buku Teks 2020 dan Pengagihan Buku Teks 2021
                                    </a>{' '}
                                    <p className="mt-2 text-sm text-black md:text-base">by SMKDJ</p>
                                    <p className="mt-2 text-sm text-gray md:text-base">January 19, 2021</p>
                                    <p className="mt-2 text-[5px] text-black md:text-base">
                                        Sukacita dimaklumkan jadual pemulangan and pengagihan buku teks SMKDJ seperti
                                    </p>
                                </div>

                                {/* RIGHT IMAGE */}
                                <a href="/JadualSPM2025" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                    <img
                                        src="/assets/images/Academic/JadualPemulanganBukuTeks2020.jpg"
                                        alt="Bidikan Mantap dari Lim Shyee Qing"
                                        className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SPM;
