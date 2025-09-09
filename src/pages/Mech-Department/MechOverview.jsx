import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import SharedMechLayout from './SharedMechLayout';
import styles from './MechOverview.module.css';

import mechDepartmentImage from '../../assets/Mech-Department/Mech-1.jpeg';
import robotCompetitionImage from '../../assets/Mech-Department/Mech-2.jpg';

const MechanicalOverview = () => {
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
        <SharedMechLayout pageTitle="Overview">
            {/* About Section */}
            <section ref={el => animatedElementsRef.current[0] = el} className={`${styles.aboutSection} ${styles.animateOnScroll}`}>
                <div className={styles.aboutImage}>
                    <img src={mechDepartmentImage} alt="Mechanical Engineering Department" />
                </div>
                <div className={styles.aboutContent}>
                    <h3>ABOUT OUR DEPARTMENT</h3>
                    <div className={styles.orangeLine}></div>
                    <p>The Department of Mechanical Engineering at CCET is dedicated to excellence in education, research, and innovation. Established in 1985, we have grown to become one of the premier mechanical engineering departments in the region.<br/><br/>Our mission is to prepare students for successful careers in mechanical engineering and related fields by providing a strong foundation in engineering principles, practical skills, and professional ethics.<br/><br/>We offer undergraduate and postgraduate programs that emphasize hands-on learning, critical thinking, and innovative problem-solving to address the complex challenges of modern mechanical systems and manufacturing.</p>
                </div>
            </section>

            {/* Department Info Section */}
            <section className={styles.deptInfo}>
                <div ref={el => animatedElementsRef.current[1] = el} className={`${styles.deptInfoContainer} ${styles.animateOnScroll}`}>
                    <div className={styles.deptInfoHeader}>
                        <h2 style={{fontSize: '40px'}}>Department of Mechanical Engineering</h2>
                        <p style={{fontSize: '20px'}}>Excellence in education, research, and innovation since 1985</p>
                    </div>

                    {/* Vision */}
                    <div ref={el => animatedElementsRef.current[2] = el} className={`${styles.sectionHeading} ${styles.animateOnScroll}`}>
                        <div className={styles.yellowLine}></div>
                        <h3>Vision</h3>
                    </div>
                    <div ref={el => animatedElementsRef.current[3] = el} className={`${styles.infoCard} ${styles.animateOnScroll} ${styles.delay1}`}>
                        <p>
                            To establish an outstanding center of regional and national reputation for providing
                            quality engineering education in mechanical engineering; to produce competent mechanical engineers;
                            and to employ principles of continual quality improvement to enhance the competence of our programs and faculty.
                        </p>
                    </div>

                    {/* Mission */}
                    <div ref={el => animatedElementsRef.current[4] = el} className={`${styles.sectionHeading} ${styles.animateOnScroll}`}>
                        <div className={styles.yellowLine}></div>
                        <h3>Mission</h3>
                    </div>
                    <div ref={el => animatedElementsRef.current[5] = el} className={`${styles.infoCard} ${styles.animateOnScroll} ${styles.delay1}`}>
                        <ul>
                            <li>To serve the nation by providing broad and high-quality education to students for successful professional careers in mechanical engineering.</li>
                            <li>To conduct strong basic and applied research to address national needs in mechanical systems and manufacturing.</li>
                            <li>To serve the industry and mechanical engineering profession through dissemination of knowledge and technical services.</li>
                            <li>To create world-class infrastructure for the enhancement of technical knowledge in the field of Mechanical Engineering.</li>
                        </ul>
                    </div>

                    {/* Program Outcomes */}
                    <div ref={el => animatedElementsRef.current[6] = el} className={`${styles.sectionHeading} ${styles.animateOnScroll}`}>
                        <div className={styles.yellowLine}></div>
                        <h3>Program Outcomes</h3>
                    </div>
                    <div ref={el => animatedElementsRef.current[7] = el} className={`${styles.infoCard} ${styles.animateOnScroll} ${styles.delay1}`}>
                        <p>Graduates of the Mechanical Engineering program will demonstrate:</p>
                        <ul>
                            <li>Technical competence to identify, formulate, and solve complex mechanical engineering problems</li>
                            <li>Ability to design mechanical systems, components, and processes to meet desired needs</li>
                            <li>Proficiency in modern engineering tools, software, and manufacturing technologies</li>
                            <li>Understanding of professional and ethical responsibilities</li>
                            <li>Ability to function effectively on multidisciplinary teams</li>
                            <li>Effective communication and presentation skills</li>
                            <li>Knowledge of contemporary issues and understanding of engineering solutions in global contexts</li>
                        </ul>
                    </div>

                    {/* Program Educational Objectives */}
                    <div ref={el => animatedElementsRef.current[8] = el} className={`${styles.sectionHeading} ${styles.animateOnScroll}`}>
                        <div className={styles.yellowLine}></div>
                        <h3>Program Educational Objectives</h3>
                    </div>
                    <div ref={el => animatedElementsRef.current[9] = el} className={`${styles.infoCard} ${styles.animateOnScroll} ${styles.delay1}`}>
                        <p>
                            The Department of Mechanical Engineering at CCET is excellently suited to meet the ever-changing
                            requirements of engineers with an aptly designed course structure and practical study of
                            various fields including Thermal Engineering, Design Engineering, Manufacturing Engineering,
                            Automobile Engineering, and Robotics.
                        </p>
                        <p>Our graduates, within a few years of graduation, will:</p>
                        <ul>
                            <li>Excel in professional careers in mechanical engineering and related fields</li>
                            <li>Pursue advanced education and research in engineering and other professional fields</li>
                            <li>Demonstrate leadership and innovation in addressing technical, social, environmental, and economic challenges</li>
                            <li>Engage in lifelong learning and professional development</li>
                            <li>Contribute to the development of sustainable mechanical systems and manufacturing processes</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Quick Links Section */}
            <section className={styles.quickLinks}>
                <h2 ref={el => animatedElementsRef.current[10] = el} className={`${styles.sectionTitle} ${styles.animateOnScroll}`}>Quick Links</h2>
                <div className={styles.sectionUnderline} style={{filter: 'none'}}></div>

                <div className={styles.linksGrid}>
                    <Link to="/academics/mechanical/hod" ref={el => animatedElementsRef.current[11] = el} className={`${styles.linkCard} ${styles.animateOnScroll}`} data-page="HOD Desk">
                        <div className={styles.linkIcon}>
                            <svg viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <h4>HOD Desk</h4>
                    </Link>

                    <Link to="/academics/mechanical/mechfaculty" ref={el => animatedElementsRef.current[12] = el} className={`${styles.linkCard} ${styles.animateOnScroll} ${styles.delay1}`} data-page="Faculty">
                        <div className={styles.linkIcon}>
                            <svg viewBox="0 0 24 24">
                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                            </svg>
                        </div>
                        <h4>Faculty</h4>
                    </Link>

                    <Link to="/academics/mechanical/mechsyllabus" ref={el => animatedElementsRef.current[13] = el} className={`${styles.linkCard} ${styles.animateOnScroll} ${styles.delay2}`} data-page="Syllabus">
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

                    <Link to="/academics/mechanical/mechlabs" ref={el => animatedElementsRef.current[14] = el} className={`${styles.linkCard} ${styles.animateOnScroll}`} data-page="Laboratories">
                        <div className={styles.linkIcon}>
                            <svg viewBox="0 0 24 24">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                            </svg>
                        </div>
                        <h4>Laboratories</h4>
                    </Link>

                    <Link to="/academics/mechanical/mechresearch" ref={el => animatedElementsRef.current[15] = el} className={`${styles.linkCard} ${styles.animateOnScroll} ${styles.delay1}`} data-page="Research">
                        <div className={styles.linkIcon}>
                            <svg viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="3"/>
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                            </svg>
                        </div>
                        <h4>Research</h4>
                    </Link>

                    <Link to="/academics/mechanical/mechtimetable" ref={el => animatedElementsRef.current[16] = el} className={`${styles.linkCard} ${styles.animateOnScroll} ${styles.delay2}`} data-page="Time Table">
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
                <h2 ref={el => animatedElementsRef.current[17] = el} className={`${styles.sectionTitle} ${styles.animateOnScroll}`}>Department Events</h2>
                <div className={styles.sectionUnderline} style={{filter: 'none'}}></div>

                <div ref={el => animatedElementsRef.current[18] = el} className={`${styles.eventsHero} ${styles.animateOnScroll}`}>
                    <div className={styles.eventsImage}>
                        <img src={robotCompetitionImage} alt="Robotics Competition" />
                    </div>
                    <div className={styles.eventsContent}>
                        <h3>National Robotics Competition</h3>
                        <p>Our students won first place in the National Robotics Competition with their innovative autonomous robot design that demonstrates advanced manufacturing capabilities and efficiency.</p>
                        <a href="#" className={styles.learnMoreBtn}>Learn more --&gt;</a>
                    </div>
                </div>

                <div className={styles.eventsCards}>
                    <div ref={el => animatedElementsRef.current[19] = el} className={`${styles.eventCard} ${styles.animateOnScroll}`}>
                        <div className={styles.eventCardHeader}>
                            <h4>National Conference on Advanced Manufacturing<br/>18-19 October, 2025</h4>
                        </div>
                        <div className={styles.eventCardContent}>
                            Join industry experts and academicians to discuss the latest trends in advanced manufacturing, automation, and Industry 4.0 technologies.
                        </div>
                    </div>

                    <div ref={el => animatedElementsRef.current[20] = el} className={`${styles.eventCard} ${styles.animateOnScroll} ${styles.delay1}`}>
                        <div className={styles.eventCardHeader}>
                            <h4>Workshop on CAD/CAM and 3D Printing<br/>5-6 November, 2025</h4>
                        </div>
                        <div className={styles.eventCardContent}>
                            Hands-on workshop covering advanced CAD techniques, CAM programming, and 3D printing applications for students and professionals.
                        </div>
                    </div>

                    <div ref={el => animatedElementsRef.current[21] = el} className={`${styles.eventCard} ${styles.animateOnScroll} ${styles.delay2}`}>
                        <div className={styles.eventCardHeader}>
                            <h4>Industry Connect Session<br/>15 December, 2025</h4>
                        </div>
                        <div className={styles.eventCardContent}>
                            Interactive session with leading mechanical engineering companies for placement opportunities, internships, and industry insights.
                        </div>
                    </div>
                </div>
            </section>

            {/* Tour Section */}
            <section className={styles.tourSection}>
                <h2 ref={el => animatedElementsRef.current[22] = el} className={`${styles.sectionTitle} ${styles.animateOnScroll}`}>Mechanical Department Tour</h2>
                <div className={styles.sectionUnderline} style={{filter: 'none'}}></div>

                <div ref={el => animatedElementsRef.current[23] = el} className={`${styles.tourContainer} ${styles.animateOnScroll}`}>
                    <h3>VIDEO / Carousel with pictures</h3>
                </div>
            </section>
        </SharedMechLayout>
    );
};

export default MechanicalOverview;