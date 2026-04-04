import React, { useState, useEffect } from "react";
import "./NewsCarousel.css";
import { useNavigate } from "react-router-dom";

export default function NewsPanel() {
  const navigate = useNavigate();
  const [newsItems, setNewsItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    if (newsItems.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === newsItems.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [newsItems.length, isPaused]);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://ccet.ac.in/api/news.php');
      const result = await response.json();

      if (result.success && result.data.length > 0) {
        setNewsItems(result.data);
      } else {
        setError(result.error || "No news available");
        setNewsItems([]);
      }
    } catch (err) {
      setError("Error connecting to server");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const prevNews = () => {
    setActiveIndex((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1));
  };

  const nextNews = () => {
    setActiveIndex((prev) => (prev === newsItems.length - 1 ? 0 : prev + 1));
  };

  const getFullUrl = (path) => {
    if (!path) return null;
    if (path.startsWith('http')) {
      return path;
    }
    return `https://ccet.ac.in/${path}`;
  };

  if (loading) {
    return (
        <div className="news-carousel-container">
          <h2 className="news-title">NEWS</h2>
          <div className="carousel">
            <div className="carousel-content">
              <span className="news-text">Loading news...</span>
            </div>
          </div>
        </div>
    );
  }

  if (error || newsItems.length === 0) {
    return (
        <div className="news-carousel-container">
          <h2 className="news-title">NEWS</h2>
          <div className="carousel">
            <div className="carousel-content">
              <span className="news-text">{error || "No news available"}</span>
            </div>
          </div>
        </div>
    );
  }

  return (
      <div
          className="news-carousel-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
      >
        <h2 className="news-title">NEWS</h2>
        <div className="carousel">
          <button
              className="carousel-btn left"
              onClick={prevNews}
              aria-label="Previous news"
              disabled={newsItems.length <= 1}
          >
            &#8249;
          </button>
          <div className="carousel-content">
            {newsItems[activeIndex].img && (
                <img
                    src={getFullUrl(newsItems[activeIndex].img)}
                    alt={newsItems[activeIndex].title}
                    className="carousel-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                />
            )}
            <div className="news-details">
              <span className="news-text">{newsItems[activeIndex].title}</span>
              {newsItems[activeIndex].description && (
                  <p className="news-description">{newsItems[activeIndex].description}</p>
              )}
              {newsItems[activeIndex].date && (
                  <span className="news-date">
                {new Date(newsItems[activeIndex].date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              )}
            </div>
          </div>
          <button
              className="carousel-btn right"
              onClick={nextNews}
              aria-label="Next news"
              disabled={newsItems.length <= 1}
          >
            &#8250;
          </button>
        </div>
        <div className="news-link-wrapper">
            <button
                className="news-link"
                onClick={() => {
                    window.open(getFullUrl(newsItems[activeIndex].link), '_blank');
                }}
            >
                READ MORE
            </button>
        </div>
      </div>
  );
}
