// Scholarship.jsx

import React, { useState, useEffect } from 'react';
import './Scholarship.css';
// import bhaskarImage from "../../assets/scholarship_BhaskarGupta.jpg"; // Remove static import

const Scholarship = () => {
    // State to hold the scholarship nodal officer's data
    const [nodalOfficer, setNodalOfficer] = useState(null);
    // State to hold the scholarship information link data
    const [scholarshipInfo, setScholarshipInfo] = useState(null);
    // State to handle loading status
    const [isLoading, setIsLoading] = useState(true);
    // State to handle errors
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchScholarshipData = async () => {
            try {
                // Fetch Nodal Officer Data
                const officerResponse = await fetch('https://ccet.ac.in/api/scholarships.php');
                if (!officerResponse.ok) {
                    throw new Error(`HTTP error! status: ${officerResponse.status}`);
                }
                const officerData = await officerResponse.json();
                if (officerData.length > 0) {
                    setNodalOfficer(officerData[0]);
                }

                // Fetch Scholarship Information Link Data
                const infoResponse = await fetch('https://ccet.ac.in/api/scholarships.php?table=info');
                if (!infoResponse.ok) {
                    throw new Error(`HTTP error! status: ${infoResponse.status}`);
                }
                const infoData = await infoResponse.json();
                if (infoData.length > 0) {
                    setScholarshipInfo(infoData[0]);
                }
            } catch (err) {
                console.error("Failed to fetch scholarship data:", err);
                setError("Failed to load scholarship details. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchScholarshipData();
    }, []); // Empty dependency array means this runs once on mount

    if (isLoading) {
        return <p>Loading scholarship information...</p>;
    }

    if (error) {
        return <p className="error-message">{error}</p>;
    }

    return (
        <div>
            <section className="scholarship-section">
                <h1>Scholarships</h1>
                <h3>Scholarship Incharge</h3>

                {/* Dynamically render Nodal Officer Card */}
                {nodalOfficer ? (
                    <div className="scholarship-card">
                        {/* Use the image URL from the API */}
                        <img src={nodalOfficer.image} alt={nodalOfficer.name} />
                        <div className="card-content">
                            <h4>{nodalOfficer.name}</h4>
                            <p><em>{nodalOfficer.designation}</em></p>
                            <p>Email: <a href={`mailto:${nodalOfficer.email}`}>{nodalOfficer.email}</a></p>
                        </div>
                    </div>
                ) : (
                    <p>Nodal officer information not available.</p>
                )}

                {/* Dynamically render Related Information */}
                <div className="related-info">
                    <h3>Related Information:</h3>
                    <ul>
                        {scholarshipInfo ? (
                            <li>
                                <a 
                                    // Use the file_url from the API
                                    href={scholarshipInfo.file_url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    {/* Use the title from the API */}
                                    {scholarshipInfo.title}
                                </a>
                            </li>
                        ) : (
                            <li>Information link not available.</li>
                        )}
                    </ul>
                </div>
            </section>

            <footer className="footer">
                <p>&copy; 2025 Chandigarh College of Engineering and Technology</p>
            </footer>
        </div>
    );
};

export default Scholarship;