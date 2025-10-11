import React, { useState } from 'react';

const EceResearch = () => {
  const [activeTab, setActiveTab] = useState('faculty');

  const facultyPublications = [
    {
      title: 'Development of Sustainable Concrete Using Recycled Aggregates',
      authors: 'Kumar, R., Sharma, K., & Mehta, A. (2023).',
      journal: 'Journal of Sustainable Construction Materials',
      impactFactor: 4.2,
      citations: 18,
    },
    {
      title: 'Seismic Retrofitting Techniques for Heritage Structures',
      authors: 'Poonam, Kumar, A., & Khan, M. S. P. (2022).',
      journal: 'International Journal of Structural Engineering',
      impactFactor: 3.8,
      citations: 12,
    },
    {
      title: 'Optimization of Box Girder Bridge Design Using Finite Element Analysis',
      authors: 'Mehta, A. & Kumar, R. (2021).',
      journal: 'Journal of Bridge Engineering',
      impactFactor: 5.1,
      citations: 25,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Research & Publications</h1>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-600 mt-3">Faculty and students research contributions</p>
      </div>

      {/* Tabs */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-3xl">
        <div className="flex border-b">
          <button
            className={`flex-1 py-3 font-medium text-center ${activeTab === 'faculty' ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-700'} rounded-t-lg`}
            onClick={() => setActiveTab('faculty')}
          >
            Faculty Publications
          </button>
          <button
            className={`flex-1 py-3 font-medium text-center ${activeTab === 'student' ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-700'} rounded-t-lg`}
            onClick={() => setActiveTab('student')}
          >
            Student Publications
          </button>
          <button
            className={`flex-1 py-3 font-medium text-center ${activeTab === 'projects' ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-700'} rounded-t-lg`}
            onClick={() => setActiveTab('projects')}
          >
            Research Projects
          </button>
        </div>

        {/* Faculty Publications Section */}
        {activeTab === 'faculty' && (
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-yellow-500 pl-2">
              Faculty Publications
            </h2>

            <div className="space-y-4">
              {facultyPublications.map((pub, index) => (
                <div
                  key={index}
                  className="bg-gray-100 border-l-4 border-blue-600 rounded-lg shadow-sm p-4 hover:shadow-md transition"
                >
                  <h3 className="text-blue-800 font-semibold">{pub.title}</h3>
                  <p className="text-gray-700 text-sm mt-1">{pub.authors} {pub.journal}</p>
                  <div className="text-gray-600 text-sm mt-2 flex justify-between">
                    <span>Impact Factor: {pub.impactFactor}</span>
                    <span>Citations: {pub.citations}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Placeholder sections */}
        {activeTab === 'student' && (
          <div className="p-6 text-center text-gray-500">
            <p>Student publications will appear here.</p>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="p-6 text-center text-gray-500">
            <p>Research projects will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EceResearch;
