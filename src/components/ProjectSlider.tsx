import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper';
import { useState } from 'react';
import Lightbox from 'react-18-image-lightbox';

const items = [
    // '/assets/images/career-workplaceculture-1.png',
    // '/assets/images/career-workplaceculture-2.png',
    // '/assets/images/career-workplaceculture-3.png',
    // '/assets/images/career-workplaceculture-4.png',
    '/assets/images/culture-1.jpeg',
    '/assets/images/culture-2.jpeg',
    '/assets/images/culture-3.jpg',
];

const ProjectSlider = (props: any) => {
    const [isOpen, setIsOpen] = useState<any>(false);
    const [photoIndex, setPhotoIndex] = useState<any>(0);

    return (
        <section className="mt-10 md:mt-20 px-4">
            <div className="container">
                <div className="heading text-center text-white">
                    <h6>Our Workspace Culture</h6>
                    <h4>Be Great. Do Good. Have Fun.</h4>
                </div>
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={items[photoIndex]}
                    nextSrc={items[(photoIndex + 1) % items.length]}
                    prevSrc={items[(photoIndex + items.length - 1) % items.length]}
                    enableZoom
                    onImageLoad={() => {
                        window.dispatchEvent(new Event('resize'));
                    }}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + items.length - 1) % items.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % items.length)}
                />
            )}
            <div className="swiper project-slider" >
                <div className="swiper-wrapper">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView="auto"
                        spaceBetween={10}
                        loop={true}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        navigation={{
                            nextEl: '.project-slider-button-next',
                            prevEl: '.project-slider-button-prev',
                        }}
                        breakpoints={{
                            600: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1000: {
                                slidesPerView: 3.3,
                            },
                        }}
                    >
                        {items.map((item, i) => (
                            <SwiperSlide>
                                <div
                                    className="relative border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark rounded-xl overflow-hidden"
                                    // onClick={() => {
                                    //     setIsOpen(true);
                                    //     setPhotoIndex(i);
                                    // }}
                                >
                                    <img src={item} alt="project-2" className="h-72 w-full object-cover" style={{filter: "brightness(0.8)"}}/>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default ProjectSlider;
