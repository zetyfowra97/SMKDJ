import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { useEffect } from 'react';


const MajlisPelancaranPapan = () => {
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
                        <h6 className="!text-secondary">Facilities</h6>
                       
                        <p className="text-black font-bold text-4xl">Majlis Pelancaran Papan Tanda ‘We Love SMKDJ’ – Tajaan Sunway TES</p>
                        <div>
                            
                        <p className="mt-4 text-sm font-semibold text-black md:text-lg text-justify underline underline-offset-1">
                            
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <img
                                    src="/assets/images/userimages.png"
                                    alt="user"
                                    className="w-6 h-6 object-contain"
                                    />
                                    <p className="text-[12px] font-semibold text-black">
                                        TJ Ooi
                                        </p>
                                        </div>
                                         <img
                                    src="/assets/images/dateandtime.png"
                                    alt="user"
                                    className="w-4 h-4 object-contain"
                                    />
                                    <p className="text-[12px] font-semibold text-black">
                                       February 28, 2020
                                    </p>
                                </div>
                                
                     <div>
                                
                        <p className="text-sm font-semibold text-black md:text-lg text-justify">
                        Majlis Pelancaran Papan Tanda We Love ???? SMKDJ, tajaan Sunway TES. Majlis ini disempurnakan oleh Encik Teo Ee Sing, Executive Director Sunway TES pada 28 Februari 2020               
                        </p>
                        
                        </div>

                        
                        
                        </div>

                        
                       

                    </div>
                </div> 
                <div className="container">
                    <div className="grid grid-cols-12 gap-2 md:gap-6">
                         
                        {/* 1 */}
                       
                         <div className="relative col-span-12 md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
    <div className="image-container group rounded-xl overflow-hidden w-full h-full">
        <img
            src="/assets/images/facilities/MajlisPelancaranPapan.JPG"
            alt="gallery-1"
            className="w-full h-full object-cover aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110"
        />
        
    </div>
</div>
                          {/* 2 */}
                           <div className="relative col-span-12 md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
    <div className="image-container group rounded-xl overflow-hidden w-full h-full">
        <img
            src="/assets/images/facilities/MajlisPelancaranPapan2.JPG"
            alt="gallery-1"
            className="w-full h-full object-cover aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110"
        />
       
    </div>
</div>
                       
                          {/*3*/}
                        <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/facilities/MajlisPelancaranPapan3.JPG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />

                               
                            </div>
                        </div>
                          {/* 4*/}
                          <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                    src="/assets/images/facilities/MajlisPelancaranPapan4.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full"
                                />
                               
                            </div>
                        </div>
                          {/* 5 */}
                           <div className="relative col-span-12 md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
    <div className="image-container group rounded-xl overflow-hidden w-full h-full">
        <img
            src="/assets/images/facilities/MajlisPelancaranPapan5.JPG"
            alt="gallery-1"
            className="w-full h-full object-cover aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110"
        />
       
    </div>
</div>
                       
                        
                        
                        
                        
                    </div>
                    
                </div>
            </section>
        </div>
    );
};

export default MajlisPelancaranPapan;
