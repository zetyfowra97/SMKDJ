import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { useEffect } from 'react';


const ICTTHON = () => {
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
                        <h6 className="!text-secondary">Facilities, PIBG</h6>
                       
                        <p className="text-black font-bold text-4xl">ICT-THON 2018</p>
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
                                      August 11, 2018
                                    </p>
                                </div>
                                
                     <div>
                                
                        <p className="text-sm font-semibold text-black md:text-lg text-justify">
                       Karnival ICT-Thon telah diadakan pada 11 Ogos 2018 di SMK Damansara Jaya.             
                        </p>
                        
                        </div>

                         <div>
                                
                        <p className="text-sm font-semibold text-black md:text-lg text-justify">
                        Objektif Karnival ICT-Thon SMKDJ 2018:             
                        </p>
                        
                        </div>

                         <div>
                                
                        <p className="text-sm font-semibold text-black md:text-lg text-justify">
                       Menggantikan 40 buah komputer lama yang tidak dapat menampung keperluan semasa yang lebih canggih bagi membantu pengajaran dan pembelajaran Komputer Sains (SPM) dan Asas Sains Komputer (Ting. 1, 2, 3).              
                        </p>
                        
                        </div>

                          <div>
                                
                        <p className="text-sm font-semibold text-black md:text-lg text-justify">
                      Menyediakan awning dan penutup longkang di kawasan sekolah yang sudah reput dan rosak, khasnya di kantin sekolah, dewan pavilion, makmal sains, dan makmal komputer bagi menjamin keselamatan dan keselesaan murid.             
                        </p>
                        
                        </div>

                          <div>
                                
                        <p className="text-sm font-semibold text-black md:text-lg text-justify">
                       Memberi peluang untuk menyemai nilai-nilai murni seperti kerjasama, kejujuran, amanah dan kepimpinan kepada semua murid.           
                        </p>
                        
                        </div>

                        
                        
                        </div>

                        
                       

                    </div>
                </div> 
                <div className="container">
                    <div className="grid md:gap-6">
                         
                        {/* 1 */}
                       
                         <div className="relative" data-aos="fade-up" data-aos-duration="1000">
    <div className="image-container group rounded-xl overflow-hidden w-full h-full">
        <img
            src="/assets/images/facilities/ICTTHON.JPEG"
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

export default ICTTHON;
