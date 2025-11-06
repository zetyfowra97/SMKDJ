import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const CareerPositions = () => {
    const dialog: any = useRef();
    const [activeTab, setActiveTab] = useState<string>('all');

    // list of positions
    // Full Stack Developer (Senior/Junior) - Software Team
    // Backend Developer (Senior/Junior) - Software Team
    // Frontend Developer (Senior/Junior) - Software Team
    // Frontend Lead - Software Team
    // Mobile Developer (Android) - Software Team
    // Mobile Developer (IOS) - Software Team
    // Blockchain Developer - Software Team
    // Project Manager - Business Development Team
    // Business Development Manager - Business Development Team
    // Product Manager - Sales & Marketing Team
    // Sales Manager - Sales & Marketing Team
    // DevOps Engineer - DevOps Team
    // UI/UX (Senior) - UI/UX Team
    // Graphic Designer (Senior/Junior) - Graphic Team
    // QA Lead - Quality Assurance Team
    const positions = [
        {
            title: 'Full Stack Developer (Senior/Junior)',
            category: 'software',
            categoryFull: 'Software Team',
            link: '/jobapply?jobTitle=Full%20Stack%20Developer%20(Senior/Junior)',
        },
        {
            title: 'Backend Developer (Senior/Junior)',
            category: 'software',
            categoryFull: 'Software Team',
            link: '/jobapply?jobTitle=Backend%20Developer%20(Senior/Junior)',
        },
        {
            title: 'Frontend Developer (Senior/Junior)',
            category: 'software',
            categoryFull: 'Software Team',
            link: '/jobapply?jobTitle=Frontend%20Developer%20(Senior/Junior)',
        },
        {
            title: 'Frontend Lead',
            category: 'software',
            categoryFull: 'Software Team',
            link: '/jobapply?jobTitle=Frontend%20Lead',
        },
        {
            title: 'Mobile Developer (Android)',
            category: 'software',
            categoryFull: 'Software Team',
            link: '/jobapply?jobTitle=Mobile%20Developer%20(Android)',
        },
        {
            title: 'Mobile Developer (IOS)',
            category: 'software',
            categoryFull: 'Software Team',
            link: '/jobapply?jobTitle=Mobile%20Developer%20(IOS)',
        },
        {
            title: 'Blockchain Developer',
            category: 'software',
            categoryFull: 'Software Team',
            link: '/jobapply?jobTitle=Blockchain%20Developer',
        },
        {
            title: 'Project Manager',
            category: 'business',
            categoryFull: 'Business Development Team',
            link: '/jobapply?jobTitle=Project%20Manager',
        },
        {
            title: 'Business Development Manager',
            category: 'business',
            categoryFull: 'Business Development Team',
            link: '/jobapply?jobTitle=Business%20Development%20Manager',
        },
        {
            title: 'Product Manager',
            category: 'sales',
            categoryFull: 'Sales & Marketing Team',
            link: '/jobapply?jobTitle=Product%20Manager',
        },
        {
            title: 'Sales Manager',
            category: 'sales',
            categoryFull: 'Sales & Marketing Team',
            link: '/jobapply?jobTitle=Sales%20Manager',
        },
        {
            title: 'DevOps Engineer',
            category: 'dev',
            categoryFull: 'DevOps Team',
            link: '/jobapply?jobTitle=DevOps%20Engineer',
        },
        {
            title: 'UI/UX (Senior)',
            category: 'ui',
            categoryFull: 'UI/UX Team',
            link: '/jobapply?jobTitle=UI/UX%20(Senior)',
        },
        {
            title: 'Graphic Designer (Senior/Junior)',
            category: 'graphic',
            categoryFull: 'Graphic Team',
            link: '/jobapply?jobTitle=Graphic%20Designer%20(Senior/Junior)',
        },
        {
            title: 'QA Lead',
            category: 'qa',
            categoryFull: 'Quality Assurance Team',
            link: '/jobapply?jobTitle=QA%20Lead',
        },
    ];

    return (
        <section className="mt-10 md:mt-20" id="open-position">
            <div className="container">
                <div className="heading text-center">
                    <h6>Career Positions</h6>
                    <h4>Join Us Now</h4>
                </div>
                <section className="mb-20" id="open-position">
                    <div className="container">
                        <div className="pb-[20px]">
                            <ul className="filters portfolio-filter flex items-center gap-4 overflow-x-auto whitespace-nowrap pb-2.5 font-bold dark:text-white md:justify-center">
                                <li className={`filter ${activeTab === 'all' ? 'active' : ''}`}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('all')}
                                        className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                                    >
                                        All Positions
                                    </button>
                                </li>
                                <li className={`filter ${activeTab === 'software' ? 'active' : ''}`}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('software')}
                                        className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                                    >
                                        Software
                                    </button>
                                </li>
                                <li className={`filter ${activeTab === 'business' ? 'active' : ''}`}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('business')}
                                        className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                                    >
                                        Business Development
                                    </button>
                                </li>
                                <li className={`filter ${activeTab === 'dev' ? 'active' : ''}`}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('dev')}
                                        className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                                    >
                                        DevOps
                                    </button>
                                </li>
                                <li className={`filter md:hidden ${activeTab === 'sales' ? 'active' : ''}`}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('sales')}
                                        className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                                    >
                                        Sales & Marketing
                                    </button>
                                </li>
                                <li className={`filter md:hidden ${activeTab === 'ui' ? 'active' : ''}`}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('ui')}
                                        className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                                    >
                                        UI/UX Design
                                    </button>
                                </li>
                                <li className={`filter md:hidden ${activeTab === 'graphic' ? 'active' : ''}`}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('graphic')}
                                        className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                                    >
                                        Graphic
                                    </button>
                                </li>
                                <li className={`filter md:hidden ${activeTab === 'qa' ? 'active' : ''}`}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('qa')}
                                        className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                                    >
                                        Quality Assurance
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden pb-[50px] md:block">
                            <ul className="filters portfolio-filter flex items-center gap-4 overflow-x-auto whitespace-nowrap pb-2.5 font-bold dark:text-white md:justify-center">
                                <li className={`filter ${activeTab === 'sales' ? 'active' : ''}`}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('sales')}
                                        className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                                    >
                                        Sales & Marketing
                                    </button>
                                </li>
                                <li className={`filter ${activeTab === 'ui' ? 'active' : ''}`}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('ui')}
                                        className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                                    >
                                        UI/UX Design
                                    </button>
                                </li>
                                <li className={`filter ${activeTab === 'graphic' ? 'active' : ''}`}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('graphic')}
                                        className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                                    >
                                        Graphic
                                    </button>
                                </li>
                                <li className={`filter ${activeTab === 'qa' ? 'active' : ''}`}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('qa')}
                                        className="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                                    >
                                        Quality Assurance
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="projects grid gap-[30px] md:grid-cols-2">
                            {positions &&
                                positions.length > 0 &&
                                positions.map((position, index) => (
                                    <div className={`project ${activeTab === 'all' || activeTab === position.category ? 'block' : 'hidden'}`}>
                                        <Link to={position.link}>
                                            <div className="group border-2 border-primary bg-transparent px-4 py-6 transition hover:border-secondary hover:bg-secondary/10 dark:border-gray-dark dark:bg-gray-dark dark:hover:border-secondary dark:hover:bg-secondary sm:p-[30px]">
                                                <h6 className="mb-5 text-base font-black uppercase text-lightgray dark:group-hover:text-black">
                                                    {position.categoryFull}
                                                </h6>
                                                <div className="flex items-center justify-between">
                                                    <h6 className="text-md sm:text-md mb-10 min-h-[60px] font-extrabold text-secondary dark:text-white">
                                                        {position.title}
                                                    </h6>
                                                    <div className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#F3F4F6] text-black transition hover:bg-secondary hover:text-white rtl:rotate-180 dark:bg-black dark:text-white">
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M9.41083 14.4102L10.5892 15.5885L16.1783 9.99932L10.5892 4.41016L9.41083 5.58849L12.9883 9.16599H5V10.8327H12.9883L9.41083 14.4102Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default CareerPositions;
