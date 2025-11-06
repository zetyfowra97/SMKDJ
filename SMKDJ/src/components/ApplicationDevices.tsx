import React from 'react';
import { Link } from 'react-router-dom';

const ApplicationDevices = () => {
    return (
        <section className="bg-white/50 py-8 dark:bg-white/[0.03] lg:py-12">
            <div className="container">
                <div className="heading mb-5 text-center">
                    <h6 className="!text-secondary">Voting Applications & Devices</h6>
                    <h4 className="">Tools that Revolutionize User Engagement</h4>
                </div>
                <div
                    className="mt-14 grid gap-4 rounded-2xl py-8 px-4 sm:p-10 lg:mt-20 lg:grid-cols-2"
                    style={{
                        background: 'radial-gradient(193.33% 779.99% at 81.67% -6.05%, rgba(71, 189, 255, 0.3) 0%, rgba(71, 189, 255, 0) 100%)',
                    }}
                >
                    <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right flex flex-col justify-center">
                        <h4 className="">Voting Applications</h4>
                        <p className="mt-6 text-lg font-semibold  text-white">
                            The platform consists of a web application for creating votes (Organizer panel) and a voter application. No special knowledge is
                            required to use our application – anyone can organize or participate in a vote.
                        </p>
                    </div>
                    <div className="lg:ltr:pl-24 lg:rtl:pr-24">
                        <img src="/assets/images/voting-application-2.jpg" alt="" className="rounded-2xl h-[400px] object-cover" style={{filter:"brightness(0.8)"}}/>
                    </div>
                </div>
                <div
                    className="mt-10 grid gap-4 rounded-2xl py-8 px-4 sm:p-10 lg:mt-16 lg:grid-cols-2 bg-black/60 "
                    
                >
                    <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right flex flex-col justify-center">
                        <h4 className="">Organizer Application</h4>
                        <p className="mt-6 text-lg font-semibold  text-white">
                            All the participants in a vote can follow the turnout in real-time by viewing the vote monitoring application. Voters can also
                            verify that their votes have been recorded on the blockchain and counted – during voting, all transactions are available for
                            download.
                        </p>
                    </div>
                    <div className="lg:ltr:pl-24 lg:rtl:pr-24">
                        <img src="/assets/images/voting-portal.jpg" alt="" className="rounded-2xl h-[400px] object-cover" style={{filter:"brightness(0.8)"}}/>
                    </div>
                </div>
                <div
                    className="mt-14 grid gap-4 rounded-2xl py-8 px-4 sm:p-10 lg:mt-20 lg:grid-cols-2"
                    style={{
                        background: 'radial-gradient(193.33% 779.99% at 81.67% -6.05%, rgba(71, 189, 255, 0.3) 0%, rgba(71, 189, 255, 0) 100%)',
                    }}
                >
                    <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right flex flex-col justify-center">
                        <h4 className="">Voting Devices</h4>
                        <p className="mt-6 text-lg font-semibold text-white">
                            Voting machines (terminals) operate in a single blockchain network with our applications and are created for in-person voting. All
                            votes – regardless of whether they are cast via terminals or personal devices – are securely transmitted and processed together.
                        </p>
                    </div>
                    <div className="lg:ltr:pl-24 lg:rtl:pr-24">
                        <img src="/assets/images/voting-device.jpg" alt="" className="rounded-2xl h-[400px] object-cover" style={{filter:"brightness(0.8)"}} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApplicationDevices;
