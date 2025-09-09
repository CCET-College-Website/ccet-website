import React from 'react';
import SharedCseLayout from './SharedCseLayout';
import styles from './CseTimeTable.module.css';

const CseTimeTable = () => {
    return (
        <SharedCseLayout pageTitle="Time Table">
            <div className={styles.container}>
                <h1 className={styles.heading}>Time-Table</h1>
                <div className={styles.underline}></div>

                <div className={styles.pdfPlaceholder}>
                    PDF Viewer Placeholder
                </div>
            </div>
        </SharedCseLayout>
    );
};

export default CseTimeTable;