import React, { useState, useEffect } from "react";

// Assuming these logo imports (which are local file paths in the original code)
// are either handled via Webpack/Vite config, or the component will be updated 
// to use the full URLs from the API data itself. 
// For this example, we'll keep the logo state as simple strings for demonstration,
// but in a real-world app, you would dynamically load them or use the full URLs.

// We remove the hardcoded image imports and array and will fetch the data instead.

const API_URL = "https://ccet.ac.in/api/student-clubs.php";

const StudentChaptersAndClubs = () => {
  const [clubs, setClubs] = useState([]); // State to hold fetched club data
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. Use useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setClubs(data); // Update the clubs state with fetched data
        setIsLoading(false); // Stop loading once data is set
      } catch (e) {
        console.error("Failed to fetch club data:", e);
        setError("Failed to load clubs. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchClubs();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Check if clubs data is available
  if (clubs.length === 0 && !isLoading) {
    return (
      <div className="text-center p-10 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold">No Clubs Available</h2>
        <p>{error}</p>
      </div>
    );
  }

  // Handle loading and error states
  if (isLoading) {
    return (
      <div className="text-center p-10 bg-gray-100 min-h-screen">
        <p className="text-xl font-medium text-gray-700">Loading Student Clubs... 🔄</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-10 bg-red-100 min-h-screen">
        <p className="text-xl font-medium text-red-700">Error: {error}</p>
      </div>
    );
  }
  
  // Navigation logic remains the same
  const prevClub = () => {
    setCurrent((prev) => (prev === 0 ? clubs.length - 1 : prev - 1));
  };

  const nextClub = () => {
    setCurrent((prev) => (prev === clubs.length - 1 ? 0 : prev + 1));
  };

  // Get the currently selected club
  const currentClub = clubs[current];
  
  // NOTE on Logo: The API provides a full URL for the logo, 
  // so we use that directly as the source for the <img> tag.

  return (
    <div
      // Use the fetched bg_color property
      className={`relative min-h-screen flex flex-col items-center justify-center px-6 py-16 transition-all duration-500 ${currentClub.bg_color}`}
    >
      <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl flex items-center justify-center border-4 border-gray-200 bg-white mb-8">
        <img
          // Use the fetched logo URL
          src={currentClub.logo}
          alt={currentClub.name}
          className="object-contain w-full h-full"
        />
      </div>

      <h2 
        // Conditionally apply text color for APOSLTE OF SPEECH (the dark background one)
        className={`text-4xl font-extrabold tracking-[0.35em] mb-8 text-center font-serif uppercase ${currentClub.name === "APOSTLE OF SPEECH" ? 'text-white' : 'text-gray-800'}`}
      >
        {currentClub.name}
      </h2>

      <div className="relative max-w-3xl text-center text-base md:text-lg leading-relaxed px-4">
        <span className="absolute left-[-50px] top-[-20px] text-7xl md:text-8xl text-gray-400 opacity-30">
          ❝
        </span>
        <p className="px-6">{currentClub.description}</p>
        <span className="absolute right-[-50px] bottom-[-20px] text-7xl md:text-8xl text-gray-400 opacity-30">
          ❞
        </span>
      </div>

      <button
        onClick={prevClub}
        className="absolute left-10 top-1/2 transform -translate-y-1/2 text-4xl opacity-70 hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-50 rounded-full p-2"
        aria-label="Previous club"
      >
        ❮
      </button>
      <button
        onClick={nextClub}
        className="absolute right-10 top-1/2 transform -translate-y-1/2 text-4xl opacity-70 hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-50 rounded-full p-2"
        aria-label="Next club"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="flex gap-3 mt-10">
        {clubs.map((_, idx) => (
          <span
            key={idx}
            className={`w-4 h-4 rounded-full transition-colors duration-300 ${
              idx === current ? "bg-gray-800" : "bg-gray-400"
            }`}
            aria-current={idx === current ? "true" : "false"}
            aria-label={`Go to club ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentChaptersAndClubs;