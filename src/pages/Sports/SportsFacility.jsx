import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {Link} from 'react-router-dom';
import styles from './SportsFacility.module.css';

import sportsImage1 from '../../assets/Sports/sports-1.jpg';
import sportsImage2 from '../../assets/Sports/sports-2.jpg';
import sportsImage3 from '../../assets/Sports/sports-3.jpg';
import sportsImage4 from '../../assets/Sports/sports-4.jpg';
import sportsImage5 from '../../assets/Sports/sports-5.jpg';
import sportsImage6 from '../../assets/Sports/sports-6.jpg';
import sportsImage7 from '../../assets/Sports/sports-7.jpg';
import sportsImage8 from '../../assets/Sports/sports-8.jpg';
import sportsImage9 from '../../assets/Sports/sports-9.jpg';
import sportsImage10 from '../../assets/Sports/sports-10.jpg';
import profileImage from '../../assets/CSE-Department/sarabjeet_singh.jpg';
import athleticMeetPdf from '../../assets/PDFs/Sports/Atheletic-Meet-result-2025.pdf';
import sportsBgImage from '../../assets/Sports/Sports-bg.jpg'; // Update path as needed

const SportsFacility = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    { src: sportsImage1, alt: 'Sports Complex Overview', title: 'State-of-the-art Sports Complex' },
    { src: sportsImage2, alt: 'Football Ground', title: 'Professional Football Ground' },
    { src: sportsImage3, alt: 'Indoor Sports Hall', title: 'Indoor Sports Facilities' },
    { src: sportsImage4, alt: 'Athletic Track', title: 'Athletic Track & Field' },
    { src: sportsImage5, alt: 'Basketball Court', title: 'Modern Basketball Court' },
    { src: sportsImage6, alt: 'Swimming Pool', title: 'Olympic-size Swimming Pool' },
    { src: sportsImage7, alt: 'Tennis Courts', title: 'Multiple Tennis Courts' },
    { src: sportsImage8, alt: 'Gymnasium', title: 'Fully Equipped Gymnasium' },
    { src: sportsImage9, alt: 'Cricket Field', title: 'Spacious Cricket Field' },
    { src: sportsImage10, alt: 'Yoga & Meditation Zone', title: 'Peaceful Yoga & Meditation Zone' }
  ];

  const teams = [
    { srNo: 1, team: 'Boxing Women', captain: 'Toshiba', branch: 'CIVIL' },
    { srNo: 2, team: 'Volleyball Men', captain: 'Harpinder Singh', branch: 'MECH' },
    { srNo: 3, team: 'Football', captain: 'Jagrit Singh', branch: 'CSE' }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
      <div className={styles.pageWrapper}>
        <div className={styles.backgroundImage}>
          <img src={sportsBgImage} alt="Sports Background" />
        </div>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              Sports Facility
              <div className={styles.underline}></div>
            </h1>
          </div>

          <div className={styles.carouselSection}>
            <div className={styles.carousel}>
              <div className={styles.carouselContainer}>
                <div
                    className={styles.carouselTrack}
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {carouselImages.map((image, index) => (
                      <div key={index} className={styles.carouselSlide}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            className={styles.carouselImage}
                        />
                        <div className={styles.carouselCaption}>
                          <h3>{image.title}</h3>
                        </div>
                      </div>
                  ))}
                </div>

                <button
                    className={`${styles.carouselNav} ${styles.carouselNavPrev}`}
                    onClick={prevSlide}
                    aria-label="Previous slide"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                    className={`${styles.carouselNav} ${styles.carouselNavNext}`}
                    onClick={nextSlide}
                    aria-label="Next slide"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className={styles.carouselDots}>
                {carouselImages.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.carouselDot} ${currentSlide === index ? styles.carouselDotActive : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
              </div>
            </div>
          </div>

          <div className={styles.fitIndiaSection}>
            <div className={styles.fitIndiaLink}>
              <Link to="/fit-india" className={styles.linkButton}>
                Click here to see activities as a part of FIT INDIA movement conducted at CCET.
              </Link>
            </div>
          </div>

          <div className={styles.teamsSection}>
            <h2 className={styles.sectionTitle}>Existing Teams</h2>
            <div className={styles.tableContainer}>
              <table className={styles.teamsTable}>
                <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Team</th>
                  <th>Captain</th>
                  <th>Branch</th>
                </tr>
                </thead>
                <tbody>
                {teams.map((team, index) => (
                    <tr key={index}>
                      <td>{team.srNo}</td>
                      <td>{team.team}</td>
                      <td>{team.captain}</td>
                      <td>{team.branch}</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.officialSection}>
            <h2 className={styles.sectionTitle}>Sports Official(s)</h2>
            <div className={styles.officialCard}>
              <div className={styles.profileImageContainer}>
                <img
                    src={profileImage}
                    alt="Dr. Sarabjeet Singh"
                    className={styles.profileImage}
                />
              </div>
              <div className={styles.officialInfo}>
                <h3 className={styles.officialName}>Dr. Sarabjeet Singh</h3>
                <p className={styles.officialTitle}>Sports In-charge</p>
                <div className={styles.contactInfo}>
                  <div className={styles.contactItem}>
                    <strong>Email:</strong>
                    <a href="mailto:sports@ccet.ac.in" className={styles.contactLink}>
                      sports@ccet.ac.in
                    </a>
                  </div>
                  <div className={styles.contactItem}>
                    <strong>Mobile:</strong>
                    <a href="tel:9463739413" className={styles.contactLink}>
                      9463739413
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.resultsSection}>
            <h2 className={styles.sectionTitle}>Official Athletic Meet Results</h2>
            <div className={styles.pdfContainer}>
              <embed
                  src={athleticMeetPdf}
                  type="application/pdf"
                  className={styles.pdfViewer}
                  title="Athletic Meet Results"
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default SportsFacility;