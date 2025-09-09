import React from 'react';
import SharedCivilLayout from './SharedCivilLayout';
import styles from './CivilTimeTable.module.css';

const CivilTimeTable = () => {
    return (
        <SharedCivilLayout pageTitle="Time Table">
            <div className={styles.container}>
                <h1 className={styles.heading}>Time-Table</h1>
                <div className={styles.underline}></div>

                <div className={styles.pdfPlaceholder}>
                    PDF Viewer Placeholder
                </div>
            </div>
        </SharedCivilLayout>
    );
};

export default CivilTimeTable;