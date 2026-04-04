import React, { useEffect, useState } from 'react';
import SharedCivilLayout from './SharedCivilLayout';
import styles from './CivilLabs.module.css';

const API_BASE_URL = 'https://ccet.ac.in/api/laboratories.php';
const DEPARTMENT = 'CIVIL';

const CivilLabs = () => {
  const [labs, setLabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLabs();
  }, []);

  const fetchLabs = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}?department=${DEPARTMENT}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        setLabs(data);
      } else if (data.success === false) {
        setError(data.error || "No laboratories data found");
      } else {
        setError("No laboratories available for this department");
      }
    } catch (err) {
      setError("Error loading laboratories information");
      console.error("Laboratories fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const getFullUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    return `https://ccet.ac.in/${path.startsWith('/') ? path.slice(1) : path}`;
  };

  if (loading) {
    return (
        <SharedCivilLayout pageTitle="Laboratories">
          <div className={styles.loadingContainer}>
            <p className={styles.loadingText}>Loading laboratories...</p>
          </div>
        </SharedCivilLayout>
    );
  }

  if (error || labs.length === 0) {
    return (
        <SharedCivilLayout pageTitle="Laboratories">
          <div className={styles.errorContainer}>
            <p className={styles.errorText}>{error || "No laboratories data found."}</p>
          </div>
        </SharedCivilLayout>
    );
  }

  return (
      <SharedCivilLayout pageTitle="Laboratories">
        <div className={styles.container}>
          <header>
            <h1 className={styles.civillabsheading}>Laboratories</h1>
            <div className={styles.headerLine}></div>
          </header>

          <div className={styles.labsGrid}>
            {labs.map((lab) => (
                <div key={lab.id} className={styles.labCard}>
                  {lab.lab_image ? (
                      <div className={styles.imageContainer}>
                        <img
                            src={getFullUrl(lab.lab_image)}
                            alt={lab.lab_name}
                            onError={(e) => e.target.src = 'https://via.placeholder.com/385x246?text=Lab+Image'}
                        />
                      </div>
                  ) : (
                      <div className={styles.imagePlaceholder}>
                        <span className={styles.dimensionLabel}>385px × 246px</span>
                      </div>
                  )}
                  <div className={styles.labContent}>
                    <h2 className={styles.labTitle}>{lab.lab_name}</h2>
                    <p className={styles.labDescription}>
                      {lab.lab_description || 'No description available'}
                    </p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </SharedCivilLayout>
  );
};

export default CivilLabs;