import React from 'react';
import SharedCseLayout from './SharedCseLayout';
import styles from './CseFaculty.module.css';

import sunilSinghImg from '../../assets/CSE-Department/sunil_k_singh.jpg';
import manpreetGujralImg from '../../assets/CSE-Department/principal.jpg';
import rbPatelImg from '../../assets/CSE-Department/rb_patel.jpg';
import varunGuptaImg from '../../assets/CSE-Department/varun_gupta.jpg';
import dheerendraSinghImg from '../../assets/CSE-Department/d_singh.jpg';
import gulshanGoyalImg from '../../assets/CSE-Department/gulshan_goyal.jpg';
import sunitaImg from '../../assets/CSE-Department/sunita_prashar.jpg';
import amitChhabraImg from '../../assets/CSE-Department/amit_chhabra.jpg';
import ankitGuptaImg from '../../assets/CSE-Department/ankit_gupta.jpg';
import sarabjeetSinghImg from '../../assets/CSE-Department/sarabjeet_singh.jpg';
import sudhakarKumarImg from '../../assets/CSE-Department/sudhakar_kumar.jpg';
import animeshSinghImg from '../../assets/CSE-Department/AnimeshSingh.jpg';

const CseFaculty = () => {
    const facultyData = [
        {
            name: "Dr. Manpreet Singh Gujral",
            title: "Principal",
            image: manpreetGujralImg,
            qualifications: "B.E.(CSE), M.E.(CSE), Ph.D.",
            specialization: "Computer Networks & Information Security",
            roles: "Principal",
            email: "principal@ccet.ac.in",
            phone: "0172-2750943",
            room: "Principal Office, First Floor, Block-A, CCET (Degree Wing)"
        },
        {
            name: "Dr. Sunil K. Singh",
            title: "Professor & Head",
            image: sunilSinghImg,
            qualifications: "B.E.(CSE), M.E.(CSE), Ph.D.",
            specialization: "High Performance Computing (HPC), LINUX/UNIX, Data Mining, Internet of Things (IoT), Machine Learning, Computer Architecture & Organization",
            roles: "Professor In-charge Institute Public Relation, Faculty Mentor ACM@CCET Student Chapter",
            email: "sksingh@ccet.ac.in",
            phone: "+919818182457",
            room: "Room No. 415, CSE Department, Block-A, CCET (Degree Wing)"
        },
        {
            name: "Dr. R.B. Patel",
            title: "Professor",
            image: rbPatelImg,
            qualifications: "B.E.(CSE), M.E.(CSE), Ph.D.",
            specialization: "Mobile and Distributed Computing and Sensor Networks",
            roles: "Professor I/C Examination and Result",
            email: "rbpatel@ccet.ac.in",
            phone: "+919416932840",
            room: "CSE Department, Block-A, CCET (Degree Wing)"
        },
        {
            name: "Dr. Varun Gupta",
            title: "Professor",
            image: varunGuptaImg,
            qualifications: "B.Tech.(CSE), M.E.(CSE), Ph.D.",
            specialization: "Deep learning, Machine learning, and Software Engineering",
            roles: "HOD Applied Sciences, Professor Incharge Admissions, Incharge Institute Publication Cell",
            email: "varungupta@ccet.ac.in",
            phone: "+919646047091",
            room: "Room no 109, Block-A, CCET (Degree Wing)"
        },
        {
            name: "Dr. Dheerendra Singh",
            title: "Professor",
            image: dheerendraSinghImg,
            qualifications: "B.E.(CSE), M.Tech.(CSE), PhD.",
            specialization: "Cloud Computing, Web Engineering, Database systems, Operating Systems, Data Structures & Programming, UNIX/LINUX Shell Programming, C, C++",
            roles: "Incharge Training & Placement, In-charge Computational, In-charge Website, In-charge E-Cell, Jt. I/C AICTE/AISHE/NIRF@CCET",
            email: "dsingh@ccet.ac.in",
            phone: "+919876439071",
            room: "Room No. 414, CSE Department, Block-A, CCET (Degree Wing)"
        },
        {
            name: "Dr. Gulshan Goyal",
            title: "Assistant Professor",
            image: gulshanGoyalImg,
            qualifications: "B.E.(CSE), M.Tech.(CSE), Ph.D.",
            specialization: "Digital Image Processing, Theory of Computation, Compiler Design, Design and Analysis of Algorithms, Research Methodology, Discrete Structures, Statistical Models for Computer Science, Software Engineering, C, C++, MATLAB",
            roles: "Joint In-charge Sessional, Joint In-charge(Exam & Results): CSE Department, President-Student Council, Member NBA of Committee: CSE Department, Joint In-charge Stationary: CSE Department",
            email: "gulshangoyal@ccet.ac.in",
            phone: "+919417506206",
            room: "Room No. 425, CSE Department, Block-A, CCET (Degree Wing)"
        },
        {
            name: "Dr. Sunita",
            title: "Assistant Professor",
            image: sunitaImg,
            qualifications: "B.E.(CSE), M.E.(CSE), Ph.D.",
            specialization: "Design & Analysis of Algorithm, Data Structures",
            roles: "Assistant Warden(Girls Hostel), Time Table Incharge, Women Grevience Cell, Anti-Ragging",
            email: "sunita@ccet.ac.in",
            phone: "+919041059379",
            room: "Room No. 424, CSE Department, Block-A, CCET (Degree Wing)"
        },
        {
            name: "Dr. Amit Chhabra",
            title: "Assistant Professor",
            image: amitChhabraImg,
            qualifications: "B.E(CSE), M.E(CSE), Ph.D.",
            specialization: "Theory Of Computation, Compiler Design, Discrete Structure, Design, Analysis and Algorithm, Wireless Networks",
            roles: "Nodal Officer ICT, Incharge AICTE/AISHE/NIRF Portal",
            email: "amitchhabra@ccet.ac.in",
            phone: "+919888623825",
            room: "Room No. 421, CSE Department, Block-A, CCET (Degree Wing)"
        },
        {
            name: "Dr. Ankit Gupta",
            title: "Assistant Professor",
            image: ankitGuptaImg,
            qualifications: "B.E.(CSE), M.Tech(CSE), Ph.D.",
            specialization: "Artificial Intelligence, Web Intelligence, Web Analytics, Multi Criteria Decision Making, Information Retrieval",
            roles: "Innovation Activity Coordinator-Institution Innovation Council, CCET, Faculty Coordinator, Training and Placement-CSE Dept, Jt. I/C-Industry Institute Relationship Cell, Faculty In-charge CSE 2nd yr (2020-2024 Batch), Nodal Officer- Smart India Hackathon, Member- NISP Implementation Committee, Summer Training coordinator-CSE, Nodal Officer- Vidyanjali Higher Education Volunteer Program",
            email: "ankit@ccet.ac.in",
            phone: "+919412314479",
            room: "Room No. 423, CSE Department, Block-A, CCET (Degree Wing)"
        },
        {
            name: "Dr. Sarabjeet Singh",
            title: "Assistant Professor",
            image: sarabjeetSinghImg,
            qualifications: "B.E.(CSE), M.E.(CSE), Ph.D.",
            specialization: "High Performance Computing, Computer Graphics, C, C++, CUDA-C",
            roles: "Assistant Professor, Incharge Sports, I/C Networking, NSS Program officer",
            email: "ssingh@ccet.ac.in",
            phone: "+919463739413",
            room: "Room No. 426, CSE Department, Block-A, CCET (Degree Wing)"
        },
        {
            name: "Dr. Sudhakar Kumar",
            title: "Assistant Professor",
            image: sudhakarKumarImg,
            qualifications: "Ph.D. (CSE), M.Tech.(CSE), B.Tech.(CSE)",
            specialization: "High Performance Computing (Algorithm), Compiler Optimization, Machine Learning, Artificial Intelligence, Human Computer Interaction",
            roles: "Faculty Mentor ACM@CCET Student Chapter",
            email: "sudhakar@ccet.ac.in",
            phone: "+918434518635",
            room: "Room No. 416, CSE Department, Block-A, CCET (Degree Wing)"
        },
        {
            name: "Er. Animesh Singh",
            title: "Assistant Professor",
            image: animeshSinghImg,
            qualifications: "B.E.(CSE), M.Tech. (CSE), Pursuing Ph.D.",
            specialization: "Image Processing, Software Engg., Computer System Architecture, C/C++",
            roles: "Reappear Result Incharge, E-Tender Incharge, Department Minutes of Meeting Incharge",
            email: "animeshsingh@ccet.ac.in",
            phone: "+919584035345",
            room: "Room No. 422, CSE Department, Block-A, CCET (Degree Wing)"
        }
    ];

    return (
        <SharedCseLayout pageTitle="Faculty">
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
                                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <span>{faculty.email}</span>
                                        </div>
                                        <div className={styles.contactItem}>
                                            <div className={styles.icon}>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.3889 4C16.0249 4 14.7269 4.516 13.7629 5.48L12.7049 6.536C10.7919 8.448 9.55988 9.68 7.64588 11.592L6.58988 12.648C5.62588 13.614 5.10988 14.912 5.10988 16.276C5.10988 17.64 5.62588 18.938 6.58988 19.902C7.55388 20.866 8.85188 21.382 10.2159 21.382C11.5799 21.382 12.8779 20.866 13.8419 19.902L14.8979 18.846C16.8099 16.932 18.0419 15.7 19.9539 13.786L21.0099 12.73C21.9759 11.766 22.4919 10.468 22.4919 9.104C22.4919 7.74 21.9759 6.442 21.0099 5.478C20.0459 4.516 18.7529 4 17.3889 4Z" fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <span>{faculty.phone}</span>
                                        </div>
                                        <div className={styles.contactItem}>
                                            <div className={styles.icon}>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 4C7.79 4 6 5.79 6 8C6 10.21 7.79 12 10 12C12.21 12 14 10.21 14 8C14 5.79 12.21 4 10 4ZM10 10C8.9 10 8 9.1 8 8C8 6.9 8.9 6 10 6C11.1 6 12 6.9 12 8C12 9.1 11.1 10 10 10Z" fill="currentColor"/>
                                                </svg>
                                            </div>
                                            <span>{faculty.room}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </main>
            </div>
        </SharedCseLayout>
    );
};

export default CseFaculty;