import React, { useEffect, useState } from "react";

interface CountdownProps {
  title: string;
  targetDate: string;
  bgColor: string;
}

const CountdownCard: React.FC<CountdownProps> = ({ title, targetDate, bgColor }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: any = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center text-center p-6 w-full h-52 text-white rounded-2xl shadow-lg`}
      style={{ backgroundColor: bgColor }}
    >
      <h2 className="text-2xl font-extrabold mb-3 uppercase">{title}</h2>
      <div className="text-3xl font-mono">
        {String(timeLeft.days).padStart(3, "0")} : {String(timeLeft.hours).padStart(2, "0")} :{" "}
        {String(timeLeft.minutes).padStart(2, "0")} : {String(timeLeft.seconds).padStart(2, "0")}
      </div>
      <div className="text-xs mt-2 uppercase tracking-widest text-white/90">
        Day &nbsp; Hrs &nbsp; Min &nbsp; Sec
      </div>
    </div>
  );
};

const CountdownGrid: React.FC = () => {
  const subjects = [
    { title: "Bahasa Melayu", targetDate: "2025-11-25T00:00:00", bgColor: "#b0b0b0" }, // grey
    { title: "Bahasa Inggeris", targetDate: "2025-11-26T00:00:00", bgColor: "#d4af37" }, // gold
    { title: "Sejarah", targetDate: "2025-11-27T00:00:00", bgColor: "#b0b0b0" },
    { title: "Matematik", targetDate: "2025-11-28T00:00:00", bgColor: "#d4af37" },
    { title: "Pendidikan Islam", targetDate: "2025-11-29T00:00:00", bgColor: "#b0b0b0" },
    { title: "Sains", targetDate: "2025-12-01T00:00:00", bgColor: "#d4af37" },
    { title: "Fizik", targetDate: "2025-12-02T00:00:00", bgColor: "#b0b0b0" },
    { title: "SRT", targetDate: "2025-12-03T00:00:00", bgColor: "#d4af37" },
    { title: "PSV", targetDate: "2025-12-04T00:00:00", bgColor: "#b0b0b0" },
    { title: "M3 Tambahan", targetDate: "2025-12-05T00:00:00", bgColor: "#d4af37" },
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-t from-white/[54%] to-transparent dark:bg-none flex flex-col items-center py-10 px-4">
      <h1 className="text-5xl font-extrabold text-white mb-10 tracking-widest">SPM 2025</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-7xl">
        {subjects.map((subject, index) => (
          <CountdownCard
            key={index}
            title={subject.title}
            targetDate={subject.targetDate}
            bgColor={subject.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default CountdownGrid;
