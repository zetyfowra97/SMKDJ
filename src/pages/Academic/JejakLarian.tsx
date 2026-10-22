import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { useEffect } from 'react';


const JejakLarian = () => {
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
                        <h6 className="!text-secondary">Academic, Admin-Announcements, Co-Curriculum</h6>
                       
                        <p className="text-black font-bold text-4xl">Jejak Larian, Memburu Kegemilangan!</p>
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
                                        Norazila Awang

                                        </p>
                                        </div>
                                         <img
                                    src="/assets/images/dateandtime.png"
                                    alt="user"
                                    className="w-4 h-4 object-contain"
                                    />
                                    <p className="text-[12px] font-semibold text-black">
                                        April 17, 2026
                                    </p>
                                </div>

                        </div>

                        
                       

                    </div>
                </div> 
                <div className="container">
                 
                      {/* 4 */}
                          <div className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                            <div className="image-container group text-xl font-medium rounded-xl overflow-hidden">
                                <img
                                     src="/assets/images/Academic/JejakLarian.JPEG"
                                    alt="gallery-1"
                                    className="h-[300px] w-full object-cover duration-500 hover:scale-110 md:h-full pt-20"
                                />
                               
                            </div>
                        </div>
                </div>

                <div  className="w-full md:w-1/2 px-5 md:px-0">
                        
                    <div>          
                     <div className="pt-5">
                                
                        <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                         Tahniah diucapkan kepada atlet SMK Damansara Jaya yang telah menunjukkan prestasi cemerlang dalam Kejohanan MSSD Merentas Desa dengan pencapaian seperti berikut:               
                        </p>
                        
                        </div>

                        <div className="pt-5">
                                
                        <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                        Kategori P2
      
                        </p>
                        <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                        • Sree – Tempat ke-6

      
                        </p>
                        <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                        • Valerie – Tempat ke-7

      
                        </p>
                        <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                        • Hui Yu – Tempat ke-8

      
                        </p>
                        <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                        ➡️ Ketiga-tiga atlet ini layak ke peringkat MSSS  
      
                        </p>
                        
  
                        
                        </div>

                        <div className="pt-5">
                                
                        <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                         Choo En Li bijak bestari,            
                        </p>
                        
                        </div>

                        <div className="pt-5">
                                
                        <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                        Kategori L2           
                        </p>
                         <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                        • Daniel – Tempat ke-10        
                        </p>
                         <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                        • Caleb – Tempat ke-6         
                        </p>
                         <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                        ➡️ Caleb layak ke peringkat MSSS         
                        </p>
        
                        </div>

                        <div className="pt-5">
                                
                        <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                         Kategori P1          
                        </p>
                        <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                         • Zafira – Tempat ke-18        
                        </p>
                        <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                         • Zoe – Tempat ke-17         
                        </p>
                        <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                         • Jia Xi – Tempat ke-10         
                        </p>
  
                        </div>

                        <div className="pt-5">
                                
                        <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                        Kategori L1

                        </p>
                        <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                        • Rizqee – Tempat ke-12

                        </p>
                        <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                        • Jun Han – Tempat ke-14 

                        </p>
                        
        
                        
                        </div>

                        <div className="pt-5">
                                
                        <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                         Selain itu, syabas dan tahniah kepada pasukan L2 SMK Damansara Jaya yang telah berjaya meraih tempat ketiga dalam acara berpasukan, sekali gus mengharumkan nama sekolah.       
                        </p>
                        
                        </div>

                        
                        
                        </div>

                        
                       

                    </div>
            </section>
        </div>
    );
};

export default JejakLarian;
