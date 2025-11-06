import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IRootState } from '../../store';
import { toggleTheme, toggleDirection } from '../../store/themeConfigSlice';

const Header = (props: any) => {
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();
    const location = useLocation();

    const [showMenu, setShowMenu] = useState(false);
    ``;
    const toggleMenu = () => {
        if (window.innerWidth < 1024) {
            setShowMenu(!showMenu);
        } else {
            setShowMenu(false);
        }
    };

    const [showSearch, setShowSearch] = useState(false);
    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    return (
        <header className={`sticky top-0 z-50 bg-black/10 transition duration-300 ${props.className}`}>
            <div className="container">
                <div className="flex items-center justify-between py-5 lg:py-0">
                    <Link to="/">
                        <img className="h-20 w-20" src="/assets/images/SMKDJlogo.png" alt="logo"/>
                    </Link>
                    <div className="flex items-center">
                        <div onClick={() => toggleMenu()} className={`overlay fixed inset-0 z-[51] bg-black/60 ${showMenu ? '' : 'hidden'}`}></div>
                        <div className={`menus ${showMenu ? 'overflow-y-auto ltr:!right-0 rtl:!left-0' : ''}`}>
                            <div className="border-b border-gray/10 ltr:text-right rtl:text-left lg:hidden">
                                <button onClick={() => toggleMenu()} type="button" className="p-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6 text-black dark:text-white"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <ul onClick={() => toggleMenu()}>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li className="group relative" onClick={(e) => e.stopPropagation()}>
                                    <Link
                                        to="#"
                                        className={
                                            location.pathname === '/crypto' ||
                                            location.pathname === '/real-estate' ||
                                            location.pathname === '/modern-saas' ||
                                            location.pathname === '/healthcare'
                                                ? 'active'
                                                : ''
                                        }
                                    >
                                        About
                                        <div className="transition duration-500 group-hover:rotate-180 ltr:ml-2 rtl:mr-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19 9L12 15L10.25 13.5M5 9L7.33333 11"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </Link>
                                    <div className="submenu" onClick={() => toggleMenu()}>
                                        
                                        <NavLink to="/modern-saas">
                                            About
                                            <span className="ml-1 rounded bg-gradient-to-r from-[#ef4444] to-[#f97316] px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
                                                New
                                            </span>
                                        </NavLink>
                                        <NavLink to="/real-estate">
                                            School Emblem
                                            <span className="ml-1 rounded bg-gradient-to-r from-[#ef4444] to-[#f97316] px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
                                                New
                                            </span>
                                        </NavLink>
                                        <NavLink to="/healthcare">
                                            National Anthems
                                            <span className="ml-1 rounded bg-gradient-to-r from-[#ef4444] to-[#f97316] px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
                                                New
                                            </span>
                                        </NavLink>
                                        <a href="#">
                                           School Song
                                            <span className="ml-1 rounded bg-secondary px-2 py-1 text-[9px] font-bold uppercase text-white">Coming Soon</span>
                                        </a>
                                        <a href="#">
                                           Youtube Channel
                                            <span className="ml-1 rounded bg-secondary px-2 py-1 text-[9px] font-bold uppercase text-white">Coming Soon</span>
                                        </a>
                                        <a href="#">
                                            Guiding Principle
                                            <span className="ml-1 rounded bg-secondary px-2 py-1 text-[9px] font-bold uppercase text-white">Coming Soon</span>
                                        </a>
                                        <a href="#">
                                            Principal's Messege
                                            <span className="ml-1 rounded bg-secondary px-2 py-1 text-[9px] font-bold uppercase text-white">Coming Soon</span>
                                        </a>
                                        <a href="#">
                                           Shop
                                            <span className="ml-1 rounded bg-secondary px-2 py-1 text-[9px] font-bold uppercase text-white">Coming Soon</span>
                                        </a>
                                        <a href="#">
                                           Facilities
                                            <span className="ml-1 rounded bg-secondary px-2 py-1 text-[9px] font-bold uppercase text-white">Coming Soon</span>
                                        </a>
                                    </div>
                                </li>
                               <li>
                                    <NavLink to="/about-us">Events</NavLink>
                                </li>
                                <li className="group relative" onClick={(e) => e.stopPropagation()}>
                                    <Link
                                        to="#"
                                        className={
                                            location.pathname === '/crypto' ||
                                            location.pathname === '/real-estate' ||
                                            location.pathname === '/modern-saas' ||
                                            location.pathname === '/healthcare'
                                                ? 'active'
                                                : ''
                                        }
                                    >
                                      Important Updates
                                        <div className="transition duration-500 group-hover:rotate-180 ltr:ml-2 rtl:mr-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19 9L12 15L10.25 13.5M5 9L7.33333 11"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </Link>
                                    <div className="submenu" onClick={() => toggleMenu()}>
                                        
                                        <NavLink to="/modern-saas">
                                           Official School Timetable
                                            <span className="ml-1 rounded bg-gradient-to-r from-[#ef4444] to-[#f97316] px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
                                                New
                                            </span>
                                        </NavLink>
                                        <NavLink to="/real-estate">
                                           Academic
                                            <span className="ml-1 rounded bg-gradient-to-r from-[#ef4444] to-[#f97316] px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
                                                New
                                            </span>
                                        </NavLink>
                                        <NavLink to="/healthcare">
                                            HEM
                                            <span className="ml-1 rounded bg-gradient-to-r from-[#ef4444] to-[#f97316] px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
                                                New
                                            </span>
                                        </NavLink>
                                        <a href="#">
                                          Co-curriculum
                                            <span className="ml-1 rounded bg-secondary px-2 py-1 text-[9px] font-bold uppercase text-white">Coming Soon</span>
                                        </a>
                                       
                                    </div>
                                </li>

                                <li>
                                    <NavLink to="/products" className={location.pathname === '/portfolio-detail' ? 'active' : ''}>
                                        Gallery
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/careers">PIBG</NavLink>
                                </li>
                               <li className="group relative" onClick={(e) => e.stopPropagation()}>
                                    <Link
                                        to="#"
                                        className={
                                            location.pathname === '/crypto' ||
                                            location.pathname === '/real-estate' ||
                                            location.pathname === '/modern-saas' ||
                                            location.pathname === '/healthcare'
                                                ? 'active'
                                                : ''
                                        }
                                    >
                                      News
                                        <div className="transition duration-500 group-hover:rotate-180 ltr:ml-2 rtl:mr-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19 9L12 15L10.25 13.5M5 9L7.33333 11"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </Link>
                                    <div className="submenu" onClick={() => toggleMenu()}>
                                        
                                        <NavLink to="/modern-saas">
                                           SMKDJ News
                                            <span className="ml-1 rounded bg-gradient-to-r from-[#ef4444] to-[#f97316] px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
                                                New
                                            </span>
                                        </NavLink>
                                        
                                    </div>
                                </li>
                                <li className="relative hidden items-center before:absolute before:top-1/2 before:h-[30px] before:w-[2px] before:-translate-y-1/2 before:bg-gray/30 ltr:pl-9 ltr:before:-left-[2px] rtl:pr-9 rtl:before:-right-[2px] lg:inline-flex">
                                    <button type="button" onClick={() => toggleSearch()} className="text-white hover:text-primary">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.7363 17.4637L14.6512 13.3785C15.6799 12.0753 16.3 10.4347 16.3 8.65C16.3 4.4317 12.8683 1 8.65 1C4.4317 1 1 4.4317 1 8.65C1 12.8683 4.4317 16.3 8.65 16.3C10.4356 16.3 12.0754 15.6808 13.3786 14.6512L17.4637 18.7363C17.6392 18.9118 17.8696 19 18.1 19C18.3304 19 18.5608 18.9118 18.7363 18.7363C19.0882 18.3844 19.0882 17.8156 18.7363 17.4637ZM2.8 8.65C2.8 5.4244 5.4244 2.8 8.65 2.8C11.8756 2.8 14.5 5.4244 14.5 8.65C14.5 11.8756 11.8756 14.5 8.65 14.5C5.4244 14.5 2.8 11.8756 2.8 8.65Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </button>
                                </li>
                                <li
                                    className={`${showSearch ? '!w-full' : ''}
                  search-bar absolute hidden w-0 overflow-hidden bg-black transition-all duration-500 ltr:right-0 rtl:left-0 lg:block`}
                                >
                                    <form action="" className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            className="w-full border-b border-white bg-transparent py-1 outline-none ltr:pl-2 ltr:pr-8 rtl:pr-2 rtl:pl-8"
                                        />
                                        <button
                                            type="button"
                                            className="absolute top-1/2 -translate-y-1/2 hover:text-primary ltr:right-0 rtl:left-0"
                                            onClick={() => toggleSearch()}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-6 w-6"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </form>
                                </li>
                            </ul>
                        </div>
                        <ul className="flex items-center gap-5 ltr:pr-5 rtl:pl-5 ltr:lg:pl-5 ltr:lg:pr-0 rtl:lg:pr-5 rtl:lg:pl-0">
                            <li>
                                <button
                                    type="button"
                                    className="flex h-5 w-5 items-center text-white hover:text-primary rtl:text-primary"
                                    onClick={() => dispatch(toggleDirection(`${themeConfig.direction === 'rtl' ? 'ltr' : 'rtl'}`))}
                                >
                                    <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 18.9439H7.72074" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                        <path
                                            d="M13.8571 21L16 18.9439L13.8571 16.8879"
                                            stroke="currentColor"
                                            strokeWidth="1.4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path d="M1 16.4206H9.27926" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                        <path
                                            d="M3.14287 18.4766L1 16.4206L3.14287 14.3645"
                                            stroke="currentColor"
                                            strokeWidth="1.4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12.7855 1H5.82118C4.82662 1 3.87279 1.37909 3.16952 2.05387C2.46626 2.72865 2.07117 3.64385 2.07117 4.59813C2.07117 5.55242 2.46626 6.46761 3.16952 7.14239C3.87279 7.81717 4.82662 8.19626 5.82118 8.19626H6.3569"
                                            stroke="currentColor"
                                            strokeWidth="1.4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path d="M10.6426 12.3084V1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.3573 12.3084V1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </li>
                            
                        </ul>
                        <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary lg:hidden"
                            onClick={() => toggleMenu()}
                        >
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                <path
                                    d="M2 15H11C11.552 15 12 15.447 12 16C12 16.553 11.552 17 11 17H2C1.448 17 1 16.553 1 16C1 15.447 1.448 15 2 15Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M2 8H20C20.552 8 21 8.447 21 9C21 9.553 20.552 10 20 10H2C1.448 10 1 9.553 1 9C1 8.447 1.448 8 2 8Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M21 2C21 1.447 20.552 1 20 1H7C6.448 1 6 1.447 6 2C6 2.553 6.448 3 7 3H20C20.552 3 21 2.553 21 2Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
