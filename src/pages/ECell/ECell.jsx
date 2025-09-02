import React, { useState } from 'react';

const ECell = () => {
  const [openYear, setOpenYear] = useState(null);
  const [openBranch, setOpenBranch] = useState(null);

  const toggleYear = (year) => {
    setOpenYear(openYear === year ? null : year);
    setOpenBranch(null);
  };

  const toggleBranch = (branch) => {
    setOpenBranch(openBranch === branch ? null : branch);
  };

  const yearsData = {
    "First Year": {
      "CSE": {
        incharge: {
          name: "Dr Manveen Kaur",
          position: "Class Incharge, CSE",
          phone: "+91 9988957007",
          email: "manveenkaur@ccet.ac.in"
        },
        crs: [
          {
            name: "Mansi Bansal",
            position: "CR, CSE",
            phone: "+91 9465523508",
            email: "CO24337@ccet.ac.in"
          },
          {
            name: "Anshuman",
            position: "CR, CSE",
            phone: "+91 9056029802",
            email: "co24309@ccet.ac.in"
          }
        ]
      },
      "ECE": {
        incharge: {
          name: "Ms Neha",
          position: "Class Incharge, ECE",
          phone: "+91 9646614209",
          email: "neha@ccet.ac.in"
        },
        crs: [
          {
            name: "Jagnoor Singh",
            position: "CR, ECE",
            phone: "+91 7814869589",
            email: "co24526@ccet.ac.in"
          },
          {
            name: "Arjoo",
            position: "CR, ECE",
            phone: "+91 9466946561",
            email: "co24510@ccet.ac.in"
          }
        ]
      },
      "MECHANICAL": {
        incharge: {
          name: "Dr Parul Aggrawal",
          position: "Class Incharge, ME",
          phone: "+91 8437911722",
          email: "parul@ccet.ac.in"
        },
        crs: [
          {
            name: "Ria Singh",
            position: "CR, ME",
            phone: "+91 7814535145",
            email: "co24132@ccet.ac.in"
          },
          {
            name: "Rajveer Bansal",
            position: "CR, ME",
            phone: "+91 9876637542",
            email: "co24130@ccet.ac.in"
          }
        ]
      },
      "CIVIL": {
        incharge: {
          name: "Dr Parul Aggrawal",
          position: "Class Incharge, CE",
          phone: "+91 8437911722",
          email: "parul@ccet.ac.in"
        },
        crs: [
          {
            name: "Sambhav Shyam",
            position: "CR, CE",
            phone: "+91 9888932421",
            email: "co24243@ccet.ac.in"
          },
          {
            name: "Lovedeep Kaur",
            position: "CR, CE",
            phone: "+91 9463213237",
            email: "co24227@ccet.ac.in"
          }
        ]
      }
    },
    "Second Year": {
      "CSE": {
        incharge: {
          name: "Dr. Amit Chhabra",
          position: "Class Incharge, CSE",
          phone: "+91 988682625",
          email: "amitchabra@coet.ac.in"
        },
        crs: [
          {
            name: "SAMRITI SHARMA",
            position: "CR, CSE",
            phone: "+91 8554923553",
            email: "mco23380@coet.ac.in"
          },
          {
            name: "RIVA GOEL",
            position: "CR, CSE",
            phone: "91 9896847683",
            email: "mco2338@coet.ac.in"
          },
          {
            name: "SATVIK",
            position: "CR, CSE",
            phone: "91 7973617054",
            email: "co2338@coet.ac.in"
          },
          {
            name: "DHRUV BALI",
            position: "CR, CSE",
            phone: "91 7973617054",
            email: "loo2338@coet.ac.in"
          },
          {
            name: "VANSHIKA SINGLA",
            position: "CR, CSE",
            phone: "91 9473852866",
            email: "co2338@coet.ac.in"
          },
          {
            name: "MANNAV GOVAL",
            position: "CR, CSE",
            phone: "91 6284705125",
            email: "co23344@coet.ac.in"
          }
        ]
      },
      "ECE": {
        incharge: {
          name: "Dr. Hardeep Saini",
          position: "Class Incharge, ECE",
          phone: "91 991611106",
          email: "hsahil@coet.ac.in"
        },
        crs: [
          {
            name: "Sneha Rana",
            position: "CR, ECE",
            phone: "91 9466109746",
            email: "co23554@coet.ac.in"
          },
          {
            name: "Bhumik Pratap Singh",
            position: "CR, ECE",
            phone: "91 9465239176",
            email: "co23518@coet.ac.in"
          }
        ]
      },
      "MECHANICAL": {
        incharge: {
          name: "Dr. Ashwani Kumar",
          position: "Class Incharge, ME",
          phone: "91 987282526",
          email: "ashwankumar@coet.ac.in"
        },
        crs: [
          {
            name: "Muskan",
            position: "CR, ME",
            phone: "91 7868974242",
            email: "co23134@coet.ac.in"
          },
          {
            name: "Yuvraj Mahejan",
            position: "CR, ME",
            phone: "91 7569293223",
            email: "co23151@coet.ac.in"
          }
        ]
      },
      "CIVIL": {
        incharge: {
          name: "Mohammad Sakib Pervez Khan",
          position: "Class Incharge, CE",
          phone: "91 7839452636",
          email: "sakib78b@coet.ac.in"
        },
        crs: [
          {
            name: "Rudra Sharma",
            position: "CR, CE",
            phone: "91 9592091212",
            email: "co23243@coet.ac.in"
          },
          {
            name: "Pratishtha",
            position: "CR, CE",
            phone: "91 7986455130",
            email: "co23238@coet.ac.in"
          }
        ]
      }
    },
    "Third Year": {
      "CSE": {
        incharge: {
          name: "Er. Sudhakar Kumar",
          position: "Class Incharge, CSE",
          phone: "91 8434518658",
          email: "sudhakar@ccst.ac.in"
        },
        crs: [
          {
            name: "Divyansh Manro",
            position: "CR, CSE",
            phone: "91 8380799848",
            email: "co22323@ccst.ac.in"
          },
          {
            name: "Kashishpreet",
            position: "CR, CSE",
            phone: "91 9877133121",
            email: "co22333@ccst.ac.in"
          },
          {
            name: "Sahil Garg",
            position: "CR, CSE",
            phone: "91 8463625832",
            email: "co22333@ccst.ac.in"
          }
        ]
      },
      "ECE": {
        incharge: {
          name: "Dr. Shinga Iindai",
          position: "Class Incharge, ECE",
          phone: "91 9463326861",
          email: "shingaindai@ccst.ac.in"
        },
        crs: [
          {
            name: "Sheha",
            position: "CR, ECE",
            phone: "91 9877194346",
            email: "co22546@ccst.ac.in"
          }
        ]
      },
      "MECHANICAL": {
        incharge: {
          name: "Dr. Radhey Sham",
          position: "Class Incharge, ME",
          phone: "91 9889600925",
          email: "radheysham@ccst.ac.in"
        },
        crs: [
          {
            name: "Keerth Joe",
            position: "CR, ME",
            phone: "91 6284449807",
            email: "co22105@ccst.ac.in"
          }
        ]
      },
      "CIVIL": {
        incharge: {
          name: "Arist Ahmad",
          position: "Class Incharge, CE",
          phone: "91 8860736206",
          email: "arist@ccst.ac.in"
        },
        crs: [
          {
            name: "Hardik Sood",
            position: "CR, CE",
            phone: "91 8914916499",
            email: "co22209@ccst.ac.in"
          },
          {
            name: "Tarunima Gaur",
            position: "CR, CE",
            phone: "91 8914203269",
            email: "co22222@ccst.ac.in"
          }
        ]
      }
    },
    "Fourth Year": {
      "CSE": {
        incharge: {
          name: "Er. Animesh Singh",
          position: "Class Incharge, CSE",
          phone: "91 598035345",
          email: "animeshsingh@ccet.ac.in"
        },
        crs: [
          {
            name: "Eshita Badwal",
            position: "CR, CSE",
            phone: "91 708780683",
            email: "co21316@ccet.ac.in"
          },
          {
            name: "Japan Ajit Singh Gandhi",
            position: "CR, CSE",
            phone: "91 7087803046",
            email: "co21326@ccet.ac.in"
          },
          {
            name: "Vanehika Bhardwal",
            position: "CR, CSE",
            phone: "91 8779354922",
            email: "co21366@ccet.ac.in"
          }
        ]
      },
      "ECE": {
        incharge: {
          name: "Dr. Sarita Sharma",
          position: "Class Incharge, ECE",
          phone: "9988262611",
          email: "saritasharma@ccet.ac.in"
        },
        crs: [
          {
            name: "Variada",
            position: "CR, ECE",
            phone: "91 6289335068",
            email: "co21567@ccet.ac.in"
          },
          {
            name: "Dauiat Singh",
            position: "CR, ECE",
            phone: "91 6298050314",
            email: "co21530@ccet.ac.in"
          }
        ]
      },
      "MECHANICAL": {
        incharge: {
          name: "Dr. Mukesh Kumar",
          position: "Class Incharge, ME",
          phone: "91 947842661",
          email: "mukeshkumar@ccet.ac.in"
        },
        crs: [
          {
            name: "Jaisleen Kaur",
            position: "CR, ME",
            phone: "91 6269007913",
            email: "co21125@ccet.ac.in"
          }
        ]
      },
      "CIVIL": {
        incharge: {
          name: "Poonam",
          position: "Class Incharge, CE",
          phone: "91 8963397719",
          email: "poonam@ccet.ac.in"
        },
        crs: [
          {
            name: "Lakiwinder Singh Pai",
            position: "CR, CE",
            phone: "91 9484097683",
            email: "co21225@ccet.ac.in"
          },
          {
            name: "Amir Sihag",
            position: "CR, CE",
            phone: "91 6284753791",
            email: "co21205@ccet.ac.in"
          }
        ]
      }
    }
  };
  return (
    <div className="min-h-screen  p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">E-Cell</h1>
          
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 pr-0 md:pr-6 mb-6 md:mb-0">
              <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-3">E-Cell Incharge</h2>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-medium text-blue-800">Dr. Dheerendra Singh</p>
                  <p className="text-sm text-gray-600">Professor</p>
                  <div className="mt-3">
                    <p className="text-sm text-gray-700">Contact Information:</p>
                    <p className="text-blue-600">professor@ccet.ac.in</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Vertical Divider - Hidden on mobile */}
            
            <div className="flex-1 pl-0 md:pl-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-3">Student Helpdesk</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium text-gray-800">Siddharth Singh Khati</p>
                <p className="text-sm text-gray-600">4th Year, Dept. of CSE</p>
                <div className="mt-3 space-y-1">
                  <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    91 7589350003
                  </p>
                  <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    co21357@ccet.ac.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Class Incharges & CRs</h2>
          
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
                        {/* Branch Accordion Header */}
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
                              <div className="bg-blue-50 rounded-lg p-3">
                                <p className="font-semibold text-blue-800">{data.incharge.name}</p>
                                <p className="text-sm text-gray-600">{data.incharge.position}</p>
                                <p className="mt-2">{data.incharge.phone}</p>
                                <p className="text-blue-600">{data.incharge.email}</p>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-gray-700 mb-2">Class Representatives</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {data.crs.map((cr, index) => (
                                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                                    <p className="font-semibold text-gray-800">{cr.name}</p>
                                    <p className="text-sm text-gray-600">{cr.position}</p>
                                    <p className="mt-2">{cr.phone}</p>
                                    <p className="text-blue-600">{cr.email}</p>
                                  </div>
                                ))}
                              </div>
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
        </div>
      </div>
    </div>
  );
};

export default ECell;