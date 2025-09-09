import React from "react";
import eceBanner from "../../assets/ECE-Department/ece-banner.png";

export default function ECEHeader() {

  return (
    <section className="relative bg-gray-900">
      <img
        src={eceBanner}
        alt="Electronics Banner"
        className="w-full h-[32rem] object-cover opacity-60"
      />
      {/* Department Title/Subtitle */}
      <div className="absolute top-1/4 left-12 z-10 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow">
          Electronics and Communication Engineering Department
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-white drop-shadow">
          Chandigarh College of Engineering and Technology
        </p>
      </div>
    </section>
  );
}
