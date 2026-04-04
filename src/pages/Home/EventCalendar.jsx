import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import eventBg from "../../assets/home/Events/event-bg.jpg";

const API_BASE_URL = 'https://ccet.ac.in/api/event-calender.php';

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}?is_active=true&limit=6`);
      const data = await response.json();

      if (Array.isArray(data)) {
        setEvents(data);
      } else if (data.success === false) {
        setError(data.error || "Failed to load events");
      }
    } catch (err) {
      setError("Error loading events");
      console.error("Event fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const visibleEvents = events.slice(0, 3);
  const secondRowEvents = events.slice(3, 6);

  if (loading) {
    return (
        <section
            className="event-calendar-section position-relative text-center py-5"
            style={{
              backgroundImage: `url(${eventBg})`,
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
            <h2 className="fw-bold text-white display-3 mb-5">Event Calendar</h2>
            <div className="text-white">Loading events...</div>
          </div>
        </section>
    );
  }

  return (
      <section
          className="event-calendar-section position-relative text-center py-5"
          style={{
            backgroundImage: `url(${eventBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "auto",
          }}
      >
        <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1 }}
        />

        <div className="position-relative container" style={{ zIndex: 2 }}>
          <h2 className="fw-bold text-white display-3 mb-4 mb-md-5">Event Calendar</h2>

          {error && (
              <div className="alert alert-danger mb-4" role="alert">
                {error}
              </div>
          )}

          {events.length === 0 && !error && (
              <div className="text-white mb-4">No events available at the moment.</div>
          )}

          {/* First row of 3 cards */}
          {visibleEvents.length > 0 && (
              <div className="row justify-content-center align-items-stretch gx-2 gx-md-4 gx-lg-5 gy-2 gy-md-4 mb-2 mb-md-4">
                {visibleEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
              </div>
          )}

          {/* Second row of 3 more cards (next 3 events) */}
          {secondRowEvents.length > 0 && (
              <div className="row justify-content-center align-items-stretch gx-2 gx-md-4 gx-lg-5 gy-2 gy-md-4 mb-2 mb-md-4">
                {secondRowEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
              </div>
          )}

          {events.length > 0 && (
              <Link to="/event-calendar" className="btn btn-warning fw-bold px-4 py-2 mt-3" style={{ fontSize: "1.1rem" }}>
                Read More
              </Link>
          )}
        </div>

        <style>{`
        .event-card {
          background-color: #f0f0f0;
          border-radius: 0 25px 0 25px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .event-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .calendar-box {
          border-radius: 10px;
          overflow: hidden;
          min-width: 70px;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
          flex-shrink: 0;
        }

        .event-calendar-section button:focus {
          outline: 2px solid #000;
        }

        /* Mobile styles */
        @media (max-width: 576px) {
          .event-calendar-section {
            padding: 1.5rem 0 !important;
          }
          
          .event-card {
            border-radius: 0 12px 0 12px;
            min-height: auto !important;
            height: auto !important;
          }
          
          .event-card .event-card-inner {
            padding: 0.5rem !important;
            gap: 0.5rem;
          }
          
          .calendar-box {
            min-width: 42px !important;
            max-width: 42px;
          }
          
          .calendar-box > div {
            padding: 0.2rem 0 !important;
            font-size: 10px !important;
          }
          
          .calendar-box .calendar-day {
            font-size: 18px !important;
          }
          
          .calendar-box .calendar-year {
            font-size: 9px !important;
          }
          
          .event-card h5 {
            font-size: 13px !important;
            line-height: 1.2 !important;
            margin-bottom: 0.25rem !important;
          }
          
          .event-card .location-text {
            font-size: 10px !important;
            margin-bottom: 0.25rem !important;
          }
          
          .event-card .location-icon {
            width: 12px !important;
            height: 12px !important;
            min-width: 12px !important;
          }
          
          .event-card .description-text {
            font-size: 10px !important;
            line-height: 1.3 !important;
            -webkit-line-clamp: 2 !important;
            margin-bottom: 0 !important;
          }
          
          .event-calendar-section h2 {
            font-size: 1.75rem !important;
            margin-bottom: 1rem !important;
          }
        }

        /* Extra small mobile styles */
        @media (max-width: 375px) {
          .calendar-box {
            min-width: 38px !important;
            max-width: 38px;
          }
          
          .event-card h5 {
            font-size: 12px !important;
          }
          
          .event-card .location-text,
          .event-card .description-text {
            font-size: 9px !important;
          }
        }

        /* Tablet styles */
        @media (min-width: 577px) and (max-width: 991px) {
          .calendar-box {
            min-width: 65px;
          }
        }

        /* Desktop styles */
        @media (min-width: 992px) {
          .calendar-box {
            min-width: 75px;
          }
        }
      `}</style>
      </section>
  );
};

const EventCard = ({ event }) => {
  const date = new Date(event.date);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  return (
      <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
        <div className="event-card shadow-lg w-100">
          <div className="event-card-inner d-flex p-2 p-sm-3 p-md-3 align-items-start">
            <div className="calendar-box text-center me-2 me-sm-3">
              <div className="bg-danger text-white fw-bold py-1 py-md-2" style={{ fontSize: "clamp(12px, 3.5vw, 18px)" }}>
                {month}
              </div>
              <div className="calendar-day bg-white text-dark fw-bold py-1 py-md-2" style={{ fontSize: "clamp(18px, 5vw, 28px)" }}>
                {day}
              </div>
              <div className="calendar-year bg-light text-muted py-1 py-md-2" style={{ fontSize: "clamp(10px, 2.5vw, 16px)" }}>
                {year}
              </div>
            </div>
            <div className="text-start flex-grow-1 d-flex flex-column justify-content-center">
              <h5 className="fw-bold text-dark mb-1 mb-sm-2" style={{ fontSize: "clamp(13px, 3.5vw, 18px)", lineHeight: "1.2" }}>
                {event.title}
              </h5>
              {event.location && (
                  <p className="location-text text-muted mb-1 mb-sm-2 d-flex align-items-center" style={{ fontSize: "clamp(10px, 2.5vw, 13px)" }}>
                    <MapPin className="location-icon me-1" size={13} style={{ minWidth: 13, flexShrink: 0 }} />
                    <span className="text-truncate">{event.location}</span>
                  </p>
              )}
              {event.description && (
                  <p
                      className="description-text text-secondary mb-0"
                      style={{
                        fontSize: "clamp(10px, 2.5vw, 13px)",
                        lineHeight: '1.4',
                        display: '-webkit-box',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                  >
                    {event.description}
                  </p>
              )}
            </div>
          </div>
        </div>
      </div>
  );
};

export default EventCalendar;
