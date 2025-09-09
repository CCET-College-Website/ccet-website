import React from 'react';
import SharedMechLayout from './SharedMechLayout';
import styles from './MechFaculty.module.css';

// Import faculty images (replace with actual images when available)
import hodImg from '../../assets/Mech-Department/jatinder_madan.jpg';
import vettivelImg from '../../assets/Mech-Department/vettivel_sc.jpg';
import radheyShamImg from '../../assets/Mech-Department/radhey_sham.jpg';
import mukeshImg from '../../assets/Mech-Department/mukesh_kumar.jpg';
import vinodImg from '../../assets/Mech-Department/vinod_chauhan.jpg';
import ashwaniImg from '../../assets/Mech-Department/ashwani_kumar.jpg';
import nipunImg from '../../assets/Mech-Department/nipun_sharma.jpg';

const MechFaculty = () => {
    const facultyData = [
        {
            name: "Dr. Jatinder Madan",
            title: "Professor and HOD",
            image: hodImg,
            qualifications: "B.E., M.E., Ph.D.",
            specialization: "Sustainable Design and Manufacturing, CAD/CAM, Design Automation, DFMA, Smart Manufacturing, Product Design and Development",
            roles: "Professor In-charge Academic Affairs, ASME Faculty Coordinator, Head Mechanical Engineering Department, Chairman Technical Purchase Committee",
            email: "jatindermadan@ccet.ac.in",
            phone: "+91-9041291970",
            room: "Professor and Head Mechanical Engineering Department, Room No. B 308, Chandigarh College of Engineering and Technology, Sector 26, Chandigarh 160019"
        },
        {
            name: "Dr. Vettivel S C",
            title: "Assistant Professor",
            image: vettivelImg,
            qualifications: "B.E.(Mech.), M.E. (Prod. Engineering), Ph.D. (Mech. Engineering)",
            specialization: "Powder Metallurgy, Nano Composite, Smart Manufacturing, Tribology, Coating of Materials and Production Engineering",
            roles: "Furniture Incharge, Nodal officer ELC, Nodal officer Buddy Program",
            email: "scvettivel@ccet.ac.in",
            phone: "+91-9865822376",
            room: "Room No. 310, Second Floor, Block - B, Department of Mechanical Engineering, CCET (Degree Wing) Sector 26, Chandigarh"
        },
        {
            name: "Dr. Radhey Sham",
            title: "Assistant Professor",
            image: radheyShamImg,
            qualifications: "B.E. (Mechanical Engineering), M.E. (CAD/CAM & Robotics), Ph.D. (Mechanical Engineering)",
            specialization: "Thermal Engineering, Cryogenics, IC Engines",
            roles: "NA",
            email: "radheysham@ccet.ac.in",
            phone: "9888040982",
            room: "Room No. 325, Second Floor, Block - B, Department of Mechanical Engineering, CCET (Degree Wing) Sector 26, Chandigarh"
        },
        {
            name: "Dr. Mukesh Kumar",
            title: "Assistant Professor",
            image: mukeshImg,
            qualifications: "B.Tech.(Mech.), M.E.(Prod. Engineering), Ph.D. (Mech. Engineering)",
            specialization: "Production Engineering",
            roles: "NA",
            email: "mukeshkumar@ccet.ac.in",
            phone: "9478420561",
            room: "Room No. 417, Block - B, Department of Mechanical Engineering, CCET (Degree Wing) Sector 26, Chandigarh"
        },
        {
            name: "Er. Vinod Chauhan",
            title: "Assistant Professor",
            image: vinodImg,
            qualifications: "M.E. (Mechanical), B. Tech. (Mechanical)",
            specialization: "Design of Mechanical Equipments, Mechanics of Materials, Theory of Machines",
            roles: "Incharge - Public Health, Incharge (Fire-Fighting, Water Coolers & Air Conditioners), Member - NSS, Class Incharge 2014 Batch (ME), Lab Incharge (MOM Lab, EG Lab, Project Lab)",
            email: "vinodchauhan@ccet.ac.in",
            phone: "9466736896",
            room: "Room No. 314, Block-B, Department of Mechanical Engineering, CCET (Degree Wing) Sector 26, Chandigarh"
        },
        {
            name: "Dr. Ashwani Kumar",
            title: "Assistant Professor",
            image: ashwaniImg,
            qualifications: "Ph.D (Mechanical Engineering), M.E. (Mechanical Engineering), B. Tech. (Mechanical Engineering)",
            specialization: "Thermal, Design, MR Fluids",
            roles: "In-charge Technical Club (Mechanical Engineering), In-charge Training (Mechanical Engineering)",
            email: "ashwanikumar@ccet.ac.in",
            phone: "9872823250",
            room: "Room No. 301 (CAD Lab-1), Block - B, Department of Mechanical Engineering, CCET (Degree Wing) Sector 26, Chandigarh"
        },
        {
            name: "Nipun Sharma",
            title: "Assistant Professor",
            image: nipunImg,
            qualifications: "B. Tech. (Mech.), M. Tech. (Mech. & Machine Design) Notification pending",
            specialization: "Machine Design",
            roles: "In-charge of: Results Re-appear, Sports, Air Conditioners, Water Purifier, Fire Fighting, Water Coolers",
            email: "nipun@ccet.ac.in",
            phone: "9877726260",
            room: "Department of Mechanical Engineering, CCET, Sector-26, Chandigarh"
        }
    ];

    return (
        <SharedMechLayout pageTitle="Faculty">
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
                                            <span className={styles.sectionContent}>{faculty.email}</span>
                                        </div>
                                        <div className={styles.contactItem}>
                                            <span className={styles.sectionContent}>{faculty.phone}</span>
                                        </div>
                                    </div>
                                    {faculty.room && (
                                        <p className={styles.sectionContent} style={{ marginTop: '10px' }}>
                                            {faculty.room}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </main>
            </div>
        </SharedMechLayout>
    );
};

export default MechFaculty;
