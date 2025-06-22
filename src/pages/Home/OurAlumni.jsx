import React, { useState } from "react";
import backgroundImg from "../../assets/home/Events/event-bg.jpg";
import alumniInfo from "../../assets/home/Alumni/alumniInfo";

const OurAlumni = () => {
  const [index, setIndex] = useState(0);
  const { name, batch, designation, image } = alumniInfo[index];

  const navigate = (dir) => {
    setIndex((prev) =>
      dir === "left"
        ? (prev - 1 + alumniInfo.length) % alumniInfo.length
        : (prev + 1) % alumniInfo.length
    );
  };

  return (
    <section
      className="our-alumni-section text-center position-relative py-5"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1 }}
      />

      <div className="position-relative container" style={{ zIndex: 2 }}>
        <h2 className="fw-bold text-white mb-5 display-3">Our Alumni</h2>

        <div className="alumni-banner d-flex justify-content-center align-items-start position-relative mb-5">
          <button
            className="alumni-flap flap-left d-flex align-items-center justify-content-center"
            onClick={() => navigate("left")}
            aria-label="Previous Alumni"
          >
            &larr; Prev
          </button>

          <div className="alumni-card card-hover d-flex flex-column justify-content-center align-items-center text-center shadow">
            <img src={image} alt={name} className="alumni-image rounded-circle mb-3" />
            <h5 className="fw-bold text-dark mb-1">{name}</h5>
            <p className="mb-1 text-dark">Batch: {batch}</p>
            <p className="text-muted mb-0">{designation}</p>
          </div>

          <button
            className="alumni-flap flap-right d-flex align-items-center justify-content-center"
            onClick={() => navigate("right")}
            aria-label="Next Alumni"
          >
            Next &rarr;
          </button>
        </div>
      </div>

      <style>{`
        .alumni-banner {
          height: 250px;
        }

        .alumni-card {
          background-color: #fff;
          max-width: 600px;
          width: 100%;
          height: 250px;
          padding: 2rem;
          border-radius: 0;
          transition: all 0.3s ease-in-out;
          z-index: 2;
        }

        .card-hover:hover {
          transform: scale(1.02);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
          background-color: #fdf6ed;
        }

        .alumni-image {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border: 3px solid #fff;
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
        }

        .alumni-flap {
          width: 120px;
          height: 250px;
          background-color: #d3d3d3;
          font-weight: bold;
          font-size: 1.1rem;
          border: none;
          color: #333;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .alumni-flap:hover {
          background-color: #bcbcbc;
        }

        .flap-left {
          transform: translate(20px, 30px);
        }

        .flap-right {
          transform: translate(-20px, 30px);
        }

        .our-alumni-section button:focus {
          outline: 2px solid #000;
        }
      `}</style>
    </section>
  );
};

export default OurAlumni;
