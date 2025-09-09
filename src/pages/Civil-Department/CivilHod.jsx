import React from 'react';
import SharedCivilLayout from './SharedCivilLayout';
import styles from './CivilHod.module.css';

import hodProfileImage from '../../assets/Civil-Department/Civil-Hod-Desk.jpeg';

const CivilHod = () => {
    return (
        <SharedCivilLayout pageTitle="HOD Desk">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>HOD DESK</h1>
                    <div className={styles.underline}></div>
                    <p className={styles.subtitle}>Message from the Head of the Department</p>
                </div>

                <div className={styles.profileSection}>
                    <div className={styles.profileContainer}>
                        <div className={styles.profileBg}></div>
                        <img
                            className={styles.profileImg}
                            src={hodProfileImage}
                            alt="Dr. Rajesh Kumar"
                        />
                    </div>

                    <div className={styles.hodInfo}>
                        <h2 className={styles.hodName}>Dr. Rajesh Kumar</h2>
                        <p className={styles.designation}>Professor & Head</p>
                        <p className={styles.department}>Civil Engineering Department</p>
                    </div>

                    <div className={styles.emailBox}>
                        <div className={styles.emailIcon}>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="#063068"/>
                            </svg>
                        </div>
                        <div className={styles.emailText}>rajeshkumar@ccet.ac.in</div>
                    </div>
                </div>

                <div className={styles.contentBox}>
                    <div className={styles.message}>
                        <p>With technology spreading its domain to all walks of life there is a need to upgrade the ever-widening knowledge base. CCET has risen to the occasion, and resolves to provide talented, skilled and highly competent technical human resource to the industrial society. Education is imparted at the institute in a manner so that each student realizes his responsibility of enhancing the present skills and shaping the future.</p>

                        <p>In its endeavour to foster an optimum blend of self-discipline and consistency, the college provides a robust curriculum to cater to the versatile scenario of the industry. It commits to serve the society with zeal and to fulfil its societal obligations with distinction. With consistent efforts to provide the industry with apt talent, I invite the prospective potential seekers to participate in the campus recruitment program.</p>
                    </div>
                </div>
            </div>
        </SharedCivilLayout>
    );
};

export default CivilHod;
