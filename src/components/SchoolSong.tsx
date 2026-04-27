import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { IRootState } from '../store';
import { useEffect } from 'react';

const SchoolSong = () => {
    const { hash } = useLocation();

    const handleClickScroll = () => {
        const element = document.getElementById('section-1');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (hash === '#section-1') {
            setTimeout(() => {
                handleClickScroll();
            }, 1000);
        }
    }, [hash]);

    document.title = 'School Song | SMKDJ';

    const isRtl =
        useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl';

    return (
        <div className="bg-white w-full pb-20 pt-8 bg-cover bg-bottom bg-no-repeat">
            <section
                id="section-1"
                className="items-center justify-center gap-10 md:gap-16 lg:gap-20 justify-items-center"
            >
                <div
                    className="w-full md:w-1/2 px-5 md:px-0"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
                    <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right">

                        {/* TITLE */}
                        <p className="text-black font-bold text-4xl">
                            School Song
                        </p>

                        <br /><br />

                        {/* LYRICS */}
                        Berilmu untuk Berjasa <br /><br />
                        Itulah pegangan kita <br /><br />
                        Sekolah Menengah Damansara Jaya <br /><br />
                        Sentiasa maju dan jaya <br /><br />
                        Bersopan amalan kita <br /><br />
                        Berdisiplin bawa bahgia <br /><br />
                        Kebersihan dipasti juga <br /><br />
                        Beriman, berilmu kita berjaya <br /><br />
                        Prinsip rukunegara jadi panduan semua <br /><br />
                        Pendidikan berguna untuk negara jaya <br /><br />
                        Mari kita berusaha <br /><br />
                        Jayakan segala cita <br /><br />
                        Jadilah rakyat setia berguna <br /><br />
                        Hidup kita jadi bahagia <br /><br />

                    </div>
                    {/* 🎵 AUDIO PLAYER */}
                        <audio
                            controls
                            className="mt-6 w-full"
                        >
                            <source src="/assets/images/smkdj.mp3" type="audio/mpeg" />
                            
                        </audio>
                         <div className="heading mt-10 ">
                        SMK DJ – Minus One
                        </div>
                        {/* 🎵 AUDIO PLAYER */}
                        <audio
                            controls
                            className="mt-6 w-full"
                        >
                            <source src="assets/images/Lagu-Sekolah-SMKDJ.mp3" type="audio/mpeg" />
                          
                        </audio>
                         <div className="heading mt-10 ">
                       SMK DJ – Koir
                        </div>
                        {/* 🎵 AUDIO PLAYER */}
                        <audio
                            controls
                            className="mt-6 w-full"
                        >
                            <source src="assets/images/negaraku_minus_one.mp3" type="audio/mpeg" />
                           
                        </audio>
                         <div className="heading mt-10 ">
                       Negaraku – Minus One
                        </div>
                        {/* 🎵 AUDIO PLAYER */}
                        <audio
                            controls
                            className="mt-6 w-full"
                        >
                            <source src="assets/images/Negaraku.mp3" type="audio/mpeg" />
                           
                        </audio>
                         <div className="heading mt-10 ">
                        Negaraku – Koir
                        </div>
                         <audio
                            controls
                            className="mt-6 w-full"
                        >
                            <source src="assets/images/selangor_minus_one.mp3" type="audio/mpeg" />
                           
                        </audio>
                         <div className="heading mt-10 ">
                       Selangor – Minus One
                        </div>
                         <audio
                            controls
                            className="mt-6 w-full"
                        >
                            <source src="assets/images/selangor.mp3" type="audio/mpeg" />
                            
                        </audio>
                         <div className="heading mt-10 ">
                       Selangor
                        </div>
                </div>
            </section>
        </div>
    );
};

export default SchoolSong;