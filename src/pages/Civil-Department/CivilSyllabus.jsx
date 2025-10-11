import React, { useState, useEffect } from 'react';
import SharedCivilLayout from './SharedCivilLayout';
import styles from './CivilSyllabus.module.css';

const CivilSyllabus = () => {
    // State to store the fetched syllabus data
    const [syllabusData, setSyllabusData] = useState([]);
    // State to manage loading status
    const [isLoading, setIsLoading] = useState(true);
    // State to manage error status
    const [error, setError] = useState(null);

    // API endpoint (Assuming the same endpoint is used for all departments)
    const API_URL = 'https://ccet.ac.in/api/syllabus.php';

    useEffect(() => {
        const fetchSyllabus = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                
                // Filter the data for the 'CIVIL' department
                const civilSyllabus = data.filter(item => item.department === 'CIVIL');
                
                // Sort by year (descending) to logically assign newest to 1st year
                // This helps find the most current syllabus easily
                civilSyllabus.sort((a, b) => b.year.localeCompare(a.year) || b.id.localeCompare(a.id));

                setSyllabusData(civilSyllabus);
                setError(null);

            } catch (err) {
                console.error("Failed to fetch syllabus:", err);
                setError("Failed to load syllabus data. Please check the API source or try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchSyllabus();
    }, []);

    // Find the syllabus items for specific academic years
    // Based on the data you provided earlier, the 2025 CIVIL syllabus is available.
    const firstYearSyllabus = syllabusData.find(item => item.year === '2025') || null;
    
    // Placeholder logic for 2nd Year (adjust year as needed if the API provides older data)
    const secondYearSyllabus = syllabusData.find(item => item.year === '2024' || item.year === '2023') || null;


    // --- Helper function for rendering the PDF block ---
    
    const renderSyllabusContent = (item, yearText, batchYears) => (
        <>
            <div className={styles.yearHeading}>{yearText} ({batchYears})</div>
            <div className={styles.pdfContainer}>
                {item ? (
                    <>
                        <p className={styles.pdfLinkContainer}>
                            {/* Download Link */}
                            <a href={item.pdf} target="_blank" rel="noopener noreferrer" className={styles.pdfLink}>
                                Download {yearText} Syllabus (Year {item.year})
                            </a>
                        </p>
                        {/* EMBED THE PDF: Using a large iframe size (900px height) */}
                        <iframe 
                            src={item.pdf} 
                            width="100%" 
                            height="900px" // Large height for better viewing
                            title={`${yearText} Syllabus`}
                            className={styles.pdfIframe}
                        >
                            {/* Fallback content */}
                            <p>Your browser does not support embedded PDF viewers. Please use the download link above.</p>
                        </iframe>
                    </>
                ) : (
                    // Display placeholder or No Data message if item is null
                    <div className={styles.pdfPlaceholder}>
                        PDF Viewer Placeholder ({yearText} Syllabus)
                    </div>
                )}
            </div>
        </>
    );

    // --- Conditional Rendering for Loading/Error States ---

    if (isLoading) {
        return (
            <SharedCivilLayout pageTitle="Syllabus">
                <div className={styles.body}>
                    <h1 className={styles.heading}>Syllabus</h1>
                    <div className={styles.underline}></div>
                    <p>Loading Civil Engineering syllabus information...</p>
                </div>
            </SharedCivilLayout>
        );
    }

    if (error) {
        return (
            <SharedCivilLayout pageTitle="Syllabus">
                <div className={styles.body}>
                    <h1 className={styles.heading}>Syllabus</h1>
                    <div className={styles.underline}></div>
                    <p className={styles.errorText}>🚨 {error}</p>
                </div>
            </SharedCivilLayout>
        );
    }

    // --- Main Component Render ---
    return (
        <SharedCivilLayout pageTitle="Syllabus">
            <div className={styles.body}>
                {/* Main Heading */}
                <h1 className={styles.heading}>Syllabus</h1>
                <div className={styles.underline}></div>

                {/* 1st Year Section: Display the newest available syllabus */}
                {renderSyllabusContent(
                    firstYearSyllabus, 
                    "1st Year", 
                    "2024–2028"
                )}
                
                {/* 2nd Year Section: Display the next available syllabus or placeholder */}
                {renderSyllabusContent(
                    secondYearSyllabus, 
                    "2nd Year", 
                    "2023–2027"
                )}
            </div>
        </SharedCivilLayout>
    );
};

export default CivilSyllabus;