import React, { useEffect, useState } from 'react';

interface CountdownProps {
    title: string;
    targetDate: string;
    bgColor: string;
}

const calculateTimeLeft = (targetDate: string) => {
    const difference = +new Date(targetDate) - +new Date();

    if (difference > 0) {
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

const CountdownCard: React.FC<CountdownProps> = ({ title, targetDate, bgColor }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        setTimeLeft(calculateTimeLeft(targetDate));
        const timer = setInterval(() => setTimeLeft(calculateTimeLeft(targetDate)), 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    const units = [
        { label: 'Day', value: String(timeLeft.days).padStart(3, '0') },
        { label: 'Hrs', value: String(timeLeft.hours).padStart(2, '0') },
        { label: 'Min', value: String(timeLeft.minutes).padStart(2, '0') },
        { label: 'Sec', value: String(timeLeft.seconds).padStart(2, '0') },
    ];

    return (
        <div
            className="flex min-h-[13rem] w-full flex-col items-center justify-center rounded-2xl p-4 text-center text-white shadow-lg sm:p-6"
            style={{ backgroundColor: bgColor }}
        >
            <h2 className="mb-3 break-words text-lg font-extrabold uppercase leading-tight sm:text-xl lg:text-2xl">{title}</h2>

            <div className="grid w-full grid-cols-4 gap-1.5 sm:gap-2">
                {units.map((unit) => (
                    <div key={unit.label} className="bg-white/15 flex min-w-0 flex-col items-center rounded-lg px-1 py-2">
                        <span className="font-mono text-xl font-bold leading-none sm:text-2xl lg:text-xl xl:text-2xl">{unit.value}</span>
                        <span className="mt-1 text-[10px] uppercase tracking-wider text-white/90 sm:text-xs">{unit.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const CountdownGrid: React.FC = () => {
    const subjects = [
        { title: 'Bahasa Melayu', targetDate: '2025-11-25T00:00:00', bgColor: '#b0b0b0' }, // grey
        { title: 'PSV', targetDate: '2025-11-25T00:00:00', bgColor: '#d4af37' }, // gold
        { title: 'Bahasa Inggeris', targetDate: '2025-11-26T00:00:00', bgColor: '#b0b0b0' },
        { title: 'Sejarah', targetDate: '2025-11-27T00:00:00', bgColor: '#d4af37' },
        { title: 'Matematik', targetDate: '2025-12-01T00:00:00', bgColor: '#b0b0b0' },
        { title: 'Pendidikan Islam // Moral', targetDate: '2025-12-02T00:00:00', bgColor: '#d4af37' },
        { title: 'Sains', targetDate: '2025-12-04T00:00:00', bgColor: '#b0b0b0' },
        { title: 'Fizik', targetDate: '2025-12-04T00:00:00', bgColor: '#d4af37' },
        { title: 'Kimia', targetDate: '2025-12-02T00:00:00', bgColor: '#b0b0b0' },
        { title: 'Biology', targetDate: '2025-12-10T00:00:00', bgColor: '#d4af37' },
        { title: 'Matematik Tambahan', targetDate: '2025-12-15T00:00:00', bgColor: '#b0b0b0' },
        { title: 'Account', targetDate: '2025-12-17T00:00:00', bgColor: '#d4af37' },
        { title: 'Sains Komputer', targetDate: '2025-12-18T00:00:00', bgColor: '#b0b0b0' },
        { title: 'Ekonomi', targetDate: '2025-12-22T00:00:00', bgColor: '#d4af37' },
        { title: 'Bahasa Cina', targetDate: '2025-12-23T00:00:00', bgColor: '#b0b0b0' },
    ];

    return (
        <div className="flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-white bg-gradient-to-t from-white/[54%] to-transparent px-4 py-8 dark:bg-none sm:py-10">
            <h1 className="mb-8 w-full text-center text-3xl font-extrabold tracking-wider text-[#90d6fa] sm:mb-10 sm:text-4xl sm:tracking-widest md:text-5xl">
                SPM 2025
            </h1>

            <div className="grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
                {subjects.map((subject, index) => (
                    <CountdownCard key={index} title={subject.title} targetDate={subject.targetDate} bgColor={subject.bgColor} />
                ))}
            </div>
        </div>
    );
};

export default CountdownGrid;
