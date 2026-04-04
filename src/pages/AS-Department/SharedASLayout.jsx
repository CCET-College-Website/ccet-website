import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import styles from './SharedASLayout.module.css';

const SharedASLayout = ({ children, pageTitle }) => {
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
        if (path.includes('faculty')) return 'Faculty';
        if (path.includes('syllabus')) return 'Syllabus';
        if (path.includes('timetable')) return 'Time Table';
        if (path.includes('labs')) return 'Laboratories';
        if (path.includes('research')) return 'Research';
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
                <h3>Applied Science Quick Links</h3>
                <nav className={styles.mobileNav}>
                    <Link to="/academics/appliedscience/overview" onClick={() => setIsMobileMenuOpen(false)}>Overview</Link>
                    <Link to="/academics/appliedscience/ashod" onClick={() => setIsMobileMenuOpen(false)}>HOD Desk</Link>
                    <Link to="/academics/appliedscience/asfaculty" onClick={() => setIsMobileMenuOpen(false)}>Faculty</Link>
                    <Link to="/academics/appliedscience/assyllabus" onClick={() => setIsMobileMenuOpen(false)}>Syllabus</Link>
                    <Link to="/academics/appliedscience/astimetable" onClick={() => setIsMobileMenuOpen(false)}>Time Table</Link>
                    <Link to="/academics/appliedscience/aslabs" onClick={() => setIsMobileMenuOpen(false)}>Laboratories</Link>
                    <Link to="/academics/appliedscience/asresearch" onClick={() => setIsMobileMenuOpen(false)}>Research</Link>
                </nav>
                <div className={styles.closeButton} onClick={() => setIsMobileMenuOpen(false)}>
                    Close
                </div>
            </div>

            {/* Hero Section */}
            <section className={styles.hero}>
                <nav className={styles.heroNav}>
                    <Link to="/academics/appliedscience/overview">Overview</Link>
                    <Link to="/academics/appliedscience/ashod">HOD Desk</Link>
                    <Link to="/academics/appliedscience/asfaculty">Faculty</Link>
                    <Link to="/academics/appliedscience/assyllabus">Syllabus</Link>
                    <Link to="/academics/appliedscience/astimetable">Time Table</Link>
                    <Link to="/academics/appliedscience/aslabs">Laboratories</Link>
                    <Link to="/academics/appliedscience/asresearch">Research</Link>
                </nav>

                <div className={styles.heroLeft}>
                    <h1 className={styles.heroTitle}>Applied Science Department</h1>
                    <div className={styles.heroLine}></div>
                    <p className={styles.heroSubtitle}>Chandigarh College of Engineering and Technology</p>
                </div>

                <div className={styles.heroRight}>
                    <div className={styles.statCircle}>
                        <div className={styles.circle}>
                            <div className={styles.statNumber}>6</div>
                        </div>
                        <div className={styles.statLabel}>Core<br/>Domains</div>
                    </div>

                    <div className={styles.statCircle}>
                        <div className={styles.circle}>
                            <div className={`${styles.statNumber} ${styles.yellow}`}>5+</div>
                        </div>
                        <div className={styles.statLabel}>Faculty Members</div>
                    </div>

                    <div className={styles.statCircle}>
                        <div className={styles.circle}>
                            <div className={styles.statNumber}>100%</div>
                        </div>
                        <div className={styles.statLabel}>Foundation for<br/>Engineering</div>
                    </div>

                    <div className={styles.statCircle}>
                        <div className={styles.circle}>
                            <div className={`${styles.statNumber} ${styles.yellow}`}>1st Year</div>
                        </div>
                        <div className={styles.statLabel}>All Branches<br/>Covered</div>
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

export default SharedASLayout;
