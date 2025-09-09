import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import SharedCseLayout from './SharedCseLayout';
import styles from './CseOverview.module.css';

import cseDepartmentImage from '../../assets/CSE-Department/Cse-1.jpg';
import codingCompetitionImage from '../../assets/CSE-Department/Cse-2.jpg';

const CseOverview = () => {
    const animatedElementsRef = useRef([]);

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

    return (
        <SharedCseLayout pageTitle="Overview">
            {/* About Section */}
            <section ref={el => animatedElementsRef.current[0] = el} className={`${styles.aboutSection} ${styles.animateOnScroll}`}>
                <div className={styles.aboutImage}>
                    <img src={cseDepartmentImage} alt="Computer Science Engineering Department" />
                </div>
                <div className={styles.aboutContent}>
                    <h3>ABOUT OUR DEPARTMENT</h3>
                    <div className={styles.orangeLine}></div>
                    <p>The Department of Computer Science and Engineering at CCET is committed to delivering high-quality education and fostering innovation in the field of computing. Our B.E. (CSE) program has been accredited by the National Board of Accreditation (NBA), recognizing our adherence to the highest academic standards and excellence in technical education.<br/><br/>The B.E. (Computer Science and Engineering) program was awarded NBA accreditation on February 12, 2025, demonstrating our commitment to producing competent professionals who meet industry and global standards.</p>
                </div>
            </section>

            {/* Department Info Section */}
            <section className={styles.deptInfo}>
                <div ref={el => animatedElementsRef.current[1] = el} className={`${styles.deptInfoContainer} ${styles.animateOnScroll}`}>
                    <div className={styles.deptInfoHeader}>
                        <h2 style={{fontSize: '40px'}}>Department of Computer Science and Engineering</h2>
                        <p style={{fontSize: '20px'}}>Excellence in education, research, and innovation</p>
                    </div>

                    {/* Vision */}
                    <div ref={el => animatedElementsRef.current[2] = el} className={`${styles.sectionHeading} ${styles.animateOnScroll}`}>
                        <div className={styles.yellowLine}></div>
                        <h3>Vision</h3>
                    </div>
                    <div ref={el => animatedElementsRef.current[3] = el} className={`${styles.infoCard} ${styles.animateOnScroll} ${styles.delay1}`}>
                        <p>
                            To produce self-motivated and globally competent technocrats equipped with computing, innovation, and human values for ever changing world and shape them towards serving the society.
                        </p>
                    </div>

                    {/* Mission */}
                    <div ref={el => animatedElementsRef.current[4] = el} className={`${styles.sectionHeading} ${styles.animateOnScroll}`}>
                        <div className={styles.yellowLine}></div>
                        <h3>Mission</h3>
                    </div>
                    <div ref={el => animatedElementsRef.current[5] = el} className={`${styles.infoCard} ${styles.animateOnScroll} ${styles.delay1}`}>
                        <ul>
                            <li>To make the department a smart centre for learning, innovation and research, creativity, and entrepreneurship for the stakeholders.</li>
                            <li>To inculcate a strong background in mathematical, theoretical, analytical, and practical knowledge in computer science and engineering.</li>
                            <li>To promote interaction with institutions, industries and research organizations to enable them to develop as technocrats, entrepreneurs, and business leaders of the future.</li>
                            <li>To provide a friendly environment while developing interpersonal skills to bring out technocrat's inherent talents for their all-round growth.</li>
                        </ul>
                    </div>

                    {/* Program Outcomes */}
                    <div ref={el => animatedElementsRef.current[6] = el} className={`${styles.sectionHeading} ${styles.animateOnScroll}`}>
                        <div className={styles.yellowLine}></div>
                        <h3>Program Outcomes</h3>
                    </div>
                    <div ref={el => animatedElementsRef.current[7] = el} className={`${styles.infoCard} ${styles.animateOnScroll} ${styles.delay1}`}>
                        <p>Graduates of the Computer Science and Engineering program will demonstrate:</p>
                        <ul>
                            <li>Engineering knowledge to solve complex engineering problems</li>
                            <li>Problem analysis skills using first principles of mathematics and sciences</li>
                            <li>Design solutions considering public health, safety, and environmental factors</li>
                            <li>Ability to conduct investigations using research-based knowledge</li>
                            <li>Proficiency in modern engineering tools and IT resources</li>
                            <li>Understanding of societal, health, safety, and cultural responsibilities</li>
                            <li>Knowledge of environmental impact and sustainable development</li>
                            <li>Commitment to professional ethics and responsibilities</li>
                            <li>Ability to work effectively in teams and multidisciplinary settings</li>
                            <li>Effective communication skills with engineering community and society</li>
                            <li>Project management and finance knowledge</li>
                            <li>Preparation for life-long learning in technological changes</li>
                        </ul>
                    </div>

                    {/* Program Educational Objectives */}
                    <div ref={el => animatedElementsRef.current[8] = el} className={`${styles.sectionHeading} ${styles.animateOnScroll}`}>
                        <div className={styles.yellowLine}></div>
                        <h3>Program Educational Objectives</h3>
                    </div>
                    <div ref={el => animatedElementsRef.current[9] = el} className={`${styles.infoCard} ${styles.animateOnScroll} ${styles.delay1}`}>
                        <ul>
                            <li>Graduates will be technocrats who will be able to apply their mathematical, theoretical, analytical as well as practical skills in the design and implementation of need-based systems.</li>
                            <li>Graduates will go for higher studies and research in technical and management disciplines.</li>
                            <li>Graduates will work as technocrats, entrepreneurs, and business leaders of the future.</li>
                        </ul>
                    </div>

                    {/* Program Specific Outcomes */}
                    <div ref={el => animatedElementsRef.current[10] = el} className={`${styles.sectionHeading} ${styles.animateOnScroll}`}>
                        <div className={styles.yellowLine}></div>
                        <h3>Program Specific Outcomes</h3>
                    </div>
                    <div ref={el => animatedElementsRef.current[11] = el} className={`${styles.infoCard} ${styles.animateOnScroll} ${styles.delay1}`}>
                        <p>Graduates will be able to:</p>
                        <ul>
                            <li>Understand the problem, think of the best suitable approach to solve the problem, develop and evaluate effective solutions.</li>
                            <li>Excel in contemporary technologies being adopted by the industry and academia.</li>
                            <li>Excel in various programming/project competitions and technological challenges laid by professional bodies.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Quick Links Section */}
            <section className={styles.quickLinks}>
                <h2 ref={el => animatedElementsRef.current[12] = el} className={`${styles.sectionTitle} ${styles.animateOnScroll}`}>Quick Links</h2>
                <div className={styles.sectionUnderline} style={{filter: 'none'}}></div>

                <div className={styles.linksGrid}>
                    <Link to="/academics/cse/hod" ref={el => animatedElementsRef.current[13] = el} className={`${styles.linkCard} ${styles.animateOnScroll}`} data-page="HOD Desk">
                        <div className={styles.linkIcon}>
                            <svg viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <h4>HOD Desk</h4>
                    </Link>

                    <Link to="/academics/cse/csefaculty" ref={el => animatedElementsRef.current[14] = el} className={`${styles.linkCard} ${styles.animateOnScroll} ${styles.delay1}`} data-page="Faculty">
                        <div className={styles.linkIcon}>
                            <svg viewBox="0 0 24 24">
                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                            </svg>
                        </div>
                        <h4>Faculty</h4>
                    </Link>

                    <Link to="/academics/cse/csesyllabus" ref={el => animatedElementsRef.current[15] = el} className={`${styles.linkCard} ${styles.animateOnScroll} ${styles.delay2}`} data-page="Syllabus">
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

                    <Link to="/academics/cse/cselabs" ref={el => animatedElementsRef.current[16] = el} className={`${styles.linkCard} ${styles.animateOnScroll}`} data-page="Laboratories">
                        <div className={styles.linkIcon}>
                            <svg viewBox="0 0 24 24">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                            </svg>
                        </div>
                        <h4>Laboratories</h4>
                    </Link>

                    <Link to="/academics/cse/cseresearch" ref={el => animatedElementsRef.current[17] = el} className={`${styles.linkCard} ${styles.animateOnScroll} ${styles.delay1}`} data-page="Research">
                        <div className={styles.linkIcon}>
                            <svg viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="3"/>
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                            </svg>
                        </div>
                        <h4>Research</h4>
                    </Link>

                    <Link to="/academics/cse/csetimetable" ref={el => animatedElementsRef.current[18] = el} className={`${styles.linkCard} ${styles.animateOnScroll} ${styles.delay2}`} data-page="Time Table">
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
                </div>
            </section>

            {/* Events Section */}
            <section className={styles.eventsSection}>
                <h2 ref={el => animatedElementsRef.current[19] = el} className={`${styles.sectionTitle} ${styles.animateOnScroll}`}>Department Events</h2>
                <div className={styles.sectionUnderline} style={{filter: 'none'}}></div>

                <div ref={el => animatedElementsRef.current[20] = el} className={`${styles.eventsHero} ${styles.animateOnScroll}`}>
                    <div className={styles.eventsImage}>
                        <img src={codingCompetitionImage} alt="Coding Competition" />
                    </div>
                    <div className={styles.eventsContent}>
                        <h3>National Coding Championship</h3>
                        <p>Our students won first place in the National Coding Championship with their innovative algorithm that optimizes data processing by 60% while reducing computational complexity.</p>
                        <a href="#" className={styles.learnMoreBtn}>Learn more --&gt;</a>
                    </div>
                </div>

                <div className={styles.eventsCards}>
                    <div ref={el => animatedElementsRef.current[21] = el} className={`${styles.eventCard} ${styles.animateOnScroll}`}>
                        <div className={styles.eventCardHeader}>
                            <h4>Tech Symposium on AI & Machine Learning<br/>18-19 October, 2025</h4>
                        </div>
                        <div className={styles.eventCardContent}>
                            Join industry experts and academicians to discuss the latest trends in artificial intelligence, machine learning, and data science applications.
                        </div>
                    </div>

                    <div ref={el => animatedElementsRef.current[22] = el} className={`${styles.eventCard} ${styles.animateOnScroll} ${styles.delay1}`}>
                        <div className={styles.eventCardHeader}>
                            <h4>Hackathon on Sustainable Tech Solutions<br/>5-6 November, 2025</h4>
                        </div>
                        <div className={styles.eventCardContent}>
                            24-hour hackathon challenging students to develop technological solutions for environmental sustainability and social impact.
                        </div>
                    </div>

                    <div ref={el => animatedElementsRef.current[23] = el} className={`${styles.eventCard} ${styles.animateOnScroll} ${styles.delay2}`}>
                        <div className={styles.eventCardHeader}>
                            <h4>Industry Connect Session<br/>22 November, 2025</h4>
                        </div>
                        <div className={styles.eventCardContent}>
                            Interactive session with leading tech companies for placement opportunities, internships, and industry insights on emerging technologies.
                        </div>
                    </div>
                </div>
            </section>

            {/* Tour Section */}
            <section className={styles.tourSection}>
                <h2 ref={el => animatedElementsRef.current[24] = el} className={`${styles.sectionTitle} ${styles.animateOnScroll}`}>CSE Department Tour</h2>
                <div className={styles.sectionUnderline} style={{filter: 'none'}}></div>

                <div ref={el => animatedElementsRef.current[25] = el} className={`${styles.tourContainer} ${styles.animateOnScroll}`}>
                    <h3>VIDEO / Carousel with pictures</h3>
                </div>
            </section>
        </SharedCseLayout>
    );
};

export default CseOverview;