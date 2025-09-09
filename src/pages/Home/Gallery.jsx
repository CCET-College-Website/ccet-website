import React from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import './gallery.css';
import achintyam from './gallery-images/achintyam.jpg';
import beatles from './gallery-images/beatles.jpg';
import crowd from './gallery-images/crowd.jpg';
import apratim from './gallery-images/apratim.jpg';
import crowd2 from './gallery-images/crowd2.jpeg';
import tpc from './gallery-images/tpc.jpg';

Modal.setAppElement('#root');

const allImages = [
  { src: achintyam, alt: '' },
  { src: crowd, alt: '' },
  { src: beatles, alt: '' },
  { src: apratim, alt: '' },
  { src: crowd2, alt: '' },
  { src: tpc, alt: '' },
];

const Gallery = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const autoSlide = React.useRef(null);

  const isMobile = window.innerWidth <= 600;

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalIsOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setModalIsOpen(false);
    clearInterval(autoSlide.current);
    document.body.style.overflow = '';
  };

  const prevImage = (e) => {
    e && e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e && e.stopPropagation();
    setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  React.useEffect(() => {
    if (modalIsOpen) {
      autoSlide.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % allImages.length);
      }, 3000);
    } else {
      clearInterval(autoSlide.current);
    }
    return () => clearInterval(autoSlide.current);
  }, [modalIsOpen]);

  const handleModalOverlayClick = (e) => {
    if (!isMobile && e.target.classList.contains('ReactModal__Overlay')) {
      closeModal();
    }
  };

  return (
    <div className="py-5 text-white bg-gradient-to-r from-blue-900 to-slate-900">
      <div className="text-center mb-4">
        <h2 className="fw-bold display-5 gallery-title">PHOTO GALLERY</h2>
      </div>
      <div className="container">
        <div className="row">
          {allImages.map((img, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4 text-center" key={index}>
              <img
                src={img.src}
                alt={img.alt}
                className="gallery-img"
                onClick={() => openModal(index)}
              />
              <p className="gallery-caption">{img.alt}</p>
            </div>
          ))}
        </div>
        {/* <div className="text-center mt-3">
          <button
            onClick={() => navigate('/gallery-more')}
            className="btn px-4 py-2 rounded-pill fw-medium gallery-button"
          >
            View Full Gallery
          </button>
        </div> */}
      </div>

      <Modal
        isOpen={modalIsOpen}
        overlayClassName="ReactModal__Overlay"
        className="ReactModal__Content"
        shouldCloseOnOverlayClick={false}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        ariaHideApp={false}
        parentSelector={() => document.body}
        onAfterOpen={() => (document.body.style.overflow = 'hidden')}
        onAfterClose={() => (document.body.style.overflow = '')}
        onClick={handleModalOverlayClick}
      >
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <img
            src={allImages[currentIndex].src}
            alt={allImages[currentIndex].alt}
            className="gallery-modal-img"
            style={{ cursor: isMobile ? 'default' : 'pointer' }}
            onClick={(e) => e.stopPropagation()}
          />
          <p className="gallery-modal-caption">{allImages[currentIndex].alt}</p>
          {!isMobile && (
            <>
              <button onClick={prevImage} className="arrow-btn left">&#8592;</button>
              <button onClick={nextImage} className="arrow-btn right">&#8594;</button>
            </>
          )}
          <button
            onClick={closeModal}
            className="modal-close-btn"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
