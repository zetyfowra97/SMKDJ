import { useSelector } from 'react-redux';
import { IRootState } from '../../store';

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
                                <h4 className="!text-white">
                                    Blockchain Voting: A Game-Changer for Electoral Integrity or a Potential Source of Manipulation?
                                </h4>
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
                                {/* <p className="relative px-4 pt-4 text-justify font-semibold before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray sm:text-lg lg:px-0 lg:pr-2 lg:text-left ">
                                    Blockchain voting offers the potential for increased transparency and reduced manipulation in the electoral process. Here's
                                    a further explanation of how blockchain technology contributes to the integrity of online voting systems
                                </p> */}
                            </div>
                            <div
                                className="top-0 mt-6 ltr:right-0 rtl:left-0 md:mt-0 lg:absolute"
                                data-aos={isRtl ? 'fade-right' : 'fade-left'}
                                data-aos-duration="1000"
                            >
                                <img
                                    src="/assets/images/Blogs2.png"
                                    alt="blog-detail-hero"
                                    className="mx-auto h-80 rounded-[32px] object-cover sm:h-[400px] sm:w-[445px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-gradient-to-t  to-transparent py-14 dark:bg-none md:py-[100px]">
                <div className="container">
                    <div className="prose max-w-full dark:prose-invert">
                        <h2 className="text-secondary">Does Physical Presence Hinder Participation?</h2>
                        <p className="text-justify text-base !text-white sm:text-lg">
                            The traditional voting system, which involves physical presence at polling stations or board meetings, has undergone years of
                            refinement. However, this system has several drawbacks. Voters must be physically present and provide identity verification, which
                            limits participation for certain groups, such as the elderly, mothers with young children, and those with late work hours. For
                            example, elderly individuals may face difficulty in traveling to polling stations due to health conditions, while working parents
                            may struggle to find the time to vote before the stations close. Additionally, citizens are registered at specific polling stations,
                            making it impossible to vote from a different location without complex procedures. These limitations result in low voter turnout and
                            a compromised objectivity of elections.
                        </p>

                        <h2 className="text-secondary">Are Accessibility Issues to Blame?</h2>
                        <p className="text-justify text-base !text-white sm:text-lg">
                            Online voting has the potential to address these issues, but it also faces challenges. Skeptics raise concerns about controlling the
                            process and the vulnerability of online systems to hacking and technical failures. Furthermore, proving manipulation or
                            falsification of votes becomes challenging without physical evidence. However, the emergence of blockchain technology provides a
                            solution to these problems.
                        </p>

                        <h2 className="text-secondary">Can Security Concerns be Addressed?</h2>
                        {/* <ul>
                            <li>Vestibulum hendrerit tortor ac rutrum porta.</li>
                            <li>Donec gravida elit a auctor luctus.</li>
                            <li>Integer iaculis odio id blandit varius.</li>
                        </ul> */}
                        <p className="text-justify text-base !text-white sm:text-lg">
                            Blockchain is a distributed database where information is stored on independent computers within a network. It ensures security by
                            making it difficult for hackers to attack the system, as they would need to hack each computer on the network. The system tracks and
                            records unauthorized access attempts, and data entered into the blockchain is cryptographically encrypted. Blockchain also has a
                            consensus mechanism to detect and fix errors or failures in the system. It eliminates intermediaries, allowing participants to
                            transfer information securely.
                        </p>

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

                        <h2 className="text-secondary">Can it Safeguard Elections?</h2>
                        <p className="text-justify text-base !text-white sm:text-lg">
                            Integrating blockchain with online voting can enhance its security and reliability. Although online voting systems are not widely
                            adopted on a state level, there have been successful practices in countries like the United States, Switzerland, and Estonia. For
                            instance, the United States has experimented with online voting on a smaller scale, particularly within political parties or
                            specific states. Switzerland has long utilized internet voting in several cantons, and Great Britain has integrated electronic
                            voting since 1997, although it has not been widely implemented at the national level.
                        </p>

                        <h2 className="text-secondary">Who is Leading the Way?</h2>
                        <p className="text-justify text-base !text-white sm:text-lg">
                            Estonia, in particular, has implemented online voting on a state level by issuing special ID cards with built-in chips to citizens.
                            The integration of blockchain technology has further increased the system's security and eliminated the risk of result manipulation.
                            Estonia's online voting system allows citizens to vote from any computer or smartphone with internet access, providing convenience
                            and accessibility.
                        </p>

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

                        <h2 className="text-secondary">Can Blockchain Make the Process Efficient?</h2>
                        <p className="text-justify text-base !text-white sm:text-lg">
                            Overall, online voting based on blockchain technology is gradually replacing traditional offline voting. It offers advantages such
                            as accessibility, faster vote counting, elimination of geographical constraints, and increased voter turnout. Blockchain-based
                            voting is already being adopted by businesses, NGOs, and political parties in various countries. Platforms like Polys.me provide
                            efficient and secure online voting experiences, reducing preparation time and manual vote counting. By embracing the future of
                            online voting, organizers can benefit from its competitive features and ensure transparent and efficient elections.
                        </p>

                        <h2 className="text-secondary">Is Blockchain-Based Voting the Future?</h2>
                        <p className="text-justify text-base !text-white sm:text-lg">
                            It is important to note that while online voting presents numerous advantages, it must be implemented with proper security measures
                            and safeguards to protect against hacking and ensure the integrity of the voting process. Continuous advancements in technology and
                            the ongoing development of secure online voting systems will play a crucial role in the widespread adoption of online voting in the
                            future.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Newsdetail;
