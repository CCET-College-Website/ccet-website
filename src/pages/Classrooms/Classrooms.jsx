import React, { useState } from "react";

import classroom1 from "../../assets/Classrooms/LH8_1_KT.jpg";
import classroom2 from "../../assets/Classrooms/classroom-1.jpg";
import classroom3 from "../../assets/Classrooms/classroom-3.jpg";
import classroom4 from "../../assets/Classrooms/new.jpg";
import classroom5 from "../../assets/Classrooms/PICTURE.jpg";


const images = [classroom1, classroom2, classroom3,classroom4,classroom5];

const Classrooms = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full bg-white py-10">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          CLASS ROOMS
        </h1>

        <div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-lg bg-white">
          <img
            src={images[current]}
            alt="Classroom"
            className="w-full h-full object-cover"
          />

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black"
          >
            ❮
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black"
          >
            ❯
          </button>
        </div>

        {/* Dots */}
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
      </div>
    </div>
  );
};

export default Classrooms;
