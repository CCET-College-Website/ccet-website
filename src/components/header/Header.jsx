import React, { useState, useEffect, useRef } from 'react';
import CCETLogo from '../../assets/header/CCET-Logo.png';
import IndianEmblem from '../../assets/header/Indian-Emblem.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const mobileNavRef = useRef(null);

  // Close mobile menu when clicking outside it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
      <div className="w-full bg-white md:bg-gradient-to-r md:from-blue-900 md:to-slate-900 relative z-50">

        {/* Mobile View */}
        <div className="md:hidden w-full bg-gradient-to-r from-blue-900 to-slate-900 shadow">
          {/* Row 1: Logo | Title | Emblem */}
          <div className="w-full px-4 py-3 flex items-center justify-between">
            <img src={CCETLogo} alt="CCET Logo" className="h-10 w-auto" />
            <div className="flex-1 text-center px-2">
              <h1 className="text-white text-sm font-serif leading-tight">
                Chandigarh College of Engineering and Technology
              </h1>
              <p className="text-[10px] text-gray-300 font-serif leading-none mt-1">
                (PU | Chandigarh)
              </p>
            </div>
            <img src={IndianEmblem} alt="Indian Emblem" className="h-10 w-auto" />
          </div>

          {/* Row 2: Gold Menu Button (moved to right) */}
          <div className="w-full flex justify-end pb-3 pr-4">
            <button
                onClick={() => setMenuOpen(true)}
                className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-red-700 px-2.5 py-1 rounded-full shadow text-xs font-medium"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Menu
            </button>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex flex-col items-center px-2 py-3 w-full max-w-[1436px] mx-auto">
          <div className="flex w-full items-center justify-center gap-2">
            <div className="flex items-center h-full mx-14 min-w-[96px]">
              <img className="h-24 w-auto object-contain" src={CCETLogo} alt="College Logo" />
            </div>
            <div className="flex flex-col flex-shrink items-center px-2 w-full max-w-[900px]">
              <h1 className="font-serif text-white text-4xl text-center leading-tight">
                Chandigarh College of Engineering and Technology
              </h1>
              <h2 className="font-serif text-white text-lg text-center leading-snug mt-1 mb-2 px-2">
                (Government Institute Under Chandigarh UT Administration, Affiliated to Panjab University, Chandigarh)
              </h2>
              <div className="w-full px-4">
                <div className="max-w-4xl mx-auto border-t-2 border-white mt-2 mb-2" />
              </div>
            </div>
            <div className="flex items-center h-full mx-14 min-w-[96px]">
              <img className="h-24 w-auto object-contain" src={IndianEmblem} alt="Indian Emblem" />
            </div>
          </div>

          {/* Desktop Nav with gold glow effect on hover and active*/}
          <nav className="w-full flex justify-center items-center gap-3 -mt-0 -mb-2">
            {[
              'Home',
              'About Us',
              'Academics',
              'Students Section',
              'Placements',
              'Notices',
            ].map((item) => (
                <div
                    key={item}
                    className={`cursor-pointer px-3 py-1 rounded-md font-serif text-xl whitespace-nowrap transition-all duration-200
                ${
                        activeNav === item
                            ? 'bg-yellow-400 text-red-700 shadow-md'
                            : 'text-white hover:bg-yellow-400 hover:text-red-700 hover:shadow-md'
                    }`}
                    onClick={() => setActiveNav(item)}
                >
                  {item}
                </div>
            ))}
          </nav>
        </div>

        {/* Mobile Slide Drawer (now slides in from right) */}
        {menuOpen && (
            <div className="fixed top-0 left-0 w-full h-full z-40">
              <div
                  ref={mobileNavRef}
                  className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300"
              >
                <div className="p-4 border-b font-semibold text-lg bg-blue-900 text-white">
                  Navigation
                </div>
                {[
                  'Home',
                  'About Us',
                  'Academics',
                  'Students Section',
                  'Placements',
                  'Notices',
                ].map((item) => (
                    <div
                        key={item}
                        className={`px-4 py-3 cursor-pointer transition-all duration-200 font-medium
                  ${
                            activeNav === item
                                ? 'bg-yellow-400 text-red-700 shadow-md'
                                : 'text-gray-800 hover:bg-yellow-400 hover:text-red-700 hover:shadow-md'
                        }`}
                        onClick={() => {
                          setActiveNav(item);
                          setMenuOpen(false);
                        }}
                    >
                      {item}
                    </div>
                ))}
              </div>
            </div>
        )}
      </div>
  );
};

export default Header;
