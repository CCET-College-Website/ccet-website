import React, { useState, useEffect } from 'react';
import { Mail, Phone } from 'lucide-react';
import styles from './StudentWelfare.module.css';

const StudentWelfare = () => {
  const [officials, setOfficials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOfficials();
  }, []);

  const fetchOfficials = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://ccet.ac.in/api/student-welfare.php?is_active=true');
      const result = await response.json();

      if (Array.isArray(result) && result.length > 0) {
        setOfficials(result);
      } else if (result.success === false) {
        setError(result.error || "No officials found");
        setOfficials([]);
      } else {
        setError("No student welfare officials available");
        setOfficials([]);
      }
    } catch (err) {
      setError("Error loading student welfare officials");
      console.error("Student Welfare fetch error:", err);
      setOfficials([]);
    } finally {
      setLoading(false);
    }
  };

  const getFullImageUrl = (imagePath) => {
    if (!imagePath) return '';
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }
    return `https://ccet.ac.in/${imagePath.startsWith('/') ? imagePath.slice(1) : imagePath}`;
  };

  if (loading) {
    return (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.headerSection}>
              <h1 className={styles.mainHeading}>
                OFFICIALS at Student Welfare
              </h1>
              <div className={styles.underline}></div>
            </div>
            <div className="flex justify-center items-center py-16">
              <span className="text-gray-500">Loading officials...</span>
            </div>
          </div>
        </div>
    );
  }

  if (error && officials.length === 0) {
    return (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.headerSection}>
              <h1 className={styles.mainHeading}>
                OFFICIALS at Student Welfare
              </h1>
              <div className={styles.underline}></div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        </div>
    );
  }

  return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.headerSection}>
            <h1 className={styles.mainHeading}>
              OFFICIALS at Student Welfare
            </h1>
            <div className={styles.underline}></div>
          </div>

          <div className={styles.cardsGrid}>
            {officials.map((official, index) => (
                <div
                    key={official.id}
                    className={`${styles.card} ${styles[`cardDelay${index % 3}`]}`}
                >
                  <div className={styles.imageContainer}>
                    <img
                        src={getFullImageUrl(official.image)}
                        alt={official.name}
                        className={styles.profileImage}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x400?text=No+Image';
                        }}
                    />
                    <div className={styles.imageOverlay}></div>
                  </div>

                  <div className={styles.cardContent}>
                    <h3 className={styles.officialName}>
                      {official.name}
                    </h3>
                    <p className={styles.position}>
                      {official.position}
                    </p>

                    <div className={styles.contactInfo}>
                      <div className={styles.contactItem}>
                        <Mail className={styles.contactIcon} />
                        <a
                            href={`mailto:${official.email}`}
                            className={styles.contactLink}
                        >
                          {official.email}
                        </a>
                      </div>
                      <div className={styles.contactItem}>
                        <Phone className={styles.contactIcon} />
                        <a
                            href={`tel:${official.mobile}`}
                            className={styles.contactLink}
                        >
                          {official.mobile}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default StudentWelfare;