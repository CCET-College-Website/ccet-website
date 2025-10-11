import React, { useState, useEffect } from "react";
import "./AdmissionNotices.css";

export default function AdmissionNotices() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchAdmissionNotices();
  }, []);

  const fetchAdmissionNotices = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('https://ccet.ac.in/api/notices.php?type=admissions&limit=50');

      if (!response.ok) {
        throw new Error('Failed to fetch admission notices');
      }

      const result = await response.json();

      if (result.success) {
        // Sort by date (newest first)
        const sortedNotices = result.data.sort((a, b) =>
            new Date(b.date) - new Date(a.date)
        );
        setNotices(sortedNotices);
      } else {
        throw new Error(result.error || 'Failed to fetch admission notices');
      }
    } catch (err) {
      setError('Error loading admission notices: ' + err.message);
      console.error('Error fetching admission notices:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const getFullUrl = (path) => {
    if (!path || path === '#') return '#';

    if (path.startsWith('http')) {
      return path;
    }

    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `https://ccet.ac.in${cleanPath}`;
  };

  const handleNoticeClick = (e, link) => {
    e.preventDefault();
    const fullUrl = getFullUrl(link);

    if (fullUrl !== '#') {
      window.open(fullUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const filteredNotices = notices.filter((notice) =>
      notice.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
        <div className="admission-container">
          <h2 className="admission-title">Admission Notices</h2>
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <p>Loading admission notices...</p>
          </div>
        </div>
    );
  }

  if (error) {
    return (
        <div className="admission-container">
          <h2 className="admission-title">Admission Notices</h2>
          <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
            <p>{error}</p>
            <button
                onClick={fetchAdmissionNotices}
                style={{
                  marginTop: '20px',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  border: '1px solid #ccc'
                }}
            >
              Retry
            </button>
          </div>
        </div>
    );
  }

  return (
      <div className="admission-container">
        <h2 className="admission-title">Admission Notices</h2>

        <div style={{ marginBottom: '20px' }}>
          <input
              type="text"
              placeholder="Search notices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '16px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxSizing: 'border-box'
              }}
          />
        </div>

        {filteredNotices.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '50px' }}>
              <p>{searchQuery ? 'No notices found matching your search.' : 'No admission notices available at the moment.'}</p>
            </div>
        ) : (
            <table className="admission-table">
              <thead>
              <tr>
                <th>Title</th>
                <th>Uploaded Date</th>
              </tr>
              </thead>
              <tbody>
              {filteredNotices.map((notice, index) => (
                  <tr key={notice.id || index}>
                    <td>
                      <a
                          href="#"
                          className="notice-link"
                          onClick={(e) => handleNoticeClick(e, notice.link)}
                      >
                        {notice.title}
                      </a>
                    </td>
                    <td>{formatDate(notice.date)}</td>
                  </tr>
              ))}
              </tbody>
            </table>
        )}
      </div>
  );
}