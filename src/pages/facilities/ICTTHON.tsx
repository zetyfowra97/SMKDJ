import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { useEffect } from 'react';

const ICTTHON = () => {
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
                        <h6 className="!text-secondary">Facilities, PIBG</h6>

                        <p className="text-4xl font-bold text-black">ICT-THON 2018</p>
                        <div>
                            <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg"></p>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <img src="/assets/images/userimages.png" alt="user" className="h-6 w-6 object-contain" />
                                    <p className="text-[12px] font-semibold text-black">TJ Ooi</p>
                                </div>
                                <img src="/assets/images/dateandtime.png" alt="user" className="h-4 w-4 object-contain" />
                                <p className="text-[12px] font-semibold text-black">August 11, 2018</p>
                            </div>

                            <div>
                                <p className="text-justify text-sm font-semibold text-black md:text-lg">
                                    Karnival ICT-Thon telah diadakan pada 11 Ogos 2018 di SMK Damansara Jaya.
                                </p>
                            </div>

                            <div>
                                <p className="text-justify text-sm font-semibold text-black md:text-lg">Objektif Karnival ICT-Thon SMKDJ 2018:</p>
                            </div>

                            <div>
                                <p className="text-justify text-sm font-semibold text-black md:text-lg">
                                    Menggantikan 40 buah komputer lama yang tidak dapat menampung keperluan semasa yang lebih canggih bagi membantu pengajaran
                                    dan pembelajaran Komputer Sains (SPM) dan Asas Sains Komputer (Ting. 1, 2, 3).
                                </p>
                            </div>

                            <div>
                                <p className="text-justify text-sm font-semibold text-black md:text-lg">
                                    Menyediakan awning dan penutup longkang di kawasan sekolah yang sudah reput dan rosak, khasnya di kantin sekolah, dewan
                                    pavilion, makmal sains, dan makmal komputer bagi menjamin keselamatan dan keselesaan murid.
                                </p>
                            </div>

                            <div>
                                <p className="text-justify text-sm font-semibold text-black md:text-lg">
                                    Memberi peluang untuk menyemai nilai-nilai murni seperti kerjasama, kejujuran, amanah dan kepimpinan kepada semua murid.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="grid md:gap-6">
                        {/* 1 */}

                        <div className="relative" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl">
                                <img
                                    src="/assets/images/facilities/ICTTHON.JPEG"
                                    alt="gallery-1"
                                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ICTTHON;
