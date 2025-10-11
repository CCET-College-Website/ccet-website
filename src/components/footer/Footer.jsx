import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

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
                      {item.external || item.is_external ? (
                          <a
                              href={item.url || item.link_url}
                              className="footer-link-anchor"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                            <span className="link-text">{item.name || item.link_name}</span>
                          </a>
                      ) : (
                          <Link to={item.url || item.link_url} className="footer-link-anchor">
                            <span className="link-text">{item.name || item.link_name}</span>
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

function Footer() {
  const [sections, setSections] = useState([]);
  const [bottomLinks, setBottomLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFooterData();
  }, []);

  const fetchFooterData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://ccet.ac.in/api/footer.php?endpoint=full-footer');
      const result = await response.json();

      if (result.sections && result.sections.length > 0) {
        const formattedSections = result.sections.map(section => ({
          title: section.section_name,
          links: section.links.map(link => ({
            name: link.link_name,
            url: link.link_url,
            external: link.is_external
          }))
        }));
        setSections(formattedSections);
      } else {
        setError("No footer sections available");
        setSections([]);
      }

      if (result.bottom_links && result.bottom_links.length > 0) {
        setBottomLinks(result.bottom_links);
      } else {
        setBottomLinks([]);
      }
    } catch (err) {
      setError("Error loading footer data");
      console.error("Footer fetch error:", err);
      setSections([]);
      setBottomLinks([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
        <footer className="footer-section">
          <div className="footer-container">
            <div className="flex justify-center items-center py-8">
              <span className="text-gray-400">Loading footer...</span>
            </div>
          </div>
        </footer>
    );
  }

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
                  {bottomLinks.map((link, idx) => (
                      link.is_external ? (
                          <a
                              key={idx}
                              href={link.link_url}
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                            {link.link_name}
                          </a>
                      ) : (
                          <Link key={idx} to={link.link_url}>
                            {link.link_name}
                          </Link>
                      )
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;