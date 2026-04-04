import React, { useState, useEffect } from "react";

const StudentCouncil = () => {
  const [councilData, setCouncilData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ccet.ac.in/api/student-council.php");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCouncilData(data);
      } catch (e) {
        setError("Failed to fetch student council data.");
        console.error("Fetching error: ", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <h2>Student Council</h2>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Loading student council data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-5 text-center">
        <h2>Student Council</h2>
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Student Council</h2>

      {/* Table Section (Dynamically populated with API data) */}
      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>S.No.</th>
              <th>Position</th>
              <th>Name</th>
              <th>Roll No</th>
              <th>Year/Semester</th>
              <th>Branch</th>
              <th>Mobile No</th>
            </tr>
          </thead>
          <tbody>
            {councilData.map((member, index) => (
              <tr key={member.id}>
                <td>{index + 1}</td>
                <td>{member.position}</td>
                <td>{member.name}</td>
                <td>{member.roll_no}</td>
                <td>{member.year_semester}</td>
                <td>{member.branch}</td>
                <td>{member.mobile_no}</td>
              </tr>
            ))}
            {councilData.length === 0 && (
              <tr>
                <td colSpan="7">No student council members found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <hr/>

      {/* PDF Section (Updated with absolute URL) */}
      <div className="mt-5">
        <h3 className="mb-3">Student Council FAQs</h3>
        <iframe
          // *** SRC updated to the absolute URL ***
          src="https://www.ccet.ac.in/pdf/StudentCouncilFAQ.pdf"
          width="100%"
          height="600px"
          title="Student Council FAQs"
        ></iframe>
      </div>
    </div>
  );
};

export default StudentCouncil;