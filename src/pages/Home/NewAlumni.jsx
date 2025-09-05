import React, { useState } from "react";
import alumniInfo from "../../assets/home/Alumni/alumniInfo";

import "./NewAlumni.css";

const NewAlumni = () => {
  const items = 5;
  const [activeIndex, setActiveIndex] = useState(Math.floor(items / 2));

  const handleRadioChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="">
        <div className="text-center m-2 p-2">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-700 dark:text-[#30709aff] mb-4 relative inline-block">
          Our Alumni
        </h2>
      </div>
      <div className="carousel-container">

        <button className="text-xl rounded-full text-center bg-blue-600 w-12 h-12 text-white hover:cursor-pointer hover:w-14 hover:h-14 transition-all" onClick={() => {
            activeIndex > 0 ? setActiveIndex(activeIndex - 1) : setActiveIndex(0);
        }}> &larr; </button>

        {Array.from({ length: items }).map((_, index) => (
          <input
            key={index}
            type="radio"
            name="position"
            checked={activeIndex === index}
            onChange={() => handleRadioChange(index)}
            className={`radio-${index + 1}`}
          />
        ))}

        <button className="text-xl rounded-full text-center bg-blue-600 w-12 h-12 text-white hover:cursor-pointer hover:w-14 hover:h-14 transition-all" onClick={() => {
            activeIndex < items - 1 ? setActiveIndex(activeIndex + 1) : null;
        }}> &rarr; </button>

        {/* Carousel */}
        <main id="carousel" style={{ "--position": activeIndex + 1 }}>
          {Array.from({ length: items }).map((_, index) => (
            <div
              key={index}
              className="item bg-white flex items-center rounded-lg shadow-lg border-2 border-gray-200 "
              style={{
                "--offset": index + 1,
              }}
            >
              <div class="w-full max-w-sm ">
                <div class="flex flex-col items-center text-center">
                  <img
                    class="w-32 h-32 mb-3 rounded-full object-cover shadow-md"
                    src={
                      alumniInfo[index].image ??
                      "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
                    }
                    alt={`${alumniInfo[index].name} image`}
                  />
                  <h5 class="mb-2 text-xl font-semibold text-gray-900 ">
                    {alumniInfo[index].name}
                  </h5>
                  <span class="text-sm text-gray-600 font-medium ">
                    {alumniInfo[index].designation}
                  </span>
                  <span class="text-sm text-gray-500 mt-1">
                    {alumniInfo[index].batch}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default NewAlumni;