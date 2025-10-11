import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const OfficialsPage = () => {
  const [officials, setOfficials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOfficials();
  }, []);

  const fetchOfficials = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('https://ccet.ac.in/api/officials-at-ccet.php');
      const result = await response.json();

      if (Array.isArray(result)) {
        setOfficials(result);
      } else if (result.success === false) {
        setError(result.error || 'Failed to fetch officials');
      } else {
        setOfficials([]);
      }
    } catch (err) {
      setError('Network error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
        <main className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">
            Officials at CCET
          </h1>
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-700"></div>
            <p className="mt-4 text-gray-600">Loading officials...</p>
          </div>
        </main>
    );
  }

  if (error) {
    return (
        <main className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">
            Officials at CCET
          </h1>
          <div className="text-center py-20">
            <p className="text-red-600 mb-4">{error}</p>
            <button
                onClick={fetchOfficials}
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Retry
            </button>
          </div>
        </main>
    );
  }

  if (officials.length === 0) {
    return (
        <main className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">
            Officials at CCET
          </h1>
          <div className="text-center py-20">
            <p className="text-gray-600">No officials found.</p>
          </div>
        </main>
    );
  }

  return (
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">
          Officials at CCET
        </h1>

        <section className="space-y-8">
          {officials.map((o, idx) => {
            const rolesList = o.roles ? o.roles.split(',').map(r => r.trim()) : [];

            return (
                <motion.div
                    key={o.id || idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center md:items-start
                         bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200 p-6
                         transition-transform duration-300 ease-in-out
                         hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="w-full md:w-64 flex-shrink-0 mb-6 md:mb-0 md:mr-8 flex justify-center">
                    {o.image ? (
                        <img
                            src={o.image.startsWith('http') ? o.image : `https://ccet.ac.in${o.image.startsWith('/') ? '' : '/'}${o.image}`}
                            alt={o.name}
                            className="w-56 h-56 rounded-lg object-cover shadow-lg"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextElementSibling.style.display = 'flex';
                            }}
                        />
                    ) : null}
                    <div
                        className="w-56 h-56 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center text-6xl font-bold text-red-700 shadow-lg"
                        style={{ display: o.image ? 'none' : 'flex' }}
                    >
                      {o.name.charAt(0)}
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                      {o.name}
                    </h2>

                    {o.post && (
                        <p className="mt-1 text-base md:text-lg font-semibold text-red-700">
                          {o.post}
                        </p>
                    )}

                    {rolesList.length > 0 && (
                        <div className="mt-2 space-y-1">
                          {rolesList.map((line, i) => (
                              <p key={i} className="text-sm md:text-base font-medium text-gray-700">
                                {line}
                              </p>
                          ))}
                        </div>
                    )}

                    <div className="mt-4 text-sm md:text-base text-gray-700 space-y-1">
                      {o.email && (
                          <p>
                            <span className="font-medium">Email: </span>
                            <a
                                href={`mailto:${o.email}`}
                                className="text-blue-600 hover:underline break-words"
                            >
                              {o.email}
                            </a>
                          </p>
                      )}

                      {o.phone_no && (
                          <p>
                            <span className="font-medium">Mobile: </span>
                            <a
                                href={`tel:${o.phone_no}`}
                                className="text-blue-600 hover:underline"
                            >
                              {o.phone_no}
                            </a>
                          </p>
                      )}
                    </div>
                  </div>
                </motion.div>
            );
          })}
        </section>
      </main>
  );
};

export default OfficialsPage;
