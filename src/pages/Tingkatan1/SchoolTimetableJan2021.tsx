import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { useEffect } from 'react';
import CategoryTags from '../../CategoryTags';

const SchoolTimetableJan2021 = () => {
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

    const pdfUrl = 'https://lollipop.smkdj.edu.my/wp-content/uploads/2020/12/14112020_SURAT-MAKLUMAN-PINDAAN-TARIKH-SPM.pdf';

    return (
        <div className="w-full bg-white bg-cover bg-bottom bg-no-repeat pb-20 pt-8">
            <section id="section-1" className="flex flex-col items-center justify-center gap-10 md:gap-16 lg:gap-20">
                {/* TEXT SECTION */}
                <div className="w-full px-5 md:w-1/2 md:px-0" data-aos="fade-right" data-aos-duration="1500">
                    <div className={`heading mt-10 text-center ${isRtl ? 'rtl:lg:text-right' : 'ltr:lg:text-left'}`}>
                        <CategoryTags categories="Tingkatan 1" />

                        <p className="text-3xl font-bold text-black md:text-4xl">School Timetable Jan 2021</p>

                        {/* AUTHOR AND DATE */}
                        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                            <div className="flex items-center gap-1">
                                <img src="/assets/images/userimages.png" alt="Author" className="h-6 w-6 object-contain" />

                                <p className="text-xs font-semibold text-black">SMKDJ</p>
                            </div>

                            <div className="flex items-center gap-1">
                                <img src="/assets/images/dateandtime.png" alt="Date" className="h-4 w-4 object-contain" />

                                <p className="text-xs font-semibold text-black">January 22, 2021</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full px-5 md:w-1/2 md:px-0" data-aos="fade-right" data-aos-duration="1500">
                    <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right ">
                        <h4 className="!text-secondary">Please find the official school timetable effective Monday 25 Jan 2021.</h4>
                        <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                            <a href="https://lollipop.smkdj.edu.my/index.php/timetable/" target="_blank" rel="noopener noreferrer">
                                Read more
                            </a>

                            <br />
                            <br />
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SchoolTimetableJan2021;
