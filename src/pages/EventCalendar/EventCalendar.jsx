import React, { useState } from 'react';
import styles from './EventCalendar.module.css';

const EventCalendar = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [hoveredCard, setHoveredCard] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Sample event data
    const events = [
        {
            id: 1,
            title: "Annual Tech Symposium 2025",
            date: "March 15, 2025",
            time: "9:00 AM - 5:00 PM",
            category: "Conference",
            description: "Join industry leaders and innovators for a day of cutting-edge technology discussions and networking opportunities.",
            fullDescription: "The Annual Tech Symposium brings together the brightest minds in technology to discuss emerging trends, share innovative solutions, and network with industry professionals. This year's theme focuses on AI, blockchain, and sustainable technology solutions. Featured speakers include renowned experts from Silicon Valley, academic researchers, and startup founders who will share their insights on the future of technology.",
            location: "CCET Main Auditorium",
            organizer: "CCET Tech Department",
            contact: "tech@ccet.edu.in",
            registrationRequired: true,
            capacity: "500 attendees",
            speakers: ["Dr. Sarah Johnson - AI Expert", "Mark Thompson - Blockchain Specialist", "Prof. Raj Kumar - Sustainable Tech"],
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop"
        },
        {
            id: 2,
            title: "Student Research Presentation",
            date: "March 20, 2025",
            time: "2:00 PM - 6:00 PM",
            category: "Academic",
            description: "Students showcase their innovative research projects and compete for the best presentation award.",
            fullDescription: "This annual event showcases the outstanding research work conducted by CCET students across various engineering disciplines. Students will present their final year projects, research papers, and innovative solutions to real-world problems. Judges from industry and academia will evaluate presentations, and winners will receive cash prizes and publication opportunities.",
            location: "Engineering Block - Room 301",
            organizer: "Academic Affairs Office",
            contact: "academic@ccet.edu.in",
            registrationRequired: false,
            capacity: "200 attendees",
            speakers: ["Students from all departments"],
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop"
        },
        {
            id: 3,
            title: "Industry-Academia Workshop",
            date: "March 25, 2025",
            time: "10:00 AM - 4:00 PM",
            category: "Workshop",
            description: "Collaborative workshop bringing together industry experts and academic researchers.",
            fullDescription: "This workshop aims to bridge the gap between industry requirements and academic research. Industry experts will share current market trends and challenges, while academicians will present their latest research findings. Interactive sessions will help identify collaboration opportunities and joint research projects.",
            location: "Conference Hall A",
            organizer: "Industry Relations Cell",
            contact: "industry@ccet.edu.in",
            registrationRequired: true,
            capacity: "150 attendees",
            speakers: ["Industry Leaders", "Faculty Members", "Research Scholars"],
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop"
        },
        {
            id: 4,
            title: "AI and Machine Learning Seminar",
            date: "April 2, 2025",
            time: "11:00 AM - 3:00 PM",
            category: "Seminar",
            description: "Explore the latest developments in artificial intelligence and machine learning applications.",
            fullDescription: "Join us for an in-depth exploration of artificial intelligence and machine learning technologies. This seminar will cover the latest developments in deep learning, neural networks, natural language processing, and computer vision. Participants will learn about practical applications in various industries and get hands-on experience with popular ML frameworks.",
            location: "Computer Science Lab",
            organizer: "CS Department",
            contact: "cs@ccet.edu.in",
            registrationRequired: true,
            capacity: "100 attendees",
            speakers: ["Dr. Amit Sharma - ML Researcher", "Priya Patel - Data Scientist"],
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop"
        },
        {
            id: 5,
            title: "Career Fair 2025",
            date: "April 10, 2025",
            time: "9:00 AM - 6:00 PM",
            category: "Career",
            description: "Meet top recruiters and explore career opportunities in engineering and technology sectors.",
            fullDescription: "The annual CCET Career Fair brings together leading companies and organizations looking to hire talented graduates. Students can explore job opportunities, internships, and career paths in various fields including software development, mechanical engineering, electrical engineering, and management. Representatives from top companies will conduct on-spot interviews and provide career guidance.",
            location: "CCET Campus Ground",
            organizer: "Placement Cell",
            contact: "placements@ccet.edu.in",
            registrationRequired: false,
            capacity: "1000+ attendees",
            speakers: ["HR Representatives from 50+ companies"],
            image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=250&fit=crop"
        },
        {
            id: 6,
            title: "Green Technology Innovation Summit",
            date: "April 15, 2025",
            time: "9:30 AM - 5:30 PM",
            category: "Conference",
            description: "Sustainable technology solutions for a greener future - featuring expert panels and exhibitions.",
            fullDescription: "This summit focuses on sustainable technology solutions and environmental innovation. Experts will discuss renewable energy technologies, waste management systems, green building materials, and sustainable manufacturing processes. The event includes exhibitions of green technology products, panel discussions on environmental policies, and workshops on implementing sustainable practices.",
            location: "Environmental Sciences Building",
            organizer: "Environmental Engineering Department",
            contact: "env@ccet.edu.in",
            registrationRequired: true,
            capacity: "300 attendees",
            speakers: ["Environmental Scientists", "Policy Makers", "Green Tech Entrepreneurs"],
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop"
        }
    ];

    const categories = ['All', 'Conference', 'Academic', 'Workshop', 'Seminar', 'Career'];

    const filteredEvents = events.filter(event => {
        const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
        const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.category.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleEventClick = (event) => {
        setSelectedEvent(event);
    };

    const handleBackToCalendar = () => {
        setSelectedEvent(null);
    };

    const EventDetailsPage = ({ event, onBack }) => (
        <div className={styles.eventDetailsContainer}>
            <button className={styles.backButton} onClick={onBack}>
                ← Back to Events Calendar
            </button>

            <div className={styles.eventDetailsHeader}>
                <img
                    src={event.image}
                    alt={event.title}
                    className={styles.eventDetailsImage}
                />
                <div className={styles.eventDetailsOverlay}>
                    <span className={styles.eventDetailsCategoryBadge}>{event.category}</span>
                    <h1 className={styles.eventDetailsTitle}>{event.title}</h1>
                    <div className={styles.eventDetailsBasicInfo}>
                        <div className={styles.eventDetailsInfoItem}>
                            <span className={styles.eventDetailsIcon}>📅</span>
                            <span>{event.date} at {event.time}</span>
                        </div>
                        <div className={styles.eventDetailsInfoItem}>
                            <span className={styles.eventDetailsIcon}>📍</span>
                            <span>{event.location}</span>
                        </div>
                        <div className={styles.eventDetailsInfoItem}>
                            <span className={styles.eventDetailsIcon}>👥</span>
                            <span>{event.capacity}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.eventDetailsContent}>
                <div className={styles.eventDetailsMain}>
                    <section className={styles.eventDetailsSection}>
                        <h2 className={styles.eventDetailsSectionTitle}>About This Event</h2>
                        <p className={styles.eventDetailsDescription}>{event.fullDescription}</p>
                    </section>

                    <section className={styles.eventDetailsSection}>
                        <h2 className={styles.eventDetailsSectionTitle}>Speakers & Presenters</h2>
                        <ul className={styles.eventDetailsSpeakersList}>
                            {event.speakers.map((speaker, index) => (
                                <li key={index} className={styles.eventDetailsSpeaker}>{speaker}</li>
                            ))}
                        </ul>
                    </section>

                    <section className={styles.eventDetailsSection}>
                        <h2 className={styles.eventDetailsSectionTitle}>Event Details</h2>
                        <div className={styles.eventDetailsGrid}>
                            <div className={styles.eventDetailsGridItem}>
                                <strong>Organizer:</strong> {event.organizer}
                            </div>
                            <div className={styles.eventDetailsGridItem}>
                                <strong>Contact:</strong> {event.contact}
                            </div>
                            <div className={styles.eventDetailsGridItem}>
                                <strong>Registration:</strong> {event.registrationRequired ? 'Required' : 'Not Required'}
                            </div>
                            <div className={styles.eventDetailsGridItem}>
                                <strong>Capacity:</strong> {event.capacity}
                            </div>
                        </div>
                    </section>
                </div>

                <div className={styles.eventDetailsSidebar}>
                    <div className={styles.eventDetailsCard}>
                        <h3 className={styles.eventDetailsCardTitle}>Quick Info</h3>
                        <div className={styles.eventDetailsQuickInfo}>
                            <div className={styles.eventDetailsQuickInfoItem}>
                                <span className={styles.eventDetailsIcon}>📅</span>
                                <div>
                                    <strong>{event.date}</strong>
                                    <br />
                                    <small>{event.time}</small>
                                </div>
                            </div>
                            <div className={styles.eventDetailsQuickInfoItem}>
                                <span className={styles.eventDetailsIcon}>📍</span>
                                <div>
                                    <strong>Location</strong>
                                    <br />
                                    <small>{event.location}</small>
                                </div>
                            </div>
                            <div className={styles.eventDetailsQuickInfoItem}>
                                <span className={styles.eventDetailsIcon}>✉️</span>
                                <div>
                                    <strong>Contact</strong>
                                    <br />
                                    <small>{event.contact}</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.eventDetailsCard}>
                        <h3 className={styles.eventDetailsCardTitle}>Actions</h3>
                        <button className={styles.eventDetailsActionButton}>
                            Register for Event
                        </button>
                        <button className={styles.eventDetailsActionButtonSecondary}>
                            Add to Calendar
                        </button>
                        <button className={styles.eventDetailsActionButtonSecondary}>
                            Share Event
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    if (selectedEvent) {
        return <EventDetailsPage event={selectedEvent} onBack={handleBackToCalendar} />;
    }

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <h1 className={styles.title}>
                    Latest News
                    <div className={styles.underline}></div>
                </h1>
            </div>

            <div className={styles.filtersContainer}>
                {categories.map(category => (
                    <button
                        key={category}
                        className={`${styles.filterButton} ${selectedCategory === category ? styles.filterButtonActive : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}

                <input
                    type="text"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchBox}
                />
            </div>

            {filteredEvents.length > 0 ? (
                <div className={styles.eventsGrid}>
                    {filteredEvents.map((event, index) => (
                        <div
                            key={event.id}
                            className={`${styles.eventCard} ${styles.cardAnimation} ${hoveredCard === event.id ? styles.eventCardHover : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onMouseEnter={() => setHoveredCard(event.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            onClick={() => handleEventClick(event)}
                        >
                            <img
                                src={event.image}
                                alt={event.title}
                                className={styles.eventImage}
                            />
                            <div className={styles.eventContent}>
                                <span className={styles.eventCategory}>{event.category}</span>
                                <h3 className={styles.eventTitle}>{event.title}</h3>
                                <p className={styles.eventDate}>{event.date}</p>
                                <p className={styles.eventDescription}>{event.description}</p>
                                <div className={styles.eventLocation}>
                                    <span>📍</span>
                                    <span>{event.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className={styles.noResults}>
                    No events found matching your criteria.
                </div>
            )}
        </div>
    );
};

export default EventCalendar;