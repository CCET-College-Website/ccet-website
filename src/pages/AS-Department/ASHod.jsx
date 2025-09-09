import React from 'react';
import SharedASLayout from './SharedASLayout';
import styles from './ASHod.module.css';

import hodProfileImage from '../../assets/AS-Department/varun_gupta.jpg';

const ASHod = () => {
    return (
        <SharedASLayout pageTitle="HOD Desk">
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
                            alt="Dr. Varun Gupta"
                        />
                    </div>

                    <div className={styles.hodInfo}>
                        <h2 className={styles.hodName}>Dr. Varun Gupta</h2>
                        <p className={styles.designation}>Professor & Head</p>
                        <p className={styles.department}>Applied Science Department</p>
                    </div>

                    <div className={styles.emailBox}>
                        <div className={styles.emailIcon}>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="#063068"/>
                            </svg>
                        </div>
                        <div className={styles.emailText}>varungupta@ccet.ac.in</div>
                    </div>
                </div>

                <div className={styles.contentBox}>
                    <div className={styles.message}>
                        <p>
                            Greetings!!!! It is a matter of great privilege and pleasure for me to pen down my greetings
                            for all the students & their parents on behalf of the Department of Applied Science, CCET Chandigarh.
                            It is well known fact that keeping pace with the ever changing technology is most challenging.
                            Applied science is one such field which is growing up in an eye-blinking speed, has become an
                            integral component of almost all the existing fields. A number of studies on the subject proved
                            that computer engineers are playing a vital role in technological enlargement at the global level.
                        </p>

                        <p>
                            The basic objective of Applied Science department is to provide students with a learning environment
                            keeping the changing landscape of the field in mind with the objective to enable the outgoing students
                            to take the lead role in steady and rapid advances in computing technologies. At Applied Science
                            Department, students are subjected to continuous challenges by providing a flexible yet
                            thought-provoking curriculum and learned guidance from extremely talented and experienced faculty
                            members who are experts in their respective areas. The courses in the Applied Science department are
                            organized meticulously to provide a wide spectrum of choices to the students. I am confident that
                            students of this college will emerge as core technological resources to the society at large.
                            All the Best!!
                        </p>
                    </div>
                </div>
            </div>
        </SharedASLayout>
    );
};

export default ASHod;
