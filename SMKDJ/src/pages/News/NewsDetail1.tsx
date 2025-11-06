import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { Link } from 'react-router-dom';

const Newsdetail = () => {
    document.title = 'News Detail | FPG Solution & COnsultancy';
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="relative w-full py-14 md:my-14 md:inline-block md:py-0 lg:my-[128px]">
                            <div className="heading relative mb-8 text-center lg:mb-0 lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
                                <h6>Blogs</h6>
                                <h4 className="!text-white">Will Online Voting and Remote Meetings Shape Future Decision-Making?</h4>
                                {/* <ul className="items-center justify-center pt-6 sm:flex lg:justify-start">
                                    <li className="flex items-center justify-center">
                                        <img src="/assets/images/sophia-avtar.png" alt="avtar" />
                                        <span className="px-4 font-semibold sm:text-lg">Sophia Reyes</span>
                                    </li>
                                    <li className="relative px-4 font-semibold before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray ltr:before:left-0 rtl:before:right-0 sm:text-lg sm:before:h-1 sm:before:w-1">
                                        June 2, 2021
                                    </li>
                                    <li className="relative px-4 font-semibold before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray ltr:before:left-0 rtl:before:right-0 sm:text-lg sm:before:h-1 sm:before:w-1">
                                        3 mins read
                                    </li>
                                </ul> */}
                                {/* <p className="relative px-4 pt-4 text-justify font-semibold before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray sm:text-lg lg:px-0 lg:pr-14  lg:text-left ">
                                    Explore the transformative potential of online voting and remote meetings in reshaping collective decision-making for
                                    governments, boardrooms, and NGOs in a post-pandemic world.
                                </p> */}
                            </div>
                            <div
                                className="top-0 mt-6 ltr:right-0 rtl:left-0 md:mt-0 lg:absolute"
                                data-aos={isRtl ? 'fade-right' : 'fade-left'}
                                data-aos-duration="1000"
                            >
                                <img
                                    src="/assets/images/Blogs1.png"
                                    alt="blog-detail-hero"
                                    className="mx-auto h-80 rounded-[32px] object-cover sm:h-[400px] sm:w-[445px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-gradient-to-t to-transparent py-14 dark:bg-none md:py-[100px]">
                <div className="container">
                    <div className="prose max-w-full dark:prose-invert">
                        <p className=" !text-white text-justify text-base sm:text-lg">
                            The coronavirus pandemic has profoundly impacted our daily routines, forcing many to work and spend leisure time at home. This shift
                            has presented challenges in organizing workspaces, maintaining productivity, and staying focused. Moreover, the restrictions on
                            social contact have disrupted collective decision-making processes, ranging from local voting procedures to national referendums. As
                            we look toward a post-pandemic future, it becomes crucial to prepare ourselves for the potential effects of these restrictions on
                            future collective decisions. This article explores various aspects of decision-making, such as online voting for governments,
                            virtual board meetings, and adapting NGOs' operations.
                        </p>

                        <h2 className='!text-secondary'>Choosing Governments Online:</h2>
                        <p className="!text-white sm:px-4 text-justify text-base sm:text-lg">
                            Traditional elections held at polling stations can pose health risks and contribute to the spread of viruses. As seen during the
                            initial stages of the pandemic, low turnout and logistical challenges were encountered in some countries. While a viable alternative
                            is mail voting, critics highlight increased costs and potential errors in the process. Online voting emerges as a promising
                            solution, despite technical and societal hurdles. Countries like Estonia have already adopted internet voting to a significant
                            extent. However, it is essential to address concerns regarding accessibility and potential discrimination against those who are less
                            tech-savvy. Governments should consider promoting online voting alongside in-person voting, educating citizens about its benefits,
                            and ensuring a smooth transition when traditional voting is not possible.
                        </p>

                        <h2 className='!text-secondary'>Board of Directors' Meetings:</h2>
                        <p className="!text-white sm:px-4 text-justify text-base sm:text-lg">
                            During a pandemic, business operations may be disrupted, necessitating swift decision-making by company boards of directors.
                            Although physical gatherings are restricted, critical decisions can be made through online board meetings and e-voting. To implement
                            this effectively, companies should ensure compliance with local legislation, update internal procedures, and address cybersecurity
                            risks. Basic cybersecurity training for board members and secure voting platforms can help safeguard confidential information and
                            prevent cybercrime.
                        </p>

                        <h2 className='!text-secondary'>NGOs:</h2>
                        <p className="!text-white sm:px-4 text-justify text-base sm:text-lg">
                            Non-governmental organizations (NGOs) have also been affected by the pandemic, leading to the postponement of crucial events like
                            General Meetings. This disruption can exacerbate societal problems, leaving vulnerable communities unsupported. To maintain
                            continuity, NGOs can transfer their events online without altering the essential structure. Collaborative online conference services
                            can facilitate the presentation of previous year's results and allow new candidates to introduce themselves and their programs. By
                            implementing secure and user-friendly voting platforms, NGOs can ensure that decisions align with the majority's preferences.
                        </p>
                        {/* <ul>
                            <li>Vestibulum hendrerit tortor ac rutrum porta.</li>
                            <li>Donec gravida elit a auctor luctus.</li>
                            <li>Integer iaculis odio id blandit varius.</li>
                        </ul> */}

                        {/* <h4>What is Lorem Ipsum?</h4>
                        <p>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p> */}

                        {/* <div className="not-prose grid gap-[30px] pb-12 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="group h-[400px] overflow-hidden rounded-[32px] lg:col-span-2" data-aos="fade-up" data-aos-duration="1000">
                                <img
                                    src="/assets/images/blog-detail-1.png"
                                    alt="blog-detail-1"
                                    className="h-full w-full rounded-[32px] object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="group h-[400px] overflow-hidden rounded-[32px]" data-aos="fade-up" data-aos-duration="1000">
                                <img
                                    src="assets/images/blog-detail-2.png"
                                    alt="blog-detail-2"
                                    className="h-full w-full rounded-[32px] object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div> */}

                        <h2 className='!text-secondary'>The Future of Democracy:</h2>
                        <p className="!text-white sm:px-4 text-justify text-base sm:text-lg">
                            The necessity of social distancing has accelerated the shift towards a more digital society. The increased interest in e-voting
                            among regional parliaments and boards of directors highlights the growing demand for remote decision-making. Prior to the pandemic,
                            online voting was often considered an optional feature, with the associated costs and labor outweighing the benefits. However, the
                            current crisis has demonstrated the vital role of online voting in crisis situations, leading us to anticipate a wider adoption of
                            this method in the future. Governments and organizations will likely explore and invest in online voting as a means to mitigate
                            potential crises and maintain essential processes.
                        </p>

                        {/* <h2>The standard Lorem Ipsum passage</h2>
                        <p>
                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                            written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem
                            Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
                            humour, or randomised words which don't look even slightly believable.
                        </p> */}

                        {/* <div className="not-prose grid gap-[30px] pb-12 sm:grid-cols-2">
                            <div className="group h-[324px] overflow-hidden rounded-[20px]" data-aos="fade-up" data-aos-duration="1000">
                                <img
                                    src="/assets/images/blog-detail-3.png"
                                    alt="blog-detail-3"
                                    className="h-full w-full rounded-[20px] object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="group h-[324px] overflow-hidden rounded-[20px]" data-aos="fade-up" data-aos-duration="1000">
                                <img
                                    src="/assets/images/blog-detail-4.png"
                                    alt="blog-detail-4"
                                    className="h-full w-full rounded-[20px] object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div> */}

                        <p className='!text-white pt-10 text-justify text-base sm:text-lg'>
                            The coronavirus pandemic has prompted a reevaluation of how we approach collective decision-making. As we navigate a post-pandemic
                            world, it is crucial to learn from the challenges faced during the crisis and prepare for similar situations in the future.
                            Embracing online voting for governments, virtual board meetings, and adapting NGO operations will enable us to overcome the
                            limitations imposed by physical distancing. By leveraging technology and addressing concerns around accessibility and security, we
                            can build a future that embraces remote decision-making while ensuring inclusivity and democratic principles.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Newsdetail;
