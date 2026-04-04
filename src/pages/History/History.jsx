import React, { useEffect, useRef, useState } from 'react';
import styles from './History.module.css';

const API_BASE_URL = 'https://ccet.ac.in/api/history.php';

const History = () => {
    const observerRef = useRef(null);
    const [timelineData, setTimelineData] = useState([]);
    const [visionData, setVisionData] = useState(null);
    const [missionData, setMissionData] = useState(null);
    const [coreValuesData, setCoreValuesData] = useState(null);
    const [heroData, setHeroData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchHistoryData();
    }, []);

    const fetchHistoryData = async () => {
        setLoading(true);
        setError(null);

        try {
            const [timelineRes, visionRes, missionRes, coreValuesRes, heroRes] = await Promise.all([
                fetch(`${API_BASE_URL}?section=timeline&is_active=true`),
                fetch(`${API_BASE_URL}?section=vision&is_active=true`),
                fetch(`${API_BASE_URL}?section=mission&is_active=true`),
                fetch(`${API_BASE_URL}?section=core_values&is_active=true`),
                fetch(`${API_BASE_URL}?section=hero&is_active=true`)
            ]);

            const [timelineJson, visionJson, missionJson, coreValuesJson, heroJson] = await Promise.all([
                timelineRes.json(),
                visionRes.json(),
                missionRes.json(),
                coreValuesRes.json(),
                heroRes.json()
            ]);

            if (Array.isArray(timelineJson)) {
                setTimelineData(timelineJson);
            }

            if (Array.isArray(visionJson) && visionJson.length > 0) {
                setVisionData(visionJson[0]);
            }

            if (Array.isArray(missionJson) && missionJson.length > 0) {
                setMissionData(missionJson[0]);
            }

            if (Array.isArray(coreValuesJson) && coreValuesJson.length > 0) {
                setCoreValuesData(coreValuesJson[0]);
            }

            if (Array.isArray(heroJson) && heroJson.length > 0) {
                setHeroData(heroJson[0]);
            }
        } catch (err) {
            setError("Error loading history information");
            console.error("History data fetch error:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (loading) return;

        if (heroData?.image_url) {
            const bgUrl = getFullUrl(heroData.image_url);
            document.documentElement.style.setProperty('--bg-image', `url(${bgUrl})`);
        }

        const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -100px 0px' };
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add(styles.visible), 100);
                }
            });
        }, observerOptions);

        document.querySelectorAll(
            `.${styles.fadeIn}, .${styles.fadeInLeft}, .${styles.fadeInRight}, .${styles.scaleIn}`
        ).forEach(el => observerRef.current.observe(el));

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
            document.documentElement.style.removeProperty('--bg-image');
        };
    }, [loading, heroData]);

    const handleTimelineItemClick = (e) => {
        const year = e.currentTarget.querySelector(`.${styles.timelineYear}`);
        if (year) {
            year.style.animation = `${styles.bounce} 0.6s ease`;
            setTimeout(() => (year.style.animation = ''), 600);
        }
    };

    const handleTimelineItemHover = (e) => {
        const year = e.currentTarget.querySelector(`.${styles.timelineYear}`);
        if (year && !year.querySelector(`.${styles.ripple}`)) {
            const ripple = document.createElement('div');
            ripple.className = styles.ripple;
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255,255,255,0.3);
                transform: scale(0);
                animation: ${styles.rippleEffect} 0.6s linear;
                pointer-events: none;
                top: 50%;
                left: 50%;
                width: 100%;
                height: 100%;
                margin-left: -50%;
                margin-top: -50%;
            `;
            year.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        }
    };

    const getFullUrl = (path) => {
        if (!path) return '';
        if (path.startsWith('http://') || path.startsWith('https://')) return path;
        return `https://ccet.ac.in/${path.startsWith('/') ? path.slice(1) : path}`;
    };

    if (loading) {
        return (
            <div className={styles.historyWrapper}>
                <div className={styles.container}>
                    <div className={styles.loadingContainer}>
                        <span className={styles.loadingText}>Loading history information...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.historyWrapper}>
                <div className={styles.container}>
                    <div className={styles.errorContainer}>
                        <p className={styles.errorText}>{error}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.historyWrapper}>
            <div className={styles.container}>
                <section className={styles.heroSection}>
                    <div className={styles.heroOverlay}></div>
                    <div className={styles.historyContent}>
                        <h1 className={`${styles.historyTitle} ${styles.scaleIn}`}>
                            {heroData?.title || 'History'}
                        </h1>

                        {timelineData.length > 0 && (
                            <div className={styles.timeline}>
                                {timelineData.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={`${styles.timelineItem} ${index % 2 === 0 ? styles.fadeInLeft : styles.fadeInRight}`}
                                        onClick={handleTimelineItemClick}
                                        onMouseEnter={handleTimelineItemHover}
                                    >
                                        <div className={styles.timelineYear}>{item.year}</div>
                                        <div className={styles.timelineDescription}>
                                            {item.description}
                                        </div>
                                        {index < timelineData.length - 1 && (
                                            <div className={styles.timelineConnector}></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {heroData?.description && (
                            <div className={`${styles.accreditationBadge} ${styles.scaleIn}`}>
                                {heroData.description}
                            </div>
                        )}
                    </div>
                </section>

                <section className={styles.missionSection}>
                    {visionData && (
                        <>
                            <div className={`${styles.sectionHeader} ${styles.fadeIn}`}>
                                {visionData.title}
                            </div>
                            <div className={`${styles.contentBox} ${styles.fadeInLeft}`}>
                                {visionData.description}
                            </div>
                        </>
                    )}

                    {missionData && (
                        <>
                            <div className={`${styles.sectionHeader} ${styles.fadeIn}`}>
                                {missionData.title}
                            </div>
                            <div className={`${styles.contentBox} ${styles.missionContent} ${styles.fadeInRight}`}>
                                <div dangerouslySetInnerHTML={{
                                    __html: missionData.description.replace(/\n/g, '<br /><br />')
                                }} />
                            </div>
                        </>
                    )}

                    {coreValuesData && (
                        <>
                            <div className={`${styles.sectionHeader} ${styles.fadeIn}`}>
                                {coreValuesData.title}
                            </div>
                            {coreValuesData.image_url ? (
                                <div className={`${styles.coreValues} ${styles.scaleIn}`}>
                                    <img
                                        src={getFullUrl(coreValuesData.image_url)}
                                        alt={coreValuesData.title}
                                        className={styles.coreValuesImage}
                                    />
                                </div>
                            ) : coreValuesData.description && (
                                <div className={`${styles.contentBox} ${styles.fadeInLeft}`}>
                                    <div dangerouslySetInnerHTML={{
                                        __html: coreValuesData.description.replace(/\n/g, '<br /><br />')
                                    }} />
                                </div>
                            )}
                        </>
                    )}
                </section>
            </div>
        </div>
    );
};

export default History;