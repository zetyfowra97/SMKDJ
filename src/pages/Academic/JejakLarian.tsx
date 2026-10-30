import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { useEffect } from 'react';

const JejakLarian = () => {
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
                        <h6 className="!text-secondary">Academic, Admin-Announcements, Co-Curriculum</h6>

                        <p className="text-4xl font-bold text-black">Jejak Larian, Memburu Kegemilangan!</p>
                        <div>
                            <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg"></p>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <img src="/assets/images/userimages.png" alt="user" className="h-6 w-6 object-contain" />
                                    <p className="text-[12px] font-semibold text-black">Norazila Awang</p>
                                </div>
                                <img src="/assets/images/dateandtime.png" alt="user" className="h-4 w-4 object-contain" />
                                <p className="text-[12px] font-semibold text-black">April 17, 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    {/* 4 */}
                    <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="image-container group overflow-hidden rounded-xl text-xl font-medium">
                            <img
                                src="/assets/images/Academic/JejakLarian.JPEG"
                                alt="gallery-1"
                                className="h-[300px] w-full object-cover pt-20 duration-500 hover:scale-110 md:h-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full px-5 md:w-1/2 md:px-0">
                    <div>
                        <div className="pt-5">
                            <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">
                                Tahniah diucapkan kepada atlet SMK Damansara Jaya yang telah menunjukkan prestasi cemerlang dalam Kejohanan MSSD Merentas Desa
                                dengan pencapaian seperti berikut:
                            </p>
                        </div>

                        <div className="pt-5">
                            <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">Kategori P2</p>
                            <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">• Sree – Tempat ke-6</p>
                            <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">• Valerie – Tempat ke-7</p>
                            <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">• Hui Yu – Tempat ke-8</p>
                            <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">➡️ Ketiga-tiga atlet ini layak ke peringkat MSSS</p>
                        </div>

                        <div className="pt-5">
                            <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">Choo En Li bijak bestari,</p>
                        </div>

                        <div className="pt-5">
                            <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">Kategori L2</p>
                            <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">• Daniel – Tempat ke-10</p>
                            <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">• Caleb – Tempat ke-6</p>
                            <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">➡️ Caleb layak ke peringkat MSSS</p>
                        </div>

                        <div className="pt-5">
                            <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">Kategori P1</p>
                            <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">• Zafira – Tempat ke-18</p>
                            <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">• Zoe – Tempat ke-17</p>
                            <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">• Jia Xi – Tempat ke-10</p>
                        </div>

                        <div className="pt-5">
                            <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">Kategori L1</p>
                            <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">• Rizqee – Tempat ke-12</p>
                            <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">• Jun Han – Tempat ke-14</p>
                        </div>

                        <div className="pt-5">
                            <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">
                                Selain itu, syabas dan tahniah kepada pasukan L2 SMK Damansara Jaya yang telah berjaya meraih tempat ketiga dalam acara
                                berpasukan, sekali gus mengharumkan nama sekolah.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JejakLarian;
