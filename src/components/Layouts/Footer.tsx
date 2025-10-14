import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#1c1c1e] py-14 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.03] dark:to-transparent lg:py-[36px]">
                <div className="container">
                    <div className="grid gap-y-10 gap-x-4 sm:grid-cols-2 lg:grid-cols-2">
                        <div className="flex items-center justify-center p-2 sm:justify-end  lg:justify-end">
                            <ul className="flex flex-col gap-3 font-bold">
                                <img src="/assets/images/fpgsc-logo-2.png" alt="plurk" className="h-[90px] md:h-[120px]" />
                            </ul>
                        </div>
                        <div className="flex w-full items-center justify-center p-2 sm:w-[310px] sm:justify-start">
                            <div className="flex w-full justify-center">
                                <img src="/assets/images/md-footer.png" alt="plurk" className="scale-90" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bg-black py-2 dark:border-t-2 dark:border-white/5 lg:py-0">
                <div className="container">
                    <p className="pt-3 pb-3 text-center text-sm text-white md:order-1 md:mt-0 md:hidden lg:text-sm">
                        &copy; {new Date().getFullYear()} FPG Solution & Consultancy Sdn. Bhd.
                        <br />
                        <Link to="/policy" className="ml-2 mr-1 border-b border-solid">
                            {' '}
                            Privacy Policy
                        </Link>
                        {' | '}
                        <Link to="/disclaimer" className="ml-2 border-b border-solid">
                            Disclaimer
                        </Link>
                    </p>
                    <p className="hidden pt-3  pb-3 text-center text-sm text-white md:order-1 md:mt-0 md:block lg:text-sm">
                        &copy; {new Date().getFullYear()} FPG Solution & Consultancy Sdn. Bhd.
                        <Link to="/policy" className="ml-2 mr-1 border-b border-solid">
                            Privacy Policy
                        </Link>{' '}
                        |
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
