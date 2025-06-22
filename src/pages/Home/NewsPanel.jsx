import React from "react";

const newsItems = [
  "AI Cell Formed at CCET",
  "Internship Drive This July",
  "New Library Hours Announced",
  "Student Research Grants Available",
  "TechFest 2025 Preps Begin"
];

export default function NewsPanel() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white shadow-2xl rounded-3xl p-6 w-full max-w-xs">
      <h2 className="text-4xl font-bold mb-6 text-center">NEWS</h2>
      <ul className="space-y-4 mb-4">
        {newsItems.map((news, i) => (
          <li key={i} className="bg-gray-200 text-black rounded-full px-4 py-2 text-sm font-medium text-center">
            {news}
          </li>
        ))}
      </ul>
      <div className="text-center">
        <a
          href="#"
          className="text-sm underline text-white hover:text-gray-300"
        >
          READ MORE
        </a>
      </div>
    </div>
  );
}
