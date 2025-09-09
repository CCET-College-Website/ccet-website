import React, { useState } from 'react';
import styles from './Canteen.module.css';

import Menu1 from '../../assets/Canteen/Menu-1.jpg';
import Menu2 from '../../assets/Canteen/Menu-2.jpg';

import CanteenImage1 from '../../assets/Canteen/Canteen-1.jpg';
import CanteenImage2 from '../../assets/Canteen/Canteen-2.jpg';
import CanteenImage3 from '../../assets/Canteen/Canteen-3.jpg';
import CanteenImage4 from '../../assets/Canteen/Canteen-4.jpg';
import CanteenImage5 from '../../assets/Canteen/Canteen-5.jpg';
import CanteenImage6 from '../../assets/Canteen/Canteen-6.jpg';

const Canteen = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset'; // Re-enable scrolling
    };

    const galleryImages = [
        CanteenImage1, CanteenImage2, CanteenImage3,
        CanteenImage4, CanteenImage5, CanteenImage6
    ];

    return (
        <div className={styles.canteenContainer}>
            <div className={styles.backgroundPattern}></div>

            <div className={styles.header}>
                <h1 className={styles.heading}>Canteen</h1>
                <div className={styles.underline}></div>
                <p className={styles.subheading}>Delicious food in a comfortable environment</p>
            </div>

            <div className={styles.menuSection}>
                <h2>Our Menus</h2>
                <div className={styles.menuImages}>
                    <div className={styles.menuItem}>
                        <div className={styles.imageContainer} onClick={() => openModal(Menu1)}>
                            <img src={Menu1} alt="Weekly Menu 1" />
                            <div className={styles.overlay}>
                                <span className={styles.viewText}>View Full Size</span>
                            </div>
                        </div>
                        <p>Weekly Regular Menu</p>
                    </div>
                    <div className={styles.menuItem}>
                        <div className={styles.imageContainer} onClick={() => openModal(Menu2)}>
                            <img src={Menu2} alt="Weekly Menu 2" />
                            <div className={styles.overlay}>
                                <span className={styles.viewText}>View Full Size</span>
                            </div>
                        </div>
                        <p>Drinks Menu</p>
                    </div>
                </div>
            </div>

            <div className={styles.gallerySection}>
                <h2>Canteen Gallery</h2>
                <div className={styles.gallery}>
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className={styles.galleryItem}
                            onClick={() => openModal(image)}
                        >
                            <img src={image} alt={`Canteen view ${index + 1}`} />
                            <div className={styles.overlay}>
                                <span className={styles.viewText}>View Full Size</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.infoSection}>
                <h2>Operating Hours</h2>
                <div className={styles.hours}>
                    <p><strong>Monday - Friday:</strong> 9:30 AM - 5:30 PM</p>
                    <p><strong>Saturday:</strong> Closed</p>
                    <p><strong>Sunday:</strong> Closed</p>
                </div>
            </div>

            {isModalOpen && (
                <div className={styles.modal} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <span className={styles.closeButton} onClick={closeModal}>&times;</span>
                        <img src={selectedImage} alt="Full size" className={styles.fullSizeImage} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Canteen;