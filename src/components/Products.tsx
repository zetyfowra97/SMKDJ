import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper';

const Products = () => {
    const products = [
        {
            id: 1,
            img: '/assets/images/PENCAPAIANKOKURIKULUMSMKDJ.jpg',
            title: 'Blockchain',
            href: '/products#blockchain',
        },
        {
            id: 2,
            img: '/assets/images/PENCAPAIANKOKURIKULUMSMKDJ2.jpg',
            title: 'Enterprise Solutions',
            href: '/products#enterprise-solutions',
        },
        {
            id: 3,
            img: '/assets/images/PENCAPAIANKOKURIKULUMSMKDJ3.jpg',
            title: 'Voting Applications',
            href: '/products#voting-applications',
        },
        {
            id: 4,
            img: '/assets/images/PENCAPAIANKOKURIKULUMSMKDJ4.jpg',
            title: 'Voting Applications',
            href: '/products#voting-applications',
        },
        {
            id: 5,
            img: '/assets/images/PENCAPAIANKOKURIKULUMSMKDJ5.jpg',
            title: 'Voting Applications',
            href: '/products#voting-applications',
        },
        {
            id: 6,
            img: '/assets/images/PENCAPAIANKOKURIKULUMSMKDJ6.jpg',
            title: 'Voting Applications',
            href: '/products#voting-applications',
        },
        {
            id: 7,
            img: '/assets/images/PENCAPAIANKOKURIKULUMSMKDJ7.jpg',
            title: 'Voting Applications',
            href: '/products#voting-applications',
        },
        {
            id: 8,
            img: '/assets/images/PENCAPAIANKOKURIKULUMSMKDJ8.jpg',
            title: 'Voting Applications',
            href: '/products#voting-applications',
        },
        {
            id: 9,
            img: '/assets/images/PENCAPAIANKOKURIKULUMSMKDJ9.jpg',
            title: 'Voting Applications',
            href: '/products#voting-applications',
        },
        {
            id: 10,
            img: '/assets/images/PENCAPAIANKOKURIKULUMSMKDJ10.jpg',
            title: 'Voting Applications',
            href: '/products#voting-applications',
        },
        {
            id: 11,
            img: '/assets/images/PENCAPAIANKOKURIKULUMSMKDJ11.jpg',
            title: 'Voting Applications',
            href: '/products#voting-applications',
        },
        {
            id: 12,
            img: '/assets/images/PENCAPAIANKOKURIKULUMSMKDJ12.jpg',
            title: 'Voting Applications',
            href: '/products#voting-applications',
        },
    ];

    return (
        <section className="dark:bg-none pt-20 pb-20">
            <div className="container">
                <div className="heading mb-10 text-center text-3xl font-extrabold text-cyan lg:mb-14">
                    <h6>Products</h6>
                    <h4>Revolutionizing Trust with Blockchain Technology</h4>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation={{
                        nextEl: '.product-slider-next',
                        prevEl: '.product-slider-prev',
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div data-aos="fade-up" data-aos-duration="1000">
                                <Link to={product.href}>
                                    <div className="group relative w-full overflow-hidden rounded-2xl border-2 border-white hover:animate-zoom-bg hover:border-secondary">
                                        <img
                                            src={product.img}
                                            alt={product.title}
                                            className="h-full w-full object-cover duration-500 group-hover:scale-110 md:h-full"
                                        />
                                        <div>
                                            {product.title}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons */}
                <div className="mt-8 flex justify-center gap-4">
                    <button
                        type="button"
                        className="product-slider-prev flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-cyan transition hover:bg-secondary dark:bg-white/5"
                    >
                        <svg
                            width="7"
                            height="12"
                            viewBox="0 0 7 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.95007 1.2002L1.48924 5.3424C1.06317 5.73803 1.06317 6.41236 1.48924 6.80799L5.95007 10.9502"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                    <button
                        type="button"
                        className="product-slider-next flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-cyan transition hover:bg-secondary dark:bg-white/5"
                    >
                        <svg
                            width="7"
                            height="12"
                            viewBox="0 0 7 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.05005 10.7998L5.51089 6.6576C5.93695 6.26197 5.93695 5.58764 5.51089 5.19201L1.05005 1.0498"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Products;
