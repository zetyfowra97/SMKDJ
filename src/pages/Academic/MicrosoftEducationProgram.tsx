import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { useEffect } from 'react';


const MicrosoftEducationProgram = () => {
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
                        <h6 className="!text-secondary">Academic, Academic-Announcements, Main Page</h6>
                       
                        <p className="text-black font-bold text-4xl">Microsoft Education Program Showcase School</p>
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
                                       SMKDJ


                                        </p>
                                        </div>
                                         <img
                                    src="/assets/images/dateandtime.png"
                                    alt="user"
                                    className="w-4 h-4 object-contain"
                                    />
                                    <p className="text-[12px] font-semibold text-black">
                                        September 18, 2022
                                    </p>
                                </div>
 <div className="image-container group rounded-xl overflow-hidden w-full h-full pt-20 pb-10">
        <img
            src="/assets/images/Academic/ProgramSekolahkuSejahtera.jpg"
            alt="gallery-1"
            className="w-full h-full object-cover aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110 center"
        />        
    </div>      
                     <div>
                                
                        <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                         20 September 2022              
                        </p>
                        
                        </div>

                        <div>
                                
                        <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                        Rabus            
                        </p>
                        
                        </div>

                       <div>
                                
                        <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                        Kunjungan Pegawai Kanan dan Anggota Polis Diraja Malaysia (PDRM) dari Ibu Pejabat Polis Daerah(IPD) Petaling Jaya dan tetamu jemputan En Syukry bin Muhammad Sabri Pen.PPDPU Unit Hal Ehwal Murid dan Pn Stephanie Cheong Ngee Fui YDP PIBG SMK Damansara Jaya.            
                        </p>
                        
                        </div>

                        <div>
                                
                        <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                        Pada hari ini Sekolah Menengah Kebangsaan Damansara Jaya berbesar hati menerima kunjungan dari KBPJKK DSP SIVAKUMAR A/L  THANKARAJA yang merupakan selaku penceramah Program Sekolahku Sejahtera :Sepakat dan Selamat. Disamping itu, Terdapat juga pameran motosikal berkuasa tinggi dan MPV serta booth-booth dari Unit Pencegahan Jenayah dan Trafik dari IPD Petaling Jaya.          
                        </p>
                        
                        </div>

                        <div>
                                
                        <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                        Ribuan terima kasih kepada pegawai kanan serta Anggota PDRM dari IPD Petaling Jaya, Pen.PPD dan YDP PIBG kerana sudi meluangkan masa bagi menjayakan program pada hari ini.            
                        </p>
                        
                        </div>

                        <div>
                                
                        <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                        Terima kasih juga kepada Pentadbir,Guru-guru,Staf sokongan,Murid-murid serta semua pihak yang menjayakan Program Sekolahku Sejahtera: Sepakat dan Selamat (Kesedaran Hentikan Buli).            
                        </p>
                        
                        </div>

                        <div>
                                
                        <p className="text-sm font-semibold text-black md:text-lg text-justify pt-5">
                        Semoga program ini dapat mengeratkan hubungan silaturrahim antara Pihak sekolah dengan PDRM Petaling Jaya sesuai dengan Slogan “polis dan masyarakat berpisah tiada’ dan memberi input yang berguna kepada guru-guru,pelajar-pelajar dan pihak yang terlibat.           
                        </p>
                        
                        </div>
                        
                        
                        </div>

                        
                       

                    </div>
                </div> 
                <div className="container">
                    
           
    {/* 1 */}                  
    <div className="image-container group rounded-xl overflow-hidden w-full h-full pt-20">
        <img
            src="/assets/images/Academic/ProgramSekolahkuSejahtera.jpg"
            alt="gallery-1"
            className="w-full h-full object-cover aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110 center"
        />        
    </div>

    {/* 2 */}                  
    <div className="image-container group rounded-xl overflow-hidden w-full h-full pt-20">
        <img
            src="/assets/images/Academic/ProgramSekolahkuSejahtera2.jpg"
            alt="gallery-1"
            className="w-full h-full object-cover aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110 center"
        />        
    </div>

    {/* 3 */}                  
    <div className="image-container group rounded-xl overflow-hidden w-full h-full pt-20">
        <img
            src="/assets/images/Academic/ProgramSekolahkuSejahtera3.jpg"
            alt="gallery-1"
            className="w-full h-full object-cover aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110 center"
        />        
    </div>

    {/* 4 */}                  
    <div className="image-container group rounded-xl overflow-hidden w-full h-full pt-20">
        <img
            src="/assets/images/Academic/ProgramSekolahkuSejahtera4.jpg"
            alt="gallery-1"
            className="w-full h-full object-cover aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110 center"
        />        
    </div>

    {/* 5 */}                  
    <div className="image-container group rounded-xl overflow-hidden w-full h-full pt-20">
        <img
            src="/assets/images/Academic/ProgramSekolahkuSejahtera5.jpg"
            alt="gallery-1"
            className="w-full h-full object-cover aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110 center"
        />        
    </div>

    {/* 6 */}                  
    <div className="image-container group rounded-xl overflow-hidden w-full h-full pt-20">
        <img
            src="/assets/images/Academic/ProgramSekolahkuSejahtera6.jpg"
            alt="gallery-1"
            className="w-full h-full object-cover aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110 center"
        />        
    </div>

    {/* 7 */}                  
    <div className="image-container group rounded-xl overflow-hidden w-full h-full pt-20">
        <img
            src="/assets/images/Academic/ProgramSekolahkuSejahtera7.jpg"
            alt="gallery-1"
            className="w-full h-full object-cover aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110 center"
        />        
    </div>

    {/* 8 */}                  
    <div className="image-container group rounded-xl overflow-hidden w-full h-full pt-20">
        <img
            src="/assets/images/Academic/ProgramSekolahkuSejahtera8.jpg"
            alt="gallery-1"
            className="w-full h-full object-cover aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110 center"
        />        
    </div>

    {/* 9 */}                  
    <div className="image-container group rounded-xl overflow-hidden w-full h-full pt-20">
        <img
            src="/assets/images/Academic/ProgramSekolahkuSejahtera9.jpg"
            alt="gallery-1"
            className="w-full h-full object-cover aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110 center"
        />        
    </div>

    {/* 10 */}                  
    <div className="image-container group rounded-xl overflow-hidden w-full h-full pt-20">
        <img
            src="/assets/images/Academic/ProgramSekolahkuSejahtera10.jpg"
            alt="gallery-1"
            className="w-full h-full object-cover aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110 center"
        />        
    </div>

    {/* 11 */}                  
    <div className="image-container group rounded-xl overflow-hidden w-full h-full pt-20">
        <img
            src="/assets/images/Academic/ProgramSekolahkuSejahtera11.jpg"
            alt="gallery-1"
            className="w-full h-full object-cover aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110 center"
        />        
    </div>

    {/* 12 */}                  
    <div className="image-container group rounded-xl overflow-hidden w-full h-full pt-20">
        <img
            src="/assets/images/Academic/ProgramSekolahkuSejahtera12.jpg"
            alt="gallery-1"
            className="w-full h-full object-cover aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110 center"
        />        
    </div>

    {/* 13 */}                  
    <div className="image-container group rounded-xl overflow-hidden w-full h-full pt-20">
        <img
            src="/assets/images/Academic/ProgramSekolahkuSejahtera13.jpg"
            alt="gallery-1"
            className="w-full h-full object-cover aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110 center"
        />        
    </div>

    {/* 14 */}                  
    <div className="image-container group rounded-xl overflow-hidden w-full h-full pt-20">
        <img
            src="/assets/images/Academic/ProgramSekolahkuSejahtera14.jpg"
            alt="gallery-1"
            className="w-full h-full object-cover aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110 center"
        />        
    </div>

    {/* 15 */}                  
    <div className="image-container group rounded-xl overflow-hidden w-full h-full pt-20">
        <img
            src="/assets/images/Academic/ProgramSekolahkuSejahtera15.jpg"
            alt="gallery-1"
            className="w-full h-full object-cover aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110 center"
        />        
    </div>

    {/* 16 */}                  
    <div className="image-container group rounded-xl overflow-hidden w-full h-full pt-20">
        <img
            src="/assets/images/Academic/ProgramSekolahkuSejahtera16.jpg"
            alt="gallery-1"
            className="w-full h-full object-cover aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110 center"
        />        
    </div>

    {/* 17  */}                  
    <div className="image-container group rounded-xl overflow-hidden w-full h-full pt-20">
        <img
            src="/assets/images/Academic/ProgramSekolahkuSejahtera17.jpg"
            alt="gallery-1"
            className="w-full h-full object-cover aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110 center"
        />        
    </div>
                     
                </div>
            </section>
        </div>
    );
};

export default MicrosoftEducationProgram;
