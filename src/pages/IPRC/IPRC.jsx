import React, { useState, useEffect } from 'react';
import './IPRC.css';

const API_BASE_URL = 'https://ccet.ac.in/api/iprc.php';

const IPRC = () => {
  const [iprcData, setIprcData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchIPRCData();
  }, []);

  const fetchIPRCData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}?is_active=true`);
      const data = await response.json();

      if (Array.isArray(data)) {
        setIprcData(data);
      } else if (data.success === false) {
        console.error('Error fetching IPRC data:', data.error);
        setError(data.error);
      }
    } catch (err) {
      console.error('Error fetching IPRC data:', err);
      setError('Failed to load IPRC data');
    } finally {
      setLoading(false);
    }
  };

  const getFullUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    return `https://ccet.ac.in/${path.startsWith('/') ? path.slice(1) : path}`;
  };

  const getMainSection = () => {
    return iprcData.find(item => item.section === 'main');
  };

  const getMediaSection = () => {
    return iprcData.find(item => item.section === 'media');
  };

  if (loading) {
    return (
        <div className="iprc-container">
          <header className="iprc-header">
            <h1>Institute Public Relationship Cell (IPRC)</h1>
          </header>
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <p>Loading IPRC information...</p>
          </div>
        </div>
    );
  }

  if (error) {
    return (
        <div className="iprc-container">
          <header className="iprc-header">
            <h1>Institute Public Relationship Cell (IPRC)</h1>
          </header>
          <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
            <p>Error: {error}</p>
          </div>
        </div>
    );
  }

  const mainSection = getMainSection();
  const mediaSection = getMediaSection();

  return (
      <div className="iprc-container">
        <header className="iprc-header">
          <h1>{mainSection?.title || 'Institute Public Relationship Cell (IPRC)'}</h1>
          <p className="iprc-subtitle">
            Dedicated to develop the healthy relationship between Alumni, Scholars, Parents and General Populace
          </p>
        </header>

        <div className="iprc-content">
          {mainSection && (
              <>
                {mainSection.image_url && (
                    <div className="iprc-main-image">
                      <img
                          src={getFullUrl(mainSection.image_url)}
                          alt="IPRC Main"
                          className="img-fluid"
                          onError={(e) => e.target.src = 'https://via.placeholder.com/1200x600?text=IPRC'}
                      />
                    </div>
                )}

                {mainSection.description && (
                    <div className="iprc-text-section">
                      <p>{mainSection.description}</p>
                    </div>
                )}
              </>
          )}

          {mediaSection && (
              <div className="iprc-section">
                <div className="iprc-section-title">
                  <h2>{mediaSection.title}</h2>
                </div>
                <div className="iprc-section-content">
                  {mediaSection.image_url && (
                      <div className="iprc-section-image">
                        <img
                            src={getFullUrl(mediaSection.image_url)}
                            alt="Print and Media"
                            className="img-fluid"
                            onError={(e) => e.target.src = 'https://via.placeholder.com/800x600?text=Media'}
                        />
                      </div>
                  )}
                  {mediaSection.description && (
                      <div className="iprc-section-text">
                        <p>{mediaSection.description}</p>
                      </div>
                  )}
                </div>
              </div>
          )}
        </div>
      </div>
  );
};

export default IPRC;