import React from "react";
import "./RecentUpdates.css";

function RecentUpdates() {
  const updates = [
    { text: "Notice Inviting Quotation for Supply of Library Books", link: "#" },
    { text: "Online Registration for B.Tech Admissions Open", link: "#" },
    { text: "Workshop on Emerging Technologies Next Week", link: "#" },
  ];

  return (
    <div className="recent-updates-strip">
      <div className="recent-label">Recent Updates</div>
      <div className="updates-wrapper">
        <div className="updates-scroll">
          {updates.map((update, index) => (
            <span key={index} className="update-item">
              <span className="new-tag">NEW</span>
              <a href={update.link} target="_blank" rel="noopener noreferrer">
                {update.text}
              </a>
            </span>
          ))}
          {/* Duplicate items for seamless scrolling */}
          {updates.map((update, index) => (
            <span key={"dup-" + index} className="update-item">
              <span className="new-tag">NEW</span>
              <a href={update.link} target="_blank" rel="noopener noreferrer">
                {update.text}
              </a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentUpdates;
