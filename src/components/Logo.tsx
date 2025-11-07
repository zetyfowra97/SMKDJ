import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Virtual } from 'swiper';

const Logo = () => {
    return (
        <div className="pb-20 pt-20 bg-white">
            <section>
                <div className="mx-auto w-4/5 py-10">
                    <Swiper
                        modules={[Navigation, Autoplay, Virtual]}
                        slidesPerView="auto"
                        spaceBetween={30}
                        speed={2500}
                        loop={true}
                        autoplay={{ delay: 0, disableOnInteraction: false }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.7,
                            },
                            600: {
                                slidesPerView: 3,
                            },
                            1000: {
                                slidesPerView: 4,
                            },
                            1600: {
                                slidesPerView: 6,
                            },
                        }}
                        dir={'ltr'}
                        key={'false'}
                    >
                        {/* School Email */}
                        <SwiperSlide>
                            <a 
                                href="mailto:bea8658@moe.edu.my" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center justify-center gap-3"
                            >
                                <img className="h-full" src="assets/images/SCHOOLEMAIL.png" alt="School Email" />
                            </a>
                        </SwiperSlide>

                        {/* DELIMa */}
                        <SwiperSlide>
                            <a 
                                href="https://delima.moe-dl.edu.my/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3"
                            >
                                <img className="h-full" src="assets/images/DELIMa.png" alt="DELIMa" />
                            </a>
                        </SwiperSlide>

                        {/* e-Pangkat */}
                        <SwiperSlide>
                            <a 
                                href="https://epangkat.moe.gov.my/login.php" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3"
                            >
                                <img className="h-full" src="assets/images/e-pangkat.png" alt="e-Pangkat" />
                            </a>
                        </SwiperSlide>

                        {/* SPLKPM */}
                        <SwiperSlide>
                            <a 
                                href="https://splkpm.moe.gov.my/index.cfm" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3"
                            >
                                <img className="h-full" src="assets/images/SPLKPM.png" alt="SPLKPM" />
                            </a>
                        </SwiperSlide>

                        {/* APDM */}
                        <SwiperSlide>
                            <a 
                                href="https://apdm.moe.gov.my/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3"
                            >
                                <img className="h-full" src="assets/images/APDM.png" alt="APDM" />
                            </a>
                        </SwiperSlide>

                        {/* HRMIS */}
                        <SwiperSlide>
                            <a 
                                href="https://hrmis2.eghrmis.gov.my/HRMISNET/Common/Main/Login.aspx" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3"
                            >
                                <img className="h-full" src="assets/images/HRMIS.png" alt="HRMIS" />
                            </a>
                        </SwiperSlide>

                        {/* e-Operasi */}
                        <SwiperSlide>
                            <a 
                                href="https://eoperasi.moe.gov.my/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3"
                            >
                                <img className="h-full" src="assets/images/e-operasi.png" alt="e-Operasi" />
                            </a>
                        </SwiperSlide>

                        {/* SAPS */}
                        <SwiperSlide>
                            <a 
                                href="https://sapsnkra.moe.gov.my/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3"
                            >
                                <img className="h-full" src="assets/images/SAPS.png" alt="SAPS" />
                            </a>
                        </SwiperSlide>

                        {/* ANM */}
                        <SwiperSlide>
                            <a 
                                href="https://epenyatagaji-laporan.anm.gov.my/Layouts/Login/Login.aspx" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3"
                            >
                                <img className="h-full" src="assets/images/ANM.png" alt="ANM" />
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </div>
    );
};

export default Logo;
