import React, { useState, useEffect } from "react";

const API_BASE = "https://ccet.ac.in/api/webmasters.php";
const BASE_URL = "https://ccet.ac.in";

function Card({ person }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "https://via.placeholder.com/120";
    if (imagePath.startsWith("http")) return imagePath;

    const path = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
    const encodedPath = path
        .split("/")
        .map((segment) => encodeURIComponent(segment))
        .join("/");
    return `${BASE_URL}${encodedPath}`;
  };

  return (
      <div className="group flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 w-72 hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100">
        <div className="relative mb-4">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
            <div className="w-full h-full rounded-full bg-white p-1 relative">
              <img
                  src={getImageUrl(person.image_url)}
                  alt={person.name}
                  className={`w-full h-full rounded-full object-cover transition-opacity duration-300 ${
                      imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
              />
              {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
              )}
            </div>
          </div>
        </div>

        <h3 className="font-bold text-xl text-gray-800 group-hover:text-gray-900 transition-colors text-center">
          {person.name}
        </h3>
        <p className="text-sm text-gray-600 whitespace-pre-line text-center mt-2 leading-relaxed">
          {person.role}
        </p>

        <div className="flex space-x-4 mt-4">
          {person.github_url && (
              <a
                  href={person.github_url}
                  target="_blank"
                  rel="noreferrer"
                  className="transform hover:scale-110 transition-transform duration-200"
              >
                <i className="fab fa-github text-xl text-gray-600 hover:text-gray-900"></i>
              </a>
          )}
          {person.linkedin_url && (
              <a
                  href={person.linkedin_url}
                  target="_blank"
                  rel="noreferrer"
                  className="transform hover:scale-110 transition-transform duration-200"
              >
                <i className="fab fa-linkedin text-xl text-blue-600 hover:text-blue-800"></i>
              </a>
          )}
        </div>
      </div>
  );
}

function BatchSection({ batch }) {
  const memberRows = [];
  for (let i = 0; i < batch.members.length; i += 2) {
    memberRows.push(batch.members.slice(i, i + 2));
  }

  return (
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 mb-10">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Batch of {batch.batch}
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Show only 2 cards per row */}
        <div className="space-y-6">
          {memberRows.map((row, i) => (
              <div
                  key={i}
                  className="flex justify-center gap-8 flex-wrap sm:flex-nowrap"
              >
                {row.map((member, j) => (
                    <Card key={j} person={member} />
                ))}
              </div>
          ))}
        </div>
      </div>
  );
}

export default function Webmasters() {
  const [facultyIncharges, setFacultyIncharges] = useState([]);
  const [studentLeads, setStudentLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [facultyResponse, studentsResponse] = await Promise.all([
        fetch(`${API_BASE}?entity=faculty`),
        fetch(`${API_BASE}?entity=students`),
      ]);

      const [facultyResult, studentsResult] = await Promise.all([
        facultyResponse.json(),
        studentsResponse.json(),
      ]);

      if (facultyResult.success === false)
        throw new Error(facultyResult.error || "Failed to fetch faculty data");
      if (studentsResult.success === false)
        throw new Error(studentsResult.error || "Failed to fetch student data");

      setFacultyIncharges(facultyResult);

      const groupedStudents = studentsResult.reduce((acc, student) => {
        if (!acc[student.batch]) acc[student.batch] = [];
        acc[student.batch].push(student);
        return acc;
      }, {});

      const studentLeadsArray = Object.keys(groupedStudents)
          .sort((a, b) => b.localeCompare(a))
          .map((batch) => ({
            batch,
            members: groupedStudents[batch].sort(
                (a, b) => a.display_order - b.display_order
            ),
          }));

      setStudentLeads(studentLeadsArray);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-6 flex justify-center items-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Loading webmasters data...</p>
          </div>
        </div>
    );
  }

  if (error) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-6 flex justify-center items-center">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-exclamation-triangle text-red-500 text-2xl"></i>
            </div>
            <h2 className="text-2xl font-bold text-red-600 mb-2">Oops!</h2>
            <p className="text-gray-600 mb-6">Error: {error}</p>
            <button
                onClick={fetchAllData}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Try Again
            </button>
          </div>
        </div>
    );
  }

  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Webmasters
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Meet the talented team behind our digital presence
          </p>
        </div>

        <section className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Faculty In-charges
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <div className="flex justify-center gap-12 flex-wrap">
            {facultyIncharges.slice(0, 2).map((f, i) => (
                <Card key={i} person={f} />
            ))}
          </div>
          {facultyIncharges.length > 2 && (
              <div className="mt-8">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    Additional Faculty Members
                  </h3>
                </div>
                <div className="flex justify-center gap-8 flex-wrap">
                  {facultyIncharges.slice(2).map((f, i) => (
                      <Card key={i + 2} person={f} />
                  ))}
                </div>
              </div>
          )}
        </section>

        <section className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Student Leads
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-10">
            {studentLeads.map((batch, index) => (
                <BatchSection key={index} batch={batch} />
            ))}
          </div>
        </section>
      </div>
  );
}
