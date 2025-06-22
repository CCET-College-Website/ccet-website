import React from "react";
import events from "../../assets/home/Events/events.js";
import eventBg from "../../assets/home/Events/event-bg.jpg";

const EventCalendar = () => {
  const visibleEvents = events.slice(0, 3);

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

        <div className="row justify-content-center align-items-center gx-5 gy-5 mb-4">
          {visibleEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <button className="btn btn-warning fw-bold px-4 py-2" style={{ fontSize: "1.1rem" }}>
          Read More
        </button>
      </div>

      <style>{`
        .event-card {
          background-color: #f0f0f0;
          border-radius: 0 25px 0 25px;
          max-width: 420px;
          min-width: 340px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          padding: 2rem !important;
        }

        .event-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .calendar-box {
          border-radius: 10px;
          overflow: hidden;
          min-width: 90px;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
        }

        .event-calendar-section button:focus {
          outline: 2px solid #000;
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
    <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
      <div className="event-card d-flex p-5 align-items-start shadow-lg w-full" style={{ minWidth: 340, maxWidth: 420 }}>
        <div className="calendar-box text-center me-4" style={{ minWidth: 90 }}>
          <div className="bg-danger text-white fw-bold py-2" style={{ fontSize: 22 }}>{month}</div>
          <div className="bg-white text-dark fw-bold py-2" style={{ fontSize: 32 }}>{day}</div>
          <div className="bg-light text-muted py-2" style={{ fontSize: 18 }}>{year}</div>
        </div>
        <div className="text-start mt-2">
          <h5 className="fw-bold text-dark mb-2" style={{ fontSize: 22 }}>{event.title}</h5>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
