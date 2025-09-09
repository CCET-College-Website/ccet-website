import React from 'react';
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import "./NewsDetails.css";

// News is hardcoded for demonstration purposes

const newsList = [
  {
    title: "CCET Ranked Among Top 100",
    date: "September 5, 2025",
    description: "Chandigarh College of Engineering and Technology has been ranked among the top 100 engineering institutes in India by NIRF 2025.",
  },
  {
    title: "Tech Fiesta 2025 Announced",
    date: "August 30, 2025",
    description: "The annual technical festival, Tech Fiesta, will be held from October 20-22 with workshops, hackathons, and guest speakers.",
  },
  {
    title: "Placement Drive 2025 Kicks Off",
    date: "August 20, 2025",
    description: "The 2025 placement drive starts this week, featuring top companies like Infosys, TCS, and Microsoft.",
  },
  {
    title: "Library Adds New E-Resources",
    date: "August 10, 2025",
    description: "Students can now access Springer and IEEE journals for research through the college library portal.",
  },
];

const NewsDetails = () => {
    return (
        <>
        <section className="news-section">
            <h2 className="news-title1">Notices</h2>
            <div className="news-list">
                {newsList.map((news, idx) => (
                    <div className="news-card" key={idx}>
                        <div className="news-date">{news.date}</div>
                        <h3 className="news-headline">{news.title}</h3>
                        <p className="news-desc">{news.description}</p>
                    </div>
                ))}
            </div>
        </section>
        </>
    );
};

export default NewsDetails;
