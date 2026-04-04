import React, { useEffect, useState } from 'react';
import SharedMechLayout from './SharedMechLayout';
import styles from './MechHod.module.css';

const API_BASE_URL = 'https://ccet.ac.in/api/hods.php';
const DEPARTMENT = 'MECH';

const MechHod = () => {
  const [hodData, setHodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHodData();
  }, []);

  const fetchHodData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}?department=${DEPARTMENT}`);
      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        // Get the most recent HOD entry for MECH department
        setHodData(data[0]);
      } else if (data.success === false) {
        setError(data.error || "No HOD data found");
      } else {
        setError("No HOD data available for this department");
      }
    } catch (err) {
      setError("Error loading HOD information");
      console.error("HOD data fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const getFullUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    return `https://ccet.ac.in/${path.startsWith('/') ? path.slice(1) : path}`;
  };

  const formatEmails = (emailString) => {
    if (!emailString) return [];
    return emailString.split('|').map(email => email.trim()).filter(email => email);
  };

  if (loading) {
    return (
        <SharedMechLayout pageTitle="HOD Desk">
          <div className={styles.container}>
            <div className="flex justify-center items-center py-16">
              <span className="text-gray-500">Loading HOD information...</span>
            </div>
          </div>
        </SharedMechLayout>
    );
  }

  if (error) {
    return (
        <SharedMechLayout pageTitle="HOD Desk">
          <div className={styles.container}>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center my-8">
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        </SharedMechLayout>
    );
  }

  if (!hodData) {
    return (
        <SharedMechLayout pageTitle="HOD Desk">
          <div className={styles.container}>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center my-8">
              <p className="text-yellow-700">No HOD data available</p>
            </div>
          </div>
        </SharedMechLayout>
    );
  }

  const emails = formatEmails(hodData.email);

  return (
      <SharedMechLayout pageTitle="HOD Desk">
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>HOD DESK</h1>
            <div className={styles.underline}></div>
            <p className={styles.subtitle}>Message from the Head of the Department</p>
          </div>

          <div className={styles.profileSection}>
            <div className={styles.profileContainer}>
              <div className={styles.profileBg}></div>
              <img
                  className={styles.profileImg}
                  src={getFullUrl(hodData.image)}
                  alt={hodData.name}
                  onError={(e) => e.target.src = 'https://via.placeholder.com/300x300?text=HOD+Image'}
              />
            </div>

            <div className={styles.hodInfo}>
              <h2 className={styles.hodName}>{hodData.name}</h2>
              <p className={styles.designation}>{hodData.designation}</p>
              <p className={styles.department}>Mechanical Engineering Department</p>
            </div>

            {emails.length > 0 && (
                <div className={styles.emailBox}>
                  <div className={styles.emailIcon}>
                    <svg
                        width="20"
                        height="16"
                        viewBox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                          d="M18 0H2C0.9 0 0.01 0.9 0.01 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
                          fill="#063068"
                      />
                    </svg>
                  </div>
                  <div className={styles.emailText}>
                    {emails.join(' | ')}
                  </div>
                </div>
            )}
          </div>

          {hodData.description && (
              <div className={styles.contentBox}>
                <div className={styles.message}>
                  {hodData.description.split('\n').map((paragraph, index) => (
                      paragraph.trim() && <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
          )}
        </div>
      </SharedMechLayout>
  );
};

export default MechHod;