import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NoticePanel() {
  const navigate = useNavigate();
  const [notices, setNotices] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async (keyword = "") => {
    setLoading(true);
    setError(null);

    try {
      const url = keyword
          ? `https://ccet.ac.in/api/notices.php?keyword=${encodeURIComponent(keyword)}&limit=30`
          : `https://ccet.ac.in/api/notices.php?limit=30`;

      const response = await fetch(url);
      const result = await response.json();

      if (result.success) {
        setNotices(result.data);
      } else {
        setError(result.error || "Failed to fetch notices");
        setNotices([]);
      }
    } catch (err) {
      setError("Error connecting to server");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchKeyword.trim()) {
        fetchNotices(searchKeyword);
      } else {
        fetchNotices();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchKeyword]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  const getFullUrl = (path) => {
    if (path.startsWith('http')) {
      return path;
    }
    return `https://ccet.ac.in/${path}`;
  };

  return (
      <div className="flex justify-center items-start bg-[#f7f4f4] dark:bg-gray-700 p-8 gap-16 font-sans mt-8 mb-8 mr-2 ml-2 rounded-3xl shadow-lg transition-colors duration-300">

        <div className="w-full max-w-2xl">
          <h1 className="text-5xl font-semibold text-center mb-6 text-black dark:text-[#30709aff]">
            NOTICES
          </h1>

          <div className="mb-6">
            <input
                type="text"
                placeholder="Search"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full px-6 py-3 rounded-full border-none outline-none text-black dark:text-white bg-white dark:bg-gray-800 shadow-md placeholder:text-gray-500 dark:placeholder:text-gray-400 text-lg"
                style={{
                  boxShadow: "inset 0 0 0 4px #30709aff"
                }}
            />
          </div>

          {loading && (
              <div className="text-center py-8">
                <p className="text-gray-600 dark:text-gray-400">Loading notices...</p>
              </div>
          )}

          {error && (
              <div className="text-center py-8">
                <p className="text-red-600 dark:text-red-400">{error}</p>
              </div>
          )}

          {!loading && !error && notices.length > 0 && (
              <div className="max-h-96 overflow-y-auto pr-2 scrollbar-container" style={{ scrollbarWidth: 'thin', scrollbarColor: '#30709aff transparent' }}>
                <style>{`
              .scrollbar-container::-webkit-scrollbar {
                width: 4px;
              }
              .scrollbar-container::-webkit-scrollbar-track {
                background: transparent;
              }
              .scrollbar-container::-webkit-scrollbar-thumb {
                background: #30709aff;
                border-radius: 10px;
              }
              .scrollbar-container::-webkit-scrollbar-thumb:hover {
                background: #2a5f87;
              }
            `}</style>
                <ul className="space-y-4">
                  {notices.map((notice, index) => (
                      <li
                          key={notice.id || index}
                          className="flex justify-between items-center text-black dark:text-gray-300 text-md border-b border-gray-300 dark:border-gray-700 pb-2"
                      >
                        <a
                            href={getFullUrl(notice.link)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline flex-1"
                        >
                          {notice.title}
                        </a>
                        <span className="text-gray-900 dark:text-gray-400 text-sm ml-4">
                    {formatDate(notice.date)}
                  </span>
                      </li>
                  ))}
                </ul>
              </div>
          )}

          {!loading && !error && notices.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-600 dark:text-gray-400">No notices found</p>
              </div>
          )}

          <div className="text-center mt-8">
            <button
                onClick={() => navigate("/notices")}
                className="inline-block bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300"
                style={{ fontSize: "1.1rem" }}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
  );
}