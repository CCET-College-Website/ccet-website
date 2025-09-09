import React from "react";
import "./AboutUsSection.css";

const AboutUsSection = () => {
  return (
    <div className="app-container">
      {/* Top heading */}
      <h1 className="section-heading">ABOUT US</h1>

      <section className="about-box">
        {/* Left Column: Text */}
        <div className="about-text">
          <h2 className="about-title">WHO ARE WE?</h2>
          <p>
            CCET is well known for its huge infrastructure and state of the art
            facilities. It is also known as Green Campus because it has a unique
            environment friendly & energy efficient building with fabulous
            architecture, lush verdant woods and landscape gardens that provide an
            idyllic academic environment to our students. CCET offers B.E.
            (Bachelor of Engineering) courses in four streams i.e. Electronics &
            Communication Engineering, Computer Science & Engineering, Mechanical
            Engineering and Civil Engineering.
          </p>
           <a href="https://www.ccet.ac.in/pdf/ENewsLetter/Newsletter-Vol%20IX%20Issue%20I.pdf"  target="_blank" className="enews-btn">
            E-News Letter
          </a>
        </div>

        {/* Right Column: Video */}
        <div className="video-container">
          <video controls>
            <source src="/videos/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-caption">Introductory Video</div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsSection;
