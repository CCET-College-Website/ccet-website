import React from "react";
import "./AdmissionNotices.css";

const notices = [
  { title: "Admissions for batch 2025-29", date: "2025-07-24" },
  {
    title: "Physical Verification Guidelines for First-Year B.E. Students",
    date: "2024-08-16",
  },
  {
    title: "Physical Document Verification for B.E. (1st Year) Admission 2024",
    date: "2024-07-24",
  },
  {
    title: "Online Registration for 2024-25 B.E. Programs Now Open",
    date: "2024-05-01",
  },
  { title: "CCET Brochure 2024", date: "2024-04-22" },
  {
    title: "Document Verification for B.E. 1st Year Admissions 2023-24",
    date: "2023-08-14",
  },
  {
    title:
      "Information booklet for newly admitted B. E. Students of the batch 2023-2027",
    date: "2023-07-28",
  },
  {
    title:
      "Notice for commencement of new academic session for 1st Year Students",
    date: "2023-07-27",
  },
  {
    title:
      "Admissions Open: B.E. 2023 at Chandigarh College of Engineering & Technology",
    date: "2023-05-20",
  },
];

export default function AdmissionNotices() {
  return (
    <div className="admission-container">
      <h2 className="admission-title">Admission Notices</h2>
      <table className="admission-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Uploaded Date</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((notice, index) => (
            <tr key={index}>
              <td>
                <a href="#" className="notice-link">
                  {notice.title}
                </a>
              </td>
              <td>{notice.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
