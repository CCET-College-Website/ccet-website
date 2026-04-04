import React, { useState, useEffect } from 'react';
import './Scholarship.css';

const BASE_API_URL = 'https://ccet.ac.in/api/scholarships.php';

const Scholarship = () => {
    const [incharges, setIncharges] = useState([]);
    const [infoLinks, setInfoLinks] = useState([]);
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

            // Helper function to fetch data for a specific table
            const fetchEntity = async (table, extraQuery = '') => {
                try {
                    const response = await fetch(`${BASE_API_URL}?table=${table}&is_active=true${extraQuery}`);
                    const result = await response.json();

                    if (Array.isArray(result) && result.length > 0) {
                        return result;
                    } else if (result.success === false) {
                        if (result.error !== "No records found with that keyword" && result.error !== "No filter provided (id/email/keyword required)") {
                            console.warn(`No active ${table} found: ${result.error}`);
                        }
                        return [];
                    } else {
                        return [];
                    }
                } catch (err) {
                    console.error(`Error loading scholarship ${table}:`, err);
                    return [];
                }
            };

            const [inchargeData, infoData] = await Promise.all([
                fetchEntity('incharge'),
                fetchEntity('info')
            ]);

            const mappedIncharges = inchargeData.map(item => ({
                ...item,
                imageUrl: item.image
                    ? getFullResourceUrl(item.image)
                    : 'https://via.placeholder.com/200x200?text=Incharge+Image',
            }));

            setIncharges(mappedIncharges);

            const mappedInfoLinks = infoData.map(item => ({
                title: item.title,
                url: getFullResourceUrl(item.file_url),
            }));
            setInfoLinks(mappedInfoLinks);

            setLoading(false);

            if (inchargeData.length === 0 && infoData.length === 0) {
                setError("No scholarship data could be loaded from the server.");
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="scholarship-section" style={{textAlign: 'center', padding: '50px'}}>
                <h1>Scholarships</h1>
                <p>Loading scholarship data...</p>
            </div>
        );
    }

    return (
        <div>
            <section className="scholarship-section">
                <h1>Scholarships</h1>
                <h3>Scholarship Incharge{incharges.length > 1 ? 's' : ''}</h3>

                {incharges.length > 0 ? (
                    incharges.map((incharge, index) => (
                        <div className="scholarship-card" key={index}>
                            <img
                                src={incharge.imageUrl}
                                alt={incharge.name}
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/200x200?text=Incharge+Image'; }}
                            />
                            <div className="card-content">
                                <h4>{incharge.name}</h4>
                                <p><em>{incharge.designation}</em></p>
                                <p>Email: <a href={`mailto:${incharge.email}`}>{incharge.email}</a></p>
                            </div>
                        </div>
                    ))
                ) : (
                    error ? (
                        <p style={{color: 'red'}}>Error: {error}</p>
                    ) : (
                        <p>No active scholarship incharge found.</p>
                    )
                )}

                <div className="related-info">
                    <h3>Related Information:</h3>
                    {infoLinks.length > 0 ? (
                        <ul>
                            {infoLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No related scholarship documents found.</p>
                    )}
                </div>
            </section>

            <footer className="footer">
                <p>&copy; 2025 Chandigarh College of Engineering and Technology</p>
            </footer>
        </div>
    );
};

export default Scholarship;