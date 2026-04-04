import React, { useState, useEffect } from 'react';
import styles from './Canteen.module.css';

const API_BASE_URL = 'https://ccet.ac.in/api/canteen.php';

const Canteen = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [menus, setMenus] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [hours, setHours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCanteenData();
    }, []);

    const fetchCanteenData = async () => {
        setLoading(true);
        setError(null);

        try {
            const [menusRes, galleryRes, hoursRes] = await Promise.all([
                fetch(`${API_BASE_URL}?resource=menus&is_active=true`),
                fetch(`${API_BASE_URL}?resource=gallery&is_active=true`),
                fetch(`${API_BASE_URL}?resource=hours&is_active=true`)
            ]);

            const [menusData, galleryData, hoursData] = await Promise.all([
                menusRes.json(),
                galleryRes.json(),
                hoursRes.json()
            ]);

            if (Array.isArray(menusData)) setMenus(menusData);
            if (Array.isArray(galleryData)) setGallery(galleryData);
            if (Array.isArray(hoursData)) setHours(hoursData);
        } catch (err) {
            setError("Error loading canteen information");
            console.error("Canteen data fetch error:", err);
        } finally {
            setLoading(false);
        }
    };

    const getFullUrl = (path) => {
        if (!path) return '';
        if (path.startsWith('http://') || path.startsWith('https://')) return path;
        return `https://ccet.ac.in/${path.startsWith('/') ? path.slice(1) : path}`;
    };

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    const formatTime = (timeString) => {
        if (!timeString) return '';
        const [hours, minutes] = timeString.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 || 12;
        return `${displayHour}:${minutes} ${ampm}`;
    };

    const getDayLabel = (dayOfWeek) => {
        const days = {
            'monday': 'Monday',
            'tuesday': 'Tuesday',
            'wednesday': 'Wednesday',
            'thursday': 'Thursday',
            'friday': 'Friday',
            'saturday': 'Saturday',
            'sunday': 'Sunday'
        };
        return days[dayOfWeek.toLowerCase()] || dayOfWeek;
    };

    if (loading) {
        return (
            <div className={styles.canteenContainer}>
                <div className={styles.backgroundPattern}></div>
                <div className={styles.header}>
                    <h1 className={styles.heading}>Canteen</h1>
                </div>
                <div className="flex justify-center items-center py-16">
                    <span className="text-gray-500">Loading canteen information...</span>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.canteenContainer}>
            <div className={styles.backgroundPattern}></div>

            <div className={styles.header}>
                <h1 className={styles.heading}>Canteen</h1>
                <div className={styles.underline}></div>
                <p className={styles.subheading}>Delicious food in a comfortable environment</p>
            </div>

            {menus.length > 0 && (
                <div className={styles.menuSection}>
                    <h2>Our Menus</h2>
                    <div className={styles.menuImages}>
                        {menus.map((menu) => (
                            <div key={menu.id} className={styles.menuItem}>
                                <div
                                    className={styles.imageContainer}
                                    onClick={() => openModal(getFullUrl(menu.image_url))}
                                >
                                    <img
                                        src={getFullUrl(menu.image_url)}
                                        alt={menu.title}
                                        onError={(e) => e.target.src = 'https://via.placeholder.com/600x800?text=Menu+Image'}
                                    />
                                    <div className={styles.overlay}>
                                        <span className={styles.viewText}>View Full Size</span>
                                    </div>
                                </div>
                                <p>{menu.title}</p>
                                {menu.description && (
                                    <span className={styles.menuDescription}>{menu.description}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {gallery.length > 0 && (
                <div className={styles.gallerySection}>
                    <h2>Canteen Gallery</h2>
                    <div className={styles.gallery}>
                        {gallery.map((image) => (
                            <div
                                key={image.id}
                                className={styles.galleryItem}
                                onClick={() => openModal(getFullUrl(image.image_url))}
                            >
                                <img
                                    src={getFullUrl(image.image_url)}
                                    alt={image.alt_text || image.caption || 'Canteen view'}
                                    onError={(e) => e.target.src = 'https://via.placeholder.com/400x300?text=Canteen+Image'}
                                />
                                <div className={styles.overlay}>
                                    <span className={styles.viewText}>View Full Size</span>
                                </div>
                                {image.caption && (
                                    <p className={styles.imageCaption}>{image.caption}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {hours.length > 0 && (
                <div className={styles.infoSection}>
                    <h2>Operating Hours</h2>
                    <div className={styles.hours}>
                        {hours.map((hour) => (
                            <p key={hour.id}>
                                <strong>{getDayLabel(hour.day_of_week)}:</strong>{' '}
                                {hour.is_closed ? (
                                    'Closed'
                                ) : hour.opening_time && hour.closing_time ? (
                                    `${formatTime(hour.opening_time)} - ${formatTime(hour.closing_time)}`
                                ) : (
                                    'Hours not specified'
                                )}
                                {hour.special_note && (
                                    <span className={styles.specialNote}> ({hour.special_note})</span>
                                )}
                            </p>
                        ))}
                    </div>
                </div>
            )}

            {error && (
                <div className={styles.errorSection}>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                        <p className="text-red-700">{error}</p>
                    </div>
                </div>
            )}

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