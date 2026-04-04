import React, { useEffect, useState } from 'react';
import SharedCseLayout from './SharedCseLayout';
import styles from './CseTimeTable.module.css';

const API_BASE_URL = 'https://ccet.ac.in/api/timetable.php';
const DEPARTMENT = 'CSE';

const CseTimeTable = () => {
  const [timetables, setTimetables] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTimetables();
  }, []);

  const fetchTimetables = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}?department=${DEPARTMENT}`);
      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        setTimetables(data);
        // Auto-select first available semester
        setSelectedSemester(data[0].semester);
      } else if (data.success === false) {
        setError(data.error || "No timetable data found");
      } else {
        setError("No timetable available for this department");
      }
    } catch (err) {
      setError("Error loading timetable information");
      console.error("Timetable fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const getFullUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    return `https://ccet.ac.in/${path.startsWith('/') ? path.slice(1) : path}`;
  };

  const getCurrentTimetable = () => {
    return timetables.find(tt => tt.semester === selectedSemester);
  };

  const handleSemesterChange = (semester) => {
    setSelectedSemester(semester);
  };

  // Generate semester label for display
  const getSemesterLabel = (semester) => {
    // Check if it's a simple number
    if (/^\d$/.test(semester)) {
      const num = parseInt(semester);
      const suffix = num === 1 ? 'st' : num === 2 ? 'nd' : num === 3 ? 'rd' : 'th';
      return `${num}${suffix} Semester`;
    }
    // Return as-is for other formats
    return semester;
  };

  if (loading) {
    return (
        <SharedCseLayout pageTitle="Time Table">
          <div className={styles.container}>
            <div className={styles.loadingContainer}>
              <span className={styles.loadingText}>Loading timetable information...</span>
            </div>
          </div>
        </SharedCseLayout>
    );
  }

  const currentTimetable = getCurrentTimetable();

  return (
      <SharedCseLayout pageTitle="Time Table">
        <div className={styles.container}>
          <h1 className={styles.heading}>Time-Table</h1>
          <div className={styles.underline}></div>

          {/* Dynamic Semester Selection Tabs */}
          {timetables.length > 0 && (
              <div className={styles.semesterTabs}>
                {timetables.map((tt) => (
                    <button
                        key={tt.id}
                        className={`${styles.tabButton} ${
                            selectedSemester === tt.semester ? styles.active : ''
                        }`}
                        onClick={() => handleSemesterChange(tt.semester)}
                    >
                      {getSemesterLabel(tt.semester)}
                    </button>
                ))}
              </div>
          )}

          {/* PDF Viewer */}
          {currentTimetable ? (
              <div className={styles.pdfContainer}>
                <iframe
                    src={getFullUrl(currentTimetable.pdf)}
                    className={styles.pdfViewer}
                    title={`${getSemesterLabel(selectedSemester)} Timetable`}
                    frameBorder="0"
                />
                <div className={styles.downloadSection}>
                  <a
                      href={getFullUrl(currentTimetable.pdf)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.downloadButton}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="currentColor"/>
                    </svg>
                    Download PDF
                  </a>
                </div>
              </div>
          ) : (
              <div className={styles.noDataContainer}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" fill="#ccc"/>
                </svg>
                <p className={styles.noDataText}>
                  No timetable available for {getSemesterLabel(selectedSemester)}
                </p>
              </div>
          )}

          {error && timetables.length === 0 && (
              <div className={styles.errorContainer}>
                <p className={styles.errorText}>{error}</p>
              </div>
          )}
        </div>
      </SharedCseLayout>
  );
};

export default CseTimeTable;
