import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'react-18-image-lightbox/style.css';

const ClubsSocieties = () => {
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
                        <h4 className="!text-secondary">Clubs & Societies</h4>
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/category/clubs/leo/" target="_blank" rel="noopener noreferrer">
                                Kelab Leo
                            </a>

                            <br />
                            <br />
                        </p>
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/library/" target="_blank" rel="noopener noreferrer">
                                Librarian
                            </a>

                            <br />
                            <br />
                        </p>
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/category/clubs/choir/" target="_blank" rel="noopener noreferrer">
                                Koir & Muzik
                            </a>

                            <br />
                            <br />
                        </p>
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/cheerleading/" target="_blank" rel="noopener noreferrer">
                                Kelab Sorak
                            </a>

                            <br />
                            <br />
                        </p>
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/robotics/" target="_blank" rel="noopener noreferrer">
                                Robotik
                            </a>

                            <br />
                            <br />
                        </p>
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/persatuan-pelajar-buddha/" target="_blank" rel="noopener noreferrer">
                                Persatuan Pelajar Buddha
                            </a>

                            <br />
                            <br />
                        </p>
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/christian-fellowship/" target="_blank" rel="noopener noreferrer">
                                Christian Fellowship
                            </a>

                            <br />
                            <br />
                        </p>{' '}
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/koperasi-pengguna/" target="_blank" rel="noopener noreferrer">
                                Koperasi & Pengguna
                            </a>

                            <br />
                            <br />
                        </p>{' '}
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/khb-kulinari/" target="_blank" rel="noopener noreferrer">
                                KHB & Kulinari
                            </a>

                            <br />
                            <br />
                        </p>{' '}
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/spbt/" target="_blank" rel="noopener noreferrer">
                                SPBT
                            </a>

                            <br />
                            <br />
                        </p>{' '}
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/pendidikan-seni-visual/" target="_blank" rel="noopener noreferrer">
                                Pendidikan Seni Visual
                            </a>

                            <br />
                            <br />
                        </p>{' '}
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/pendidikan-islam/" target="_blank" rel="noopener noreferrer">
                                Pendidikan Islam
                            </a>

                            <br />
                            <br />
                        </p>{' '}
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/sains-matematik/" target="_blank" rel="noopener noreferrer">
                                Sains & Matematik
                            </a>

                            <br />
                            <br />
                        </p>{' '}
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/english-club/" target="_blank" rel="noopener noreferrer">
                                Bahasa Inggeris
                            </a>

                            <br />
                            <br />
                        </p>{' '}
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/bahasa-cina/" target="_blank" rel="noopener noreferrer">
                                Bahasa Cina
                            </a>

                            <br />
                            <br />
                        </p>{' '}
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/bahasa-warisan/" target="_blank" rel="noopener noreferrer">
                                Bahasa & Warisan
                            </a>

                            <br />
                            <br />
                        </p>{' '}
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/kelab-kerjaya/" target="_blank" rel="noopener noreferrer">
                                Kelab Kerjaya
                            </a>

                            <br />
                            <br />
                        </p>{' '}
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/kelab-1-malaysia/" target="_blank" rel="noopener noreferrer">
                                Kelab 1 Malaysia
                            </a>

                            <br />
                            <br />
                        </p>{' '}
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/pencegah-jenayah/" target="_blank" rel="noopener noreferrer">
                                Pencegah Jenayah
                            </a>

                            <br />
                            <br />
                        </p>{' '}
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://fruitcake.smkdj.edu.my/index.php/slad-prostar/" target="_blank" rel="noopener noreferrer">
                                SLAD & Prostar
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

export default ClubsSocieties;
