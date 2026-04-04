import React, { useState, useEffect } from 'react';
import "./Tenders.css";

const Tenders = () => {
  const [tenders, setTenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTenders();
  }, []);

  const fetchTenders = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('https://ccet.ac.in/api/tenders.php');

      if (!response.ok) {
        throw new Error('Failed to fetch tenders');
      }

      const data = await response.json();

      // Sort tenders by date (newest first)
      const sortedTenders = data.sort((a, b) =>
          new Date(b.date) - new Date(a.date)
      );

      setTenders(sortedTenders);
    } catch (err) {
      setError('Network error: ' + err.message);
      console.error('Error fetching tenders:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleTenderClick = (link) => {
    if (link && link !== '#') {
      // Handle both absolute and relative URLs
      if (link.startsWith('http')) {
        window.open(link, '_blank', 'noopener,noreferrer');
      } else {
        const path = link.startsWith('/') ? link : `/${link}`;
        const encodedPath = path.split('/').map(segment =>
            encodeURIComponent(segment)
        ).join('/');
        const fullUrl = `https://ccet.ac.in${encodedPath}`;
        window.open(fullUrl, '_blank', 'noopener,noreferrer');
      }
    }
  };

  if (loading) {
    return (
        <div className="tenders-container">
          <h1 className="tenders-title">Tenders</h1>
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <p>Loading tenders...</p>
          </div>
        </div>
    );
  }

  if (error) {
    return (
        <div className="tenders-container">
          <h1 className="tenders-title">Tenders</h1>
          <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
            <p>{error}</p>
            <button
                onClick={fetchTenders}
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
      <div className="tenders-container">
        <h1 className="tenders-title">Tenders</h1>

        {tenders.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '50px' }}>
              <p>No tenders available at the moment.</p>
            </div>
        ) : (
            <table className="tenders-table">
              <thead>
              <tr>
                <th>Tender Links</th>
                <th>Uploaded Date</th>
              </tr>
              </thead>
              <tbody>
              {tenders.map((tender, index) => (
                  <tr key={tender.id || index}>
                    <td>
                      <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleTenderClick(tender.link);
                          }}
                          style={{ cursor: 'pointer' }}
                      >
                        {tender.title}
                      </a>
                    </td>
                    <td>{tender.date}</td>
                  </tr>
              ))}
              </tbody>
            </table>
        )}
      </div>
  );
};

export default Tenders;