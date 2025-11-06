import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Products from '../components/Products';
import WhoWeAre from '../components/WhoWeAre';
import { isMobile, isTablet, isDesktop } from 'react-device-detect';
import Counter from '../components/Counter';
import Careerss from '../components/Careerss';
import Pentadbir from '../components/Pentadbir';
import AboutUs from '../components/AboutUs';
import SPMCountdown from '../components/SPMCountdown';
import Logo from '../components/Logo';
import ProjectSlider from '../components/ProjectSlider';
import CoreValue from '../components/CoreValue';
import MdCert from '../components/MdCert';


const Index = (props: any) => {
    document.title = 'Home | FPG Solution & Consultancy';
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl';

    return (
        <div className="overflow-x-hidden">
            {/* ======= Desktop Hero Section ======= */}
            {isDesktop && (
                <div className="relative h-screen w-screen overflow-hidden bg-black">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 h-full w-full object-cover"
                    >
                        <source src="assets/videos/home.mp4" type="video/mp4" />
                    </video>

                    {/* Centered Text Overlay */}
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
                        <h4
                            data-aos="fade-down"
                            data-aos-duration="2000"
                            className="heading text-white font-extrabold"
                            style={{ fontSize: '8rem', lineHeight: '1' }}
                        >
                            SMKDJ
                        </h4>
                        <p
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            className="mt-4 text-white text-lg md:text-2xl font-bold"
                        >
                            Sekolah Kecemerlangan Petaling Jaya
                        </p>
                    </div>

                    {/* Optional dark gradient overlay for readability */}
                   
                </div>
            )}

            {/* ======= Mobile/Tablet Hero Section ======= */}
            {(isMobile || isTablet) && (
                <div className="relative h-screen overflow-hidden bg-black">
                    <video
                        className="absolute inset-0 h-full w-full object-cover"
                        style={{ filter: 'brightness(0.7)' }}
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/assets/videos/home.mp4" type="video/mp4" />
                    </video>

                    {/* Overlay text for mobile */}
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
                        <h4
                            data-aos="fade-down"
                            data-aos-duration="2000"
                            className="heading text-white font-extrabold"
                            style={{ fontSize: '3rem', lineHeight: '1' }}
                        >
                            SMKDJ
                        </h4>
                        <p
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            className="mt-3 text-sm font-bold text-white md:text-lg"
                        >
                            Sekolah Kluster Kecemerlangan Petaling Jaya
                        </p>
                    </div>

                    {/* Optional gradient for better contrast */}
                   
                </div>
            )}

            {/* ======= Other Sections ======= */}
            <Counter />
            <ProjectSlider /> 
            <WhoWeAre /> 
            <Products />
            <Logo />
            <Careerss />
            <Pentadbir />
            <AboutUs />
            <SPMCountdown />
            <CoreValue />
            <MdCert />
        </div>
    );
};

export default Index;
