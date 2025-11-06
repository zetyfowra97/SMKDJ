import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Counter from '../components/Counter';
import Testimonial from '../components/Feedback';
import Mission from '../components/Mission';
import CoreValue from '../components/CoreValue';
import Milestone from '../components/Milestone';

import BlogSlider from '../components/BlogSlider';
import { IRootState } from '../store';
import { useEffect } from 'react';
import GroupOfCompanies from '../components/GroupOfCompanies';
import Partners from '../components/Partners';
import MdCert from '../components/MdCert';

const Aboutus = () => {
    const { hash } = useLocation();

    const handleClickScroll = () => {
        const element = document.getElementById('section-1');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        console.log('hash', hash);
        if (hash === '#section-1') {
            setTimeout(() => {
                handleClickScroll();
            }, 1000);
        }
    }, [hash]);

    document.title = 'About Us | FPG Solution & Consultancy';

    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <div onClick={handleClickScroll} className="bg-[url(/assets/images/aboutus_hero.png)] bg-cover bg-bottom bg-no-repeat">
                <div className="relative h-screen">
                    <div className="flex h-full items-center justify-center">
                        <div className="heading mb-0 text-center">
                            <h4 data-aos="fade-down" data-aos-duration="2000" className="heading !text-white" style={{ fontSize: '4rem' }}>
                                About Us
                            </h4>
                            {/* <div className="flex">
                                <p data-aos="fade-right" data-aos-duration="2000" className=" text-[42px] font-bold text-white mr-4">Pioneering</p>
                                <p data-aos="fade-up" data-aos-duration="2000" className=" text-[42px] font-bold text-white mr-4">the Art of</p>
                                <p data-aos="fade-left" data-aos-duration="2000" className="text-[42px] font-bold text-white text-primary">Blockchain Transformation</p>
                            </div> */}
                            <p data-aos="fade-up" data-aos-duration="2000" className="px-[10%] text-sm font-bold text-white md:px-[20%] md:text-xl">
                                Incepted in 2019 with a team of seasoned bankers and financial experts with 20 years of experience in the industry, FPGSC prides
                                itself in delivering result-driven approaches to help businesses acquire the agility they need to remain competitive in the
                                market.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="mt-10 bg-gradient-to-t from-white/[56%] to-white/0 dark:!bg-none md:mt-20">
                <Mission />
            </section>
            <section id="section-1" className="relative mt-10 overflow-x-hidden md:mt-20">
                <CoreValue />
            </section>
            <section className="relative mt-10 overflow-x-hidden pb-8 md:mt-20 ">
                <Milestone />
            </section>
            <section className="relative mt-10 overflow-x-hidden md:mt-20">
                <MdCert />
            </section>
            <section className="relative mt-10 overflow-x-hidden md:mt-20">
                <GroupOfCompanies />
            </section>

            <section className="relative mt-10 overflow-x-hidden md:mt-6 ">
                <Partners />
            </section>
        </div>
    );
};

export default Aboutus;
