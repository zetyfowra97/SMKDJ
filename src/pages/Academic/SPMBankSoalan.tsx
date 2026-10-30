import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { useEffect } from 'react';

const SPMBankSoalan = () => {
    const { hash } = useLocation();

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
                        <h6 className="!text-secondary">Academic, SPM</h6>

                        <p className="text-4xl font-bold text-black">SPM Bank Soalan</p>
                        <div>
                            <p className="mt-4 text-justify text-sm font-semibold text-black underline underline-offset-1 md:text-lg"></p>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <img src="/assets/images/userimages.png" alt="user" className="h-6 w-6 object-contain" />
                                    <p className="text-[12px] font-semibold text-black">SMKDJ</p>
                                </div>
                                <img src="/assets/images/dateandtime.png" alt="user" className="h-4 w-4 object-contain" />
                                <p className="text-[12px] font-semibold text-black">February 7, 2021</p>
                            </div>
                            <div>
                                <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">
                                    The attachment below is the Google Drive link for SPM Bank Soalan.
                                </p>
                            </div>
                            <div className="pt-5">
                                <a
                                    href="https://drive.google.com/drive/folders/1bKlev4Pz_vCn6KgOWi5of8TAWq0kXe8w?usp=sharing"
                                    className="hover:text-blue-800 text-black hover:underline"
                                >
                                    https://drive.google.com/drive/folders/1bKlev4Pz_vCn6KgOWi5of8TAWq0kXe8w?usp=sharing
                                </a>
                            </div>
                            <div>
                                <p className="pt-5 text-justify text-sm font-semibold text-black md:text-lg">*can only be accessed using your DELIMA email</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SPMBankSoalan;
