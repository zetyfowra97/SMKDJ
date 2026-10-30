import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { IRootState } from '../store';
import { useEffect } from 'react';

const PIBG = () => {
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

    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl';

    const pdfUrl = 'https://www.smkdj.edu.my/wp-content/uploads/2023/03/JW-kelas-2023-2024211.pdf';

    return (
        <div className="w-full bg-[#fafafa] bg-cover bg-bottom bg-no-repeat pb-20 pt-8">
            <section id="section-1" className="flex flex-col items-center justify-center gap-10 md:gap-16 lg:gap-20">
                <div className="container mx-auto w-full px-4 md:px-5">
                    {/* Heading */}
                    <h1 className="text-3xl font-bold text-[#1a1a1a] md:text-4xl">Persatuan Ibubapa &amp; Guru</h1>

                    {/* Top pink line */}
                    <div className="mt-4 h-[5px] w-full bg-[#ee93a8]" />

                    {/* Paragraph */}
                    <p className="mx-auto max-w-4xl px-2 py-8 text-center text-lg font-normal leading-[2.1] text-[#4b5563] md:px-8 md:text-2xl md:leading-[2.1]">
                        On behalf of PIBG we welcome you to our landing page. Our task is to help the school build a conducive and healthy environment for our
                        children. We support the administrative and academic staff in whatever way we can on a volunteer basis. If you wish to lend a hand,
                        please feel free to join us !
                    </p>

                    {/* Bottom pink line */}
                    <div className="h-[5px] w-full bg-[#ee93a8]" />
                </div>
            </section>
        </div>
    );
};

export default PIBG;