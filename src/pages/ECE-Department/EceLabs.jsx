import React, { useEffect, useState } from 'react';
import SharedEceLayout from './SharedEceLayout';
import styles from './EceLabs.module.css';

const API_BASE_URL = 'https://ccet.ac.in/api/laboratories.php';
const DEPARTMENT = 'ECE';

const EceLabs = () => {
    const [labs, setLabs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchLabs();
    }, []);

    const fetchLabs = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_BASE_URL}?department=${DEPARTMENT}`);
            const data = await response.json();

            if (Array.isArray(data) && data.length > 0) {
                setLabs(data);
            } else if (data.success === false) {
                setError(data.error || "No laboratories data found");
            } else {
                setError("No laboratories available for this department");
            }
        } catch (err) {
            setError("Error loading laboratories information");
            console.error("Laboratories fetch error:", err);
        } finally {
            setLoading(false);
        }
    };

    const getFullUrl = (path) => {
        if (!path) return '';
        if (path.startsWith('http://') || path.startsWith('https://')) return path;
        return `https://ccet.ac.in/${path.startsWith('/') ? path.slice(1) : path}`;
    };

    if (loading) {
        return (
            <SharedEceLayout pageTitle="Laboratories">
                <div className={styles.container}>
                    <div className={styles.loadingContainer}>
                        <span className={styles.loadingText}>Loading laboratories information...</span>
                    </div>
                </div>
            </SharedEceLayout>
        );
    }

    return (
        <SharedEceLayout pageTitle="Laboratories">
            <div className={styles.container}>
                <header>
                    <h1 className={styles.ecelabsheading}>Laboratories</h1>
                    <div className={styles.headerLine}></div>
                    <p className={styles.eceintroText}>
                        At ECE Department, students are challenged by a flexible, thought-provoking curriculum and learn from faculty members who are experts in their areas. The courses in Electronics & Communication Engineering are well organized to provide a wide spectrum of choices to the students. The faculty and students have interest in wide range of latest technologies that include Communication Systems, Digital Signal Processing, VLSI Design, Microwave Engineering, Embedded Systems, Analog and Digital Electronics, Microprocessor and Microcontroller, and Fiber Optic Communications. To support the learning and practices in above technological areas, Department of ECE has well-equipped laboratories with various software packages and hardware kits relevant to the development of projects undertaken during the coursework. All the state-of-the-art facilities, resources and guidelines are provided to the students as per their requirement.
                    </p>
                </header>

                {labs.length > 0 ? (
                    <div className={styles.labsGrid}>
                        {labs.map((lab) => (
                            <div key={lab.id} className={styles.labCard}>
                                {lab.lab_image ? (
                                    <div className={styles.imageContainer}>
                                        <img
                                            src={getFullUrl(lab.lab_image)}
                                            alt={lab.lab_name}
                                            className={styles.labImage}
                                        />
                                    </div>
                                ) : (
                                    <div className={styles.imagePlaceholder}>
                                        <span className={styles.dimensionLabel}>385px × 246px</span>
                                    </div>
                                )}
                                <div className={styles.labContent}>
                                    <h2 className={styles.labTitle}>{lab.lab_name}</h2>
                                    <p className={styles.labDescription}>
                                        {lab.lab_description || 'No description available'}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={styles.noDataContainer}>
                        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.5, marginBottom: '20px' }}>
                            <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.18L19.68 8L12 11.82L4.32 8L12 4.18ZM4 9.18L11 12.72V19.82L4 16.18V9.18ZM13 19.82V12.72L20 9.18V16.18L13 19.82Z" fill="#ccc"/>
                        </svg>
                        <p style={{ fontSize: '18px', color: '#777', textAlign: 'center' }}>
                            {error || 'No laboratories data available'}
                        </p>
                    </div>
                )}

                <footer>
                    <p>© 2025 CCET Laboratories. All rights reserved.</p>
                </footer>
            </div>
        </SharedEceLayout>
    );
};

export default EceLabs;