import React, { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';

declare global {
    interface Window {
        _aqiFeed?: any;
    }
}

const COOKIE_NAME = 'aqi_popup_dismissed';
const CONTAINER_ID = 'city-aqi-container';
const CITY_PATH = 'malaysia/selangor/petaling-jaya';
const PAGE_URL = 'https://aqicn.org/city/malaysia/selangor/petaling-jaya/';

const getAqiLevel = (aqi: number) => {
    if (aqi <= 50) return { label: 'Good', color: '#429d6c' };
    if (aqi <= 100) return { label: 'Moderate', color: '#e6b800' };
    if (aqi <= 150) return { label: 'Unhealthy for Sensitive', color: '#f08c1b' };
    if (aqi <= 200) return { label: 'Unhealthy', color: '#d9432f' };
    if (aqi <= 300) return { label: 'Very Unhealthy', color: '#8a3fa8' };
    return { label: 'Hazardous', color: '#7e0023' };
};

const AqiModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [aqi, setAqi] = useState<number | null>(null);
    const loadedRef = useRef(false);

    // Show popup unless user dismissed it before
    useEffect(() => {
        if (!Cookies.get(COOKIE_NAME)) {
            setShowModal(true);
        }
    }, []);

    // Load official aqicn feed, only to get the live AQI number
    useEffect(() => {
        if (!showModal || loadedRef.current) return;
        loadedRef.current = true;

        const container = document.getElementById(CONTAINER_ID);
        if (!container) return;

        // Read the number whenever the aqicn script fills the hidden container
        const readValue = () => {
            const el = container.querySelector('[data-aqi]');
            const n = parseInt(el?.textContent || '', 10);
            if (!isNaN(n)) setAqi(n);
        };
        const observer = new MutationObserver(readValue);
        observer.observe(container, { childList: true, subtree: true, characterData: true });

        if (!window._aqiFeed) {
            (function (w: any, d: Document, t: string, f: string) {
                w[f] =
                    w[f] ||
                    function (c: any, k?: string, n?: number) {
                        const s = w[f];
                        k = s['k'] = s['k'] || (k ? '&k=' + k : '');
                        s['c'] = c = c instanceof Array ? c : [c];
                        s['n'] = n = n || 0;
                        const L = d.createElement(t) as HTMLScriptElement;
                        const e = d.getElementsByTagName(t)[0];
                        L.async = true;
                        L.src = '//feed.aqicn.org/feed/' + c[n].city + '/' + (c[n].lang || '') + '/feed.v1.js?n=' + n + k;
                        e.parentNode!.insertBefore(L, e);
                    };
            })(window, document, 'script', '_aqiFeed');
        }

        window._aqiFeed({
            container: CONTAINER_ID,
            city: CITY_PATH,
            lang: 'en',
            display: '<span data-aqi>%aqi</span>',
        });

        return () => observer.disconnect();
    }, [showModal]);

    const handleClose = () => {
        // hide for 1 day
        Cookies.set(COOKIE_NAME, 'closed', { expires: 1 });
        setShowModal(false);
    };

    const handleDontShowAgain = () => {
        Cookies.set(COOKIE_NAME, 'hidden', { expires: 365 });
        setShowModal(false);
    };

    if (!showModal) {
        return null;
    }

    const level = aqi !== null ? getAqiLevel(aqi) : null;

    return (
        // Full-screen backdrop, centers the card. Click outside the card to close.
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={handleClose}>
            <div className="font-serif w-[220px] rounded-xl bg-white p-2 shadow-2xl" onClick={(e) => e.stopPropagation()}>
                {/* Hidden container: aqicn script writes the live number here */}
                <div id={CONTAINER_ID} style={{ display: 'none' }} />

                {/* Header */}
                <div className="border-gray-200 bg-gray-50 flex items-center justify-between rounded-sm border px-2 py-1.5">
                    <a
                        href={PAGE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 truncate text-xs font-bold hover:underline"
                        title="Petaling Jaya, Selangor"
                    >
                        Petaling Jaya, Selangor
                    </a>
                    <button
                        aria-label="Close"
                        onClick={handleClose}
                        className="text-gray-500 hover:text-gray-800 ml-1 shrink-0 text-sm leading-none focus:outline-none"
                    >
                        ✕
                    </button>
                </div>

                {/* Big AQI box */}
                <a
                    href={PAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex h-[90px] items-center justify-center rounded-md text-6xl text-white"
                    style={{ backgroundColor: level ? level.color : '#9ca3af' }}
                >
                    {aqi !== null ? aqi : '--'}
                </a>

                {/* Level label */}
                <p className="text-gray-800 mt-1.5 text-center text-sm font-bold">{level ? level.label : 'Loading...'}</p>

                <button
                    onClick={handleDontShowAgain}
                    className="font-sans text-gray-400 hover:text-gray-600 mt-1.5 block w-full text-center text-[10px] underline focus:outline-none"
                >
                    Don't show again
                </button>
            </div>
        </div>
    );
};

export default AqiModal;
