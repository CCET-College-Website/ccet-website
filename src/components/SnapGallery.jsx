//SnapGallery.jsx under components
import React from 'react';

const SnapGallery = ({ images, blockName }) => {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-semibold text-center mb-6">{blockName}</h2>
      <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory px-4">
        <div className="flex space-x-6 w-max">
          {images.map((img, i) => (
            <div
              key={i}
              className="snap-center flex-shrink-0 w-[20rem] h-[15rem] md:w-[28rem] md:h-[20rem] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img
                src={img}
                alt={`${blockName} ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SnapGallery;
