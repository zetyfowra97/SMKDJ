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
                <h1 className="mb-10 text-center text-5xl font-extrabold tracking-widest text-white text-[#90d6fa]">Vision, Mission, Motto</h1>
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
