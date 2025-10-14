import { useSelector } from 'react-redux';
import { IRootState } from '../store';

const Policy = () => {
    document.title = 'Privacy Policy | FPGSC Solution & Consultancy';
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="relative w-full py-14 md:my-14 md:inline-block md:py-0 lg:my-[128px]">
                            <div className="heading relative mb-8 text-center lg:mb-0 lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
                                {/* <h6>Disclaimer</h6> */}
                                <h4 className="!text-white">Privacy Policy</h4>
                            </div>
                            <div
                                className="top-0 mt-6 ltr:right-0 rtl:left-0 md:mt-0 lg:absolute"
                                data-aos={isRtl ? 'fade-right' : 'fade-left'}
                                data-aos-duration="1000"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-gradient-to-t from-white to-transparent py-14 dark:bg-none md:py-[100px]">
                <div className="container">
                    <div className="prose max-w-full dark:prose-invert">
                        <p>
                            <strong>FPG Solution & Consultancy Sdn. Bhd.</strong> <strong style={{ color: '#78D8FE' }}>(“FPGSC”)</strong> respects and protects the
                            privacy of all users of our website. This privacy policy explains how we collect, use, disclose or otherwise process the data to
                            which we have or are likely to have access, including your personal information, in accordance with the Personal Data Protection Act
                            of Malaysia, when you use our website.
                        </p>

                        <h2 className="!text-secondary">Information FPGSC Collects</h2>

                        <p>
                            <strong style={{ color: '#78D8FE' }}>FPGSC </strong> collects personal information from you and provides it when you interact with
                            our website. For example, when you fill out a form or sign up for our newsletter.{' '}
                            <strong style={{ color: '#78D8FE' }}>FPGSC </strong> may collect your name, email address, phone number, and any other information
                            you provide.
                        </p>
                        <p>
                            <strong style={{ color: '#78D8FE' }}>FPGSC</strong> also automatically collects non-personal information when you visit our website,
                            such as your IP address, browser type, and operating system. This information helps us improve our website and provide a better user
                            experience.
                        </p>

                        <h2 className="!text-secondary">How FPGSC Uses Your Information</h2>
                        <p>
                            <strong style={{ color: '#78D8FE' }}>FPGSC</strong> uses your personal information to communicate with you and provide solutions.
                            For example, if you sign up for our newsletter, <strong style={{ color: '#78D8FE' }}>FPGSC</strong> will use your email address to
                            send you the newsletter.
                        </p>
                        <p>
                            If you no longer wish to receive our newsletter, you may withdraw your consent by contacting us at <strong>03-4816 6106</strong> or
                            emailing us at <strong>info@fpgsc.com</strong>.
                        </p>
                        <p>
                            <strong style={{ color: '#78D8FE' }}>FPGSC</strong> may also use your personal information to improve our website and solutions, as
                            well as research and analysis to better understand our users.
                        </p>
                        <p>
                            <strong style={{ color: '#78D8FE' }}>FPGSC</strong> will only process your personal information for the purposes for which we
                            collected it unless we reasonably consider that we need to use it for another reason and that reason is compatible with the original
                            purpose.
                        </p>
                        <p>
                            <strong style={{ color: '#78D8FE' }}>FPGSC</strong> uses cookies to provide users with a personalised experience on our website. We
                            use cookies to improve and better tailor our website to our users’ needs. We also use this information to verify that users meet the
                            criteria required to process their requests.
                        </p>
                        <h2 className="!text-secondary">How Does FPGSC Disclose Your Information</h2>
                        <p>
                            <strong style={{ color: '#78D8FE' }}>FPGSC</strong> does not sell or rent your personal information to third parties. However,{' '}
                            <strong style={{ color: '#78D8FE' }}>FPGSC</strong> may disclose your personal information with third-party service providers who
                            help us operate our website or provide solutions for you. For example, <strong style={{ color: '#78D8FE' }}>FPGSC</strong> may use a
                            third-party email marketing service to send our newsletter.
                        </p>
                        <p>
                            <strong style={{ color: '#78D8FE' }}>FPGSC</strong> does not disclose your personal information to unaffiliated third parties for
                            their independent use unless we have obtained your express consent to do so and pursuant to executing confidentiality agreements
                            with such unaffiliated third parties. <strong style={{ color: '#78D8FE' }}>FPGSC</strong> also requires all third parties to respect
                            the security of your personal information and treat it according to the law.
                        </p>
                        <p>
                            <strong style={{ color: '#78D8FE' }}>FPGSC</strong> may however disclose your personal information if required by law or in response
                            to a court order, subpoena, or other legal process.
                        </p>

                        <h2 className="!text-secondary">How FPGSC Protects Your Information</h2>
                        <p>
                            <strong style={{ color: '#78D8FE' }}>FPGSC</strong> takes appropriate measures to protect your personal information from
                            unauthorized access, disclosure, or misuse. However, no data transmission over the Internet is secure, so{' '}
                            <strong style={{ color: '#78D8FE' }}>FPGSC</strong> cannot guarantee your personal information's security. We are however committed
                            to employing reasonable security measures and regularly reviewing our security practices (security risk assessments or audits).
                        </p>

                        <h2 className="!text-secondary">Links to Other Sites</h2>
                        <p>
                            <strong style={{ color: '#78D8FE' }}>FPGSC</strong>’s website may contain links to other sites. These sites are not covered by this Privacy Policy, and we are
                            not responsible for the privacy practices or the content of these sites.
                        </p>

                        <h2 className="!text-secondary">Changes to the Privacy Policy</h2>
                        <p>
                            <strong style={{ color: '#78D8FE' }}>FPGSC</strong> reserves the right to modify this Privacy Policy and related business practices
                            at any time by posting updated text on this page. Please check this page periodically for updates. Your continued use of our website
                            constitutes your acknowledgment and acceptance of such changes.
                        </p>

                        <h2 className="!text-secondary">Your Choices</h2>
                        <p>
                            You may opt out of receiving our newsletter or other marketing communications from us by following the unsubscribe instructions
                            included in these communications.
                        </p>
                        <p>
                            You may also request access to, correction of, or deletion of your personal information by contacting us using the information
                            provided below
                        </p>

                        <h2 className="!text-secondary">Contact Us</h2>
                        <p>
                            If you have questions or concerns about our Privacy Policy, contact us at <strong>03-4816 6106</strong> or email us at{' '}
                            <strong>info@fpgsc.com</strong>. We will do our best to respond to your inquiry as soon as possible. Your feedback is
                            important to us and we value your opinion. Thank you for taking the time to reach out to us.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Policy;
