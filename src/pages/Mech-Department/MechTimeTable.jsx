import React from 'react';
import SharedMechLayout from './SharedMechLayout';
import styles from './MechTimeTable.module.css';

const MechTimeTable = () => {
    return (
        <SharedMechLayout pageTitle="Time Table">
            <div className={styles.container}>
                <h1 className={styles.heading}>Time-Table</h1>
                <div className={styles.underline}></div>

                <div className={styles.pdfPlaceholder}>
                    PDF Viewer Placeholder
                </div>
            </div>
        </SharedMechLayout>
    );
};

export default MechTimeTable;