import { useEffect } from 'react';
import 'react-18-image-lightbox/style.css';
import { useLocation } from 'react-router-dom';

const Career = () => {
    const location = useLocation();
    const hash = location.hash;

    useEffect(() => {
        console.log('hash', hash);
        if (hash === '#section-1') {
            setTimeout(() => {
                handleClickScroll();
            }, 1000);
        }
    }, [hash]);

    const handleClickScroll = () => {
        const element = document.getElementById('section-1');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    document.title = 'Careers | FPG Solution & Consultancy';

    useEffect(() => {
      
    }, []);

    return (
        <div>
            <section className="mt-10 md:mt-20 mb-10 md:mb-20 bg-gradient-to-t from-white/[54%] to-transparent dark:bg-none">
                <div className="container">
                    <div className="heading text-center">
                        <h6>SMKDJ</h6>
                        <h4>TRENDING</h4>
                    </div>

                    <div className="grid grid-cols-12 gap-2 md:gap-6">
                        {/* Row 1 */}
                        <div
                            className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="group relative h-[300px] overflow-hidden rounded-xl text-xl font-medium md:h-full">
                                <img
                                    src="/assets/images/pengetua.jpg"
                                    alt="gallery-1"
                                    className="h-full w-full object-cover duration-500 group-hover:scale-110"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                {/* Text content */}
                                <div className="absolute bottom-0 left-0 z-10 p-4">
                                    <h2 className="text-2xl font-semibold text-white drop-shadow-[2px_2px_8px_rgba(0,0,0,0.9)]">
                                        Selamat Berkhidmat Encik Aamanu bin Ibrahim
                                    </h2>
                                    <p className="mt-2 text-sm text-white drop-shadow-[1px_1px_4px_rgba(0,0,0,0.8)] md:hidden md:group-hover:block md:group-hover:animate-hex-up">
                                        Kami warga SMK Damansara Jaya mengalu-alukan kedatangan Tuan Pengetua. Semoga kepimpinan Tuan membawa kejayaan gemilang dan inspirasi kepada seluruh warga SMK Damansara Jaya.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-8"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="group relative h-[300px] overflow-hidden rounded-xl text-xl font-medium md:h-full">
                                <img
                                    src="/assets/images/shines.jpg"
                                    alt="gallery-1"
                                    className="h-full w-full object-cover duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 z-10 p-4">
                                    <h2 className="text-2xl font-semibold text-white drop-shadow-[2px_2px_8px_rgba(0,0,0,0.9)]">
                                        SMKDJ SHINES AT THE MALAYSIA TECHNOLOGY EXPO 2025
                                    </h2>
                                    <p className="mt-2 text-sm text-white drop-shadow-[1px_1px_4px_rgba(0,0,0,0.8)] md:hidden md:group-hover:block md:group-hover:animate-hex-up">
                                        Congratulations to 4 of our students who managed to win the Gold Award in the Asian Youth Innovation Awards (Junior) competition at the Malaysia Technology Expo 2025 which was held at the World Trade Center Kuala Lumpur between 20-22 February 2025.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div
                            className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="group relative h-[300px] overflow-hidden rounded-xl text-xl font-medium md:h-full">
                                <img
                                    src="/assets/images/juara.jpeg"
                                    alt="gallery-1"
                                    className="h-full w-full object-cover duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 z-10 p-4">
                                    <h2 className="text-2xl font-semibold text-white drop-shadow-[2px_2px_8px_rgba(0,0,0,0.9)]">
                                        RUMAH KESATRIA JUARA ROAD RUN 2025
                                    </h2>
                                    <p className="mt-2 text-sm text-white drop-shadow-[1px_1px_4px_rgba(0,0,0,0.8)] md:hidden md:group-hover:block md:group-hover:animate-hex-up">
                                        Rumah Kesatria telah berjaya menjadi juara dalam acara Road Run 2025. Kejayaan ini membuktikan semangat dan kekuatan pasukan Rumah Kesatria yang tidak pernah berputus asa.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                             <div className="group relative h-[300px] md:h-[350px] overflow-hidden rounded-xl">
                                <img
                                    src="/assets/images/cemerlang.jpeg"
                                    alt="gallery-1"
                                    className="h-full w-full object-cover duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 z-10 p-4">
                                    <h2 className="text-2xl font-semibold text-white drop-shadow-[2px_2px_8px_rgba(0,0,0,0.9)]">
                                        Cemerlang di Papan Kata!
                                    </h2>
                                    <p className="mt-2 text-sm text-white drop-shadow-[1px_1px_4px_rgba(0,0,0,0.8)] md:hidden md:group-hover:block md:group-hover:animate-hex-up">
                                        Pasukan sekolah berjaya mengharumkan nama SMK Damansara Jaya dengan pencapaian cemerlang di papan kata. Kejayaan ini membuktikan usaha gigih dan semangat juang tinggi dalam kalangan murid serta guru pembimbing.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                             <div className="group relative h-[300px] md:h-[350px] overflow-hidden rounded-xl">
                                <img
                                    src="/assets/images/poster.jpeg"
                                    alt="gallery-1"
                                    className="h-full w-full object-cover duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 z-10 p-4">
                                    <h2 className="text-2xl font-semibold text-white drop-shadow-[2px_2px_8px_rgba(0,0,0,0.9)]">
                                        Ayunan Raket, Ayunan Kejayaan!
                                    </h2>
                                    <p className="mt-2 text-sm text-white drop-shadow-[1px_1px_4px_rgba(0,0,0,0.8)] md:hidden md:group-hover:block md:group-hover:animate-hex-up">
                                        Tahniah diucapkan kepada atlet Tenis SMK Damansara Jaya kerana telah mengharumkan nama sekolah dalam Kejohanan Tenis MSSD Peringkat Daerah 2025 dan telah berjaya muncul sebagai Johan Keseluruhan Kategori Sekolah Menengah.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div
                            className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-8"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="group relative h-[300px] overflow-hidden rounded-xl text-xl font-medium md:h-full">
                                <img
                                    src="/assets/images/mesyuaratagong.jpeg"
                                    alt="gallery-1"
                                    className="h-full w-full object-cover duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 z-10 p-4">
                                    <h2 className="text-2xl font-semibold text-white drop-shadow-[2px_2px_8px_rgba(0,0,0,0.9)]">
                                        Mesyuarat Agung Tahunan PIBG 41/2024
                                    </h2>
                                    <p className="mt-2 text-sm text-white drop-shadow-[1px_1px_4px_rgba(0,0,0,0.8)] md:hidden md:group-hover:block md:group-hover:animate-hex-up">
                                        Mesyuarat Agung Tahunan PIBG kali ke-41 bagi tahun 2024 telah berlangsung dengan jayanya. Semua ahli PIBG hadir untuk membincangkan usaha meningkatkan kecemerlangan sekolah dan kebajikan murid.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="relative col-span-12 mx-auto w-full overflow-hidden md:col-span-4"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <div className="group relative h-[300px] overflow-hidden rounded-xl text-xl font-medium md:h-full">
                                <img
                                    src="/assets/images/mesyuarat.jpg"
                                    alt="gallery-1"
                                    className="h-full w-full object-cover duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 z-10 p-4">
                                    <h2 className="text-2xl font-semibold text-white drop-shadow-[2px_2px_8px_rgba(0,0,0,0.9)]">
                                        MESYUARAT AGUNG TAHUNAN PIBG BIL. 42/2025
                                    </h2>
                                    <p className="mt-2 text-sm text-white drop-shadow-[1px_1px_4px_rgba(0,0,0,0.8)] md:hidden md:group-hover:block md:group-hover:animate-hex-up">
                                        Pihak sekolah amat berbesar hati menjemput Yang Berbahagia Dato’/Datin/Tuan/Puan untuk menghadiri mesyuarat tersebut. Agenda mesyuarat adalah seperti berikut:
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Career;
