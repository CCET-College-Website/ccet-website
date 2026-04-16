import { useState, useEffect, useCallback, useRef } from 'react'
import NoticePanel from './NoticePanel'
import VisionMission from './VissionMission.jsx'
import NewsPanel from './NewsPanel'
import Contact from './ContactUs'
import AboutUsSection from './AboutUsSection'
import NewAlumni from './NewAlumni'
import Gallery from './Gallery'
import EventCalendar from './EventCalendar'
import fallbackBanner from "../../assets/home/banner.png"
import Achievements from './Achievements';
import RecentUpdates from "./RecentUpdates.jsx";
import homeBackground from "../../assets/home/banner2.jpg";
import homeBackground2 from "../../assets/home/background3.svg";
import homeBackground3 from "../../assets/home/Events/event-bg.jpg"; // Add third background image

const BANNER_API = 'https://ccet.ac.in/api/home-banner.php';
const SLIDE_DURATION = 5000;

// ── Exactly the same pattern as Gallery.jsx ──────────────────────────────────
const getFullUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    return `https://ccet.ac.in/${path.startsWith('/') ? path.slice(1) : path}`;
};

// ─── BannerCarousel ──────────────────────────────────────────────────────────

function BannerCarousel() {
    const [banners, setBanners]         = useState([]);
    const [current, setCurrent]         = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [loading, setLoading]         = useState(true);
    const timerRef                      = useRef(null);

    // ── Fetch ─────────────────────────────────────────────────────────────
    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const res  = await fetch(BANNER_API);
                const data = await res.json();

                if (Array.isArray(data) && data.length > 0) {
                    // Resolve raw paths → full URLs, same as Gallery.jsx does
                    const formatted = data.map(b => ({
                        ...b,
                        // Desktop image (required)
                        banner_image_desktop: getFullUrl(b.banner_image_desktop),
                        // Mobile image — fall back to desktop if not provided
                        banner_image_mobile:  b.banner_image_mobile
                            ? getFullUrl(b.banner_image_mobile)
                            : getFullUrl(b.banner_image_desktop),
                        link_url: b.link_url ? getFullUrl(b.link_url) : null,
                    }));
                    setBanners(formatted);
                } else {
                    setBanners([{
                        id: 0,
                        banner_image_desktop: fallbackBanner,
                        banner_image_mobile:  fallbackBanner,
                        title: null,
                        link_url: null,
                    }]);
                }
            } catch {
                setBanners([{
                    id: 0,
                    banner_image_desktop: fallbackBanner,
                    banner_image_mobile:  fallbackBanner,
                    title: null,
                    link_url: null,
                }]);
            } finally {
                setLoading(false);
            }
        };

        fetchBanners();
    }, []);

    // ── Navigation ────────────────────────────────────────────────────────
    const goTo = useCallback((index) => {
        if (isAnimating || banners.length <= 1) return;
        setIsAnimating(true);
        setCurrent((index + banners.length) % banners.length);
        setTimeout(() => setIsAnimating(false), 600);
    }, [isAnimating, banners.length]);

    const next = useCallback(() => goTo(current + 1), [current, goTo]);
    const prev = useCallback(() => goTo(current - 1), [current, goTo]);

    // ── Auto-play ─────────────────────────────────────────────────────────
    const resetTimer = useCallback(() => {
        clearInterval(timerRef.current);
        if (banners.length > 1) {
            timerRef.current = setInterval(next, SLIDE_DURATION);
        }
    }, [banners.length, next]);

    useEffect(() => {
        resetTimer();
        return () => clearInterval(timerRef.current);
    }, [resetTimer]);

    // ── Keyboard ──────────────────────────────────────────────────────────
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'ArrowLeft')  prev();
            if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [prev, next]);

    // ── Touch swipe ───────────────────────────────────────────────────────
    const touchStartX = useRef(null);
    const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
    const onTouchEnd   = (e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 50) dx < 0 ? next() : prev();
        touchStartX.current = null;
    };

    // ── Loading ───────────────────────────────────────────────────────────
    if (loading) {
        return (
            <div style={{
                width: '100vw', maxWidth: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                background: 'linear-gradient(135deg, #0f2044 0%, #1a3a6e 100%)',
                height: '420px',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <div style={{
                    width: '48px', height: '48px',
                    border: '4px solid rgba(255,255,255,0.2)',
                    borderTopColor: '#fff', borderRadius: '50%',
                    animation: 'spin 0.9s linear infinite'
                }} />
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
        );
    }

    const total = banners.length;

    return (
        <div
            style={{ position: 'relative', width: '100vw', maxWidth: '100vw', marginLeft: 'calc(-50vw + 50%)', overflow: 'hidden', userSelect: 'none' }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            {/* Slides */}
            <div style={{
                display: 'flex',
                transform: `translateX(-${current * 100}%)`,
                transition: isAnimating ? 'transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
                willChange: 'transform',
            }}>
                {banners.map((banner, i) => {
                    /*
                     * <picture> lets the browser pick the right source automatically:
                     *  - screens ≤ 767 px  → mobile crop
                     *  - screens ≥ 768 px  → desktop crop
                     */
                    const picture = (
                        <picture key={banner.id ?? i} style={{ minWidth: '100%', display: 'block' }}>
                            {/* Mobile image — used on screens up to 767 px */}
                            <source
                                media="(max-width: 767px)"
                                srcSet={banner.banner_image_mobile}
                            />
                            {/* Desktop image — default / fallback */}
                            <img
                                src={banner.banner_image_desktop}
                                alt={banner.title ?? `Banner ${i + 1}`}
                                style={{
                                    minWidth: '100%', width: '100%',
                                    display: 'block', objectFit: 'cover',
                                    maxHeight: '520px',
                                }}
                                onError={(e) => { e.target.src = fallbackBanner; }}
                                draggable={false}
                            />
                        </picture>
                    );

                    return banner.link_url
                        ? (
                            <a
                                key={banner.id ?? i}
                                href={banner.link_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ minWidth: '100%' }}
                            >
                                {picture}
                            </a>
                        )
                        : (
                            <div key={banner.id ?? i} style={{ minWidth: '100%' }}>
                                {picture}
                            </div>
                        );
                })}
            </div>

            {/* Controls — only when more than 1 slide */}
            {total > 1 && (
                <>
                    <button
                        onClick={() => { prev(); resetTimer(); }}
                        aria-label="Previous banner"
                        style={arrowStyle('left')}
                        onMouseEnter={e => Object.assign(e.currentTarget.style, arrowHover)}
                        onMouseLeave={e => Object.assign(e.currentTarget.style, arrowBase)}
                    >&#8249;</button>

                    <button
                        onClick={() => { next(); resetTimer(); }}
                        aria-label="Next banner"
                        style={arrowStyle('right')}
                        onMouseEnter={e => Object.assign(e.currentTarget.style, arrowHover)}
                        onMouseLeave={e => Object.assign(e.currentTarget.style, arrowBase)}
                    >&#8250;</button>

                    {/* Dot indicators */}
                    <div style={{ position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
                        {banners.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => { goTo(i); resetTimer(); }}
                                aria-label={`Go to slide ${i + 1}`}
                                style={{
                                    width: i === current ? '28px' : '10px',
                                    height: '10px',
                                    borderRadius: '9999px',
                                    background: i === current ? '#fff' : 'rgba(255,255,255,0.45)',
                                    border: 'none', cursor: 'pointer', padding: 0,
                                    transition: 'all 0.35s ease',
                                    boxShadow: '0 1px 4px rgba(0,0,0,0.4)',
                                }}
                            />
                        ))}
                    </div>

                    {/* Progress bar */}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '3px', background: 'rgba(255,255,255,0.15)', zIndex: 10 }}>
                        <div
                            key={current}
                            style={{
                                height: '100%',
                                background: 'rgba(255,255,255,0.85)',
                                animation: `progressBar ${SLIDE_DURATION}ms linear forwards`,
                            }}
                        />
                    </div>
                </>
            )}

            <style>{`
                @keyframes progressBar {
                    from { width: 0%; }
                    to   { width: 100%; }
                }
                
            `}</style>
        </div>
    );
}

const arrowBase  = { background: 'rgba(0,0,0,0.40)' };
const arrowHover = { background: 'rgba(0,0,0,0.72)' };

const arrowStyle = (side) => ({
    position: 'absolute', top: '50%', [side]: '16px',
    transform: 'translateY(-50%)',
    ...arrowBase,
    border: 'none', borderRadius: '50%',
    width: '46px', height: '46px',
    cursor: 'pointer', color: '#fff',
    fontSize: '26px', lineHeight: 1,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 10, backdropFilter: 'blur(6px)',
    transition: 'background 0.2s',
    boxShadow: '0 2px 12px rgba(0,0,0,0.35)',
});

// ─── Home ─────────────────────────────────────────────────────────────────────

function Home() {
    const [currentBg, setCurrentBg] = useState(homeBackground);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const maxScroll = documentHeight - windowHeight;
            const scrollPercentage = (scrollPosition / maxScroll) * 100;

            // Change background based on scroll percentage
            if (scrollPercentage >= 65) {
                setCurrentBg(homeBackground3);
            } else if (scrollPercentage >= 40) {
                setCurrentBg(homeBackground2);
            } else {
                setCurrentBg(homeBackground);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.2)), url(${currentBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            transition: 'background-image 0.5s ease-in-out'
        }}>
            <BannerCarousel />

            <RecentUpdates />
            <AboutUsSection />

            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center px-4">
                <VisionMission />
                <div className="flex justify-center items-center">
                    <NewsPanel />
                </div>
            </div>

            <EventCalendar />

            <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch px-4">
                <div className="flex-1"><NoticePanel /></div>
                <div className="flex-1"><Achievements /></div>
            </div>

            <Gallery />
            <NewAlumni />
            <Contact />
        </div>
    );
}

export default Home;