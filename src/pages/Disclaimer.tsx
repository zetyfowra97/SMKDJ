import { useSelector } from 'react-redux';
import { IRootState } from '../store';

const SCHOOL_NAME = 'SMK Damansara Jaya';
const SCHOOL_SHORT = 'SMKDJ';
const SCHOOL_PHONE = '03-7729 6018';
const SCHOOL_EMAIL = 'your-school-email@smkdj.edu.my'; // TODO: replace with the school's official email
const LAST_UPDATED = 'October 30, 2026'; // TODO: update whenever this page is changed
const HIGHLIGHT = '#78D8FE';

const Short = () => <strong style={{ color: HIGHLIGHT }}>{SCHOOL_SHORT}</strong>;

const Disclaimer = () => {
    document.title = `Disclaimer | ${SCHOOL_NAME}`;
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="relative w-full py-14 md:my-14 md:inline-block md:py-0 lg:my-[128px]">
                            <div className="heading relative mb-8 text-center lg:mb-0 lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
                                <h4 className="!text-white">Disclaimer</h4>
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
                            This website, including any sub-site or page accessible through the homepage (collectively, the "Site"), is published and maintained
                            by <strong>{SCHOOL_NAME}</strong> <Short /> ("the School"). By accessing and using this Site, you agree to accept the following
                            terms and conditions ("Terms and Conditions") without limitation or qualification.
                        </p>
                        <p>
                            Please note that <Short /> reserves the right to modify, change, alter, or otherwise edit these Terms and Conditions at any time by
                            updating this posting, and such changes will become effective immediately upon posting.
                        </p>
                        <p>If you do not agree to these Terms and Conditions, please do not use the Site. This page was last updated on {LAST_UPDATED}.</p>
                        <p>
                            Your access to and use of this Site is subject to all applicable laws, and the use of this Site shall be undertaken at your own
                            responsibility.
                        </p>

                        <h2 className="!text-secondary">Accuracy of Information</h2>
                        <p>
                            <Short /> endeavours to keep the contents of this Site (collectively, the "Information") accurate and up to date. However, we do not
                            guarantee and accept no responsibility for the accuracy, completeness or timeliness of the Information, even though it is carefully
                            prepared and managed by the School.
                        </p>
                        <p>
                            Announcements, timetables, examination schedules, event dates, circulars and other time-sensitive information published on this Site
                            may change without prior notice. For official confirmation, please contact the School office at <strong>{SCHOOL_PHONE}</strong> or
                            refer to official communications from the School and the Ministry of Education Malaysia.
                        </p>
                        <p>
                            <Short /> makes no warranty that access to or use of the Information will be uninterrupted or error-free. <Short /> has the right to
                            change all or some parts of this Site's Information, and to suspend or close this Site, without any notice to you.
                        </p>

                        <h2 className="!text-secondary">Intellectual Property</h2>
                        <p>
                            The Information on this Site, including text, logos, the school emblem, photographs, videos, graphics and other materials, is the
                            property of <Short /> and/or other third parties and is protected by copyright, trademark and other rights (collectively, the
                            "Rights"). Any duplication or use of the Information without the permission of the owner is not permitted under relevant laws and
                            regulations.
                        </p>
                        <p>
                            <Short /> grants no rights to any third party by way of your access to this Site. You are prohibited from copying, publishing,
                            selling, distributing, or modifying any of the materials on this Site without prior written permission, except for personal,
                            non-commercial use.
                        </p>

                        <h2 className="!text-secondary">Limitation of Liability</h2>
                        <p>
                            <Short /> shall not be liable for any damage or loss of any kind, howsoever caused, whether direct or indirect, as a result of the
                            use of this Site, including but not limited to any damage or loss suffered as a result of reliance on the Information contained in
                            or available from this Site.
                        </p>
                        <p>
                            Moreover, <Short /> shall not be liable for any damage or loss of any kind, howsoever caused, as a result of the use of information
                            acquired from other sites linked to this Site.
                        </p>

                        <h2 className="!text-secondary">Links to Other Sites</h2>
                        <p>
                            This Site may contain links to external websites and services, such as Ministry of Education portals, online forms, cloud storage,
                            webmail and video platforms. These links are provided for convenience only. <Short /> does not control, endorse or take
                            responsibility for the content, privacy practices or availability of any external site.
                        </p>

                        <h2 className="!text-secondary">User Comments and Submissions</h2>
                        <p>
                            Any comments, feedback or other content you submit through this Site must be lawful, respectful and appropriate for a school
                            environment. <Short /> reserves the right to edit, remove or refuse to publish any submission without notice. Views expressed by
                            users do not necessarily represent the views of the School.
                        </p>

                        <h2 className="!text-secondary">No Professional Advice</h2>
                        <p>
                            The contents of this Site are for general information about the School and its activities only. They do not constitute financial,
                            legal, educational, medical or other professional advice. If such advice is required, the services of a competent professional
                            should be sought.
                        </p>

                        <h2 className="!text-secondary">Governing Law</h2>
                        <p>
                            <Short /> and any person who accesses this Site from anywhere in the world agree that the laws of Malaysia shall govern any legal
                            action or proceeding relating to this Site, and that the courts of Malaysia shall have jurisdiction over any such action or
                            proceeding.
                        </p>

                        <h2 className="!text-secondary">Contact Us</h2>
                        <p>
                            If you have any questions about this Disclaimer, please contact us at <strong>{SCHOOL_PHONE}</strong> or email us at{' '}
                            <strong>{SCHOOL_EMAIL}</strong>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Disclaimer;
