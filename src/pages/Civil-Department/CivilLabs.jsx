import React from 'react';
import SharedCivilLayout from './SharedCivilLayout';
import styles from './CivilLabs.module.css';

const CivilLabs = () => {
    const labsData = [
        {
            title: "Fluid Mechanics Lab",
            description: "The lab gives an exposure to the students in the realm of fluid mechanics by providing an insight into the theoretical vicissitudes of the subject."
        },
        {
            title: "Environmental Engineering Lab",
            description: "Management of environmental resources to protect health and the systems that support life is one of the biggest challenges facing modern society. Students are trained to use various equipments of water testing and sewerage testing like spectrophotometer, COD digestion assembly, BOD incubator, Muffle Furnace, Conductivity meter etc."
        },
        {
            title: "Civil CAD Lab",
            description: "The CAD lab is equipped with 24 latest configuration TFTs (19\"). Students have been given the opportunity to use latest softwares for building drawings viz. Autocad, Staad Pro, Ansys."
        },
        {
            title: "RCC Lab",
            description: "RCC lab is fully equipped with state of-art equipments like Automatic Compression Testing machine and Flexural strength testing machines, tile testing machine, rebound hammer etc for conducting various tests on cement, concrete, bricks and tiles."
        },
        {
            title: "Soil Mechanics Lab",
            description: "Soil testing is an important part of analysis and design in Soil Engineering. A proper evaluation of soil samples and determination of relevant soil properties simulating field loading conditions are essential components of the practice of foundation engineering which is the base of Civil Engineering. The lab provides all essentials to the students to pursue the integral study of various soil testing methods and its related properties."
        },
        {
            title: "Survey Lab",
            description: "Survey lab is equipped with latest instruments like Total Station, Auto Level, Electronics Theodolites and other survey related instruments. Students are given the opportunity to get themselves acquainted with GIS software , ARC INFO and GPS."
        }
    ];

    return (
        <SharedCivilLayout pageTitle="Laboratories">
            <div className={styles.container}>
                <header>
                    <h1 className={styles.civillabsheading}>Laboratories</h1>
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
        </SharedCivilLayout>
    );
};

export default CivilLabs;
