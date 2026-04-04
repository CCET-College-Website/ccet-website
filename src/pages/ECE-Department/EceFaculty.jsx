import React, { useEffect, useState } from "react";
import SharedEceLayout from "./SharedEceLayout";
import styles from "./EceFaculty.module.css";

const imgBaseUrl = "https://ccet.ac.in/";
const resumeBaseUrl = "https://ccet.ac.in/";

const EceFaculty = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://ccet.ac.in/api/faculty-ece.php")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        setFacultyData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <SharedEceLayout pageTitle="Faculty">
        <div className={styles.pageContainer}>Loading faculty data...</div>
      </SharedEceLayout>
    );
  }

  if (error) {
    return (
      <SharedEceLayout pageTitle="Faculty">
        <div className={styles.pageContainer}>Error: {error}</div>
      </SharedEceLayout>
    );
  }

  return (
    <SharedEceLayout pageTitle="Faculty">
      <div className={styles.pageContainer}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Our Faculty</h1>
          <div className={styles.titleUnderline}></div>
        </header>
        <main className={styles.facultyCards}>
          {facultyData.map((faculty) => (
            <article key={faculty.id} className={styles.facultyCard}>
              <div className={styles.cardHeader}>
                <div className={styles.profileImageContainer}>
                  <div className={styles.profileBg}></div>
                  <img
                    className={styles.profileImg}
                    src={imgBaseUrl + faculty.img}
                    alt={faculty.name}
                  />
                </div>
                <div className={styles.facultyInfo}>
                  <h2 className={styles.facultyName}>{faculty.name}</h2>
                  <p className={styles.facultyTitle}>{faculty.designation}</p>
                </div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.infoSection}>
                  <h3 className={styles.sectionTitle}>Qualifications:</h3>
                  <p className={styles.sectionContent}>{faculty.edu}</p>
                </div>
                <div className={styles.infoSection}>
                  <h3 className={styles.sectionTitle}>
                    Area of Specialization:
                  </h3>
                  <p className={styles.sectionContent}>{faculty.interest}</p>
                </div>
                <div className={styles.infoSection}>
                  <h3 className={styles.sectionTitle}>Additional Roles:</h3>
                  <p className={styles.sectionContent}>
                    {faculty.add_role || "N/A"}
                  </p>
                </div>
                <div className={styles.infoSection}>
                  <h3 className={styles.sectionTitle}>Contact</h3>
                  <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                      <span>Email: {faculty.email}</span>
                    </div>
                    <div className={styles.contactItem}>
                      <span>Phone: {faculty.number}</span>
                    </div>
                    <div className={styles.contactItem}>
                      <span>Address: {faculty.address}</span>
                    </div>
                    {faculty.resume_link && (
                      <div className={styles.contactItem}>
                        <a
                          href={resumeBaseUrl + faculty.resume_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Resume
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </main>
      </div>
    </SharedEceLayout>
  );
};

export default EceFaculty;
