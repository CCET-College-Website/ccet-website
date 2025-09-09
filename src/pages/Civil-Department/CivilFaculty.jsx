import React from 'react';
import SharedCivilLayout from './SharedCivilLayout';
import styles from './CivilFaculty.module.css';

import rajeshKumarImg from '../../assets/Civil-Department/rajesh_kumar.jpg';
import aradhanaMethaImg from '../../assets/Civil-Department/amehta.jpg';
import sakibPerwezImg from '../../assets/Civil-Department/sakib_perwez.jpg';
import poonamImg from '../../assets/Civil-Department/poonam.jpg';
import anilKumarImg from '../../assets/Civil-Department/Anil_kumar.jpg';
import karunaSharmaImg from '../../assets/Civil-Department/karuna_sharma.jpg';
import arfatAhmedImg from '../../assets/Civil-Department/arfat_ahmed.jpg';

const Faculty = () => {
    const facultyData = [
        {
            name: "Dr. Rajesh Kumar",
            title: "Professor & Head",
            image: rajeshKumarImg,
            qualifications: "B.E.(Civil Engineering), M.E.(Structural Engineering), Ph.D (IIT Roorkee)",
            specialization: "Structural Engineering (Structure Analysis & Design, SCC and RAC)",
            roles: "President, Students Council (PSC)",
            email: "rajeshkumar@ccet.ac.in",
            phone: "+919478548248",
            room: "Room No.-305B, Block-B, CCET (Degree Wing)"
        },
        {
            name: "Dr. Aradhana Mehta",
            title: "Associate Professor",
            image: aradhanaMethaImg,
            qualifications: "B.E.(Civil Engineering), M.E.(Structural Engineering), Ph.D (IIT Delhi)",
            specialization: "Structural Engineering (Box girder Bridges & Concrete)",
            roles: "Academic Coordinator",
            email: "amehta@ccet.ac.in",
            phone: "+918054977561",
            room: ""
        },
        {
            name: "Mohammad Sakib Perwez Khan",
            title: "Assistant Professor",
            image: sakibPerwezImg,
            qualifications: "B.Tech.(Civil Engineering), M.Tech.(Structural Engineering)",
            specialization: "Structural Engineering, Bridge Engineering, Computer Aided Design",
            roles: "E-Akadamik Departmental Representative",
            email: "sakib786@ccet.ac.in",
            phone: "+917839452836",
            room: "Room No.-418, Block-B, CCET (Degree Wing)"
        },
        {
            name: "Poonam",
            title: "Assistant Professor",
            image: poonamImg,
            qualifications: "B.Tech.(Civil Engineering), M.Tech.(Structural Engineering)",
            specialization: "Structural Engineering (Seismic-Resistant Design of Structures, Repair and Retrofitting of Structures, Sustainable Development)",
            roles: "Incharge: Public Health",
            email: "poonam@ccet.ac.in",
            phone: "+918968399719",
            room: "Room No.-B318, Block-B, CCET (Degree Wing)"
        },
        {
            name: "Anil Kumar",
            title: "Assistant Professor",
            image: anilKumarImg,
            qualifications: "B.Tech.(Civil Engineering), M.Tech.(Structural Engineering)",
            specialization: "Structural Engineering (Blast- and Earthquake-Resistant Structures, Structural Vibration Control, Smart Structures, Uncertainty Quantification and Reliability in Civil Engineering)",
            roles: "Incharge Estate, Incharge Building, Incharge NBA (Civil)",
            email: "anilkumar@ccet.ac.in",
            phone: "+919816290720",
            room: "Room No.-B326, Block-B, CCET (Degree Wing)"
        },
        {
            name: "Karuna Sharma",
            title: "Assistant Professor",
            image: karunaSharmaImg,
            qualifications: "B.E. (Civil), M.E. (Transportation Engineering)",
            specialization: "Highway Engineering, Capacity Building and Pavement design",
            roles: "I/C result regular & reappear, I/C transportation lab, foundation engg lab, geotechnical lab, member IIC of Ccet wing, I/C concrete construction works India skills 2020, I/C 2019 batch",
            email: "karunasharma@ccet.ac.in",
            phone: "+918283833589",
            room: "Room No.-B204, Block-B, CCET (Degree Wing)"
        },
        {
            name: "Arfat Ahmed",
            title: "Assistant Professor",
            image: arfatAhmedImg,
            qualifications: "B.Tech. (Civil Engineering), M.Tech. (Computer Aided Structural Engineering)",
            specialization: "FEM programming, Environmental Engineering domain",
            roles: "Member IQAC Cell",
            email: "arfat@ccet.ac.in",
            phone: "+918860736206",
            room: ""
        }
    ];

    return (
        <SharedCivilLayout pageTitle="Faculty">
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
                                                    <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="#063068"/>
                                                </svg>
                                            </div>
                                            <span className={styles.sectionContent}>{faculty.email}</span>
                                        </div>
                                        <div className={styles.contactItem}>
                                            <div className={styles.icon}>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.5 15C17.5 15.663 17.2366 16.2989 16.7678 16.7678C16.2989 17.2366 15.663 17.5 15 17.5H5C4.33696 17.5 3.70107 17.2366 3.23223 16.7678C2.76339 16.2989 2.5 15.663 2.5 15V5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5H15C15.663 2.5 16.2989 2.76339 16.7678 3.23223C17.2366 3.70107 17.5 4.33696 17.5 5V15Z" stroke="#063068" strokeWidth="1.5"/>
                                                    <path d="M12.5 15C12.5 15.663 12.2366 16.2989 11.7678 16.7678C11.2989 17.2366 10.663 17.5 10 17.5C9.33696 17.5 8.70107 17.2366 8.23223 16.7678C7.76339 16.2989 7.5 15.663 7.5 15" stroke="#063068" strokeWidth="1.5" strokeLinecap="round"/>
                                                    <path d="M7.5 2.5H12.5" stroke="#063068" strokeWidth="1.5" strokeLinecap="round"/>
                                                </svg>
                                            </div>
                                            <span className={styles.sectionContent}>{faculty.phone}</span>
                                        </div>
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
        </SharedCivilLayout>
    );
};

export default Faculty;