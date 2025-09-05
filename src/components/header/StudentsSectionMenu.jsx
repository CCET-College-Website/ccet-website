import React from "react";
import { Link } from "react-router-dom";

const StudentsSectionMenu = () => {
  const sections = [
    {
      title: "Academics",
      links: [
        { name: "Student Forms", url: "/student-forms" },
        { name: "Vidya Lakshmi (Education Loan)", url: "/vidya-lakshmi" },
        {
          name: "National Apprenticeship Training",
          url: "/national-apprenticeship",
        },
        { name: "Scholarships", url: "/scholarships" },
        { name: "Fit India", url: "/fit-india" },
      ],
    },
    {
      title: "Student Grievances Redressal System",
      links: [
        {
          name: "Grievance Redressal Portal",
          url: "https://www.ccet.ac.in/grievances/login.php",
        },
      ],
    },
    {
      title: "Student Welfare",
      links: [
        { name: "Officials @ Student Welfare", url: "/officials" },
        { name: "Student Council", url: "/student-council" },
        { name: "Anti Ragging", url: "/anti-ragging" },
        { name: "Anti Ragging Committee", url: "/anti-ragging-committee" },
        {
          name: "Student Fee Payment (HDFC)",
          url: "https://paydirect.eduqfix.com/app/3qTjKfysWsfqEyNTM4giVFX4VGVYGZss5NYRHpY65DaJgmu14S3Ff6NKoVa3l2Ay/6593",
        },
        { name: "Application form to be a New Voter", url: "/new-voter" },
      ],
    },
    {
      title: "Hostel",
      links: [
        { name: "Boys Hostel", url: "/boys-hostel" },
        { name: "Girls Hostel", url: "/girls-hostel" },
      ],
    },
    {
      title: "Events",
      links: [
        { name: "Student Chapters/Clubs", url: "/student-chapters-clubs" }, 
        { name: "Apratim", url: "/apratim" },
        { name: "ACM @ CCET", url: "https://ccet.acm.org/" },
        {
          name: "ASME @ CCET",
          url: "https://sites.google.com/view/asme-ccet-student-section/home/about",
        },
        { name: "NSS", url: "/nss" },
      ],
    },
    {
      title: "Sports",
      links: [
        { name: "Sports Facilities", url: "/sports-facilities" },
        { name: "Fit India Initiative", url: "/fit-india-initiative" },
        { name: "Sports Tournaments", url: "/sports-tournaments" },
      ],
    },
  ];

  return (
    <div className="absolute top-full left-1/2 transform -translate-x-[47%] hidden group-hover:grid grid-cols-3 bg-white/70 backdrop-blur-md shadow-xl z-50 p-6 gap-6 text-1xl text-gray-800 rounded-lg border border-gray-100 min-w-[1000px] max-w-[90vw]">
      {sections.map((section, i) => (
        <div key={i}>
          <div className="font-semibold border-b border-gray-200 pb-2 mb-3 text-red-700">
            {section.title}
          </div>
          <ul className="space-y-2">
            {section.links.map((link, idx) => (
              <li
                key={idx}
                className="hover:bg-[#FB923C] hover:text-white cursor-pointer transition-colors duration-200 px-2 py-1 rounded"
              >
                {link.url.startsWith("http") ? (
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                ) : (
                  <Link to={link.url}>{link.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StudentsSectionMenu;
