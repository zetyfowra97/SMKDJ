import React from 'react';
import { Link } from 'react-router-dom';

const EnterpriseSolution = () => {
    return (
        <section className="relative bg-black py-8 dark:bg-white/5 lg:py-12">
            <div className="absolute bottom-0 ltr:right-0 rtl:left-0">
                <img src="/assets/images/consulting/bg-icon.svg" className="rtl:rotate-y-180" alt="" />
            </div>
            <div className="container relative z-[1]">
                <div className="heading text-center text-white">
                    <h6>Enterprise Solutions</h6>
                    <h4 className="mb-2 !font-black uppercase !text-white">
                        What Voting Can Do for Your <span className="text-secondary">Business</span>
                    </h4>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-[30px] lg:grid-cols-1" data-aos="flip-left" data-aos-duration="1000">
                    <div className="group">
                        <div className="overflow-hidden">
                            <img
                                src="/assets/images/vote-board.jpg"
                                className="h-[500px] object-cover w-full duration-200 group-hover:rotate-2 group-hover:scale-110"
                                alt=""
                            />
                        </div>
                        <div className="relative mx-4 -mt-10 space-y-2.5 bg-gray-dark px-4 pt-[22px] text-center dark:bg-black md:px-[26px]">
                            <h5 className="text-2xl font-bold text-primary group-hover:text-secondary">Election of Board Members</h5>
                            <div className="mx-auto h-1 w-[50px] bg-secondary duration-200 group-hover:bg-primary"></div>
                            <p className="pb-[60px] text-lg font-semibold text-white">
                                Online voting is the safest way to make collective decisions amid the COVID-19 pandemic. Our system has a ballot type that
                                allows you to vote for several candidates, making it suitable for elections to board committees, councils, or any vote with
                                multiple winners.
                            </p>
                            <span className="absolute bottom-0 opacity-20 ltr:right-0 rtl:left-0">
                                <img src="/assets/images/consulting/services-icon1.svg" alt="" />
                            </span>
                        </div>
                    </div>
                    <div className="group">
                        <div className="overflow-hidden">
                            <img
                                src="/assets/images/vote-agm.jpg"
                                className="h-[500px] object-cover w-full duration-200 group-hover:rotate-2 group-hover:scale-110"
                                alt=""
                            />
                        </div>
                        <div className="relative mx-4 -mt-10 space-y-2.5 bg-gray-dark px-4 pt-[22px] text-center dark:bg-black md:px-[26px]">
                            <h5 className="text-2xl font-bold text-primary group-hover:text-secondary">Voting at AGM</h5>
                            <div className="mx-auto h-1 w-[50px] bg-secondary duration-200 group-hover:bg-primary"></div>

                            <p className="pb-[60px] text-lg font-semibold text-white">
                                Streamline your formal board meetings and vote on issues you previously had no time or resources for. The For/Against/Abstain
                                type of ballot permits voting on several issues within a single vote.
                            </p>
                            <span className="absolute bottom-0 opacity-20 ltr:right-0 rtl:left-0">
                                <img src="/assets/images/consulting/services-icon2.svg" alt="" />
                            </span>
                        </div>
                    </div>
                    <div className="group">
                        <div className="overflow-hidden">
                            <img
                                src="/assets/images/vote-meeting.jpg"
                                className="h-[500px] object-cover w-full duration-200 group-hover:rotate-2 group-hover:scale-110"
                                alt=""
                            />
                        </div>
                        <div className="relative mx-4 -mt-10 space-y-2.5 bg-gray-dark px-4 pt-[22px] text-center dark:bg-black md:px-[26px]">
                            <h5 className="text-2xl font-bold text-primary group-hover:text-secondary">Voting at Meetings</h5>
                            <div className="mx-auto h-1 w-[50px] bg-secondary duration-200 group-hover:bg-primary"></div>
                            <p className="pb-[60px] text-lg font-semibold text-white">
                                Engage meeting and conference participants in discussions and collect real-time feedback. A multiple-option points system ballot
                                will help prioritize discussion questions and determine the main course of action.
                            </p>
                            <span className="absolute bottom-0 opacity-20 ltr:right-0 rtl:left-0">
                                <img src="/assets/images/consulting/services-icon3.svg" alt="" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnterpriseSolution;
