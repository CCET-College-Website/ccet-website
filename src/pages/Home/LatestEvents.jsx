import React from "react";

const departments = ["CSE", "ECE", "ALL", "MECH", "CIVIL"];
const events = [
  {
    title: "CCET Website Competition",
    description:
      "College-Wide Website Development Competition took place on 1st October 2024 at the C BLOCK Seminar Hall with great enthusiastic participation from students across all branches.",
    image: "https://via.placeholder.com/300x150", // Replace with actual image path
    link: "#"
  },
  {
    title: "CCET Website Competition",
    description:
      "College-Wide Website Development Competition took place on 1st October 2024 at the C BLOCK Seminar Hall with great enthusiastic participation from students across all branches.",
    image: "https://via.placeholder.com/300x150",
    link: "#"
  },
  {
    title: "CCET Website Competition",
    description:
      "College-Wide Website Development Competition took place on 1st October 2024 at the C BLOCK Seminar Hall with great enthusiastic participation from students across all branches.",
    image: "https://via.placeholder.com/300x150",
    link: "#"
  }
];

export default function LatestEvents() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-slate-900 shadow-2xl text-white rounded-3xl p-6 w-full max-w-5xl mt-8 mb-8">
      <h2 className="text-4xl font-bold text-center mb-6">LATEST EVENTS</h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {departments.map((dept, i) => (
          <button
            key={i}
            className="bg-orange-400 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-500 transition"
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event, i) => (
          <div key={i} className="bg-white text-black rounded-3xl overflow-hidden shadow-md">
            <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
              <p className="text-sm mb-2">{event.description}</p>
              <a
                href={event.link}
                className="text-blue-600 hover:underline text-sm"
              >
                Click here for more info.
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
