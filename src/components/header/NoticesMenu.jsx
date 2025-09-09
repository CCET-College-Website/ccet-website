import React from "react";
import { Link } from "react-router-dom";

const NoticesMenu = () => {
  const sections = [
    {
      title: "Old Notices",
      links: [
        { name: "Tenders", url: "/notices/tenders" },
      ],
    },
    {
      title: "E-News Letters (pdf's)",
      links: [
        { name: "FingerPrint (Volume-VII, Issue I)", url: "/magazine/fingerprint-vii-1" },
        {
          name: "FingerPrint (Volume-VII, Issue II)",
          url: "/magazine/fingerprint-vii-2",
        },
      ],
    },
    {
      title: "Detailed Info (B.E. Exams)",
      links: [
        { name: "All Even Semester reappear students have to send their answer sheets on the email Id:- reappeareven032022@ccet.ac.in. In case of any query, Kindly contact Er. Animesh Singh(Asstt Professor CSE) :- +919584035345",url:"" },
        { name: "Date-sheet for B.E. Even Semester Examination to be held in Jan-June, 2025", url: "/notices/exam-notice-2" },
      ],
    },
  ];

  return (
    <div
      className="absolute top-full left-1/2 transform -translate-x-[93%] hidden group-hover:grid 
                 grid-cols-1 md:grid-cols-3 bg-white/70 backdrop-blur-md shadow-xl z-50 p-6 gap-6 
                 text-1xl text-gray-800 rounded-lg border border-gray-100 min-w-[300px] md:min-w-[1000px] max-w-[90vw]"
      role="menu"
    >
      {sections.map((section, i) => (
        <div key={i}>
          <div className="font-semibold border-b border-gray-200 pb-2 mb-3 text-red-700">
            {section.title}
          </div>
          <ul className="space-y-2" role="menu">
            {section.links.map((link, idx) => (
              <li key={idx} role="menuitem">
                {link.url.startsWith("http") ? (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:bg-[#FB923C] hover:text-white cursor-pointer transition-colors duration-200 px-2 py-1 rounded"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.url}
                    className="block hover:bg-[#FB923C] hover:text-white cursor-pointer transition-colors duration-200 px-2 py-1 rounded"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NoticesMenu;
