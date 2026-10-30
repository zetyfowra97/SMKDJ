import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { useEffect } from 'react';

const SelamatMendudukiPeperiksaanPercubaanBertulisbuatsemuaCalonSPM2026 = () => {
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

    const pdfUrl = 'https://www.smkdj.edu.my/wp-content/uploads/2026/07/2026-JW-PEP-SPMC.pdf';

    return (
        <div className="w-full bg-white bg-cover bg-bottom bg-no-repeat pb-20 pt-8">
            <section id="section-1" className="flex flex-col items-center justify-center gap-10 md:gap-16 lg:gap-20">
                {/* TEXT SECTION */}
                <div className="w-full px-5 md:w-1/2 md:px-0" data-aos="fade-right" data-aos-duration="1500">
                    <div className={`heading mt-10 text-center ${isRtl ? 'rtl:lg:text-right' : 'ltr:lg:text-left'}`}>
                        <h6 className="!text-secondary">Academic, Academic-Announcements</h6>

                        <p className="text-3xl font-bold text-black md:text-4xl">Selamat Menduduki Peperiksaan Percubaan Bertulis buat semua Calon SPM 2026.</p>

                        {/* AUTHOR AND DATE */}
                        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                            <div className="flex items-center gap-1">
                                <img src="/assets/images/userimages.png" alt="Author" className="h-6 w-6 object-contain" />

                                <p className="text-xs font-semibold text-black">SMKDJ</p>
                            </div>

                            <div className="flex items-center gap-1">
                                <img src="/assets/images/dateandtime.png" alt="Date" className="h-4 w-4 object-contain" />

                                <p className="text-xs font-semibold text-black">July 6, 2026</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PDF DOCUMENT SECTION */}
                <div className="container mx-auto w-full px-4 md:px-5">
                    <p className="pt-2 text-lg font-semibold text-black md:text-2xl">Semoga kejayaan menjadi milik kalian!</p>

                    {/* PDF VIEWER */}
                    <div
                        className="border-gray-300 bg-gray-100 mt-6 w-full overflow-hidden rounded-lg border shadow-md"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <iframe
                            src={`${pdfUrl}#toolbar=1&navpanes=1&view=FitH`}
                            title="Jadual Waktu Peperiksaan Percubaan SPM 2026"
                            className="block w-full"
                            style={{
                                height: '80vh',
                                minHeight: '500px',
                                border: 'none',
                            }}
                            loading="lazy"
                        />
                    </div>

                    {/* PDF FOOTER */}
                    <div className="mt-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                        <p className="text-gray-600 text-sm font-medium">2026 JW PEP SPMC</p>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href={pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-gray-300 hover:bg-gray-100 inline-flex items-center justify-center rounded-lg border bg-white px-4 py-2 text-sm font-semibold text-black transition"
                            >
                                View PDF
                            </a>

                            <a
                                href={pdfUrl}
                                download="2026-JW-PEP-SPMC.pdf"
                                className="bg-blue-600 hover:bg-blue-700 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-white transition"
                            >
                                Download PDF
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SelamatMendudukiPeperiksaanPercubaanBertulisbuatsemuaCalonSPM2026;
