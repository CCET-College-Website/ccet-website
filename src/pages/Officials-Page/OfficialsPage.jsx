// src/pages/Officials-Page/OfficialsPage.jsx
import React from "react";

const OfficialsPage = () => {
  const officials = [
    {
      name: "Dr. Sunil K. Singh",
      roleLines: [
        "Professor & Head (CSE)",
        "Professor In-charge Institute Public Relation",
        "Faculty Mentor ACM@CCET Student Chapter",
      ],
      email: "sksingh@ccet.ac.in",
      phone: "+919818182457",
    },
    {
      name: "Dr. Jatinder Madan",
      roleLines: [
        "Professor & Head (Mechanical Engg.)",
        "Chairman Technical Purchase Committee, Mechanical Department",
      ],
      email: "jatindermadan@ccet.ac.in",
      phone: "+919041291970",
    },
    {
      name: "Dr. Rajesh Kumar",
      roleLines: [
        "Professor & Head (Civil Engg.)",
        "Professor Incharge Student Welfare",
        "Chairman Technical Purchase Committee, Civil Department",
      ],
      email: "rajeshaastha@ccet.ac.in",
      phone: "+919478548248",
    },
    {
      name: "Dr. Davinder Singh Saini",
      roleLines: [
        "Professor & Head (ECE)",
        "Professor In-charge Academic Affairs",
        "Incharge Library",
        "Professor Incharge IQAC Cell",
        "Professor Incharge AICTE/AISHE/NIRF",
      ],
      email: "dssaini@ccet.ac.in",
      phone: "+918146730369",
    },
    {
      name: "Dr. R. B. Patel",
      roleLines: [
        "Professor (CSE)",
        "Professor In-charge Examination and Result",
        "Chairman Departmental Purchase committee",
      ],
      email: "rbpatel@ccet.ac.in",
      phone: "+919416932840",
    },
    {
      name: "Dr. Krishna Gopal Sharma",
      roleLines: [
        "Professor (ECE)",
        "Officer Incharge T&PC (Training & Placement Cell)",
      ],
      email: "kgsharma@ccet.ac.in",
      phone: "+919414403565",
    },
    {
      name: "Dr. Varun Gupta",
      roleLines: [
        "Professor (CSE)",
        "Head Applied Science department",
        "Professor Incharge Admissions",
        "Incharge Institute Publication Cell",
      ],
      email: "varungupta@ccet.ac.in",
      phone: "+919646047091",
    },
    {
      name: "Dr. Dheerendra Singh",
      roleLines: [
        "Professor (CSE)",
        "Hostel Warden (Boys)",
        "In-charge Computational",
        "In-charge Website",
        "In-charge E-Cell",
        "Chairman Hostel Furniture Purchase committee",
        "Jt. I/C AICTE/AISHE/NIRF",
      ],
      email: "dsingh@ccet.ac.in",
      phone: "+919876439071",
    },
    {
      name: "Dr. Aradhana Mehta",
      roleLines: [
        "Associate Professor (Civil Engg.)",
        "Hostel Warden (Girls)",
      ],
      email: "amehta@ccet.ac.in",
      phone: "+918054977561",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">
        Officials at CCET
      </h1>

      <section className="space-y-8">
        {officials.map((o, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center md:items-start 
                       bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200 p-6 
                       transition-transform duration-300 ease-in-out 
                       hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Left: photo placeholder */}
            <div className="w-full md:w-40 flex-shrink-0 mb-4 md:mb-0 md:mr-6 flex justify-center">
              <div className="w-28 h-28 bg-gray-100 rounded flex items-center justify-center text-sm text-gray-400">
                Photo
              </div>
            </div>

            {/* Right: details */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {o.name}
              </h2>

              <div className="mt-2 space-y-1">
                {o.roleLines.map((line, i) => (
                  <p key={i} className="text-sm md:text-base font-medium text-gray-700">
                    {line}
                  </p>
                ))}
              </div>

              <div className="mt-4 text-sm md:text-base text-gray-700 space-y-1">
                {o.email && (
                  <p>
                    <span className="font-medium">Email: </span>
                    <a
                      href={`mailto:${o.email}`}
                      className="text-blue-600 hover:underline break-words"
                    >
                      {o.email}
                    </a>
                  </p>
                )}

                {o.phone && (
                  <p>
                    <span className="font-medium">Mobile: </span>
                    <a
                      href={`tel:${o.phone}`}
                      className="text-blue-600 hover:underline"
                    >
                      {o.phone}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default OfficialsPage;
