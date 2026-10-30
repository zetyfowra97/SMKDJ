import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { IRootState } from '../store';
import { useEffect } from 'react';

const TaekwandoWTF = () => {
    const { hash } = useLocation();

    const handleClickScroll = () => {
        const element = document.getElementById('section-1');

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (hash === '#section-1') {
            const timer = setTimeout(() => {
                handleClickScroll();
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [hash]);

    document.title = 'About Us | FPG Solution & Consultancy';

    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl';

    return (
        <div className="w-full bg-white bg-cover bg-bottom bg-no-repeat px-4 pb-20 pt-8 sm:px-6 lg:px-8">
            <section id="section-1" className="w-full">
                {/* HEADING */}
                <div className="mx-auto w-full max-w-7xl px-2" data-aos="fade-right" data-aos-duration="1500">
                    <div className={`heading mt-10 text-center ${isRtl ? 'lg:text-right' : 'lg:text-left'}`}>
                        <h4 className="!text-secondary">Taekwando WTF</h4>
                    </div>
                </div>
                {/* IMAGE 1 - CENTERED */}
                <div className="relative col-span-12 md:col-span-4" data-aos="fade-up" data-aos-duration="1000">
                    <div className="image-container group h-full w-full overflow-hidden rounded-xl">
                        <img
                            src="/assets/images/TaekwandoWTF.JPEG"
                            alt="gallery-1"
                            className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                        />
                        <div className="absolute bottom-0 left-0 p-4">
                            <h2 className="bg-gray-100/75 text-[27px] font-semibold text-white md:group-hover:animate-hex-up">Low latency and high speed</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                        <a href="/TangkasBeraksiPingatDiraih" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                            Tangkas Beraksi, Pingat Diraih!
                        </a>{' '}
                        <div className="text-sm">October 22, 2026</div>
                    </p>

                    <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                        <a href="/SepakanBerani" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                            Sepakan Berani, Jiwa Perkasa Joanne!
                        </a>{' '}
                        <div className="text-sm">July 28, 2026</div>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default TaekwandoWTF;
