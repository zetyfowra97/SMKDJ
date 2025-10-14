import React from 'react';
import { Link } from 'react-router-dom';

const WhoWeAre = () => {
    return (
        <div>
            <section className="flex items-center pt-20 pb-20 bg-white">
                <div className="container">
                    <div className="relative">
                        <div className="text-center" data-aos="fade-right" data-aos-duration="2000">
                            <div className="heading mb-5 text-center">
                                {/* Tajuk */}
                                <div  className="text-lg md:text-6xl font-bold">
                                <p className="!text-secondary">
                                   Motto Sekolah
                                </p>
                                </div>
                                {/* Motto */}
                                <p className="mt-4 font-semibold italic text-black text-2xl md:text-4xl">
                                    Berilmu Untuk Berjasa
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhoWeAre;
