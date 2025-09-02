import React from "react";
import "./PhdProgrammes.css";

const PhdProgrammes = () => {
  return (
    <div className="phd-container">
      <h1 className="phd-title">PHD Programmes</h1>

      <p className="phd-text">
        Chandigarh College of Engineering & Technology (Degree Wing), is
        approved as Research Centre of Panjab University, Chandigarh for PhD
        programs in Engineering (CSE, ECE, CE, ME). The admission in PhD
        programs are being made by the Panjab University, Chandigarh.
      </p>

      <p className="phd-text">
        For detail instruction and PhD admission prospectus, kindly visit{" "}
        <a
          href="http://phdadmissions.puchd.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          http://phdadmissions.puchd.ac.in
        </a>
        .
      </p>

      <div className="phd-links">
        <h3>Important Links:</h3>
        <ul>
          <li>
            <a
              href="https://ccet.ac.in/pdf/phd/PhD-Application-Form%202019.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Application Form for Admission to Ph.D. Programme
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PhdProgrammes;
