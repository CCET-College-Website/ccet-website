import React, { useState, useEffect } from 'react';

const SportsFacility = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1776&q=80"
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-4">
        <h2 className='p-2 text-3xl'>Sports Facility</h2>
        <hr className='w-24 border-2 border-gray-600 mb-4' />
      <div className="w-full max-w-4xl mx-auto">
        {/* Carousel Section */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg mb-8">
          <div className="relative h-64 sm:h-80 md:h-96">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out
                  ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all duration-300"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all duration-300"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300
                  ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/60'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg shadow-md mb-8">
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-lg flex items-center">
            <span className="mr-2">Click here to see activities as a part of FIT INDIA movement conducted at CCET.</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Existing Teams</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sr. No</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Captain</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Boxing Women</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Toshiba</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">CIVIL</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Volleyball Men</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Harpinder Singh</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">MECH</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Football</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jagrit Singh</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">CSE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Sports Officials Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Sports Official(s)</h2>
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-700">Dr. Sarabjeet Singh</h3>
              <p className="text-gray-600">Sports In-charge</p>
              <p className="text-blue-600 mt-2">Email: sports@ccet.ac.in</p>
              <p className="text-gray-600">Mobile: 9483739413</p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                Contact
              </button>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg shadow-md">
          <a href="#" className="text-green-600 hover:text-green-800 font-medium text-lg flex items-center">
            <span className="mr-2">Click here to download the official Annual Athletic Meet 2025 Results</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SportsFacility;