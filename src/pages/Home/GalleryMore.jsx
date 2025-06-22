import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const GalleryMore = () => {
  const navigate = useNavigate();

  const allImages = [
    // Same list + extra ones if desired
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

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(null);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    clearInterval(autoSlide);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (modalIsOpen) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % allImages.length);
      }, 3000);
      setAutoSlide(interval);
    }
    return () => clearInterval(autoSlide);
  }, [modalIsOpen]);

  return (
    <div className="py-5 text-white bg-gradient-to-r from-slate-900 to-blue-900">
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
                className="img-fluid rounded shadow"
                style={{
                  height: '220px',
                  objectFit: 'cover',
                  cursor: 'pointer',
                  width: '100%',
                  transition: 'transform 0.3s',
                }}
                onClick={() => openModal(index)}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <p style={{ marginTop: '8px', fontSize: '0.9rem', color: '#e0e0e0' }}>{img.alt}</p>
            </div>
          ))}
        </div>

        {/* Back to main gallery */}
        <div className="text-center mt-3">
          <button
            onClick={() => navigate('/gallery')}
            className="btn btn-outline-light px-4 py-2 rounded-pill"
          >
            Back to Main Gallery
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{
          content: {
            background: 'black',
            border: 'none',
            padding: '0',
            inset: '10%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.85)' },
        }}
      >
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <img
            src={allImages[currentIndex].src}
            alt={allImages[currentIndex].alt}
            style={{
              maxHeight: '80vh',
              maxWidth: '90vw',
              borderRadius: '10px',
            }}
          />
          <p style={{ color: 'white', marginTop: '10px' }}>{allImages[currentIndex].alt}</p>

          <button onClick={prevImage} style={arrowStyle('left')}>&#8592;</button>
          <button onClick={nextImage} style={arrowStyle('right')}>&#8594;</button>

          <button
            onClick={closeModal}
            style={{
              position: 'absolute',
              top: '10px',
              right: '15px',
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            ×
          </button>
        </div>
      </Modal>
    </div>
  );
};

const arrowStyle = (side) => ({
  position: 'absolute',
  top: '50%',
  [side]: '20px',
  transform: 'translateY(-50%)',
  background: 'transparent',
  border: 'none',
  color: 'white',
  fontSize: '2.5rem',
  cursor: 'pointer',
});

export default GalleryMore;
