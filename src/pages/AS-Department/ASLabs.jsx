import React from 'react';
import SharedASLayout from './SharedASLayout';
import styles from './ASLabs.module.css';

const ASLabs = () => {
    const labsData = [
        {
            title: "Physics Lab",
            description:
                "Physics, the most fundamental physical science, is based upon the exact measurement and is concerned with the basic principles of the universe. It is the foundation on which engineering, technology and the other sciences – astronomy, biology, chemistry and geology – are based. Physics Lab in CCET is spacious and well equipped with the latest apparatus, instruments and experiments to be performed as per the Panjab University curriculum. The students are given the exposure on the experiments on Optics, Measuring Instruments, Quantum and Solid State Physics."
        },
        {
            title: "Chemistry Lab",
            description:
                "Chemistry laboratory is equipped with the equipment to perform the experiments as per Panjab University requirements. The basic aim of Chemistry laboratory is to impart knowledge about the chemical properties of engineering materials and methods for manipulating the properties."
        },
        {
            title: "Communication Skills Lab",
            description:
                "Communication is the epitome of human civilization. An individual's ability to communicate effectively determines his success. Communication Skills Workshop lab in CCET is equipped with LCD TV, DVD, OHP Projector, LCD Projector, Microphone, Home Theatre and Audio System. The lab is being upgraded to have latest language software and audio-visual aids."
        }
    ];

    return (
        <SharedASLayout pageTitle="Laboratories">
            <div className={styles.container}>
                <header>
                    <h1 className={styles.aslabsheading}>Laboratories</h1>
                    <div className={styles.headerLine}></div>
                </header>

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
        </SharedASLayout>
    );
};

export default ASLabs;
