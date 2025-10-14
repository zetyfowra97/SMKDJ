import React, { useEffect, useRef, useState } from 'react';
import { isMobile, isTablet } from 'react-device-detect';

const ComparisonTable = () => {
    const [contentHover, setContentHover] = useState(false);
    const contentRef = useRef<any>(null);
    useEffect(() => {
        const handleScrolling = (event: any) => {
            if (contentRef !== null) {
                if (contentHover === true) {
                    contentRef.current.scrollTop += event.deltaY;
                }
            }
        };

        window.addEventListener('wheel', handleScrolling);

        return () => {
            window.removeEventListener('wheel', handleScrolling);
        };
    });
    return (
        <section
            className={` py-14 dark:bg-gradient-to-t dark:from-white/[0.02] dark:to-transparent lg:py-20 ${
                (isMobile || isTablet) && 'no-scrollbar overflow-x-scroll'
            }`}
            onMouseEnter={() => {
                setContentHover(true);
            }}
            onMouseLeave={() => {
                setContentHover(false);
            }}
        >
            <div className={`container  w-[150%] ${(isMobile || isTablet) && 'no-scrollbar overflow-x-scroll'}`} >
                <div className="relative">
                    <div className="heading text-center">
                        <h6 className="!text-secondary">Comparison</h6>
                        <h4 className="pb-10  text-white">Advantage of blockchain voting over others</h4>
                        <div className="">
                            <table className="custom-table">
                                <thead className="">
                                    <tr>
                                        <th className="col-bg2 min-w-[150px]"></th>
                                        <th className="col-bg text-center text-base font-semibold text-white md:min-w-[150px]">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/comparisonHeaderIcon1.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                            <p className="text-sm md:text-lg">BALLOT VOTING</p>
                                        </th>
                                        <th className="col-bg text-center text-base font-semibold text-white md:min-w-[150px]">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/comparisonHeaderIcon2.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                            <p className="text-sm md:text-lg">ONLINE VOTING</p>
                                        </th>
                                        <th className="col-bg3 px-0 text-center text-base font-semibold text-white md:min-w-[150px]">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/comparisonHeaderIcon3.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                            <p className="text-sm md:text-lg">BLOCKCHAIN VOTING</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="col-bg2 text-base font-semibold text-white">
                                            <div className="pr-0 text-left">Storing of Voting Evidence</div>
                                        </td>
                                        <td className="col-bg2 text-base font-normal text-white">
                                            <div className="text-center">Paper-based</div>
                                        </td>
                                        <td className="col-bg2 text-base font-normal text-white">
                                            <div className="text-center">Online Storage</div>
                                        </td>
                                        <td className="col-bg4 text-base font-normal text-white">
                                            <div className="text-center">Blockchain Storage</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-bg2 text-base font-semibold text-white">
                                            <div className="pr-0 text-left">Tallying (Resource)</div>
                                        </td>
                                        <td className="col-bg2">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/Comparison3people.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                        <td className="col-bg2">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/Comparison1people.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                        <td className="col-bg4">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/Comparison1people.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-bg2 text-base font-semibold text-white">
                                            <div className="pr-0 text-left"> Tallying (Time)</div>
                                        </td>
                                        <td className="col-bg2">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/3pending.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                        <td className="col-bg2">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/1pending.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                        <td className="col-bg4">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/1pending.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-bg2 text-base font-semibold text-white">
                                            <div className="pr-0 text-left">Transparency</div>
                                        </td>
                                        <td className="col-bg2">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/CloseArrow.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                        <td className="col-bg2">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/CloseArrow.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                        <td className="col-bg4">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/TickArrow.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-bg2 text-base font-semibold text-white">
                                            <div className="pr-0 text-left">Security</div>
                                        </td>
                                        <td className="col-bg2">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/TickArrow.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                        <td className="col-bg2">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/CloseArrow.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                        <td className="col-bg4">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/TickArrow.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-bg2 text-base font-semibold text-white">
                                            <div className="pr-0 text-left">Ease of Use</div>
                                        </td>
                                        <td className="col-bg2">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/TickArrow.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                        <td className="col-bg2 text-base font-normal text-white">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/TickArrow.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                        <td className="col-bg4 text-base font-normal text-white">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/TickArrow.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-bg2 text-base font-semibold text-white">
                                            <div className="pr-0 text-left">Traceability</div>
                                        </td>
                                        <td className="col-bg2">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/CloseArrow.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                        <td className="col-bg2">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/CloseArrow.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                        <td className="col-bg4">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/TickArrow.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-bg2 text-base font-semibold text-white">
                                            <div className="pr-0 text-left">Preparation Time</div>
                                        </td>
                                        <td className="col-bg2">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/3pending.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                        <td className="col-bg2">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/1pending.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                        <td className="col-bg4">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/1pending.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-bg2 text-base font-semibold text-white">
                                            <div className="pr-0 text-left">Voting Time per Person</div>
                                        </td>
                                        <td className="col-bg2">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/3pending.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                        <td className="col-bg2">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/1pending.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                        <td className="col-bg4">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/1pending.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-bg2 text-base font-semibold text-white">
                                            <div className="pr-0 text-left">Sustainability</div>
                                        </td>
                                        <td className="col-bg2">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/CloseArrow.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                        <td className="col-bg2">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/TickArrow.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                        <td className="col-bg4">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/TickArrow.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-bg2 text-base font-semibold text-white">
                                            <div className="pr-0 text-left">Cost</div>
                                        </td>
                                        <td className="col-bg2">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/MoreMoney.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                        <td className="col-bg2">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/Money.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                        <td className="col-bg4">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/Money.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-bg2 text-base font-semibold text-white">
                                            <div className="pr-0 text-left"> Manpower Resource</div>
                                        </td>
                                        <td className="col-bg2">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/Comparison3people.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                        <td className="col-bg2">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/Comparison1people.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                        <td className="col-bg4">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/Comparison1people.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="col-bg2 text-base font-semibold text-white">
                                            <div className="pr-0 text-left">Preparation Time</div>
                                        </td>
                                        <td className="col-bg2">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/3pending.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                        <td className="col-bg2">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/1pending.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                        <td className="col-bg4">
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <img
                                                    className="table-logo mb-4 h-[30px] w-[30px] md:h-[50px] md:w-[50px]"
                                                    src="/assets/images/1pending.png"
                                                    alt="Image description"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
