import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./Nss.css";

const events = [
  {
    title: "Blood Donation Camp",
    description: "NSS CCET organized a successful blood donation drive with active student participation.",
    image: "https://ccet.ac.in/images/nss/blood-donation.jpg",
    date: "March 2025",
  },
  {
    title: "Cleanliness Drive",
    description: "A campus-wide cleanliness drive was conducted under Swachh Bharat Abhiyan.",
    image: "https://ccet.ac.in/images/nss/cleanliness.jpg",
    date: "Feb 2025",
  },
  {
    title: "Tree Plantation",
    description: "NSS volunteers planted 200+ saplings to promote eco-friendly initiatives.",
    image: "https://ccet.ac.in/images/nss/tree-plantation.jpg",
    date: "Jan 2025",
  },
  {
    title: "Road Safety Awareness",
    description: "Awareness rally held in Chandigarh to promote road safety among youth.",
    image: "https://ccet.ac.in/images/nss/road-safety.jpg",
    date: "Dec 2024",
  },
];

const sections = [
  {
    title: "About NSS",
    content:
      "The National Service Scheme (NSS) at Chandigarh College of Engineering and Technology aims to instill the spirit of social service among students. It provides opportunities to students to take part in various community service activities and develop a sense of responsibility towards society.",
  },
  {
    title: "Motto",
    content:
      "The motto of NSS is 'NOT ME BUT YOU', reflecting the essence of democratic living and upholding the need for selfless service to society.",
  },
  {
    title: "Objectives",
    content:
      "1. Understand the community in which they work.\n2. Understand themselves in relation to their community.\n3. Identify the needs and problems of the community.\n4. Develop among themselves a sense of social and civic responsibility.\n5. Utilize their knowledge in finding practical solutions.\n6. Develop competence required for group-living and sharing of responsibilities.\n7. Gain skills in mobilizing community participation.\n8. Develop capacity to meet emergencies and natural disasters.\n9. Practice national integration and social harmony.",
  },
  {
    title: "Activities",
    content:
      "The NSS unit at CCET organizes various activities such as blood donation camps, cleanliness drives, plantation drives, road safety awareness, gender sensitization workshops, and other social awareness programs throughout the year.",
  },
];

const Nss = () => {
  return (
    <div className="nss-container">
      {/* Hero Section */}
      <div className="nss-hero">
        <div className="overlay">
          <h1 className="hero-title">National Service Scheme (NSS)</h1>
          <p className="hero-subtitle">
            Chandigarh College of Engineering and Technology
          </p>
        </div>
      </div>

      {/* Events */}
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
          {events.map((event, index) => (
            <SwiperSlide key={index} className="event-card">
              <div className="event-content">
                <img src={event.image} alt={event.title} className="event-image" />
                <h3 className="event-title">{event.title}</h3>
                <p className="event-desc">{event.description}</p>
                <span className="event-date">{event.date}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content Sections */}
      <div className="nss-content">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="nss-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="nss-title">{section.title}</h2>
            <p className="nss-text">{section.content}</p>
          </motion.div>
        ))}
      </div>

      {/* Form Section */}
      <div className="nss-form">
        <h2 className="form-heading">NSS Forms</h2>
        <div className="form-card">
          <p className="form-name">NSS Enrollment Form</p>
          <a
            href="https://ccet.ac.in/forms/nss_enrollment.pdf" // 🔗 replace with actual link
            className="form-download"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nss;
