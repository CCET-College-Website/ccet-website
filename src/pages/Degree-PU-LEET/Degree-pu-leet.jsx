import React, { useEffect, useState } from "react";
import "./Degree-pu-leet.css";

const DegreeCourseLeet = () => {
    const [programmeData, setProgrammeData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://ccet.ac.in/api/programmes.php?type=leet&status=active")
            .then((response) => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.json();
            })
            .then((data) => {
                console.log(data);
                if (data && data.length > 0) {
                    setProgrammeData(data[0]);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching LEET programme:", err);
                setError(err.message || "Failed to fetch data");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="leet-container">
                <div style={{ textAlign: 'center', padding: '4rem' }}>
                    <p>Loading LEET programme data...</p>
                </div>
            </div>
        );
    }

    if (error || !programmeData) {
        return (
            <div className="leet-container">
                <div style={{ textAlign: 'center', padding: '4rem', color: '#dc3545' }}>
                    <p>Error loading LEET programme data: {error}</p>
                    <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                        Please contact the administrator or try again later.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="leet-container">
            <h1 className="leet-title">{programmeData.title}</h1>

            {programmeData.description && (
                <div
                    className="leet-text"
                    dangerouslySetInnerHTML={{ __html: programmeData.description }}
                />
            )}

            {programmeData.intro_text && (
                <div
                    className="leet-text"
                    dangerouslySetInnerHTML={{ __html: programmeData.intro_text }}
                />
            )}

            {programmeData.additional_info && (
                <div
                    className="leet-text"
                    dangerouslySetInnerHTML={{ __html: programmeData.additional_info }}
                />
            )}

            {programmeData.important_links && programmeData.important_links.length > 0 && (
                <div className="leet-links">
                    <h3>Important Links:</h3>
                    <ul>
                        {programmeData.important_links.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.link_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link.link_text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DegreeCourseLeet;