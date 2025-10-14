import React, { useState, ChangeEvent, useEffect, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import axios from 'axios';
import { Link, useParams, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
    full_name: string;
    email: string;
    phone: string;
    job_title?: string;
    resume: FileList | null; // Update the type to FileList | null
    message: string;
}
const Jobapply = (props: any) => {
    document.title = 'Job Application | FPG Solution & COnsultancy';
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl';
    // const { jobTitle } = useParams<{ jobTitle: string }>();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const jobTitleParam = searchParams.get('jobTitle');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const initialFormData: FormData = {
        full_name: '',
        email: '',
        phone: '',
        resume: null,
        job_title: jobTitleParam || '',
        message: '',
    };
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [errors, setErrors] = useState<any>({});

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        setSelectedFile(file);
        setFormData((prevData) => ({ ...prevData, resume: file ? [file] : null } as FormData));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        // Validate form data
        const validationErrors: any = {};
        if (!formData.full_name) {
            validationErrors.full_name = 'Please enter your full name.';
        }

        // check if email is valid using regex
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = 'Please enter a valid email address.';
        }

        // check if phone contains only numbers and - using regex
        if (!formData.phone || !/^[0-9+-]*$/.test(formData.phone)) {
            validationErrors.phone = 'Please enter a valid phone number.';
        }

        // Add additional validations as needed
        if (!formData.resume) {
            validationErrors.resume = 'Please upload your resume.';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Prepare form data
        const formDataWithFile = new FormData();
        formDataWithFile.append('full_name', formData.full_name);
        formDataWithFile.append('email', formData.email);
        formDataWithFile.append('phone', formData.phone);
        formDataWithFile.append('job_title', formData.job_title || '');
        if (formData.resume) {
            formDataWithFile.append('resume', formData.resume[0]);
        }

        formDataWithFile.append('message', formData.message);
        console.log('formwithdata', formData);

        try {
            // Send form data to the server
            const res = axios.post('https://fpgtechnology.com/api-fpgsc/career-email', formDataWithFile);
            setFormData(initialFormData);
            toast.promise(res, {
                pending: 'Job application is sending',
                success: 'Job application submitted',
                error: 'Job application failed',
            });
            setSelectedFile(null);
            setErrors({});
            // Add any additional success actions or notifications
        } catch (error) {
            console.error(error);
            // Add error handling and notifications
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="pb-10 pt-40">
            <ToastContainer />
            <div className="mb-0 text-center text-3xl font-extrabold rtl:md:text-right">
                <h6 className=" text-primary">Job Application</h6>
            </div>
            <form onSubmit={handleSubmit} className="lg:full rounded-r-sm bg-[#202020] px-4 pb-12 pt-6 dark:bg-[#101626] lg:px-8">
                <div className="px-12">
                    <div className="relative my-10">
                        <input
                            type="text"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleInputChange}
                            className={`w-full rounded-sm border-2 border-[#79D8FE] bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12 ${
                                errors.full_name ? 'border-red' : ''
                            }`}
                        />
                        {errors.full_name && <p className="text-red">{errors.full_name}</p>}
                        <label
                            htmlFor=""
                            className="absolute -top-3 z-10 bg-[#202020] px-2 font-bold text-white ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                        >
                            Full Name
                        </label>
                        <svg
                            width="20"
                            height="22"
                            viewBox="0 0 20 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                        >
                            <path
                                d="M5.42855 5.57875C5.42855 8.10348 7.47525 10.1502 9.99998 10.1502C12.5247 10.1502 14.5714 8.10348 14.5714 5.57875C14.5714 3.05402 12.5247 1.00732 9.99998 1.00732"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                            <path
                                d="M2 16.9328C2 15.9495 2.61812 15.0724 3.5441 14.7417V14.7417C7.71891 13.2507 12.2811 13.2507 16.4559 14.7417V14.7417C17.3819 15.0724 18 15.9495 18 16.9328V18.7014C18 19.9185 16.922 20.8535 15.7172 20.6813L13.8184 20.4101C11.2856 20.0483 8.71435 20.0483 6.18162 20.4101L4.28284 20.6813C3.07798 20.8535 2 19.9185 2 18.7014V16.9328Z"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            />
                        </svg>
                    </div>

                    <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
                        <div className="relative">
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full rounded-sm border-2 border-[#79D8FE] bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12 ${
                                    errors.email ? 'border-red' : ''
                                }`}
                            />
                            {errors.email && <p className="text-red">{errors.email}</p>}
                            <label
                                htmlFor=""
                                className="absolute -top-3 z-10 bg-[#202020] px-2 font-bold text-white ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                            >
                                Email Address
                            </label>
                            <svg
                                width="22"
                                height="21"
                                viewBox="0 0 22 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                            >
                                <path
                                    d="M1 8.00732V7.00732C1 4.2459 3.23858 2.00732 6 2.00732H16C18.7614 2.00732 21 4.2459 21 7.00732V13.0073C21 15.7687 18.7614 18.0073 16 18.0073H6C3.23858 18.0073 1 15.7687 1 13.0073V12.0073"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M5 7.00732L9.8 10.6073C10.5111 11.1407 11.4889 11.1407 12.2 10.6073L17 7.00732"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div className="relative">
                            <input
                                type="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className={`w-full rounded-sm border-2 border-[#79D8FE] bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12 ${
                                    errors.phone ? 'border-red' : ''
                                }`}
                            />
                            {errors.phone && <p className="text-red">{errors.phone}</p>}
                            <label
                                htmlFor=""
                                className="absolute -top-3 z-10 bg-[#202020] px-2 font-bold text-white ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                            >
                                Phone Number
                            </label>
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                            >
                                <path
                                    d="M6.45241 1.40806C5.45292 0.783702 4.14202 0.887138 3.2983 1.73086L1.86856 3.1606C-0.302899 5.33207 1.73747 10.8931 6.42586 15.5815C11.1142 20.2699 16.6753 22.3102 18.8467 20.1388L20.2765 18.709C21.2635 17.722 21.2374 16.0956 20.2182 15.0764L18.0036 12.8619C16.9844 11.8426 15.358 11.8165 14.371 12.8036L14.0639 13.1107C13.531 13.6436 12.6713 13.6957 12.0713 13.2005C11.4925 12.7229 10.9159 12.208 10.3576 11.6497C9.79933 11.0914 9.28441 10.5149 8.80678 9.93607C8.31161 9.33601 8.36374 8.47631 8.89666 7.9434L9.20375 7.63631C9.98187 6.85819 10.1303 5.68271 9.65898 4.72062"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="relative mt-10">
                        <input
                            disabled
                            type="text"
                            name="job_title"
                            value={formData.job_title}
                            onChange={handleInputChange}
                            className={`w-full rounded-sm border-2 border-[#79D8FE] bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12`}
                        />
                        <label
                            htmlFor=""
                            className="absolute -top-3 z-10 bg-[#202020] px-2 font-bold text-white ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                        >
                            Job Title
                        </label>
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                        >
                            <path
                                d="M1 11.467V18.9267C1 19.7652 1.96993 20.2314 2.6247 19.7076L5.45217 17.4456C5.8068 17.1619 6.24742 17.0073 6.70156 17.0073H16C18.7614 17.0073 21 14.7687 21 12.0073V6.00732C21 3.2459 18.7614 1.00732 16 1.00732H6C3.23858 1.00732 1 3.2459 1 6.00732V7.62225"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                            <circle cx="6.05005" cy="9.05713" r="1.25" fill="currentColor" />
                            <circle cx="11.05" cy="9.05713" r="1.25" fill="currentColor" />
                            <circle cx="16.05" cy="9.05713" r="1.25" fill="currentColor" />
                        </svg>
                    </div>
                    <div className="relative mt-10">
                        <input
                            type="file"
                            name="file"
                            onChange={handleFileChange}
                            className="w-full rounded-sm border-2 border-[#79D8FE] bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                        />{' '}
                        {errors.resume && <p className="text-red">{errors.resume}</p>}
                        <label
                            htmlFor=""
                            className="absolute -top-3 z-10 bg-[#202020] px-2 font-bold text-white ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                        >
                            Upload Resume
                        </label>
                        {selectedFile && <p className="text-white">{selectedFile.name}</p>}
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                        >
                            <path
                                d="M1 11.467V18.9267C1 19.7652 1.96993 20.2314 2.6247 19.7076L5.45217 17.4456C5.8068 17.1619 6.24742 17.0073 6.70156 17.0073H16C18.7614 17.0073 21 14.7687 21 12.0073V6.00732C21 3.2459 18.7614 1.00732 16 1.00732H6C3.23858 1.00732 1 3.2459 1 6.00732V7.62225"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                            <circle cx="6.05005" cy="9.05713" r="1.25" fill="currentColor" />
                            <circle cx="11.05" cy="9.05713" r="1.25" fill="currentColor" />
                            <circle cx="16.05" cy="9.05713" r="1.25" fill="currentColor" />
                        </svg>
                    </div>
                    <div className="relative mt-10">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className={`input-box w-full rounded-sm border-2 border-[#79D8FE] bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12 max-h-[200px]`}
                        />
                        <label
                            htmlFor=""
                            className="absolute -top-3 z-10 bg-[#202020] px-2 font-bold text-white ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                        >
                            Message
                        </label>
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                        >
                            <path
                                d="M1 11.467V18.9267C1 19.7652 1.96993 20.2314 2.6247 19.7076L5.45217 17.4456C5.8068 17.1619 6.24742 17.0073 6.70156 17.0073H16C18.7614 17.0073 21 14.7687 21 12.0073V6.00732C21 3.2459 18.7614 1.00732 16 1.00732H6C3.23858 1.00732 1 3.2459 1 6.00732V7.62225"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                            <circle cx="6.05005" cy="9.05713" r="1.25" fill="currentColor" />
                            <circle cx="11.05" cy="9.05713" r="1.25" fill="currentColor" />
                            <circle cx="16.05" cy="9.05713" r="1.25" fill="currentColor" />
                        </svg>
                    </div>
                    <div className="mt-10 flex justify-center text-center">
                        <button
                            type="submit"
                            className="btn rounded-lg bg-[#79D8FE] bg-primary px-12 text-base capitalize text-black text-black hover:bg-secondary"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Jobapply;
