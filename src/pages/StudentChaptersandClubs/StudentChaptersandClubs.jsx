import React, { useState } from "react";

import achintyamLogo from "./achintyam-logo.jpg";
import apostleLogo from "./aos-logo.jpg";
import symphonyLogo from "./symphony-logo.jpg";
import roboknoxLogo from "./robo-logo.png";
import pbnLogo from "./pbn-logo.jpg";
import beatlesLogo from "./beatles-logo.jpg";
import dramebaazLogo from "./dramz-logo.jpg"; 
import sevenNotesLogo from "./7notes-logo.jpg";
import artstrongLogo from "./art_strong.jpg";

const clubs = [
  {
    name: "ACHINTYAM",
    logo: achintyamLogo,
    description:
      "EYES LIKE A SHUTTER, MIND LIKE A LENS, the motto of the college's Photography Club, correctly describes what we do. We are a group of photography enthusiasts who express emotions through the camera. We are known for our creativity and our love for the art of photography.",
    bgColor: "bg-gradient-to-r from-rose-100 to-pink-200",
  },
  {
    name: "APOSTLE OF SPEECH",
    logo: apostleLogo,
    description:
      "Apostle of Speech proudly believes in the motto, silence unjustified - we stay true to our words, and speak of things that matter; your voice matters, the opinion inside you will be heard, let’s think more, talk more, and make a change, however it is, whatever it maybe! Beautiful minds should not be caged, thoughts should not be compromised with the absence of sound. Silence is truly Unjustified.",
    bgColor: "bg-gradient-to-r from-gray-900 to-gray-700 text-white",
  },
  {
    name: "SYMPHONY",
    logo: symphonyLogo,
    description:
      "With the mantra 'PASSION FOR FASHION', Symphony has been the college’s mark in the Fashion and Glamour world. The club has witnessed huge participation from the previous six years and had also won some laurels in fests and events. The best thing about Symphony is that it is not simply models strutting the runway but it always brings out a message through every show it has put up; be it Yin Yang which exhibited Contrasts of Human Nature. Festivals of India which took pride in the Cultural diversity of the country or Evolution of Bollywood",
    bgColor: "bg-gradient-to-r from-fuchsia-200 to-pink-300",
  },
  {
    name: "ROBOKNOX",
    logo: roboknoxLogo,
    description:
      "Turn your cogs and run your brain simulations because the official technical club of ECE, Roboknox, is here to take you on a rollercoaster of innovation and robotics. We are the future of technology, always striving to keep up with the changes in this new found age of automation. In the spirit of our motto,Create, Innovate, Automate we aim to achieve innovative solutions to everyday problems.",
    bgColor: "bg-gradient-to-r from-slate-100 to-gray-200",
  },
  {
    name: "PUNJABI BY NATURE",
    logo: pbnLogo,
    description:
      "EAT SLEEP BHANGRA REPEAT. That’s what we punjabis do! Punjabi By Nature, the official Bhangra Club of CCET, represents the culture and history of Punjab. PBN is committed to providing an enriching environment for self-expression, growth, and success. The core values we have learned to live by through dance are unity,love and a sense of family. Since its foundation, the club has gained much recognition through its flash mobs and power packed performances.",
    bgColor: "bg-gradient-to-r from-cyan-200 to-sky-300",
  },
  {
    name: "BEATLES",
    logo: beatlesLogo,
    description:
      "BEATLES is the first ever Western Dance group Of CCET. The journey of BEATLES began on 17th February 2008 when a few peeps got together to form a dance group to represent our college in intercollege and youth fests. With a few prizes and priceless appreciation from our audience, we are looking forward to achieve more.",
    bgColor: "bg-gradient-to-r from-amber-200 to-yellow-300",
  },
  {
    name: "DRAMEBAAZ",
    logo: dramebaazLogo,
    description:
      "Dramebaaz is the theatre club. We believe in educating the society through our performances. We have conducted numerous street plays and flash mobs.",
    bgColor: "bg-gradient-to-r from-teal-200 to-cyan-300",
  },
  {
    name: "7 NOTES",
    logo: sevenNotesLogo,
    description:
      "7 NOTES is the Music Club of CCET. We believe that music is everywhere, it’s just how you comprehend it.",
    bgColor: "bg-gradient-to-r from-yellow-200 to-orange-200",
  },
  {
    name: "ARTSTRONG",
    logo: artstrongLogo,
    description:
      "Artstrong is an artistic club. At ArtStrong, we hold fast to the conviction that through the medium of paint and graphite, one can give voice to their innermost emotions and thoughts, unleashing a vibrant spectrum of colors and shades.",
    bgColor: "bg-gradient-to-r from-indigo-200 to-sky-300",
  },
];

const StudentChaptersAndClubs = () => {
  const [current, setCurrent] = useState(0);

  const prevClub = () => {
    setCurrent((prev) => (prev === 0 ? clubs.length - 1 : prev - 1));
  };

  const nextClub = () => {
    setCurrent((prev) => (prev === clubs.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center px-6 py-16 transition-all duration-500 ${clubs[current].bgColor}`}
    >
      <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl flex items-center justify-center border-4 border-gray-200 bg-white mb-8">
        <img
          src={clubs[current].logo}
          alt={clubs[current].name}
          className="object-contain w-full h-full"
        />
      </div>

      <h2 className="text-4xl font-extrabold tracking-[0.35em] mb-8 text-center font-serif uppercase">
        {clubs[current].name}
      </h2>

      <div className="relative max-w-3xl text-center text-base md:text-lg leading-relaxed px-4">
        <span className="absolute left-[-50px] top-[-20px] text-7xl md:text-8xl text-gray-400 opacity-30">
          ❝
        </span>
        <p className="px-6">{clubs[current].description}</p>
        <span className="absolute right-[-50px] bottom-[-20px] text-7xl md:text-8xl text-gray-400 opacity-30">
          ❞
        </span>
      </div>

      <button
        onClick={prevClub}
        className="absolute left-10 top-1/2 transform -translate-y-1/2 text-4xl opacity-70 hover:opacity-100"
      >
        ❮
      </button>
      <button
        onClick={nextClub}
        className="absolute right-10 top-1/2 transform -translate-y-1/2 text-4xl opacity-70 hover:opacity-100"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="flex gap-3 mt-10">
        {clubs.map((_, idx) => (
          <span
            key={idx}
            className={`w-4 h-4 rounded-full transition ${
              idx === current ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentChaptersAndClubs;
