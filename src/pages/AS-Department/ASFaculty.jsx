import React from 'react';
import SharedASLayout from './SharedASLayout';
import styles from './ASFaculty.module.css';

import varunGuptaImg from '../../assets/AS-Department/varun_gupta.jpg';
import parulAggarwalImg from '../../assets/AS-Department/parul_aggarwal.jpg';
import manveenKaurImg from '../../assets/AS-Department/manveen_kaur.jpg';
import nehaImg from '../../assets/AS-Department/neha_singla.jpg';

const ASFaculty = () => {
    const facultyData = [
        {
            name: "Dr. Varun Gupta",
            title: "Professor & HOD",
            image: varunGuptaImg,
            qualifications: "B.Tech.(CSE), M.E.(CSE), Ph.D.",
            specialization: "Deep learning, Machine learning and Software Engineering",
            roles: "HOD Applied Sciences, Professor Incharge Admissions, Incharge Institute Publication Cell",
            email: "varungupta@ccet.ac.in",
            phone: "+919646047091",
            linkedin: "https://www.linkedin.com/in/varun-gupta-9537639/",
            room: "Room No. 109, Block-A, Applied Science Department, CCET(Degree Wing)"
        },
        {
            name: "Dr. Parul Aggarwal",
            title: "Assistant Professor",
            image: parulAggarwalImg,
            qualifications: "M.Sc (Math), B.Ed, UGC-NET",
            specialization: "Fluid Dynamics",
            roles: "Joint Sessional I/c, Guest Faculty I/c (Applied Science Department), Library I/c (Applied Science Department)",
            email: "parul@ccet.ac.in",
            phone: "+918437911722",
            room: "Room No. 115, Block-A, Applied Science Department, CCET(Degree Wing)"
        },
        {
            name: "Dr. Manveen Kaur",
            title: "Assistant Professor",
            image: manveenKaurImg,
            qualifications: "M.Sc (Physics), Ph.D.",
            specialization: "Engineering Physics, Nanomaterials",
            roles: "I/c Physics Lab",
            email: "manveenkaur@ccet.ac.in",
            phone: "+919988957007",
            room: "Ground floor, Block-A, Applied Science Department, CCET(Degree Wing)"
        },
        {
            name: "Ms. Neha",
            title: "Assistant Professor",
            image: nehaImg,
            qualifications: "M.Sc. HS, UGC-NET-LS",
            specialization: "Organic Chemistry",
            roles: "I/c attendance (Applied Science Department), I/c computational (Applied Science Department), Class I/c CSE (2nd sem), I/c Chemistry Lab",
            email: "neha@ccet.ac.in",
            phone: "+919646614209",
            room: "Chemistry Lab, Block-A, Applied Science Department, CCET(Degree Wing)"
        }
    ];

    return (
        <SharedASLayout pageTitle="Faculty">
            <div className={styles.pageContainer}>
                <header className={styles.pageHeader}>
                    <h1 className={styles.pageTitle}>Our Faculty</h1>
                    <div className={styles.titleUnderline}></div>
                </header>

                <main className={styles.facultyCards}>
                    {facultyData.map((faculty, index) => (
                        <article key={index} className={styles.facultyCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.profileImageContainer}>
                                    <div className={styles.profileBg}></div>
                                    <img
                                        className={styles.profileImg}
                                        src={faculty.image}
                                        alt={faculty.name}
                                    />
                                </div>
                                <div className={styles.facultyInfo}>
                                    <h2 className={styles.facultyName}>{faculty.name}</h2>
                                    <p className={styles.facultyTitle}>{faculty.title}</p>
                                </div>
                            </div>

                            <div className={styles.cardContent}>
                                <div className={styles.infoSection}>
                                    <h3 className={styles.sectionTitle}>Qualifications:</h3>
                                    <p className={styles.sectionContent}>{faculty.qualifications}</p>
                                </div>

                                <div className={styles.infoSection}>
                                    <h3 className={styles.sectionTitle}>Area of Specialization:</h3>
                                    <p className={styles.sectionContent}>{faculty.specialization}</p>
                                </div>

                                <div className={styles.infoSection}>
                                    <h3 className={styles.sectionTitle}>Additional Roles:</h3>
                                    <p className={styles.sectionContent}>{faculty.roles}</p>
                                </div>

                                <div className={styles.infoSection}>
                                    <h3 className={styles.sectionTitle}>Contact</h3>
                                    <div className={styles.contactInfo}>
                                        <div className={styles.contactItem}>
                                            <div className={styles.icon}>
                                                {/* Email Icon */}
                                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="#063068"/>
                                                </svg>
                                            </div>
                                            <span className={styles.sectionContent}>{faculty.email}</span>
                                        </div>
                                        <div className={styles.contactItem}>
                                            <div className={styles.icon}>
                                                {/* Phone Icon */}
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.5 15C17.5 15.663 17.2366 16.2989 16.7678 16.7678C16.2989 17.2366 15.663 17.5 15 17.5H5C4.33696 17.5 3.70107 17.2366 3.23223 16.7678C2.76339 16.2989 2.5 15.663 2.5 15V5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5H15C15.663 2.5 16.2989 2.76339 16.7678 3.23223C17.2366 3.70107 17.5 4.33696 17.5 5V15Z" stroke="#063068" strokeWidth="1.5"/>
                                                    <path d="M12.5 15C12.5 15.663 12.2366 16.2989 11.7678 16.7678C11.2989 17.2366 10.663 17.5 10 17.5C9.33696 17.5 8.70107 17.2366 8.23223 16.7678C7.76339 16.2989 7.5 15.663 7.5 15" stroke="#063068" strokeWidth="1.5" strokeLinecap="round"/>
                                                    <path d="M7.5 2.5H12.5" stroke="#063068" strokeWidth="1.5" strokeLinecap="round"/>
                                                </svg>
                                            </div>
                                            <span className={styles.sectionContent}>{faculty.phone}</span>
                                        </div>
                                        {faculty.linkedin && (
                                            <div className={styles.contactItem}>
                                                <div className={styles.icon}>
                                                    {/* LinkedIn Icon */}
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#063068" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761
                                                        2.239 5 5 5h14c2.761 0 5-2.239
                                                        5-5v-14c0-2.761-2.239-5-5-5zm-11
                                                        19h-3v-10h3v10zm-1.5-11.268c-.966
                                                        0-1.75-.79-1.75-1.764s.784-1.764
                                                        1.75-1.764 1.75.79
                                                        1.75 1.764-.784 1.764-1.75
                                                        1.764zm13.5 11.268h-3v-5.604c0-1.337-.027-3.059-1.865-3.059-1.865
                                                        0-2.151 1.456-2.151 2.961v5.702h-3v-10h2.881v1.367h.041c.401-.76
                                                        1.379-1.561 2.841-1.561 3.04 0
                                                        3.599 2.002 3.599 4.604v5.59z"/>
                                                    </svg>
                                                </div>
                                                <a href={faculty.linkedin} target="_blank" rel="noopener noreferrer" className={styles.sectionContent}>
                                                    LinkedIn
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                    {faculty.room && (
                                        <p className={styles.sectionContent} style={{marginTop: '10px'}}>
                                            {faculty.room}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </main>
            </div>
        </SharedASLayout>
    );
};

export default ASFaculty;
