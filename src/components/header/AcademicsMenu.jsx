import React from "react";
import { Link } from "react-router-dom";

const AcademicsMenu = () => {
  const sections = [
    {
      title: "Academic Departments",
      links: [
        { name: "Computer Science Engineering", path: "/cse" },
        { name: "Mechanical Engineering", path: "/mech" },
        { name: "Electronics And Communication Engineering", path: "/ece" },
        { name: "Civil Engineering", path: "/civil" },
        { name: "Applied Science", path: "/applied-science" },
      ],
    },
    {
      title: "Academics",
      links: [
        { name: "Convocation 2023", path: "/convocation" },
        { name: "Students Feedback", path: "https://smartcookie.in/" },
        { name: "Examination", path: "/examination" },
        { name: "E-Akademik", path: "https://eakadamik.in/ccet/" },
        { name: "E-Cell", path: "/ecell" },
        { name: "NIRF", path: "/academics/nirf" },
        { name: "FAQs", path: "/faq" },
      ],
    },
    {
      title: "Mandatory Disclosure",
      links: [
        { name: "EoA Report 2024-25", path: "/eoa-2024" },
        { name: "Application Part-1", path: "/application-part1" },
        { name: "Application Part-2", path: "/application-part2" },
        { name: "OLD AICTE EoAs", path: "/old-aicte" },
      ],
    },
    {
      title: "Overview",
      links: [
        { name: "Courses Offered", path: "/courses" },
        { name: "Academic Calendar", path: "/calendar" },
        { name: "Academic Prospectus", path: "/prospectus" },
        { name: "Affiliating University", path: "https://puchd.ac.in/" },
      ],
    },
  ];

  return (
      <div className="absolute top-full left-1/2 transform -translate-x-[31%] hidden group-hover:grid grid-cols-4 bg-white/70 backdrop-blur-md shadow-xl z-50 p-6 gap-6 text-1xl text-gray-800 rounded-lg border border-gray-100 w-[1000px] max-w-[90vw]">
        {sections.map((section, i) => (
            <div key={i}>
              <div className="font-semibold border-b border-gray-200 pb-2 mb-3 text-red-700">
                {section.title}
              </div>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                    <li
                        key={j}
                        className="hover:bg-[#FB923C] hover:text-white cursor-pointer transition-colors duration-200 px-2 py-1 rounded"
                    >
                      {link.path.startsWith("http") ? (
                          <a
                              href={link.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block w-full h-full"
                          >
                            {link.name}
                          </a>
                      ) : (
                          <Link to={link.path} className="block w-full h-full">
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

export default AcademicsMenu;
