import React, { useRef, useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const MdCert = () => {
    const [isOpen, setIsOpen] = useState<any>(false);
    const [photoIndex, setPhotoIndex] = useState<any>(0);

    return (
        <div className="container">
            <div className="heading text-center">
                <h6>MD Certificate</h6>
                <h4>We Hold Malaysia Digital Status Certificates</h4>
            </div>
            <div className="relative grid grid-cols-6 items-center gap-2">
                {/* <div className="heading col-span-6 mb-5 px-8 text-center lg:col-span-3 lg:text-left" data-aos="fade-right" data-aos-duration="2000">
                    <h6 className="!text-secondary">Blockchain Technology</h6>
                    <h4 className=" text-white ">What Is Smart Contract</h4>
                    <p className="mt-4 text-center text-sm font-semibold text-white md:text-lg lg:text-left">
                        A smart contract is a self-executing digital agreement that works on its own without intermediaries. It is like a computer program
                        stored on a secure network that automatically carries out agreed-upon actions when specific conditions are met. It eliminates the need
                        for middlemen and ensures transparency and trustworthiness. They save time, money, and provide security by operating on a decentralized
                        platform. Asia, we specialize in empowering SMEs in the region by leveraging our expertise in blockchain technology and IT solutions.
                    </p>
                </div> */}
                <div className="col-span-4 col-start-2 md:col-span-2 md:col-start-3" onClick={() => setIsOpen(true)}>
                    <Zoom>
                        <img src="/assets/images/md-cert.png" alt="" />
                    </Zoom>
                </div>
            </div>
        </div>
    );
};

export default MdCert;
