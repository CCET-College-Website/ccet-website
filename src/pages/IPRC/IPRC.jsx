import React from 'react';
import './IPRC.css';

const IPRC = () => {
  return (
    <div className="iprc-container">
      <header className="iprc-header">
        <h1>Institute Public Relationship Cell (IPRC)</h1>
        <p className="iprc-subtitle">Dedicated to develop the healthy relationship between Alumni, Scholars, Parents and General Populace</p>
      </header>

      <div className="iprc-content">
        <div className="iprc-main-image">
          <img src="/img/IPRC/iprc-main.jpg" alt="IPRC Main" className="img-fluid" />
        </div>
        
        <div className="iprc-text-section">
          <p>
            We can develop and strengthen the positive and productive relationship to national print and electronic media. 
            The media coverage includes the preparation of press releases in English, Hindi and Punjabi languages 
            and their further transmission to the newspapers and online media along with concerned photographs. 
            It makes arrangements for photography and videography of events and occasions and maintains a record of newspaper clippings. 
            It is responsibility of this cell to provide any types of guidance to any visiting guests and 
            renowned dignitaries and clear any quires regarding any activities of institutions.
          </p>
        </div>

        <div className="iprc-section">
          <div className="iprc-section-title">
            <h2>PRINT &amp; Media</h2>
          </div>
          <div className="iprc-section-content">
            <div className="iprc-section-image">
              <img src="/img/IPRC/iprc-media.jpg" alt="Print and Media" className="img-fluid" />
            </div>
            <div className="iprc-section-text">
              <p>
                We can develop and strengthen the positive and productive relationship to national print and electronic media. 
                The media coverage includes the preparation of press releases in English, Hindi and Punjabi languages 
                and their further transmission to the newspapers and online media along with concerned photographs. 
                It makes arrangements for photography and videography of events and occasions and maintains a record of newspaper clippings. 
                It is responsibility of this cell to provide any types of guidance to any visiting guests and renowned dignitaries and 
                clear any quires regarding any activities of institutions.
              </p>
            </div>
          </div>
        </div>

        {/* News Highlights Table - Commented out until content is available */}
        {/* 
        <div className="iprc-news">
          <h2>News Highlights of CCET Degree Wing</h2>
          <div className="iprc-table-container">
            <table className="iprc-table">
              <thead>
                <tr>
                  <th>Serial No.</th>
                  <th>Event Details</th>
                  <th>Publishing Date (yyyy-mm-dd)</th>
                  <th>Newspaper</th>
                  <th>PDF Link</th>
                </tr>
              </thead>
              <tbody>
                {/* News items will go here */}{/*}
              </tbody>
            </table>
          </div>
        </div>
        */}
      </div>
    </div>
  );
};

export default IPRC;
