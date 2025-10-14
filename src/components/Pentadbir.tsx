import { useEffect, useState } from 'react';
import 'react-18-image-lightbox/style.css';
import { useLocation } from 'react-router-dom';

const Pentadbir = () => {
    const location = useLocation();
    const hash = location.hash; // Retrieve the hash value from the location object

    // Rest of your code...

    useEffect(() => {
        console.log('hash', hash);
        if (hash === '#section-1') {
            setTimeout(() => {
                handleClickScroll();
            }, 1000);
        }
    }, [hash]);
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
    document.title = 'Careers | FPG Solution & COnsultancy';

    useEffect(() => {
       
    }, []);

    return (
        <div>
            <div onClick={handleClickScroll} className="bg-white pb-20 pt-8 bg-cover bg-bottom bg-no-repeat">
                <div className="relative h-screen">
                     <section className="flex items-center dark:bg-gradient-to-t dark:from-white/[0.02] dark:to-transparent">
                                   <div className="container">
                                       <div className="relative grid grid-cols-6 gap-20">
                                           <img
                                               data-aos="fade-left"
                                               data-aos-duration="2000"
                                               src="/assets/images/modern-saas/benifits-img.png"
                                               alt=""
                                               className="col-span-6 block md:col-span-3 md:hidden"
                                           />
                                           <div className="col-span-6 md:col-span-3" data-aos="fade-right" data-aos-duration="2000">
                                               <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right">
                                                   <h6 className="!text-secondary">Pengetua</h6>
                                                   <h4 className="!text-secondary">Pentadbir Sekolah</h4>
                                                   <p className="mt-4 text-sm font-semibold text-black md:text-lg text-justify">
                                                      Salam sejahtera dan selamat datang ke laman web rasmi SMK Damansara Jaya.

Saya dengan rasa syukur dan bangga mengalu-alukan seluruh warga sekolah, ibu bapa, serta komuniti setempat ke platform digital ini. Laman web ini diwujudkan bagi memudahkan perkongsian maklumat terkini serta memperkukuh hubungan antara sekolah dan masyarakat.

Sebagai sebuah institusi yang sentiasa mengutamakan kecemerlangan, SMK Damansara Jaya terus berusaha melahirkan pelajar yang seimbang dari segi akademik, sahsiah, dan kepimpinan. Kami percaya bahawa setiap pelajar memiliki potensi yang besar untuk digilap melalui bimbingan guru dan sokongan ibu bapa.

Melalui laman web ini, diharap semua pihak dapat mengikuti perkembangan aktiviti sekolah serta pencapaian pelajar dengan lebih mudah dan cepat. Ia juga menjadi ruang untuk kita sama-sama meraikan kejayaan dan memperkukuh semangat kebersamaan warga SMKDJ.

Akhir kata, saya menyeru semua untuk terus menyokong usaha sekolah dalam membentuk generasi yang berilmu, berdisiplin, dan berwawasan.

Sekian, terima kasih.

Yang benar,
Pengetua
SMK Damansara Jaya
                                                   </p>
                                               </div>
                                               
                                           </div>
                                           <img
                                               data-aos="fade-left"
                                               data-aos-duration="2000"
                                               src="/assets/images/pengetua.jpg"
                                               alt=""
                                               className="col-span-6 self-center hidden md:col-span-3 md:block"
                                           />
                                       </div>
                                   </div>
                               </section>
                              
                </div>
            </div>

            

            
            <div className="hexagon"></div>
        </div>
    );
};

export default Pentadbir;
