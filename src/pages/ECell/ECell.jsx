import React, { useState, useEffect } from 'react';

const ECell = () => {
  const [openYear, setOpenYear] = useState(null);
  const [openBranch, setOpenBranch] = useState(null);
  const [ecellData, setEcellData] = useState(null);
  const [classInchargeData, setClassInchargeData] = useState([]);
  const [classRepresentativeData, setClassRepresentativeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);

        // Make multiple API calls in parallel
        const [groupedResponse, inchargeResponse, crResponse] = await Promise.all([
          fetch('https://ccet.ac.in/api/e-cell.php?grouped=true'),
          fetch('https://ccet.ac.in/api/e-cell.php?table=class_incharge&is_active=true'),
          fetch('https://ccet.ac.in/api/e-cell.php?table=class_representative&is_active=true')
        ]);

        // Check if all responses are OK
        if (!groupedResponse.ok || !inchargeResponse.ok || !crResponse.ok) {
          throw new Error('Failed to fetch data from one or more endpoints');
        }

        const [groupedData, inchargeData, crData] = await Promise.all([
          groupedResponse.json(),
          inchargeResponse.json(),
          crResponse.json()
        ]);

        setEcellData(groupedData);
        setClassInchargeData(Array.isArray(inchargeData) ? inchargeData : []);
        setClassRepresentativeData(Array.isArray(crData) ? crData : []);

      } catch (err) {
        setError(err.message);
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const organizeClassData = () => {
    const organizedData = {};

    const allClassData = [...classInchargeData, ...classRepresentativeData];

    allClassData.forEach(item => {
      const year = item.year;
      const branch = item.branch;

      if (!organizedData[year]) {
        organizedData[year] = {};
      }

      if (!organizedData[year][branch]) {
        organizedData[year][branch] = {
          incharge: null,
          crs: []
        };
      }

      if (item.position && item.position.toLowerCase().includes('incharge')) {
        organizedData[year][branch].incharge = item;
      } else {
        organizedData[year][branch].crs.push(item);
      }
    });

    return organizedData;
  };

  const toggleYear = (year) => {
    setOpenYear(openYear === year ? null : year);
    setOpenBranch(null);
  };

  const toggleBranch = (branch) => {
    setOpenBranch(openBranch === branch ? null : branch);
  };

  if (loading) {
    return (
        <div className="min-h-screen p-4 md:p-8 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading E-Cell data...</p>
          </div>
        </div>
    );
  }

  if (error) {
    return (
        <div className="min-h-screen p-4 md:p-8 flex items-center justify-center">
          <div className="text-center text-red-600">
            <p>Error: {error}</p>
            <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Retry
            </button>
          </div>
        </div>
    );
  }

  const yearsData = organizeClassData();

  return (
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">E-Cell</h1>

            <div className="flex flex-col md:flex-row">
              {/* E-Cell Incharge */}
              <div className="flex-1 pr-0 md:pr-6 mb-6 md:mb-0">
                <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-6">
                  <h2 className="text-xl font-semibold text-gray-700 mb-3">E-Cell Incharge</h2>
                  {ecellData?.ecell_incharge ? (
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="font-medium text-blue-800">{ecellData.ecell_incharge.name}</p>
                        <p className="text-sm text-gray-600">{ecellData.ecell_incharge.position}</p>
                        <div className="mt-3">
                          <p className="text-sm text-gray-700">Contact Information:</p>
                          <p className="text-blue-600">{ecellData.ecell_incharge.email}</p>
                          {ecellData.ecell_incharge.phone && (
                              <p className="text-gray-700">{ecellData.ecell_incharge.phone}</p>
                          )}
                        </div>
                      </div>
                  ) : (
                      <div className="bg-gray-50 p-4 rounded-lg text-gray-500">
                        No incharge information available
                      </div>
                  )}
                </div>
              </div>

              {/* Student Helpdesk */}
              <div className="flex-1 pl-0 md:pl-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-3">Student Helpdesk</h2>
                {ecellData?.student_helpdesk && ecellData.student_helpdesk.length > 0 ? (
                    ecellData.student_helpdesk.map((student, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4 last:mb-0">
                          <p className="font-medium text-gray-800">{student.name}</p>
                          <p className="text-sm text-gray-600">
                            {student.year}, {student.department}
                          </p>
                          <div className="mt-3 space-y-1">
                            {student.phone && (
                                <p className="flex items-center">
                                  <svg className="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                  </svg>
                                  {student.phone}
                                </p>
                            )}
                            {student.email && (
                                <p className="flex items-center">
                                  <svg className="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                  </svg>
                                  {student.email}
                                </p>
                            )}
                          </div>
                        </div>
                    ))
                ) : (
                    <div className="bg-gray-50 p-4 rounded-lg text-gray-500">
                      No student helpdesk information available
                    </div>
                )}
              </div>
            </div>
          </div>

          {/* Class Incharges & CRs */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Class Incharges & CRs</h2>

            {Object.keys(yearsData).length > 0 ? (
                <div className="space-y-4">
                  {Object.entries(yearsData).map(([year, branches]) => (
                      <div key={year} className="border rounded-lg overflow-hidden">
                        <button
                            className="w-full p-4 text-left bg-blue-50 hover:bg-blue-100 transition-colors duration-200 flex justify-between items-center"
                            onClick={() => toggleYear(year)}
                        >
                          <span className="text-lg font-semibold text-blue-800">{year}</span>
                          <svg
                              className={`w-5 h-5 transform transition-transform duration-200 ${openYear === year ? 'rotate-180' : ''}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {openYear === year && (
                            <div className="p-4 bg-white">
                              {Object.entries(branches).map(([branch, data]) => (
                                  <div key={branch} className="mb-4 last:mb-0">
                                    <button
                                        className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 flex justify-between items-center"
                                        onClick={() => toggleBranch(`${year}-${branch}`)}
                                    >
                                      <span className="font-medium text-gray-800">{branch}</span>
                                      <svg
                                          className={`w-5 h-5 transform transition-transform duration-200 ${openBranch === `${year}-${branch}` ? 'rotate-180' : ''}`}
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                      </svg>
                                    </button>

                                    {openBranch === `${year}-${branch}` && (
                                        <div className="p-4 bg-white rounded-lg mt-2 border">
                                          {/* Class Incharge */}
                                          <div className="mb-4">
                                            <h4 className="font-semibold text-gray-700 mb-2">Class Incharge</h4>
                                            {data.incharge ? (
                                                <div className="bg-blue-50 rounded-lg p-3">
                                                  <p className="font-semibold text-blue-800">{data.incharge.name}</p>
                                                  <p className="text-sm text-gray-600">{data.incharge.position}</p>
                                                  {data.incharge.phone && <p className="mt-2">{data.incharge.phone}</p>}
                                                  {data.incharge.email && <p className="text-blue-600">{data.incharge.email}</p>}
                                                </div>
                                            ) : (
                                                <div className="bg-gray-50 rounded-lg p-3 text-gray-500">
                                                  No class incharge information available
                                                </div>
                                            )}
                                          </div>

                                          {/* Class Representatives */}
                                          <div>
                                            <h4 className="font-semibold text-gray-700 mb-2">Class Representatives</h4>
                                            {data.crs && data.crs.length > 0 ? (
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                  {data.crs.map((cr, index) => (
                                                      <div key={index} className="bg-gray-50 rounded-lg p-3">
                                                        <p className="font-semibold text-gray-800">{cr.name}</p>
                                                        <p className="text-sm text-gray-600">{cr.position}</p>
                                                        {cr.phone && <p className="mt-2">{cr.phone}</p>}
                                                        {cr.email && <p className="text-blue-600">{cr.email}</p>}
                                                      </div>
                                                  ))}
                                                </div>
                                            ) : (
                                                <div className="bg-gray-50 rounded-lg p-3 text-gray-500">
                                                  No class representatives information available
                                                </div>
                                            )}
                                          </div>
                                        </div>
                                    )}
                                  </div>
                              ))}
                            </div>
                        )}
                      </div>
                  ))}
                </div>
            ) : (
                <div className="text-center text-gray-500 py-8">
                  No class information available
                </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default ECell;