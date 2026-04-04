import React, { useEffect, useState } from 'react';
import SharedCivilLayout from './SharedCivilLayout';
import styles from './CivilSyllabus.module.css';

const API_BASE_URL = 'https://ccet.ac.in/api/syllabus.php';
const DEPARTMENT = 'CIVIL';

const CivilSyllabus = () => {
    const [syllabuses, setSyllabuses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchSyllabuses();
    }, []);

    const fetchSyllabuses = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_BASE_URL}?department=${DEPARTMENT}`);
            const data = await response.json();

            if (Array.isArray(data) && data.length > 0) {
                setSyllabuses(data);
            } else if (data.success === false) {
                setError(data.error || "No syllabus data found");
            } else {
                setError("No syllabus available for this department");
            }
        } catch (err) {
            setError("Error loading syllabus information");
            console.error("Syllabus fetch error:", err);
        } finally {
            setLoading(false);
        }
    };

    const getFullUrl = (path) => {
        if (!path) return '';
        if (path.startsWith('http://') || path.startsWith('https://')) return path;
        return `https://ccet.ac.in/${path.startsWith('/') ? path.slice(1) : path}`;
    };

    // Generate year label for display
    const getYearLabel = (year) => {
        // Check if it's a simple number
        if (/^\d$/.test(year)) {
            const num = parseInt(year);
            const suffix = num === 1 ? 'st' : num === 2 ? 'nd' : num === 3 ? 'rd' : 'th';
            return `${num}${suffix} Year`;
        }
        // Return as-is for other formats
        return year;
    };

    if (loading) {
        return (
            <SharedCivilLayout pageTitle="Syllabus">
                <div className={styles.body}>
                    <div className={styles.loadingContainer}>
                        <span className={styles.loadingText}>Loading syllabus information...</span>
                    </div>
                </div>
            </SharedCivilLayout>
        );
    }

    return (
        <SharedCivilLayout pageTitle="Syllabus">
            <div className={styles.body}>
                {/* Main Heading */}
                <h1 className={styles.heading}>Syllabus</h1>
                <div className={styles.underline}></div>

                {/* Dynamic Syllabus Sections */}
                {syllabuses.length > 0 ? (
                    syllabuses.map((syllabus) => (
                        <div key={syllabus.id} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div className={styles.yearHeading}>
                                {getYearLabel(syllabus.year)}
                            </div>
                            <div className={styles.pdfContainer}>
                                <iframe
                                    src={getFullUrl(syllabus.pdf)}
                                    className={styles.pdfIframe}
                                    title={`${getYearLabel(syllabus.year)} Syllabus`}
                                    frameBorder="0"
                                />
                                <div style={{ padding: '15px', textAlign: 'center', background: '#F3F7FF', borderTop: '2px solid #e0e0e0' }}>
                                    <a
                                        href={getFullUrl(syllabus.pdf)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.pdfLink}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            padding: '12px 28px',
                                            background: '#063068',
                                            color: 'white',
                                            textDecoration: 'none',
                                            borderRadius: '8px',
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 2px 8px rgba(6, 48, 104, 0.2)'
                                        }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="currentColor"/>
                                        </svg>
                                        Download PDF
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className={styles.pdfPlaceholder}>
                        <div style={{ textAlign: 'center' }}>
                            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.5, marginBottom: '20px' }}>
                                <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" fill="#ccc"/>
                            </svg>
                            <p style={{ margin: 0, fontSize: '18px', color: '#777' }}>
                                {error || 'No syllabus available'}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </SharedCivilLayout>
    );
};

export default CivilSyllabus;