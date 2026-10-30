import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { useEffect } from 'react';

const FunChallenge2022 = () => {
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
                        <h6 className="!text-secondary">Academic, Academic-Announcements, Clubs & Societies, Co-Curriculum, Main Page, Robotics</h6>

                        <p className="text-4xl font-bold text-black">Fun Challenge 2022</p>
                        <div>
                            <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg"></p>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <img src="/assets/images/userimages.png" alt="user" className="h-6 w-6 object-contain" />
                                    <p className="text-[12px] font-semibold text-black">SMKDJ</p>
                                </div>
                                <img src="/assets/images/dateandtime.png" alt="user" className="h-4 w-4 object-contain" />
                                <p className="text-[12px] font-semibold text-black">August 29, 2022</p>
                            </div>

                            <div>
                                <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">
                                    The objective of the FUN CHALLENGE with ZOOM:BIT is to inspire students to be able to complete all the challenges under the
                                    pressure of limited time quickly and correctly by using Microsoft MakeCode Editor.
                                </p>
                            </div>

                            <div>
                                <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">
                                    Competitors are to navigate and complete a sequence of steps in a limited time while combining programming and robotics.
                                </p>
                            </div>

                            <div>
                                <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">
                                    Congratulations to the following students who made the school proud !
                                </p>
                            </div>

                            <div>
                                <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">
                                    The support of the robotic coach, Mr Tee was vital to the students’ success. Congratulations to all the 🏆 winners
                                </p>
                            </div>

                            <div>
                                <p className="pt-0 text-left text-sm font-normal leading-[1.8] text-[#444444] md:text-lg">
                                    <a
                                        href="https://sites.google.com/view/fcl2022/rules-regulations?authuser=0"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#F58220] underline"
                                    >
                                        https://sites.google.com/view/fcl2022/rules-regulations?authuser=0
                                    </a>
                                </p>
                            </div>

                            {/* 1 */}
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                                <img
                                    src="/assets/images/Academic/FunChallenge.jpeg"
                                    alt="gallery-1"
                                    className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                            </div>

                            {/* 2 */}
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                                <img
                                    src="/assets/images/Academic/FunChallenge2.jpeg"
                                    alt="gallery-1"
                                    className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                            </div>

                            {/* 3 */}
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                                <img
                                    src="/assets/images/Academic/FunChallenge3.jpeg"
                                    alt="gallery-1"
                                    className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                            </div>

                            {/* 4 */}
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                                <img
                                    src="/assets/images/Academic/FunChallenge4.jpeg"
                                    alt="gallery-1"
                                    className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                            </div>

                            {/* 5 */}
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                                <img
                                    src="/assets/images/Academic/FunChallenge5.jpeg"
                                    alt="gallery-1"
                                    className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                            </div>

                            {/* 6 */}
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                                <img
                                    src="/assets/images/Academic/FunChallenge6.jpeg"
                                    alt="gallery-1"
                                    className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                            </div>

                            {/* 7 */}
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                                <img
                                    src="/assets/images/Academic/FunChallenge7.jpeg"
                                    alt="gallery-1"
                                    className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                            </div>

                            {/* 8 */}
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                                <img
                                    src="/assets/images/Academic/FunChallenge8.jpeg"
                                    alt="gallery-1"
                                    className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">{/* 1 */}</div>
            </section>
        </div>
    );
};

export default FunChallenge2022;
