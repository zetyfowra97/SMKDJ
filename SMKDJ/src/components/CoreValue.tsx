import React from 'react';
import { isMobile, isTablet, isDesktop } from 'react-device-detect';

const HexagonGrid = () => {
    const [hover1, setHover1] = React.useState(false);
    const [hover2, setHover2] = React.useState(false);
    const [hover3, setHover3] = React.useState(false);
    const [hover4, setHover4] = React.useState(false);
    const [hover5, setHover5] = React.useState(false);
    const [hover6, setHover6] = React.useState(false);

    return (
        <div className="relative">
            <div className="block xl:hidden">
                <div className="heading block text-center xl:hidden">
                    <h4>Core Values</h4>
                </div>
                <div className="container grid grid-cols-6 gap-6">
                    <img className="col-span-2 md:col-start-2 md:col-span-1 m-auto" src="/assets/images/Hex-02.png" alt="Image 2" />
                    <div className="col-span-4 md:col-span-3 flex flex-col justify-center text-left">
                        <p className="mb-0 text-lg font-extrabold text-primary">Innovative</p>
                        <p className="text-lg text-sm text-white">
                            To constantly and consistently provide the most intelligent and cost effective applications powered by blockchain technology{' '}
                        </p>
                    </div>
                    <img className="col-span-2 md:col-start-2 md:col-span-1 m-auto" src="/assets/images/Hex-01.png" alt="Image 2" />
                    <div className="col-span-4 md:col-span-3 flex flex-col justify-center text-left">
                        <p className="mb-0 text-lg font-extrabold text-primary">Integrity</p>
                        <p className="text-lg text-sm text-white">To be authentic and honest in our actions, behaviors and in our conduct of business</p>
                    </div>
                    <img className="col-span-2 md:col-start-2 md:col-span-1  m-auto" src="/assets/images/Hex-04.png" alt="Image 2" />
                    <div className="col-span-4 md:col-span-3 flex flex-col justify-center text-left">
                        <p className="mb-0 text-lg font-extrabold text-primary">Borderless</p>
                        <p className="text-lg text-sm text-white">
                            To provide a comprehensive blockchain application that eliminates unnecessary complexities through our platform, catering to clients
                            globally
                        </p>
                    </div>
                    <img className="col-span-2 md:col-start-2 md:col-span-1  m-auto" src="/assets/images/Hex-03.png" alt="Image 2" />
                    <div className="col-span-4 md:col-span-3 flex flex-col justify-center text-left">
                        <p className="mb-0 text-lg font-extrabold text-primary">Intelligence</p>
                        <p className="text-lg text-sm text-white">To provide timely, insightful, and relevant intelligence on enhancing business development</p>
                    </div>
                    <img className="col-span-2 md:col-start-2 md:col-span-1 m-auto" src="/assets/images/Hex-06.png" alt="Image 2" />
                    <div className="col-span-4 md:col-span-3 flex flex-col justify-center text-left">
                        <p className="mb-0 text-lg font-extrabold text-primary">Stability</p>
                        <p className="text-lg text-sm text-white">
                            Presenting solutions that are scalable, customizable and resilient enough to withstand the ever-changing landscape of the market
                        </p>
                    </div>
                    <img className="col-span-2 md:col-start-2 md:col-span-1  m-auto" src="/assets/images/Hex-05.png" alt="Image 2" />
                    <div className="col-span-4 md:col-span-3 flex flex-col justify-center text-left">
                        <p className="mb-0 text-lg font-extrabold text-primary">Transparency</p>
                        <p className="text-lg text-sm text-white">
                            To offer unmatched flexibility in our blockchain application and establish ourselves as the leading experts in risk mitigation
                            across various conditions and markets
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute top-[106px] left-1/2 hidden h-[516px] w-[1084px] -translate-x-1/2 lg:block">
                <div className="relative h-full w-full">
                    {hover1 && (
                        <div className="absolute top-0 left-[90px] flex h-1/3 w-[250px] animate-hex-up flex-col justify-center text-right">
                            <p className="mb-0 text-lg font-extrabold text-primary">Integrity</p>
                            <p className="text-lg text-sm text-white">To be authentic and honest in our actions, behaviors and in our conduct of business</p>
                        </div>
                    )}
                    {hover4 && (
                        <div className="absolute top-0 right-[90px] flex h-1/3 w-[250px] animate-hex-up flex-col justify-center text-left">
                            <p className="mb-0 text-lg font-extrabold text-primary">Borderless</p>
                            <p className="text-lg text-sm text-white">
                                To provide a comprehensive blockchain application that eliminates unnecessary complexities through our platform, catering to
                                clients globally
                            </p>
                        </div>
                    )}
                    {hover2 && (
                        <div className="absolute top-[172px] left-0 flex h-1/3 w-[250px] animate-hex-up  flex-col justify-center text-right">
                            <p className="mb-0 text-lg font-extrabold text-primary">Innovative</p>
                            <p className="text-lg text-sm text-white">
                                To constantly and consistently provide the most intelligent and cost effective applications powered by blockchain technology{' '}
                            </p>
                        </div>
                    )}
                    {hover5 && (
                        <div className="absolute top-[172px] right-0 flex h-1/3 w-[250px] animate-hex-up flex-col justify-center text-left">
                            <p className="mb-0 text-lg font-extrabold text-primary">Transparency</p>
                            <p className="text-lg text-sm text-white">
                                To offer unmatched flexibility in our blockchain application and establish ourselves as the leading experts in risk mitigation
                                across various conditions and markets
                            </p>
                        </div>
                    )}
                    {hover3 && (
                        <div className="absolute top-[344px] left-[90px] flex h-1/3 w-[250px] animate-hex-up flex-col justify-center text-right">
                            <p className="mb-0 text-lg font-extrabold text-primary">Intelligence</p>
                            <p className="text-lg text-sm text-white">
                                To provide timely, insightful, and relevant intelligence on enhancing business development
                            </p>
                        </div>
                    )}
                    {hover6 && (
                        <div className="absolute top-[344px] right-[90px] flex h-1/3 w-[250px] animate-hex-up flex-col justify-center text-left">
                            <p className="mb-0 text-lg font-extrabold text-primary">Stability</p>
                            <p className="text-lg text-sm text-white">
                                Presenting solutions that are scalable, customizable and resilient enough to withstand the ever-changing landscape of the market
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <div className="hidden xl:block">
                <div className="heading text-center ">
                    <h4>Core Values</h4>
                </div>
                <div className="gallery relative place-items-center">
                    <div className="group relative" onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
                        <img className="h-full w-full" src="/assets/images/Hex-02.png" alt="Image 2" />
                        <img
                            className="absolute top-0 left-0 hidden h-full w-full duration-200 group-hover:block group-hover:animate-fade-in"
                            src="/assets/images/Hex-02r.png"
                            alt="Image 2"
                        />
                    </div>
                    <div>
                        <img className="h-full w-full" src="/assets/images/Hex-FPG.png" alt="Image 2" />
                    </div>

                    <div className="group relative" onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)}>
                        <img className="h-full w-full" src="/assets/images/Hex-01.png" alt="Image 1" />
                        <img
                            className="absolute top-0 left-0 hidden h-full w-full duration-200 group-hover:block group-hover:animate-fade-in"
                            src="/assets/images/Hex-01r.png"
                            alt="Image 1"
                        />
                    </div>
                    <div className="group relative" onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)}>
                        <img className="h-full w-full" src="/assets/images/Hex-03.png" alt="Image 1" />
                        <img
                            className="absolute top-0 left-0 hidden h-full w-full duration-200 group-hover:block group-hover:animate-fade-in"
                            src="/assets/images/Hex-03r.png"
                            alt="Image 3"
                        />
                    </div>
                    <div className="group relative" onMouseEnter={() => setHover4(true)} onMouseLeave={() => setHover4(false)}>
                        <img className="h-full w-full" src="/assets/images/Hex-04.png" alt="Image 1" />
                        <img
                            className="absolute top-0 left-0 hidden h-full w-full duration-200 group-hover:block group-hover:animate-fade-in"
                            src="/assets/images/Hex-04r.png"
                            alt="Image 4"
                        />
                    </div>
                    <div className="group relative" onMouseEnter={() => setHover6(true)} onMouseLeave={() => setHover6(false)}>
                        <img className="h-full w-full" src="/assets/images/Hex-06.png" alt="Image 1" />
                        <img
                            className="absolute top-0 left-0 hidden h-full w-full duration-200 group-hover:block group-hover:animate-fade-in"
                            src="/assets/images/Hex-06r.png"
                            alt="Image 6"
                        />
                    </div>
                    <div className="group relative" onMouseEnter={() => setHover5(true)} onMouseLeave={() => setHover5(false)}>
                        <img className="h-full w-full" src="/assets/images/Hex-05.png" alt="Image 1" />
                        <img
                            className="absolute top-0 left-0 hidden h-full w-full duration-200 group-hover:block group-hover:animate-fade-in"
                            src="/assets/images/Hex-05r.png"
                            alt="Image 5"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HexagonGrid;
