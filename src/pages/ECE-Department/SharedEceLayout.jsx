import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import styles from './SharedEceLayout.module.css';

const SharedEceLayout = ({ children, pageTitle }) => {
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

  const getCurrentPageName = () => {
    const path = location.pathname;
    if (path.includes('overview')) return 'Overview';
    if (path.includes('hod')) return 'HOD Desk';
    if (path.includes('ecefaculty')) return 'Faculty';
    if (path.includes('ecetimetable')) return 'Time Table';
    if (path.includes('ecesyllabus')) return 'Syllabus';
    if (path.includes('ecelabs')) return 'Laboratories';
    if (path.includes('eceresearch')) return 'Research';
    return pageTitle || 'Overview';
  };

  return (
      <div className={styles.container}>
        <div className={styles.contentBg}></div>

        {!isMobileMenuOpen && (
            <div className={styles.mobileMenuButton} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              Quick Links
            </div>
        )}

        <div className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.active : ''}`}
             onClick={() => setIsMobileMenuOpen(false)}>
        </div>

        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
          <h3>ECE Department Quick Links</h3>
          <nav className={styles.mobileNav}>
            <Link to="/academics/ece/overview" onClick={() => setIsMobileMenuOpen(false)}>Overview</Link>
            <Link to="/academics/ece/hod" onClick={() => setIsMobileMenuOpen(false)}>HOD Desk</Link>
            <Link to="/academics/ece/ecefaculty" onClick={() => setIsMobileMenuOpen(false)}>Faculty</Link>
            <Link to="/academics/ece/ecetimetable" onClick={() => setIsMobileMenuOpen(false)}>Time Table</Link>
            <Link to="/academics/ece/ecesyllabus" onClick={() => setIsMobileMenuOpen(false)}>Syllabus</Link>
            <Link to="/academics/ece/ecelabs" onClick={() => setIsMobileMenuOpen(false)}>Laboratories</Link>
            <Link to="/academics/ece/eceresearch" onClick={() => setIsMobileMenuOpen(false)}>Research</Link>
          </nav>
          <div className={styles.closeButton} onClick={() => setIsMobileMenuOpen(false)}>
            Close
          </div>
        </div>

        <section className={styles.hero}>
          <nav className={styles.heroNav}>
            <Link to="/academics/ece/overview">Overview</Link>
            <Link to="/academics/ece/hod">HOD Desk</Link>
            <Link to="/academics/ece/ecefaculty">Faculty</Link>
            <Link to="/academics/ece/ecetimetable">Time Table</Link>
            <Link to="/academics/ece/ecesyllabus">Syllabus</Link>
            <Link to="/academics/ece/ecelabs">Laboratories</Link>
            <Link to="/academics/ece/eceresearch">Research</Link>
          </nav>

          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>Electronics & Communication Engineering Department</h1>
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
                <div className={`${styles.statNumber} ${styles.orange}`}>12+</div>
              </div>
              <div className={styles.statLabel}>Faculty Members</div>
            </div>

            <div className={styles.statCircle}>
              <div className={styles.circle}>
                <div className={styles.statNumber}>10+</div>
              </div>
              <div className={styles.statLabel}>Specialized<br/>Labs</div>
            </div>

            <div className={styles.statCircle}>
              <div className={styles.circle}>
                <div className={`${styles.statNumber} ${styles.orange}`}>300+</div>
              </div>
              <div className={styles.statLabel}>Students</div>
            </div>
          </div>

          <div className={styles.currentPageIndicator}>
            {getCurrentPageName()}
          </div>
        </section>

        <div className={styles.pageContent}>
          {children}
        </div>
      </div>
  );
};

export default SharedEceLayout;