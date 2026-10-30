import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'react-18-image-lightbox/style.css';

const UniformUnits = () => {
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
                        <h4 className="!text-secondary">Uniform Units</h4>
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/scouts/" target="_blank" rel="noopener noreferrer">
                                Scouts 37th Bear Pride
                            </a>

                            <br />
                            <br />
                        </p>

                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/girl-guides/" target="_blank" rel="noopener noreferrer">
                                Pandu Puteri
                            </a>

                            <br />
                            <br />
                        </p>

                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/st-johns-ambulance-malaysia/" target="_blank" rel="noopener noreferrer">
                                St John’s Ambulance Malaysia
                            </a>

                            <br />
                            <br />
                        </p>

                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/bulan-sabit-merah-malaysia/" target="_blank" rel="noopener noreferrer">
                                Bulan Sabit Merah Malaysia
                            </a>

                            <br />
                            <br />
                        </p>

                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/kadet-polis/" target="_blank" rel="noopener noreferrer">
                                Kadet Polis
                            </a>

                            <br />
                            <br />
                        </p>
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/kadet-remaja-sekolah/" target="_blank" rel="noopener noreferrer">
                                Kadet Remaja Sekolah
                            </a>

                            <br />
                            <br />
                        </p>
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/taekwando-wtf/" target="_blank" rel="noopener noreferrer">
                                Taekwando WTF
                            </a>

                            <br />
                            <br />
                        </p>
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/wushu/" target="_blank" rel="noopener noreferrer">
                                Wushu
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

export default UniformUnits;
