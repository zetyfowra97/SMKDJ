import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'react-18-image-lightbox/style.css';

const AyunanRaket = () => {
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
                className="flex flex-col-reverse md:flex-row items-center justify-center container gap-10 md:gap-16 lg:gap-20"
            >
                {/* TEXT SECTION */}
                <div
                    className="w-full md:w-1/2 px-5 md:px-0"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
                    <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right">
                                                   <h6 className="!text-secondary">Admin-Announcements, Main Page, PIBG</h6>
                                                   <p className="text-black font-bold text-4xl">Mesyuarat Agung Tahunan PIBG 41/2024</p>
                        
                    </div>
                </div>

                {/* IMAGE SECTION */}
                <div
                    className="w-full md:w-1/2 flex justify-center"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
                    <img
                        src="/assets/images/mesyuarat.png"
                        alt="Pengetua"
                        className="rounded-2xl shadow-lg w-3/4 sm:w-2/3 md:w-full object-cover"
                    />
                </div>
            </section>
        </div>
    );
};

export default AyunanRaket;
