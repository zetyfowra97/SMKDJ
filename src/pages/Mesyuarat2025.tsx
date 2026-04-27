import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'react-18-image-lightbox/style.css';

const Mesyuarat2025 = () => {
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
                                                   <h6 className="!text-secondary">Academic-Announcements, Admin-Announcements</h6>
                                                   <p className="text-black font-bold text-4xl">MESYUARAT AGUNG TAHUNAN PIBG BIL. 42/2025</p>
                         <p className="mt-4 text-sm font-semibold text-black md:text-lg text-justify">
                            Sukacita dimaklumkan bahawa tarikh Mesyuarat Agung Tahunan PIBG Bil. 42/2025 akan diadakan pada ketetapan berikut:
                            <br /><br />
                            Tarikh : 22 MAC 2025
                            <br />
                            Hari : Sabtu
                            <br />
                            Masa : 9.00 pagi – 12.30 tengah hari Tempat : Bilik Rafflesia, SMKDJ
                            
                            <br /><br />
                            2. Pihak sekolah amat berbesar hati menjemput Yang Berbahagia Dato’/Datin/Tuan/Puan untuk menghadiri mesyuarat tersebut. Agenda mesyuarat adalah seperti berikut:
                            <br />
                            
                            <br /> 2.1  Ucapan Pengerusi
                            <br /> 2.2  Membentangkan dan meluluskan Minit Mesyuarat Agung Tahunan kali ke-41
                            <br /> 2.3  Menerima Laporan Tahunan PIBG 2024
                            <br /> 2.4  Menerima Penyata Kewangan 2024
                            <br /> 2.5  Pembubaran Ahli Jawatankuasa PIBG sesi 2024/2025
                            <br /> 2.6  Pemilihan Ahli Jawatankuasa PIBG sesi 2025/2026
                            <br /> 2.7  Usul-usul (jika berbangkit)
                            <br /> 2.8  Hal-hal lain
                            <br /> 2.9  Ucapan Penangguhan

                            <br /><br /> 3. Kehadiran Yang Berbahagia Dato’/Datin/Tuan/Puan sangat diharapkan demi kepentingan pencapaian akademik anak-anak kita bersama dan kecemerlangan sekolah.
                            <br /> Sekian, terima kasih.
                            <br /><br />
                            “MALAYSIA MADANI” “BERKHIDMAT UNTUK NEGARA” Saya yang menjalankan amanah,
                            <br /><br />
                            ……………………………………………….
                            <br />
                            ( SHEIKH FAISAL BIN SHEIKH MANSOR) YDP PIBG
                            <br />
                            SMK Damansara Jaya
                            <span className="font-semibold">Yang benar,</span><br />
                            Pengetua<br />
                            SMK Damansara Jaya
                        </p>
                    </div>
                </div>

                {/* IMAGE SECTION */}
                <div
                    className="w-full md:w-1/2 flex justify-center"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
                    <img
                        src="/assets/images/mesyuarat2025.png"
                        alt="Pengetua"
                        className="rounded-2xl shadow-lg w-3/4 sm:w-2/3 md:w-full object-cover"
                    />
                </div>
            </section>
        </div>
    );
};

export default Mesyuarat2025;
