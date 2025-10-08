import React, { useState, useEffect } from 'react';
import styles from './Forms.module.css';

const Forms = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [forms, setForms] = useState([]);
    const [allForms, setAllForms] = useState([]);
    const [categories, setCategories] = useState(['All']);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const typeDisplayMap = {
        'student': 'Student Forms',
        'faculty': 'Faculty/Staff Forms',
        'sc': 'Student Club Forms',
        'departmental': 'Departmental Forms',
        'tp': 'T & P'
    };

    useEffect(() => {
        fetchAllForms();
    }, []);

    const fetchAllForms = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch('https://ccet.ac.in/api/forms.php');
            const result = await response.json();

            if (result.success) {
                setAllForms(result.data);
                setForms(result.data);

                // Extract unique types (case-insensitive) and create categories
                const uniqueTypes = [...new Set(result.data.map(form => form.type.toLowerCase()))];
                const displayCategories = ['All', ...uniqueTypes.map(type =>
                    typeDisplayMap[type] || type.charAt(0).toUpperCase() + type.slice(1) + ' Forms'
                )];
                setCategories(displayCategories);
            } else {
                setError(result.error || 'Failed to fetch forms');
            }
        } catch (err) {
            setError('Network error: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (activeCategory === 'All') {
            setForms(allForms);
        } else {
            const dbType = Object.keys(typeDisplayMap).find(
                key => typeDisplayMap[key] === activeCategory
            ) || activeCategory.toLowerCase().replace(' forms', '');

            const filtered = allForms.filter(form => form.type.toLowerCase() === dbType);
            setForms(filtered);
        }
    }, [activeCategory, allForms]);

    const handleDownload = (link) => {
        if (link) {
            const path = link.startsWith('/') ? link : `/${link}`;
            const encodedPath = path.split('/').map(segment => encodeURIComponent(segment)).join('/');
            const fullUrl = `https://ccet.ac.in${encodedPath}`;
            window.open(fullUrl, '_blank');
        }
    };

    if (loading) {
        return (
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>FORMS</h1>
                </header>
                <div style={{ textAlign: 'center', padding: '50px' }}>
                    <p>Loading forms...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>FORMS</h1>
                </header>
                <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
                    <p>{error}</p>
                    <button onClick={fetchAllForms} style={{ marginTop: '20px', padding: '10px 20px' }}>
                        Retry
                    </button>
                </div>
            </div>
        );
    }

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

                {forms.map((form, index) => (
                    <div key={index} className={styles.formRow}>
                        <div className={styles.formCell}>
                            <span className={styles.formName}>{form.title}</span>
                        </div>
                        <div className={styles.formCell}>
                            <span className={styles.formDate}>{form['date-issued']}</span>
                        </div>
                        <div className={styles.formCell}>
                            <span className={styles.formCategory}>
                                {typeDisplayMap[form.type] || form.type.charAt(0).toUpperCase() + form.type.slice(1) + ' Forms'}
                            </span>
                        </div>
                        <div className={styles.formCell}>
                            <button
                                className={styles.downloadBtn}
                                onClick={() => handleDownload(form.link)}
                            >
                                Download
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {forms.length === 0 && (
                <div className={styles.noForms}>
                    <p>No forms available in this category.</p>
                </div>
            )}
        </div>
    );
};

export default Forms;