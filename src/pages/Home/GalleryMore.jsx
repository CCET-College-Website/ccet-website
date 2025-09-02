import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import './gallery.css';

Modal.setAppElement('#root');

const allImages = [
  { src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp', alt: 'Boat on Calm Water' },
  { src: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp', alt: 'Mountain View' },
  { src: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp', alt: 'Mountain in Clouds' },
  { src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp', alt: 'Boat Again' },
  { src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp', alt: 'Sea Waves' },
  { src: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp', alt: 'Yosemite National Park' },
  { src: 'https://mdbcdn.b-cdn.net/img/Photos/Nature/img(115).webp', alt: 'Green Forest' },
  { src: 'https://mdbcdn.b-cdn.net/img/Photos/Nature/img(21).webp', alt: 'Calm River' },
  { src: 'https://mdbcdn.b-cdn.net/img/Photos/Nature/img(31).webp', alt: 'Sunset Scenery' },
  { src: 'https://mdbcdn.b-cdn.net/img/Photos/Nature/img(39).webp', alt: 'Bright Valley' },
  { src: 'https://mdbcdn.b-cdn.net/img/Photos/Nature/img(49).webp', alt: 'Mountain Lake' },
  { src: 'https://mdbcdn.b-cdn.net/img/Photos/Nature/img(59).webp', alt: 'Skyline View' },
];

const GalleryMore = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlide = useRef(null);

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

  useEffect(() => {
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
    <div className="py</div>-5 text-white bg-gradient-to-r from-slate-900 to-blue-900">
      <div className="text-center mb-4">
        <h2 style={{ fontWeight: 'bold' }}>FULL GALLERY</h2>
      </div>
      <div className="container">
        <div className="row">
          {allImages.map((img, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4 text-center" key={index}>
              <img
                src={img.src}
                alt={img.alt}
                className="gallery-more-img"
                onClick={() => openModal(index)}
              />
              <p className="gallery-more-caption">{img.alt}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-3">
          <button
            onClick={() => navigate('/gallery')}
            className="btn btn-outline-light px-4 py-2 rounded-pill"
          >
            Back to Main Gallery
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        overlayClassName="ReactModal__Overlay"
        className="ReactModal__Content"
        shouldCloseOnOverlayClick={false}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        ariaHideApp={false}
        onAfterOpen={() => (document.body.style.overflow = 'hidden')}
        onAfterClose={() => (document.body.style.overflow = '')}
        parentSelector={() => document.body}
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
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default GalleryMore;
