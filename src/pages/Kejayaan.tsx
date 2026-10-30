import React, { useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Kejayaan = () => {
    const [isOpen, setIsOpen] = useState(false);

    const images = [
        '/assets/images/PENCAPAIANKOKURIKULUMSMKDJ.jpg',
        '/assets/images/PENCAPAIANKOKURIKULUMSMKDJ2.jpg',
        '/assets/images/PENCAPAIANKOKURIKULUMSMKDJ3.jpg',
        '/assets/images/PENCAPAIANKOKURIKULUMSMKDJ4.jpg',
        '/assets/images/PENCAPAIANKOKURIKULUMSMKDJ5.jpg',
        '/assets/images/PENCAPAIANKOKURIKULUMSMKDJ6.jpg',
        '/assets/images/PENCAPAIANKOKURIKULUMSMKDJ7.jpg',
        '/assets/images/PENCAPAIANKOKURIKULUMSMKDJ8.jpg',
        '/assets/images/PENCAPAIANKOKURIKULUMSMKDJ9.jpg',
        '/assets/images/PENCAPAIANKOKURIKULUMSMKDJ10.jpg',
        '/assets/images/PENCAPAIANKOKURIKULUMSMKDJ11.jpg',
        '/assets/images/PENCAPAIANKOKURIKULUMSMKDJ12.jpg',
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

export default Kejayaan;
