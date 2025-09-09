import React, { useEffect, useRef } from 'react';
import styles from './History.module.css';
import bgImage from '../../assets/History/bg-image.jpeg';
import coreValueImage from '../../assets/History/Core-Value.png';

const History = () => {
    const observerRef = useRef(null);

    useEffect(() => {
        // Set background image as CSS variable
        document.documentElement.style.setProperty('--bg-image', `url(${bgImage})`);

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
    }, []);

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

    return (
        <div className={styles.historyWrapper}>
            <div className={styles.container}>
                {/* Hero Section */}
                <section className={styles.heroSection}>
                    <div className={styles.heroOverlay}></div>
                    <div className={styles.historyContent}>
                        <h1 className={`${styles.historyTitle} ${styles.scaleIn}`}>History</h1>

                        <div className={styles.timeline}>
                            <div
                                className={`${styles.timelineItem} ${styles.fadeInLeft}`}
                                onClick={handleTimelineItemClick}
                                onMouseEnter={handleTimelineItemHover}
                            >
                                <div className={styles.timelineYear}>1959</div>
                                <div className={styles.timelineDescription}>
                                    Established as Central Polytechnic Chandigarh (CPC) to address the shortage of
                                    technical personnel, offering diploma programs in Civil, Electrical, Mechanical,
                                    Electronics & Communication, and other engineering disciplines
                                </div>
                                <div className={styles.timelineConnector}></div>
                            </div>

                            <div
                                className={`${styles.timelineItem} ${styles.fadeInRight}`}
                                onClick={handleTimelineItemClick}
                                onMouseEnter={handleTimelineItemHover}
                            >
                                <div className={styles.timelineYear}>2002</div>
                                <div className={styles.timelineDescription}>
                                    Upgraded from CPC to Chandigarh College of Engineering and Technology (CCET) with
                                    introduction of Degree Wing offering Bachelor of Engineering programs in Computer
                                    Science, Electronics & Electrical Communication, Civil, and Mechanical Engineering
                                </div>
                                <div className={styles.timelineConnector}></div>
                            </div>

                            <div
                                className={`${styles.timelineItem} ${styles.fadeInLeft}`}
                                onClick={handleTimelineItemClick}
                                onMouseEnter={handleTimelineItemHover}
                            >
                                <div className={styles.timelineYear}>Today</div>
                                <div className={styles.timelineDescription}>
                                    The only technical college in Chandigarh offering both diplomas and degrees, with
                                    modern infrastructure on 32-acre campus near Shivalik ranges and Sukhna Lake,
                                    affiliated with Panjab University and approved by AICTE
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.accreditationBadge} ${styles.scaleIn}`}>
                            NBA Accreditation
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className={styles.missionSection}>
                    <div className={`${styles.sectionHeader} ${styles.fadeIn}`}>Vision</div>
                    <div className={`${styles.contentBox} ${styles.fadeInLeft}`}>
                        Chandigarh College of Engineering and Technology aims to be a centre of excellence for imparting
                        technical education and serving the society with self-motivated and highly competent
                        technocrats.
                    </div>

                    <div className={`${styles.sectionHeader} ${styles.fadeIn}`}>Mission</div>
                    <div className={`${styles.contentBox} ${styles.missionContent} ${styles.fadeInRight}`}>
                        • To provide high quality and value-based technical education.<br /><br />
                        • To establish a centre of excellence in emerging and cutting-edge technologies by encouraging
                        research and consultancy in collaboration with industry and organizations of repute.<br /><br />
                        • To foster a transformative learning environment for technocrats focused on inter-disciplinary
                        knowledge; problem-solving; leadership, communication, and interpersonal skills.<br /><br />
                        • To imbibe the spirit of entrepreneurship and innovation for the development of enterprising
                        leaders for contributing to Nation progress and Humanity.
                    </div>

                    <div className={`${styles.sectionHeader} ${styles.fadeIn}`}>Core Values</div>
                    <div className={`${styles.coreValues} ${styles.scaleIn}`}>
                        <img src={coreValueImage} alt="Core Values" className={styles.coreValuesImage} />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default History;
