// StudentWelfareOfficials.jsx
import React from 'react';
import { Mail, Phone } from 'lucide-react';
import styles from './StudentWelfare.module.css';
import sunilImage from '../../assets/StudentWelfare/CSE-hodDesk.jpg';
import gulshanImage from '../../assets/StudentWelfare/gulshan_goyal.jpg';
import anilImage from '../../assets/StudentWelfare/anil_vaghmare.jpg';

const StudentWelfare = () => {
    const officials = [
        {
            id: 1,
            name: "Dr. Sunil K. Singh",
            position: "Professor Incharge Student Welfare-cum-Incharge Anti-Ragging Cell",
            email: "sksingh@ccet.ac.in",
            mobile: "9818182457",
            image: sunilImage
        },
        {
            id: 2,
            name: "Dr. Gulshan Goyal",
            position: "President Student Council",
            email: "gulshangoyal@ccet.ac.in",
            mobile: "9417506206",
            image: gulshanImage
        },
        {
            id: 3,
            name: "Dr. Anil Kumar Vaghmare",
            position: "Secretary Student Council",
            email: "anilvaghmare@ccet.ac.in",
            mobile: "6284561607",
            image: anilImage
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {/* Main Heading */}
                <div className={styles.headerSection}>
                    <h1 className={styles.mainHeading}>
                        OFFICIALS at Student Welfare
                    </h1>
                    <div className={styles.underline}></div>
                </div>

                {/* Officials Cards */}
                <div className={styles.cardsGrid}>
                    {officials.map((official, index) => (
                        <div
                            key={official.id}
                            className={`${styles.card} ${styles[`cardDelay${index}`]}`}
                        >
                            {/* Profile Image */}
                            <div className={styles.imageContainer}>
                                <img
                                    src={official.image}
                                    alt={official.name}
                                    className={styles.profileImage}
                                />
                                <div className={styles.imageOverlay}></div>
                            </div>

                            {/* Card Content */}
                            <div className={styles.cardContent}>
                                <h3 className={styles.officialName}>
                                    {official.name}
                                </h3>
                                <p className={styles.position}>
                                    {official.position}
                                </p>

                                {/* Contact Information */}
                                <div className={styles.contactInfo}>
                                    <div className={styles.contactItem}>
                                        <Mail className={styles.contactIcon} />
                                        <a
                                            href={`mailto:${official.email}`}
                                            className={styles.contactLink}
                                        >
                                            {official.email}
                                        </a>
                                    </div>
                                    <div className={styles.contactItem}>
                                        <Phone className={styles.contactIcon} />
                                        <a
                                            href={`tel:${official.mobile}`}
                                            className={styles.contactLink}
                                        >
                                            {official.mobile}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudentWelfare;