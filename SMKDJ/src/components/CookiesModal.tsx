import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookiesModal = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const cookieAccepted = Cookies.get('fpgsc_landing_page_cookie') === 'accepted';
        if (!cookieAccepted) {
            setShowModal(true);
        }
    }, []);

    const handleAcceptAll = () => {
        Cookies.set('fpgsc_landing_page_cookie', 'accepted', { expires: 365 });
        setShowModal(false);
    };

    const handleClose = () => {
        Cookies.set('fpgsc_landing_page_cookie', 'closed', { expires: 365 });
        setShowModal(false);
    };

    if (!showModal) {
        return null;
    }

    return (
        <div className="border-gray-200 fixed left-10 bottom-10 rounded-2xl bg-black p-4  lg:ml-0 lg:mb-0 lg:mr-0 w-[300px] lg:w-[400px] z-30">
            <h2 className="text-gray-800 font-semibold dark:text-white">🍪 We use cookies!</h2>

            <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm">
                Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter
                will be set only after consent.{' '}
            </p>

            <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">Closing this modal default settings will be saved.</p>

            <div className="mt-4 grid shrink-0 grid-cols-2 gap-4">
                <button
                    className="bg-gray-900 hover:bg-gray-700 rounded-lg px-4 py-2.5 text-xs font-medium text-primary transition-colors duration-300 focus:outline-none"
                    onClick={handleAcceptAll}
                >
                    Accept
                </button>

                <button
                    className="text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 rounded-lg border px-4 py-2.5 text-xs font-medium transition-colors duration-300 focus:outline-none dark:text-white"
                    onClick={handleClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default CookiesModal;
