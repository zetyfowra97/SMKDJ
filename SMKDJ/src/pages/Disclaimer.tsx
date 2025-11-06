import { useSelector } from 'react-redux';
import { IRootState } from '../store';

const Disclaimer = () => {
    document.title = 'Disclaimer | FPGSC Solution & Consultancy';
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="relative w-full py-14 md:my-14 md:inline-block md:py-0 lg:my-[128px]">
                            <div className="heading relative mb-8 text-center lg:mb-0 lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
                                {/* <h6>Disclaimer</h6> */}
                                <h4 className="!text-white">Disclaimer</h4>
                            </div>
                            <div
                                className="top-0 mt-6 ltr:right-0 rtl:left-0 md:mt-0 lg:absolute"
                                data-aos={isRtl ? 'fade-right' : 'fade-left'}
                                data-aos-duration="1000"
                            >

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-gradient-to-t from-white to-transparent py-14 dark:bg-none md:py-[100px]">
                <div className="container">
                    <div className="prose max-w-full dark:prose-invert">
                        <p>
                            This website, including any sub-site accessible through the homepage, (collectively, the "Site") is published and maintained by{' '}
                            <strong>FPG Solution & Consultancy Sdn. Bhd.</strong> <strong style={{ color: '#78D8FE' }}>(“FPGSC”)</strong> and its subsidiaries,
                            affiliates, and/or related entities <strong style={{ color: '#78D8FE' }}>("FPGSC")</strong> By and upon accessing and using this Site,
                            you agree to accept the following terms and conditions ("Terms and Conditions") without limitation or qualification.
                        </p>
                        <p>
                            Please note that <strong style={{ color: '#78D8FE' }}>FPGSC</strong> reserves the right to modify, change, alter, or otherwise edit
                            these Terms and Conditions at any time by updating this posting and such changes will become immediately effective upon such
                            posting.
                        </p>
                        <p>If you do not agree to these Terms and Conditions, please do not use the Site. This page was last updated on May 29, 2023.</p>
                        <p>
                            Your access to and use of this Site is subject to all applicable laws and the use of this Site shall be undertaken at your own
                            responsibility.
                        </p>
                        <p>
                            <strong style={{ color: '#78D8FE' }}>FPGSC</strong> shall not guarantee and has no responsibility for the accuracy and completeness of
                            the contents of this Site (collectively, the "Information"), even if all the Information is carefully and managed by{' '}
                            <strong style={{ color: '#78D8FE' }}>FPGSC</strong>.
                        </p>
                        <p>
                            <strong style={{ color: '#78D8FE' }}>FPGSC</strong> makes no warranty for providing access and use of any Information to you.{' '}
                            <strong style={{ color: '#78D8FE' }}>FPGSC</strong> has the right to change all or some parts of this Site's Information and suspend
                            or close this Site without any notice to you.
                        </p>
                        <p>
                            The information on this Site is the property of <strong style={{ color: '#78D8FE' }}>FPGSC</strong> and other third parties which is
                            protected by copyrights, patent rights, trademark rights, and other rights (collectively, the "Rights"). Any duplication or usage of
                            the Information without permission of the owner of such Information shall not be permitted under relevant laws and regulations.{' '}
                            <strong style={{ color: '#78D8FE' }}>FPGSC</strong> grants no rights to any third party to you. You are prohibited from copying,
                            publishing, selling, distributing, or modifying all the materials on this Site.
                        </p>
                        <p>
                            <strong style={{ color: '#78D8FE' }}>FPGSC</strong> shall not be liable for any damage or loss of any kind, howsoever caused as a
                            result (indirect or direct) of the use of this Site, including but not limited to any damage or loss suffered as a result of
                            reliance on the information contained or available from this Site.
                        </p>
                        <p>
                            Moreover, <strong style={{ color: '#78D8FE' }}>FPGSC</strong> shall not be liable for any damage or loss of any kind, howsoever caused
                            as a result of the use of the Information acquired from other sites linked to this Site.
                        </p>
                        <p>
                            The contents of this Site do not constitute financial, legal, or other professional advice. If financial, legal, or other
                            professional advice is required, the services of a competent professional should be sought.
                        </p>
                        <p>
                            <strong style={{ color: '#78D8FE' }}>FPGSC</strong> and any person who has access to this Site from anywhere in the world shall agree
                            that the laws of Malaysia shall govern any legal action or proceeding relating to this Site. You must acknowledge that{' '}
                            <strong style={{ color: '#78D8FE' }}>FPGSC</strong> can choose any jurisdiction at <strong style={{ color: '#78D8FE' }}>FPGSC</strong>'s
                            discretion.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Disclaimer;
