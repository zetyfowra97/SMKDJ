import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { useEffect } from 'react';

const UpgradingoftheSchoolHall = () => {
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
                        <h6 className="!text-secondary">Facilities, Gallery, PIBG</h6>

                        <p className="text-4xl font-bold text-black">Upgrading of the school hall</p>
                        <div>
                            <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg"></p>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <img src="/assets/images/userimages.png" alt="user" className="h-6 w-6 object-contain" />
                                    <p className="text-[12px] font-semibold text-black">TJ Ooi</p>
                                </div>
                                <img src="/assets/images/dateandtime.png" alt="user" className="h-4 w-4 object-contain" />
                                <p className="text-[12px] font-semibold text-black">November 12, 2020</p>
                            </div>

                            <div>
                                <p className="text-justify text-sm font-semibold text-black md:text-lg">
                                    One of the important projects taken up by the PIBG was to upgrade the Dewan Sekolah. Besides a new coat of paint, the new
                                    hall will be fully air-conditioned, with brighter lighting and new furnishing. The electricals will be upgraded and there
                                    will be WIFI connectivity throughout.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    {/* 1 */}
                    <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="image-container group overflow-hidden rounded-xl text-xl font-medium">
                            <img
                                src="/assets/images/facilities/upgradingoftheschoolhall.png"
                                alt="gallery-1"
                                className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                            />
                            <div className="absolute bottom-0 left-0 p-4">
                                <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                    Pak Din hard at work
                                </h2>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="image-container group overflow-hidden rounded-xl text-xl font-medium">
                            <img
                                src="/assets/images/facilities/upgradingoftheschoolhall2.jpg"
                                alt="gallery-1"
                                className="h-[300px] w-full object-cover pt-20 duration-500 hover:scale-110 md:h-full"
                            />
                            <div className="absolute bottom-0 left-0 p-4">
                                <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                    Upgrade in progress
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UpgradingoftheSchoolHall;
