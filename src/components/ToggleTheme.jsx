import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ToggleTheme() {
  const location = useLocation();
  if (location.pathname !== "/") return null; // Only show on home page

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="sticky top-[var(--header-height,64px)] z-50 flex justify-end px-4 py-2 bg-transparent">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`px-4 py-2 rounded-lg border transition-colors duration-200
          ${darkMode
            ? "bg-white text-black border-gray-300 hover:bg-gray-100"
            : "bg-gray-800 text-white border-gray-600 hover:bg-gray-700"
          }`}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}

export default ToggleTheme;
