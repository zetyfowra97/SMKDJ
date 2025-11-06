import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Blockchain from '../components/Blockchain';
import WhyBlockchian from '../components/WhyBlockchain';
import ComparisonTable from '../components/ComparisonTable';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ApplicationDevices from '../components/ApplicationDevices';
import EnterpriseSolution from '../components/EnterpriseSolution';

const Products = () => {
    const location = useLocation();
    const hash = location.hash; // Retrieve the hash value from the location object

    // Rest of your code...

    const handleClickScroll = (hash: string) => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        console.log('hash', hash);
        if (hash !== '') {
            setTimeout(() => {
                handleClickScroll(hash);
            }, 1000);
        }
    }, [hash]);

    document.title = 'Products | FPG Solution & Consultancy';
    const [activeTab, setActiveTab] = useState<string>('all');
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div className="overflow-x-hidden">
            <div className="w-full bg-cover bg-bottom bg-no-repeat">
                <div className="relative h-screen w-full">
                    <img src="/assets/images/products.png" alt="" className="absolute top-0 left-0 h-full w-full" style={{ filter: 'brightness(0.7)' }} />
                    <div className="absolute top-0 left-0 z-10 flex h-full items-center justify-center">
                        <div className="heading mb-0 text-center">
                            <h4 data-aos="fade-down" data-aos-duration="2000" className="heading !text-white" style={{ fontSize: '4rem' }}>
                                Products
                            </h4>
                            {/* <div className="flex">
                                <p data-aos="fade-right" data-aos-duration="2000" className=" text-[42px] font-bold text-white mr-4">Pioneering</p>
                                <p data-aos="fade-up" data-aos-duration="2000" className=" text-[42px] font-bold text-white mr-4">the Art of</p>
                                <p data-aos="fade-left" data-aos-duration="2000" className="text-[42px] font-bold text-white text-primary">Blockchain Transformation</p>
                            </div> */}
                            <p data-aos="fade-up" data-aos-duration="2000" className="px-[10%] text-sm font-bold text-white md:px-[20%] md:text-xl">
                                Discover our exceptional range of products designed to enhance your business. With a focus on quality, functionality, and
                                innovation, we strive to deliver a superior experience to our customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <section id="blockchain">
                <Blockchain />
            </section>
            <WhyBlockchian />
            <ComparisonTable />
            <section id="enterprise-solutions">
                <EnterpriseSolution />
            </section>
            <section id="voting-applications">
                <ApplicationDevices />
            </section>
        </div>
    );
};

export default Products;
