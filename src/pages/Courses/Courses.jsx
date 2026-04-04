import React, { useState, useEffect } from "react";
import {
  AcademicCapIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  CogIcon,
  BuildingOffice2Icon
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Icon mapping for dynamic icon selection from database
const iconMap = {
  ComputerDesktopIcon: ComputerDesktopIcon,
  CpuChipIcon: CpuChipIcon,
  CogIcon: CogIcon,
  BuildingOffice2Icon: BuildingOffice2Icon,
  AcademicCapIcon: AcademicCapIcon,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const Courses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch courses from backend API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);

        const response = await fetch('https://ccet.ac.in/api/courses.php?is_active=true', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Get response text first to check if it's empty
        const text = await response.text();

        if (!text || text.trim() === '') {
          throw new Error('Empty response from API. Please contact administrator to add course data.');
        }

        // Try to parse JSON
        let data;
        try {
          data = JSON.parse(text);
        } catch (parseErr) {
          console.error('JSON parse error:', parseErr);
          console.error('Response text:', text);
          throw new Error('Invalid response from server. Please contact administrator.');
        }

        if (Array.isArray(data)) {
          if (data.length === 0) {
            throw new Error('No courses found in database. Please contact administrator to add courses.');
          } else {
            setCourses(data);
            setError(null);
          }
        } else if (data.success === false) {
          throw new Error(data.error || 'Failed to fetch courses from database.');
        } else {
          throw new Error('Unexpected response format from server.');
        }
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Handle "Know More" button click
  const handleKnowMore = (course) => {
    // If external link exists (like PhD program), open in new tab
    if (course.external_link) {
      window.open(course.external_link, '_blank', 'noopener,noreferrer');
    }
    // If route path exists (like /cse, /ece, etc.), navigate internally
    else if (course.route_path) {
      navigate(course.route_path);
    } else {
      console.warn('No route_path or external_link defined for:', course.title);
    }
  };

  // Loading state
  if (loading) {
    return (
        <div
            className="px-4 md:px-16 py-14 max-w-7xl mx-auto flex justify-center items-center min-h-screen"
            style={{
              background: "linear-gradient(to right, #f8fafc, #e2e8f0)",
            }}
        >
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-800 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">Loading courses...</p>
          </div>
        </div>
    );
  }

  // Error state
  if (error) {
    return (
        <div
            className="px-4 md:px-16 py-14 max-w-7xl mx-auto"
            style={{
              background: "linear-gradient(to right, #f8fafc, #e2e8f0)",
            }}
        >
          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-8 text-center max-w-2xl mx-auto">
            <div className="text-red-600 text-6xl mb-4">⚠️</div>
            <h2 className="text-red-700 text-2xl font-bold mb-3">Unable to Load Courses</h2>
            <p className="text-red-600 mb-6">{error}</p>
            <button
                onClick={() => window.location.reload()}
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-semibold"
            >
              Try Again
            </button>
          </div>
        </div>
    );
  }

  return (
      <div
          className="px-4 md:px-16 py-14 max-w-7xl mx-auto"
          style={{
            background: "linear-gradient(to right, #f8fafc, #e2e8f0)",
          }}
      >
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-center mb-6 text-black">
          Courses Offered
        </h1>

        <p className="text-gray-800 text-lg text-justify mb-10 leading-relaxed">
          Academics is central to the overall development of a student. The
          classes allow diverse groups of people to compete and perform to the
          peak of their potential, growing towards excellence. The academic
          scores achieved by the students of an institute are testimony of the
          quality of the courses offered and the dedication of the faculty
          imparting it. The high standards of inputs being poured by the vibrant
          teachers and the outputs by the hard working students have bore out
          excellent results, as shown by the fact that the university topper for
          the year 2003-2004 for BE was from CCET (DG).
        </p>

        {/* Courses List */}
        <div className="space-y-10">
          {courses.map((course, index) => {
            // Get the icon component from the map, fallback to AcademicCapIcon
            const Icon = iconMap[course.icon_name] || AcademicCapIcon;

            return (
                <motion.div
                    key={course.id}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                    className={`bg-white border border-gray-300 border-l-8 ${course.color_class} rounded-xl shadow-md p-6 space-y-4 transition duration-300 hover:shadow-lg`}
                >
                  {/* Heading with Icon */}
                  <div className={`flex items-center gap-3 ${course.color_class}`}>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-8 h-8" />
                    </motion.div>
                    <h2 className={`text-2xl font-bold ${course.color_class}`}>
                      {course.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-gray-800 leading-relaxed">
                    {course.description}
                    {course.external_link && (
                        <>
                          {' '}
                          <a
                              href={course.external_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-700 underline hover:text-blue-900"
                          >
                            {course.external_link}
                          </a>
                        </>
                    )}
                  </p>

                  {/* Know More Button - Only show if route_path or external_link exists */}
                  <div>
                    {(course.route_path || course.external_link) && (
                        <button
                            className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-500 shadow-md transition"
                            onClick={() => handleKnowMore(course)}
                        >
                          Know more...
                        </button>
                    )}
                  </div>
                </motion.div>
            );
          })}
        </div>
      </div>
  );
};

export default Courses;