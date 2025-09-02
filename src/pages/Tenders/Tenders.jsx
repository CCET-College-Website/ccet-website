import React from "react";
import "./Tenders.css";

const Tenders = () => {
  const tenders = [
    {
      title:
        "E-Tender for Providing Mess Services at CCET (Degree Wing) - 2025",
      link: "#",
      date: "2025-02-21",
    },
    {
      title: "E-Tender for APRATIM 2k24",
      link: "#",
      date: "2024-10-29",
    },
    {
      title:
        "E-Tender for Providing Mess Services at CCET (Degree Wing), Sector 26, Chandigarh",
      link: "#",
      date: "2022-12-01",
    },
    {
      title:
        "E-Tender for Providing Mess Services at CCET (Degree Wing), Sector 26, Chandigarh (Old - 2)",
      link: "#",
      date: "2022-10-27",
    },
    {
      title:
        "E-Tender for Providing Mess Services at CCET (Degree Wing), Sector 26, Chandigarh (Old - 1)",
      link: "#",
      date: "2022-10-04",
    },
    {
      title: "Purchase of Material for Various Labs of ME Department",
      link: "#",
      date: "2020-01-18",
    },
    {
      title:
        "E-tender for the purchase of equipments in the Labs of Electronics and Communication Engineering Department on item-wise basis for each scheme",
      link: "#",
      date: "2019-12-18",
    },
    {
      title:
        "E-tenders for the purchase of equipments in the Labs of ECE Department",
      link: "#",
      date: "2019-12-03",
    },
    {
      title: "E-tender for APRATIM 2k19",
      link: "#",
      date: "2019-10-18",
    },
  ];

  return (
    <div className="tenders-container">
      <h1 className="tenders-title">Tenders</h1>

      <table className="tenders-table">
        <thead>
          <tr>
            <th>Tender Links</th>
            <th>Uploaded Date</th>
          </tr>
        </thead>
        <tbody>
          {tenders.map((tender, index) => (
            <tr key={index}>
              <td>
                <a href={tender.link} target="_blank" rel="noopener noreferrer">
                  {tender.title}
                </a>
              </td>
              <td>{tender.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tenders;
