import React, { useState, useEffect } from "react";
import "./AboutUsSection.css";

const AboutUsSection = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL = 'https://www.ccet.ac.in/';

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://ccet.ac.in/api/about-us.php?is_active=true');

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();

      if (data && data.length > 0) {
        setAboutData(data[0]);
      } else {
        setError('No data available');
      }
    } catch (err) {
      setError(err.message);
      console.error('Error fetching about data:', err);
    } finally {
      setLoading(false);
    }
  };

  const getFullUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    return BASE_URL + url.replace(/^\/+/, '');
  };

  if (loading) {
    return (
        <div className="app-container">
          <h1 className="section-heading">ABOUT US</h1>
          <div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>
        </div>
    );
  }

  if (error) {
    return (
        <div className="app-container">
          <h1 className="section-heading">ABOUT US</h1>
          <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
            Error: {error}
          </div>
        </div>
    );
  }

  if (!aboutData) {
    return (
        <div className="app-container">
          <h1 className="section-heading">ABOUT US</h1>
          <div style={{ textAlign: 'center', padding: '50px' }}>
            No content available
          </div>
        </div>
    );
  }

  return (
      <div className="app-container">
        <h1 className="section-heading">ABOUT US</h1>

        <section className="about-box">
          <div className="about-text">
            <h2 className="about-title">WHO ARE WE?</h2>
            <p>{aboutData.about_text}</p>

            {aboutData.enews_url && (
                <a
                    href={getFullUrl(aboutData.enews_url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="enews-btn"
                >
                  E-News Letter
                </a>
            )}
          </div>

          <div className="video-container">
            {aboutData.video_url ? (
                <>
                  <video controls autoPlay muted loop playsInline>
                    <source src={getFullUrl(aboutData.video_url)} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="video-caption">Introductory Video</div>
                </>
            ) : (
                <div style={{ textAlign: 'center', padding: '50px' }}>
                  No video available
                </div>
            )}
          </div>
        </section>
      </div>
  );
};

export default AboutUsSection;