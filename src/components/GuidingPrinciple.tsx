import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { IRootState } from '../store';
import { useEffect } from 'react';

const GuidingPrinciple = () => {
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
                        <p className="text-black font-bold text-2xl">
                            School Song
                        </p>
                        Berilmu untuk Berjasa <br /><br />
                       

                    </div>
                    
                        
                    </div>
            </section>
        </div>
    );
};

export default GuidingPrinciple;