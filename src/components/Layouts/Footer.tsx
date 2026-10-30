import { Link } from 'react-router-dom';

const SCHOOL_NAME = 'SMK Damansara Jaya';
const SCHOOL_SHORT = 'SMKDJ';
const SCHOOL_MOTTO = 'Berilmu Untuk Berjasa';
const SCHOOL_ADDRESS = 'Jalan SS 22A/1, Damansara Jaya, 47400 Petaling Jaya, Selangor';
const SCHOOL_PHONE = '03-7729 6018';
const SCHOOL_PHONE_HREF = 'tel:+60377296018';
const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=SMK+Damansara+Jaya';
const YOUTUBE_URL = 'https://www.youtube.com/channel/UCvTBr0RZGZYU-Ixz1Y8Xwqw';
const RESULTS_URL = 'https://forms.office.com/r/EyACfdV4iC';

const linkClass = 'text-base text-white transition hover:text-[#e0832c]';

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#1c1c1e] py-14 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.03] dark:to-transparent lg:py-[36px]">
                <div className="container">
                    <div>
                        <h3 className="text-xl font-bold text-white/90">{SCHOOL_NAME}</h3>
                        <p className="mt-1 text-sm italic text-white/70">“{SCHOOL_MOTTO}”</p>

                        {/* Divider: gray line with orange accent on the left */}
                        <div className="relative mt-4 h-[5px] w-full bg-[#d9d9d9]">
                            <span className="absolute left-0 top-0 h-full w-[62px] bg-[#e0832c]" />
                        </div>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                    {SCHOOL_ADDRESS}
                                </a>
                            </li>
                            <li>
                                <a href={SCHOOL_PHONE_HREF} className={linkClass}>
                                    Tel: {SCHOOL_PHONE}
                                </a>
                            </li>
                            <li>
                                <a href={RESULTS_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                    Results Query
                                </a>
                            </li>
                            <li>
                                <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                    YouTube Channel
                                </a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </footer>

            <div className="bg-black py-2 dark:border-t-2 dark:border-white/5 lg:py-0">
                <div className="container">
                    <p className="pt-3 pb-3 text-center text-sm text-white lg:text-sm">
                        &copy; {new Date().getFullYear()} {SCHOOL_NAME} ({SCHOOL_SHORT}). All rights reserved.
                        <br className="md:hidden" />
                        <Link to="/policy" className="ml-2 mr-1 border-b border-solid">
                            Privacy Policy
                        </Link>
                        {' | '}
                        <Link to="/disclaimer" className="ml-2 border-b border-solid">
                            Disclaimer
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;