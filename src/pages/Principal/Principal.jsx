import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Icons - Added more icons for the new data fields from the API
import { Mail, Phone, Building2, GraduationCap, Sparkles, MapPin } from 'lucide-react';
import bannerImage from './Images/banner.png'; // Static banner image is kept

const PrincipalDesk = () => {
  // State to hold the principal's data, loading status, and any errors
  const [principalData, setPrincipalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchPrincipalData = async () => {
      try {
        // Fetching data from the API endpoint
        const response = await fetch('https://ccet.ac.in/api/faculty-cse.php');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const allFaculty = await response.json();

        // Finding the specific data for the Principal from the fetched array
        const principal = allFaculty.find(member => member.designation === 'Principal');

        if (principal) {
          setPrincipalData(principal);
        } else {
          throw new Error('Principal data not found in the API response.');
        }
      } catch (e) {
        setError(e.message);
        console.error("Failed to fetch principal data:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchPrincipalData();
  }, []); // The empty dependency array ensures this effect runs only once on mount

  // Conditional rendering for the loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        Loading Principal's Details...
      </div>
    );
  }

  // Conditional rendering for the error state
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white text-red-600">
        Error loading data: {error}
      </div>
    );
  }

  // The main component render after data is successfully fetched
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* Banner */}
      <div
        className="relative w-full h-[250px] md:h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10" />
        <h1 className="relative z-20 text-white text-4xl md:text-5xl font-bold">
          PRINCIPAL’S DESK
        </h1>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 flex flex-col lg:flex-row items-stretch gap-6">
        {/* Principal Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="w-full lg:w-[490px] flex flex-col shadow-xl rounded-3xl overflow-hidden bg-[#0F1E54] text-white"
        >
          {/* Principal Image - Fetched from API */}
          <img
            src={`https://ccet.ac.in/${principalData.img}`}
            alt={principalData.name}
            className="w-full h-[250px] md:h-[350px] object-cover"
          />

          {/* Info Section - All data here is now dynamic */}
          <div className="flex-1 px-6 py-6">
            <h2 className="text-2xl font-bold mb-1 border-b border-white/30 pb-2">
              {principalData.name}
            </h2>
            <p className="text-blue-200 text-lg mb-4">{principalData.designation}</p>

            <div className="space-y-4">
              <p className="flex items-start text-sm md:text-base">
                <Building2 className="w-5 h-5 mr-3 text-blue-200 flex-shrink-0 mt-1" />
                <span className="text-gray-100">
                  Chandigarh College of Engineering and Technology
                </span>
              </p>

              <p className="flex items-start text-sm md:text-base">
                <MapPin className="w-5 h-5 mr-3 text-blue-200 flex-shrink-0 mt-1" />
                <span className="text-gray-100">{principalData.address}</span>
              </p>

              <p className="flex items-start text-sm md:text-base">
                <GraduationCap className="w-5 h-5 mr-3 text-blue-200 flex-shrink-0 mt-1" />
                <span className="text-gray-100">{principalData.edu}</span>
              </p>

              <p className="flex items-start text-sm md:text-base">
                <Sparkles className="w-5 h-5 mr-3 text-blue-200 flex-shrink-0 mt-1" />
                <span className="text-gray-100"><strong>Interest:</strong> {principalData.interest}</span>
              </p>

              <p className="flex items-center text-sm md:text-base">
                <Mail className="w-5 h-5 mr-3 text-blue-200 flex-shrink-0" />
                <a
                  href={`mailto:${principalData.email}`}
                  className="hover:text-yellow-300 transition-colors"
                >
                  {principalData.email}
                </a>
              </p>

              <p className="flex items-center text-sm md:text-base">
                <Phone className="w-5 h-5 mr-3 text-green-300 flex-shrink-0" />
                <a
                  href={`tel:${principalData.number}`}
                  className="hover:text-yellow-300 transition-colors"
                >
                  {principalData.number}
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Principal Message - Static content as it's not in the API */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="flex-1 bg-[#0F1E54] text-white italic px-6 md:px-10 py-8 md:py-10 rounded-3xl shadow-xl text-justify font-serif text-[1rem] md:text-[1.1rem] font-medium leading-[1.9]"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 not-italic font-serif">
            Principal’s Message
          </h2>
          <p>
            With technology spreading its domain to all walks of life, there is
            a need to upgrade the ever-widening knowledge base. CCET has risen
            to the occasion, and resolves to provide talented, skilled, and
            highly competent technical human resource to the industrial society.
            Education is imparted at the institute in a manner so that each
            student realizes their responsibility of enhancing the present
            skills and shaping the future.
          </p>
          <p className="mt-6">
            In its endeavour to foster an optimum blend of self-discipline and
            consistency, the college provides a robust curriculum to cater to
            the versatile scenario of the industry. It commits to serve the
            society with zeal and to fulfil its societal obligations with
            distinction. With consistent efforts to provide the industry with
            apt talent, I invite the prospective potential seekers to
            participate in the campus recruitment program.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrincipalDesk;