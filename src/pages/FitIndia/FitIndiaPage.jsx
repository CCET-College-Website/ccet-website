import React, { useState, useEffect } from 'react';

const FitIndiaPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bannerSlides, setBannerSlides] = useState([]);
  const [activities, setActivities] = useState([]);
  const [reports, setReports] = useState([]);
  const [aboutContent, setAboutContent] = useState(null);
  const [participationNotice, setParticipationNotice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Base URL for CCET assets
  const BASE_URL = 'https://ccet.ac.in';

  const getFullUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }
    return `${BASE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
  };

  const fetchData = async (url, setData, transform = (data) => data) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setData(transform(data));
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
      setError('Failed to load some data. Please try again.');
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      setIsLoading(true);

      await fetchData(
          'https://ccet.ac.in/api/fitindia.php?section=banner&is_active=true',
          setBannerSlides,
          (data) => Array.isArray(data) ? data.map(item => ({
            src: getFullUrl(item.image_url),
            alt: item.title || 'Fit India Banner'
          })) : []
      );

      await fetchData(
          'https://ccet.ac.in/api/fitindia.php?section=activities&is_active=true',
          setActivities,
          (data) => Array.isArray(data) ? data.map(item => ({
            image: getFullUrl(item.image_url),
            title: item.title,
            description: item.description || ''
          })) : []
      );

      await fetchData(
          'https://ccet.ac.in/api/fitindia.php?section=reports&is_active=true',
          setReports,
          (data) => Array.isArray(data) ? data.map(item => ({
            year: item.title, // Title is treated as year
            title: 'Report',
            url: getFullUrl(item.image_url) // PDF or DOCX URL stored in image_url field
          })) : []
      );

      await fetchData(
          'https://ccet.ac.in/api/fitindia.php?section=about&is_active=true',
          setAboutContent,
          (data) => Array.isArray(data) && data.length > 0 ? data[0] : null
      );

      await fetchData(
          'https://ccet.ac.in/api/fitindia.php?section=notice&is_active=true',
          setParticipationNotice,
          (data) => Array.isArray(data) && data.length > 0 ? data[0] : null
      );

      setIsLoading(false);
    };

    fetchAllData();
  }, []);

  useEffect(() => {
    if (bannerSlides.length > 0) {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
      }, 5000);

      return () => clearInterval(slideInterval);
    }
  }, [bannerSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  const handleReportClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  if (isLoading) {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading Fit India content...</p>
          </div>
        </div>
    );
  }

  if (error) {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center text-red-600">
            <p className="text-xl font-semibold">{error}</p>
          </div>
        </div>
    );
  }

  return (
      <div className="min-h-screen bg-white">
        <section className="bg-white">
          <div className="container mx-auto px-6 py-12 text-center">
            <h1 className="text-4xl font-bold text-blue-900 mb-3">Fit India Movement</h1>
            <p className="text-xl text-gray-700 font-semibold mb-2">Get Fitter. Healthier. Happier.</p>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Fit India tools for people who want to lead a healthy life and reach their fitness goals
            </p>
          </div>
        </section>

        {bannerSlides.length > 0 && (
            <section className="bg-white py-12">
              <div className="container mx-auto px-6">
                <div className="relative max-w-5xl mx-auto">
                  {/* Carousel Image */}
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                    <img
                        src={bannerSlides[currentSlide].src}
                        alt={bannerSlides[currentSlide].alt}
                        className="w-full h-full object-cover"
                    />
                  </div>

                  {bannerSlides.length > 1 && (
                      <>
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-blue-900 p-3 rounded-full shadow-lg transition-all"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-blue-900 p-3 rounded-full shadow-lg transition-all"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {bannerSlides.map((_, index) => (
                              <button
                                  key={index}
                                  onClick={() => setCurrentSlide(index)}
                                  className={`h-3 rounded-full transition-all ${
                                      currentSlide === index ? 'bg-yellow-400 w-10' : 'bg-white/60 w-3'
                                  }`}
                              />
                          ))}
                        </div>
                      </>
                  )}
                </div>
              </div>
            </section>
        )}

        {aboutContent && (
            <section className="bg-white py-12">
              <div className="container mx-auto px-6">
                <div className="bg-white rounded-2xl shadow-xl p-10 max-w-4xl mx-auto border-t-4 border-blue-600">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-yellow-400 rounded-lg p-3">
                      <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-blue-900 mb-4">{aboutContent.title}</h2>
                      <div className="text-gray-700 leading-relaxed text-lg">
                        {aboutContent.description && aboutContent.description.split('\n').map((para, idx) => (
                            <p key={idx} className="mb-4">{para}</p>
                        ))}
                      </div>
                      {aboutContent.button_text && (
                          <p className="text-sm text-blue-600 mt-4 font-semibold">{aboutContent.button_text}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
        )}

        {participationNotice && (
            <section className="bg-white py-8">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 border-l-8 border-yellow-400 p-6 rounded-r-2xl shadow-lg">
                    <p className="text-xl font-bold text-white">
                      🎯 {participationNotice.title}
                    </p>
                    {participationNotice.description && (
                        <p className="text-white/90 mt-2">{participationNotice.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </section>
        )}

        {activities.length > 0 && (
            <section className="bg-white py-12">
              <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-blue-900 mb-3">Our Activities</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {activities.map((activity, index) => (
                      <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-yellow-400">
                        <div className="relative h-56 overflow-hidden">
                          <img
                              src={activity.image}
                              alt={activity.title}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-blue-900 mb-2">{activity.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </section>
        )}

        {reports.length > 0 && (
            <section className="bg-gray-50 py-12">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-900 mb-3">Reports</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    {reports.map((report, index) => (
                        <div
                            key={index}
                            onClick={() => handleReportClick(report.url)}
                            className="bg-white hover:bg-blue-50 transition-all rounded-xl p-6 cursor-pointer shadow-md hover:shadow-xl border-l-4 border-yellow-400 group"
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="text-2xl font-bold text-blue-900">{report.year}</h3>
                              <p className="text-gray-600 font-semibold">{report.title}</p>
                            </div>
                            <div className="bg-blue-600 group-hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
        )}
      </div>
  );
};

export default FitIndiaPage;