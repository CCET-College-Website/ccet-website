 main
// src/components/header/AboutUsMenu.jsx
import React from "react";

import React, { useState } from "react";
 main
import { Link } from "react-router-dom";

const AboutUsMenu = () => {
  const [adminOpen, setAdminOpen] = useState(false);

  const sections = [
    {
      title: "About",
      links: [
        <Link to="/about/history" className="block w-full" key="history">
          History
        </Link>,
        <Link to="/vision-mission" className="block w-full" key="vision-mission">
          Vision and Mission
        </Link>,
        <Link to="/about/campus-map" className="block w-full" key="campus-map">
          Campus Map
        </Link>,,
        <Link to="/contact" className="block w-full" key="contact">
          How To Reach Us
        </Link>,
      ],
    },
    {
      title: "Administration",
      links: [
        <Link to="/about/principal" className="block w-full" key="principal">
          Principal
        </Link>,
 main
        <Link to="/about/officials" className="block w-full" key="officials">
          Officials at CCET
        </Link>,
        <Link to="/about/academic-heads" className="block w-full" key="academic-heads">
          Academic Heads
        </Link>,
        "Administrator",

        <span key="officials" className="block w-full cursor-default">
          Officials at CCET
        </span>,
        <Link
            to="/about/academic-heads"
            className="block w-full"
            key="academic-heads"
        >
          Academic Heads
        </Link>,
        <div key="administrator" className="w-full">
          <button
              onClick={() => setAdminOpen(!adminOpen)}
              className="w-full text-left px-0 py-1 rounded hover:bg-[#FB923C] hover:text-white"
          >
            Administrator ▾
          </button>
          {adminOpen && (
              <ul className="ml-0 mt-2 bg-white border border-gray-200 rounded shadow-md">
                <li className="block px-4 py-2 text-gray-700 rounded hover:bg-orange-400 hover:text-white">
                  Rules and Policies
                </li>
              </ul>
          )}
        </div>,
 main
      ],
    },
    {
      title: "Life @ CCET",
      links: [
 main
        "Campus Virtual Tour",
        <a
          href="https://ccet.ac.in/library/"
          className="block w-full"
          key="library"
          target="_blank"
          rel="noopener noreferrer"
        >
          Library
        </a>,
        "Class Rooms",
        "Canteen",
        "Infrastructure",
        "Policy on use of IT Resources",
        <Link to="/sports-facility" className="block w-full" key="sports-facility">

        <Link to="/life/virtual-tour" className="block w-full" key="tour">
          Campus Virtual Tour
        </Link>,
        <a
            href="https://ccet.ac.in/library/"
            target="_blank"
            rel="noopener noreferrer"
            key="library"
            className="block w-full"
        >
          Library
        </a>,
        <Link to="/about/classrooms" className="block w-full" key="classrooms">
        Class Rooms
        </Link>,
          <Link to="/about/canteen" className="block w-full" key="canteen">
              Canteen
          </Link>,
        <Link
            to="/infrastructure"
            className="block w-full"
            key="infrastructure"
        >
          Infrastructure
        </Link>,
        <a
            href="https://ccet.ac.in/pdf/notices/general/Policy_on_use_of_IT%20_esources_of_Government_of_India_0%20(1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            key="policy"
            className="block w-full"
        >
          Policy on use of IT Resources
        </a>,
 main
        <Link
            to="/sports-facility"
            className="block w-full"
            key="sports-facility"
        >
 main
          Sports Facility
        </Link>,

 main
      ],
    },
  ];

  return (
 main
    <div className="absolute top-full -left-20 transform overflow-x-auto -translate-x-[9%] hidden group-hover:grid grid-cols-3 bg-white/70 backdrop-blur-md shadow-xl z-50 p-6 gap-8 text-1xl text-gray-800 rounded-lg border border-gray-100 w-[1000px] max-w-[90vw] right-0 mx-auto">
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
                {React.isValidElement(link) ? link : <span className="block w-full">{link}</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

      <div className="absolute top-full -left-20 transform overflow-x-auto -translate-x-[9%] hidden group-hover:grid grid-cols-3 bg-white/80 shadow-xl z-50 p-6 gap-8 text-1xl text-gray-800 rounded-lg border border-gray-100 w-[1000px] max-w-[90vw] right-0 mx-auto">
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
                      {link}
                    </li>
                ))}
              </ul>
            </div>
        ))}
      </div>
 main
  );
};

export default AboutUsMenu;