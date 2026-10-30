import { PropsWithChildren, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from '../../App';
import Footer from './Footer';
import Header from './Header';
import { useLocation } from 'react-router-dom';
import CookiesModal from '../CookiesModal';
import Sidebar from '../Sidebar';
import AqiModal from '../AqiModal';

// Pages that should NOT show the sidebar (these also use the original background)
const NO_SIDEBAR_PATHS = ['/'];

// Original site background (used by the homepage and the footer on every page)
const ORIGINAL_BG = "bg-[url('background.png')] bg-cover dark:bg-none";

const DefaultLayout = ({ children }: PropsWithChildren) => {
    const location = useLocation();
    const [showLoader, setShowLoader] = useState(true);
    const [showTopButton, setShowTopButton] = useState(false);

    const isHome = NO_SIDEBAR_PATHS.includes(location.pathname);

    const goToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    const goToContactUs = () => {
        window.location.href = '/contact-us';
    };

    const onScrollHandler = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            setShowTopButton(true);
        } else {
            setShowTopButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScrollHandler);

        const screenLoader = document.getElementsByClassName('screen_loader');
        if (screenLoader?.length) {
            setTimeout(() => {
                setShowLoader(false);
            }, 200);
        }

        return () => {
            window.removeEventListener('scroll', onScrollHandler);
        };
    }, [location.pathname]);

    useEffect(() => {
        window.scroll(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return (
        <App>
            {/* BEGIN MAIN CONTAINER */}
            <div>
                {/* screen loader  */}
                {showLoader && (
                    <div className="screen_loader fixed inset-0 z-[60] grid place-content-center bg-[#fafafa] dark:bg-[#060818]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="200px"
                            height="200px"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="xMidYMid"
                        >
                            <circle cx="50" cy="50" r="0" fill="none" stroke="#47bdff" strokeWidth="4">
                                <animate
                                    attributeName="r"
                                    repeatCount="indefinite"
                                    dur="1s"
                                    values="0;16"
                                    keyTimes="0;1"
                                    keySplines="0 0.2 0.8 1"
                                    calcMode="spline"
                                    begin="0s"
                                ></animate>
                                <animate
                                    attributeName="opacity"
                                    repeatCount="indefinite"
                                    dur="1s"
                                    values="1;0"
                                    keyTimes="0;1"
                                    keySplines="0.2 0 0.8 1"
                                    calcMode="spline"
                                    begin="0s"
                                ></animate>
                            </circle>
                            <circle cx="50" cy="50" r="0" fill="none" stroke="#b476e5" strokeWidth="4">
                                <animate
                                    attributeName="r"
                                    repeatCount="indefinite"
                                    dur="1s"
                                    values="0;16"
                                    keyTimes="0;1"
                                    keySplines="0 0.2 0.8 1"
                                    calcMode="spline"
                                    begin="-0.5s"
                                ></animate>
                                <animate
                                    attributeName="opacity"
                                    repeatCount="indefinite"
                                    dur="1s"
                                    values="1;0"
                                    keyTimes="0;1"
                                    keySplines="0.2 0 0.8 1"
                                    calcMode="spline"
                                    begin="-0.5s"
                                ></animate>
                            </circle>
                        </svg>
                    </div>
                )}

                {/* Outer wrapper */}
                <div className={`font-mulish text-base text-gray antialiased ${isHome ? 'bg-white dark:bg-[#101926]' : 'bg-white dark:bg-[#101926]'}`}>
                    <Header className={showTopButton ? 'sticky-header' : ''} />

                    {/* Homepage keeps one shared background for content + footer */}
                    <div className={isHome ? ORIGINAL_BG : ''}>
                        {isHome ? (
                            // Homepage: full width, no sidebar
                            children
                        ) : (
                            // Other pages: white content area with Recent Posts on the right
                            <div className="bg-white">
                                <div className="container py-10">
                                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
                                        <div className="min-w-0 bg-white">{children}</div>
                                        <Sidebar />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Footer: original background on every page */}
                        {isHome ? (
                            <Footer />
                        ) : (
                            <div className={ORIGINAL_BG}>
                                <Footer />
                            </div>
                        )}
                    </div>

                    <AqiModal />
                    <CookiesModal />
                </div>

                {/* Return to Top  */}
                {showTopButton && (
                    <>
                        <button type="button" className="fixed bottom-5 z-10 animate-small-bounce ltr:right-5 rtl:left-5" onClick={goToTop}>
                            <div className="group flex h-14 w-14 items-center justify-center rounded-full border border-black/20 bg-black text-white transition duration-500 hover:bg-secondary dark:bg-primary dark:hover:bg-secondary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6 transition group-hover:text-black"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>
                            </div>
                        </button>
                        <button type="button" className="fixed bottom-24 z-10 animate-small-bounce ltr:right-5 rtl:left-5" onClick={goToContactUs}>
                            <div className="group flex h-14 w-14 items-center justify-center rounded-full border border-black/20 bg-black text-white transition duration-500 hover:bg-secondary dark:bg-primary dark:hover:bg-secondary">
                                <img className="h-[24px] w-[24px] text-white" src="/assets/images/icon-contact-us.png" alt="" />
                            </div>
                        </button>
                    </>
                )}
            </div>
        </App>
    );
};

export default DefaultLayout;
