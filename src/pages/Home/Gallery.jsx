import React from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import achintyam from './gallery-images/achintyam.jpg';
import beatles from './gallery-images/beatles.jpg';
import crowd from './gallery-images/crowd.jpg';
import apratim from './gallery-images/apratim.jpg'
import crowd2 from './gallery-images/crowd2.jpeg'
import tpc from './gallery-images/tpc.jpg'

Modal.setAppElement('#root');

const Gallery = () => {
  const navigate = useNavigate();

  const allImages = [
    { src: achintyam, alt: '' },
    { src: crowd, alt: ' ' },
    { src: beatles, alt: ' ' },
    { src: apratim, alt: '' },
    { src: crowd2, alt: '' },
    { src: tpc, alt: '' },
  ];

  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [autoSlide, setAutoSlide] = React.useState(null);

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

  React.useEffect(() => {
    if (modalIsOpen) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % allImages.length);
      }, 3000);
      setAutoSlide(interval);
    }
    return () => clearInterval(autoSlide);
  }, [modalIsOpen]);

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
                className="img-fluid rounded shadow w-100 gallery-img"
                style={{
                  height: '220px',
                  objectFit: 'cover',
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                }}
                onClick={() => openModal(index)}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <p className="mt-2 text-light small gallery-caption">{img.alt}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-3">
          <button
            onClick={() => navigate('/gallery-more')}
            className="btn btn-light px-4 py-2 rounded-pill fw-medium gallery-button"
          >
            View Full Gallery
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
            inset: '5% 5%',
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

export default Gallery;
