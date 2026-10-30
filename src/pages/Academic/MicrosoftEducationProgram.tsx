import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { useEffect } from 'react';

const MicrosoftEducationProgram = () => {
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
                        <h6 className="!text-secondary">Academic, Academic-Announcements, Main Page</h6>

                        <p className="text-4xl font-bold text-black">Microsoft Education Program Showcase School</p>
                        <div>
                            <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg"></p>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <img src="/assets/images/userimages.png" alt="user" className="h-6 w-6 object-contain" />
                                    <p className="text-[12px] font-semibold text-black">SMKDJ</p>
                                </div>
                                <img src="/assets/images/dateandtime.png" alt="user" className="h-4 w-4 object-contain" />
                                <p className="text-[12px] font-semibold text-black">September 18, 2022</p>
                            </div>
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20 pb-10">
                                <img
                                    src="/assets/images/Academic/MicrosoftEducation.png"
                                    alt="gallery-1"
                                    className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                            </div>

                            <div>
                                <p className="pt-0 text-left text-sm font-normal leading-[1.8] text-[#444444] md:text-lg">
                                    <a
                                        href="https://www.microsoft.com/en-us/education/school-leaders"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#F58220] underline"
                                    >
                                        The Microsoft Showcase Schools Program
                                    </a>{' '}
                                    is an opportunity to engage with Microsoft and like-minded school leaders around the world to deepen and expand education
                                    transformation using{' '}
                                    <a
                                        href="https://www.microsoft.com/en-us/education/school-leaders"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#F58220] underline"
                                    >
                                        the Education Transformation Framework.
                                    </a>
                                </p>
                            </div>

                            <div>
                                <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">
                                    Building on our decades of work with policy makers, school leaders and educators around the world, Microsoft supports
                                    Schools in the Showcase School program with resources and ideas turn their vision into reality.
                                </p>
                            </div>

                            <div>
                                <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">
                                    Showcase Schools create student-centered, immersive, and inclusive experiences that inspire lifelong learning, stimulating
                                    development of essential future-ready skills so students are empowered to achieve more.
                                </p>
                            </div>

                            <div>
                                <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">
                                    Congratulations to SMK Damansara Jaya for being selected as a handful of schools in Malaysia as a Microsoft Showcase School.
                                </p>
                            </div>

                            <div>
                                <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">
                                    Congratulations also to the following teachers who are now Microsoft Innovative Educator Expert ( MIE ) !
                                </p>
                            </div>

                            <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                                <img
                                    src="/assets/images/Academic/MicrosoftEducation2.jpeg"
                                    alt="gallery-1"
                                    className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                            </div>

                            {/* 2 */}
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                                <img
                                    src="/assets/images/Academic/MicrosoftEducation3.jpeg"
                                    alt="gallery-1"
                                    className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                            </div>

                            {/* 3 */}
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                                <img
                                    src="/assets/images/Academic/MicrosoftEducation4.jpeg"
                                    alt="gallery-1"
                                    className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                            </div>

                            {/* 4 */}
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                                <img
                                    src="/assets/images/Academic/MicrosoftEducation5.jpeg"
                                    alt="gallery-1"
                                    className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                            </div>

                            {/* 5 */}
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                                <img
                                    src="/assets/images/Academic/MicrosoftEducation6.jpeg"
                                    alt="gallery-1"
                                    className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                                />
                            </div>

                            {/* 6 */}
                            <div className="image-container group h-full w-full overflow-hidden rounded-xl pt-20">
                                <img
                                    src="/assets/images/Academic/MicrosoftEducation7.jpeg"
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

export default MicrosoftEducationProgram;
