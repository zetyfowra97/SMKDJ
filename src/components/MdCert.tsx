import React, { useRef, useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const MdCert = () => {
    const [isOpen, setIsOpen] = useState<any>(false);
    const [photoIndex, setPhotoIndex] = useState<any>(0);

    return (
        <div className="bg-white">
        <div className="container pt-20 pb-20">
            <h1 className="text-5xl text-center font-extrabold text-white mb-10 tracking-widest text-[#90d6fa]">SPM 2025</h1>
            <div>
                
                <div className="col-span-4 col-start-2 md:col-span-2 md:col-start-3" onClick={() => setIsOpen(true)}>
                    <Zoom>
                        <img src="/assets/images/visimisimoto.png" alt="" />
                    </Zoom>
                </div>
            </div>
        </div>
        </div>
    );
};

export default MdCert;
