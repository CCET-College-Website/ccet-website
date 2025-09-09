import React from 'react';
import SharedMechLayout from './SharedMechLayout';
import styles from './MechHod.module.css';

// Import image
import hodProfileImage from '../../assets/Mech-Department/MECH-hodDesk.jpg';

const MechHod = () => {
    return (
        <SharedMechLayout pageTitle="HOD Desk">
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
                            alt="Dr. Jatinder Madan"
                        />
                    </div>

                    <div className={styles.hodInfo}>
                        <h2 className={styles.hodName}>Dr. Jatinder Madan</h2>
                        <p className={styles.designation}>Professor & Head</p>
                        <p className={styles.department}>Mechanical Engineering Department</p>
                    </div>

                    <div className={styles.emailBox}>
                        <div className={styles.emailIcon}>
                            <svg
                                width="20"
                                height="16"
                                viewBox="0 0 20 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18 0H2C0.9 0 0.01 0.9 0.01 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
                                    fill="#063068"
                                />
                            </svg>
                        </div>
                        <div className={styles.emailText}>jatindermadan@ccet.ac.in</div>
                    </div>
                </div>

                <div className={styles.contentBox}>
                    <div className={styles.message}>
                        <p>
                            With technology spreading its domain to all walks of life, there is a
                            need to upgrade and widen the knowledge base. The Department of
                            Mechanical Engineering has risen to the occasion, and resolves to
                            provide talented, skilled and highly competent technical human
                            resource to the society. The department offers a Bachelors of
                            Engineering programme in Mechanical Engineering.
                        </p>

                        <p>
                            The curriculum developed by the Punjab University, Chandigarh is
                            followed to provide up-to-date technical knowledge. The primary focus
                            of the curriculum is to impart technical know-how to students, promote
                            their problem-solving skills and inculcate innovation. The department
                            has a team of highly qualified, experienced, matured and dedicated
                            faculty members who are committed to mentoring students.
                        </p>

                        <p>
                            For further questions after going through this website, please do not
                            hesitate to contact us. You can contact individual faculty members by
                            email, using the addresses shown on the faculty pages. The Department
                            of Mechanical Engineering looks forward to contributing in solving the
                            technological challenges of the society with active participation from
                            all sections of the society.
                        </p>

                        <p>Thank you for visiting us.</p>
                    </div>
                </div>
            </div>
        </SharedMechLayout>
    );
};

export default MechHod;
