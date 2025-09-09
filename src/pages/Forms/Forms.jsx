import React, { useState } from 'react';
import styles from './Forms.module.css';

const Forms = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Departmental Forms', 'T & P', 'Faculty/Staff Forms', 'Student Forms', 'Student Club Forms'];

    const forms = [
        { name: 'Performa for No Dues', date: '2025-08-28', category: 'Student Forms' },
        { name: 'Refund for College/Hostel Security', date: '2024-06-25', category: 'Student Forms' },
        { name: 'Hostel Application Form - Boys', date: '2024-05-26', category: 'Student Forms' },
        { name: 'Hostel Application Form - Girls', date: '2024-05-26', category: 'Student Forms' },
        { name: 'Student Attendance Shortage Undertaking', date: '2024-05-26', category: 'Student Forms' },
        { name: 'Student Leave Application Form', date: '2024-05-26', category: 'Student Forms' },
        { name: 'Proforma Computational', date: '2023-02-20', category: 'Departmental Forms' },
        { name: 'Admission to PhD Programme', date: '2019-10-10', category: 'Student Forms' },
        { name: 'ID Card Performa for PhD Students', date: '2019-10-10', category: 'Student Forms' },
        { name: 'Payment to expert', date: '2019-10-10', category: 'Faculty/Staff Forms' },
        { name: 'Performa for Issue of Certificate', date: '2019-10-10', category: 'Student Forms' },
        { name: 'Permission to Leave Hostel (girls)', date: '2019-10-10', category: 'Student Forms' },
        { name: 'Scholarship Claim', date: '2019-10-10', category: 'Student Forms' },
        { name: 'Event Permission and Financial Sanction by Clubs', date: '2018-09-22', category: 'Student Club Forms' },
        { name: 'Requirement-Repair of Computational Items', date: '2018-09-22', category: 'Departmental Forms' }
    ];

    const filteredForms = activeCategory === 'All'
        ? forms
        : forms.filter(form => form.category === activeCategory);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>FORMS</h1>
            </header>

            <nav className={styles.categoryNav}>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`${styles.categoryBtn} ${
                            activeCategory === category ? styles.active : ''
                        }`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </nav>

            <div className={styles.formsGrid}>
                <div className={styles.tableHeader}>
                    <div className={styles.headerCell}>Form Name</div>
                    <div className={styles.headerCell}>Upload Date</div>
                    <div className={styles.headerCell}>Category</div>
                    <div className={styles.headerCell}>Action</div>
                </div>

                {filteredForms.map((form, index) => (
                    <div key={index} className={styles.formRow}>
                        <div className={styles.formCell}>
                            <span className={styles.formName}>{form.name}</span>
                        </div>
                        <div className={styles.formCell}>
                            <span className={styles.formDate}>{form.date}</span>
                        </div>
                        <div className={styles.formCell}>
                            <span className={styles.formCategory}>{form.category}</span>
                        </div>
                        <div className={styles.formCell}>
                            <button className={styles.downloadBtn}>
                                Download
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredForms.length === 0 && (
                <div className={styles.noForms}>
                    <p>No forms available in this category.</p>
                </div>
            )}
        </div>
    );
};

export default Forms;