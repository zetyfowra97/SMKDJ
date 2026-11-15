import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { useEffect, useState } from 'react';

const VIMEO_ID = '759777410';

const PIBGFundraisingVideo = () => {
    const { hash } = useLocation();
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const pdfUrl =
        'https://www.smkdj.edu.my/wp-content/uploads/2026/10/64.10_KM_KPM_KPM-JUNJUNG-TITAH-KDYMM-YANG-DI-PERTUAN-AGONG-UTAMAKAN-KESELAMATAN-DAN-KESIHATAN-MURID-SERTA-WARGA-PENDIDIKAN-SUSULAN-KEADAAN-JEREBU.pdf';
    const pdfUrl2 = 'https://www.smkdj.edu.my/wp-content/uploads/2026/10/76_PENANGGUHAN-SAMBUTAN-HARI-SUKAN-NEGARA.pdf';

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

    // Close popup with Escape key + lock page scroll while popup is open
    useEffect(() => {
        if (!isVideoOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsVideoOpen(false);
        };

        document.addEventListener('keydown', onKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = '';
        };
    }, [isVideoOpen]);

    document.title = 'About Us | FPG Solution & Consultancy';

    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div className="w-full bg-white bg-cover bg-bottom bg-no-repeat pb-20 pt-8">
            <section id="section-1" className="items-center justify-center justify-items-center gap-10 md:gap-16 lg:gap-20">
                {/* TEXT SECTION */}
                <div className="w-full px-5 md:w-1/2 md:px-0" data-aos="fade-right" data-aos-duration="1500">
                    <div className="heading mt-10 text-center ltr:lg:text-left rtl:lg:text-right">
                        <h6 className="!text-secondary">PIBG</h6>

                        <p className="text-4xl font-bold text-black">PIBG Fundraising Video</p>
                        <div>
                            <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg"></p>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <img src="/assets/images/userimages.png" alt="user" className="h-6 w-6 object-contain" />
                                    <p className="text-[12px] font-semibold text-black">TJ Ooi</p>
                                </div>
                                <img src="/assets/images/dateandtime.png" alt="user" className="h-4 w-4 object-contain" />
                                <p className="text-[12px] font-semibold text-black">October 13, 2022</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    {/* VIDEO CARD (replaces the image) */}
                    <div className="image-container group mt-8 h-full w-full overflow-hidden rounded-xl">
                        <button
                            type="button"
                            onClick={() => setIsVideoOpen(true)}
                            aria-label="Play PIBG Fundraising Video"
                            className="from-slate-800 to-slate-950 relative flex aspect-[4/3] h-full w-full items-center justify-center bg-gradient-to-br transition-transform duration-500 group-hover:scale-105 md:aspect-video"
                        >
                            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                                <svg viewBox="0 0 24 24" className="fill-slate-900 ml-1 h-10 w-10">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </span>
                            <span className="absolute bottom-4 left-5 text-base font-semibold text-white">PIBG Fundraising Video</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* VIDEO POPUP */}
            {isVideoOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4"
                    onClick={() => setIsVideoOpen(false)}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="relative aspect-video w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            onClick={() => setIsVideoOpen(false)}
                            aria-label="Close video"
                            className="hover:text-gray-300 absolute -top-10 right-0 text-4xl leading-none text-white transition-colors"
                        >
                            ×
                        </button>
                        <iframe
                            src={`https://player.vimeo.com/video/${VIMEO_ID}?autoplay=1&title=0&byline=0&portrait=0`}
                            className="h-full w-full rounded-lg"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="PIBG Fundraising Video"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PIBGFundraisingVideo;
