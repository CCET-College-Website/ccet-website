import React from 'react';
import './IIRC.css';

const IIRC = () => {
  return (
    <div className="iirc-container">
      <header className="iirc-header">
        <h1>Industry Institute Relationship Cell (IIRC)</h1>
        <p className="iirc-lead">Imbibing students with industrial advancements and learning</p>
      </header>

      <section className="iirc-intro-section">
        <div className="iirc-intro-wrapper">
          <div className="iirc-intro-image">
            <img src="/img/IIRC/iirc-intro.jpg" alt="Industry Institute Relationship" />
          </div>
          <div className="iirc-intro-content">
            <h2>
              <span className="iirc-heading-upper">(IIRC)</span>
              <span className="iirc-heading-lower">Initiatives and Goals</span>
            </h2>
            <p>
              Better interaction between institutions and industry is the most important requirement in the present
              scenario. This will have great bearing on engineering research & projects, exposure to industrial
              atmosphere for engineering students, and subsequent placement of young graduating engineers in industries
              across the globe.
            </p>
            <div className="iirc-button-wrapper">
              <a className="iirc-button" href="#about-iirc">Know More!</a>
            </div>
          </div>
        </div>
      </section>

      <div className="iirc-spacer"></div>

      <section id="about-iirc" className="iirc-section">
        <div className="iirc-section-wrapper">
          <div className="iirc-section-title">
            <h2>About IIRC</h2>
          </div>
          <div className="iirc-section-content-wrapper">
            <img className="iirc-section-img" src="/img/IIRC/about-iirc.jpg" alt="About IIRC" />
            <div className="iirc-section-content">
              <p>
                With the advent of globalization and opening up of Indian economy to outside world, CCET
                (Degree Wing) started INDUSTRY INSTITUTION RELATION CELL (IIRC) with aim to enhance globe repute industry
                and institute interaction with CCET students and minimize the gap between academia and industry for better
                exchange of their expertise resources to produce skill based nation building technical manpower. There is
                an urgent need to prepare engineering students for jobs in multinational companies and research
                organizations, by exposing them to newer technologies and engineering methodologies. These aims can only
                be achieved well by bridging the gap between industry and the academic institute. With this aim, IIRC
                invites scientist, Academic researchers, thought-leaders, entrepreneur, industry executive, policy maker
                and other renewed orator to address and share their expertise to students.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="iirc-section">
        <div className="iirc-section-wrapper reversed">
          <div className="iirc-section-title">
            <h2>
              <span className="iirc-heading-upper">Ideologies &</span>
              <span className="iirc-heading-lower">Objectives</span>
            </h2>
          </div>
          <div className="iirc-section-content-wrapper">
            <img className="iirc-section-img" src="/img/IIRC/objectives-iirc.jpg" alt="IIRC Objectives" />
            <div className="iirc-section-content">
              <ul className="iirc-list">
                <li>
                  To improve the quality of technical education adequately to meet the needs of
                  the industry and economy. Technical education system should operate at optimum efficiency and deliver
                  quality product to employers.
                </li>
                <li>
                  To enlist participation of industry in Technical Education Programmes, with a
                  view to gain the advantage of cross fertilization of ideas for system improvement.
                </li>
                <li>
                  To optimise the deployment of physical and human resources of institutions and
                  industries in the pursuit of development of technical manpower.
                </li>
                <li>
                  To integrate industrial training and other inputs from the industry with the
                  teaching learning processes so as to develop the students.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="iirc-initiatives">
        <div className="iirc-card">
          <div className="iirc-card-header">
            <h3>The key initiatives of IIRC</h3>
          </div>
          <div className="iirc-card-body">
            <ul className="iirc-initiatives-list">
              <li>
                Collaboration with Oracle, India for faculty development and skill based student
                training on Database, SQL and Java technologies
              </li>
              <li>
                Collaboration with Infosys, Chandigarh for foundation programme for engineering
                students.
              </li>
              <li>
                Collaboration with Regional Institute of English (RIE), Chandigarh for soft and
                communication skill for overall personality development (in process).
              </li>
              <li>
                Collaboration with NIELIT(Govt. Of India), Chandigarh for various student
                workshops, seminars and training on various latest technologies.
              </li>
              <li>
                Collaboration with NITTTR(Govt. Of India), Chandigarh for faculty development and
                students trainings on various latest technologies.
              </li>
              <li>
                Planning the required steps to start CCET ACM students Chapter and CCET IEEE
                students Chapter.
              </li>
              <li>
                Exploring the various opportunities with IBM research and IIT Delhi for students
                in research and innovation (in process)
              </li>
              <li>
                Planning to organize an Industry Conclave at CCET (Degree Wing), Chandigarh
              </li>
            </ul>
            <div className="iirc-contact-button-wrapper">
              <a href="#/contact" className="iirc-contact-button">Contact Professor In-charge</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IIRC;
