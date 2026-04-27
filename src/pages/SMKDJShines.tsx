import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'react-18-image-lightbox/style.css';

const SMKDJShines = () => {
    const location = useLocation();
    const hash = location.hash;

    const handleClickScroll = () => {
        const element = document.getElementById('section-1');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (hash === '#section-1') {
            setTimeout(() => handleClickScroll(), 800);
        }
    }, [hash]);

    useEffect(() => {
        document.title = 'Pentadbir | SMK Damansara Jaya';
    }, []);

    return (
        <div className="bg-white w-full pb-20 pt-8 bg-cover bg-bottom bg-no-repeat">
            <section
                id="section-1"
                className="items-center justify-center gap-10 md:gap-16 lg:gap-20 justify-items-center"
            >
                {/* TEXT SECTION */}
                <div
                    className="w-full md:w-1/2 px-5 md:px-0"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
                    <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right">
                                                   <h6 className="!text-secondary">Admin-Announcements, Clubs & Societies, Main Page, Robotics</h6>
                                                   <p className="text-black font-bold text-4xl">SMKDJ SHINES AT THE MALAYSIA TECHNOLOGY EXPO 2025</p>
                        <p className="mt-4 text-sm font-semibold text-black md:text-lg text-justify">
                            Congratulations to 4 of our students who managed to win the Gold Award in the Asian Youth Innovation Awards (Junior) competition at the Malaysia Technology Expo 2025 which was held at the World Trade Center Kuala Lumpur between 20-22 February 2025.
                            
                        </p>
                    </div>
                </div>

                {/* IMAGE SECTION */}
                <div
                    className="w-full md:w-1/2 flex justify-center flex-col gap-10"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
                    <img
                        src="/assets/images/GOLDAWARD.jpg"
                        alt="Pengetua"
                        className="rounded-2xl shadow-lg w-3/4 sm:w-2/3 md:w-full object-cover"
                    /><img
                        src="/assets/images/GOLDAWARD2.jpg"
                        alt="Pengetua"
                        className="rounded-2xl shadow-lg w-3/4 sm:w-2/3 md:w-full object-cover"
                    /><img
                        src="/assets/images/GOLDAWARD3.jpg"
                        alt="Pengetua"
                        className="rounded-2xl shadow-lg w-3/4 sm:w-2/3 md:w-full object-cover"
                    />
                </div>
            </section>
        </div>
    );
};

export default SMKDJShines;
