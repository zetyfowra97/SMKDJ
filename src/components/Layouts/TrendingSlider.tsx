import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export interface TrendingItem {
    title: string;
    href: string;
}

interface TrendingSliderProps {
    items?: TrendingItem[];
    label?: string;
    /** Scroll speed in pixels per second */
    speed?: number;
    className?: string;
}

const DEFAULT_ITEMS: TrendingItem[] = [
    {
        title: 'Pindaan Jadual Penggiliran Kehadiran Murid Semasa Ujian Bertutur Bahasa Inggeris (UBBI) SPM 2026',
        href: '/PindaanJadualPenggiliranKehadiranMuridSemasaUjianBertuturBahasaInggerisUBBISPM2026',
    },
    {
        title: 'Selamat Menduduki Ujian Bertutur Bahasa Melayu Calon SPM 2026',
        href: '/SelamatMenduduki',
    },
    {
        title: 'JADUAL PENGGILIRAN SEMASA PEPERIKSAAN SPM 2026',
        href: '/JADUALPENGGILIRANSEMASAPEPERIKSAANSPM2026',
    },
    {
        title: 'Tangkas Beraksi, Pingat Diraih!',
        href: '/TangkasBeraksiPingatDiraih',
    },
    {
        title: 'Penampilan Rapi, Sahsiah Terpuji.',
        href: '/PenampilanRapiSahsiahTerpuji',
    },
    {
        title: 'Pindaan Jadual Ujian Akhir Sesi Akademik (UASA) 2026 bagi Tingkatan 1 – Tingkatan 3',
        href: '/PindaanJadualUjianAkhirSesiAkademikUASA2026bagiTingkatan1dan3',
    },
    {
        title: 'Selamat Kembali ke Sekolah Warga SMKDJ dari Tuan Pengetua.',
        href: '/SelamatKembalikeSeolahWargaSMKDJdariTuanPengetua',
    },
    {
        title: 'Makluman Penutupan Sekolah & Aktiviti akibat Jerebu',
        href: '/MaklumanPenutupanSekolahAktivitiakibatJerebu',
    },
];

const ACCENT = '#E8943A';
const ACCENT_DEEP = '#E07B2E';

const TrendingSlider = ({ items = DEFAULT_ITEMS, label = 'Trending', speed = 40, className = '' }: TrendingSliderProps) => {
    const groupRef = useRef<HTMLUListElement>(null);
    const [duration, setDuration] = useState(30);

    // Duration = width of one group / speed, so the pace stays constant
    // regardless of how many headlines there are.
    useEffect(() => {
        const el = groupRef.current;
        if (!el) return;
        const update = () => setDuration(Math.max(el.scrollWidth / speed, 5));
        update();
        const ro = new ResizeObserver(update);
        ro.observe(el);
        return () => ro.disconnect();
    }, [items, speed]);

    if (!items.length) return null;

    const renderLink = (item: TrendingItem, hidden: boolean) => {
        const isInternal = item.href.startsWith('/');
        const common = {
            className: 'ts-link',
            tabIndex: hidden ? -1 : undefined,
        };
        return isInternal ? (
            <Link to={item.href} {...common}>
                <span>{item.title}</span>
            </Link>
        ) : (
            <a href={item.href} {...common}>
                <span>{item.title}</span>
            </a>
        );
    };

    const renderGroup = (hidden: boolean) => (
        <ul ref={hidden ? undefined : groupRef} aria-hidden={hidden || undefined} className="ts-group">
            {items.map((item, i) => (
                <li key={`${hidden ? 'b' : 'a'}-${i}`} className="ts-item">
                    {renderLink(item, hidden)}
                </li>
            ))}
        </ul>
    );

    return (
        <section className={`ts-root ${className}`} aria-label={label}>
            <style>{`
        .ts-root {
          display: flex;
          align-items: stretch;
          width: 100%;
          height: 56px;
          border-radius: 999px;
          background: #ffffff;
          border: 1px solid rgba(16, 25, 38, 0.06);
          box-shadow: 0 8px 24px -14px rgba(16, 25, 38, 0.25);
          overflow: hidden;
          font-family: inherit;
        }

        /* ---------- Badge ---------- */
        .ts-badge {
          position: relative;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          padding: 0 34px 0 8px;
          background: linear-gradient(135deg, ${ACCENT} 0%, ${ACCENT_DEEP} 100%);
          color: #fff;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          clip-path: polygon(0 0, 100% 0, calc(100% - 18px) 100%, 0 100%);
          z-index: 2;
        }
        .ts-badge::after {
          /* soft light sweep */
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.35) 50%, transparent 65%);
          transform: translateX(-120%);
          animation: ts-shine 4.5s ease-in-out infinite;
        }
        .ts-bolt {
          position: relative;
          display: grid;
          place-items: center;
          width: 40px;
          height: 40px;
          border-radius: 999px;
          background: rgba(255,255,255,0.22);
          flex-shrink: 0;
        }
        .ts-bolt::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 999px;
          border: 2px solid rgba(255,255,255,0.7);
          animation: ts-pulse 1.8s ease-out infinite;
        }
        .ts-bolt svg { width: 18px; height: 18px; fill: #fff; position: relative; }

        /* ---------- Scrolling area ---------- */
        .ts-viewport {
          position: relative;
          flex: 1;
          min-width: 0;
          overflow: hidden;
          display: flex;
          align-items: center;
          -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 40px, #000 calc(100% - 56px), transparent 100%);
                  mask-image: linear-gradient(90deg, transparent 0, #000 40px, #000 calc(100% - 56px), transparent 100%);
        }
        .ts-track {
          display: flex;
          width: max-content;
          animation: ts-scroll var(--ts-duration, 30s) linear infinite;
          will-change: transform;
        }

        /* Pause on hover (only on devices that truly support hover, so touch taps don't freeze it) */
        @media (hover: hover) {
          .ts-viewport:hover .ts-track {
            animation-play-state: paused;
          }
        }
        /* Pause for keyboard focus only (mouse clicks don't trigger :focus-visible) */
        .ts-viewport:has(:focus-visible) .ts-track {
          animation-play-state: paused;
        }

        .ts-group {
          display: flex;
          flex-shrink: 0;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .ts-item {
          position: relative;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          padding: 0 28px;
          white-space: nowrap;
        }
        /* orange diamond divider between headlines */
        .ts-item::after {
          content: "";
          position: absolute;
          right: -4px;
          top: 50%;
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, ${ACCENT}, ${ACCENT_DEEP});
          transform: translateY(-50%) rotate(45deg);
          border-radius: 2px;
          opacity: 0.9;
        }
        .ts-link {
          position: relative;
          display: inline-block;
          padding: 6px 0;
          color: #3a4250;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .ts-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 2px;
          height: 2px;
          width: 100%;
          background: linear-gradient(90deg, ${ACCENT}, ${ACCENT_DEEP});
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .ts-link:hover,
        .ts-link:focus-visible {
          color: ${ACCENT_DEEP};
          cursor: pointer;
        }
        .ts-link:hover::after,
        .ts-link:focus-visible::after {
          transform: scaleX(1);
        }
        .ts-link:focus-visible {
          outline: 2px solid ${ACCENT};
          outline-offset: 4px;
          border-radius: 6px;
        }

        /* ---------- Animations ---------- */
        @keyframes ts-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes ts-scroll-rtl {
          from { transform: translateX(0); }
          to   { transform: translateX(50%); }
        }
        [dir='rtl'] .ts-track { animation-name: ts-scroll-rtl; }
        [dir='rtl'] .ts-badge { clip-path: polygon(0 0, 100% 0, 100% 100%, 18px 100%); padding: 0 8px 0 34px; }
        @keyframes ts-pulse {
          0%   { transform: scale(1);   opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes ts-shine {
          0%, 55% { transform: translateX(-120%); }
          100%    { transform: translateX(120%); }
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 640px) {
          .ts-root { height: 48px; }
          .ts-badge { padding: 0 26px 0 6px; }
          .ts-badge .ts-label { display: none; }
          .ts-bolt { width: 34px; height: 34px; }
          .ts-link { font-size: 14px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ts-track { animation: none; overflow-x: auto; }
          .ts-badge::after, .ts-bolt::before { animation: none; }
        }
      `}</style>

            <div className="ts-badge">
                <span className="ts-bolt" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                        <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
                    </svg>
                </span>
                <span className="ts-label">{label}</span>
            </div>

            <div className="ts-viewport">
                <div className="ts-track" style={{ ['--ts-duration' as string]: `${duration}s` }}>
                    {renderGroup(false)}
                    {renderGroup(true)}
                </div>
            </div>
        </section>
    );
};

export default TrendingSlider;
