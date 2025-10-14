import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Virtual } from 'swiper';
import { Link } from 'react-router-dom';

const Partners = () => {
    return (
        <section className="mb-20">
            <div className="container">
                <div className="heading text-center" style={{marginBottom:10}}>
                    <h6>TEAM. CUSTOMER. COMMUNITY</h6>
                    <h4>We work with best partnerss</h4>
                </div>
            </div>
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
                            <img className="h-[40px]" src="assets/images/partner-satang.png" alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="#" className="flex items-center justify-center gap-3">
                            <img className="h-[40px]" src="assets/images/partner-avalanche.png" alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="#" className="flex items-center justify-center gap-3">
                            <img className="h-[40px]" src="assets/images/partner-polygon.png" alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="#" className="flex items-center justify-center gap-3">
                            <img className="h-[40px]" src="assets/images/partner-bnb.png" alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="#" className="flex items-center justify-center gap-3">
                            <img className="h-[40px]" src="assets/images/partner-firo.png" alt="" />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="#" className="flex items-center justify-center gap-3">
                            <img className="h-[40px]" src="assets/images/partner-alchemy.png" alt="" />
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Partners;
