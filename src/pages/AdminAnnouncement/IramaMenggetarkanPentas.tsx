import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IRootState } from '../store';
import { useEffect } from 'react';

const IramaMenggetarkanPentas = () => {
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
                <div className="w-full px-5 md:w-1/2 md:px-0" data-aos="fade-right" data-aos-duration="1500">
                    <div className={`heading mt-10 text-center ${isRtl ? 'rtl:lg:text-right' : 'ltr:lg:text-left'}`}>
                        <h6 className="!text-secondary">Admin-Announcements, UNESCO</h6>

                        <p className="text-3xl font-bold text-black md:text-4xl">Irama Menggetarkan Pentas</p>

                        {/* AUTHOR AND DATE */}
                        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                            <div className="flex items-center gap-1">
                                <img src="/assets/images/userimages.png" alt="Author" className="h-6 w-6 object-contain" />

                                <p className="text-xs font-semibold text-black">SMKDJ</p>
                            </div>

                            <div className="flex items-center gap-1">
                                <img src="/assets/images/dateandtime.png" alt="Date" className="h-4 w-4 object-contain" />

                                <p className="text-xs font-semibold text-black">April 17, 2026</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="grid grid-cols-12 gap-2 md:gap-6">
                        {/* 1 */}

                        <div className="relative col-span-12 md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl">
                                <img
                                    src="/assets/images/AdminAnnouncement/IramaMenggetarkanPentas.jpeg"
                                    alt="gallery-1"
                                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="relative col-span-12 md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl">
                                <img
                                    src="/assets/images/AdminAnnouncement/IramaMenggetarkanPentas2.jpeg"
                                    alt="gallery-1"
                                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                            </div>
                        </div>

                        {/*3*/}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group overflow-hidden rounded-xl text-xl font-medium">
                                <img
                                    src="/assets/images/AdminAnnouncement/IramaMenggetarkanPentas3.jpeg"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full px-5 md:w-1/2 md:px-0" data-aos="fade-right" data-aos-duration="1500">
                    <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right">
                        <p className="mt-4 text-justify text-sm font-semibold text-black md:text-lg">Tahniah 🌟👏</p>
                    </div>
                </div>

                <div className="w-full px-5 md:w-1/2 md:px-0" data-aos="fade-right" data-aos-duration="1500">
                    <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right">
                        <p className="mt-4 text-justify text-sm font-semibold text-black md:text-lg">
                            <br />
                            <br />
                            peringkat Daerah Petaling Utama kategori Genta Suara 2026 yang berlangsung di MSU, Shah Alam 🎤✨
                        </p>
                    </div>
                </div>

                <div className="w-full px-5 md:w-1/2 md:px-0" data-aos="fade-right" data-aos-duration="1500">
                    <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right">
                        <p className="text-4xl font-bold text-black">Nyanyian Duo</p>

                        <p className="mt-4 text-justify text-sm font-semibold text-black md:text-lg">
                            <br />
                            • Carynna Chao – 2 Batai
                            <br />
                            <br />
                            • Crystianna Chao – 1 Balau
                            <br />
                        </p>
                    </div>
                </div>

                <div className="w-full px-5 md:w-1/2 md:px-0" data-aos="fade-right" data-aos-duration="1500">
                    <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right">
                        <p className="text-4xl font-bold text-black">Nyanyian Solo (L)</p>

                        <p className="mt-4 text-justify text-sm font-semibold text-black md:text-lg">
                            <br />
                            Mustaqeem B. Mohd Izhan – 5 Batai
                            <br />
                        </p>
                    </div>
                </div>
                <div className="w-full px-5 md:w-1/2 md:px-0" data-aos="fade-right" data-aos-duration="1500">
                    <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right">
                        <p className="text-4xl font-bold text-black">Nyanyian Solo (P)</p>

                        <p className="mt-4 text-justify text-sm font-semibold text-black md:text-lg">
                            <br />
                            Julia Ayriel Lim-Anderson – 3 Belian Post navigation
                            <br />
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IramaMenggetarkanPentas;
