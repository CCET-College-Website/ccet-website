import React from "react";

const facultyIncharges = [
  {
    name: "Dr. Dheerendra Singh",
    role: "In-charge",
    img: "https://via.placeholder.com/120",
    linkedin: "#",
  },
  {
    name: "Er. Animesh Singh",
    role: "Joint In-charge",
    img: "https://via.placeholder.com/120",
    linkedin: "#",
  },
];

const studentLeads = [
  {
    batch: "2021-2025",
    members: [
      {
        name: "Siddharth Singh Khati",
        role: "Head, 2024-25\nMember, 2022-24",
        img: "https://via.placeholder.com/120",
        linkedin: "#",
        github: "#",
      },
      {
        name: "Saket Sarin",
        role: "Co-Head, 2024-25\nMember, 2022-24",
        img: "https://via.placeholder.com/120",
        linkedin: "#",
        github: "#",
      },
    ],
  },
  {
    batch: "2020-2024",
    members: [
      {
        name: "Uday Madan",
        role: "Head, 2022-24\nMember, 2020-22",
        img: "https://via.placeholder.com/120",
        linkedin: "#",
        github: "#",
      },
      {
        name: "Devashish Gupta",
        role: "Co-Head, 2022-24\nMember, 2020-22",
        img: "https://via.placeholder.com/120",
        linkedin: "#",
        github: "#",
      },
    ],
  },
  // Add more batches here...
];

function Card({ person }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 w-60 hover:scale-105 transition">
      <img
        src={person.img}
        alt={person.name}
        className="w-24 h-24 rounded-full object-cover border-4 border-gray-100 shadow"
      />
      <h3 className="mt-4 font-semibold text-lg">{person.name}</h3>
      <p className="text-sm text-gray-600 whitespace-pre-line text-center">
        {person.role}
      </p>
      <div className="flex space-x-3 mt-3">
        {person.github && (
          <a href={person.github} target="_blank" rel="noreferrer">
            <i className="fab fa-github text-xl text-gray-700 hover:text-black"></i>
          </a>
        )}
        {person.linkedin && (
          <a href={person.linkedin} target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin text-xl text-blue-600 hover:text-blue-800"></i>
          </a>
        )}
      </div>
    </div>
  );
}

export default function Webmasters() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">Webmasters</h1>

      {/* Faculty Incharge Section */}
      <section className="max-w-6xl mx-auto mb-14">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Faculty In-charges
        </h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {facultyIncharges.map((f, i) => (
            <Card key={i} person={f} />
          ))}
        </div>
      </section>

      {/* Student Leads Section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Student Leads
        </h2>
        {studentLeads.map((batch, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Batch of {batch.batch}
            </h3>
            <div className="flex justify-center gap-8 flex-wrap">
              {batch.members.map((m, i) => (
                <Card key={i} person={m} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
