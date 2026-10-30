import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { useEffect } from 'react';

const ProgramSekolahkuSejahtera = () => {
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
                        <h6 className="!text-secondary">Academic, Co-Curriculum, Hal Ehwal Murid</h6>

                        <p className="text-4xl font-bold text-black">Program Sekolahku Sejahtera: Sepakat dan Selamat (Kesedaran Hentikan Buli).</p>
                        <div>
                            <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg"></p>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <img src="/assets/images/userimages.png" alt="user" className="h-6 w-6 object-contain" />
                                    <p className="text-[12px] font-semibold text-black">SMKDJ</p>
                                </div>
                                <img src="/assets/images/dateandtime.png" alt="user" className="h-4 w-4 object-contain" />
                                <p className="text-[12px] font-semibold text-black">September 21, 2022</p>
                            </div>

                            <div>
                                <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">20 September 2022</p>
                            </div>

                            <div>
                                <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">Rabu</p>
                            </div>

                            <div>
                                <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">
                                    Kunjungan Pegawai Kanan dan Anggota Polis Diraja Malaysia (PDRM) dari Ibu Pejabat Polis Daerah(IPD) Petaling Jaya dan tetamu
                                    jemputan En Syukry bin Muhammad Sabri Pen.PPDPU Unit Hal Ehwal Murid dan Pn Stephanie Cheong Ngee Fui YDP PIBG SMK Damansara
                                    Jaya.
                                </p>
                            </div>

                            <div>
                                <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">
                                    Pada hari ini Sekolah Menengah Kebangsaan Damansara Jaya berbesar hati menerima kunjungan dari KBPJKK DSP SIVAKUMAR A/L
                                    THANKARAJA yang merupakan selaku penceramah Program Sekolahku Sejahtera :Sepakat dan Selamat. Disamping itu, Terdapat juga
                                    pameran motosikal berkuasa tinggi dan MPV serta booth-booth dari Unit Pencegahan Jenayah dan Trafik dari IPD Petaling Jaya.
                                </p>
                            </div>

                            <div>
                                <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">
                                    Ribuan terima kasih kepada pegawai kanan serta Anggota PDRM dari IPD Petaling Jaya, Pen.PPD dan YDP PIBG kerana sudi
                                    meluangkan masa bagi menjayakan program pada hari ini.
                                </p>
                            </div>

                            <div>
                                <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">
                                    Terima kasih juga kepada Pentadbir,Guru-guru,Staf sokongan,Murid-murid serta semua pihak yang menjayakan Program Sekolahku
                                    Sejahtera: Sepakat dan Selamat (Kesedaran Hentikan Buli).
                                </p>
                            </div>

                            <div>
                                <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">
                                    Semoga program ini dapat mengeratkan hubungan silaturrahim antara Pihak sekolah dengan PDRM Petaling Jaya sesuai dengan
                                    Slogan “polis dan masyarakat berpisah tiada’ dan memberi input yang berguna kepada guru-guru,pelajar-pelajar dan pihak yang
                                    terlibat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    {/* 1 */}
                    <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                        <img
                            src="/assets/images/Academic/ProgramSekolahkuSejahtera.jpg"
                            alt="gallery-1"
                            className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                        />
                    </div>

                    {/* 2 */}
                    <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                        <img
                            src="/assets/images/Academic/ProgramSekolahkuSejahtera2.jpg"
                            alt="gallery-1"
                            className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                        />
                    </div>

                    {/* 3 */}
                    <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                        <img
                            src="/assets/images/Academic/ProgramSekolahkuSejahtera3.jpg"
                            alt="gallery-1"
                            className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                        />
                    </div>

                    {/* 4 */}
                    <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                        <img
                            src="/assets/images/Academic/ProgramSekolahkuSejahtera4.jpg"
                            alt="gallery-1"
                            className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                        />
                    </div>

                    {/* 5 */}
                    <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                        <img
                            src="/assets/images/Academic/ProgramSekolahkuSejahtera5.jpg"
                            alt="gallery-1"
                            className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                        />
                    </div>

                    {/* 6 */}
                    <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                        <img
                            src="/assets/images/Academic/ProgramSekolahkuSejahtera6.jpg"
                            alt="gallery-1"
                            className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                        />
                    </div>

                    {/* 7 */}
                    <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                        <img
                            src="/assets/images/Academic/ProgramSekolahkuSejahtera7.jpg"
                            alt="gallery-1"
                            className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                        />
                    </div>

                    {/* 8 */}
                    <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                        <img
                            src="/assets/images/Academic/ProgramSekolahkuSejahtera8.jpg"
                            alt="gallery-1"
                            className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                        />
                    </div>

                    {/* 9 */}
                    <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                        <img
                            src="/assets/images/Academic/ProgramSekolahkuSejahtera9.jpg"
                            alt="gallery-1"
                            className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                        />
                    </div>

                    {/* 10 */}
                    <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                        <img
                            src="/assets/images/Academic/ProgramSekolahkuSejahtera10.jpg"
                            alt="gallery-1"
                            className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                        />
                    </div>

                    {/* 11 */}
                    <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                        <img
                            src="/assets/images/Academic/ProgramSekolahkuSejahtera11.jpg"
                            alt="gallery-1"
                            className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                        />
                    </div>

                    {/* 12 */}
                    <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                        <img
                            src="/assets/images/Academic/ProgramSekolahkuSejahtera12.jpg"
                            alt="gallery-1"
                            className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                        />
                    </div>

                    {/* 13 */}
                    <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                        <img
                            src="/assets/images/Academic/ProgramSekolahkuSejahtera13.jpg"
                            alt="gallery-1"
                            className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                        />
                    </div>

                    {/* 14 */}
                    <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                        <img
                            src="/assets/images/Academic/ProgramSekolahkuSejahtera14.jpg"
                            alt="gallery-1"
                            className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                        />
                    </div>

                    {/* 15 */}
                    <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                        <img
                            src="/assets/images/Academic/ProgramSekolahkuSejahtera15.jpg"
                            alt="gallery-1"
                            className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                        />
                    </div>

                    {/* 16 */}
                    <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                        <img
                            src="/assets/images/Academic/ProgramSekolahkuSejahtera16.jpg"
                            alt="gallery-1"
                            className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                        />
                    </div>

                    {/* 17  */}
                    <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                        <img
                            src="/assets/images/Academic/ProgramSekolahkuSejahtera17.jpg"
                            alt="gallery-1"
                            className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProgramSekolahkuSejahtera;
