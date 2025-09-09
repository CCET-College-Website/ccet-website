import React from 'react';
import SharedMechLayout from './SharedMechLayout';
import styles from './MechLabs.module.css';

const MechLabs = () => {
    const labsData = [
        {
            title: "Computer-Aided Design (CAD) Lab",
            description: "The CAD laboratory of the college is one of the best in the region with state-of-the-art software and hardware. Students work with ANSYS, FLUENT, CATIA, Pro-Engineer, AutoDesk Inventor, and AutoCAD for design and simulation."
        },
        {
            title: "Applied Thermodynamics Lab",
            description: "Equipped with models, cut sections, and experimental setups to familiarize students with actual engines and performance measurement. Students gain hands-on experience with engine efficiency and thermodynamic cycles."
        },
        {
            title: "Mechanics of Materials Lab",
            description: "Provides knowledge to evaluate mechanical properties of materials. Facilities include creep testing, fatigue testing, torsion testing, and hardness testing machines along with basic material testing setups."
        },
        {
            title: "Mechatronics Lab",
            description: "This lab merges mechanical instruments with computers and electronics. Students learn hydraulics and pneumatics with simulation kits, hydraulic training setups, and pneumatic experimental equipment."
        },
        {
            title: "Heat Transfer Lab",
            description: "Demonstrates heat transfer processes like conduction, convection, and radiation. Students also perform experiments on heat exchangers, heat pipes, and calculate heat transfer coefficients and thermal conductivity."
        },
        {
            title: "Fluid Mechanics and Machinery Lab",
            description: "Focuses on studying turbines, pumps, and hydraulic equipment. Equipped with experimental setups to perform practical tests on fluid machinery and analyze their working principles."
        },
        {
            title: "Theory of Machines & Vibrations Lab",
            description: "Equipped with various working models to help students understand concepts of mechanisms, vibrations, and their measurement techniques."
        },
        {
            title: "Refrigeration & Air Conditioning Lab",
            description: "Provides hands-on learning of refrigeration and air conditioning systems. Equipped with refrigeration test rigs, vapour compression/absorption systems, air conditioners, ice plant setups, and cut-section models."
        }
    ];

    return (
        <SharedMechLayout pageTitle="Laboratories">
            <div className={styles.container}>
                <header>
                    <h1 className={styles.mechlabsheading}>Laboratories</h1>
                    <div className={styles.headerLine}></div>
                </header>

                <p className={styles.intro}>
                    Knowledge without practical application is of no use, at least for a Mechanical Engineer.
                    For this, we have all kinds of laboratories which include:
                </p>

                <div className={styles.labsGrid}>
                    {labsData.map((lab, index) => (
                        <div key={index} className={styles.labCard}>
                            <div className={styles.imagePlaceholder}>
                                <span className={styles.dimensionLabel}>385px × 246px</span>
                            </div>
                            <div className={styles.labContent}>
                                <h2 className={styles.labTitle}>{lab.title}</h2>
                                <p className={styles.labDescription}>{lab.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <footer>
                    <p>© 2023 University Laboratories. All rights reserved.</p>
                </footer>
            </div>
        </SharedMechLayout>
    );
};

export default MechLabs;
