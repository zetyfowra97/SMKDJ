import React, { useRef } from 'react';

const GroupOfCompanies = () => {
    return (
        <div>
            <div className="container">
                <div className="heading text-center" style={{marginBottom:0}}>
                    <h6>Group of Companies</h6>
                    <h4>Building a Stronger Future</h4>
                </div>
            </div>
            <img
                src="/assets/images/group-of-companies2.png"
                alt="service-video-bg"
                className="gray-scale relative z-[1] h-[600px] w-full object-contain filter hidden md:block"
            />
            <img
                src="/assets/images/group-of-companies-mobile-2.jpg"
                alt="service-video-bg"
                className="gray-scale relative z-[1] w-full object-cover filter block md:hidden mt-10 md:mt-0"
            />
        </div>
    );
};

export default GroupOfCompanies;
