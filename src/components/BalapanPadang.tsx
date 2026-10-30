import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'react-18-image-lightbox/style.css';

const BalapanPadang = () => {
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
        document.title = 'SchoolEmblem | SMK Damansara Jaya';
    }, []);

    return (
        <div className="w-full bg-white bg-cover bg-bottom bg-no-repeat pb-20 pt-8">
            <section id="section-1" className="container items-center justify-center gap-10 md:gap-16 lg:gap-20">
                {/* TEXT SECTION */}
                <div className="w-full px-5 md:w-1/2 md:px-0" data-aos="fade-right" data-aos-duration="1500">
                    <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right ">
                        <h4 className="!text-secondary">Balapan & Padang / QM</h4>
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://ipcamlive.com/60613c58715bb" rel="noopener noreferrer">
                                https://ipcamlive.com/60613c58715bb
                            </a>

                            <br />
                            <br />
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BalapanPadang;
