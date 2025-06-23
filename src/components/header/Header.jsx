import React, { useState, useEffect, useRef } from 'react';
import CCETLogo from '../../assets/header/CCET-Logo.png';
import IndianEmblem from '../../assets/header/Indian-Emblem.png';

// For Desktops
import AboutUsMenu from './AboutUsMenu';
import AcademicsMenu from './AcademicsMenu';
import StudentsSectionMenu from './StudentsSectionMenu';
import NoticesMenu from './NoticesMenu';
import AdmissionsMenu from './AdmissionsMenu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const [expandedMenu, setExpandedMenu] = useState(null);
  const mobileNavRef = useRef(null);

  // For Mobiles
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const menuItems = [
    { label: 'Home' },
    { label: 'About Us', menu: <AboutUsMenu />, sections: [
        {
          title: 'About',
          links: ['History', 'Vision and Mission', 'Campus Map', 'How To Reach Us'],
        },
        {
          title: 'Administration',
          links: ['Principal', 'Officials at CCET', 'Academic Heads', 'Administrator'],
        },
        {
          title: 'Life @ CCET',
          links: [
            'Campus Virtual Tour', 'Library', 'Class Rooms', 'Canteen', 'Infrastructure',
            'Policy on use of IT Resources', 'Sports Facility'
          ],
        },
      ] },
    { label: 'Academics', menu: <AcademicsMenu />, sections: [
        {
          title: 'Academic Departments',
          links: [
            'Computer Science Engineering', 'Mechanical Engineering',
            'Electronics And Communication Engineering', 'Civil Engineering', 'Applied Science'
          ],
        },
        {
          title: 'Academics',
          links: ['Convocation 2023', 'Students Feedback', 'Examination', 'E-Akademik', 'E-Cell', 'NIRF', 'FAQs'],
        },
        {
          title: 'Mandatory Disclosure',
          links: ['EoA Report 2024-25', 'Application Part-1', 'Application Part-2', 'OLD AICTE EoAs'],
        },
        {
          title: 'Overview',
          links: ['Courses Offered', 'Academic Calendar', 'Academic Prospectus', 'Affiliating University'],
        },
      ] },
    { label: 'Students Section', menu: <StudentsSectionMenu />, sections: [
        {
          title: 'Academics',
          links: [
            'Student Forms',
            'Vidya Lakshmi (Education Loan)',
            'National Apprenticeship Training',
            'Scholarships',
            'Fit India'
          ],
        },
        {
          title: 'Student Grievances Redressal System',
          links: [],
        },
        {
          title: 'Student Welfare',
          links: [
            'Officials @ Student Welfare',
            'Student Council',
            'Anti Ragging',
            'Anti Ragging Committee',
            'Student Fee Payment (HDFC)',
            'Application form to be a New Voter'
          ],
        },
        {
          title: 'Hostel',
          links: [
            'Boys Hostel',
            'Girls Hostel'
          ],
        },
        {
          title: 'Events',
          links: [
            'Student Chapters/Clubs',
            'Apratim',
            'ACM @ CCET',
            'ASME @ CCET',
            'NSS'
          ],
        },
        {
          title: 'Sports',
          links: [
            'Sports Facilities',
            'Fit India Initiative',
            'Sports Tournaments'
          ],
        },
      ] },
    { label: 'Admissions', menu: <AdmissionsMenu />, sections: [
        {
          title: 'Admissions',
          links: ['Admission Notices', 'Help Desk'],
        },
        {
          title: 'Programmes',
          links: ['Degree Course', 'Degree Course (PU-LEET)', 'Doctorate (PhD)'],
        },
        {
          title: 'JAC',
          links: ['Portal', 'Counselling Schedule', 'JAC Brochure 2025', 'Opening/Closing Rank'],
        },
        {
          title: 'Criteria',
          links: ['Eligibility'],
        },
      ] },
    { label: 'Placements' },
    { label: 'Notices', menu: <NoticesMenu />, sections: [
        {
          title: 'Old Notices',
          links: ['Forms', 'Tenders', 'Online Fee Payment Link'],
        },
        {
          title: 'E-News Letters (pdf\'s)',
          links: ['FingerPrint (Volume-VII, Issue I)', 'FingerPrint (Volume-VII, Issue II)'],
        },
        {
          title: 'Detailed Info (B.E. Exams)',
          links: ['Exam Notice 1', 'Exam Notice 2'],
        },
      ] },
  ];

  const toggleSubmenu = (label) => {
    if (expandedMenu === label) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(label);
    }
  };

  return (
      <div className="w-full bg-white md:bg-gradient-to-r md:from-blue-900 md:to-slate-900 relative z-50">
        {/* Mobile View */}
        <div className="md:hidden w-full bg-gradient-to-r from-blue-900 to-slate-900 shadow">
          <div className="w-full px-4 py-3 flex items-center justify-between">
            <img src={CCETLogo} alt="CCET Logo" className="h-10 w-auto" />
            <div className="flex-1 text-center px-2">
              <h1 className="text-white text-2xl font-serif leading-tight">
                Chandigarh College of Engineering and Technology
              </h1>
              <p className="text-[20px] text-gray-300 font-serif leading-none mt-1">(PU | Chandigarh)</p>
            </div>
            <img src={IndianEmblem} alt="Indian Emblem" className="h-10 w-auto" />
          </div>

          <div className="w-full flex justify-end pb-3 pr-4">
            <button
                onClick={() => setMenuOpen(true)}
                className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-red-700 px-2.5 py-1 rounded-full shadow text-xs font-medium"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Menu
            </button>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex flex-col items-center px-2 py-3 w-full max-w-[1436px] mx-auto">
          <div className="flex w-full items-center justify-center gap-2">
            <div className="flex items-center h-full mx-14 min-w-[96px]">
              <img className="h-24 w-auto object-contain" src={CCETLogo} alt="College Logo" />
            </div>
            <div className="flex flex-col flex-shrink items-center px-2 w-full max-w-[900px]">
              <h1 className="font-serif text-white text-4xl text-center leading-tight">
                Chandigarh College of Engineering and Technology
              </h1>
              <h2 className="font-serif text-white text-lg text-center leading-snug mt-1 mb-2 px-2">
                (Government Institute Under Chandigarh UT Administration, Affiliated to Panjab University, Chandigarh)
              </h2>
              <div className="w-full px-4">
                <div className="max-w-4xl mx-auto border-t-2 border-white mt-2 mb-2" />
              </div>
            </div>
            <div className="flex items-center h-full mx-14 min-w-[96px]">
              <img className="h-24 w-auto object-contain" src={IndianEmblem} alt="Indian Emblem" />
            </div>
          </div>

          <nav className="w-full flex justify-center items-center gap-3 -mt-0 -mb-2 relative z-50">
            {menuItems.map(({ label, menu }) => (
                <div
                    key={label}
                    className="relative group"
                    onMouseEnter={() => setActiveNav(label)}
                    onMouseLeave={() => setTimeout(() => setActiveNav('Home'), undefined)}
                >
                  <div
                      className={`cursor-pointer px-3 py-1 rounded-md font-serif text-xl whitespace-nowrap transition-all duration-200
                  ${activeNav === label
                          ? 'bg-yellow-400 text-red-700 shadow-md'
                          : 'text-white hover:bg-yellow-400 hover:text-red-700 hover:shadow-md'
                      }`}
                  >
                    {label}
                  </div>
                  {menu && activeNav === label && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0">
                        {menu}
                      </div>
                  )}
                </div>
            ))}
          </nav>
        </div>

        {/* Mobile Slide Drawer */}
        {menuOpen && (
            <div className="fixed top-0 left-0 w-full h-full z-40 bg-black bg-opacity-50">
              <div
                  ref={mobileNavRef}
                  className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 overflow-y-auto"
              >
                <div className="p-4 border-b font-semibold text-lg bg-blue-900 text-white flex justify-between items-center">
                  <span>Navigation</span>
                  <button
                      onClick={() => setMenuOpen(false)}
                      className="text-white hover:text-yellow-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {menuItems.map(({ label, sections }) => (
                    <div key={label} className="border-b border-gray-200">
                      <div
                          className={`px-4 py-3 cursor-pointer transition-all duration-200 font-medium flex justify-between items-center
                    ${activeNav === label ? 'bg-yellow-400 text-red-700' : 'text-gray-800 hover:bg-gray-100'}`}
                          onClick={() => {
                            if (sections) {
                              toggleSubmenu(label);
                            } else {
                              setActiveNav(label);
                              setMenuOpen(false);
                            }
                          }}
                      >
                        <span>{label}</span>
                        {sections && (
                            <svg
                                className={`w-5 h-5 transition-transform duration-200 ${expandedMenu === label ? 'transform rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        )}
                      </div>

                      {sections && expandedMenu === label && (
                          <div className="bg-gray-50 pl-6 pr-4 py-2">
                            {sections.map((section, i) => (
                                <div key={i} className="mb-3">
                                  <div className="font-semibold border-b border-gray-300 pb-1 mb-2 text-red-700 text-sm">
                                    {section.title}
                                  </div>
                                  <ul className="space-y-1">
                                    {section.links.map((link, j) => (
                                        <li
                                            key={j}
                                            className="hover:bg-[#FB923C] hover:text-white cursor-pointer transition-colors duration-200 px-2 py-1 rounded text-sm"
                                        >
                                          {link}
                                        </li>
                                    ))}
                                  </ul>
                                </div>
                            ))}
                          </div>
                      )}
                    </div>
                ))}
              </div>
            </div>
        )}
      </div>
  );
};

export default Header;