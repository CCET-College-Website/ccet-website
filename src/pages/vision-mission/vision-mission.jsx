import React from 'react';
import './vision-mission.css';
import vision from '../../assets/header/vision-mission.png';


const VisionMission = () => {
  return (
    <div className="container vision-mission-page">
      <div className="container">
        {/* Header with Background Image */}
        <header className="header">
          {/* Replace 'your-image-link.jpg' with your banner image URL */}
          <img
            src={vision}
            alt="Department Banner"
            className="banner-img"
          />
          {/* Decorative Overlay for Header */}
          <div className="header-overlay">
            <h1 className="header-title">Empowering Future Leaders</h1>
            <p className="header-subtitle">Innovating through education and research</p>
          </div>
        </header>


        {/* Objectives Section */}
        <main className="main-content">
          {/* Section Title */}
          <h2 className="section-title">Objectives</h2>


          {/* Vision and Mission */}
          <section className="vision-mission-section">
            <div className="vision-box card">
              <h3>Vision</h3>
              <div className="placeholder-text">To be a global leader in engineering education, fostering innovation and sustainable development.</div>
            </div>
            <div className="mission-box card">
              <h3>Mission</h3>
              <ul>
                <li>To impart quality education promoting ethical values and professional excellence.</li>
                <li>To inspire innovation and critical thinking through research and collaboration.</li>
                <li>To nurture students into responsible global citizens.</li>
              </ul>
            </div>
          </section>


          {/* Program Educational Objectives */}
          <section className="peo-section card">
            <h2>Program Educational Objectives (PEOs)</h2>
            <ul>
              <li>Graduates will excel in professional careers and advanced studies.</li>
              <li>Graduates will demonstrate leadership and teamwork skills.</li>
              <li>Graduates will engage in lifelong learning and community service.</li>
            </ul>
          </section>


          {/* Program Specific Outcomes */}
          <section className="pso-section">
            <div className="pso-card card">
              <h4>PSO1</h4>
              <div className="placeholder-text">Apply core engineering knowledge to solve complex problems effectively.</div>
            </div>
            <div className="pso-card card">
              <h4>PSO2</h4>
              <div className="placeholder-text">Develop innovative solutions using modern tools and technologies.</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
export default VisionMission;