import { useSelector } from 'react-redux';
import { IRootState } from '../../store';

const Newsdetail = () => {
    document.title = 'News Detail |  FPGSC';
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="relative w-full py-14 md:my-14 md:inline-block md:py-0 lg:my-[128px]">
                            <div className="heading relative mb-8 text-center lg:mb-0 lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
                                <h6>Blogs</h6>
                                <h4 className="!text-white">Thai Political Party Breaks New Ground with Blockchain-Based Leadership Voting</h4>
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
                                    Discover how the Thai Democrat Party leveraged blockchain technology in a historic primary election, marking the world's
                                    first large-scale application of blockchain in political leadership selection.
                                </p> */}
                            </div>
                            <div
                                className="top-0 mt-6 ltr:right-0 rtl:left-0 md:mt-0 lg:absolute"
                                data-aos={isRtl ? 'fade-right' : 'fade-left'}
                                data-aos-duration="1000"
                            >
                                <img
                                    src="/assets/images/Blogs3.png"
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
                        <h2 className='text-secondary'>Democrat Party's First Use of Blockchain in a Large-Scale Political Election</h2>
                        <ul>
                            <li className="!text-white text-justify text-base sm:text-lg">
                                From November 1st to November 9th, a significant surge in transactions was observed on Zcoin's blockchain. The reason behind
                                this surge can now be revealed. In October, Mr. Korn Chatikavanij, the former Minister of Finance, hinted that political parties
                                in Thailand were leveraging blockchain technology for selecting party leaders.
                            </li>
                            <li className="!text-white text-justify text-base sm:text-lg">
                                The Thai Democrat Party, which holds the distinction of being Thailand's oldest political party, recently conducted a primary
                                election to choose its new party leader. Unlike previous methods where the leader was selected by the party's MPs and chairman,
                                this time, all members of the Democrat party were eligible to vote. This marked the first instance in Thai politics where a
                                political party involved its grassroots members in the leadership selection process.
                            </li>
                            <li className="!text-white text-justify text-base sm:text-lg">
                                The primary election concluded with an impressive total of 127,479 votes from all across Thailand, making it the world's first
                                large-scale application of blockchain technology in a political election. Previous instances of voting on the blockchain were
                                either small-scale tests or had limited participation, if any.
                            </li>
                        </ul>

                        <h2 className='text-secondary'>A Milestone in Real-World Adoption of Blockchain-Based E-Voting</h2>

                        <ul>
                            <li className="!text-white text-justify text-base sm:text-lg">
                                The uniqueness of this leadership race lay in the stakeholders' desire to ensure that the votes remained untampered with. While
                                most e-voting systems rely on a centralized database controlled by an administrator, the stakeholders were unwilling to rely on
                                such a system. Therefore, it was unanimously agreed to utilize Zcoin's public blockchain, which operates without a central
                                administrator. The election mechanism and the corresponding source code were agreed upon by all the candidates, reviewed by
                                their IT advisors, and subsequently approved by the Democrat Party Election Commission under the supervision of the Thai
                                Election Commission.
                            </li>
                        </ul>
                        <ul>
                            <li className="!text-white text-justify text-base sm:text-lg">
                                The electronic voting took place through two methods:
                                <br /> voting stations spread nationwide that employed a Raspberry Pi-based system, and a mobile voting app called D-Elect,
                                which required voters to submit their photo ID.
                            </li>
                        </ul>
                        <ul>
                            <li className="!text-white text-justify text-base sm:text-lg">
                                Two sets of data were involved in this process:
                                <br /> identification documents and voting tallies. These datasets were encrypted and stored on IPFS, a decentralized and
                                distributed file storage system. The IPFS hashes were then recorded on the Zcoin blockchain, which acted as a decentralized and
                                immutable database, providing auditability to the Election Commission and the Democrat Party candidates.
                            </li>
                        </ul>
                        <ul>
                            <li className="!text-white text-justify text-base sm:text-lg">
                                To protect voter privacy, the identification documents and voting tallies were encrypted in a manner that required the agreement
                                and presence of all stakeholders to decrypt the complete set of voting data. Shamir's Secret Sharing Scheme, a cryptographic
                                method, was employed to split the encryption keys. Only a member of the Election Commission or a representative of the Democrat
                                Party could decrypt the voter identification documents for the purpose of verifying voter eligibility. Similarly, the voting
                                data could only be decrypted if all five parties—the three representatives of each candidate, the Election Commission, and the
                                Democrat Party—were present and in agreement. It is important to note that the voting data and identification documents, when
                                read independently, are insufficient to reveal how an individual voted.
                            </li>
                        </ul>
                        <ul>
                            <li className="!text-white text-justify text-base sm:text-lg">
                                Remarkably, despite a large number of voters from various parts of Thailand, the final results were available in less than 12
                                hours. This achievement represents a significant milestone in the real-world adoption of blockchain-based e-voting. The
                                experience gained from this endeavor will contribute valuable insights to enhance the system further, including the utilization
                                of zero-knowledge proof systems to facilitate anonymous yet verifiable voting on the blockchain.
                            </li>
                        </ul>
                        
                        <p className="!text-white pt-10 text-justify text-base sm:text-lg">
                            The pursuit of electronic voting faces numerous challenges. However, endeavors like these are crucial in making voting and polling
                            easier, more cost-effective, and, most importantly, trusted by the voters. In this particular case, blockchain technology proved to
                            be a suitable solution due to its ability to maintain the integrity of the vote database without a central administrator. Moreover,
                            the stakeholders found blockchain technology comprehensible and acceptable. The future holds potential for system improvements, such
                            as incorporating zero-knowledge proof systems to enable anonymous yet verifiable voting on the blockchain.
                        </p>

                        {/* <h2>Where does it come from?</h2>
                        <ul>
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

                        {/* <h2>1914 translation by H. Rackham</h2>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                            ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
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
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Newsdetail;
