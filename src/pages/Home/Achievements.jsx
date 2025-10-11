import React, { useEffect, useState } from "react";
import { FaTrophy, FaBriefcase, FaUniversity, FaUsers } from "react-icons/fa";
import "./Achievements.css";

function Achievements() {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Auto-scroll effect
  useEffect(() => {
    const container = document.getElementById("achievements-scroll");
    if (!container) return;

    container.innerHTML += container.innerHTML; // Duplicate content for loop

    let interval = setInterval(() => {
      if (container) {
        container.scrollTop += 1;
        if (container.scrollTop >= container.scrollHeight / 2) {
          container.scrollTop = 0;
        }
      }
    }, 50);

    return () => clearInterval(interval);
  }, [achievements]);

  // Fetch achievements data
  useEffect(() => {
    fetch("https://ccet.ac.in/api/achievements.php")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch achievements");
        return res.json();
      })
      .then((data) => {
        setAchievements(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="achievements-section p-6 shadow-lg rounded-2xl">
      <h2 className="achievements-title text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
        <FaTrophy className="text-yellow-500" /> ACHIEVEMENTS
      </h2>

      {loading && (
        <p className="text-center text-gray-500">Loading achievements...</p>
      )}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {!loading && !error && (
        <div
          id="achievements-scroll"
          className="achievements-scroll h-96 overflow-hidden space-y-6 pr-2"
        >
          {achievements.length > 0 ? (
            achievements.map((item, index) => (
              <section key={item.id || index} className="achievement-category">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <FaTrophy className="text-yellow-500" />
                  {item.title || "Untitled Achievement"}
                </h3>

                {item.subtitle && (
                  <p className="text-sm italic text-gray-700 mb-1">
                    {item.subtitle}
                  </p>
                )}

                {item.description && (
                  <p className="text-sm p-2 rounded">{item.description}</p>
                )}

                {item.image && (
                  <div className="my-3">
                    <img
                      src={`https://ccet.ac.in/${item.image}`}
                      alt={item.title}
                      className="rounded-lg shadow-md max-h-60 object-cover"
                    />
                  </div>
                )}

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm hover:underline"
                  >
                    View More
                  </a>
                )}
              </section>
            ))
          ) : (
            <p className="text-center text-gray-500">No achievements found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Achievements;
