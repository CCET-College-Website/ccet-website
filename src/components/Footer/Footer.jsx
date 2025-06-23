import React, { useState, useEffect } from 'react';
import './Footer.css';

// Hook to detect if screen is mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
};

// Reusable FooterCard component
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
  const useSplit = links.length > 8 && showLinks;

  return (
    <div className={`footer-card-wrapper ${isMobile ? 'mobile-card' : ''} ${showLinks ? (useSplit ? 'split-columns' : '') : ''} ${isOpen ? 'open' : ''}`}>
      <div className="footer-heading" onClick={toggleOpen}>
        {title}
      </div>
      {showLinks && (
        <div className="footer-links-container">
          {links.map((item, i) => (
            <div className="footer-link" key={i}>
              <a
                href={item.url}
                className="footer-link-text"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Footer component
function Footer() {
  const sections = [
    {
      title: 'Explore',
      links: [
        { name: 'Library', url: 'https://ccet.ac.in/library/' },
        { name: 'Sports', url: 'https://ccet.ac.in/sportsFacility.php' },
        { name: 'Hostel', url: 'https://ccet.ac.in/hostel.php' },
        { name: 'IIRC', url: 'https://ccet.ac.in/iirc.php' },
        { name: 'IPRC', url: 'https://ccet.ac.in/iprc.php' },
        { name: 'Innovation Cell', url: 'https://ccet.ac.in/innovation_cell.php' },
        { name: 'Computer Center', url: 'https://ccet.ac.in/computerCenter.php' },
        { name: 'Research and Consultancy', url: 'https://ccet.ac.in/research.php' },
      ],
    },
    {
      title: 'Important Links',
      links: [
        { name: 'PU', url: 'https://puchd.ac.in/' },
        { name: 'UPSC', url: 'https://upsc.gov.in/' },
        { name: 'AICTE', url: 'https://www.aicte-india.org/' },
        { name: 'UGC', url: 'https://www.ugc.gov.in/' },
        { name: 'DST', url: 'https://dst.gov.in/' },
        { name: 'MHRD', url: 'http://mhrd.gov.in/' },
        { name: 'JEE', url: 'https://jeemain.nta.nic.in/' },
        { name: 'KYC', url: 'https://www.india.gov.in/content/know-your-college/' },
        { name: 'BIS', url: 'https://www.bis.gov.in/' },
        { name: 'CRIKC', url: 'https://crikc.puchd.ac.in/' },
        { name: 'NKN', url: 'http://nkn.in/' },
        { name: 'NPTEL', url: 'https://nptel.ac.in/' },
        { name: 'NISCAIR', url: 'http://op.niscair.res.in/' },
        { name: 'GATE', url: 'https://ccet.ac.in/gate21.php' },
        { name: 'DRDO', url: 'https://drdo.gov.in/drdo/' },
        { name: 'CHD ADMIN', url: 'https://chandigarh.gov.in/' },
      ],
    },
    {
      title: 'Info',
      links: [
        { name: 'E-News Letter', url: 'https://www.ccet.ac.in/pdf/ENewsLetter/Newsletter%20July-Dec%202021.pdf' },
        { name: 'Notices', url: 'https://ccet.ac.in/notices.php' },
        { name: 'Forms', url: 'https://ccet.ac.in/forms.php' },
        { name: 'Tenders', url: 'https://ccet.ac.in/tender.php' },
        { name: 'NIRF', url: 'https://ccet.ac.in/pdf/NIRF%20Report%202023.pdf' },
      ],
    },
    {
      title: 'Departments',
      links: [
        { name: 'Computer Science and Engineering', url: 'https://ccet.ac.in/CSE-overview.php' },
        { name: 'Electronics and Communication Engineering', url: 'https://ccet.ac.in/ECE-overview.php' },
        { name: 'Mechanical Engineering', url: 'https://ccet.ac.in/MECH-overview.php' },
        { name: 'Civil Engineering', url: 'https://ccet.ac.in/CIVIL-overview.php' },
        { name: 'Applied Sciences', url: 'https://ccet.ac.in/AS-overview.php' },
      ],
    },
  ];

  return (
    <section className="footer-section">
      <div className="footer-title">Quick Links</div>
      <div className="footer-columns">
        {sections.map((section, idx) => (
          <FooterCard key={idx} title={section.title} links={section.links} />
        ))}
      </div>

      <div className="footer-bottom">
        <p>© 2025, CCET, All rights reserved</p>
        <div className="footer-nav-links">
          <a href="https://ccet.ac.in/index.php">Home</a> |
          <a href="https://ccet.ac.in/Webmasters.php">Webmasters</a> |
          <a href="https://ccet.ac.in/antiRagging.php">Anti-Ragging</a> |
          <a href="https://ccet.ac.in/privacyPolicy.php">Privacy Policy</a> |
          <a href="https://ccet.ac.in/contact.php">Quick Inquiry</a>
        </div>
      </div>
    </section>
  );
}

export default Footer;