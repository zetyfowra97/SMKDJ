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
        <div className="w-full bg-white bg-cover bg-bottom bg-no-repeat pb-20 pt-8">
            <section id="section-1" className="container flex flex-col-reverse items-center justify-center gap-10 md:flex-row md:gap-16 lg:gap-20">
                {/* TEXT SECTION */}
                <div className="w-full px-5 md:w-1/2 md:px-0" data-aos="fade-right" data-aos-duration="1500">
                    <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right">
                        <h6 className="!text-secondary">Admin-Announcements, Main Page, PIBG</h6>
                        <p className="text-4xl font-bold text-black">Mesyuarat Agung Tahunan PIBG 41/2024</p>
                    </div>
                </div>

                {/* IMAGE SECTION */}
                <div className="flex w-full justify-center md:w-1/2" data-aos="fade-left" data-aos-duration="1500">
                    <img src="/assets/images/mesyuarat.png" alt="Pengetua" className="w-3/4 rounded-2xl object-cover shadow-lg sm:w-2/3 md:w-full" />
                </div>
            </section>
        </div>
    );
};

export default AyunanRaket;
