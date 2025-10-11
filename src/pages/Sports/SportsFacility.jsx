import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './SportsFacility.module.css';

// Removed: import profileImage from '../../assets/CSE-Department/sarabjeet_singh.jpg';
// Removed: import sportsBgImage from '../../assets/Sports/Sports-bg.jpg';

const SportsFacility = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [carouselImages, setCarouselImages] = useState([]);
    const [teams, setTeams] = useState([]);
    const [official, setOfficial] = useState(null);
    const [athleticMeetPdfLink, setAthleticMeetPdfLink] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch data from a given API endpoint
    const fetchData = async (url, setData, transform = (data) => data) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setData(transform(data));
        } catch (error) {
            console.error(`Error fetching data from ${url}:`, error);
            // Optionally set a component-wide error state
            setError('Failed to load some data. Please try again.');
        }
    };

    useEffect(() => {
        const fetchAllData = async () => {
            setIsLoading(true);

            // 1. Fetch Gallery Images
            await fetchData(
                'https://ccet.ac.in/api/sports.php?entity=gallery',
                setCarouselImages,
                (data) => data.map(item => ({
                    src: item.image_url,
                    alt: item.image_alt,
                    title: item.image_alt || 'Sports Facility Image'
                }))
            );

            // 2. Fetch Sports Official
            await fetchData(
                'https://ccet.ac.in/api/sports.php?entity=official',
                setOfficial,
                (data) => data.length > 0 ? data[0] : null // Assuming one official
            );

            // 3. Fetch Teams
            await fetchData(
                'https://ccet.ac.in/api/sports.php?entity=teams',
                setTeams,
                (data) => data.map((item, index) => ({
                    srNo: index + 1, // Using index+1 for Sr. No. in the absence of a 'srNo' field
                    team: item.team_name,
                    captain: item.captain_name,
                    branch: item.branch
                }))
            );

            // 4. Fetch PDF Link
            await fetchData(
                'https://ccet.ac.in/api/sports.php?entity=links',
                setAthleticMeetPdfLink,
                (data) => data.find(item => item.link_type === 'PDF')?.link_url || null // Find the first PDF link
            );

            setIsLoading(false);
        };

        fetchAllData();
    }, []);

    // Carousel auto-slide effect
    useEffect(() => {
        if (carouselImages.length > 0) {
            const slideInterval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
            }, 5000);

            return () => clearInterval(slideInterval);
        }
    }, [carouselImages.length]);

    // Carousel navigation handlers
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Render loading or error state
    if (isLoading) {
        return <div className={styles.loading}>Loading Sports Facility data...</div>;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    // Official data for rendering (use fetched data or a placeholder/fallback)
    const officialData = official || {
        name: 'Dr. Sarabjeet Singh (Fallback)',
        designation: 'Sports In-charge',
        email: 'sports@ccet.ac.in',
        mobile: '9463739413'
    };

    // Placeholder for the background image path
    const sportsBgImagePlaceholder = '/placeholder-sports-bg.jpg';
    // Placeholder for the profile image path
    const profileImagePlaceholder = '/placeholder-profile.jpg';


    return (
        <div className={styles.pageWrapper}>
            <div className={styles.backgroundImage}>
                {/* Replaced sportsBgImage with placeholder */}
                <img src={sportsBgImagePlaceholder} alt="Sports Background Placeholder" />
            </div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        Sports Facility
                        <div className={styles.underline}></div>
                    </h1>
                </div>

                {/* Carousel Section */}
                <div className={styles.carouselSection}>
                    <div className={styles.carousel}>
                        <div className={styles.carouselContainer}>
                            {carouselImages.length > 0 ? (
                                <>
                                    <div
                                        className={styles.carouselTrack}
                                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                    >
                                        {carouselImages.map((image, index) => (
                                            <div key={index} className={styles.carouselSlide}>
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className={styles.carouselImage}
                                                />
                                                <div className={styles.carouselCaption}>
                                                    <h3>{image.title}</h3>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        className={`${styles.carouselNav} ${styles.carouselNavPrev}`}
                                        onClick={prevSlide}
                                        aria-label="Previous slide"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        className={`${styles.carouselNav} ${styles.carouselNavNext}`}
                                        onClick={nextSlide}
                                        aria-label="Next slide"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </>
                            ) : (
                                <p>No gallery images available.</p>
                            )}
                        </div>

                        {carouselImages.length > 0 && (
                            <div className={styles.carouselDots}>
                                {carouselImages.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`${styles.carouselDot} ${currentSlide === index ? styles.carouselDotActive : ''}`}
                                        onClick={() => goToSlide(index)}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Fit India Link Section */}
                <div className={styles.fitIndiaSection}>
                    <div className={styles.fitIndiaLink}>
                        <Link to="/fit-india" className={styles.linkButton}>
                            Click here to see activities as a part of FIT INDIA movement conducted at CCET.
                        </Link>
                    </div>
                </div>

                {/* Teams Section */}
                <div className={styles.teamsSection}>
                    <h2 className={styles.sectionTitle}>Existing Teams</h2>
                    {teams.length > 0 ? (
                        <div className={styles.tableContainer}>
                            <table className={styles.teamsTable}>
                                <thead>
                                    <tr>
                                        <th>Sr. No</th>
                                        <th>Team</th>
                                        <th>Captain</th>
                                        <th>Branch</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {teams.map((team) => (
                                        <tr key={team.srNo}>
                                            <td>{team.srNo}</td>
                                            <td>{team.team}</td>
                                            <td>{team.captain}</td>
                                            <td>{team.branch}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p>No existing teams information available.</p>
                    )}
                </div>

                {/* Official Section */}
                <div className={styles.officialSection}>
                    <h2 className={styles.sectionTitle}>Sports Official(s)</h2>
                    {officialData && (
                        <div className={styles.officialCard}>
                            <div className={styles.profileImageContainer}>
                                <img
                                    // Replaced profileImage with placeholder
                                    src={profileImagePlaceholder}
                                    alt={officialData.name}
                                    className={styles.profileImage}
                                />
                            </div>
                            <div className={styles.officialInfo}>
                                <h3 className={styles.officialName}>{officialData.name}</h3>
                                <p className={styles.officialTitle}>{officialData.designation}</p>
                                <div className={styles.contactInfo}>
                                    <div className={styles.contactItem}>
                                        <strong>Email:</strong>
                                        <a href={`mailto:${officialData.email}`} className={styles.contactLink}>
                                            {officialData.email}
                                        </a>
                                    </div>
                                    <div className={styles.contactItem}>
                                        <strong>Mobile:</strong>
                                        <a href={`tel:${officialData.mobile}`} className={styles.contactLink}>
                                            {officialData.mobile}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Results Section */}
                <div className={styles.resultsSection}>
                    <h2 className={styles.sectionTitle}>Official Athletic Meet Results</h2>
                    {athleticMeetPdfLink ? (
                        <div className={styles.pdfContainer}>
                            <embed
                                src={athleticMeetPdfLink}
                                type="application/pdf"
                                className={styles.pdfViewer}
                                title="Athletic Meet Results"
                            />
                        </div>
                    ) : (
                        <p>Athletic Meet Result PDF not available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SportsFacility;



// SportsFacility.jsx