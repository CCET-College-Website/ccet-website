import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import nirfLogo from '../../assets/NIRF/nirf_logo.png';


const nirfReports = [
  { year: 2024, pdf: "/nirf/ccet_nirf_2024.pdf" },
  { year: 2023, pdf: "/nirf/ccet_nirf_2023.pdf" },
  { year: 2022, pdf: "/nirf/ccet_nirf_2022.pdf" },
  { year: 2021, pdf: "/nirf/ccet_nirf_2021.pdf" },
];

const NIRF = () => {
  const [openYear, setOpenYear] = useState(null);

  const toggleYear = (year) => {
    setOpenYear(openYear === year ? null : year);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      
      <main className="flex-1 max-w-5xl mx-auto px-4 py-8">
        {/* Header Title */}
       
       <div className="flex flex-row items-center justify-center bg-gray-100 py-6 px-4 rounded shadow mb-8">
         <img
           src={nirfLogo}
           alt="NIRF Logo"
           className="h-16 w-auto mr-4"
         />
         <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
           National Institutional Ranking Framework (NIRF)
         </h1>
       </div>

        {/* Overview */}
        <div className="bg-white border-l-4 border-blue-600 shadow p-4 rounded mb-6">
          <h2 className="text-lg font-semibold text-blue-700 mt-4 mb-4">Overview</h2>
          <p className="text-gray-700 text-justify">
            The National Institutional Ranking Framework (NIRF) was approved by the MHRD and launched by the Honourable Minister of Human Resource Development on 29th September 2015.
          </p>
          <p className="text-gray-700 mt-2 text-justify">
            This framework outlines a methodology to rank institutions across the country. It identifies parameters for ranking universities and institutions across domains like "Teaching, Learning and Resources", "Research and Professional Practices", "Graduation Outcomes", "Outreach and Inclusivity", and "Perception".
          </p>
        </div>

        {/* Dynamic Accordion for Reports */}
        <div className="text-gray-800">
          <h3 className="text-xl font-semibold mb-4 text-center">
            The following sections have links to the documents submitted by CCET to NIRF in the respective years:
          </h3>

          {nirfReports.map((report) => (
            <div
              key={report.year}
              className="bg-white rounded shadow-md mb-3 overflow-hidden"
            >
              <button
                onClick={() => toggleYear(report.year)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-blue-800 font-semibold hover:bg-blue-50 transition"
              >
                <span>▶ Data submitted for NIRF {report.year}</span>
                <span>{openYear === report.year ? "−" : "+"}</span>
              </button>
              {openYear === report.year && (
                <div className="px-4 pb-4 text-sm text-blue-700">
                  <a
                    href={report.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-900"
                  >
                    View PDF Report for {report.year}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      
    </div>
  );
};

export default NIRF;
