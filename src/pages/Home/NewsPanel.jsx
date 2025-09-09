import React, { useState } from "react";
import "./NewsCarousel.css";
import news from "./news.jpeg"
import { useNavigate } from "react-router-dom";


const newsItems = [
  {
    title: "AI Cell Formed at CCET",
    image: news
  },
  {
    title: "Internship Drive This July",
    image: news
  },
  {
    title: "New Library Hours Announced",
    image: news
  },
  {
    title: "Student Research Grants Available",
    image: news
  },
  {
    title: "TechFest 2025 Preps Begin",
    image: news
  }
];




export default function NewsPanel() {
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);

  const prevNews = () => {
    setActiveIndex((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1));
  };

  const nextNews = () => {
    setActiveIndex((prev) => (prev === newsItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="news-carousel-container">
      <h2 className="news-title">NEWS</h2>
      <div className="carousel">
        <button className="carousel-btn left" onClick={prevNews} aria-label="Previous news">
          &#8249;
        </button>
        <div className="carousel-content">
          {/* Carousel image insert: */}
          {/* If you want to add an image, replace the conditional below */}
          {newsItems[activeIndex].image && (
            <img
              src={newsItems[activeIndex].image}
              alt={newsItems[activeIndex].title}
              className="carousel-image"
            />
          )}
          <span className="news-text">{newsItems[activeIndex].title}</span>
        </div>
        <button className="carousel-btn right" onClick={nextNews} aria-label="Next news">
          &#8250;
        </button>
      </div>
      <div className="news-link-wrapper">
        <button
          className="news-link"
          onClick={() => navigate("/news")}
        >
          READ MORE
        </button>
      </div>

    </div>
  );
}
