import React, { useState, useEffect } from "react";

const Classrooms = () => {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchClassrooms();
  }, []);

  const fetchClassrooms = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://ccet.ac.in/api/classrooms.php?is_active=true');
      const result = await response.json();

      if (Array.isArray(result) && result.length > 0) {
        setImages(result);
      } else if (result.success === false) {
        setError(result.error || "No classrooms found");
        setImages([]);
      } else {
        setError("No classroom images available");
        setImages([]);
      }
    } catch (err) {
      setError("Error loading classroom images");
      console.error("Classrooms fetch error:", err);
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  const getFullImageUrl = (imagePath) => {
    if (!imagePath) return '';
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }
    return `https://ccet.ac.in/${imagePath.startsWith('/') ? imagePath.slice(1) : imagePath}`;
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  if (loading) {
    return (
        <div className="w-full bg-white py-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
              CLASS ROOMS
            </h1>
            <div className="flex justify-center items-center h-[500px]">
              <span className="text-gray-500">Loading classroom images...</span>
            </div>
          </div>
        </div>
    );
  }

  if (error || images.length === 0) {
    return (
        <div className="w-full bg-white py-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
              CLASS ROOMS
            </h1>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-red-700">{error || "No classroom images available"}</p>
            </div>
          </div>
        </div>
    );
  }

  const currentImage = images[current];

  return (
      <div className="w-full bg-white py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            CLASS ROOMS
          </h1>

          <div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-lg bg-white">
            <img
                src={getFullImageUrl(currentImage.image_url)}
                alt={currentImage.title || "Classroom"}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x500?text=Image+Not+Available';
                }}
            />

            {(currentImage.title || currentImage.description) && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  {currentImage.title && (
                      <h3 className="text-xl font-semibold">{currentImage.title}</h3>
                  )}
                  {currentImage.description && (
                      <p className="text-sm mt-1">{currentImage.description}</p>
                  )}
                </div>
            )}

            {images.length > 1 && (
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black"
                >
                  ◀
                </button>
            )}

            {images.length > 1 && (
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black"
                >
                  ▶
                </button>
            )}
          </div>

          {images.length > 1 && (
              <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full ${
                            current === index ? "bg-orange-500" : "bg-gray-400"
                        }`}
                    ></button>
                ))}
              </div>
          )}
        </div>
      </div>
  );
};

export default Classrooms;