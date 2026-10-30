import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { useEffect } from 'react';

const ImportantUpdates = () => {
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
        <div className="w-full bg-white bg-cover bg-bottom bg-no-repeat pb-20 pt-8">
            <section id="section-1" className="items-center justify-center justify-items-center gap-10 md:gap-16 lg:gap-20">
                {/* TEXT SECTION */}
                <div className="w-full px-5 md:w-1/2 md:px-0" data-aos="fade-right" data-aos-duration="1500">
                    <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right">
                        <p className="pt-10 text-4xl font-bold text-black">Important Updates</p>
                        <div>
                            <div>
                                <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    <a href="/MeluncurGagah" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Meluncur Gagah!
                                    </a>{' '}
                                    <div className="text-sm">August 16, 2026</div>
                                </p>

                                <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    <a href="/SepakanBerani" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Sepakan Berani, Jiwa Perkasa Joanne!
                                    </a>{' '}
                                    <div className="text-sm">July 28, 2026</div>
                                </p>

                                <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    <a
                                        href="/SelamatMenduduki"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 underline"
                                    >
                                        Selamat Menduduki Peperiksaan Percubaan Bertulis buat semua Calon SPM 2026.
                                    </a>{' '}
                                    <div className="text-sm">July 6, 2026</div>
                                </p>

                                <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    <a href="/ArenaHujah" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Arena Hujah
                                    </a>{' '}
                                    <div className="text-sm">June 12, 2026</div>
                                </p>

                                <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    <a
                                        href="/MaklumatPenundaan"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 underline"
                                    >
                                        Maklumat Penundaan Perjumpaan Kokurikulum
                                    </a>{' '}
                                    <div className="text-sm">June 12, 2026</div>
                                </p>

                                <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    <a href="/MahkotaIlmu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Mahkota Ilmu Diraja milik Choo En Li!
                                    </a>{' '}
                                    <div className="text-sm">May 2, 2026</div>
                                </p>

                                <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    <a href="/DariTerjunan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                                        Dari Terjunan ke Takhta Pingat!
                                    </a>{' '}
                                    <div className="text-sm">May 2, 2026</div>
                                </p>

                                <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                    <a
                                        href="/LegasiKemenangan"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 underline"
                                    >
                                        Legasi Kemenangan Berterusan!
                                    </a>{' '}
                                    <div className="text-sm">May 2, 2026</div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ImportantUpdates;
