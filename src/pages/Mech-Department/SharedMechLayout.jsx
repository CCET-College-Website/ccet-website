import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import styles from './SharedMechLayout.module.css';

const SharedMechLayout = ({ children, pageTitle }) => {
    const location = useLocation();
    const animatedElementsRef = useRef([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.animated);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        animatedElementsRef.current.forEach(element => {
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    // Get current page name from location
    const getCurrentPageName = () => {
        const path = location.pathname;
        if (path.includes('overview')) return 'Overview';
        if (path.includes('hod')) return 'HOD Desk';
        if (path.includes('mechfaculty')) return 'Faculty';
        if (path.includes('mechtimetable')) return 'Time Table';
        if (path.includes('mechsyllabus')) return 'Syllabus';
        if (path.includes('mechlabs')) return 'Laboratories';
        if (path.includes('mechresearch')) return 'Research';
        return pageTitle || 'Overview';
    };

    return (
        <div className={styles.container}>
            {/* Static Background */}
            <div className={styles.contentBg}></div>

            {/* Mobile Menu Button - Bottom Left */}
            {!isMobileMenuOpen && (
                <div className={styles.mobileMenuButton} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    Quick Links
                </div>
            )}

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.active : ''}`}
                 onClick={() => setIsMobileMenuOpen(false)}>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
                <h3>Mechanical Department Quick Links</h3>
                <nav className={styles.mobileNav}>
                    <Link to="/academics/mechanical/overview" onClick={() => setIsMobileMenuOpen(false)}>Overview</Link>
                    <Link to="/academics/mechanical/hod" onClick={() => setIsMobileMenuOpen(false)}>HOD Desk</Link>
                    <Link to="/academics/mechanical/mechfaculty" onClick={() => setIsMobileMenuOpen(false)}>Faculty</Link>
                    <Link to="/academics/mechanical/mechtimetable" onClick={() => setIsMobileMenuOpen(false)}>Time Table</Link>
                    <Link to="/academics/mechanical/mechsyllabus" onClick={() => setIsMobileMenuOpen(false)}>Syllabus</Link>
                    <Link to="/academics/mechanical/mechlabs" onClick={() => setIsMobileMenuOpen(false)}>Laboratories</Link>
                    <Link to="/academics/mechanical/mechresearch" onClick={() => setIsMobileMenuOpen(false)}>Research</Link>
                </nav>
                <div className={styles.closeButton} onClick={() => setIsMobileMenuOpen(false)}>
                    Close
                </div>
            </div>

            {/* Hero Section */}
            <section className={styles.hero}>
                <nav className={styles.heroNav}>
                    <Link to="/academics/mechanical/overview">Overview</Link>
                    <Link to="/academics/mechanical/hod">HOD Desk</Link>
                    <Link to="/academics/mechanical/mechfaculty">Faculty</Link>
                    <Link to="/academics/mechanical/mechtimetable">Time Table</Link>
                    <Link to="/academics/mechanical/mechsyllabus">Syllabus</Link>
                    <Link to="/academics/mechanical/mechlabs">Laboratories</Link>
                    <Link to="/academics/mechanical/mechresearch">Research</Link>
                </nav>

                <div className={styles.heroLeft}>
                    <h1 className={styles.heroTitle}>Mechanical Engineering Department</h1>
                    <div className={styles.heroLine}></div>
                    <p className={styles.heroSubtitle}>Chandigarh College of Engineering and Technology</p>
                </div>

                <div className={styles.heroRight}>
                    <div className={styles.statCircle}>
                        <div className={styles.circle}>
                            <div className={styles.statNumber}>25+</div>
                        </div>
                        <div className={styles.statLabel}>Years<br/>of Service</div>
                    </div>

                    <div className={styles.statCircle}>
                        <div className={styles.circle}>
                            <div className={`${styles.statNumber} ${styles.yellow}`}>22+</div>
                        </div>
                        <div className={styles.statLabel}>Faculty Members</div>
                    </div>

                    <div className={styles.statCircle}>
                        <div className={styles.circle}>
                            <div className={styles.statNumber}>6</div>
                        </div>
                        <div className={styles.statLabel}>Specialization<br/>Areas</div>
                    </div>

                    <div className={styles.statCircle}>
                        <div className={styles.circle}>
                            <div className={`${styles.statNumber} ${styles.yellow}`}>250+</div>
                        </div>
                        <div className={styles.statLabel}>Students</div>
                    </div>
                </div>

                <div className={styles.currentPageIndicator}>
                    {getCurrentPageName()}
                </div>
            </section>

            {/* Page Content */}
            <div className={styles.pageContent}>
                {children}
            </div>
        </div>
    );
};

export default SharedMechLayout;