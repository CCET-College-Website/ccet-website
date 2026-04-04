import React, { useEffect, useState } from 'react';
import './vision-mission.css';
import vision from '../../assets/header/vision-mission.png';

const VisionMission = () => {
  const [visionMissionData, setVisionMissionData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://ccet.ac.in/api/vission-mission.php")
        .then((response) => {
          if (!response.ok) throw new Error("Network response was not ok");
          return response.json();
        })
        .then((data) => {
          console.log(data);
          if (data && data.length > 0) {
            setVisionMissionData(data[0]);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching vision mission:", err);
          setError(err.message || "Failed to fetch data");
          setLoading(false);
        });
  }, []);

  if (loading) {
    return (
        <div className="container vision-mission-page">
          <div className="loading-container" style={{ textAlign: 'center', padding: '4rem' }}>
            <p>Loading Vision & Mission data...</p>
          </div>
        </div>
    );
  }

  if (error || !visionMissionData) {
    return (
        <div className="container vision-mission-page">
          <div className="error-container" style={{ textAlign: 'center', padding: '4rem', color: '#dc3545' }}>
            <p>Error loading Vision & Mission data: {error}</p>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
              Please contact the administrator or try again later.
            </p>
          </div>
        </div>
    );
  }

  return (
      <div className="container vision-mission-page">
        <div className="container">
          <header className="header">
            <img
                src={vision}
                alt="Department Banner"
                className="banner-img"
            />
            <div className="header-overlay">
              <h1 className="header-title">Empowering Future Leaders</h1>
              <p className="header-subtitle">Innovating through education and research</p>
            </div>
          </header>

          {/* Objectives Section */}
          <main className="main-content">
            <h2 className="section-title">Objectives</h2>

            <section className="vision-mission-section">
              <div className="vision-box card">
                <h3>Vision</h3>
                <div className="placeholder-text">
                  {visionMissionData.vision_text}
                </div>
              </div>

              <div className="mission-box card">
                <h3>Mission</h3>
                <ul>
                  {visionMissionData.mission_text
                      .split('\n')
                      .filter(item => item.trim())
                      .map((item, index) => (
                          <li key={index}>{item.trim()}</li>
                      ))}
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>
  );
};

export default VisionMission;