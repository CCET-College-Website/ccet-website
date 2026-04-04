import React, { useEffect, useState } from "react";
import "./Degree.css";

const BachelorEngineering = () => {
  const [programmeData, setProgrammeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://ccet.ac.in/api/programmes.php?type=bachelor&status=active")
        .then((response) => {
          if (!response.ok) throw new Error("Network response was not ok");
          return response.json();
        })
        .then((data) => {
          console.log(data);
          if (data && data.length > 0) {
            setProgrammeData(data[0]);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching bachelor programme:", err);
          setError(err.message || "Failed to fetch data");
          setLoading(false);
        });
  }, []);

  if (loading) {
    return (
        <div className="be-container">
          <div style={{ textAlign: 'center', padding: '4rem' }}>
            <p>Loading Bachelor of Engineering data...</p>
          </div>
        </div>
    );
  }

  if (error || !programmeData) {
    return (
        <div className="be-container">
          <div style={{ textAlign: 'center', padding: '4rem', color: '#dc3545' }}>
            <p>Error loading Bachelor of Engineering data: {error}</p>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
              Please contact the administrator or try again later.
            </p>
          </div>
        </div>
    );
  }

  return (
      <div className="be-container">
        <h1 className="be-title">{programmeData.title}</h1>

        {programmeData.intro_text && (
            <div
                className="be-intro"
                dangerouslySetInnerHTML={{ __html: programmeData.intro_text }}
            />
        )}

        {programmeData.description && (
            <div
                className="be-intro"
                dangerouslySetInnerHTML={{ __html: programmeData.description }}
            />
        )}

        {programmeData.seat_matrix && programmeData.seat_matrix.length > 0 && (
            <>
              <h2 className="seat-title">Seat Matrix for Degree Courses</h2>
              <table className="seat-table">
                <thead>
                <tr>
                  <th>Branch</th>
                  <th>Number of Seats</th>
                </tr>
                </thead>
                <tbody>
                {programmeData.seat_matrix.map((row, index) => (
                    <tr key={index}>
                      <td>{row.branch}</td>
                      <td>{row.seats}</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </>
        )}

        {programmeData.notes && programmeData.notes.length > 0 && (
            <>
              {programmeData.notes.map((note, index) => (
                  <p
                      key={index}
                      className="be-note"
                      dangerouslySetInnerHTML={{ __html: note.note_text }}
                  />
              ))}
            </>
        )}

        {programmeData.additional_info && (
            <div
                className="be-intro"
                dangerouslySetInnerHTML={{ __html: programmeData.additional_info }}
            />
        )}

        {programmeData.important_links && programmeData.important_links.length > 0 && (
            <div className="important-links">
              <h3>Important Links:</h3>
              <ul>
                {programmeData.important_links.map((link, index) => (
                    <li key={index}>
                      <a
                          href={link.link_url}
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        {link.link_text}
                      </a>
                    </li>
                ))}
              </ul>
            </div>
        )}
      </div>
  );
};

export default BachelorEngineering;