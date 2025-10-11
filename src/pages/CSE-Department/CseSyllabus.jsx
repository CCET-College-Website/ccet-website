import React, { useState, useEffect } from 'react';
import SharedCseLayout from './SharedCseLayout';
import styles from './CseSyllabus.module.css';

const CseSyllabus = () => {
    // State to store the fetched syllabus data
    const [syllabusData, setSyllabusData] = useState([]);
    // State to manage loading status
    const [isLoading, setIsLoading] = useState(true);
    // State to manage error status
    const [error, setError] = useState(null);

    // API endpoint
    const API_URL = 'https://ccet.ac.in/api/syllabus.php';

    useEffect(() => {
        const fetchSyllabus = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                
                // Filter the data for the 'CSE' department
                const cseSyllabus = data.filter(item => item.department === 'CSE');
                
                // Sort by year (descending) to get the latest syllabus first
                // This is crucial for correctly assigning "1st Year" and "2nd Year"
                cseSyllabus.sort((a, b) => b.year.localeCompare(a.year) || b.id.localeCompare(a.id));

                setSyllabusData(cseSyllabus);
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

    // Assuming the first item is the newest (1st Year) and the second is the next oldest (2nd Year)
    // Based on the data you provided earlier, the 2025 CSE syllabus is available.
    const firstYearSyllabus = syllabusData.find(item => item.year === '2025') || null;
    
    // Placeholder logic for 2nd Year (e.g., if API returned 2024, 2023, etc.)
    const secondYearSyllabus = syllabusData.find(item => item.year === '2024' || item.year === '2023') || null;


    // --- Helper function for rendering ---
    
    const renderSyllabusContent = (item, yearText, batchYears) => (
        <>
            <div className={styles.yearHeading}>{yearText} ({batchYears})</div>
            <div className={styles.pdfContainer}>
                {item ? (
                    <>
                        <p>
                            <a href={item.pdf} target="_blank" rel="noopener noreferrer" className={styles.pdfLink}>
                                Download {yearText} Syllabus (Year {item.year})
                            </a>
                        </p>
                        {/* EMBED THE PDF: Use an iframe to display the PDF directly */}
                        <iframe 
                            src={item.pdf} 
                            width="100%" 
                            height="900px" // Set height to a large value for better viewing
                            title={`${yearText} Syllabus`}
                            className={styles.pdfIframe}
                        >
                            {/* Fallback content */}
                            <p>Your browser does not support embedded PDF viewers. Please use the download link above.</p>
                        </iframe>
                    </>
                ) : (
                    <p className={styles.noData}>No syllabus found for {yearText}.</p>
                )}
            </div>
        </>
    );

    // --- Conditional Rendering for Loading/Error States ---

    if (isLoading) {
        return (
            <SharedCseLayout pageTitle="Syllabus">
                <div className={styles.body}>
                    <h1 className={styles.heading}>Syllabus</h1>
                    <div className={styles.underline}></div>
                    <p>Loading syllabus information...</p>
                </div>
            </SharedCseLayout>
        );
    }

    if (error) {
        return (
            <SharedCseLayout pageTitle="Syllabus">
                <div className={styles.body}>
                    <h1 className={styles.heading}>Syllabus</h1>
                    <div className={styles.underline}></div>
                    <p className={styles.errorText}>{error}</p>
                </div>
            </SharedCseLayout>
        );
    }

    // --- Main Component Render ---
    return (
        <SharedCseLayout pageTitle="Syllabus">
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
                
                {/* 2nd Year Section: Display the next available syllabus or a placeholder */}
                {renderSyllabusContent(
                    secondYearSyllabus, 
                    "2nd Year", 
                    "2023–2027"
                )}
            </div>
        </SharedCseLayout>
    );
};

export default CseSyllabus;