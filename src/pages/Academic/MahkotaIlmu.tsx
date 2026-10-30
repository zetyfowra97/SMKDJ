import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { useEffect } from 'react';

const MahkotaIlmu = () => {
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
                        <h6 className="!text-secondary">Academic</h6>

                        <p className="text-4xl font-bold text-black">Mahkota Ilmu Diraja milik Choo En Li!</p>
                        <div>
                            <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg"></p>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <img src="/assets/images/userimages.png" alt="user" className="h-6 w-6 object-contain" />
                                    <p className="text-[12px] font-semibold text-black">Norazila Awang</p>
                                </div>
                                <img src="/assets/images/dateandtime.png" alt="user" className="h-4 w-4 object-contain" />
                                <p className="text-[12px] font-semibold text-black">May 2, 2026</p>
                            </div>

                            <div>
                                <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">Mentari pagi cerah berseri,</p>
                            </div>

                            <div>
                                <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">Burung terbang tinggi di awan,</p>
                            </div>

                            <div>
                                <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">Choo En Li bijak bestari,</p>
                            </div>

                            <div>
                                <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">Menjadi kebanggaan sepanjang zaman.</p>
                            </div>

                            <div>
                                <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">
                                    10 orang murid cemerlang Kebangsaan SPM 2025 diraikan di Istana Negara.
                                </p>
                            </div>

                            <div>
                                <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">Tahniah Choo En Li wakil tunggal dari SMK</p>
                            </div>

                            <div>
                                <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">
                                    Damansara Jaya dan PPD Petaling Utama tergolong dalam sepuluh calon terbaik di Malaysia.
                                </p>
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
                                    src="/assets/images/Academic/MahkotaIlmu.JPEG"
                                    alt="gallery-1"
                                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="relative col-span-12 md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl">
                                <img
                                    src="/assets/images/Academic/MahkotaIlmu2.JPEG"
                                    alt="gallery-1"
                                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                            </div>
                        </div>

                        {/*3*/}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group overflow-hidden rounded-xl text-xl font-medium">
                                <img
                                    src="/assets/images/Academic/MahkotaIlmu3.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                            </div>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="image-container group overflow-hidden rounded-xl text-xl font-medium">
                            <img
                                src="/assets/images/Academic/MahkotaIlmu4.JPEG"
                                alt="gallery-1"
                                className="h-[300px] w-full object-cover pt-20 duration-500 hover:scale-110 md:h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MahkotaIlmu;
