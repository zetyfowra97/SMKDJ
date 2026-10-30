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

    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl';

    return (
        <div className="w-full bg-white bg-cover bg-bottom bg-no-repeat pb-20 pt-8">
            <section id="section-1" className="items-center justify-center justify-items-center gap-10 md:gap-16 lg:gap-20">
                <div className="w-full px-5 md:w-1/2 md:px-0" data-aos="fade-right" data-aos-duration="1500">
                    <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right">
                        {/* TITLE */}
                        <p className="text-4xl font-bold text-black">DJIAN Qualities</p>
                        <br />
                        <br />
                        {/* LYRICS */}
                        <p className="text-2xl font-bold text-black">Determined</p>
                        Never giving up under tough and challenging situations. <br />
                        <br />
                        <p className="text-2xl font-bold text-black">Helpful</p>
                        Always ready to lend a hand to those in need.
                        <br />
                        <br />
                        <p className="text-2xl font-bold text-black">Confident</p>
                        Not hesitant to share their thoughts and experience with others.
                        <br />
                        <br />
                        <p className="text-2xl font-bold text-black">Outgoing</p>
                        Actively participate in co-curricular and curricular activities.
                        <br />
                        <br />
                        <p className="text-2xl font-bold text-black">Resourceful</p>
                        Able to find solutions for different problems.
                        <br />
                        <br />
                        <p className="text-2xl font-bold text-black">Creative</p>
                        Always thinking out of the box through different perspectives.
                        <br />
                        <br />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GuidingPrinciple;
