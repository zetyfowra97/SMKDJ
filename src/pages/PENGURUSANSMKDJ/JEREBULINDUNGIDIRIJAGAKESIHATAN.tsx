import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { useEffect } from 'react';

const JEREBULINDUNGIDIRIJAGAKESIHATAN = () => {
    const { hash } = useLocation();
    const pdfUrl =
        'https://www.smkdj.edu.my/wp-content/uploads/2026/09/SURAT-SIARAN-KPM-BIL.1-TAHUN-2019.pdf';
  

    const handleClickScroll = () => {
        const element = document.getElementById('section-1');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        console.log('hash', hash);
        if (hash === '#section-1') {
            setTimeout(() => {
                handleClickScroll();
            }, 1000);
        }
    }, [hash]);

    document.title = 'About Us | FPG Solution & Consultancy';

    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div className="w-full bg-white bg-cover bg-bottom bg-no-repeat pb-20 pt-8">
            <section id="section-1" className="items-center justify-center justify-items-center gap-10 md:gap-16 lg:gap-20">
                {/* TEXT SECTION */}
                <div className="w-full px-5 md:w-1/2 md:px-0" data-aos="fade-right" data-aos-duration="1500">
                    <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right">
                        <h6 className="!text-secondary">PENGURUSAN SMKDJ</h6>

                        <p className="text-4xl font-bold text-black">JEREBU: LINDUNGI DIRI, JAGA KESIHATAN</p>
                        <div>
                            <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg"></p>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <img src="/assets/images/userimages.png" alt="user" className="h-6 w-6 object-contain" />
                                    <p className="text-[12px] font-semibold text-black">SMKDJ</p>
                                </div>
                                <img src="/assets/images/dateandtime.png" alt="user" className="h-4 w-4 object-contain" />
                                <p className="text-[12px] font-semibold text-black">September 9, 2026</p>
                            </div>

                          
                        </div>
                    </div>
                </div>
                <div className="container">
                    {/* 1 */}

                    <div className="image-container group h-full w-full overflow-hidden rounded-xl">
                        <img
                            src="/assets/images/PENGURUSANSMKDJ/JEREBULINDUNGIDIRIJAGAKESIHATAN.JPEG"
                            alt="gallery-1"
                            className="center aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 md:aspect-auto"
                        />
                    </div>
                </div>
                {/* PDF DOCUMENT SECTION */}
                <div className="container mx-auto w-full px-4 md:px-5">
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
                    {/* PDF VIEWER 2*/}
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
                        <p className="text-gray-600 text-sm font-medium">
                            SURAT SIARAN KPM BIL.1 TAHUN 2019
                        </p>

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

export default JEREBULINDUNGIDIRIJAGAKESIHATAN;
