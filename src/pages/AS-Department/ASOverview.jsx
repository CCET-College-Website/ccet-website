import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import SharedASLayout from './SharedASLayout';
import styles from './ASOverview.module.css';

// Import images (replace with real images later)
import asDepartmentImage from '../../assets/AS-Department/AS-1.jpeg';
import asSubjectsImage from '../../assets/AS-Department/AS-2.jpeg';

const ASOverview = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.animated);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        // Observe all elements with animateOnScroll class
        const elements = document.querySelectorAll(`.${styles.animateOnScroll}`);
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <SharedASLayout pageTitle="Overview">
            {/* About Section */}
            <section className={`${styles.aboutSection} ${styles.animateOnScroll}`}>
                <div className={styles.aboutImage}>
                    <img src={asDepartmentImage} alt="Applied Science Department" />
                </div>
                <div className={styles.aboutContent}>
                    <h3>ABOUT OUR DEPARTMENT</h3>
                    <div className={styles.orangeLine}></div>
                    <p>
                        The Department of Applied Sciences consists of Engineering Mathematics, Physics,
                        Chemistry and Humanities. All the students of B.E. (ECE, CSE, Civil and Mechanical)
                        study the Applied Science subjects (common in all branches) in the First year of
                        their respective branch.
                    </p>
                </div>
            </section>

            {/* Department Info Section */}
            <section className={styles.deptInfo}>
                <div className={`${styles.deptInfoContainer} ${styles.animateOnScroll}`}>
                    <div className={styles.deptInfoHeader}>
                        <h2 style={{ fontSize: '40px' }}>Department of Applied Sciences</h2>
                        <p style={{ fontSize: '20px' }}>Foundation of Engineering Education</p>
                    </div>

                    {/* Courses Offered */}
                    <div className={`${styles.sectionHeading} ${styles.animateOnScroll}`}>
                        <div className={styles.yellowLine}></div>
                        <h3>Courses Offered</h3>
                    </div>
                    <div className={`${styles.infoCard} ${styles.animateOnScroll} ${styles.delay1}`}>
                        <p>The department offers courses in the following areas:</p>
                        <ul>
                            <li>Mathematics</li>
                            <li>Physics</li>
                            <li>Chemistry</li>
                            <li>Environment Education</li>
                            <li>Communication Skills</li>
                            <li>Ethics and Self-awareness</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Quick Links Section */}
            <section className={styles.quickLinks}>
                <h2 className={`${styles.sectionTitle} ${styles.animateOnScroll}`}>Quick Links</h2>
                <div className={styles.sectionUnderline}></div>

                <div className={styles.linksGrid}>
                    <Link to="/academics/appliedscience/ashod" className={`${styles.linkCard} ${styles.animateOnScroll}`}>
                        <div className={styles.linkIcon}>
                            <svg viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <h4>HOD Desk</h4>
                    </Link>

                    <Link to="/academics/appliedscience/asfaculty" className={`${styles.linkCard} ${styles.animateOnScroll} ${styles.delay1}`}>
                        <div className={styles.linkIcon}>
                            <svg viewBox="0 0 24 24">
                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                            </svg>
                        </div>
                        <h4>Faculty</h4>
                    </Link>

                    <Link to="/academics/appliedscience/assyllabus" className={`${styles.linkCard} ${styles.animateOnScroll} ${styles.delay2}`}>
                        <div className={styles.linkIcon}>
                            <svg viewBox="0 0 24 24">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                <polyline points="14,2 14,8 20,8"/>
                                <line x1="16" y1="13" x2="8" y2="13"/>
                                <line x1="16" y1="17" x2="8" y2="17"/>
                                <polyline points="10,9 9,9 8,9"/>
                            </svg>
                        </div>
                        <h4>Syllabus</h4>
                    </Link>

                    <Link to="/academics/appliedscience/astimetable" className={`${styles.linkCard} ${styles.animateOnScroll} ${styles.delay1}`}>
                        <div className={styles.linkIcon}>
                            <svg viewBox="0 0 24 24">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                <line x1="16" y1="2" x2="16" y2="6"/>
                                <line x1="8" y1="2" x2="8" y2="6"/>
                                <line x1="3" y1="10" x2="21" y2="10"/>
                            </svg>
                        </div>
                        <h4>Timetable</h4>
                    </Link>

                    <Link to="/academics/appliedscience/aslabs" className={`${styles.linkCard} ${styles.animateOnScroll} ${styles.delay2}`}>
                        <div className={styles.linkIcon}>
                            <svg viewBox="0 0 24 24">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                            </svg>
                        </div>
                        <h4>Laboratories</h4>
                    </Link>

                    <Link to="/academics/appliedscience/asresearch" className={`${styles.linkCard} ${styles.animateOnScroll} ${styles.delay1}`}>
                        <div className={styles.linkIcon}>
                            <svg viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="3"/>
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                            </svg>
                        </div>
                        <h4>Research</h4>
                    </Link>
                </div>
            </section>

            {/* Events Section */}
            <section className={styles.eventsSection}>
                <h2 className={`${styles.sectionTitle} ${styles.animateOnScroll}`}>Department Events</h2>
                <div className={styles.sectionUnderline}></div>

                <div className={`${styles.eventsHero} ${styles.animateOnScroll}`}>
                    <div className={styles.eventsImage}>
                        <img src={asSubjectsImage} alt="Applied Science Event" />
                    </div>
                    <div className={styles.eventsContent}>
                        <h3>Annual Applied Science Symposium</h3>
                        <p>
                            The department organizes symposiums and seminars that integrate knowledge from
                            Mathematics, Physics, Chemistry, and Humanities to build a strong foundation
                            for engineering students.
                        </p>
                        <a href="#" className={styles.learnMoreBtn}>Learn more --&gt;</a>
                    </div>
                </div>
            </section>

            {/* Tour Section */}
            <section className={styles.tourSection}>
                <h2 className={`${styles.sectionTitle} ${styles.animateOnScroll}`}>Applied Science Department Tour</h2>
                <div className={styles.sectionUnderline}></div>

                <div className={`${styles.tourContainer} ${styles.animateOnScroll}`}>
                    <h3>VIDEO / Carousel with pictures</h3>
                </div>
            </section>
        </SharedASLayout>
    );
};

export default ASOverview;
