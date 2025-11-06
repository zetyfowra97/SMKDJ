import { useEffect, useState } from 'react';
import 'react-18-image-lightbox/style.css';
import ProjectSlider from './ProjectSlider';
import { Link, useLocation } from 'react-router-dom';
import CareerPositions from './CareerPositions';

const Career = () => {
    const location = useLocation();
    const hash = location.hash; // Retrieve the hash value from the location object

    // Rest of your code...

    useEffect(() => {
        console.log('hash', hash);
        if (hash === '#section-1') {
            setTimeout(() => {
                handleClickScroll();
            }, 1000);
        }
    }, [hash]);
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
    document.title = 'Careers | FPG Solution & COnsultancy';

    useEffect(() => {
        window['global'] = window as never;
    }, []);

    return (
        <div>
            <div onClick={handleClickScroll} className="bg-[url(/assets/images/career-hero.png)] bg-cover bg-bottom bg-no-repeat">
                <div className="relative h-screen">
                    <div className="flex h-full items-center justify-center">
                        <div className="heading mb-0 text-center">
                            <h4 data-aos="fade-down" data-aos-duration="2000" className="heading !text-white" style={{ fontSize: '4rem' }}>
                                Careers
                            </h4>
                            {/* <div className="flex">
                                <p data-aos="fade-right" data-aos-duration="2000" className=" text-[42px] font-bold text-white mr-4">Pioneering</p>
                                <p data-aos="fade-up" data-aos-duration="2000" className=" text-[42px] font-bold text-white mr-4">the Art of</p>
                                <p data-aos="fade-left" data-aos-duration="2000" className="text-[42px] font-bold text-white text-primary">Blockchain Transformation</p>
                            </div> */}
                            <p data-aos="fade-up" data-aos-duration="2000" className="px-[10%] text-sm font-bold text-white md:px-[20%] md:text-xl">
                                Take the first step towards an exciting career by exploring the diverse opportunities available with us. Explore now and submit
                                your application to make a positive impact.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <ProjectSlider />

            <section className="mt-10 md:mt-20 bg-gradient-to-t from-white/[54%] to-transparent dark:bg-none ">
                <div className="container">
                    <div className="heading text-center">
                        <h6>Amazing Worklife</h6>
                        <h4>Great Benefits of Working with Us</h4>
                    </div>
                    <div className="grid grid-cols-12 gap-2 md:gap-6">
                        {/* whyworkwithus - Row 1  */}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group relative overflow-hidden rounded-xl text-xl font-medium">
                                <img
                                    src="/assets/images/career-whyworkwithus-1.png"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        A Fun Environment
                                    </h2>
                                    <p className="bg-gray-100 block bg-opacity-75 text-left text-sm text-white md:hidden md:group-hover:block md:group-hover:animate-hex-up">
                                        We prioritize a positive and fun work environment by restructuring our office to include gaming lounges, themed events,
                                        and formal codes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-8" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/career-whyworkwithus-2.png"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        Growth
                                    </h2>
                                    <p className="bg-gray-100 block bg-opacity-75 text-left text-sm text-white md:hidden md:group-hover:block md:group-hover:animate-hex-up">
                                        Our analysts predict Fintech growth will benefit our organization, leading to higher growth rates beyond the economy and
                                        ensuring our company's success.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* whyworkwithus - Row 2 */}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/career-whyworkwithus-3.png"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        People
                                    </h2>
                                    <p className="bg-gray-100 block bg-opacity-75 text-left text-sm text-white md:hidden md:group-hover:block md:group-hover:animate-hex-up">
                                        Our company values results and professionalism, respecting employees' personal lives while keeping drama out of the
                                        workplace.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/career-whyworkwithus-4.png"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        Teamwork
                                    </h2>
                                    <p className="bg-gray-100 block bg-opacity-75 text-left text-sm text-white md:hidden md:group-hover:block md:group-hover:animate-hex-up">
                                        Our work-peer system helps employees adapt and learn while emphasizing collective accountability and willingness to do
                                        right.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/career-whyworkwithus-5.png"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />

                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        Great Salary
                                    </h2>
                                    <p className="bg-gray-100 block bg-opacity-75 text-left text-sm text-white md:hidden md:group-hover:block md:group-hover:animate-hex-up">
                                        We offer competitive salaries based on employees' skills, experience, and contributions to our organization, thanks to
                                        our industry presence and successful growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* whyworkwithus - Row 3  */}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-8" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/career-whyworkwithus-6.png"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        Benefits
                                    </h2>
                                    <p className="bg-gray-100 block bg-opacity-75 text-left text-sm text-white md:hidden md:group-hover:block md:group-hover:animate-hex-up">
                                        In addition to a high starting salary, we offer unique benefits like professional upskilling opportunities paid on top
                                        of standard benefits.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/career-whyworkwithus-7.png"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />

                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        Advancement
                                    </h2>
                                    <p className="bg-gray-100 block bg-opacity-75 text-left text-sm text-white md:hidden md:group-hover:block md:group-hover:animate-hex-up">
                                        We value and reward employees with consistent work ethic and exceptional performance in the high-risk Fintech industry
                                        with fast-track progression opportunities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CareerPositions />

            <div className="hexagon"></div>
        </div>
    );
};

export default Career;
