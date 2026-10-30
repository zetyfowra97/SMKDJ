import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { useEffect } from 'react';

const GuidetoWIFI = () => {
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

                        <p className="text-4xl font-bold text-black">Guide to WIFI @ DJ</p>
                        <div>
                            <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg"></p>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <img src="/assets/images/userimages.png" alt="user" className="h-6 w-6 object-contain" />
                                    <p className="text-[12px] font-semibold text-black">TJ Ooi</p>
                                </div>
                                <img src="/assets/images/dateandtime.png" alt="user" className="h-4 w-4 object-contain" />
                                <p className="text-[12px] font-semibold text-black">September 12, 2020</p>
                            </div>

                            <div>
                                <p className="text-justify text-sm font-semibold text-black md:text-lg">
                                    Great news ! Took us awhile, but we now have school wide access to WIFI !
                                </p>
                            </div>
                        </div>

                        <div>
                            <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg"></p>

                            <div>
                                <p className="text-justify text-sm font-semibold text-black md:text-lg">
                                    For all Admin and Academic staff, you will be given a new SSID ( smkdj ) and password. For students and visitors, you can
                                    register with our Guest WIFI y5@smkdj. Register using your email address and enjoy free wireless access at school.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="grid grid-cols-8 gap-2 md:gap-6">
                        {/* 1 */}

                        <div className="relative col-span-12 md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl">
                                <img
                                    src="/assets/images/facilities/GuidetoWIFI.JPG"
                                    alt="gallery-1"
                                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100/75 text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        Pak Din installing Access Point (AP) at Block B
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="relative col-span-12 md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl">
                                <img
                                    src="/assets/images/facilities/GuidetoWIFI2.JPG"
                                    alt="gallery-1"
                                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100/75 text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        Cisco Aironet AP throughout the entire school
                                    </h2>
                                </div>
                            </div>
                        </div>

                        {/*3*/}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group overflow-hidden rounded-xl text-xl font-medium">
                                <img
                                    src="/assets/images/facilities/GuidetoWIFI3.JPG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />

                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        WIFI access at Library
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* 4*/}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group overflow-hidden rounded-xl text-xl font-medium">
                                <img
                                    src="/assets/images/facilities/GuidetoWIFI4.JPG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        Full 100MBPS across all equipment in
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* 5 */}
                        <div className="relative col-span-12 md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl">
                                <img
                                    src="/assets/images/facilities/GuidetoWIFI5.JPEG"
                                    alt="gallery-1"
                                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100/75 text-[27px] font-semibold text-white md:group-hover:animate-hex-up">WIFI mobile access</h2>
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

export default GuidetoWIFI;
