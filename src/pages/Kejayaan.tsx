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
      <div className="pt-20 pb-20 px-5">
        <h1 className="text-5xl text-center font-extrabold mb-10 tracking-widest text-[#90d6fa]">
          SPM 2025
        </h1>

        {/* Responsive grid for images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((src, index) => (
            <div key={index} className="w-full flex justify-center">
              <Zoom>
                <img
                  src={src}
                  alt={`Kejayaan ${index + 1}`}
                  className="w-full h-auto max-h-[400px] object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02]"
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
