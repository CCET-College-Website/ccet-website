import React from "react";

const departments = ["CSE", "ECE", "ALL", "MECH", "CIVIL"];
const notices = [
  { title: "Notice Regarding Confirmation of Examination Schedule", date: "2025-05-29" },
  { title: "Walk For Drug Free Chandigarh", date: "2025-05-01" },
  { title: "Submission of APAR is extended till 15.05.2025", date: "2025-04-24" },
  { title: "E-Tender for Mess Services at CCET Hostels", date: "2025-02-21" },
  { title: "AI Implementation Plan for CCET", date: "2025-01-27" },
];

export default function NoticePanel() {
  return (
    <div className="flex justify-center items-start bg-[#f7f4f4] dark:bg-gray-700 p-8 gap-16 font-sans mt-8 mb-8 mr-2 ml-2 rounded-3xl shadow-lg transition-colors duration-300">
      
      {/* Sidebar buttons */}
      <div className="flex flex-col gap-4">
        {departments.map((dept, index) => (
          <button
            key={index}
            className="bg-white dark:bg-gray-800 text-black dark:text-white font-semibold px-8 py-3 rounded-full border-4 border-[#30709aff] hover:bg-[#1a2347] dark:hover:bg-[#2a3568] transition"
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Notices Panel */}
      <div className="w-full max-w-2xl">
        <h1 className="text-5xl font-semibold text-center mb-6 text-black dark:text-[#30709aff]
        ">NOTICES</h1>
        
        {/* Search bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-6 py-3 rounded-full border-none outline-none text-black dark:text-white bg-white dark:bg-gray-800 shadow-md placeholder:text-gray-500 dark:placeholder:text-gray-400 text-lg"
            style={{
              boxShadow: "inset 0 0 0 4px #30709aff"
            }}
          />
        </div>

        {/* Notice list */}
        <ul className="space-y-4">
          {notices.map((notice, index) => (
            <li 
              key={index} 
              className="flex justify-between items-center text-black dark:text-gray-600 text-md border-b border-gray-300 dark:border-gray-700 pb-2"
            >
              <a href="#" className="hover:underline">{notice.title}</a>
              <span className="text-gray-900 dark:text-gray-400 text-sm">{notice.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
