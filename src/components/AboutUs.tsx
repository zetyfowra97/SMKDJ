import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'react-18-image-lightbox/style.css';

const teamMembers = [
    { image: 'EN._AAMANU', name: 'AAMANU BIN IBRAHIM', role: 'PENGETUA' },
    { image: 'PN._FAUZIAH', name: 'FAUZIAH BINTI HASSAN @ ZAKARIA', role: 'PENOLONG KANAN PENTADBIRAN' },
    { image: 'PN._ZABARIAH', name: 'ZABARIAH BINTI ABDULLAH', role: 'PENOLONG KANAN HEM' },
    { image: 'PN._ANISHA', name: 'ANISHA BINTI MOHD SULAN', role: 'MATEMATIK' },
    { image: 'PN._NAZIMA', name: 'NAZIMA @ NORAIDA BINTI ABU NAIM', role: 'GKMP BAHASA' },
    { image: 'PN._TIE', name: 'TIE SUK ING', role: 'MATEMATIK' },
    { image: 'PN._OOI_CC', name: 'OOI CHIN CHUANG', role: 'GKMP KEMANUSIAAN' },
    { image: 'EN._MUDZIL', name: 'ABDUL MUDZIL BIN MAHAMOD', role: 'GKMP TEKNIK & VOKASIONAL' },
];

const socials = [
    {
        key: 'linkedin',
        width: 19,
        height: 18,
        viewBox: '0 0 19 18',
        path: 'M4.36167 2.58333C4.36143 3.06956 4.16804 3.53578 3.82406 3.87943C3.48007 4.22307 3.01365 4.41599 2.52742 4.41575C2.04119 4.41551 1.57497 4.22212 1.23133 3.87813C0.887685 3.53414 0.694764 3.06773 0.695008 2.5815C0.695251 2.09527 0.888638 1.62905 1.23263 1.28541C1.57662 0.941762 2.04303 0.748842 2.52926 0.749085C3.01549 0.749328 3.48171 0.942715 3.82535 1.2867C4.169 1.63069 4.36192 2.0971 4.36167 2.58333ZM4.41667 5.77333H0.750008V17.25H4.41667V5.77333ZM10.21 5.77333H6.56167V17.25H10.1733V11.2275C10.1733 7.8725 14.5458 7.56083 14.5458 11.2275V17.25H18.1667V9.98083C18.1667 4.325 11.695 4.53583 10.1733 7.31333L10.21 5.77333Z',
    },
    {
        key: 'facebook',
        width: 11,
        height: 20,
        viewBox: '0 0 11 20',
        path: 'M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z',
    },
    {
        key: 'twitter',
        width: 22,
        height: 17,
        viewBox: '0 0 22 17',
        path: 'M21.46 2C20.69 2.35 19.86 2.58 19 2.69C19.88 2.16 20.56 1.32 20.88 0.31C20.05 0.81 19.13 1.16 18.16 1.36C17.37 0.5 16.26 0 15 0C12.65 0 10.73 1.92 10.73 4.29C10.73 4.63 10.77 4.96 10.84 5.27C7.27999 5.09 4.10999 3.38 1.99999 0.79C1.62999 1.42 1.41999 2.16 1.41999 2.94C1.41999 4.43 2.16999 5.75 3.32999 6.5C2.61999 6.5 1.95999 6.3 1.37999 6V6.03C1.37999 8.11 2.85999 9.85 4.81999 10.24C4.19072 10.4122 3.53009 10.4362 2.88999 10.31C3.1616 11.1625 3.69353 11.9084 4.41101 12.4429C5.12849 12.9775 5.99544 13.2737 6.88999 13.29C5.37362 14.4904 3.49399 15.1393 1.55999 15.13C1.21999 15.13 0.879993 15.11 0.539993 15.07C2.43999 16.29 4.69999 17 7.11999 17C15 17 19.33 10.46 19.33 4.79C19.33 4.6 19.33 4.42 19.32 4.23C20.16 3.63 20.88 2.87 21.46 2Z',
    },
];

const Aboutus = () => {
    const location = useLocation();
    const hash = location.hash;

    const handleClickScroll = () => {
        const element = document.getElementById('section-1');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (hash === '#section-1') {
            setTimeout(() => handleClickScroll(), 800);
        }
    }, [hash]);

    useEffect(() => {
        document.title = 'About Us | SMKDJ';
    }, []);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl';

    return (
        <div className="overflow-x-hidden">
            <section className="overflow-hidden py-12 lg:py-24">
                <div className="container">
                    <div className="heading text-center">
                        <h6 className="!text-secondary">Warga Di Sebalik Kejayaan Kami</h6>
                        <h4>Pengurusan Tertinggi Sekolah</h4>
                    </div>
                </div>

                <div className="container relative mt-10 px-12 sm:px-16">
                    <button
                        type="button"
                        aria-label="Previous"
                        className="team-swiper-button-prev absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-white text-primary duration-200 hover:bg-primary hover:text-white sm:left-2 sm:h-11 sm:w-11"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.5892 14.4111L9.41083 15.5895L3.82167 10.0003L9.41083 4.41113L10.5892 5.58947L7.01167 9.16697H15V10.8336H7.01167L10.5892 14.4111Z"
                                fill="currentcolor"
                            />
                        </svg>
                    </button>
                    <button
                        type="button"
                        aria-label="Next"
                        className="team-swiper-button-next absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-white text-primary duration-200 hover:bg-primary hover:text-white sm:right-2 sm:h-11 sm:w-11"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.41083 14.4111L10.5892 15.5895L16.1783 10.0003L10.5892 4.41113L9.41083 5.58947L12.9883 9.16697H5V10.8336H12.9883L9.41083 14.4111Z"
                                fill="currentcolor"
                            />
                        </svg>
                    </button>

                    <Swiper
                        loop={true}
                        slidesPerView={1}
                        spaceBetween={20}
                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 16 },
                            480: { slidesPerView: 2, spaceBetween: 16 },
                            768: { slidesPerView: 3, spaceBetween: 20 },
                            1024: { slidesPerView: 4, spaceBetween: 24 },
                            1536: { slidesPerView: 5, spaceBetween: 24 },
                        }}
                        navigation={{
                            nextEl: '.team-swiper-button-next',
                            prevEl: '.team-swiper-button-prev',
                        }}
                        modules={[Navigation]}
                        dir={isRtl ? 'rtl' : 'ltr'}
                        key={isRtl ? 'rtl' : 'ltr'}
                        className="swiper team-member text-center"
                    >
                        {teamMembers.map((member) => (
                            <SwiperSlide key={member.image} className="relative">
                                <div className="group relative overflow-hidden rounded-3xl">
                                    <img src={`/assets/images/healthcare/${member.image}.png`} className="h-full w-full object-cover" alt={member.name} />
                                    <ul className="absolute inset-x-0 -bottom-full flex items-end justify-center gap-[30px] pb-5 transition-all duration-300 group-hover:inset-y-0 group-hover:bg-gradient-to-t group-hover:from-primary/70">
                                        {socials.map((social) => (
                                            <li key={social.key}>
                                                <Link
                                                    to="#"
                                                    aria-label={social.key}
                                                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary duration-200 hover:bg-primary hover:text-white"
                                                >
                                                    <svg
                                                        width={social.width}
                                                        height={social.height}
                                                        viewBox={social.viewBox}
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d={social.path} fill="currentcolor" />
                                                    </svg>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <h3 className="mt-2 text-lg font-extrabold text-black dark:text-white sm:text-xl">{member.name}</h3>
                                <p className="mt-2.5 text-sm font-semibold">{member.role}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </div>
    );
};

export default Aboutus;
