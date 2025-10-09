// StudentWelfareOfficials.jsx
import React, { useState, useEffect } from 'react';
import { Mail, Phone, Loader, AlertTriangle } from 'lucide-react'; // Added icons for better feedback
import styles from './StudentWelfare.module.css';

// Define the API URL and a base URL for images
const API_URL = 'https://ccet.ac.in/api/student-welfare.php';
// ASSUMPTION: If the API returns a filename (e.g., 'sk_singh.jpg'), 
// this is the base URL to construct the full image path.
const IMAGE_BASE_URL = 'https://ccet.ac.in/img/faculty-cse/'; 

// --- Component Definition ---

const StudentWelfare = () => {
    const [officials, setOfficials] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to construct the full image URL
    const getOfficialImageUrl = (filenameOrUrl) => {
        // Check if the string looks like a full URL already (starts with http)
        if (filenameOrUrl && filenameOrUrl.startsWith('http')) {
            return filenameOrUrl;
        }
        // Otherwise, prepend the base URL to the filename
        return filenameOrUrl ? `${IMAGE_BASE_URL}${filenameOrUrl}` : null;
    };

    useEffect(() => {
        const fetchOfficials = async () => {
            try {
                const response = await fetch(API_URL);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                
                const data = await response.json();
                
                // Process the data: Construct the final image URL
                const processedOfficials = data.map(official => ({
                    ...official, // Spread all existing properties (id, name, email, etc.)
                    // Use the helper function to ensure we get a valid image URL
                    image: getOfficialImageUrl(official.image),
                }));
                
                setOfficials(processedOfficials);
                setError(null);
            } catch (e) {
                console.error("Failed to fetch student welfare officials:", e);
                setError("Failed to load official data. Please check the network connection.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchOfficials();
    }, []);

    // --- Conditional Rendering ---

    if (isLoading) {
        return (
            <div className={styles.container}>
                <div className={styles.loadingState}>
                    <Loader className={styles.loadingIcon} size={32} />
                    <p>Loading officials...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.container}>
                <div className={styles.errorState}>
                    <AlertTriangle className={styles.errorIcon} size={32} />
                    <h2 className={styles.errorMessageHeader}>Data Error</h2>
                    <p className={styles.errorMessage}>{error}</p>
                </div>
            </div>
        );
    }

    if (officials.length === 0) {
        return (
            <div className={styles.container}>
                <p>No student welfare officials found at this time.</p>
            </div>
        );
    }

    // --- Main Render ---

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {/* Main Heading */}
                <div className={styles.headerSection}>
                    <h1 className={styles.mainHeading}>
                        OFFICIALS at Student Welfare
                    </h1>
                    <div className={styles.underline}></div>
                </div>

                {/* Officials Cards */}
                <div className={styles.cardsGrid}>
                    {officials.map((official, index) => (
                        <div
                            key={official.id || index} // Use index as fallback key
                            className={`${styles.card} ${styles[`cardDelay${index}`]}`}
                            role="region"
                            aria-label={`${official.name} contact card`}
                        >
                            {/* Profile Image */}
                            <div className={styles.imageContainer}>
                                <img
                                    src={official.image || "placeholder.jpg"} // Fallback to a local placeholder image if API link is null
                                    alt={`Official photo of ${official.name}`} // Improved accessibility
                                    className={styles.profileImage}
                                    loading="lazy" // Performance improvement
                                />
                                <div className={styles.imageOverlay}></div>
                            </div>

                            {/* Card Content */}
                            <div className={styles.cardContent}>
                                <h3 className={styles.officialName}>
                                    {official.name}
                                </h3>
                                <p className={styles.position}>
                                    {official.position}
                                </p>

                                {/* Contact Information */}
                                <div className={styles.contactInfo}>
                                    {official.email && (
                                        <div className={styles.contactItem}>
                                            <Mail className={styles.contactIcon} />
                                            <a
                                                href={`mailto:${official.email}`}
                                                className={styles.contactLink}
                                            >
                                                {official.email}
                                            </a>
                                        </div>
                                    )}
                                    {official.mobile && (
                                        <div className={styles.contactItem}>
                                            <Phone className={styles.contactIcon} />
                                            <a
                                                href={`tel:${official.mobile}`}
                                                className={styles.contactLink}
                                            >
                                                {official.mobile}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudentWelfare;
