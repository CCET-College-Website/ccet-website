import React from "react";

export default function AuditReports() {
  const reports = [
    { year: 2024, title: "Audit Report 2024", link: "#" },
    { year: 2023, title: "Audit Report 2023", link: "#" },
    { year: 2022, title: "Audit Report 2022", link: "#" },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-orange-600">Audit Reports</h1>
      <p className="mb-6 text-gray-700">
        Below is a list of audit reports. Click the link to view or download.
      </p>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <ul>
          {reports.map((r, index) => (
            <li
              key={index}
              className="flex justify-between items-center px-4 py-3 border-b last:border-b-0"
            >
              <span>{r.title} (Year: {r.year})</span>
              <a
                href={r.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline text-blue-600 hover:text-blue-800"
              >
                View
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
