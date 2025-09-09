import React from "react";
import "./Degree-pu-leet.css";

const DegreeCourseLeet = () => {
  return (
    <div className="leet-container">
      <h1 className="leet-title">DEGREE COURSE THROUGH LEET</h1>

      <p className="leet-text">
        The admissions to degree courses takes place through{" "}
        <a
          href="https://puleet.puchd.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Panjab University Lateral Engineering Entrance Test
        </a>
        .
      </p>

      <p className="leet-text">
        All candidates desirous of seeking admission to the institution are
        required to submit their applications online on website{" "}
        <a
          href="http://puleet.puchd.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          http://puleet.puchd.ac.in/
        </a>
        . The information brochure and other details are available on the
        website.
      </p>

      <div className="leet-links">
        <h3>Important Links:</h3>
        <ul>
          <li>
            <a
              href="https://puleet.puchd.ac.in/importantdates.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              PULEET Important Dates
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DegreeCourseLeet;
