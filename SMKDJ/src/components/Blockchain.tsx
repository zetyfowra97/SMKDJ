import React from 'react';
import { Link } from 'react-router-dom';

const Blockchain = () => {
    return (
        <div className="">
            <section className="flex items-center py-10 dark:bg-gradient-to-t dark:from-white/[0.02] dark:to-transparent lg:h-[600px]">
                <div className="container">
                    <div className="relative grid grid-cols-6 gap-6">
                        <img
                            src="/assets/images/blockchain-details.png"
                            alt=""
                            className="col-span-6  m-auto block h-full lg:col-span-3 lg:hidden"
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        />
                        <div
                            className="heading col-span-6 mb-5 flex flex-col justify-center px-8 text-center lg:col-span-3 lg:text-left"
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            <h6 className="!text-secondary">Blockchain Technology</h6>
                            <h4 className="text-white ">What Is Blockchain</h4>
                            <p className="mt-4 text-sm font-semibold text-white md:text-lg ">
                                Blockchain is a secure digital ledger that is decentralized, meaning no single entity controls it. Participants have copies of
                                the entire ledger. It has uses beyond financial transactions, such as voting systems. It acts as a digital trust machine,
                                ensuring transparency and security without relying on a central authority. Blockchain technology utilizes cryptographic
                                techniques to ensure the integrity and immutability of the data stored on the ledger, making it highly resistant to tampering or
                                fraud.
                            </p>
                        </div>
                        <img
                            src="/assets/images/blockchain-details.png"
                            alt=""
                            className="m-auto hidden h-[450px] object-cover lg:col-span-3 lg:block"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        />
                    </div>
                </div>
            </section>
            <section className="flex items-center bg-[url(/assets/images/smartcontract-bg.png)] bg-cover py-10 lg:h-[600px]">
                <div className="container">
                    <div className="relative grid grid-cols-6 items-center gap-2">
                        <div className="col-span-6 m-auto lg:col-span-3" data-aos="fade-right" data-aos-duration="1000">
                            <img src="/assets/images/smartcontract-details.png" alt="" className="h-[450px] object-cover" />
                        </div>
                        <div className="heading col-span-6 mb-5 px-8 text-center lg:col-span-3 lg:text-left" data-aos="fade-left" data-aos-duration="1000">
                            <h6 className="!text-secondary">Blockchain Technology</h6>
                            <h4 className=" text-white ">What Is Smart Contract</h4>
                            <p className="mt-4 text-center text-sm font-semibold text-white md:text-lg lg:text-left">
                                A smart contract is a self-executing digital agreement that works on its own without intermediaries. It is like a computer
                                program stored on a secure network that automatically carries out agreed-upon actions when specific conditions are met. It
                                eliminates the need for middlemen and ensures transparency and trustworthiness. They save time, money, and provide security by
                                operating on a decentralized platform. Asia, we specialize in empowering SMEs in the region by leveraging our expertise in
                                blockchain technology and IT solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blockchain;
