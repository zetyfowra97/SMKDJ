import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Virtual } from 'swiper';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div  className="pb-20 pt-20 bg-white">
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
                    <SwiperSlide>
                        <Link to="#" className="flex items-center justify-center gap-3">
                            <img className="h-full" src="assets/images/SCHOOLEMAIL.png" alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="#" className="flex items-center justify-center gap-3">
                            <img className="h-full" src="assets/images/DELIMa.png" alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="#" className="flex items-center justify-center gap-3">
                            <img className="h-full" src="assets/images/e-pangkat.png" alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="#" className="flex items-center justify-center gap-3">
                            <img className="h-full" src="assets/images/SPLKPM.png" alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="#" className="flex items-center justify-center gap-3">
                            <img className="h-full" src="assets/images/APDM.png" alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="#" className="flex items-center justify-center gap-3">
                            <img className="h-full" src="assets/images/HRMIS.png" alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="#" className="flex items-center justify-center gap-3">
                            <img className="h-full" src="assets/images/e-operasi.png" alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="#" className="flex items-center justify-center gap-3">
                            <img className="h-full" src="assets/images/SAPS.png" alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="#" className="flex items-center justify-center gap-3">
                            <img className="h-full" src="assets/images/ANM.png" alt="" />
                        </Link>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </section>
        </div>
    );
};

export default Logo;
