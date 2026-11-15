import React, { useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Makluman = () => {
    const [isOpen, setIsOpen] = useState(false);

    const images = [
        '/assets/images/SuratMaklumanTaklimatPakejTingkatan4.jpeg',
        '/assets/images/SURATMAKLUMANPERUBAHANJADUALPINTASTINGKATN42025.jpeg',
        '/assets/images/SURATMAKLUMANCUTIDEEPAVALI2025.jpeg',
        '/assets/images/MAJLISSOLATHAJATDANBACAANYASIN.jpeg',
    ];

    return (
        <div className="overflow-x-hidden bg-white">
            <div className="px-5 pt-20 pb-20 max-[366px]:px-3 max-[366px]:pt-12 max-[366px]:pb-12">
                <div className="heading mb-10 text-center max-[366px]:mb-6">
                    <div className="heading mb-10 text-center max-[366px]:mb-6">
                        <h6 className="text-gray-400 text-sm max-[366px]:text-[10px] max-[366px]:tracking-wide md:text-base"> HEBAHAN TERKINI</h6>
                        <h1
                            className="mb-10 text-center text-5xl font-extrabold tracking-widest text-black
                                   max-[366px]:mb-4 max-[366px]:text-[clamp(1.125rem,7vw,1.75rem)] max-[366px]:tracking-wide"
                        >
                            MAKLUMAT
                        </h1>
                    </div>
                </div>

                {/* Responsive grid for images */}
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 max-[366px]:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {images.map((src, index) => (
                        <div key={index} className="flex w-full justify-center">
                            <Zoom>
                                <img
                                    src={src}
                                    alt={`Makluman ${index + 1}`}
                                    className="max-[366px]:max-h-none h-auto max-h-[400px] w-full rounded-xl object-cover shadow-md transition-transform duration-300
                                               hover:scale-[1.02] max-[366px]:rounded-lg max-[366px]:object-contain"
                                />
                            </Zoom>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Makluman;
