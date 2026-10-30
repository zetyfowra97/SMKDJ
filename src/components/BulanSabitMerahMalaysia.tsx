import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { IRootState } from '../store';
import { useEffect } from 'react';

const BulanSabitMerahMalaysia = () => {
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
                        <h4 className="!text-secondary">Bulan Sabit Merah Malaysia</h4>
                    </div>
                </div>

                {/* IMAGE 1 - CENTERED */}
                <div className="mx-auto mt-8 flex w-full max-w-7xl justify-center">
                    <div className="group w-full overflow-hidden rounded-xl md:w-1/2">
                        <img
                            src="/assets/images/BulanSabitMerahMalaysia.JPEG"
                            alt="Bulan Sabit Merah Malaysia activity"
                            className="mx-auto block h-auto max-h-[600px] w-full rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                    </div>
                </div>

                {/* IMAGE 2 - CENTERED */}
                <div className="mx-auto mt-8 flex w-full max-w-7xl justify-center">
                    <div className="group w-full overflow-hidden rounded-xl md:w-1/2">
                        <img
                            src="/assets/images/BulanSabitMerahMalaysia2.PNG"
                            alt="Bulan Sabit Merah Malaysia activity 2"
                            className="mx-auto block h-auto max-h-[600px] w-full rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BulanSabitMerahMalaysia;
