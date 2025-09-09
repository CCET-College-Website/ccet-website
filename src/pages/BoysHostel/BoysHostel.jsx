import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download, Mail, Phone, FileText } from 'lucide-react';
import styles from './BoysHostel.module.css';

import hostelRoom1 from '../../assets/BoysHostel/hostel-1.jpg';
import hostelRoom2 from '../../assets/BoysHostel/hostel-2.jpg';
import hostelRoom3 from '../../assets/BoysHostel/hostel-3.jpg';
import hostelRoom4 from '../../assets/BoysHostel/hostel-4.jpg';
import hostelRoom5 from '../../assets/BoysHostel/hostel-5.jpg';

import wardenImage from '../../assets/BoysHostel/kg_sharma.jpg';
import asstWardenImage from '../../assets/BoysHostel/anil.jpg';
import supervisorImage from '../../assets/BoysHostel/lakhwinder.jpg';

// Import your PDF
import hostelRulesPDF from '../../assets/PDFs/Hostel/Rules-Regarding-Maintenance-of-Discipline-in-Hostel-Premises-2025.pdf';

const BoysHostel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const carouselImages = [
        { id: 1, src: hostelRoom1, alt: 'Hostel Room' },
        { id: 2, src: hostelRoom2, alt: 'Common Area' },
        { id: 3, src: hostelRoom3, alt: 'Study Room' },
        { id: 4, src: hostelRoom4, alt: 'Recreation Area' },
        { id: 5, src: hostelRoom5, alt: 'Study Room' },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

    const contacts = [
        {
            name: "Prof.(Dr.) Krishna Gopal Sharma",
            designation: "Hostel Warden (Boys)",
            mobile: "+919414403565",
            email: "wardenbh@ccet.ac.in",
            profileImage: wardenImage
        },
        {
            name: "Dr. Anil Kumar Vaghmare",
            designation: "Asst. Hostel Warden (Boys)",
            mobile: "+916284561607",
            email: "anilvaghmare@ccet.ac.in",
            profileImage: asstWardenImage
        },
        {
            name: "Mr. Lakhwinder Singh",
            designation: "Hostel Supervisor Cum Caretaker",
            mobile: "+919888818679",
            email: "lakhwindersaini679@gmail.com",
            profileImage: supervisorImage
        }
    ];

    const notices = [
        { title: "Notice for Reopening of the Institute from 15th September 2021", link: "#" },
        { title: "Order for Vaccination and RT-PCR Report", link: "#" },
        { title: "Notice for Covid vaccination", link: "#" },
        { title: "Notice for Fees", link: "#" }
    ];

    return (
        <div className={styles.boysHostel}>
            <div className={styles.header}>
                <h1 className={styles.title}>Boys Hostel</h1>
            </div>

            {/* Carousel */}
            <div className={styles.carouselContainer}>
                <div className={styles.carousel}>
                    <button className={`${styles.carouselBtn} ${styles.prev}`} onClick={prevSlide}>
                        <ChevronLeft size={24} />
                    </button>

                    <div className={styles.carouselContent}>
                        <img
                            src={carouselImages[currentSlide].src}
                            alt={carouselImages[currentSlide].alt}
                            className={styles.carouselImage}
                        />
                    </div>

                    <button className={`${styles.carouselBtn} ${styles.next}`} onClick={nextSlide}>
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className={styles.carouselIndicators}>
                    {carouselImages.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Contact Info */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Contact Information</h2>
                <div className={styles.contactsGrid}>
                    {contacts.map((contact, index) => (
                        <div key={index} className={styles.contactCard}>
                            <div className={styles.contactHeader}>
                                <div className={styles.profileImageContainer}>
                                    <img
                                        src={contact.profileImage}
                                        alt={contact.name}
                                        className={styles.profileImage}
                                    />
                                </div>
                                <div className={styles.contactInfo}>
                                    <h3 className={styles.contactName}>{contact.name}</h3>
                                    <p className={styles.contactDesignation}>{contact.designation}</p>
                                </div>
                            </div>
                            <div className={styles.contactDetails}>
                                <div className={styles.contactItem}>
                                    <Phone size={16} />
                                    <span>{contact.mobile}</span>
                                </div>
                                <div className={styles.contactItem}>
                                    <Mail size={16} />
                                    <span>{contact.email}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hostel Forms */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Hostel Forms</h2>
                <div className={styles.formDownload}>
                    <div className={styles.downloadItem}>
                        <FileText size={20} />
                        <span>Hostel Application Form - Boys</span>
                        <button className={styles.downloadBtn}>
                            <Download size={16} />
                            Download
                        </button>
                    </div>
                </div>
            </div>

            {/* Notices */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Notices</h2>
                <div className={styles.noticesList}>
                    {notices.map((notice, index) => (
                        <div key={index} className={styles.noticeItem}>
                            <FileText size={18} />
                            <span className={styles.noticeTitle}>{notice.title}</span>
                            <button className={styles.downloadBtn}>
                                <Download size={16} />
                                Download
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Rules PDF Viewer */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Rules Regarding Maintenance of Discipline in Hostel Premises</h2>
                <div className={styles.pdfViewer}>
                    <iframe
                        src={hostelRulesPDF}
                        title="Hostel Rules PDF"
                        width="100%"
                        height="600px"
                        style={{ border: "none", borderRadius: "12px" }}
                    />
                    <a
                        href={hostelRulesPDF}
                        download
                        className={`${styles.downloadBtn} ${styles.large}`}
                    >
                        <Download size={20} />
                        Download PDF
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BoysHostel;
