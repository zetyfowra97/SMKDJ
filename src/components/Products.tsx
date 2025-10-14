import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <section className="dark:bg-none">
                <div className="container">
                    <div className={`heading mb-10 text-center text-3xl font-extrabold text-cyan lg:mb-14 ltr:lg:text-center rtl:lg:text-center`}>
                        <h6>Products</h6>
                        <h4 className="">Revolutionizing Trust with Blockchain Technology</h4>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-3">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <Link to="/products#blockchain">
                                <div className="group relative h-96 min-w-full overflow-hidden rounded-2xl  border-2  border-white hover:animate-zoom-bg hover:border-secondary">
                                    <img
                                        src="/assets/images/career-whyworkwithus-6.png"
                                        alt="gallery-1"
                                        className="h-full  w-full object-cover duration-500 group-hover:scale-110 md:h-full"
                                    />
                                    <div className="absolute bottom-0 left-0  w-full p-4 text-center text-2xl font-extrabold text-white group-hover:text-secondary">
                                        Blockchain
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <Link to="/products#enterprise-solutions">
                                <div className="group relative h-96 min-w-full overflow-hidden rounded-2xl  border-2  border-white hover:animate-zoom-bg hover:border-secondary">
                                    <img
                                        src="/assets/images/HomeProduct2.png"
                                        alt="gallery-1"
                                        className="h-full  w-full object-cover duration-500 group-hover:scale-110 md:h-full"
                                    />
                                    <div className="absolute bottom-0 left-0  w-full p-4 text-center text-2xl font-extrabold text-white group-hover:text-secondary">
                                        Enterprise Solutions
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <Link to="/products#voting-applications">
                                <div className="group relative h-96 min-w-full overflow-hidden rounded-2xl  border-2  border-white hover:animate-zoom-bg hover:border-secondary">
                                    <img
                                        src="/assets/images/HomeProduct3.png"
                                        alt="gallery-1"
                                        className="h-full  w-full object-cover duration-500 group-hover:scale-110 md:h-full"
                                    />
                                    <div
                                        className="absolute bottom-0 left-0  w-full p-4 text-center text-2xl font-extrabold text-white group-hover:text-secondary"
                                    >
                                        Voting Applications
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
