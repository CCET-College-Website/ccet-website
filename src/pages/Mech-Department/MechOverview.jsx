import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import SharedMechLayout from './SharedMechLayout';
import styles from './MechOverview.module.css';

const API_BASE_URL = 'https://ccet.ac.in/api/overview.php';
const DEPARTMENT_CODE = 'MECH';

const MechanicalOverview = () => {
    const animatedElementsRef = useRef([]);
    const [departmentInfo, setDepartmentInfo] = useState(null);
    const [programOutcomes, setProgramOutcomes] = useState([]);
    const [specificOutcomes, setSpecificOutcomes] = useState([]);
    const [objectives, setObjectives] = useState([]);
    const [events, setEvents] = useState([]);
    const [featuredEvent, setFeaturedEvent] = useState(null);
    const [quickLinks, setQuickLinks] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAllData();
    }, []);

    const addToRefs = (el) => {
        if (el && !animatedElementsRef.current.includes(el)) {
            animatedElementsRef.current.push(el);
        }
    };

    const forceMobileVisibility = () => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            animatedElementsRef.current.forEach(element => {
                if (element && !element.classList.contains(styles.animated)) {
                    element.classList.add(styles.animated);
                }
            });
        }
    };

    useEffect(() => {
        if (loading) return;

        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.animated);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: isMobile ? 0.01 : 0.1,
            rootMargin: isMobile ? '50px 0px 50px 0px' : '0px 0px -50px 0px'
        });

        const observeElements = () => {
            animatedElementsRef.current.forEach(element => {
                if (element && !element.classList.contains(styles.animated)) {
                    observer.observe(element);
                }
            });
        };

        const checkVisibleElements = () => {
            animatedElementsRef.current.forEach(element => {
                if (element && !element.classList.contains(styles.animated)) {
                    const rect = element.getBoundingClientRect();
                    const isVisible = rect.top < window.innerHeight - 50 && rect.bottom > 0;
                    if (isVisible) {
                        element.classList.add(styles.animated);
                        observer.unobserve(element);
                    }
                }
            });
        };

        const initializeAnimations = () => {
            checkVisibleElements();
            observeElements();
        };

        setTimeout(initializeAnimations, 50);
        setTimeout(initializeAnimations, 150);
        setTimeout(forceMobileVisibility, 300);

        const handleScroll = () => {
            requestAnimationFrame(checkVisibleElements);
        };

        const handleResize = () => {
            setTimeout(checkVisibleElements, 100);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleResize);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleResize);
        };
    }, [loading]);

    const fetchAllData = async () => {
        setLoading(true);
        setError(null);

        try {
            const [infoRes, outcomesRes, objectivesRes, eventsRes, linksRes, galleryRes] = await Promise.all([
                fetch(`${API_BASE_URL}?entity=info&department_code=${DEPARTMENT_CODE}&is_active=true`),
                fetch(`${API_BASE_URL}?entity=outcomes&department_code=${DEPARTMENT_CODE}&is_active=true`),
                fetch(`${API_BASE_URL}?entity=objectives&department_code=${DEPARTMENT_CODE}&is_active=true`),
                fetch(`${API_BASE_URL}?entity=events&department_code=${DEPARTMENT_CODE}&is_active=true`),
                fetch(`${API_BASE_URL}?entity=links&department_code=${DEPARTMENT_CODE}&is_active=true`),
                fetch(`${API_BASE_URL}?entity=gallery&department_code=${DEPARTMENT_CODE}&is_active=true&gallery_type=tour`)
            ]);

            const [infoData, outcomesData, objectivesData, eventsData, linksData, galleryData] = await Promise.all([
                infoRes.json(),
                outcomesRes.json(),
                objectivesRes.json(),
                eventsRes.json(),
                linksRes.json(),
                galleryRes.json()
            ]);

            if (Array.isArray(infoData) && infoData.length > 0) {
                setDepartmentInfo(infoData[0]);
            }

            if (Array.isArray(outcomesData)) {
                setProgramOutcomes(outcomesData.filter(o => o.outcome_type === 'general'));
                setSpecificOutcomes(outcomesData.filter(o => o.outcome_type === 'specific'));
            }

            if (Array.isArray(objectivesData)) {
                setObjectives(objectivesData);
            }

            if (Array.isArray(eventsData)) {
                const featured = eventsData.find(e => e.is_featured);
                let nonFeatured = eventsData.filter(e => !e.is_featured);

                if (nonFeatured.length === 0 && eventsData.length > 0) {
                    nonFeatured = eventsData.filter(e => featured ? e.id !== featured.id : true);
                }

                const displayEvents = nonFeatured.slice(0, 3);

                setFeaturedEvent(featured);
                setEvents(displayEvents);
            }

            if (Array.isArray(linksData)) {
                setQuickLinks(linksData);
            }

            if (Array.isArray(galleryData)) {
                setGallery(galleryData);
            }
        } catch (err) {
            setError("Error loading department information");
            console.error("Department data fetch error:", err);
        } finally {
            setLoading(false);
        }
    };

    const getFullUrl = (path) => {
        if (!path) return '';
        if (path.startsWith('http://') || path.startsWith('https://')) return path;
        return `https://ccet.ac.in/${path.startsWith('/') ? path.slice(1) : path}`;
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    if (loading) {
        return (
            <SharedMechLayout pageTitle="Overview">
                <div className="flex justify-center items-center py-16">
                    <span className="text-gray-500">Loading department information...</span>
                </div>
            </SharedMechLayout>
        );
    }

    return (
        <SharedMechLayout pageTitle="Overview">
            {departmentInfo && (
                <section ref={addToRefs} className={styles.aboutSection}>
                    <div className={styles.aboutImage}>
                        <img
                            src={getFullUrl(departmentInfo.about_image)}
                            alt={departmentInfo.department_name}
                            onError={(e) => e.target.src = 'https://via.placeholder.com/600x400?text=Department+Image'}
                        />
                    </div>
                    <div className={styles.aboutContent}>
                        <h3>ABOUT OUR DEPARTMENT</h3>
                        <div className={styles.orangeLine}></div>
                        <p>{departmentInfo.about_text}</p>
                        {departmentInfo.nba_accredited && departmentInfo.nba_accreditation_date && (
                            <p className="mt-4 font-semibold">
                                NBA Accreditation Date: {formatDate(departmentInfo.nba_accreditation_date)}
                            </p>
                        )}
                    </div>
                </section>
            )}

            <section className={styles.deptInfo}>
                <div ref={addToRefs} className={styles.deptInfoContainer}>
                    <div className={styles.deptInfoHeader}>
                        <h2 style={{fontSize: '40px'}}>
                            {departmentInfo?.department_name || 'Department of Mechanical Engineering'}
                        </h2>
                        <p style={{fontSize: '20px'}}>
                            {departmentInfo?.tagline || 'Excellence in education, research, and innovation'}
                        </p>
                    </div>

                    {departmentInfo?.vision && (
                        <>
                            <div ref={addToRefs} className={styles.sectionHeading}>
                                <div className={styles.yellowLine}></div>
                                <h3>Vision</h3>
                            </div>
                            <div ref={addToRefs} className={`${styles.infoCard} ${styles.delay1}`}>
                                <p>{departmentInfo.vision}</p>
                            </div>
                        </>
                    )}

                    {departmentInfo?.mission && (
                        <>
                            <div ref={addToRefs} className={styles.sectionHeading}>
                                <div className={styles.yellowLine}></div>
                                <h3>Mission</h3>
                            </div>
                            <div ref={addToRefs} className={`${styles.infoCard} ${styles.delay1}`}>
                                <ul>
                                    {departmentInfo.mission.split('\n').filter(m => m.trim()).map((mission, index) => (
                                        <li key={index}>{mission}</li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}

                    {programOutcomes.length > 0 && (
                        <>
                            <div ref={addToRefs} className={styles.sectionHeading}>
                                <div className={styles.yellowLine}></div>
                                <h3>Program Outcomes</h3>
                            </div>
                            <div ref={addToRefs} className={`${styles.infoCard} ${styles.delay1}`}>
                                <p>Graduates of the Mechanical Engineering program will demonstrate:</p>
                                <ul>
                                    {programOutcomes.map((outcome) => (
                                        <li key={outcome.id}>{outcome.outcome_text}</li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}

                    {objectives.length > 0 && (
                        <>
                            <div ref={addToRefs} className={styles.sectionHeading}>
                                <div className={styles.yellowLine}></div>
                                <h3>Program Educational Objectives</h3>
                            </div>
                            <div ref={addToRefs} className={`${styles.infoCard} ${styles.delay1}`}>
                                <ul>
                                    {objectives.map((objective) => (
                                        <li key={objective.id}>{objective.objective_text}</li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}

                    {specificOutcomes.length > 0 && (
                        <>
                            <div ref={addToRefs} className={styles.sectionHeading}>
                                <div className={styles.yellowLine}></div>
                                <h3>Program Specific Outcomes</h3>
                            </div>
                            <div ref={addToRefs} className={`${styles.infoCard} ${styles.delay1}`}>
                                <p>Graduates will be able to:</p>
                                <ul>
                                    {specificOutcomes.map((outcome) => (
                                        <li key={outcome.id}>{outcome.outcome_text}</li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </section>

            {quickLinks.length > 0 && (
                <section className={styles.quickLinks}>
                    <h2 ref={addToRefs} className={styles.sectionTitle}>Quick Links</h2>
                    <div className={styles.sectionUnderline} style={{filter: 'none'}}></div>

                    <div className={styles.linksGrid}>
                        {quickLinks.map((link, index) => (
                            <Link
                                key={link.id}
                                to={link.link_url}
                                ref={addToRefs}
                                className={`${styles.linkCard} ${index % 3 === 1 ? styles.delay1 : index % 3 === 2 ? styles.delay2 : ''}`}
                            >
                                <div className={styles.linkIcon}>
                                    {link.icon_svg ? (
                                        <div dangerouslySetInnerHTML={{ __html: link.icon_svg }} />
                                    ) : (
                                        <svg viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                        </svg>
                                    )}
                                </div>
                                <h4>{link.link_title}</h4>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {(featuredEvent || events.length > 0) && (
                <section className={styles.eventsSection}>
                    <h2 ref={addToRefs} className={styles.sectionTitle}>Department Events</h2>
                    <div className={styles.sectionUnderline} style={{filter: 'none'}}></div>

                    {featuredEvent && (
                        <div ref={addToRefs} className={styles.eventsHero}>
                            <div className={styles.eventsImage}>
                                <img
                                    src={getFullUrl(featuredEvent.event_image)}
                                    alt={featuredEvent.event_title}
                                    onError={(e) => e.target.src = 'https://via.placeholder.com/800x400?text=Event+Image'}
                                />
                            </div>
                            <div className={styles.eventsContent}>
                                <h3>{featuredEvent.event_title}</h3>
                                <p>{featuredEvent.event_description}</p>
                                {featuredEvent.event_date && (
                                    <p className="text-sm mt-2 opacity-80">{formatDate(featuredEvent.event_date)}</p>
                                )}
                            </div>
                        </div>
                    )}

                    {events.length > 0 && (
                        <div className={styles.eventsCards}>
                            {events.map((event, index) => (
                                <div
                                    key={event.id}
                                    ref={addToRefs}
                                    className={`${styles.eventCard} ${index === 1 ? styles.delay1 : index === 2 ? styles.delay2 : ''}`}
                                >
                                    <div className={styles.eventCardHeader}>
                                        <h4>
                                            {event.event_title}
                                            {event.event_date && <><br/>{formatDate(event.event_date)}</>}
                                        </h4>
                                    </div>
                                    <div className={styles.eventCardContent}>
                                        {event.event_description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            )}

            {gallery.length > 0 && (
                <section className={styles.tourSection}>
                    <h2 ref={addToRefs} className={styles.sectionTitle}>Mechanical Department Tour</h2>
                    <div className={styles.sectionUnderline} style={{filter: 'none'}}></div>

                    <div ref={addToRefs} className={styles.tourContainer}>
                        <div className={styles.galleryGrid}>
                            {gallery.map((image, index) => (
                                <div
                                    key={image.id}
                                    ref={addToRefs}
                                    className={`${styles.galleryItem} ${index % 3 === 1 ? styles.delay1 : index % 3 === 2 ? styles.delay2 : ''}`}
                                >
                                    <img
                                        src={getFullUrl(image.image_url)}
                                        alt={image.alt_text || 'Department gallery image'}
                                        onError={(e) => e.target.src = 'https://via.placeholder.com/400x300?text=Gallery+Image'}
                                    />
                                    {image.caption && (
                                        <div className={styles.imageCaption}>
                                            <p>{image.caption}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center my-8">
                    <p className="text-red-700">{error}</p>
                </div>
            )}
        </SharedMechLayout>
    );
};

export default MechanicalOverview;