import React from "react";
import { Link } from "react-router-dom";

const AboutUsMenu = () => {
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
        "Campus Map",
        <Link to="/contact" className="block w-full" key="contact">
          How To Reach Us
        </Link>,
      ],
    },
    {
      title: "Administration",
      links: [
        <Link to="/about/principal" className="block w-full">
          Principal
        </Link>,
        "Officials at CCET",
        <Link to="/about/academic-heads" className="block w-full">
          Academic Heads
        </Link>, // ✅ Only this link is clickable
        "Administrator",
      ],
    },
    {
      title: "Life @ CCET",
      links: [
        "Campus Virtual Tour",
        <Link to="https://ccet.ac.in/library/" className="block w-full">
          Library
        </Link>,
        "Class Rooms",
        "Canteen",
        <Link to="/infrastructure" className="block w-full">Infrastructure</Link>,
        <Link to="https://ccet.ac.in/pdf/notices/general/Policy_on_use_of_IT%20_esources_of_Government_of_India_0%20(1).pdf" className="block w-full">
          Policy on use of IT Resources
        </Link>,
        <Link to="/sports-facility" className="block w-full">
          Sports Facility
        </Link>,
      ],
    },
  ];

    return (
        <div className="absolute top-full -left-20 transform overflow-x-auto -translate-x-[9%] hidden group-hover:grid grid-cols-3 bg-white/80 shadow-xl z-50 p-6 gap-8 text-1xl text-gray-800 rounded-lg border border-gray-100 w-[1000px] max-w-[90vw] right-0 mx-auto">
            {sections.map((section, i) => (
                <div key={i}>
                    <div className="font-semibold border-b border-gray-200 pb-2 mb-3 text-red-700">{section.title}</div>
                    <ul className="space-y-2">
                        {section.links.map((link, j) => (
                            <li key={j} className="hover:bg-[#FB923C] hover:text-white cursor-pointer transition-colors duration-200 px-2 py-1 rounded">
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
