
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { useEffect } from 'react';

const SenaraiBuku = () => {
    const { hash } = useLocation();

    const handleClickScroll = () => {
        const element = document.getElementById('section-1');

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (hash === '#section-1') {
            const timeout = window.setTimeout(() => {
                handleClickScroll();
            }, 1000);

            return () => window.clearTimeout(timeout);
        }
    }, [hash]);

    useEffect(() => {
        document.title = 'Selamat Menduduki Peperiksaan | SMKDJ';
    }, []);

    const isRtl =
        useSelector(
            (state: IRootState) => state.themeConfig.direction
        ) === 'rtl';

   

    return (
        <div className="w-full bg-white bg-cover bg-bottom bg-no-repeat pb-20 pt-8">
            <section
                id="section-1"
                className="flex flex-col items-center justify-center gap-10 md:gap-16 lg:gap-20"
            >
                {/* TEXT SECTION */}
                <div
                    className="w-full px-5 md:w-1/2 md:px-0"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
                    <div
                        className={`heading mt-10 text-center ${
                            isRtl
                                ? 'rtl:lg:text-right'
                                : 'ltr:lg:text-left'
                        }`}
                    >
                        <h6 className="!text-secondary">
                           Academic, Main Page, Tingkatan 1
                        </h6>

                        <p className="text-3xl font-bold text-black md:text-4xl">
                           Senarai Buku dan Alat Tulis Tahun 2023
                        </p>

                        {/* AUTHOR AND DATE */}
                        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                            <div className="flex items-center gap-1">
                                <img
                                    src="/assets/images/userimages.png"
                                    alt="Author"
                                    className="h-6 w-6 object-contain"
                                />

                                <p className="text-xs font-semibold text-black">
                                   SMKDJ


                                </p>
                            </div>

                            <div className="flex items-center gap-1">
                                <img
                                    src="/assets/images/dateandtime.png"
                                    alt="Date"
                                    className="h-4 w-4 object-contain"
                                />

                                <p className="text-xs font-semibold text-black">
                                    February 20, 2023
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                  <div className="image-container group rounded-xl overflow-hidden w-full h-full">
        <img
            src="/assets/images/Academic/SenaraiBuku.png"
            alt="gallery-1"
            className="w-full h-full object-cover pl-20 pr-20 aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110 center"
        />     
                    </div>
                       <div className="image-container group rounded-xl overflow-hidden w-full h-full">
        <img
            src="/assets/images/Academic/SenaraiBuku2.png"
            alt="gallery-1"
            className="w-full h-full object-cover pl-20 pr-20 aspect-[4/3] md:aspect-auto transition-transform duration-500 group-hover:scale-110 center"
        />     
                    </div>
            </section>
        </div>
    );
};

export default SenaraiBuku;
