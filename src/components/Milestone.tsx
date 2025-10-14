import React from 'react';
import { Chrono } from 'react-chrono';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { isMobile, isTablet, isDesktop } from 'react-device-detect';

const Milestone = () => {
    return (
        <>
            <div className="bg-[url(/assets/images/milestone-background.jpg)] bg-cover bg-fixed pt-20 pb-24">
                <div className="container">
                    <div className="heading text-center">
                        <h6>Milestones</h6>
                        <h4>Our Pathway to Success</h4>
                    </div>
                </div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'transparent' }}
                        contentArrowStyle={{ borderRight: '7px solid transparent' }}
                        iconStyle={{ background: '#101926', color: '#fff' }}
                        dateClassName="text-white"
                        date={isDesktop ? '2019' : ''}
                    >
                        <div className="relative mb-10 overflow-hidden rounded-xl border-2 border-primary bg-black text-white xl:float-right xl:w-[400px]">
                            {/* <div className="absolute top-0 left-4 z-10 float-left w-fit rounded-lg bg-[#000] p-4 md:right-4 md:float-right">
                                <h3 className=" text-left text-3xl font-extrabold text-primary xl:text-right">2019</h3>
                                <h3 className=" text-primary">Company Established</h3>
                            </div> */}
                            <div className="heading mb-0 p-6">
                                {/* <div className="relative h-full w-full">
                                    <img src="assets/images/milestone-1.jpg" className="h-[300px] w-[600px] rounded-lg object-cover" alt="" />
                                    <h4 className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-black px-4 py-6 font-semibold">
                                        FPG Solution & Consultancy Sdn. Bhd. was established in the year 2019.
                                    </h4>
                                </div> */}
                                {!isDesktop && (
                                    <h4 className="text-primary" style={{ color: '#79D8FE' }}>
                                        2019
                                    </h4>
                                )}

                                <h6 className="bg-black pb-4 ">Company Established</h6>
                                <p className="h-full w-full bg-black pb-2 font-semibold">
                                    FPG Solution & Consultancy Sdn. Bhd. (FPGSC) was established in 2019. Our first office is located in Menara MBMR in Kuala
                                    Lumpur, Malaysia.
                                </p>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'transparent' }}
                        contentArrowStyle={{ borderRight: '7px solid transparent' }}
                        iconStyle={{ background: '#101926', color: '#fff' }}
                        dateClassName="text-white"
                        date={isDesktop ? '2022' : ''}
                    >
                        {/* <div className="relative h-[350px] w-full overflow-hidden rounded-lg bg-transparent text-white">
                            <div className="absolute top-0 left-4 z-10 float-left w-fit rounded-lg bg-[#000] p-4">
                                <h3 className=" text-left text-3xl font-extrabold text-primary">2022</h3>
                                <h3 className=" text-primary">Malaysia Digital Certificate</h3>
                            </div>
                            <div className=" absolute top-[50px] left-0 h-[300px]">
                                <div className="relative h-full w-full">
                                    {(isMobile || isTablet) && (
                                        <img src="assets/images/milestone-2-mobile.jpg" className="h-[300px] w-[600px] rounded-lg object-cover" alt="" />
                                    )}
                                    {isDesktop && (
                                        <img src="assets/images/milestone-2-desktop.jpg" className="h-[300px] w-[600px] rounded-lg object-cover" alt="" />
                                    )}
                                    <h4 className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-black px-4 py-6 font-semibold">
                                        FPG Solution & Consultancy Sdn. Bhd. has obtained Malaysia MD status that provides blockchain solutions.
                                    </h4>
                                </div>
                            </div>
                            In 2022, following stringent and thorough review procedures, the MDEC awarded FPG Solution and Consultancy Sdn Bhd (FPGSC) with the
                            MD designation in recognition of our services and efforts in helping the nation and SMEs grow in the digital economy.
                        </div> */}
                        <div className="relative mb-10 overflow-hidden rounded-xl border-2 border-primary bg-black text-white xl:float-left xl:w-[400px]">
                            <div className="heading mb-0 bg-black p-6">
                                {!isDesktop && (
                                    <h4 className="text-primary" style={{ color: '#79D8FE' }}>
                                        2022
                                    </h4>
                                )}

                                <h6 className="bg-black pb-4 ">Malaysia Digital Certificate</h6>
                                <p className="h-full w-full bg-black pb-2 font-semibold">
                                    In 2022, following stringent and thorough review procedures, MDEC has awarded FPG Solution and Consultancy Sdn Bhd (FPGSC)
                                    with the MD designation in recognition of our services and efforts in helping the nation and SMEs grow in the digital
                                    economy.
                                </p>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'transparent' }}
                        contentArrowStyle={{ borderRight: '7px solid transparent' }}
                        iconStyle={{ background: '#101926', color: '#fff' }}
                        dateClassName="text-white"
                        date={isDesktop ? '2023' : ''}
                    >
                        {/* <div className="relative h-[350px] w-full overflow-hidden rounded-lg bg-transparent text-white">
                            <div className="absolute top-0 left-4 z-10 float-left w-fit rounded-lg bg-[#000] p-4 md:right-4 md:float-right">
                                <h3 className=" text-left text-3xl font-extrabold text-primary xl:text-right">2023</h3>
                                <h3 className=" text-primary">Project Kickstart</h3>
                            </div>
                            <div className=" absolute top-[50px] left-0 h-[300px]">
                                <div className="relative h-full w-full">
                                    <img src="assets/images/milestone-3b.jpg" className="h-[300px] w-[600px] rounded-lg object-cover" alt="" />
                                    <h4 className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-black px-4 py-6 font-semibold">
                                        Design and plan the voting applications, build functional prototypes, test the applications and gather feedbacks.
                                    </h4>
                                </div>
                            </div>
                        </div> */}
                        <div className="relative mb-10 overflow-hidden rounded-xl border-2 border-primary bg-black text-white xl:float-right xl:w-[400px]">
                            <div className="heading mb-0 bg-black p-6">
                                {!isDesktop && (
                                    <h4 className="text-primary" style={{ color: '#79D8FE' }}>
                                        2023
                                    </h4>
                                )}

                                <h6 className="bg-black pb-4 ">Project Kickstart</h6>
                                <p className="h-full w-full bg-black pb-2 font-semibold">
                                    At FPG Solution & Consultancy Sdn. Bhd. (FPGSC), we believe in a comprehensive approach to application development. We start
                                    by conceptualizing the voting application, taking into account factors such as security, ease of use, and scalability. Our
                                    experienced engineers then create detailed plans and wireframes to bring the concept to life.
                                </p>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'transparent' }}
                        contentArrowStyle={{ borderRight: '7px solid transparent' }}
                        iconStyle={{ background: '#101926', color: '#fff' }}
                        date={isDesktop ? '2024' : ''}
                    >
                        {/* <div className="relative h-[350px] w-full overflow-hidden rounded-lg bg-transparent text-white">
                            <div className="absolute top-0 left-4 z-10 float-left w-fit rounded-lg bg-[#000] p-4">
                                <h3 className=" text-left text-3xl font-extrabold text-primary">2024</h3>
                                <h3 className=" text-primary">Application Launching</h3>
                            </div>
                            <div className=" absolute top-[50px] left-0 h-[300px]">
                                <div className="relative h-full w-full">
                                    <img src="assets/images/milestone-4.jpg" className="h-[300px] w-[600px] rounded-lg object-cover" alt="" />
                                    <h4 className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-black px-4 py-6 font-semibold">
                                        Launch the application in a corporate voting and enhance the user experience.
                                    </h4>
                                </div>
                            </div>
                        </div> */}
                        <div className="relative mb-10 overflow-hidden rounded-xl border-2 border-primary bg-black text-white xl:float-left xl:w-[400px]">
                            <div className="heading mb-0 bg-black p-6">
                                {!isDesktop && (
                                    <h4 className="text-primary" style={{ color: '#79D8FE' }}>
                                        2024
                                    </h4>
                                )}

                                <h6 className="bg-black pb-4 ">Application Launching</h6>
                                <p className="h-full w-full bg-black pb-2 font-semibold">
                                    After a year of dedicated development, we at FPGSC are thrilled to announce the successful launch of our application in a
                                    corporate voting system, marking a significant milestone for our team. This achievement not only showcases our hard work and
                                    determination but also signifies our commitment to enhancing the user experience.
                                </p>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'transparent' }}
                        contentArrowStyle={{ borderRight: '7px solid transparent' }}
                        iconStyle={{ background: '#101926', color: '#fff' }}
                        dateClassName="text-white"
                        date={isDesktop ? '2025' : ''}
                    >
                        {/* <div className="relative h-[350px] w-full overflow-hidden rounded-lg bg-transparent text-white">
                            <div className="absolute top-0 left-4 z-10 float-left w-fit rounded-lg bg-[#000] p-4 md:right-4 md:float-right">
                                <h3 className=" text-left text-3xl font-extrabold text-primary xl:text-right">2025</h3>
                                <h3 className=" text-primary">Large Scale Blockchain Voting</h3>
                            </div>
                            <div className=" absolute top-[50px] left-0 h-[300px]">
                                <div className="relative h-full w-full">
                                    <img src="assets/images/milestone-5.jpg" className="h-[300px] w-[600px] rounded-lg object-cover" alt="" />
                                    <h4 className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-black px-4 py-6 font-semibold">
                                        Launch the application in a live election with reliable blockchain infrastructure and services.{' '}
                                    </h4>
                                </div>
                            </div>
                        </div> */}
                        <div className="relative mb-10 overflow-hidden rounded-xl border-2 border-primary bg-black text-white xl:float-right xl:w-[400px]">
                            <div className="heading mb-0 bg-black p-6">
                                {!isDesktop && (
                                    <h4 className="text-primary" style={{ color: '#79D8FE' }}>
                                        2025
                                    </h4>
                                )}

                                <h6 className="bg-black pb-4 ">Large Scale Blockchain Voting</h6>
                                <p className="h-full w-full bg-black pb-2 font-semibold">
                                    We continue to diligently work, gathering stakeholder and user feedback, as we strive to enhance the application. Our goal
                                    is to successfully launch the application in a live election, supported by a reliable blockchain infrastructure and
                                    top-notch services.
                                </p>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={isDesktop ? '2026' : ''}
                        dateClassName="text-white"
                        contentStyle={{ background: 'transparent' }}
                        contentArrowStyle={{ borderRight: '7px solid transparent' }}
                        iconStyle={{ background: '#101926', color: '#fff' }}
                    >
                        {/* <div className="relative h-[350px] w-full overflow-hidden rounded-lg bg-transparent text-white">
                            <div className="absolute top-0 left-4 z-10 float-left w-fit rounded-lg bg-[#000] p-4">
                                <h3 className=" text-left text-3xl font-extrabold text-primary">2026</h3>
                                <h3 className=" text-primary">Global Reach</h3>
                            </div>
                            <div className=" absolute top-[50px] left-0 h-[300px]">
                                <div className="relative h-full w-full">
                                    <img src="assets/images/milestone-6.jpg" className="h-[300px] w-[600px] rounded-lg object-cover" alt="" />
                                    <h4 className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-black px-4 py-6 font-semibold">
                                        Expand to international markets and collaborations. Explore other applications for blockchain technology.{' '}
                                    </h4>
                                </div>
                            </div>
                        </div> */}
                        <div className="relative mb-10 overflow-hidden rounded-xl border-2 border-primary bg-black text-white xl:float-left xl:w-[400px]">
                            <div className="heading mb-0 bg-black p-6">
                                {!isDesktop && (
                                    <h4 className="text-primary" style={{ color: '#79D8FE' }}>
                                        2026
                                    </h4>
                                )}
                                <h6 className="bg-black pb-4 ">Global Reach</h6>
                                <p className="h-full w-full bg-black pb-2 font-semibold">
                                    FPGSC, the leading company in the field of blockchain and FinTech solutions, has embarked on an exciting journey of
                                    expanding into international markets and forging collaborations worldwide. Recognizing the immense potential and demand for
                                    their innovative solutions, FPGSC has set its sights on establishing a global presence.
                                </p>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'transparent' }}
                        contentArrowStyle={{ borderRight: '7px solid transparent' }}
                        iconStyle={{ background: '#101926', color: '#fff' }}
                        dateClassName="text-white"
                        date={isDesktop ? '2027' : ''}
                    >
                        {/* <div className="relative h-[350px] w-full overflow-hidden rounded-lg bg-transparent text-white">
                            <div className="absolute top-0 left-4 z-10 float-left w-fit rounded-lg bg-[#000] p-4 md:right-4 md:float-right">
                                <h3 className=" text-left text-3xl font-extrabold text-primary xl:text-right">2027</h3>
                                <h3 className=" text-primary">Market Leadership</h3>
                            </div>
                            <div className=" absolute top-[50px] left-0 h-[300px]">
                                <div className="relative h-full w-full">
                                    <img src="assets/images/milestone-7.jpg" className="h-[300px] w-[600px] rounded-lg object-cover" alt="" />
                                    <h4 className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-black px-4 py-6 font-semibold">
                                        Establish the company as a leader in blockchain voting, forms alliances for wider adoption{' '}
                                    </h4>
                                </div>
                            </div>
                        </div> */}
                        <div className="relative mb-10 overflow-hidden rounded-xl border-2 border-primary bg-black text-white xl:float-right xl:w-[400px]">
                            <div className="heading mb-0 bg-black p-6">
                                {!isDesktop && (
                                    <h4 className="text-primary" style={{ color: '#79D8FE' }}>
                                        2027
                                    </h4>
                                )}

                                <h6 className="bg-black pb-4 ">Market Leadership</h6>
                                <p className="h-full w-full bg-black pb-2 font-semibold">
                                    FPGSC actively seeks to foster collaborative relationships by forming strategic alliances with key stakeholders,
                                    organizations, and institutions. By forging these powerful partnerships, FPGSC aims to accelerate the adoption of blockchain
                                    voting on a broader scale, transforming the landscape of democratic processes worldwide. These alliances facilitate the
                                    exchange of knowledge, resources, and technological advancements, amplifying the collective impact of blockchain-based
                                    voting solutions.
                                </p>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                    {/* <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>Creative Direction, Visual Design</p>
                </VerticalTimelineElement> */}
                    <VerticalTimelineElement iconStyle={{ background: '#78d8fe', color: '#fff' }} />
                </VerticalTimeline>
            </div>
        </>
    );
};

export default Milestone;
