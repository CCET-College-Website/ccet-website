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

        <div className="row justify-content-center gx-4 gy-5 mb-4">
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
          max-width: 320px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .event-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .calendar-box {
          border-radius: 10px;
          overflow: hidden;
          min-width: 65px;
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
    <div className="col-md-4 d-flex justify-content-center">
      <div className="event-card d-flex p-3 align-items-start shadow w-100">
        <div className="calendar-box text-center me-3">
          <div className="bg-danger text-white fw-bold small py-1">{month}</div>
          <div className="bg-white text-dark fw-bold fs-5 py-1">{day}</div>
          <div className="bg-light text-muted small py-1">{year}</div>
        </div>
        <div className="text-start mt-1">
          <h6 className="fw-semibold text-dark mb-0">{event.title}</h6>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
