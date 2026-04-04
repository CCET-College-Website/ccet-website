import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Academicheads = () => {
  const [academicHeads, setAcademicHeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAcademicHeads();
  }, []);

  const fetchAcademicHeads = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('https://ccet.ac.in/api/academic-heads.php');
      const result = await response.json();

      if (Array.isArray(result)) {
        setAcademicHeads(result);
      } else if (result.success === false) {
        setError(result.error || 'Failed to fetch academic heads');
      } else {
        setAcademicHeads([]);
      }
    } catch (err) {
      setError('Network error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResumeView = (resume) => {
    if (resume) {
      const path = resume.startsWith('/') ? resume : `/${resume}`;
      const encodedPath = path.split('/').map(segment => encodeURIComponent(segment)).join('/');
      const fullUrl = `https://ccet.ac.in${encodedPath}`;
      window.open(fullUrl, '_blank');
    }
  };

  if (loading) {
    return (
        <div className="px-4 py-10 max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-gray-900 tracking-wide">
            Academic Heads
          </h1>
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
            <p className="mt-4 text-gray-600">Loading academic heads...</p>
          </div>
        </div>
    );
  }

  if (error) {
    return (
        <div className="px-4 py-10 max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-gray-900 tracking-wide">
            Academic Heads
          </h1>
          <div className="text-center py-20">
            <p className="text-red-600 mb-4">{error}</p>
            <button
                onClick={fetchAcademicHeads}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
    );
  }

  if (academicHeads.length === 0) {
    return (
        <div className="px-4 py-10 max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-gray-900 tracking-wide">
            Academic Heads
          </h1>
          <div className="text-center py-20">
            <p className="text-gray-600">No academic heads found.</p>
          </div>
        </div>
    );
  }

  return (
      <div className="px-4 py-10 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-gray-900 tracking-wide">
          Academic Heads
        </h1>

        <div className="space-y-10">
          {academicHeads.map((head, index) => (
              <motion.div
                  key={head.id || index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row bg-white shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden border border-gray-200 transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="w-full md:w-1/3 bg-gray-50 flex items-center justify-center overflow-hidden group">
                  {head.img ? (
                      <img
                          src={head.img.startsWith('http') ? head.img : `https://ccet.ac.in${head.img.startsWith('/') ? '' : '/'}${head.img}`}
                          alt={head.name}
                          className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                      />
                  ) : (
                      <div className="w-full h-64 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
                  <span className="text-6xl font-bold text-blue-900">
                    {head.name.charAt(0)}
                  </span>
                      </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                  <h2 className="text-xl md:text-3xl font-bold text-blue-900 mb-2">
                    {head.branch}
                  </h2>
                  <p className="text-2xl font-semibold text-gray-800 mb-1">
                    {head.name}
                  </p>
                  <p className="text-gray-600 mb-2">{head.designation}</p>

                  {head.edu && (
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold">Qualification:</span> {head.edu}
                      </p>
                  )}

                  {head.interest && (
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold">Area of Interest:</span> {head.interest}
                      </p>
                  )}

                  {head.number && (
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold">Contact:</span> {head.number}
                      </p>
                  )}

                  {head.email && (
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold">Email:</span>{' '}
                        <a href={`mailto:${head.email}`} className="text-blue-600 hover:underline">
                          {head.email}
                        </a>
                      </p>
                  )}

                  {head.address && (
                      <p className="text-gray-700">
                        <span className="font-semibold">Available at:</span> {head.address}
                      </p>
                  )}

                  {/* Resume Button */}
                  {head.resume && (
                      <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleResumeView(head.resume)}
                          className="mt-5 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-md hover:from-orange-600 hover:to-red-600 transition-all"
                      >
                        View Resume
                      </motion.button>
                  )}
                </div>
              </motion.div>
          ))}
        </div>
      </div>
  );
};

export default Academicheads;