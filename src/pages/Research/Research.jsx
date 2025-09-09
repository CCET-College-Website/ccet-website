import React from 'react';
import './Research.css';

const Research = () => {
  return (
    <div className="research-container">
      <header className="research-header">
        <h1>Research and Consultancy</h1>
        <p className="research-subtitle">Scientific Research and Industries Consultancy is a necessity for Engineering</p>
      </header>

      <div className="research-content">
        <div className="research-section">
          <div className="research-image-container">
            <img className="research-image" src="/img/Research/research-placeholder.jpg" alt="Research at CCET" />
          </div>
          <div className="research-text-container">
            <h2>Research at CCET</h2>
            <p>
              Faculty and students can apply their knowledge to innovative things and can come up with newer inventions. 
              These innovations and inventions are very important for any nation to cater to the upcoming challenges related to humankind. 
              This cell is determined to fetch world-class projects from the government organizations like ISRO, DST, etc., 
              and various industries like Infosys, Oracle, etc., to encourage research and development.
            </p>
            <div className="research-button-wrapper">
              <a href="#/contact" className="research-button">Start your Research</a>
            </div>
          </div>
        </div>

        <div className="research-section reverse">
          <div className="research-text-container">
            <h2>Industrial Consultancy and Activities</h2>
            <p>
              In CCET, the research activities are department centric. Each department contributes towards research and 
              development independently. The institute actively participates in sponsored research and development projects 
              and has a joint collaboration with eminent institutes in India. PhD students are actively participating in 
              research and development activities.
            </p>
          </div>
          <div className="research-image-container">
            <img className="research-image" src="/img/Research/consultancy-placeholder.jpg" alt="Industrial Consultancy" />
          </div>
        </div>

        <div className="research-activities">
          <h2>The different activities include:</h2>
          <ol>
            <li>Development of many projects by students and faculties</li>
            <li>Collaborative programmes with other Institutes in India</li>
            <li>Specialised Workshops / Courses for the benefit of Industry</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Research;
