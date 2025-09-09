import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

// Hook to detect if screen is mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

// Reusable FooterCard
function FooterCard({ title, links }) {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(!isMobile);

  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile]);

  const toggleOpen = () => {
    if (isMobile) setIsOpen((prev) => !prev);
  };

  const showLinks = !isMobile || isOpen;
  const useSplit = title === "Important Links" || (links.length > 8 && showLinks);

  return (
      <div
          className={`footer-card ${isMobile ? "mobile-card" : ""} ${
              showLinks ? (useSplit ? "split-columns" : "") : ""
          } ${isOpen ? "open" : ""}`}
      >
        <div className="footer-card-header">
          <h3 className="footer-heading" onClick={toggleOpen}>
            <span className="footer-heading-text">{title}</span>
            {isMobile && <span className="toggle-icon">{isOpen ? "−" : "+"}</span>}
          </h3>
        </div>
        {showLinks && (
            <div className="footer-links-container">
              <div className="footer-links-grid">
                {links.map((item, i) => (
                    <div className="footer-link-item" key={i}>
                      {item.external ? (
                          <a
                              href={item.url}
                              className="footer-link-anchor"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                            <span className="link-text">{item.name}</span>
                          </a>
                      ) : (
                          <Link to={item.url} className="footer-link-anchor">
                            <span className="link-text">{item.name}</span>
                          </Link>
                      )}
                    </div>
                ))}
              </div>
            </div>
        )}
      </div>
  );
}

// Footer Component
function Footer() {
  const sections = [
    {
      title: "Explore",
      links: [
        { name: "Library",external: true, url: "https://ccet.ac.in/library" },
        { name: "Sports Facilities", url: "/sports-facilities" },
        { name: "Boys Hostel", url: "/boys-hostel" },
        { name: "Girls Hostel", url: "/girls-hostel" },
        { name: "IIRC", url: "/iirc" },
        { name: "IPRC", url: "/iprc" },
        { name: "Innovation Cell", url: "/ecell" },
        { name: "Computer Center", url: "/computercentre" },
        { name: "Research and Consultancy", url: "/research" },
      ],
    },
    {
      title: "Important Links",
      links: [
        { name: "PU", external: true, url: "https://puchd.ac.in/" },
        { name: "UPSC", external: true, url: "https://upsc.gov.in/" },
        { name: "AICTE", external: true, url: "https://www.aicte-india.org/" },
        { name: "UGC", external: true, url: "https://www.ugc.gov.in/" },
        { name: "DST", external: true, url: "https://dst.gov.in/" },
        { name: "MHRD", external: true, url: "http://mhrd.gov.in/" },
        { name: "JEE", external: true, url: "https://jeemain.nta.nic.in/" },
        { name: "KYC", external: true, url: "https://www.india.gov.in/content/know-your-college/" },
        { name: "BIS", external: true, url: "https://www.bis.gov.in/" },
        { name: "CRIKC", external: true, url: "https://crikc.puchd.ac.in/" },
        { name: "NKN", external: true, url: "http://nkn.in/" },
        { name: "NPTEL", external: true, url: "https://nptel.ac.in/" },
        { name: "NISCAIR", external: true, url: "http://op.niscair.res.in/" },
        { name: "GATE", url: "/academics/gate" }, // internal if you have route
        { name: "DRDO", external: true, url: "https://drdo.gov.in/drdo/" },
        { name: "CHD ADMIN", external: true, url: "https://chandigarh.gov.in/" },
      ],
    },
    {
      title: "Info",
      links: [
        { name: "E-News Letter", url: "/magazine/fingerprint-vii-1" },
        { name: "Notices", url: "/notices/tenders" },
        { name: "Forms", url: "/student-forms" },
        { name: "Tenders", url: "/notices/tenders" },
        { name: "NIRF", url: "/academics/nirf" },
      ],
    },
    {
      title: "Departments",
      links: [
        { name: "Computer Science and Engineering", url: "/academics/cse/overview" },
        { name: "Electronics and Communication Engineering", url: "/ece" },
        { name: "Mechanical Engineering", url: "/academics/mechanical/overview" },
        { name: "Civil Engineering", url: "/academics/civil/overview" },
        { name: "Applied Sciences", url: "/academics/appliedscience/overview" },
      ],
    },
  ];

  return (
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-header">
            <h2 className="footer-main-title">Quick Links</h2>
          </div>

          <div className="footer-content">
            <div className="footer-grid">
              {sections.map((section, idx) => (
                  <FooterCard key={idx} title={section.title} links={section.links} />
              ))}
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="copyright-text">© 2025, CCET, All rights reserved</p>
              <nav className="footer-nav" aria-label="Footer navigation">
                <div className="footer-nav-links">
                  <Link to="/">Home</Link>
                  <Link to="/webmasters">Webmasters</Link>
                  <Link to="/anti-ragging">Anti-Ragging</Link>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                  <Link to="/contact">Quick Inquiry</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
