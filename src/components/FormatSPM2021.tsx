import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { IRootState } from '../store';
import { useEffect } from 'react';

const FormatSPM2021 = () => {
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

    const pdfUrl = 'https://www.infoupu.com/format-baharu-spm/';

    return (
        <div className="w-full bg-white bg-cover bg-bottom bg-no-repeat pb-20 pt-8">
            <section id="section-1" className="flex flex-col items-center justify-center gap-10 md:gap-16 lg:gap-20">
                {/* TEXT SECTION */}
                <div className="w-full px-5 md:w-1/2" data-aos="fade-right" data-aos-duration="1500"></div>

                {/* PDF DOCUMENT SECTION */}
                <div className="container mx-auto w-full px-4 md:px-5">
                    <div className={`heading mt-10 text-center ${isRtl ? 'rtl:lg:text-right' : 'ltr:lg:text-left'}`}>
                        <p className="text-3xl font-bold text-black md:text-4xl">Format SPM 2021</p>

                        {/* TEXT SECTION */}
                        <div className="" data-aos="fade-right" data-aos-duration="1500">
                            <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right">
                                <p className="mt-4 text-justify text-sm font-semibold text-black md:text-lg">
                                    Makluman kepada pelajar Tingkatan Lima pada tahun 2021 yang bakal menduduki peperiksaan Sijil Pelajaran Malaysia (SPM).
                                    Kementerian Pendidikan Malaysia (KPM) akan memperkenalkan format baharu bagi penyelarasan subjek mata pelajaran baharu di
                                    bawah Kurikulum Standard Sekolah Menengah (KSSM). Di bawah dikongsikan format baharu SPM beserta manual pentaksiran bermula
                                    tahun 2021 sebagai rujukan semua terutamanya kepada pelajar, ibu bapa dan guru-guru.
                                    <br />
                                    <br />
                                    Format Dan Manual Pentaksiran SPM 2021 KSSM <br />
                                    <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg">
                                        <a
                                            href="https://djians-my.sharepoint.com/personal/tongjin_smkdj_edu_my/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ftongjin%5Fsmkdj%5Fedu%5Fmy%2FDocuments%2FThiseus%20Systems%20Sdn%20Bhd%2FProjects%2FSchools%2FSMKDJ%2FOld%2FExam%20Papers%2FSMKDJ%2FForm%201&ga=1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        ></a>
                                    </p>
                                    <p className="pt-10 text-justify text-sm font-semibold text-black md:text-lg">
                                        Source :
                                        <a
                                            href="https://djians-my.sharepoint.com/personal/tongjin_smkdj_edu_my/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ftongjin%5Fsmkdj%5Fedu%5Fmy%2FDocuments%2FThiseus%20Systems%20Sdn%20Bhd%2FProjects%2FSchools%2FSMKDJ%2FOld%2FExam%20Papers%2FSMKDJ%2FForm%201&ga=1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 underline"
                                        >
                                            <></> UPU
                                        </a>{' '}
                                    </p>
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
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
                        <div className="flex flex-wrap gap-3">
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

export default FormatSPM2021;
