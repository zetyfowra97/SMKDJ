import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { useEffect } from 'react';

const UpgradingofICT = () => {
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

                        <p className="text-4xl font-bold text-black">Upgrading of ICT Infrastructure</p>
                        <div>
                            <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg"></p>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <img src="/assets/images/userimages.png" alt="user" className="h-6 w-6 object-contain" />
                                    <p className="text-[12px] font-semibold text-black">TJ Ooi</p>
                                </div>
                                <img src="/assets/images/dateandtime.png" alt="user" className="h-4 w-4 object-contain" />
                                <p className="text-[12px] font-semibold text-black">January 1, 2021</p>
                            </div>

                            <div>
                                <p className="text-justify text-sm font-semibold text-black md:text-lg">
                                    The existing computer network infrastructure in SMKDJ is almost 12 years old. We have legacy equipment from even when the
                                    school was first established. As part of the improvement program in 2020, PIBG together with volunteer parents and teachers
                                    have embarked on a modernisation program to bring up the school to the new digital age.
                                </p>
                            </div>
                        </div>

                        <div>
                            <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg"></p>

                            <div>
                                <p className="text-justify text-sm font-semibold text-black md:text-lg">
                                    Besides making sure every corner of the school has Wifi access, all Lab computers have been upgraded to have Gigabit LAN
                                    connection out to the internet. The network switches and wireless access equipment have also been upgraded to enterprise
                                    quality infrastructure. This will ensure we can have multiple Google Meet and Zoom online lessons anywhere in the school !
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
                                    src="/assets/images/facilities/facility1.JPEG"
                                    alt="gallery-1"
                                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100/75 text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        Low latency and high speed
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="relative col-span-12 md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl">
                                <img
                                    src="/assets/images/facilities/facility2.JPEG"
                                    alt="gallery-1"
                                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100/75 text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        WIFI access throughout the school
                                    </h2>
                                </div>
                            </div>
                        </div>

                        {/*3*/}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group overflow-hidden rounded-xl text-xl font-medium">
                                <img
                                    src="/assets/images/facilities/facility3.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />

                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        Guest WIFI
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* 4*/}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group overflow-hidden rounded-xl text-xl font-medium">
                                <img
                                    src="/assets/images/facilities/facility4.JPG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        Replacement of Switches
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* 5 */}
                        <div className="relative col-span-12 md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl">
                                <img
                                    src="/assets/images/facilities/facility5.JPG"
                                    alt="gallery-1"
                                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100/75 text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        Repairing Electrical Faults
                                    </h2>
                                </div>
                            </div>
                        </div>

                        {/*6 */}

                        <div className="relative col-span-12 md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl">
                                <img
                                    src="/assets/images/facilities/facility6.JPG"
                                    alt="gallery-1"
                                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100/75 text-[27px] font-semibold text-white md:group-hover:animate-hex-up">LAN Networks</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 7 */}
                    <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="image-container group overflow-hidden rounded-xl text-xl font-medium">
                            <img
                                src="/assets/images/facilities/facility7.JPG"
                                alt="gallery-1"
                                className="h-[300px] w-full object-cover pt-20 duration-500 hover:scale-110 md:h-full"
                            />
                            <div className="absolute bottom-0 left-0 p-4">
                                <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                    Core switches and Server
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UpgradingofICT;
