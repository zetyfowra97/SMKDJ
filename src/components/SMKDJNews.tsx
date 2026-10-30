import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { useEffect } from 'react';

const SMKDJNews = () => {
    const { hash } = useLocation();

    const handleClickScroll = () => {
        const element = document.getElementById('section-1');

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (hash === '#section-1') {
            const timeout = window.setTimeout(() => {
                handleClickScroll();
            }, 1000);

            return () => window.clearTimeout(timeout);
        }
    }, [hash]);

    useEffect(() => {
        document.title = 'Selamat Menduduki Peperiksaan | SMKDJ';
    }, []);

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
                        <p className="pt-10 text-4xl font-bold text-black">SMKDJ News</p>
                        <div>
                            {/* 1- Selamat Menduduki Peperiksaan Percubaan Bertulis buat semua Calon SPM 2026. */}
                            <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                <a href="/SelamatMenduduki" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                    Selamat Menduduki Peperiksaan Percubaan Bertulis buat semua Calon SPM 2026.
                                </a>{' '}
                                <div className="text-sm">by Mudzil Mahamod</div>
                                <p className="mt-2 text-[5px] text-black md:text-base">July 6, 2026</p>
                            </p>

                            {/* 2- JADUAL PENGGILIRAN SEMASA PEPERIKSAAN SPM 2026 */}
                            <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                <a
                                    href="/JADUALPENGGILIRANSEMASAPEPERIKSAANSPM2026"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 underline"
                                >
                                    JADUAL PENGGILIRAN SEMASA PEPERIKSAAN SPM 2026
                                </a>{' '}
                                <div className="text-sm">by Mudzil Mahamod</div>
                                <p className="mt-2 text-[5px] text-black md:text-base">by Mudzil Mahamod</p>
                            </p>

                            {/* 3- Tangkas Beraksi, Pingat Diraih! */}
                            <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                <a
                                    href="/TangkasBeraksiPingatDiraih"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 underline"
                                >
                                    Tangkas Beraksi, Pingat Diraih!
                                </a>{' '}
                                <div className="text-sm">by SMKDJ</div>
                                <p className="mt-2 text-[5px] text-black md:text-base">October 22, 2026</p>
                            </p>

                            {/* 4- Penampilan Rapi, Sahsiah Terpuji. */}
                            <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                <a
                                    href="/PenampilanRapiSahsiahTerpuji"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 underline"
                                >
                                    Penampilan Rapi, Sahsiah Terpuji.
                                </a>{' '}
                                <div className="text-sm">by SMKDJ</div>
                                <p className="mt-2 text-[5px] text-black md:text-base">October 13, 2026</p>
                            </p>

                            {/* 5- Pindaan Jadual Ujian Akhir Sesi Akademik (UASA) 2026 bagi Tingkatan 1 – Tingkatan 3 */}
                            <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                <a
                                    href="/PindaanJadualUjianAkhirSesiAkademikUASA2026bagiTingkatan1dan3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 underline"
                                >
                                    Pindaan Jadual Ujian Akhir Sesi Akademik (UASA) 2026 bagi Tingkatan 1 – Tingkatan 3
                                </a>{' '}
                                <div className="text-sm">by SMKDJ</div>
                                <p className="mt-2 text-[5px] text-black md:text-base">October 11, 2026</p>
                            </p>

                            {/* 5- Selamat Kembali ke Sekolah Warga SMKDJ dari Tuan Pengetua. */}
                            <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                <a
                                    href="/SelamatKembalikeSeolahWargaSMKDJdariTuanPengetua"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 underline"
                                >
                                    Selamat Kembali ke Sekolah Warga SMKDJ dari Tuan Pengetua.
                                </a>{' '}
                                <div className="text-sm">by SMKDJ</div>
                                <p className="mt-2 text-[5px] text-black md:text-base">October 11, 2026</p>
                            </p>

                            {/* 6- Makluman Penutupan Sekolah & Aktiviti akibat Jerebu */}
                            <p className="pt-10 text-justify text-sm font-semibold text-black md:flex md:justify-between md:text-lg">
                                <div>
                                    <a
                                        href="/MaklumanPenutupanSekolahAktivitiakibatJerebu"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 underline"
                                    >
                                        Makluman Penutupan Sekolah & Aktiviti akibat Jerebu
                                    </a>{' '}
                                    <div className="text-sm">by SMKDJ</div>
                                    <p className="mt-2 text-[5px] text-black md:text-base">October 9, 2026</p>
                                </div>
                                <div>
                                    {/* RIGHT IMAGE */}
                                    <a href="/MaklumanPenutupanSekolahAktivitiakibatJerebu" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                        <img
                                            src="/assets/images/SMKDJNEWS/MaklumanPenutupanSekolahAktivitiakibatJerebu3.JPEG"
                                            alt="Bidikan Mantap dari Lim Shyee Qing"
                                            className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </a>
                                </div>
                            </p>

                            {/* 7- JEREBU: LINDUNGI DIRI, JAGA KESIHATAN */}
                            <p className="pt-10 text-justify text-sm font-semibold text-black md:flex md:justify-between md:text-lg">
                                <div>
                                    <a
                                        href="/JEREBULINDUNGIDIRIJAGAKESIHATAN"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 underline"
                                    >
                                        JEREBU: LINDUNGI DIRI, JAGA KESIHATAN
                                    </a>{' '}
                                    <div className="text-sm">by SMKDJ</div>
                                    <p className="mt-2 text-[5px] text-black md:text-base">September 9, 2026</p>
                                </div>
                                <div>
                                    {/* RIGHT IMAGE */}
                                    <a href="/JEREBULINDUNGIDIRIJAGAKESIHATAN" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                        <img
                                            src="/assets/images/PENGURUSANSMKDJ/JEREBULINDUNGIDIRIJAGAKESIHATAN.JPEG"
                                            alt="Bidikan Mantap dari Lim Shyee Qing"
                                            className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </a>
                                </div>
                            </p>

                            {/* 8- Meluncur Gagah! */}
                            <p className="pt-10 text-justify text-sm font-semibold text-black md:flex md:justify-between md:text-lg">
                                <div>
                                    <a href="/MeluncurGagah" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Meluncur Gagah!
                                    </a>{' '}
                                    <div className="text-sm">by SMKDJ</div>
                                    <p className="mt-2 text-[5px] text-black md:text-base">August 16, 2026</p>
                                </div>
                                <div></div>
                            </p>
                            {/* 9- Sepakan Berani, Jiwa Perkasa Joanne! */}
                            <p className="pt-10 text-justify text-sm font-semibold text-black md:flex md:justify-between md:text-lg">
                                <div>
                                    <a href="/SepakanBerani" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Sepakan Berani, Jiwa Perkasa Joanne!
                                    </a>{' '}
                                    <div className="text-sm">by Taekwando</div>
                                    <p className="mt-2 text-[5px] text-black md:text-base">July 28, 2026</p>
                                </div>
                                <div></div>
                            </p>

                            {/* 10- Selamat Menduduki Peperiksaan Percubaan Bertulis buat semua Calon SPM 2026.*/}
                            <p className="pt-10 text-justify text-sm font-semibold text-black md:flex md:justify-between md:text-lg">
                                <div>
                                    <a
                                        href="/SelamatMendudukiPeperiksaanPercubaanBertulisbuatsemuaCalonSPM2026"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 underline"
                                    >
                                        Selamat Menduduki Peperiksaan Percubaan Bertulis buat semua Calon SPM 2026.
                                    </a>{' '}
                                    <div className="text-sm">by SMKDJ</div>
                                    <p className="mt-2 text-[5px] text-black md:text-base">July 6, 2026</p>
                                    Semoga kejayaan menjadi milik kalian!
                                </div>
                            </p>
                            {/* 10- Selamat Menduduki Peperiksaan Percubaan Bertulis buat semua Calon SPM 2026.*/}
                            <p className="pt-10 text-justify text-sm font-semibold text-black md:flex md:justify-between md:text-lg">
                                <div>
                                    <a href="/ArenaHujah" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Arena Hujah
                                    </a>{' '}
                                    <div className="text-sm">by SMKDJ</div>
                                    <p className="mt-2 text-[5px] text-black md:text-base">June 12, 2026</p>
                                </div>
                            </p>
                            {/* 11- Selamat Menduduki Peperiksaan Percubaan Bertulis buat semua Calon SPM 2026.*/}
                            <p className="pt-10 text-justify text-sm font-semibold text-black md:flex md:justify-between md:text-lg">
                                <div>
                                    <a
                                        href="/MaklumatPenundaan"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 underline"
                                    >
                                        Maklumat Penundaan Perjumpaan Kokurikulum
                                    </a>{' '}
                                    <div className="text-sm">by SMKDJ</div>
                                    <p className="mt-2 text-[5px] text-black md:text-base">June 12, 2026</p>
                                </div>
                            </p>
                            {/* 12- Selamat Menduduki Peperiksaan Percubaan Bertulis buat semua Calon SPM 2026.*/}
                            <p className="pt-10 text-justify text-sm font-semibold text-black md:flex md:justify-between md:text-lg">
                                <div>
                                    <a href="/MahkotaIlmu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Mahkota Ilmu Diraja milik Choo En Li!
                                    </a>{' '}
                                    <div className="text-sm">by SMKDJ</div>
                                    <p className="mt-2 text-[5px] text-black md:text-base">May 2, 2026</p>
                                    Mentari pagi cerah berseri, Burung terbang tinggi di awan, Choo
                                </div>
                            </p>
                            {/* 13- Dari Terjunan ke Takhta Pingat!*/}
                            <p className="pt-10 text-justify text-sm font-semibold text-black md:flex md:justify-between md:text-lg">
                                <div>
                                    <a href="/DariTerjunan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Dari Terjunan ke Takhta Pingat!
                                    </a>{' '}
                                    <div className="text-sm">by SMKDJ</div>
                                    <p className="mt-2 text-[5px] text-black md:text-base">May 2, 2026</p>
                                    Dominasi Akuatik Koleksi Cemerlang: 5 Emas, 6 Perak, 2 Gangsa
                                </div>
                            </p>
                            {/* 14- Legasi Kemenangan Berterusan!*/}
                            <p className="pt-10 text-justify text-sm font-semibold text-black md:flex md:justify-between md:text-lg">
                                <div>
                                    <a
                                        href="/LegasiKemenangan"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 underline"
                                    >
                                        Legasi Kemenangan Berterusan!
                                    </a>{' '}
                                    <div className="text-sm">by SMKDJ</div>
                                    <p className="mt-2 text-[5px] text-black md:text-base">May 2, 2026</p>
                                    SMKDJ sekali lagi telah menjadi Johan keseluruhan Kategori Sekolah Menengah
                                </div>
                            </p>
                            {/* 15- Langkah Ketiga, Jiwa Juara!*/}
                            <p className="pt-10 text-justify text-sm font-semibold text-black md:flex md:justify-between md:text-lg">
                                <div>
                                    <a href="/LangkahKetiga" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Langkah Ketiga, Jiwa Juara!
                                    </a>{' '}
                                    <div className="text-sm">by SMKDJ</div>
                                    <p className="mt-2 text-[5px] text-black md:text-base">May 2, 2026</p>
                                    Tahniah atlet Bola Tampar Lelaki memperoleh tempat ketiga di peringkat
                                </div>
                            </p>
                            {/* 16- Chess Masters Challenge!*/}
                            <p className="pt-10 text-justify text-sm font-semibold text-black md:flex md:justify-between md:text-lg">
                                <div>
                                    <a href="/ChessMasters" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Chess Masters Challenge!
                                    </a>{' '}
                                    <div className="text-sm">by SMKDJ</div>
                                    <p className="mt-2 text-[5px] text-black md:text-base">May 2, 2026</p>
                                    Tahniah semua peserta Catur SMKDJ kerana masing-masing pulang mebawa pingat!
                                </div>
                            </p>
                            {/* 17- Battle of Pins!*/}
                            <p className="pt-10 text-justify text-sm font-semibold text-black md:flex md:justify-between md:text-lg">
                                <div>
                                    <a href="/BattleofPins" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Battle of Pins!
                                    </a>{' '}
                                    <div className="text-sm">by SMKDJ</div>
                                    <p className="mt-2 text-[5px] text-black md:text-base">May 2, 2026</p>
                                </div>
                            </p>
                            {/* 18- Jejak Inovasi Robotik di WTC!*/}
                            <p className="pt-10 text-justify text-sm font-semibold text-black md:flex md:justify-between md:text-lg">
                                <div>
                                    <a href="/JejakInovasi" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Jejak Inovasi Robotik di WTC!
                                    </a>{' '}
                                    <div className="text-sm">by SMKDJ</div>
                                    <p className="mt-2 text-[5px] text-black md:text-base">May 2, 2026</p>
                                </div>
                            </p>
                            {/* 19- Lintasan Busur!*/}
                            <p className="pt-10 text-justify text-sm font-semibold text-black md:flex md:justify-between md:text-lg">
                                <div>
                                    <a href="/LintasanBusur" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Lintasan Busur!
                                    </a>{' '}
                                    <div className="text-sm">by SMKDJ</div>
                                    <p className="mt-2 text-[5px] text-black md:text-base">May 2, 2026</p>
                                </div>
                            </p>
                            {/* 20- GesekanSonata*/}
                            <p className="pt-10 text-justify text-sm font-semibold text-black md:flex md:justify-between md:text-lg">
                                <div>
                                    <a href="/LintasanBusur" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        GesekanSonata
                                    </a>{' '}
                                    <div className="text-sm">by SMKDJ</div>
                                    <p className="mt-2 text-[5px] text-black md:text-base">May 2, 2026</p>
                                </div>
                            </p>
                            {/* 21- Irama Menggetarkan Pentas*/}

                            <p className="pt-10 text-justify text-sm font-semibold text-black md:flex md:justify-between md:text-lg">
                                <div>
                                    <a
                                        href="/IramaMenggetarkanPentas"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 underline"
                                    >
                                        Irama Menggetarkan Pentas
                                    </a>{' '}
                                    <div className="text-sm">by SMKDJ</div>
                                    <p className="mt-2 text-[5px] text-black md:text-base">April 17, 2026</p>
                                    Tahniah 🌟👏 Kepada semua pemenang pertandingan nyanyian peringkat Daerah Petaling
                                </div>
                                <div>
                                    {/* RIGHT IMAGE */}
                                    <a href="/IramaMenggetarkanPentas" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                        <img
                                            src="/assets/images/AdminAnnouncement/IramaMenggetarkanPentas.jpeg"
                                            alt="Bidikan Mantap dari Lim Shyee Qing"
                                            className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </a>
                                </div>
                            </p>
                            {/* 22- Irama Menggetarkan Pentas*/}

                            <p className="pt-10 text-justify text-sm font-semibold text-black md:flex md:justify-between md:text-lg">
                                <div>
                                    <a
                                        href="/MerentasCabaranMenjulangKejayaan"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 underline"
                                    >
                                        Merentas Cabaran, Menjulang Kejayaan!
                                    </a>{' '}
                                    <div className="text-sm">by SMKDJ</div>
                                    <p className="mt-2 text-[5px] text-black md:text-base">April 17, 2026</p>
                                    Pencapaian atlet SMK Damansara Jaya pada Kejohanan MSSS Merentas Desa.
                                </div>
                                <div>
                                    {/* RIGHT IMAGE */}
                                    <a href="/MerentasCabaranMenjulangKejayaan" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                        <img
                                            src="/assets/images/AdminAnnouncement/MerentasCabaranMenjulangKejayaan.jpeg"
                                            alt="Bidikan Mantap dari Lim Shyee Qing"
                                            className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </a>
                                </div>
                            </p>
                            {/* 23- Bidikan Mantap dari Lim Shyee Qing (1 Angsana)*/}

                            <p className="pt-10 text-justify text-sm font-semibold text-black md:flex md:justify-between md:text-lg">
                                <div>
                                    <a href="/BidikanMantap" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Bidikan Mantap dari Lim Shyee Qing (1 Angsana)
                                    </a>{' '}
                                    <div className="text-sm">by SMKDJ</div>
                                    <p className="mt-2 text-[5px] text-black md:text-base">April 17, 2026</p>
                                    Tahniah.Peserta tunggal dari SMKDJ mendapat tempat ke 5 kategori recurve
                                </div>
                                <div>
                                    {/* RIGHT IMAGE */}
                                    <a href="/BidikanMantap" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                        <img
                                            src="/assets/images/Academic/BidikanMantap.JPEG"
                                            alt="Bidikan Mantap dari Lim Shyee Qing"
                                            className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </a>
                                </div>
                            </p>
                            {/* 24- Jejak Larian, Memburu Kegemilangan!*/}

                            <p className="pt-10 text-justify text-sm font-semibold text-black md:flex md:justify-between md:text-lg">
                                <div>
                                    <a href="/JejakLarian" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Jejak Larian, Memburu Kegemilangan!
                                    </a>{' '}
                                    <div className="text-sm">by SMKDJ</div>
                                    <p className="mt-2 text-[5px] text-black md:text-base">April 17, 2026</p>
                                    Tahniah diucapkan kepada atlet SMK Damansara Jaya yang telah menunjukkan
                                </div>
                                <div>
                                    {/* RIGHT IMAGE */}
                                    <a href="/JejakLarian" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                        <img
                                            src="/assets/images/Academic/JejakLarian.JPEG"
                                            alt="Bidikan Mantap dari Lim Shyee Qing"
                                            className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </a>
                                </div>
                            </p>

                            {/* 25- JW UJIAN PERTENGAHAN SESI AKADEMIK 2026*/}

                            <p className="pt-10 text-justify text-sm font-semibold text-black md:flex md:justify-between md:text-lg">
                                <div>
                                    <a href="/JWUJIAN" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        JW UJIAN PERTENGAHAN SESI AKADEMIK 2026
                                    </a>{' '}
                                    <div className="text-sm">by SMKDJ</div>
                                    <p className="mt-2 text-[5px] text-black md:text-base">April 17, 2026</p>
                                </div>
                                <div>
                                    {/* RIGHT IMAGE */}
                                    <a href="/JWUJIAN" className="block h-[100px] w-[100px] flex-none overflow-hidden">
                                        <img
                                            src="/assets/images/AcademicJWUJIAN.JPEG"
                                            alt="Bidikan Mantap dari Lim Shyee Qing"
                                            className="block h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </a>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SMKDJNews;
