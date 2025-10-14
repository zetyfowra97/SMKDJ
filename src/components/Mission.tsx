import React, { useRef } from 'react';

const Mission = () => {
    const dialog: any = useRef();

    return (
        <div>
            <section className="overflow-x-hidden bg-gradient-to-t from-white/[55%] to-transparent dark:bg-none">
                <div className="relative bg-center">
                    <img
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        src="/assets/images/mission-and-vision-text.png"
                        alt="how-we-do-it"
                        className="w-full px-2 md:px-10 lg:block"
                    />
                    <img
                        style={{ filter: 'grayscale(0.2) brightness(0.6)' }}
                        src="/assets/images/mission-and-vison-img.png"
                        alt="service-video-bg"
                        className="gray-scale relative z-[1] w-full filter h-[600px] object-cover md:object-fit  -translate-y-[20px] "
                    />
                    {/* <div className="absolute -inset-x-4 bottom-0 h-12 -rotate-[2deg] bg-[#7780A1]/10 xl:bottom-3"></div> */}
                    <div className="absolute top-1/2 z-[1] w-[70%] -translate-y-1/2 md:-translate-y-1/3 ltr:left-1/2 ltr:-translate-x-1/2 rtl:right-5 rtl:pl-5 lg:w-[40%] ltr:lg:left-[10%] ltr:lg:translate-x-0 rtl:lg:right-[10%]">
                        <div className={`heading-mission text-center text-xs lg:text-xl ltr:lg:text-left rtl:lg:text-right`}>
                            <h6>Mission</h6>
                            <p className="text-sm md:text-lg break-words pb-8 text-white sm:leading-[22px]">
                                To revolutionize the democratic process and empower individuals by providing secure, transparent, and accessible
                                blockchain-based voting solutions that ensure integrity and trust in every poll.
                            </p>
                        </div>
                        <div className={`heading-mission text-center text-xs lg:text-xl ltr:lg:text-left rtl:lg:text-right`}>
                            <h6>Vision</h6>
                            <p className="text-sm md:text-lg break-words pb-8 text-white sm:leading-[22px]">
                                Our mission is to redefine the way elections are conducted worldwide by leveraging the power of blockchain technology. We strive
                                to deliver cutting-edge voting applications that guarantee privacy and accuracy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mission;
