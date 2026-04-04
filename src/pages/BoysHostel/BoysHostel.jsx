import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Download, Mail, Phone, FileText, Shield, AlertTriangle } from 'lucide-react';
import styles from './BoysHostel.module.css';

const API_BASE_URL = 'https://ccet.ac.in/api/hostel.php';

const BoysHostel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [staff, setStaff] = useState([]);
    const [notices, setNotices] = useState([]);
    const [forms, setForms] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [rules, setRules] = useState([]);
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchHostelData();
    }, []);

    const fetchHostelData = async () => {
        setLoading(true);
        setError(null);

        try {
            const [staffRes, noticesRes, formsRes, galleryRes, rulesRes, documentsRes] = await Promise.all([
                fetch(`${API_BASE_URL}?entity=staff&hostel_type=boys&is_active=true`),
                fetch(`${API_BASE_URL}?entity=notices&hostel_type=boys&is_active=true`),
                fetch(`${API_BASE_URL}?entity=forms&hostel_type=boys&is_active=true`),
                fetch(`${API_BASE_URL}?entity=gallery&hostel_type=boys&is_active=true`),
                fetch(`${API_BASE_URL}?entity=rules&hostel_type=boys&is_active=true`),
                fetch(`${API_BASE_URL}?entity=documents&hostel_type=boys&is_active=true`)
            ]);

            const [staffData, noticesData, formsData, galleryData, rulesData, documentsData] = await Promise.all([
                staffRes.json(),
                noticesRes.json(),
                formsRes.json(),
                galleryRes.json(),
                rulesRes.json(),
                documentsRes.json()
            ]);

            if (Array.isArray(staffData)) setStaff(staffData);
            if (Array.isArray(noticesData)) setNotices(noticesData);
            if (Array.isArray(formsData)) setForms(formsData);
            if (Array.isArray(galleryData)) setGallery(galleryData);
            if (Array.isArray(rulesData)) setRules(rulesData);
            if (Array.isArray(documentsData)) setDocuments(documentsData);
        } catch (err) {
            setError("Error loading hostel information");
            console.error("Hostel data fetch error:", err);
        } finally {
            setLoading(false);
        }
    };

    const getFullUrl = (path) => {
        if (!path) return '';
        if (path.startsWith('http://') || path.startsWith('https://')) return path;
        return `https://ccet.ac.in/${path.startsWith('/') ? path.slice(1) : path}`;
    };

    const nextSlide = () => {
        if (gallery.length > 0) {
            setCurrentSlide((prev) => (prev + 1) % gallery.length);
        }
    };

    const prevSlide = () => {
        if (gallery.length > 0) {
            setCurrentSlide((prev) => (prev - 1 + gallery.length) % gallery.length);
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    const generalRules = rules.filter(rule => rule.rule_type === 'general');
    const disciplinaryRules = rules.filter(rule => rule.rule_type === 'disciplinary');

    if (loading) {
        return (
            <div className={styles.boysHostel}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Boys Hostel</h1>
                </div>
                <div className="flex justify-center items-center py-16">
                    <span className="text-gray-500">Loading hostel information...</span>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.boysHostel}>
            <div className={styles.header}>
                <h1 className={styles.title}>Boys Hostel</h1>
            </div>

            {gallery.length > 0 && (
                <div className={styles.carouselContainer}>
                    <div className={styles.carousel}>
                        <button className={`${styles.carouselBtn} ${styles.prev}`} onClick={prevSlide}>
                            <ChevronLeft size={24} />
                        </button>

                        <div className={styles.carouselContent}>
                            <img
                                src={getFullUrl(gallery[currentSlide].image_url)}
                                alt={gallery[currentSlide].alt_text || 'Hostel Image'}
                                className={styles.carouselImage}
                                onError={(e) => e.target.src = 'https://via.placeholder.com/1200x600?text=Hostel+Image'}
                            />
                        </div>

                        <button className={`${styles.carouselBtn} ${styles.next}`} onClick={nextSlide}>
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className={styles.carouselIndicators}>
                        {gallery.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                </div>
            )}

            {staff.length > 0 && (
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Contact Information</h2>
                    <div className={styles.contactsGrid}>
                        {staff.map((contact) => (
                            <div key={contact.id} className={styles.contactCard}>
                                <div className={styles.contactHeader}>
                                    <div className={styles.profileImageContainer}>
                                        <img
                                            src={getFullUrl(contact.profile_image)}
                                            alt={contact.name}
                                            className={styles.profileImage}
                                            onError={(e) => e.target.src = 'https://via.placeholder.com/150?text=No+Image'}
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
                                        <a href={`tel:${contact.mobile}`}>{contact.mobile}</a>
                                    </div>
                                    {contact.email && (
                                        <div className={styles.contactItem}>
                                            <Mail size={16} />
                                            <a href={`mailto:${contact.email}`}>{contact.email}</a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {forms.length > 0 && (
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Hostel Forms</h2>
                    <div className={styles.formDownload}>
                        {forms.map((form) => (
                            <div key={form.id} className={styles.downloadItem}>
                                <FileText size={20} />
                                <span>{form.form_name}</span>
                                <a href={getFullUrl(form.file_url)} download className={styles.downloadBtn}>
                                    <Download size={16} />
                                    Download
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {notices.length > 0 && (
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Notices</h2>
                    <div className={styles.noticesList}>
                        {notices.map((notice) => (
                            <div key={notice.id} className={styles.noticeItem}>
                                <FileText size={18} />
                                <div className={styles.noticeContent}>
                                    <span className={styles.noticeTitle}>{notice.title}</span>
                                    {notice.notice_date && (
                                        <span className={styles.noticeDate}>{formatDate(notice.notice_date)}</span>
                                    )}
                                </div>
                                {notice.file_url && (
                                    <a href={getFullUrl(notice.file_url)} download className={styles.downloadBtn}>
                                        <Download size={16} />
                                        Download
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {(generalRules.length > 0 || disciplinaryRules.length > 0) && (
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Rules Regarding Maintenance of Discipline in Hostel Premises</h2>

                    {generalRules.length > 0 && (
                        <div className={styles.rulesContainer}>
                            <div className={styles.rulesHeader}>
                                <Shield size={24} className={styles.rulesIcon} />
                                <h3 className={styles.rulesSubtitle}>Hostel Rules & Regulations</h3>
                            </div>
                            <div className={styles.rulesList}>
                                {generalRules.map((rule, index) => (
                                    <div key={rule.id} className={styles.ruleItem}>
                                        <span className={styles.ruleNumber}>{index + 1}</span>
                                        <p className={styles.ruleText}>{rule.rule_text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {disciplinaryRules.length > 0 && (
                        <div className={styles.disciplinaryContainer}>
                            <div className={styles.disciplinaryHeader}>
                                <AlertTriangle size={24} className={styles.disciplinaryIcon} />
                                <h3 className={styles.disciplinarySubtitle}>Disciplinary Action for Violating Discipline</h3>
                            </div>
                            <div className={styles.disciplinaryList}>
                                {disciplinaryRules.map((rule, index) => (
                                    <div key={rule.id} className={styles.disciplinaryItem}>
                                        <span className={styles.disciplinaryNumber}>{index + 1}</span>
                                        <p className={styles.disciplinaryText}>{rule.rule_text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {documents.map((doc) => (
                <div key={doc.id} className={styles.section}>
                    <h2 className={styles.sectionTitle}>{doc.title}</h2>
                    {doc.description && <p className={styles.documentDescription}>{doc.description}</p>}
                    <div className={styles.pdfViewer}>
                        <iframe
                            src={getFullUrl(doc.file_url)}
                            title={doc.title}
                            width="100%"
                            height="600px"
                            style={{ border: "none", borderRadius: "12px" }}
                        />
                        <a href={getFullUrl(doc.file_url)} download className={`${styles.downloadBtn} ${styles.large}`}>
                            <Download size={20} />
                            Download PDF
                        </a>
                    </div>
                </div>
            ))}

            {error && (
                <div className={styles.section}>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                        <p className="text-red-700">{error}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BoysHostel;