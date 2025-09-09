import React from 'react';
import SharedASLayout from './SharedASLayout';
import styles from './ASTimeTable.module.css';

const ASTimeTable = () => {
    return (
        <SharedASLayout pageTitle="Time Table">
            <div className={styles.container}>
                <h1 className={styles.heading}>Time-Table</h1>
                <div className={styles.underline}></div>

                <div className={styles.pdfPlaceholder}>
                    PDF Viewer Placeholder
                </div>
            </div>
        </SharedASLayout>
    );
};

export default ASTimeTable;