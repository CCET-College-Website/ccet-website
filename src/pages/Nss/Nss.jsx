import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./Nss.css";

const Nss = () => {
  const [events, setEvents] = useState([]);
  const [sections, setSections] = useState([]);
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    setError(null);

    try {
      const [eventsRes, sectionsRes, formsRes] = await Promise.all([
        fetch('https://ccet.ac.in/api/nss.php?entity=events&is_active=true'),
        fetch('https://ccet.ac.in/api/nss.php?entity=sections&is_active=true'),
        fetch('https://ccet.ac.in/api/nss.php?entity=forms&is_active=true')
      ]);

      const [eventsData, sectionsData, formsData] = await Promise.all([
        eventsRes.json(),
        sectionsRes.json(),
        formsRes.json()
      ]);

      if (Array.isArray(eventsData)) {
        setEvents(eventsData);
      }
      if (Array.isArray(sectionsData)) {
        setSections(sectionsData);
      }
      if (Array.isArray(formsData)) {
        setForms(formsData);
      }

    } catch (err) {
      setError("Error loading NSS data");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const getFullUrl = (path) => {
    if (!path) return null;
    if (path.startsWith('http')) {
      return path;
    }
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return `https://ccet.ac.in/${cleanPath}`;
  };

  if (loading) {
    return (
        <div className="nss-container">
          <div className="text-center py-5">
            <h2>Loading NSS Information...</h2>
          </div>
        </div>
    );
  }

  return (
      <div className="nss-container">
        <div className="nss-main-heading">
          <h1>National Service Scheme</h1>
        </div>

        {events.length > 0 && (
            <div className="nss-events">
              <h2 className="events-heading">Recent NSS Events</h2>
              <Swiper
                  modules={[Navigation, Pagination, EffectCoverflow]}
                  effect="coverflow"
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  navigation
                  pagination={{ clickable: true }}
                  coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  className="events-swiper"
              >
                {events.map((event, index) => {
                  const matchingForm = forms.find(form =>
                      form.form_name.toLowerCase().trim() === event.title.toLowerCase().trim()
                  );

                  return (
                      <SwiperSlide key={event.id || index} className="event-card">
                        <div className="event-content">
                          {event.image_url && (
                              <img
                                  src={getFullUrl(event.image_url)}
                                  alt={event.title}
                                  className="event-image"
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                  }}
                              />
                          )}
                          <h3 className="event-title">{event.title}</h3>
                          <p className="event-desc">{event.description}</p>
                          {event.event_date && (
                              <span className="event-date">{event.event_date}</span>
                          )}
                          {matchingForm && (
                              <a
                                  href={getFullUrl(matchingForm.form_url)}
                                  className="event-report-btn"
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                View Report
                              </a>
                          )}
                        </div>
                      </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
        )}

        {sections.length > 0 && (
            <div className="nss-content">
              {sections.map((section, index) => (
                  <motion.div
                      key={section.id || index}
                      className="nss-section"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                  >
                    <h2 className="nss-title">{section.title}</h2>
                    <p className="nss-text" style={{ whiteSpace: 'pre-line' }}>
                      {section.content}
                    </p>
                  </motion.div>
              ))}
            </div>
        )}

        {forms.length > 0 && (
            <div className="nss-form">
              <h2 className="form-heading">NSS Forms</h2>
              {forms.filter(form => {
                return !events.some(event =>
                    event.title.toLowerCase().trim() === form.form_name.toLowerCase().trim()
                );
              }).map((form, index) => (
                  <div key={form.id || index} className="form-card">
                    <p className="form-name">{form.form_name}</p>
                    <a
                        href={getFullUrl(form.form_url)}
                        className="form-download"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </div>
              ))}
            </div>
        )}

        {error && (
            <div className="text-center text-red-500 py-4">
              {error}
            </div>
        )}
      </div>
  );
};

export default Nss;