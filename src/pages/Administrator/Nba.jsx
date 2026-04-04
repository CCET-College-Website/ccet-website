import React from "react";

export default function Nba() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-orange-600">
        NBA Accreditation
      </h1>
      <p className="mb-6 text-gray-700">
        This page provides information about NBA (National Board of Accreditation).
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-5 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Current Status</h2>
          <p className="text-gray-600">
            Accreditation is under review. Updated information will be provided
            soon.
          </p>
        </div>

        <div className="p-5 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Documents</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <a
                href="#"
                className="text-blue-600 underline hover:text-blue-800"
              >
                NBA Guidelines
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Accreditation Certificate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
