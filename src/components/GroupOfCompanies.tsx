import React, { useRef } from 'react';

const GroupOfCompanies = () => {
    return (
        <div>
            <div className="container">
                <div className="heading text-center" style={{ marginBottom: 0 }}>
                    <h6>Group of Companies</h6>
                    <h4>Building a Stronger Future</h4>
                </div>
            </div>
            <img
                src="/assets/images/group-of-companies2.png"
                alt="service-video-bg"
                className="gray-scale relative z-[1] hidden h-[600px] w-full object-contain filter md:block"
            />
            <img
                src="/assets/images/group-of-companies-mobile-2.jpg"
                alt="service-video-bg"
                className="gray-scale relative z-[1] mt-10 block w-full object-cover filter md:mt-0 md:hidden"
            />
        </div>
    );
};

export default GroupOfCompanies;
