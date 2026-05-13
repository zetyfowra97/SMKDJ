import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IRootState } from '../store';
import { useEffect } from 'react';

const UpgradingofICT = () => {
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
           <div className="bg-white w-full pb-20 pt-8 bg-cover bg-bottom bg-no-repeat">
            <section
                id="section-1"
                className="items-center justify-center gap-10 md:gap-16 lg:gap-20 justify-items-center"
            >
                {/* TEXT SECTION */}
                <div
                    className="w-full md:w-1/2 px-5 md:px-0"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
                    <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right">
                        <p className="text-[12px] font-semibold text-black text-justify">
                           January 1, 2021 <br/><br/>
                        </p>
                        <p className="text-black font-bold text-4xl">Facilities</p>
                        <div>
                        <p className="mt-4 text-sm font-semibold text-black md:text-lg text-justify underline underline-offset-1">
                            <a href="https://djians.sharepoint.com/sites/students/_layouts/15/stream.aspx?id=%2Fsites%2Fstudents%2FShared%20Documents%2FGeneral%2FAnthems%2FLAGU%5FSELANGOR%2D%28MINUS%5FONE%29%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E8e675b33%2Dd72d%2D47a5%2Da432%2Dbcaaed91cf67"
                            target="_blank"
                            rel="noopener noreferrer">
                                  Upgrading of ICT Infrastructure
                            </a>
                            </p>
                            <p className="text-[12px] font-semibold text-black text-justify">
                           January 1, 2021 <br/><br/>
                        </p>
                            <p className="text-sm font-semibold text-black md:text-lg text-justify">
                            The existing computer network infrastructure in SMKDJ is almost 12 years old. We have legacy equipment from even when the school was first established. As part of the improvement program in 2020, PIBG together with volunteer parents and teachers have embarked on a modernisation program to bring up the school to the new digital age.                      
                        </p>
                        </div>
                         <div>
                        <p className="mt-4 text-sm font-semibold text-black md:text-lg text-justify underline underline-offset-1">
                            <a href="https://djians.sharepoint.com/sites/students/_layouts/15/stream.aspx?id=%2Fsites%2Fstudents%2FShared%20Documents%2FGeneral%2FAnthems%2FLAGU%5FSELANGOR%2D%28MINUS%5FONE%29%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E8e675b33%2Dd72d%2D47a5%2Da432%2Dbcaaed91cf67"
                            target="_blank"
                            rel="noopener noreferrer">
                                  Upgrading of the school hall
                            </a>
                            </p>
                            <p className="text-[12px] font-semibold text-black text-justify">
                           November 12, 2020 <br/><br/>
                        </p>
                            <p className="text-sm font-semibold text-black md:text-lg text-justify">
                            One of the important projects taken up by the PIBG was to upgrade the Dewan Sekolah. Besides a new coat of paint, the new hall will be fully air-conditioned, with brighter lighting and new furnishing. The electricals will be upgraded and there will be WIFI connectivity throughout.                   
                        </p>
                        </div>
                         <div>
                        <p className="mt-4 text-sm font-semibold text-black md:text-lg text-justify underline underline-offset-1">
                            <a href="https://djians.sharepoint.com/sites/students/_layouts/15/stream.aspx?id=%2Fsites%2Fstudents%2FShared%20Documents%2FGeneral%2FAnthems%2FLAGU%5FSELANGOR%2D%28MINUS%5FONE%29%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E8e675b33%2Dd72d%2D47a5%2Da432%2Dbcaaed91cf67"
                            target="_blank"
                            rel="noopener noreferrer">
                                  Guide to WIFI @ DJ
                            </a>
                            </p>
                            <p className="text-[12px] font-semibold text-black text-justify">
                           September 12, 2020 <br/><br/>
                        </p>
                            <p className="text-sm font-semibold text-black md:text-lg text-justify">
                            Great news ! Took us awhile, but we now have school wide access to WIFI ! For all Admin and Academic staff, you will be given a new SSID ( smkdj ) and password. For students and visitors, you can register with our Guest WIFI y5@smkdj. Register using your email address and enjoy free wireless                      
                        </p>
                        </div>
                         <div>
                        <p className="mt-4 text-sm font-semibold text-black md:text-lg text-justify underline underline-offset-1">
                            <a href="https://djians.sharepoint.com/sites/students/_layouts/15/stream.aspx?id=%2Fsites%2Fstudents%2FShared%20Documents%2FGeneral%2FAnthems%2FLAGU%5FSELANGOR%2D%28MINUS%5FONE%29%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E8e675b33%2Dd72d%2D47a5%2Da432%2Dbcaaed91cf67"
                            target="_blank"
                            rel="noopener noreferrer">
                                  Majlis Pelancaran Papan Tanda ‘We Love SMKDJ’ – Tajaan Sunway TES
                            </a>
                            </p>
                            <p className="text-[12px] font-semibold text-black text-justify">
                           February 28, 2020 <br/><br/>
                        </p>
                            <p className="text-sm font-semibold text-black md:text-lg text-justify">
                            Majlis Pelancaran Papan Tanda We Love ???? SMKDJ, tajaan Sunway TES. Majlis ini disempurnakan oleh Encik Teo Ee Sing, Executive Director Sunway TES pada 28 Februari 2020                     
                        </p>
                        </div>
                         <div>
                        <p className="mt-4 text-sm font-semibold text-black md:text-lg text-justify underline underline-offset-1">
                            <a href="https://djians.sharepoint.com/sites/students/_layouts/15/stream.aspx?id=%2Fsites%2Fstudents%2FShared%20Documents%2FGeneral%2FAnthems%2FLAGU%5FSELANGOR%2D%28MINUS%5FONE%29%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E8e675b33%2Dd72d%2D47a5%2Da432%2Dbcaaed91cf67"
                            target="_blank"
                            rel="noopener noreferrer">
                                  ICT-THON 2018
                            </a>
                            </p>
                            <p className="text-[12px] font-semibold text-black text-justify">
                           August 11, 2018 <br/><br/>
                        </p>
                            <p className="text-sm font-semibold text-black md:text-lg text-justify">
                            Karnival ICT-Thon telah diadakan pada 11 Ogos 2018 di SMK Damansara Jaya. Objektif Karnival ICT-Thon SMKDJ 2018: Menggantikan 40 buah komputer lama yang tidak dapat menampung keperluan semasa yang lebih canggih bagi membantu pengajaran dan pembelajaran Komputer Sains (SPM) dan Asas Sains Komputer (Ting. 1, 2, 3). Menyediakan awning dan penutup longkang di kawasan sekolah                  
                        </p>
                        </div>

                    </div>
                </div> 
                <div className="container">
                    <div className="grid grid-cols-12 gap-2 md:gap-6">
                         
                        {/* 1 */}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/1exercisearea.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                       Exercise Area
                                    </h2>
                                   
                                </div>
                            </div>
                        </div>
                          {/* 2 */}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/2biologylab.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        Biology Lab
                                    </h2>
                                </div>
                            </div>
                        </div>
                          {/*3*/}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/3gazebo.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />

                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        Gazebo
                                    </h2>
                                </div>
                            </div>
                        </div>
                          {/* 4*/}
                          <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/4spbtroom.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                       SPBT Room
                                    </h2>
                                </div>
                            </div>
                        </div>
                          {/* 5 */}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/5pavilion.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        Pavilion
                                    </h2>
                                </div>
                            </div>
                        </div>
                          {/*6 */}
                       
                         <div className="relative col-span-12 md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
    <div className="image-container group rounded-xl overflow-hidden w-full h-full">
        <img
            src="/assets/images/6staffroom.JPEG"
            alt="gallery-1"
            className="w-full h-full object-cover aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 p-4">
            <h2 className="bg-gray-100/75 text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                Staff Room
            </h2>
        </div>
    </div>
</div>
                          {/* 7 */}
                          <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/7ictlabs.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                       ICT Labs
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* 8 */}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/8screeningroom.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                      Screening Room
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* 9 */}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/9chemistrylab.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />

                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        Chemistry Lab
                                    </h2>
                                </div>
                            </div>
                        </div>
                         {/* 10 */}
                         <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/10maingate.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                       Main Gate
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* 11 */}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/11futsalcourt.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        Futsal Court
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* 12 */}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/12tamanleo.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />

                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        Taman LEO
                                    </h2>
                                </div>
                            </div>
                        </div>
                         {/* 13 */}
                         <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/13garden.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                       Garden
                                    </h2> 
                                </div>
                            </div>
                        </div>
                         {/* 14 */}
                        <div className="relative col-span-12 md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
    <div className="image-container group rounded-xl overflow-hidden w-full h-full">
        <img
            src="/assets/images/14mainentrance.JPEG"
            alt="gallery-1"
            className="w-full h-full object-cover aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 p-4">
            <h2 className="bg-gray-100/75 text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                Main Entrance
            </h2>
        </div>
    </div>
</div>
                         {/* 15 */}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/15schoolbackfeild.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />

                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                       School Back Field
                                    </h2>
                                </div>
                            </div>
                        </div>
                         {/* 16 */}
                         <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/16coveredwalkaway.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        Covered Walkway

                                    </h2>
                                </div>
                            </div>
                        </div>
                         {/* 17*/}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/17schoolcanteen.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        School Canteen
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* 18*/}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/18library.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />

                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        Library
                                    </h2>
                                </div>
                            </div>
                        </div>
                         {/* 19*/}
                         <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/19artroom.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        Art Room
                                    </h2>
                                </div>
                            </div>
                        </div>
                         {/* 20*/}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/20coveredtaylor'swalk.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        Covered Taylor’s Walk
                                    </h2>
                                </div>
                            </div>
                        </div>
                         {/* 21*/}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/21schoolhall.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />

                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        School Hall
                                    </h2>
                                </div>
                            </div>
                        </div>
                         {/* 21*/}
                         <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/21schoolhall.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                       School Hall
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* 22*/}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/22LanguageLab.jpg"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                        Language Lab
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* 23*/}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/23rbtlab.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />

                                <div className="absolute bottom-0 left-0 p-4">
                                    <h2 className="bg-gray-100 bg-opacity-75  text-2xl text-[27px] font-semibold text-white md:group-hover:animate-hex-up">
                                       RBT Lab
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UpgradingofICT;
