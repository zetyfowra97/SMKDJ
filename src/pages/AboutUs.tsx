import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Mission from '../components/Mission';
import CoreValue from '../components/CoreValue';
import Milestone from '../components/Milestone';
import { IRootState } from '../store';
import { useEffect } from 'react';
import GroupOfCompanies from '../components/GroupOfCompanies';
import Partners from '../components/Partners';
import MdCert from '../components/MdCert';

const Aboutus = () => {
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
                                        
                                                   <p className="text-black font-bold text-4xl">About</p>
                                              <p className="mt-4 text-sm font-semibold text-black md:text-lg text-justify">
                           Address:
                            <br /><br />
                           Jalan SS 22a/1, <br/>
                           Damansara Jaya, <br/>
                           47400 Petaling Jaya, <br/><br/>

                           
                            Phone: 03-7729 6018 <br/>
                            School District: Petaling Utama <br/>
                            Language: English language, Malay language<br/>
                            Motto: Berilmu Untuk Berjasa<br/>
                            Session: Morning<br/>
                            School code: BEA8608<br/>
                        <br/>
                            On the 3rd of January 1983, SMK Damansara Jaya was born. Just like any other ordinary secondary school, its responsibilities were simple but complex – to guide and to teach the younger generations to succeed and to lead the nation in the future.                         
                        </p>
                    </div>
                </div>

                {/* IMAGE SECTION */}
                <div
                    className="w-full md:w-1/2 flex justify-center flex-col gap-10"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
                    <img
                        src="/assets/images/sekolah1.jpeg"
                        alt="Pengetua"
                        className="rounded-2xl shadow-lg w-3/4 sm:w-2/3 md:w-full object-cover"
                    />
                </div>
                 <div
                    className="w-full md:w-1/2 px-5 md:px-0"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
                    <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right">
                                        
                                            
                                              <p className="mt-4 text-sm font-semibold text-black md:text-lg text-justify">
                           In the first year it opened its doors to the public, it had 3 blocks, 6 classrooms, 24 teachers and a total of 189 students. Over the next few years, the number of students increased dramatically. To solve the problems of overcrowding, two temporary blocks, Blocks D and E, were built in 1985. Furthermore in 1988, the addition of Block F was planned. Also in the year 1988, SMKDJ was conferred the title “Sekolah Harapan Negara”, a great achievement for it’s time.                        
                        </p>
                    </div>
                </div>
                 <div
                    className="w-full md:w-1/2 flex justify-center flex-col gap-10"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
                   <img
                        src="/assets/images/sekolah2.jpeg"
                        alt="Pengetua"
                        className="rounded-2xl shadow-lg w-3/4 sm:w-2/3 md:w-full object-cover"
                    /><img
                        src="/assets/images/sekolah3.jpeg"
                        alt="Pengetua"
                        className="rounded-2xl shadow-lg w-3/4 sm:w-2/3 md:w-full object-cover"
                    />
                    
                </div>
                <div
                    className="w-full md:w-1/2 px-5 md:px-0"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
                    <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right">
                                        
                                            
                                              <p className="mt-4 text-sm font-semibold text-black md:text-lg text-justify">
                           The construction of Block F was completed in 1992. A later development was the Bilik Bergerak. <br/>
                           <br/>
                           In the year 2013, SMKDJ achieved an amazing feat – it was officially promoted to a Cluster School of Excellence. SMKDJ was converted into a single session school in 2015. With the co-operation from the students, teachers and everyone else involved in the school, SMKDJ will be a school to be proud of for years to come.                         
                        </p>
                    </div>
                </div>
                
                <div
                    className="w-full md:w-1/2 flex justify-center flex-col gap-10"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
                   <img
                        src="/assets/images/sekolah4.jpeg"
                        alt="Pengetua"
                        className="rounded-2xl shadow-lg w-3/4 sm:w-2/3 md:w-full object-cover"
                    />
                    
                </div>

                <div
                    className="w-full md:w-1/2 px-5 md:px-0"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
                    <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right">
                                        
                                            
                        <p className="text-black font-bold text-4xl">Bilingual Education</p>
                                            
                                              <p className="mt-4 text-sm font-semibold text-black md:text-lg text-justify">
                           
                           <br/>
                          At SMKDJ, we believe in quality communication. To achieve that, we have been practicing bilingual education in our teachings.    
                           <br/><br/>As we rapidly transition into a world without borders, the demand for a good grasp of the English language is ever rising. However, we do not lose sight of the importance of our native tongue, Bahasa Melayu, as the main medium of communication in Malaysia and the glue that connects our diverse student body.     
                           <br/><br/>
                           Therefore, the syllabus is presented to the students in both Bahasa Melayu and English, with varying amounts of each language used in accordance to the program model. Students understand and are able to apply the academic content in both languages, as bilingual education is applied consistently, all the way from the classroom to the examination hall.
                           <br/><br/>
                           This not only helps the students who struggle with either of the languages to grasp the syllabus, but equips the students with proficiency in both the spoken and written form of both languages, allowing them to start out at an advantage                      
                        </p>
                    </div>
                </div>

                 
            </section>
        </div>
    );
};

export default Aboutus;
