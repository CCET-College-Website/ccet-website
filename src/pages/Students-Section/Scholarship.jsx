// Scholarship.jsx

import React from 'react';
import './Scholarship.css';
import bhaskarImage from "../../assets/scholarship_BhaskarGupta.jpg";

const Scholarship = () => {
  return (
    <div>
      <section className="scholarship-section">
        <h1>Scholarships</h1>
        <h3>Scholarship Incharge</h3>

        <div className="scholarship-card">
          <img src={bhaskarImage} alt="Dr. Bhaskar Gupta" />
          <div className="card-content">
            <h4>Dr. Bhaskar Gupta</h4>
            <p><em>Nodal Officer (Scholarship)</em></p>
            <p>Email: <a href="mailto:bgupta@ccet.ac.in">bgupta@ccet.ac.in</a></p>
          </div>
        </div>

        <div className="related-info">
          <h3>Related Information:</h3>
          <ul>
            <li>
              <a 
                href="/pdfs/scholarship-info.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Information Regarding Scholarships
              </a>
            </li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Chandigarh College of Engineering and Technology</p>
      </footer>
    </div>
  );
};

export default Scholarship;
