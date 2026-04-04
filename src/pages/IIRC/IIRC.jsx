import React, { useState, useEffect } from 'react';
import './IIRC.css';

const IIRC = () => {
  const [headerData, setHeaderData] = useState(null);
  const [introData, setIntroData] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const [objectivesData, setObjectivesData] = useState(null);
  const [initiatives, setInitiatives] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL = 'https://ccet.ac.in';

  const getFullUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }
    return `${BASE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
  };

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
      setError('Failed to load some data. Please try again.');
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      setIsLoading(true);

      // 1. Fetch Header Data
      await fetchData(
          'https://ccet.ac.in/api/iirc.php?section=header&is_active=true',
          setHeaderData,
          (data) => Array.isArray(data) && data.length > 0 ? data[0] : null
      );

      await fetchData(
          'https://ccet.ac.in/api/iirc.php?section=intro&is_active=true',
          setIntroData,
          (data) => {
            if (Array.isArray(data) && data.length > 0) {
              return {
                ...data[0],
                image_url: getFullUrl(data[0].image_url)
              };
            }
            return null;
          }
      );

      await fetchData(
          'https://ccet.ac.in/api/iirc.php?section=about&is_active=true',
          setAboutData,
          (data) => {
            if (Array.isArray(data) && data.length > 0) {
              return {
                ...data[0],
                image_url: getFullUrl(data[0].image_url)
              };
            }
            return null;
          }
      );

      await fetchData(
          'https://ccet.ac.in/api/iirc.php?section=objectives&is_active=true',
          setObjectivesData,
          (data) => {
            if (Array.isArray(data) && data.length > 0) {
              return {
                ...data[0],
                image_url: getFullUrl(data[0].image_url)
              };
            }
            return null;
          }
      );

      await fetchData(
          'https://ccet.ac.in/api/iirc.php?section=initiatives&is_active=true',
          setInitiatives,
          (data) => Array.isArray(data) ? data : []
      );

      setIsLoading(false);
    };

    fetchAllData();
  }, []);

  if (isLoading) {
    return (
        <div className="iirc-container">
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <div style={{
              display: 'inline-block',
              width: '50px',
              height: '50px',
              border: '3px solid #f3f3f3',
              borderTop: '3px solid #3498db',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
            <p style={{ marginTop: '20px', color: '#666' }}>Loading IIRC content...</p>
          </div>
        </div>
    );
  }

  if (error) {
    return (
        <div className="iirc-container">
          <div style={{ textAlign: 'center', padding: '50px', color: '#d32f2f' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{error}</p>
          </div>
        </div>
    );
  }

  return (
      <div className="iirc-container">
        <header className="iirc-header">
          <h1>{headerData?.title}</h1>
          <p className="iirc-lead">
            {headerData?.description}
          </p>
        </header>

        {introData && (
            <section className="iirc-intro-section">
              <div className="iirc-intro-wrapper">
                <div className="iirc-intro-image">
                  <img
                      src={introData.image_url || '/img/IIRC/iirc-intro.jpg'}
                      alt={introData.title || 'Industry Institute Relationship'}
                  />
                </div>
                <div className="iirc-intro-content">
                  <h2>
                    <span className="iirc-heading-upper">(IIRC)</span>
                    <span className="iirc-heading-lower">{introData.title}</span>
                  </h2>
                  <p>{introData.description}</p>
                </div>
              </div>
            </section>
        )}

        <div className="iirc-spacer"></div>

        {aboutData && (
            <section id="about-iirc" className="iirc-section">
              <div className="iirc-section-wrapper">
                <div className="iirc-section-title">
                  <h2>{aboutData.title}</h2>
                </div>
                <div className="iirc-section-content-wrapper">
                  <img
                      className="iirc-section-img"
                      src={aboutData.image_url || '/img/IIRC/about-iirc.jpg'}
                      alt={aboutData.title}
                  />
                  <div className="iirc-section-content">
                    {aboutData.description && aboutData.description.split('\n\n').map((para, idx) => (
                        <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
        )}

        {objectivesData && (
            <section className="iirc-section">
              <div className="iirc-section-wrapper reversed">
                <div className="iirc-section-title">
                  <h2>
                    <span className="iirc-heading-upper">Ideologies &</span>
                    <span className="iirc-heading-lower">{objectivesData.title}</span>
                  </h2>
                </div>
                <div className="iirc-section-content-wrapper">
                  <img
                      className="iirc-section-img"
                      src={objectivesData.image_url || '/img/IIRC/objectives-iirc.jpg'}
                      alt={objectivesData.title}
                  />
                  <div className="iirc-section-content">
                    <ul className="iirc-list">
                      {objectivesData.description && objectivesData.description.split('\n').map((item, idx) => {
                        const trimmedItem = item.trim();
                        if (trimmedItem) {
                          return <li key={idx}>{trimmedItem}</li>;
                        }
                        return null;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
        )}

        {initiatives.length > 0 && (
            <section className="iirc-initiatives">
              <div className="iirc-card">
                <div className="iirc-card-header">
                  <h3>The key initiatives of IIRC</h3>
                </div>
                <div className="iirc-card-body">
                  <ul className="iirc-initiatives-list">
                    {initiatives.map((initiative, idx) => (
                        <li key={idx}>
                          {initiative.title && <strong>{initiative.title}: </strong>}
                          {initiative.description}
                        </li>
                    ))}
                  </ul>
                  <div className="iirc-contact-button-wrapper">
                    <a href="#/contact" className="iirc-contact-button">Contact Professor In-charge</a>
                  </div>
                </div>
              </div>
            </section>
        )}
      </div>
  );
};

export default IIRC;