import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import styles from './SharedCseLayout.module.css';

const SharedCseLayout = ({ children, pageTitle }) => {
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
        if (path.includes('csefaculty')) return 'Faculty';
        if (path.includes('csetimetable')) return 'Time Table';
        if (path.includes('csesyllabus')) return 'Syllabus';
        if (path.includes('cselabs')) return 'Laboratories';
        if (path.includes('cseresearch')) return 'Research';
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
                <h3>CSE Department Quick Links</h3>
                <nav className={styles.mobileNav}>
                    <Link to="/academics/cse/overview" onClick={() => setIsMobileMenuOpen(false)}>Overview</Link>
                    <Link to="/academics/cse/hod" onClick={() => setIsMobileMenuOpen(false)}>HOD Desk</Link>
                    <Link to="/academics/cse/csefaculty" onClick={() => setIsMobileMenuOpen(false)}>Faculty</Link>
                    <Link to="/academics/cse/csetimetable" onClick={() => setIsMobileMenuOpen(false)}>Time Table</Link>
                    <Link to="/academics/cse/csesyllabus" onClick={() => setIsMobileMenuOpen(false)}>Syllabus</Link>
                    <Link to="/academics/cse/cselabs" onClick={() => setIsMobileMenuOpen(false)}>Laboratories</Link>
                    <Link to="/academics/cse/cseresearch" onClick={() => setIsMobileMenuOpen(false)}>Research</Link>
                </nav>
                <div className={styles.closeButton} onClick={() => setIsMobileMenuOpen(false)}>
                    Close
                </div>
            </div>

            {/* Hero Section */}
            <section className={styles.hero}>
                <nav className={styles.heroNav}>
                    <Link to="/academics/cse/overview">Overview</Link>
                    <Link to="/academics/cse/hod">HOD Desk</Link>
                    <Link to="/academics/cse/csefaculty">Faculty</Link>
                    <Link to="/academics/cse/csetimetable">Time Table</Link>
                    <Link to="/academics/cse/csesyllabus">Syllabus</Link>
                    <Link to="/academics/cse/cselabs">Laboratories</Link>
                    <Link to="/academics/cse/cseresearch">Research</Link>
                </nav>

                <div className={styles.heroLeft}>
                    <h1 className={styles.heroTitle}>Computer Science & Engineering Department</h1>
                    <div className={styles.heroLine}></div>
                    <p className={styles.heroSubtitle}>Chandigarh College of Engineering and Technology</p>
                </div>

                <div className={styles.heroRight}>
                    <div className={styles.statCircle}>
                        <div className={styles.circle}>
                            <div className={styles.statNumber}>NBA</div>
                        </div>
                        <div className={styles.statLabel}>Accredited<br/>Program</div>
                    </div>

                    <div className={styles.statCircle}>
                        <div className={styles.circle}>
                            <div className={`${styles.statNumber} ${styles.yellow}`}>10+</div>
                        </div>
                        <div className={styles.statLabel}>Faculty Members</div>
                    </div>

                    <div className={styles.statCircle}>
                        <div className={styles.circle}>
                            <div className={styles.statNumber}>15+</div>
                        </div>
                        <div className={styles.statLabel}>Specialized<br/>Labs</div>
                    </div>

                    <div className={styles.statCircle}>
                        <div className={styles.circle}>
                            <div className={`${styles.statNumber} ${styles.yellow}`}>400+</div>
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

export default SharedCseLayout;