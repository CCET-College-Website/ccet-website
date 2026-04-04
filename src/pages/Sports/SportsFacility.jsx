import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './SportsFacility.module.css';

import sportsBgImage from '../../assets/Sports/Sports-bg.jpg';

const BASE_API_URL = 'https://ccet.ac.in/api/sports.php';
const OFFICIAL_IMAGE_LINK_TYPE = 'official_image';

const SportsFacility = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [carouselImages, setCarouselImages] = useState([]);
    const [teams, setTeams] = useState([]);
    const [officials, setOfficials] = useState([]);
    const [athleticMeetLink, setAthleticMeetLink] = useState(null); // New state for PDF link
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getFullResourceUrl = (path) => {
        if (!path) return '';
        if (path.startsWith('http://') || path.startsWith('https://')) {
            return path;
        }
        return `https://ccet.ac.in/${path.startsWith('/') ? path.slice(1) : path}`;
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            const fetchEntity = async (entity, extraQuery = '') => {
                try {
                    const response = await fetch(`${BASE_API_URL}?entity=${entity}&is_active=true${extraQuery}`);
                    const result = await response.json();

                    if (Array.isArray(result) && result.length > 0) {
                        return result;
                    } else if (result.success === false) {
                        console.warn(`No active ${entity} found: ${result.error}`);
                        return [];
                    } else {
                        return [];
                    }
                } catch (err) {
                    console.error(`Error loading sports ${entity}:`, err);
                    return [];
                }
            };

            const [galleryData, teamsData, officialsData, resultsLinksData, officialLinksData] = await Promise.all([
                fetchEntity('gallery'),
                fetchEntity('teams'),
                fetchEntity('officials'),
                // Fetch the specific 'results' link type
                fetchEntity('links', '&link_type=results'),
                // Fetch the official images link type for image lookup
                fetchEntity('links', `&link_type=${OFFICIAL_IMAGE_LINK_TYPE}`)
            ]);

            const mappedGallery = galleryData.map(item => ({
                src: getFullResourceUrl(item.image_url),
                alt: item.image_alt || 'Sports Image',
                title: item.image_alt || 'Sports Facility',
            }));

            const mappedTeams = teamsData.map((item, index) => ({
                srNo: index + 1,
                team: item.team_name,
                captain: item.captain_name,
                branch: item.branch,
            }));

            const mappedOfficials = officialsData.map(item => {
                const imageLink = officialLinksData.find(link =>
                    link.link_text && item.name &&
                    link.link_text.trim().toLowerCase() === item.name.trim().toLowerCase()
                );

                const imageUrl = imageLink && imageLink.link_url
                    ? getFullResourceUrl(imageLink.link_url)
                    : 'https://via.placeholder.com/400x400?text=No+Image';

                return {
                    ...item,
                    image: imageUrl,
                };
            });

            const pdfLink = resultsLinksData.length > 0 ? resultsLinksData[0] : null;

            setCarouselImages(mappedGallery);
            setTeams(mappedTeams);
            setOfficials(mappedOfficials);
            setAthleticMeetLink(pdfLink);
            setLoading(false);

            if (mappedGallery.length === 0 && mappedTeams.length === 0 && mappedOfficials.length === 0 && !pdfLink) {
                setError("No sports data (gallery, teams, officials, or results) could be loaded from the server.");
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (carouselImages.length === 0) return;
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
        }, 5000);
        return () => clearInterval(slideInterval);
    }, [carouselImages.length]);

    const nextSlide = () => { setCurrentSlide((prev) => (prev + 1) % carouselImages.length); };
    const prevSlide = () => { setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length); };
    const goToSlide = (index) => { setCurrentSlide(index); };

    if (loading) {
        return (
            <div className={styles.pageWrapper}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Sports Facility<div className={styles.underline}></div></h1>
                    </div>
                    <div className="flex justify-center items-center py-16">
                        <span className="text-gray-500">Loading sports data...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (error && carouselImages.length === 0 && teams.length === 0 && officials.length === 0 && !athleticMeetLink) {
        return (
            <div className={styles.pageWrapper}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Sports Facility<div className={styles.underline}></div></h1>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                        <p className="text-red-700">⚠️ {error}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.backgroundImage}>
                <img src={sportsBgImage} alt="Sports Background" />
            </div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        Sports Facility
                        <div className={styles.underline}></div>
                    </h1>
                </div>

                {carouselImages.length > 0 && (
                    <div className={styles.carouselSection}>
                        <div className={styles.carousel}>
                            <div className={styles.carouselContainer}>
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
                                                onError={(e) => {
                                                    e.target.src = 'https://via.placeholder.com/1200x500?text=Image+Load+Error';
                                                }}
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
                            </div>

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
                        </div>
                    </div>
                )}
                {carouselImages.length === 0 && (
                    <p className="text-center text-gray-500 py-4">No active gallery images available.</p>
                )}


                <div className={styles.fitIndiaSection}>
                    <div className={styles.fitIndiaLink}>
                        <Link to="/fit-india" className={styles.linkButton}>
                            Click here to see activities as a part of FIT INDIA movement conducted at CCET.
                        </Link>
                    </div>
                </div>

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
                                {teams.map((team, index) => (
                                    <tr key={index}>
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
                        <p className="text-center text-gray-500 py-4">No active teams data available.</p>
                    )}
                </div>

                <div className={styles.officialSection}>
                    <h2 className={styles.sectionTitle}>Sports Official(s)</h2>
                    <div className={styles.officialCardsContainer}>
                        {officials.length > 0 ? (
                            officials.map((official, index) => (
                                <div key={index} className={styles.officialCard}>
                                    <div className={styles.profileImageContainer}>
                                        <img
                                            src={official.image}
                                            alt={official.name}
                                            className={styles.profileImage}
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/200x200?text=No+Image';
                                            }}
                                        />
                                    </div>
                                    <div className={styles.officialInfo}>
                                        <h3 className={styles.officialName}>{official.name}</h3>
                                        <p className={styles.officialTitle}>{official.designation}</p>
                                        <div className={styles.contactInfo}>
                                            <div className={styles.contactItem}>
                                                <Mail size={16} />
                                                <a href={`mailto:${official.email}`} className={styles.contactLink}>
                                                    {official.email || 'N/A'}
                                                </a>
                                            </div>
                                            <div className={styles.contactItem}>
                                                <Phone size={16} />
                                                <a href={`tel:${official.mobile}`} className={styles.contactLink}>
                                                    {official.mobile || 'N/A'}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 py-4 w-full">No active sports officials data available.</p>
                        )}
                    </div>
                </div>

                <div className={styles.resultsSection}>
                    <h2 className={styles.sectionTitle}>Official Athletic Meet Results</h2>
                    {athleticMeetLink && athleticMeetLink.link_url ? (
                        <div className={styles.pdfContainer}>
                            <embed
                                src={getFullResourceUrl(athleticMeetLink.link_url)}
                                type="application/pdf"
                                className={styles.pdfViewer}
                                title={athleticMeetLink.link_text || "Athletic Meet Results"}
                            />
                        </div>
                    ) : (
                        <p className="text-center text-gray-500 py-4">No official athletic meet results link available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SportsFacility;