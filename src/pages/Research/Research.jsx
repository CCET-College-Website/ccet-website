import React, { useState, useEffect } from 'react';
import './Research.css';

const API_BASE_URL = 'https://ccet.ac.in/api/researchconsultancy.php';

const Research = () => {
  const [researchData, setResearchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchResearchData();
  }, []);

  const fetchResearchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}?is_active=true`);
      const data = await response.json();

      if (Array.isArray(data)) {
        setResearchData(data);
      } else if (data.success === false) {
        console.error('Error fetching research data:', data.error);
        setError(data.error);
      }
    } catch (err) {
      console.error('Error fetching research data:', err);
      setError('Failed to load research data');
    } finally {
      setLoading(false);
    }
  };

  const getFullUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    return `https://ccet.ac.in/${path.startsWith('/') ? path.slice(1) : path}`;
  };

  const getSectionData = (section) => {
    return researchData.find(item => item.section === section);
  };

  const getActivitiesList = () => {
    return researchData.filter(item => item.section === 'activities');
  };

  if (loading) {
    return (
        <div className="research-container">
          <header className="research-header">
            <h1>Research and Consultancy</h1>
          </header>
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <p>Loading research information...</p>
          </div>
        </div>
    );
  }

  if (error) {
    return (
        <div className="research-container">
          <header className="research-header">
            <h1>Research and Consultancy</h1>
          </header>
          <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
            <p>Error: {error}</p>
          </div>
        </div>
    );
  }

  const researchSection = getSectionData('research');
  const consultancySection = getSectionData('consultancy');
  const activitiesList = getActivitiesList();

  return (
      <div className="research-container">
        <header className="research-header">
          <h1>Research and Consultancy</h1>
          <p className="research-subtitle">Scientific Research and Industries Consultancy is a necessity for Engineering</p>
        </header>

        <div className="research-content">
          {researchSection && (
              <div className="research-section">
                {researchSection.image_url && (
                    <div className="research-image-container">
                      <img
                          className="research-image"
                          src={getFullUrl(researchSection.image_url)}
                          alt="Research at CCET"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/600x400?text=Research'}
                      />
                    </div>
                )}
                <div className="research-text-container">
                  <h2>{researchSection.title}</h2>
                  <p>{researchSection.description}</p>
                  <div className="research-button-wrapper">
                    <a href="#/contact" className="research-button">Start your Research</a>
                  </div>
                </div>
              </div>
          )}

          {consultancySection && (
              <div className="research-section reverse">
                <div className="research-text-container">
                  <h2>{consultancySection.title}</h2>
                  <p>{consultancySection.description}</p>
                </div>
                {consultancySection.image_url && (
                    <div className="research-image-container">
                      <img
                          className="research-image"
                          src={getFullUrl(consultancySection.image_url)}
                          alt="Industrial Consultancy"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/600x400?text=Consultancy'}
                      />
                    </div>
                )}
              </div>
          )}

          {activitiesList.length > 0 && (
              <div className="research-activities">
                <h2>The different activities include:</h2>
                <ol>
                  {activitiesList.map((activity) => (
                      <li key={activity.id}>{activity.description}</li>
                  ))}
                </ol>
              </div>
          )}
        </div>
      </div>
  );
};

export default Research;