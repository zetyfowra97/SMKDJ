import { useState, useEffect, useRef, useCallback } from 'react';

const TOTAL_IMAGES = 26;
const SLIDE_INTERVAL = 3000;

const Icon = ({ children, className = 'h-6 w-6' }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        {children}
    </svg>
);

const Gallery = () => {
    const [failed, setFailed] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null); // null = lightbox closed
    const [isPlaying, setIsPlaying] = useState(false);
    const [showInfo, setShowInfo] = useState(true);
    const [showControls, setShowControls] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const lightboxRef = useRef(null);
    const thumbRefs = useRef([]);

    const allImages = Array.from({ length: TOTAL_IMAGES }, (_, index) => `/assets/images/Gallery/Gallery${index + 1}.jpeg`);
    const images = allImages.filter((image) => !failed.includes(image));
    const isOpen = activeIndex !== null;
    const currentImage = isOpen ? images[activeIndex] : null;

    const close = useCallback(() => {
        setActiveIndex(null);
        setIsPlaying(false);
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(() => {});
        }
    }, []);

    const next = useCallback(() => {
        setActiveIndex((i) => (i === null ? i : (i + 1) % images.length));
    }, [images.length]);

    const prev = useCallback(() => {
        setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    }, [images.length]);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            lightboxRef.current?.requestFullscreen?.().catch(() => {});
        } else {
            document.exitFullscreen().catch(() => {});
        }
    };

    // Keyboard controls
    useEffect(() => {
        if (!isOpen) return;
        const onKeyDown = (event) => {
            if (event.key === 'Escape') close();
            if (event.key === 'ArrowRight') next();
            if (event.key === 'ArrowLeft') prev();
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isOpen, close, next, prev]);

    // Lock page scroll while open
    useEffect(() => {
        if (!isOpen) return;
        const original = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = original;
        };
    }, [isOpen]);

    // Slideshow
    useEffect(() => {
        if (!isOpen || !isPlaying) return;
        const timer = setInterval(next, SLIDE_INTERVAL);
        return () => clearInterval(timer);
    }, [isOpen, isPlaying, next]);

    // Track fullscreen changes (including Esc exiting fullscreen)
    useEffect(() => {
        const onChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
        document.addEventListener('fullscreenchange', onChange);
        return () => document.removeEventListener('fullscreenchange', onChange);
    }, []);

    // Keep the active thumbnail in view
    useEffect(() => {
        if (activeIndex === null) return;
        thumbRefs.current[activeIndex]?.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest',
        });
    }, [activeIndex]);

    const shareUrl = currentImage ? encodeURIComponent(window.location.origin + currentImage) : '';
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${shareUrl}`;
    const caption = currentImage ? currentImage.split('/').pop() : '';

    const controlBtn = 'flex h-10 w-10 items-center justify-center rounded text-white/90 transition hover:bg-white/20 hover:text-white';

    return (
        <div className="w-full">
            {/* Grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:gap-5 lg:grid-cols-4">
                {images.map((image, index) => (
                    <button
                        type="button"
                        key={image}
                        onClick={() => setActiveIndex(index)}
                        className="aspect-square w-full cursor-pointer overflow-hidden rounded-lg"
                        data-aos="fade-up"
                        data-aos-delay={(index % 4) * 100}
                        aria-label={`Open image ${index + 1}`}
                    >
                        <img
                            src={image}
                            alt={`Gallery ${index + 1}`}
                            loading="lazy"
                            className="h-full w-full object-cover transition duration-300 hover:scale-105"
                            onError={() => {
                                console.error(`Image not found: ${image}`);
                                setFailed((prev) => [...prev, image]);
                            }}
                        />
                    </button>
                ))}
            </div>

            {/* Lightbox */}
            {isOpen && currentImage && (
                <div ref={lightboxRef} className="fixed inset-0 z-[9999] flex flex-col bg-black/95" role="dialog" aria-modal="true">
                    {/* Close */}
                    <button
                        type="button"
                        onClick={close}
                        className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/80"
                        aria-label="Close"
                    >
                        <Icon>
                            <path d="M18 6 6 18M6 6l12 12" />
                        </Icon>
                    </button>

                    {/* Main image area */}
                    <div
                        className="relative flex min-h-0 flex-1 items-center justify-center px-12 py-4 sm:px-16"
                        onClick={(event) => {
                            if (event.target === event.currentTarget) close();
                        }}
                    >
                        <button
                            type="button"
                            onClick={prev}
                            className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white"
                            aria-label="Previous image"
                        >
                            <Icon className="h-8 w-8">
                                <path d="m15 18-6-6 6-6" />
                            </Icon>
                        </button>

                        <img
                            key={currentImage}
                            src={currentImage}
                            alt={`Gallery ${activeIndex + 1}`}
                            className="max-h-full max-w-full select-none object-contain"
                            draggable={false}
                        />

                        <button
                            type="button"
                            onClick={next}
                            className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white"
                            aria-label="Next image"
                        >
                            <Icon className="h-8 w-8">
                                <path d="m9 18 6-6-6-6" />
                            </Icon>
                        </button>

                        {/* Caption + control bar */}
                        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center">
                            {showInfo && showControls && (
                                <div className="w-full bg-black/50 px-4 py-2 text-sm text-white/90">
                                    {caption} &nbsp;•&nbsp; {activeIndex + 1} / {images.length}
                                </div>
                            )}

                            {showControls && (
                                <div className="flex w-full items-center justify-center gap-2 bg-black/60 py-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsPlaying((p) => !p)}
                                        className={controlBtn}
                                        aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                                    >
                                        {isPlaying ? (
                                            <Icon>
                                                <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                                            </Icon>
                                        ) : (
                                            <Icon>
                                                <path d="M6 4l14 8-14 8z" fill="currentColor" />
                                            </Icon>
                                        )}
                                    </button>

                                    <button type="button" onClick={toggleFullscreen} className={controlBtn} aria-label="Toggle fullscreen">
                                        {isFullscreen ? (
                                            <Icon>
                                                <path d="M8 3v3a2 2 0 0 1-2 2H3M21 8h-3a2 2 0 0 1-2-2V3M3 16h3a2 2 0 0 1 2 2v3M16 21v-3a2 2 0 0 1 2-2h3" />
                                            </Icon>
                                        ) : (
                                            <Icon>
                                                <path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3" />
                                            </Icon>
                                        )}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setShowInfo((v) => !v)}
                                        className={`${controlBtn} ${showInfo ? 'bg-white/20' : ''}`}
                                        aria-label="Toggle image info"
                                    >
                                        <Icon>
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M12 16v-4M12 8h.01" />
                                        </Icon>
                                    </button>

                                    <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className={controlBtn} aria-label="Share on Facebook">
                                        <Icon>
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                        </Icon>
                                    </a>

                                    <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className={controlBtn} aria-label="Share on Twitter">
                                        <Icon>
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                        </Icon>
                                    </a>
                                </div>
                            )}

                            {/* Show / hide controls */}
                            <button
                                type="button"
                                onClick={() => setShowControls((v) => !v)}
                                className="absolute -top-6 flex h-6 w-24 items-center justify-center rounded-t bg-black/60 text-white/90 hover:text-white"
                                style={showControls ? { top: 'auto', bottom: '100%' } : { bottom: 0, top: 'auto' }}
                                aria-label="Toggle controls"
                            >
                                <Icon className={`h-4 w-4 transition ${showControls ? '' : 'rotate-180'}`}>
                                    <path d="m6 9 6 6 6-6" />
                                </Icon>
                            </button>
                        </div>
                    </div>

                    {/* Thumbnail strip */}
                    <div className="flex shrink-0 gap-2 overflow-x-auto bg-black/70 p-2">
                        {images.map((image, index) => (
                            <button
                                type="button"
                                key={image}
                                ref={(el) => (thumbRefs.current[index] = el)}
                                onClick={() => setActiveIndex(index)}
                                className={`h-16 w-24 shrink-0 overflow-hidden rounded border-2 transition sm:h-20 sm:w-32 ${
                                    index === activeIndex ? 'border-white opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                                }`}
                                aria-label={`Go to image ${index + 1}`}
                            >
                                <img src={image} alt="" loading="lazy" className="h-full w-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
