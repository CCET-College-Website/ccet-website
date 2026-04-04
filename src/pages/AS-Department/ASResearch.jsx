import React, { useEffect, useState } from 'react';
import SharedASLayout from './SharedASLayout';
import styles from './ASResearch.module.css';

const API_BASE_URL = 'https://ccet.ac.in/api/research.php';
const DEPARTMENT = 'AS';

const ASResearch = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchResearchFaculty();
  }, []);

  const fetchResearchFaculty = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}?department=${DEPARTMENT}&is_active=true`);
      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        setFacultyData(data);
      } else if (data.success === false) {
        setError(data.error || "No research faculty data found");
      } else {
        setError("No research faculty available for this department");
      }
    } catch (err) {
      setError("Error loading research faculty information");
      console.error("Research faculty fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const getFullUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    return `https://ccet.ac.in/${path.startsWith('/') ? path.slice(1) : path}`;
  };

  const parseOtherLinks = (linksJson) => {
    if (!linksJson) return [];
    try {
      return JSON.parse(linksJson);
    } catch (e) {
      return [];
    }
  };

  if (loading) {
    return (
        <SharedASLayout pageTitle="Research">
          <div className={styles.container}>
            <div className={styles.loadingContainer}>
              <span className={styles.loadingText}>Loading research faculty information...</span>
            </div>
          </div>
        </SharedASLayout>
    );
  }

  return (
      <SharedASLayout pageTitle="Research">
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Research & Publications</h1>
            <div className={styles.headerLine}></div>
            <p>Faculty research profiles and publication links</p>
          </div>

          {facultyData.length > 0 ? (
              <div className={styles.facultyGrid}>
                {facultyData.map((faculty) => (
                    <div key={faculty.id} className={styles.facultyCard}>
                      <div className={styles.facultyImageContainer}>
                        {faculty.faculty_image ? (
                            <img
                                src={getFullUrl(faculty.faculty_image)}
                                alt={faculty.name}
                                className={styles.facultyImage}
                            />
                        ) : (
                            <div className={styles.facultyImagePlaceholder}>
                              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#ccc"/>
                              </svg>
                            </div>
                        )}
                      </div>

                      <div className={styles.facultyInfo}>
                        <h3 className={styles.facultyName}>{faculty.name}</h3>
                        <p className={styles.facultyDesignation}>{faculty.designation}</p>

                        <div className={styles.researchLinks}>
                          {faculty.google_scholar_url && (
                              <a
                                  href={faculty.google_scholar_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={styles.linkButton}
                                  title="Google Scholar"
                              >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"/>
                                </svg>
                                Google Scholar
                              </a>
                          )}

                          {faculty.researchgate_url && (
                              <a
                                  href={faculty.researchgate_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={styles.linkButton}
                                  title="ResearchGate"
                              >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9.43 9.43 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9.43 9.43 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.366 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.401 0 0 1 .014-.938 15.821 15.821 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l.94-.56c.076-.047.087-.12.034-.198-.27-.48-.506-.79-.796-1.04-.29-.252-.68-.42-1.133-.513-.452-.095-.96-.103-1.386-.103l-.005-.002zm-3.817 6.505c-.185 0-.304.11-.342.303-.03.107-.044.256-.044.447 0 .3.034.545.1.733.065.186.168.34.302.459.133.117.293.184.477.184.092 0 .176-.014.252-.04a.58.58 0 0 0 .192-.117.757.757 0 0 0 .163-.193.736.736 0 0 0 .098-.25 1.463 1.463 0 0 0 .033-.335v-.537H15.77zm-2.58 0h-.004c-.092 0-.137.047-.137.14v2.333c0 .093.045.14.137.14h.93c.09 0 .136-.047.136-.14V6.645c0-.093-.045-.14-.136-.14h-.93zm-1.724 0h-.916c-.09 0-.136.047-.136.14v2.333c0 .093.046.14.136.14h.916c.09 0 .136-.047.136-.14V6.645c0-.093-.046-.14-.136-.14zm-1.724 0h-.004c-.092 0-.137.047-.137.14v2.333c0 .093.045.14.137.14h.93c.09 0 .136-.047.136-.14V6.645c0-.093-.045-.14-.136-.14h-.93z"/>
                                </svg>
                                ResearchGate
                              </a>
                          )}

                          {faculty.orcid_url && (
                              <a
                                  href={faculty.orcid_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={styles.linkButton}
                                  title="ORCID"
                              >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.925-1.531 3.925-3.722 0-2.072-1.284-3.722-3.925-3.722h-2.297z"/>
                                </svg>
                                ORCID
                              </a>
                          )}

                          {parseOtherLinks(faculty.other_links).map((link, index) => (
                              <a
                                  key={index}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={styles.linkButton}
                                  title={link.label}
                              >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13 3L16.293 6.293L9.293 13.293L10.707 14.707L17.707 7.707L21 11V3H13Z" fill="currentColor"/>
                                  <path d="M19 19H5V5H12L10 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V14L19 12V19Z" fill="currentColor"/>
                                </svg>
                                {link.label}
                              </a>
                          ))}
                        </div>
                      </div>
                    </div>
                ))}
              </div>
          ) : (
              <div className={styles.noDataContainer}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.5, marginBottom: '20px' }}>
                  <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="#ccc"/>
                </svg>
                <p style={{ fontSize: '18px', color: '#777', textAlign: 'center' }}>
                  {error || 'No research faculty data available'}
                </p>
              </div>
          )}
        </div>
      </SharedASLayout>
  );
};

export default ASResearch;