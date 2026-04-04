import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import './gallery.css';

Modal.setAppElement('#root');

const API_BASE_URL = 'https://ccet.ac.in/api/gallery.php';

const Gallery = () => {
  const navigate = useNavigate();
  const [allImages, setAllImages] = useState([]);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [currentBatch, setCurrentBatch] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlide = useRef(null);
  const batchInterval = useRef(null);

  const isMobile = window.innerWidth <= 600;
  const BATCH_SIZE = 6;
  const BATCH_DURATION = 5000; // 5 seconds

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_BASE_URL);
      const data = await response.json();

      if (Array.isArray(data)) {
        const formattedImages = data.map(img => ({
          src: getFullUrl(img.uploaded_image),
          alt: `${img.image_type} - ${img.date}`,
          type: img.image_type,
          date: img.date,
          id: img.id
        }));
        setAllImages(formattedImages);

        if (formattedImages.length > 0) {
          setDisplayedImages(formattedImages.slice(0, BATCH_SIZE));
        }
      } else {
        setError("Failed to load gallery images");
      }
    } catch (err) {
      setError("Error loading gallery images");
      console.error("Gallery fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const getFullUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    return `https://ccet.ac.in/${path.startsWith('/') ? path.slice(1) : path}`;
  };

  useEffect(() => {
    if (allImages.length <= BATCH_SIZE || modalIsOpen) {
      return; // No need to rotate if we have 6 or fewer images, or if modal is open
    }

    batchInterval.current = setInterval(() => {
      setCurrentBatch(prev => {
        const totalBatches = Math.ceil(allImages.length / BATCH_SIZE);
        const nextBatch = (prev + 1) % totalBatches;

        const startIdx = nextBatch * BATCH_SIZE;
        const endIdx = startIdx + BATCH_SIZE;
        setDisplayedImages(allImages.slice(startIdx, endIdx));

        return nextBatch;
      });
    }, BATCH_DURATION);

    return () => {
      if (batchInterval.current) {
        clearInterval(batchInterval.current);
      }
    };
  }, [allImages, modalIsOpen]);

  const openModal = (index) => {
    const actualIndex = allImages.findIndex(img => img.src === displayedImages[index].src);
    setCurrentIndex(actualIndex);
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
  }, [modalIsOpen, allImages.length]);

  const handleModalOverlayClick = (e) => {
    if (!isMobile && e.target.classList.contains('ReactModal__Overlay')) {
      closeModal();
    }
  };

  if (loading) {
    return (
        <div className="py-5 text-white bg-gradient-to-r from-blue-900 to-slate-900">
          <div className="text-center mb-4">
            <h2 className="fw-bold display-5 gallery-title">PHOTO GALLERY</h2>
          </div>
          <div className="container">
            <div className="flex justify-center items-center py-16">
              <span className="text-gray-300">Loading gallery...</span>
            </div>
          </div>
        </div>
    );
  }

  return (
      <div className="py-5 text-white bg-gradient-to-r from-blue-900 to-slate-900">
        <div className="text-center mb-4">
          <h2 className="fw-bold display-5 gallery-title">PHOTO GALLERY</h2>
          {allImages.length > BATCH_SIZE && (
              <p className="text-gray-300 text-sm mt-2">
                Showing {currentBatch * BATCH_SIZE + 1}-{Math.min((currentBatch + 1) * BATCH_SIZE, allImages.length)} of {allImages.length} images
              </p>
          )}
        </div>

        {error && (
            <div className="container mb-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                <p className="text-red-700">{error}</p>
              </div>
            </div>
        )}

        <div className="container">
          <div className="row">
            {displayedImages.length > 0 ? (
                displayedImages.map((img, index) => (
                    <div className="col-12 col-sm-6 col-md-4 mb-4 text-center" key={`${img.id}-${index}`}>
                      <img
                          src={img.src}
                          alt={img.alt}
                          className="gallery-img"
                          onClick={() => openModal(index)}
                          onError={(e) => e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found'}
                      />
                      <p className="gallery-caption">{img.alt}</p>
                    </div>
                ))
            ) : (
                <div className="col-12 text-center py-8">
                  <p className="text-gray-300">No images found in gallery</p>
                </div>
            )}
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
            parentSelector={() => document.body}
            onAfterOpen={() => (document.body.style.overflow = 'hidden')}
            onAfterClose={() => (document.body.style.overflow = '')}
            onClick={handleModalOverlayClick}
        >
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <img
                src={allImages[currentIndex]?.src}
                alt={allImages[currentIndex]?.alt}
                className="gallery-modal-img"
                style={{ cursor: isMobile ? 'default' : 'pointer' }}
                onClick={(e) => e.stopPropagation()}
            />
            <p className="gallery-modal-caption">{allImages[currentIndex]?.alt}</p>
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
