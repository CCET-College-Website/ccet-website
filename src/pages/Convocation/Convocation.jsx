import React from 'react';
import './Convocation.css'; // Ensure you style as per your design

const Convocation = () => {
  return (
    <div className="convocation-container">
      {/* Header */}
      <div className="convocation-header">
       
        <div className="annual-title">
          <div className="annual-text">Annual</div>
          <div className="convocation-year">Convocation 2023</div>
        </div>
      </div>

      {/* Info Section */}
      <div className="convocation-info">
        <div className="info-card">
          <span className="info-icon">📅</span>
          <div className="info-label">Date</div>
          <div className="info-value">To be announced</div>
        </div>
        <div className="info-card">
          <span className="info-icon">⏰</span>
          <div className="info-label">Time</div>
          <div className="info-value">10:00 AM onwards</div>
        </div>
        <div className="info-card">
          <span className="info-icon">📍</span>
          <div className="info-label">Venue</div>
          <div className="info-value">CCET Main Auditorium</div>
        </div>
        <div className="info-card">
          <span className="info-icon">🎓</span>
          <div className="info-label">Graduates</div>
          <div className="info-value">850+ students</div>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="section-title gallery-title">
        Photo Gallery
      </div>
      <div className="gallery-desc">
        Glimpses from previous convocation ceremonies showcasing the pride and joy of our graduates
      </div>
      <div className="gallery-grid">
        {/* Replace these divs with images */}
        <div className="gallery-box"></div>
        <div className="gallery-box"></div>
        <div className="gallery-box"></div>
        <div className="gallery-box"></div>
        <div className="gallery-box"></div>
        <div className="gallery-box"></div>
      </div>

      {/* Program Schedule Section */}
      <div className="section-title schedule-title">
        Program Schedule
      </div>
      <div className="schedule-desc">
        A detailed programme to honor our graduates and celebrate their academic achievements
      </div>
      <div className="schedule-grid">
        <div className="schedule-item">
          <div className="time">9:00 AM</div>
          <div className="item-title">Registration & Assembly</div>
          <div className="item-desc">
            Graduates and guests registration at the venue
          </div>
        </div>
        <div className="schedule-item">
          <div className="time">9:30 AM</div>
          <div className="item-title">Academic Procession</div>
          <div className="item-desc">
            Faculty procession and seating of dignitaries
          </div>
        </div>
        <div className="schedule-item">
          <div className="time">10:00 AM</div>
          <div className="item-title">Opening Ceremony</div>
          <div className="item-desc">
            National Anthem, Saraswati Vandana and Welcome Address
          </div>
        </div>
        <div className="schedule-item">
          <div className="time">10:30 AM</div>
          <div className="item-title">Address by Chief Guest</div>
          <div className="item-desc">
            Inspirational address by the Hon'ble Chief Guest
          </div>
        </div>
        <div className="schedule-item">
          <div className="time">11:30 AM</div>
          <div className="item-title">Degree Conferment Ceremony</div>
          <div className="item-desc">
            Conferring of degrees, gold medals and awards
          </div>
        </div>
        <div className="schedule-item">
          <div className="time">1:00 PM</div>
          <div className="item-title">Vote of Thanks & Tea</div>
          <div className="item-desc">
            Vote of thanks followed by refreshments
          </div>
        </div>
      </div>

      {/* Distinguished Speakers */}
      <div className="section-title speakers-title">
        Distinguished Speakers
      </div>
      <div className="speakers-desc">
        Eminent personalities who will inspire our graduating engineers and technologists
      </div>
      <div className="speakers-grid">
        <div className="speaker-card">
          <div className="avatar"></div>
          <div className="speaker-name">To be announced</div>
          <div className="speaker-title">Hon'ble Vice Chancellor</div>
          <div className="speaker-desc">
            Distinguished academician and administrator who will grace the occasion as Chief Guest.
          </div>
        </div>
        <div className="speaker-card">
          <div className="avatar"></div>
          <div className="speaker-name">To be announced</div>
          <div className="speaker-title">Industry Expert</div>
          <div className="speaker-desc">
            Eminent professional from industry who will share insights with graduating students.
          </div>
        </div>
        <div className="speaker-card">
          <div className="avatar"></div>
          <div className="speaker-name">To be announced</div>
          <div className="speaker-title">University Gold Medalist</div>
          <div className="speaker-desc">
            Top performing graduate representing the academic excellence of the batch.
          </div>
        </div>
      </div>

      {/* Dress Code and Important Updates */}
      <div className="section-title updates-title">
        Important Updates
      </div>
      <div className="updates-grid">
        <div className="update-box">
          <div className="update-title">Dress Code Guidelines</div>
          <div className="update-desc">
            All graduates must wear formal attire. Traditional Indian formal wear is encouraged. Details available in the student handbook.
          </div>
        </div>
      </div>

      {/* Venue Information */}
      <div className="section-title venue-title">
        Venue Information
      </div>
      <div className="venue-info">
        <div className="venue-name">CCET Main Auditorium</div>
        <div className="venue-address">
          Address<br/>
          Chandigarh College of Engineering & Technology<br/>
          Sector 26, Chandigarh<br/>
          Punjab - 160019, India
        </div>
        <div className="venue-features">
          <div>Seating capacity for 1,000+ guests</div>
          <div>Air-conditioned facility</div>
          <div>Professional sound system</div>
          <div>Wheelchair accessible</div>
          <div>Live streaming facility</div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <div><b>Main Office: </b></div>
        <div><b>Convocation Helpdesk:</b></div>
        <div><b>Security Office:</b></div>
        <div><b>Email: </b> @ccet.ac.in</div>
      </div>
    </div>
  );
};

export default Convocation;
