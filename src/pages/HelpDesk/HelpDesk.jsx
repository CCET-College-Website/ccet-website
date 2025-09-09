import React from "react";
import "./HelpDesk.css";

const HelpDesk = () => {
  return (
    <div className="helpdesk-container">
      <h2 className="title">Admissions Help Desk</h2>
      <ul className="contact-list">
        <li>
          Dr. Ashwani Kumar - <span>9872823250</span>
        </li>
        <li>
          Mr. Hardeep Saini - <span>9914611106</span>
        </li>
        <li>
          Dr. Sarabjeet Singh - <span>9463739413</span>
        </li>
        <li>
          Dr. Ankit Gupta - <span>8725014479</span>
        </li>
        <li>
          Mr. Anil Kumar - <span>9816290720</span>
        </li>
      </ul>

      <h3 className="subtitle">For Hostel Queries</h3>
      <ul className="contact-list">
        <li>
          Dr. K. G. Sharma (Boys hostel) - <span>9414403565</span>
        </li>
        <li>
          Dr. Shilpa Jindal (Girls hostel) - <span>9463328881</span>
        </li>
      </ul>

      <p className="email">
        Email: <a href="mailto:helpdesk@ccet.ac.in">helpdesk@ccet.ac.in</a>
      </p>
    </div>
  );
};

export default HelpDesk;
