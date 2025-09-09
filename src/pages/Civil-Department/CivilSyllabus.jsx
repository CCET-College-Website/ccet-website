import React from 'react';
import SharedCivilLayout from './SharedCivilLayout';
import styles from './CivilSyllabus.module.css';

const CivilSyllabus = () => {
    return (
        <SharedCivilLayout pageTitle="Syllabus">
            <div className={styles.body}>
                {/* Main Heading */}
                <h1 className={styles.heading}>Syllabus</h1>
                <div className={styles.underline}></div>

                {/* 1st Year Section */}
                <div className={styles.yearHeading}>1st Year (2024–2028)</div>
                <div className={styles.pdfPlaceholder}>
                    PDF Viewer Placeholder (1st Year Syllabus)
                </div>

                {/* 2nd Year Section */}
                <div className={styles.yearHeading}>2nd Year (2023–2027)</div>
                <div className={styles.pdfPlaceholder}>
                    PDF Viewer Placeholder (2nd Year Syllabus)
                </div>
            </div>
        </SharedCivilLayout>
    );
};

export default CivilSyllabus;
