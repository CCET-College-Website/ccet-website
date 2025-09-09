import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download, Mail, Phone, User, FileText, Shield, AlertTriangle } from 'lucide-react';
import styles from './GirlsHostel.module.css';

// Import carousel images
import hostelRoom1 from '../../assets/GirlsHostel/GirlHostel-1.jpg';
import hostelRoom2 from '../../assets/GirlsHostel/GirlHostel-2.jpg';
import hostelRoom3 from '../../assets/GirlsHostel/GirlHostel-3.jpg';
import hostelRoom4 from '../../assets/GirlsHostel/GirlHostel-4.jpg';
import hostelRoom5 from '../../assets/GirlsHostel/GirlHostel-5.jpg';

// Import profile images
import wardenImage from '../../assets/GirlsHostel/sunita_prashar.jpg';
import asstWardenImage from '../../assets/GirlsHostel/shilpajindal.jpg';

const GirlsHostel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Carousel images array using imported images
    const carouselImages = [
        { id: 1, src: hostelRoom1, alt: 'Girls Hostel Room' },
        { id: 2, src: hostelRoom2, alt: 'Common Area' },
        { id: 3, src: hostelRoom3, alt: 'Study Room' },
        { id: 4, src: hostelRoom4, alt: 'Recreation Area' },
        { id: 5, src: hostelRoom5, alt: 'Study Area' }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

    // Contacts array using imported profile images
    const contacts = [
        {
            name: "Dr. Sunita Prashar",
            designation: "Hostel Warden (Girls)",
            mobile: "+919041059379",
            email: "wardengh@ccet.ac.in",
            profileImage: wardenImage
        },
        {
            name: "Dr. Shilpa Jindal",
            designation: "Asst. Hostel Warden (Girls)",
            mobile: "+919463328881",
            email: "shilpajindal@ccet.ac.in",
            profileImage: asstWardenImage
        }
    ];

    const notices = [
        { title: "Notice for Reopening of the Institute from 15th September 2021", link: "#" },
        { title: "Order for Vaccination and RT-PCR Report", link: "#" },
        { title: "Notice for Covid vaccination", link: "#" },
        { title: "Notice for Fees", link: "#" }
    ];

    const hostelRules = [
        "Individuals with One Dose of Covid-19 Vaccination and negative report of RT-PCR in last 72 hours are allowed in hostels.",
        "The residents are expected to live in the hostel as a community and with a full sense of responsibility.",
        "The residents are not allowed to gamble in the hostel premises.",
        "The residents are not allowed to bring intoxicants and take part in activities of intoxication in any from in the hostel premises.",
        "The residents are not allowed to keep guests in their rooms, except with the prior written permission of the Hostel Warden.",
        "The residents shall not commit any breach of peace in the hostel premises.",
        "The residents shall not invite undesirable elements into the hostel premises.",
        "The residents are not permitted to stay overnight out of their hostels, or go out of station without prior permission of the Hostel Warden.",
        "The residents are not permitted to install and use any electric appliance except a wall light, a table lamp and a table fan for their rooms. A breach of this rule result in the forfeiture of the appliance seized.",
        "Residents are not permitted to keep with them any offensive weapon, such as fire arms, Kirpan or Khukhri, etc. Strict action will be taken against anyone found in possession of such a weapon.",
        "A Hostel Discipline committee comprising of senior and nominated members shall assist the Hostel Warden in monitoring the discipline in the Hostel.",
        "A resident shall not keep cash exceeding Rs. 500/- with him in room. Cash in excess of this shall be deposited with the accountant/Mess Manager.",
        "The residents are not allowed to keep costly items like T.V., Computers, Stereo decks etc. in their rooms.",
        "The allotment of seats rests with the Hostel warden No boarder is allowed to change his room or furniture without prior permission of the authorities. This will apply even if the change is mutual.",
        "Students are expected to refrain from disfiguring walls, doors etc. and removal of glass panes. This will help towards better maintenance of the hostel.",
        "Boarders, who are in arrears of any mess bill for more than a month, shall have to vacate their seats in the hostel.",
        "Habitual defiance of any of the Hostel Rules/Instructions will render resident student liable to disciplinary action.",
        "These rules may be amended, substituted, or deleted without notice."
    ];

    const disciplinaryActions = [
        "Violation of the above rule will invite strict disciplinary action including expulsion from the hostels.",
        "A resident found to have created indiscipline in hostel/mess may be fined Rs. 100/- to Rs.1000/- per head depending upon the gravity/seriousness of the act.",
        "Resident who has been fined for of rule, may be called upon to make good any loss or damage or breakage of any Government or Private property.",
        "The Principal's decision concerning all hostel matters will be final and binding."
    ];

    return (
        <div className={styles.girlsHostel}>
            {/* Header */}
            <div className={styles.header}>
                <h1 className={styles.title}>Girls Hostel</h1>
            </div>

            {/* Carousel Section */}
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

            {/* Contact Section */}
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

            {/* Hostel Forms Section */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Hostel Forms</h2>
                <div className={styles.formDownload}>
                    <div className={styles.downloadItem}>
                        <FileText size={20} />
                        <span>Hostel Application Form - Girls</span>
                        <button className={styles.downloadBtn}>
                            <Download size={16} />
                            Download
                        </button>
                    </div>
                </div>
            </div>

            {/* Notices Section */}
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

            {/* Rules Section */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Rules Regarding Maintenance of Discipline in Hostel Premises</h2>

                {/* Main Rules */}
                <div className={styles.rulesContainer}>
                    <div className={styles.rulesHeader}>
                        <Shield size={24} className={styles.rulesIcon} />
                        <h3 className={styles.rulesSubtitle}>Hostel Rules & Regulations</h3>
                    </div>

                    <div className={styles.rulesList}>
                        {hostelRules.map((rule, index) => (
                            <div key={index} className={styles.ruleItem}>
                                <span className={styles.ruleNumber}>{index + 1}</span>
                                <p className={styles.ruleText}>{rule}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Disciplinary Actions */}
                <div className={styles.disciplinaryContainer}>
                    <div className={styles.disciplinaryHeader}>
                        <AlertTriangle size={24} className={styles.disciplinaryIcon} />
                        <h3 className={styles.disciplinarySubtitle}>Disciplinary Action for Violating Discipline in the Hostel</h3>
                    </div>

                    <div className={styles.disciplinaryList}>
                        {disciplinaryActions.map((action, index) => (
                            <div key={index} className={styles.disciplinaryItem}>
                                <span className={styles.disciplinaryNumber}>{index + 1}</span>
                                <p className={styles.disciplinaryText}>{action}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GirlsHostel;