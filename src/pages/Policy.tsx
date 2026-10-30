import { useSelector } from 'react-redux';
import { IRootState } from '../store';

const SCHOOL_NAME = 'SMK Damansara Jaya';
const SCHOOL_SHORT = 'SMKDJ';
const SCHOOL_PHONE = '03-7729 6018';
const SCHOOL_EMAIL = 'your-school-email@smkdj.edu.my'; // TODO: replace with the school's official email
const SCHOOL_ADDRESS = 'Jalan SS 22A/1, Damansara Jaya, 47400 Petaling Jaya, Selangor';
const HIGHLIGHT = '#78D8FE';

const Short = () => <strong style={{ color: HIGHLIGHT }}>{SCHOOL_SHORT}</strong>;

const Policy = () => {
    document.title = `Privacy Policy | ${SCHOOL_NAME}`;
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="relative w-full py-14 md:my-14 md:inline-block md:py-0 lg:my-[128px]">
                            <div className="heading relative mb-8 text-center lg:mb-0 lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
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
                            <strong>{SCHOOL_NAME}</strong> <Short /> respects and protects the privacy of all visitors to our website, including students,
                            parents, guardians, teachers, staff, alumni and members of the public. This Privacy Policy explains how we collect, use, disclose
                            and otherwise process the data to which we have or are likely to have access, including your personal information, in accordance
                            with the Personal Data Protection Act 2010 of Malaysia and the relevant guidelines of the Ministry of Education Malaysia, when you
                            use our website.
                        </p>

                        <h2 className="!text-secondary">Information {SCHOOL_SHORT} Collects</h2>
                        <p>
                            <Short /> collects personal information that you provide when you interact with our website. For example, when you submit an online
                            form (such as a results query or feedback form), post a comment, or contact the school. We may collect your name, email address,
                            phone number, class or form (for students), relationship to a student (for parents or guardians), and any other information you
                            choose to provide.
                        </p>
                        <p>
                            <Short /> also automatically collects non-personal information when you visit our website, such as your IP address, browser type,
                            device type, operating system, and the pages you visit. This information helps us improve our website and provide a better user
                            experience.
                        </p>

                        <h2 className="!text-secondary">Children and Student Information</h2>
                        <p>
                            As a secondary school, many of our website users are students under the age of 18. <Short /> takes extra care to protect the
                            personal information of students. We do not knowingly collect personal information from students through our website beyond what
                            is necessary for school administration, academic and co-curricular activities, and communication with the school.
                        </p>
                        <p>
                            Photographs, videos and names of students that appear on our website, gallery, news posts and official channels (for example,
                            when reporting on events, competitions, achievements, clubs, societies and sports) are published only for legitimate school
                            purposes and, where required, with the consent of the student's parent or guardian. If you wish to withdraw consent or request the
                            removal of a photograph, video or name, please contact us using the details below.
                        </p>

                        <h2 className="!text-secondary">How {SCHOOL_SHORT} Uses Your Information</h2>
                        <p>
                            <Short /> uses your personal information to communicate with you, respond to your enquiries, and provide school-related services
                            and information. For example, if you submit an enquiry or an online form, we will use your contact details to respond to you.
                        </p>
                        <p>
                            <Short /> may also use your personal information for school administration, to share announcements and important updates
                            (including academic, co-curricular and Parent-Teacher Association (PIBG) matters), to maintain the safety and security of our
                            website, and to carry out research and analysis to improve our website and services.
                        </p>
                        <p>
                            If you no longer wish to receive communications from us, you may withdraw your consent by contacting us at{' '}
                            <strong>{SCHOOL_PHONE}</strong> or emailing us at <strong>{SCHOOL_EMAIL}</strong>.
                        </p>
                        <p>
                            <Short /> will only process your personal information for the purposes for which we collected it unless we reasonably consider
                            that we need to use it for another reason and that reason is compatible with the original purpose.
                        </p>

                        <h2 className="!text-secondary">Cookies</h2>
                        <p>
                            <Short /> uses cookies and similar technologies to provide users with a better experience on our website. We use cookies to
                            remember your preferences, understand how our website is used, and improve its content and performance. You can choose to disable
                            cookies through your browser settings, but some parts of the website may not function properly as a result.
                        </p>

                        <h2 className="!text-secondary">How {SCHOOL_SHORT} Discloses Your Information</h2>
                        <p>
                            <Short /> does not sell or rent your personal information to third parties. However, <Short /> may disclose your personal
                            information to relevant authorities and third-party service providers that help us operate our website, manage online forms,
                            provide email and online learning platforms, and deliver school services. For example, we may use online form and cloud
                            collaboration services provided by Microsoft.
                        </p>
                        <p>
                            <Short /> does not disclose your personal information to unaffiliated third parties for their independent use unless we have
                            obtained your express consent to do so. <Short /> also requires all third-party service providers to respect the security of your
                            personal information and treat it according to the law.
                        </p>
                        <p>
                            <Short /> may disclose your personal information to the Ministry of Education Malaysia, the State Education Department, the
                            District Education Office and other government agencies where required for official school purposes. We may also disclose your
                            personal information if required by law or in response to a court order, subpoena, or other legal process.
                        </p>

                        <h2 className="!text-secondary">How {SCHOOL_SHORT} Protects Your Information</h2>
                        <p>
                            <Short /> takes appropriate measures to protect your personal information from unauthorised access, disclosure, alteration or
                            misuse. However, no data transmission over the Internet is completely secure, so <Short /> cannot guarantee the security of your
                            personal information. We are committed to employing reasonable security measures and regularly reviewing our security practices.
                        </p>
                        <p>
                            Personal information is retained only for as long as necessary to fulfil the purposes for which it was collected, or as required
                            by law and school or Ministry record-keeping requirements.
                        </p>

                        <h2 className="!text-secondary">Links to Other Sites</h2>
                        <p>
                            The <Short /> website may contain links to other sites, such as Ministry of Education portals, online forms, cloud storage,
                            webmail and our YouTube channel. These sites are not covered by this Privacy Policy, and we are not responsible for the privacy
                            practices or the content of these sites. We encourage you to read the privacy policy of every site you visit.
                        </p>

                        <h2 className="!text-secondary">Changes to the Privacy Policy</h2>
                        <p>
                            <Short /> reserves the right to modify this Privacy Policy and related practices at any time by posting updated text on this
                            page. Please check this page periodically for updates. Your continued use of our website constitutes your acknowledgment and
                            acceptance of such changes.
                        </p>

                        <h2 className="!text-secondary">Your Choices</h2>
                        <p>
                            You may opt out of receiving announcements or other communications from us by following the instructions included in those
                            communications or by contacting the school directly.
                        </p>
                        <p>
                            You may also request access to, correction of, or deletion of your personal information (or that of your child, if you are a
                            parent or guardian) by contacting us using the information provided below.
                        </p>

                        <h2 className="!text-secondary">Contact Us</h2>
                        <p>
                            If you have questions or concerns about our Privacy Policy, contact us at <strong>{SCHOOL_PHONE}</strong> or email us at{' '}
                            <strong>{SCHOOL_EMAIL}</strong>. You may also write to us at <strong>{SCHOOL_NAME}</strong>, {SCHOOL_ADDRESS}. We will do our
                            best to respond to your inquiry as soon as possible. Your feedback is important to us and we value your opinion. Thank you for
                            taking the time to reach out to us.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Policy;