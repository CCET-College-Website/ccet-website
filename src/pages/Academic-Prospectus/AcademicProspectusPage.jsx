import React, { useEffect, useState } from 'react';
import './AcademicProspectusPage.css';

const API_URL = "https://ccet.ac.in/api/academic-prospectus.php";
const BASE_PDF_URL = "https://ccet.ac.in/"; // Change if PDF URLs are hosted elsewhere

const AcademicProspectusPage = () => {
  const [currentProspectusURL, setCurrentProspectusURL] = useState('');
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    // Fetch the latest prospectus data from backend
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0 && data[0].url) {
          // If the url is relative, prepend BASE_PDF_URL
          const url = data[0].url.startsWith('http')
            ? data[0].url
            : BASE_PDF_URL + data[0].url.replace(/^\/+/, '');
          setCurrentProspectusURL(url);
        } else {
          setFetchError("Current prospectus not available.");
        }
      })
      .catch((error) => {
        setFetchError("Could not fetch current prospectus.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="academic-prospectus-container">
      {/* Description Section */}
      <h1>Academic Prospectus</h1>
      <p>
        Prospectus Overview – CCET
        The CCET prospectus presents a comprehensive overview of our institution, highlighting our accredited programs in engineering and technology, highly qualified faculty, state-of-the-art infrastructure, and student-centered learning environment. It serves as a resource for prospective students, parents, and stakeholders to understand our academic vision, admission procedures, and commitment to excellence in technical education.
      </p>

      {/* Current Year Prospectus */}
      <h2>Prospectus 2025-26</h2>
      <div className="prospectus-viewer">
        {loading ? (
          <p>Loading current prospectus...</p>
        ) : fetchError ? (
          <p style={{ color: 'red' }}>{fetchError}</p>
        ) : currentProspectusURL ? (
          <iframe
            src={currentProspectusURL}
            title="Prospectus 2025-26"
            width="100%"
            height="100%"
            style={{ minHeight: "600px", border: 0 }}
          />
        ) : (
          <p style={{ color: 'red' }}>Current prospectus unavailable.</p>
        )}
      </div>
      {currentProspectusURL && (
        <a
          href={currentProspectusURL}
          download
          className="download-button"
        >
          Download PDF
        </a>
      )}
    </div>
  );
};

export default AcademicProspectusPage;
