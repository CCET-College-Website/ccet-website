import { useEffect, useState } from "react";
import { FaTrophy, FaBriefcase, FaUniversity, FaUsers } from "react-icons/fa";
import "./Achievements.css";

const API_BASE_URL = 'https://ccet.ac.in/api/achievements.php';

function Achievements() {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_BASE_URL);
      const data = await response.json();

      if (Array.isArray(data)) {
        setAchievements(data);
      } else {
        setError("Failed to load achievements");
      }
    } catch (err) {
      setError("Error loading achievements");
      console.error("Achievements fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const container = document.getElementById("achievements-scroll");

    if (!container) return;

    const originalContent = container.innerHTML;
    container.innerHTML = originalContent + originalContent;

    let interval = setInterval(() => {
      if (container) {
        container.scrollTop += 1;

        // Reset halfway instead of bottom (smooth loop)
        if (container.scrollTop >= container.scrollHeight / 2) {
          container.scrollTop = 0;
        }
      }
    }, 50);

    return () => clearInterval(interval);
  }, [achievements]); // Re-run when achievements load

  const groupedAchievements = achievements.reduce((acc, achievement) => {
    const type = achievement.achievement_type;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(achievement);
    return acc;
  }, {});

  const getIcon = (type) => {
    const lowerType = type.toLowerCase();
    if (lowerType.includes('placement') || lowerType.includes('job') || lowerType.includes('company')) {
      return <FaBriefcase className="text-green-500" />;
    } else if (lowerType.includes('higher studies') || lowerType.includes('college') || lowerType.includes('university')) {
      return <FaUniversity className="text-purple-500" />;
    } else if (lowerType.includes('other') || lowerType.includes('notable')) {
      return <FaUsers className="text-red-500" />;
    } else {
      return <FaTrophy className="text-yellow-500" />;
    }
  };

  const getIconColor = (type) => {
    const lowerType = type.toLowerCase();
    if (lowerType.includes('placement') && lowerType.includes('cse')) {
      return 'text-green-500';
    } else if (lowerType.includes('placement') && lowerType.includes('ece')) {
      return 'text-blue-500';
    } else if (lowerType.includes('higher studies')) {
      return 'text-purple-500';
    } else if (lowerType.includes('other')) {
      return 'text-red-500';
    } else {
      return 'text-yellow-500';
    }
  };

  if (loading) {
    return (
        <div className="achievements-section p-6 shadow-lg rounded-2xl">
          <h2 className="achievements-title text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
            <FaTrophy className="text-yellow-500" /> ACHIEVEMENTS
          </h2>
          <div className="flex justify-center items-center py-16">
            <span className="text-gray-500">Loading achievements...</span>
          </div>
        </div>
    );
  }

  return (
      <div className="achievements-section p-6 shadow-lg rounded-2xl">
        <h2 className="achievements-title text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
          <FaTrophy className="text-yellow-500" /> ACHIEVEMENTS
        </h2>

        {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 text-center">
              <p className="text-red-700">{error}</p>
            </div>
        )}

        <div
            id="achievements-scroll"
            className="achievements-scroll h-[600px] overflow-hidden space-y-6 pr-2"
        >
          {Object.keys(groupedAchievements).length > 0 ? (
              Object.entries(groupedAchievements).map(([type, items]) => (
                  <section key={type} className="achievement-category">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                      {getIcon(type)} {type}
                    </h3>
                    <div className="space-y-2">
                      {items.map((achievement) => {
                        const isList = achievement.description.includes('•') ||
                            achievement.description.match(/^\d+\./m) ||
                            achievement.description.includes('\n- ');

                        if (isList) {
                          const listItems = achievement.description
                              .split(/\n|•/)
                              .map(item => item.trim())
                              .filter(item => item.length > 0);

                          return (
                              <ul key={achievement.id} className="list-disc pl-5 space-y-1 text-sm">
                                {listItems.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                              </ul>
                          );
                        } else {
                          return (
                              <p key={achievement.id} className="text-sm p-2 rounded">
                                {achievement.description}
                              </p>
                          );
                        }
                      })}
                    </div>
                  </section>
              ))
          ) : (
              <div className="text-center text-gray-500 py-8">
                No achievements found.
              </div>
          )}
        </div>
      </div>
  );
}

export default Achievements;
