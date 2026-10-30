import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'react-18-image-lightbox/style.css';

const Pentadbir = () => {
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
                        <h6 className="!text-secondary">Pengetua</h6>
                        <h4 className="!text-secondary">Pentadbir Sekolah</h4>
                        <p className="mt-4 text-justify text-sm font-semibold text-black md:text-lg">
                            Salam sejahtera dan selamat datang ke laman web rasmi SMK Damansara Jaya.
                            <br />
                            <br />
                            Saya dengan rasa syukur dan bangga mengalu-alukan seluruh warga sekolah, ibu bapa, serta komuniti setempat ke platform digital ini.
                            Laman web ini diwujudkan bagi memudahkan perkongsian maklumat terkini serta memperkukuh hubungan antara sekolah dan masyarakat.
                            <br />
                            <br />
                            Sebagai sebuah institusi yang sentiasa mengutamakan kecemerlangan, SMK Damansara Jaya terus berusaha melahirkan pelajar yang
                            seimbang dari segi akademik, sahsiah, dan kepimpinan. Kami percaya bahawa setiap pelajar memiliki potensi yang besar untuk digilap
                            melalui bimbingan guru dan sokongan ibu bapa.
                            <br />
                            <br />
                            Melalui laman web ini, diharap semua pihak dapat mengikuti perkembangan aktiviti sekolah serta pencapaian pelajar dengan lebih mudah
                            dan cepat. Ia juga menjadi ruang untuk kita sama-sama meraikan kejayaan dan memperkukuh semangat kebersamaan warga SMKDJ.
                            <br />
                            <br />
                            Akhir kata, saya menyeru semua untuk terus menyokong usaha sekolah dalam membentuk generasi yang berilmu, berdisiplin, dan
                            berwawasan.
                            <br />
                            <br />
                            Sekian, terima kasih.
                            <br />
                            <br />
                            <span className="font-semibold">Yang benar,</span>
                            <br />
                            Pengetua
                            <br />
                            SMK Damansara Jaya
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

export default Pentadbir;
