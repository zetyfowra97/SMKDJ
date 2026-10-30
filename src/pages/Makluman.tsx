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
        <div className="bg-white">
            <div className="px-5 pt-20 pb-20">
                <h1 className="mb-10 text-center text-5xl font-extrabold tracking-widest text-[#90d6fa]">SPM 2025</h1>

                {/* Responsive grid for images */}
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {images.map((src, index) => (
                        <div key={index} className="flex w-full justify-center">
                            <Zoom>
                                <img
                                    src={src}
                                    alt={`Kejayaan ${index + 1}`}
                                    className="h-auto max-h-[400px] w-full rounded-xl object-cover shadow-md transition-transform duration-300 hover:scale-[1.02]"
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
