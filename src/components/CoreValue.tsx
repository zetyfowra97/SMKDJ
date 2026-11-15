import React from 'react';

// Shared content for the tablet/mobile view
const badgeItems = [
    { title: 'Shield', text: 'Represents protection and strength, showing that the school ', img: '/assets/images/sheild.png' },
    { title: 'Torch Light', text: 'Signifies knowledge as the guiding light of life.', img: '/assets/images/Hex-02.png' },
    { title: 'Open Book', text: 'Symbolizes continuous learning and the pursuit of wisdom.', img: '/assets/images/openbook.png' },
    { title: 'Blue', text: 'Symbolizes unity, loyalty, and harmony among the school community.', color: '#29326f' },
    { title: 'Yellow', text: 'Stands for excellence, honour, and high ambitions.', color: '#fced4f' },
    { title: 'White', text: 'Represents purity, sincerity, and honesty in learning.', color: '#ffffff' },
];

const hexClip = 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)';

const HexagonGrid = () => {
    const [hover1, setHover1] = React.useState(false);
    const [hover2, setHover2] = React.useState(false);
    const [hover3, setHover3] = React.useState(false);
    const [hover4, setHover4] = React.useState(false);
    const [hover5, setHover5] = React.useState(false);
    const [hover6, setHover6] = React.useState(false);

    return (
        <div className="relative">
            {/* ===== TABLET + MOBILE VIEW (below 1141px) ===== */}
            <div className="block pt-20 pb-10 min-[1141px]:hidden">
                <div className="heading text-center">
                    <h4>The School Badge</h4>
                </div>

                <div className="flex justify-center py-8">
                    <img className="w-[100px] md:w-[130px]" src="/assets/images/SMKDJlogo.png" alt="School logo" />
                </div>

                <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-8 px-6 md:grid-cols-2 md:px-10">
                    {badgeItems.map((item) => (
                        <div key={item.title} className="flex items-center gap-5">
                            <div className="h-[90px] w-[90px] shrink-0 md:h-[110px] md:w-[110px]">
                                {item.img ? (
                                    <img className="h-full w-full object-contain" src={item.img} alt={item.title} />
                                ) : (
                                    <div
                                        className="h-full w-full"
                                        style={{ backgroundColor: item.color, clipPath: hexClip }}
                                        role="img"
                                        aria-label={item.title}
                                    />
                                )}
                            </div>
                            <div className="flex flex-col justify-center text-left">
                                <p className="mb-0 text-lg font-extrabold text-primary">{item.title}</p>
                                <p className="text-sm text-white">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ===== WEBSITE VIEW (1141px and up) ===== */}
            <div className="absolute top-[106px] left-1/2 hidden h-[516px] w-[1084px] -translate-x-1/2 min-[1141px]:block">
                <div className="relative h-full w-full">
                    {hover1 && (
                        <div className="absolute top-0 left-[90px] flex h-1/3 w-[250px] animate-hex-up flex-col justify-center text-right">
                            <p className="mb-0 text-lg font-extrabold text-primary">Shield</p>
                            <p className="text-lg text-sm text-white">Represents protection and strength, showing that the school </p>
                        </div>
                    )}
                    {hover4 && (
                        <div className="absolute top-0 right-[90px] flex h-1/3 w-[250px] animate-hex-up flex-col justify-center text-left">
                            <p className="mb-0 text-lg font-extrabold text-primary">Blue</p>
                            <p className="text-lg text-sm text-white">Symbolizes unity, loyalty, and harmony among the school community.</p>
                        </div>
                    )}
                    {hover2 && (
                        <div className="absolute top-[172px] left-0 flex h-1/3 w-[250px] animate-hex-up flex-col justify-center text-right">
                            <p className="mb-0 text-lg font-extrabold text-primary">Torch Light</p>
                            <p className="text-lg text-sm text-white">Signifies knowledge as the guiding light of life.</p>
                        </div>
                    )}
                    {hover5 && (
                        <div className="absolute top-[172px] right-0 flex h-1/3 w-[250px] animate-hex-up flex-col justify-center text-left">
                            <p className="mb-0 text-lg font-extrabold text-primary">Open Book</p>
                            <p className="text-lg text-sm text-white">Symbolizes continuous learning and the pursuit of wisdom.</p>
                        </div>
                    )}
                    {hover3 && (
                        <div className="absolute top-[400px] left-[90px] flex h-1/3 w-[250px] animate-hex-up flex-col justify-center text-right">
                            <p className="mb-0 text-lg font-extrabold text-primary">Yellow</p>
                            <p className="text-lg text-sm text-white">Stands for excellence, honour, and high ambitions.</p>
                        </div>
                    )}
                    {hover6 && (
                        <div className="absolute top-[400px] right-[90px] flex h-1/3 w-[250px] animate-hex-up flex-col justify-center text-left">
                            <p className="mb-0 text-lg font-extrabold text-primary">White</p>
                            <p className="text-lg text-sm text-white">Represents purity, sincerity, and honesty in learning.</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="hidden pt-20 min-[1141px]:block">
                <div className="heading text-center">
                    <h4>The School Badge</h4>
                </div>
                <div className="gallery relative place-items-center">
                    <div className="group relative" onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
                        <img className="h-full w-full" src="/assets/images/Hex-02.png" alt="Torch Light" />
                        <img
                            className="absolute top-0 left-0 hidden h-full w-full duration-200 group-hover:block group-hover:animate-fade-in"
                            src="/assets/images/Hex-02r.png"
                            alt="Torch Light hover"
                        />
                    </div>
                    <div>
                        <img className="w-[130px] justify-self-center pt-10" src="/assets/images/SMKDJlogo.png" alt="School logo" />
                    </div>

                    <div className="group relative" onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)}>
                        <img className="h-full w-full" src="/assets/images/sheild.png" alt="Shield" />
                        <img
                            className="absolute top-0 left-0 hidden h-full w-full duration-200 group-hover:block group-hover:animate-fade-in"
                            src=""
                            alt="Shield hover"
                        />
                    </div>
                    <div className="group relative" onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)}>
                        <img className="h-full w-full bg-[#fced4f]" src="" alt="Yellow" />
                        <img
                            className="absolute top-0 left-0 hidden h-full w-full duration-200 group-hover:block group-hover:animate-fade-in"
                            src=""
                            alt="Yellow hover"
                        />
                    </div>
                    <div className="group relative" onMouseEnter={() => setHover4(true)} onMouseLeave={() => setHover4(false)}>
                        <img className="h-full w-full bg-[#29326f]" src="" alt="Blue" />
                        <img
                            className="absolute top-0 left-0 hidden h-full w-full duration-200 group-hover:block group-hover:animate-fade-in"
                            src=""
                            alt="Blue hover"
                        />
                    </div>
                    <div className="group relative" onMouseEnter={() => setHover6(true)} onMouseLeave={() => setHover6(false)}>
                        <img className="h-full w-full bg-white" src="" alt="White" />
                        <img
                            className="absolute top-0 left-0 hidden h-full w-full duration-200 group-hover:block group-hover:animate-fade-in"
                            src=""
                            alt="White hover"
                        />
                    </div>
                    <div className="group relative" onMouseEnter={() => setHover5(true)} onMouseLeave={() => setHover5(false)}>
                        <img className="h-full w-full" src="/assets/images/openbook.png" alt="Open Book" />
                        <img
                            className="absolute top-0 left-0 hidden h-full w-full duration-200 group-hover:block group-hover:animate-fade-in"
                            src="/assets/images/openbook.png"
                            alt="Open Book hover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HexagonGrid;
