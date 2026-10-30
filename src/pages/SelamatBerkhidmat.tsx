import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'react-18-image-lightbox/style.css';

const SelamatBerkhidmat = () => {
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
                        <h6 className="!text-secondary">Academic-Announcements, Pengetua</h6>
                        <p className="text-4xl font-bold text-black">Selamat Berkhidmat Encik Aamanu bin Ibrahim</p>
                        <p className="mt-4 text-justify text-sm font-semibold text-black md:text-lg">
                            Kami warga SMK Damansara Jaya mengalu-alukan kedatangan Tuan Pengetua.
                            <br />
                            <br />
                            Semoga kepimpinan Tuan membawa kejayaan gemilang dan inspirasi kepada seluruh warga SMK Damansara Jaya.
                            <span className="font-semibold">Yang benar,</span>
                            <br />
                            Pengetua
                            <br />
                            SMK Damansara Jaya bermula 9 Januari 2025
                        </p>
                    </div>
                </div>

                {/* IMAGE SECTION */}
                <div className="flex w-full justify-center md:w-1/2" data-aos="fade-left" data-aos-duration="1500">
                    <img src="/assets/images/pengetua.jpg" alt="Pengetua" className="w-3/4 rounded-2xl object-cover shadow-lg sm:w-2/3 md:w-full" />
                </div>
            </section>
        </div>
    );
};

export default SelamatBerkhidmat;
