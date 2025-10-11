import React, { useState, useEffect } from 'react';
import SharedASLayout from './SharedASLayout';
import styles from './ASSyllabus.module.css';

const ASSyllabus = () => {
    // State to store the fetched syllabus data
    const [syllabusData, setSyllabusData] = useState([]);
    // State to manage loading status
    const [isLoading, setIsLoading] = useState(true);
    // State to manage error status
    const [error, setError] = useState(null);

    // API endpoint
    const API_URL = 'https://ccet.ac.in/api/syllabus.php'; // Assuming this is the correct public endpoint

    useEffect(() => {
        const fetchSyllabus = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                
                // Filter the data for the 'AS' department
                const asSyllabus = data.filter(item => item.department === 'AS');
                
                // Sort by year (descending) to get the latest syllabus first
                asSyllabus.sort((a, b) => b.year.localeCompare(a.year) || b.id.localeCompare(a.id));

                setSyllabusData(asSyllabus);
                setError(null);

            } catch (err) {
                console.error("Failed to fetch syllabus:", err);
                setError("Failed to load syllabus data. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchSyllabus();
    }, []);

    // Find the latest AS syllabus (the first one after sorting)
    const latestASSyllabus = syllabusData.length > 0 ? syllabusData[0] : null;

    // --- Content Rendering Logic ---

    if (isLoading) {
        return (
            <SharedASLayout pageTitle="Syllabus">
                <div className={styles.body}>
                    <h1 className={styles.heading}>Syllabus</h1>
                    <div className={styles.underline}></div>
                    <p>Loading syllabus information...</p>
                </div>
            </SharedASLayout>
        );
    }

    if (error) {
        return (
            <SharedASLayout pageTitle="Syllabus">
                <div className={styles.body}>
                    <h1 className={styles.heading}>Syllabus</h1>
                    <div className={styles.underline}></div>
                    <p className={styles.errorText}>{error}</p>
                </div>
            </SharedASLayout>
        );
    }
    
    // Helper function to render the PDF link/embed
    const renderSyllabus = (item, yearText) => (
        <>
            <div className={styles.yearHeading}>{yearText}</div>
            <div className={styles.pdfContainer}>
                {item ? (
                    <>
                        <p>
                            {/* Provide a download link as a fallback */}
                            <a href={item.pdf} target="_blank" rel="noopener noreferrer" className={styles.pdfLink}>
                                Download {yearText} Syllabus (Year {item.year})
                            </a>
                        </p>
                        {/* EMBED THE PDF USING IFRAME 
                          Note: Some servers prevent embedding PDFs from other domains 
                          using iframes (via X-Frame-Options or Content-Security-Policy headers).
                          If the PDF doesn't load, this is the likely reason.
                        */}
                        <iframe 
                            src={item.pdf} 
                            width="100%" 
                            height="600px" 
                            title={`${yearText} Syllabus`}
                            className={styles.pdfIframe}
                        >
                            {/* Fallback content for browsers that don't support iframes */}
                            <p>Your browser does not support embedded PDF viewers. Please use the download link above.</p>
                        </iframe>
                    </>
                ) : (
                    <p className={styles.noData}>No syllabus found for this year.</p>
                )}
            </div>
        </>
    );

    return (
        <SharedASLayout pageTitle="Syllabus">
            <div className={styles.body}>
                {/* Main Heading */}
                <h1 className={styles.heading}>Syllabus</h1>
                <div className={styles.underline}></div>

                {/* 1st Year Section - Display the latest available AS syllabus (Year 2025) */}
                {renderSyllabus(latestASSyllabus, `1st Year (${latestASSyllabus ? latestASSyllabus.year : '2025'} - Current)`)}
                
                {/* 2nd Year Section - Placeholder for the older syllabus */}
                <div className={styles.yearHeading}>2nd Year (2023–2027)</div>
                <div className={styles.pdfContainer}>
                    <p className={styles.noData}>No specific 2nd Year syllabus found in the current API response for AS department.</p>
                </div>
            </div>
        </SharedASLayout>
    );
};

export default ASSyllabus;