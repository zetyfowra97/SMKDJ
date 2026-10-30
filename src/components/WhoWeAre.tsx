const WhoWeAre = () => {
    return (
        <div>
            <section className="flex items-center bg-white pt-20 pb-20">
                <div className="container">
                    <div className="relative">
                        <div className="text-center" data-aos="fade-right" data-aos-duration="2000">
                            <div className="heading mb-5 text-center">
                                {/* Tajuk */}
                                <div className="text-lg font-bold md:text-6xl">
                                    <p className="!text-secondary">Motto Sekolah</p>
                                </div>
                                {/* Motto */}
                                <p className="mt-4 text-2xl font-semibold italic text-black md:text-4xl">Berilmu Untuk Berjasa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhoWeAre;
