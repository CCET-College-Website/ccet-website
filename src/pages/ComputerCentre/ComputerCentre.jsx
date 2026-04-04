import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "./ComputerCentre.css";

const API_BASE_URL = 'https://ccet.ac.in/api/computercenter.php';

const ComputerCentre = () => {
  const [labs, setLabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCarousels, setActiveCarousels] = useState({});

  useEffect(() => {
    fetchLabsData();
  }, []);

  const fetchLabsData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}?is_active=true`);
      const data = await response.json();

      if (Array.isArray(data)) {
        setLabs(data);
        // Initialize carousel states
        const carouselStates = {};
        data.forEach(lab => {
          carouselStates[lab.id] = 0;
        });
        setActiveCarousels(carouselStates);
      } else if (data.success === false) {
        console.error('Error fetching labs data:', data.error);
        setError(data.error);
      }
    } catch (err) {
      console.error('Error fetching labs data:', err);
      setError('Failed to load computer centre data');
    } finally {
      setLoading(false);
    }
  };

  const getFullUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    return `https://ccet.ac.in/${path.startsWith('/') ? path.slice(1) : path}`;
  };

  const parseImages = (imagesString) => {
    if (!imagesString) return [];
    try {
      return JSON.parse(imagesString);
    } catch (e) {
      // If not JSON, treat as comma-separated
      return imagesString.split(',').map(img => img.trim());
    }
  };

  const nextSlide = (labId, imagesLength) => {
    setActiveCarousels(prev => ({
      ...prev,
      [labId]: (prev[labId] + 1) % imagesLength
    }));
  };

  const prevSlide = (labId, imagesLength) => {
    setActiveCarousels(prev => ({
      ...prev,
      [labId]: (prev[labId] - 1 + imagesLength) % imagesLength
    }));
  };

  const setSlide = (labId, index) => {
    setActiveCarousels(prev => ({
      ...prev,
      [labId]: index
    }));
  };

  if (loading) {
    return (
        <div className="computer-centre-container">
          <header className="computer-centre-header">
            <h1 className="text-center">Computer Centers</h1>
          </header>
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <p>Loading computer centre information...</p>
          </div>
        </div>
    );
  }

  if (error) {
    return (
        <div className="computer-centre-container">
          <header className="computer-centre-header">
            <h1 className="text-center">Computer Centers</h1>
          </header>
          <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
            <p>Error: {error}</p>
          </div>
        </div>
    );
  }

  const mainLab = labs.find(lab => lab.display_order === 1);
  const otherLabs = labs.filter(lab => lab.display_order !== 1);

  return (
      <div className="computer-centre-container">
        <header className="computer-centre-header">
          <h1 className="text-center">Computer Centers</h1>
          <p className="lead h2 text-center">Empowering Innovation through code, connectivity, and curiosity.</p>
        </header>

        <div className="container">
          {mainLab && (
              <div className="row my-4">
                <div className="col mx-auto">
                  <div className="card mt-4">
                    <div className="carousel-wrapper" style={{ position: 'relative' }}>
                      {(() => {
                        const images = parseImages(mainLab.images);
                        const currentIndex = activeCarousels[mainLab.id] || 0;

                        return (
                            <>
                              {images.length > 0 && (
                                  <div style={{
                                    height: "55vh",
                                    backgroundImage: `url('${getFullUrl(images[currentIndex])}')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                  }}>
                                  </div>
                              )}

                              {images.length > 1 && (
                                  <>
                                    <button
                                        className="carousel-control-prev"
                                        onClick={() => prevSlide(mainLab.id, images.length)}
                                        style={{
                                          position: 'absolute',
                                          top: '50%',
                                          left: '10px',
                                          transform: 'translateY(-50%)',
                                          zIndex: 10,
                                          background: 'rgba(0,0,0,0.5)',
                                          border: 'none',
                                          color: 'white',
                                          padding: '10px',
                                          cursor: 'pointer',
                                          borderRadius: '50%'
                                        }}
                                    >
                                      <ChevronLeft size={24} />
                                    </button>

                                    <button
                                        className="carousel-control-next"
                                        onClick={() => nextSlide(mainLab.id, images.length)}
                                        style={{
                                          position: 'absolute',
                                          top: '50%',
                                          right: '10px',
                                          transform: 'translateY(-50%)',
                                          zIndex: 10,
                                          background: 'rgba(0,0,0,0.5)',
                                          border: 'none',
                                          color: 'white',
                                          padding: '10px',
                                          cursor: 'pointer',
                                          borderRadius: '50%'
                                        }}
                                    >
                                      <ChevronRight size={24} />
                                    </button>

                                    <div style={{
                                      position: 'absolute',
                                      bottom: '20px',
                                      left: '50%',
                                      transform: 'translateX(-50%)',
                                      display: 'flex',
                                      gap: '8px',
                                      zIndex: 10
                                    }}>
                                      {images.map((_, index) => (
                                          <button
                                              key={index}
                                              onClick={() => setSlide(mainLab.id, index)}
                                              style={{
                                                width: '10px',
                                                height: '10px',
                                                borderRadius: '50%',
                                                border: 'none',
                                                background: index === currentIndex ? 'white' : 'rgba(255,255,255,0.5)',
                                                cursor: 'pointer'
                                              }}
                                          />
                                      ))}
                                    </div>
                                  </>
                              )}
                            </>
                        );
                      })()}
                    </div>

                    <div className="card-body">
                      <h3 className="card-title">{mainLab.title}</h3>
                      <p className="card-text">{mainLab.description}</p>
                    </div>
                  </div>
                </div>
              </div>
          )}

          {otherLabs.length > 0 && (
              <div className="row my-5">
                {otherLabs.map((lab) => {
                  const images = parseImages(lab.images);
                  const currentIndex = activeCarousels[lab.id] || 0;

                  return (
                      <div key={lab.id} className="col-lg-5 portfolio-item mx-auto">
                        <div className="card">
                          <div className="carousel-wrapper" style={{ position: 'relative' }}>
                            {images.length > 0 && (
                                <div style={{
                                  height: "35vh",
                                  backgroundImage: `url('${getFullUrl(images[currentIndex])}')`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center"
                                }}>
                                </div>
                            )}

                            {images.length > 1 && (
                                <>
                                  <button
                                      onClick={() => prevSlide(lab.id, images.length)}
                                      style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '10px',
                                        transform: 'translateY(-50%)',
                                        zIndex: 10,
                                        background: 'rgba(0,0,0,0.5)',
                                        border: 'none',
                                        color: 'white',
                                        padding: '8px',
                                        cursor: 'pointer',
                                        borderRadius: '50%'
                                      }}
                                  >
                                    <ChevronLeft size={20} />
                                  </button>

                                  <button
                                      onClick={() => nextSlide(lab.id, images.length)}
                                      style={{
                                        position: 'absolute',
                                        top: '50%',
                                        right: '10px',
                                        transform: 'translateY(-50%)',
                                        zIndex: 10,
                                        background: 'rgba(0,0,0,0.5)',
                                        border: 'none',
                                        color: 'white',
                                        padding: '8px',
                                        cursor: 'pointer',
                                        borderRadius: '50%'
                                      }}
                                  >
                                    <ChevronRight size={20} />
                                  </button>

                                  <div style={{
                                    position: 'absolute',
                                    bottom: '10px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    display: 'flex',
                                    gap: '6px',
                                    zIndex: 10
                                  }}>
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSlide(lab.id, index)}
                                            style={{
                                              width: '8px',
                                              height: '8px',
                                              borderRadius: '50%',
                                              border: 'none',
                                              background: index === currentIndex ? 'white' : 'rgba(255,255,255,0.5)',
                                              cursor: 'pointer'
                                            }}
                                        />
                                    ))}
                                  </div>
                                </>
                            )}
                          </div>

                          <div className="card-body">
                            <h4 className="card-title">{lab.title}</h4>
                            <p className="card-text">{lab.description}</p>
                          </div>
                        </div>
                      </div>
                  );
                })}
              </div>
          )}
        </div>
      </div>
  );
};

export default ComputerCentre;