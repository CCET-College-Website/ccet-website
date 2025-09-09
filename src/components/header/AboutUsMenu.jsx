import React, { useState } from "react";
import { Link } from "react-router-dom";

const AboutUsMenu = () => {
  const [adminOpen, setAdminOpen] = useState(false);
  const [nbaOpen, setNbaOpen] = useState(false);

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
        </Link>,
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

        // Administrator block
        <div key="administrator" className="w-full">
          <button
            onClick={() => setAdminOpen(!adminOpen)}
            aria-expanded={adminOpen}
            className="w-full flex items-center justify-between text-left px-0 py-1 rounded hover:bg-[#FB923C] hover:text-white transition-colors duration-200"
          >
            <span>Administrator</span>
            <span
              className={`inline-block transform transition-transform duration-200 ${
                adminOpen ? "rotate-90" : "rotate-0"
              }`}
              aria-hidden
            >
              ▶
            </span>
          </button>

          {/* Administrator Submenu */}
          <div
            className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
              adminOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="ml-0 bg-white border border-gray-200 rounded shadow-md">
              <li className="block px-4 py-2 text-gray-700 rounded hover:bg-orange-400 hover:text-white">
                <Link
                  to="/administrator/rules-policies"
                  className="w-full block"
                >
                  Rules and Policies
                </Link>
              </li>
              <li className="block px-4 py-2 text-gray-700 rounded hover:bg-orange-400 hover:text-white">
                <Link
                  to="/administrator/audit-report"
                  className="w-full block"
                >
                  Audit Reports
                </Link>
              </li>

              {/* NBA Submenu */}
              <li className="block w-full">
                <button
                  onClick={() => setNbaOpen(!nbaOpen)}
                  aria-expanded={nbaOpen}
                  className="w-full flex items-center justify-between px-4 py-2 text-gray-700 rounded hover:bg-orange-400 hover:text-white transition-colors duration-200"
                >
                  <span>NBA</span>
                  <span
                    className={`inline-block transform transition-transform duration-200 ${
                      nbaOpen ? "rotate-90" : "rotate-0"
                    }`}
                    aria-hidden
                  >
                    ▶
                  </span>
                </button>

                {/* NBA Submenu links */}
                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                    nbaOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="grid grid-cols-1 gap-2 bg-white border border-gray-200 rounded shadow-md">
                    <li className="px-4 py-2 hover:bg-orange-400 hover:text-white rounded">
                      <Link
                        to="https://ccet.ac.in/pdf/notices/general/NBA%20Accreditation%20Letter.pdf"
                        className="block w-full"
                      >
                        NBA Accreditation Letter
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-orange-400 hover:text-white rounded">
                      <Link
                        to="/nba/cse"
                        className="block w-full"
                      >
                        CSE
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-orange-400 hover:text-white rounded">
                      <Link
                        to="/nba/ece"
                        className="block w-full"
                      >
                        ECE
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-orange-400 hover:text-white rounded">
                      <Link
                        to="/nba/mech"
                        className="block w-full"
                      >
                        MECH
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-orange-400 hover:text-white rounded">
                      <Link
                        to="/nba/civil"
                        className="block w-full"
                      >
                        CIVIL
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>,
      ],
    },
    {
      title: "Life @ CCET",
      links: [
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
        <Link to="/infrastructure" className="block w-full" key="infrastructure">
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

        <Link to="/sports-facility" className="block w-full" key="sports-facility">
          Sports Facility
        </Link>,
      ],
    },
  ];

  return (
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
  );
};

export default AboutUsMenu;
