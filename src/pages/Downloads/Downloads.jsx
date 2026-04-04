import React, { useState, useEffect } from "react";
import styles from "./Downloads.module.css";

const Downloads = () => {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchDownloads();
    }, []);

    const fetchDownloads = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch("https://ccet.ac.in/api/downloads.php");
            const result = await response.json();

            if (result.success) {
                setDocuments(result.data);
            } else {
                setError(result.error || "Failed to fetch downloads");
            }
        } catch (err) {
            setError("Network error: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = (link) => {
        if (link) {
            const path = link.startsWith("/") ? link : `/${link}`;
            const encodedPath = path.split("/").map((seg) => encodeURIComponent(seg)).join("/");
            const fullUrl = `https://ccet.ac.in${encodedPath}`;
            window.open(fullUrl, "_blank");
        }
    };

    return (
        <div className={styles.page}>
            <div className={styles.hero}>
                <div className={styles.heroInner}>
                    <div className={styles.heroEyebrow}>
                        <span>Resources &amp; Documents</span>
                    </div>
                    <h1 className={styles.heroTitle}>Downloads</h1>
                    <p className={styles.heroSubtitle}>
                        Chandigarh College of Engineering &amp; Technology (Degree Wing), Sector 26, Chandigarh
                    </p>
                    <div className={styles.heroDivider} />
                </div>
            </div>
            <div className={styles.content}>

                <div className={styles.sectionHeading}>
                    <h2>Available Downloads</h2>
                </div>

                {loading && (
                    <div className={styles.stateBox}>
                        <div className={styles.spinner} />
                        <p>Loading documents...</p>
                    </div>
                )}

                {error && !loading && (
                    <div className={styles.stateBox}>
                        <p className={styles.errorText}>{error}</p>
                        <button className={styles.retryBtn} onClick={fetchDownloads}>Retry</button>
                    </div>
                )}

                {!loading && !error && documents.length === 0 && (
                    <div className={styles.stateBox}>
                        <p>No downloads available at this time.</p>
                    </div>
                )}

                {!loading && !error && documents.length > 0 && (
                    <div className={styles.tableCard}>
                        <table>
                            <thead>
                            <tr>
                                <th style={{ width: 50 }}>#</th>
                                <th>Document Title</th>
                                <th>Download</th>
                            </tr>
                            </thead>
                            <tbody>
                            {documents.map((doc, i) => (
                                <tr key={doc.id ?? i}>
                                    <td className={styles.srNo}>{i + 1}</td>
                                    <td className={styles.docTitle}>{doc.title}</td>
                                    <td className={styles.downloadCell}>
                                        <button
                                            className={styles.downloadBtn}
                                            onClick={() => handleDownload(doc.link)}
                                        >
                                            <DownloadIcon />
                                            Download
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}

            </div>
        </div>
    );
};

const DownloadIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
         strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

export default Downloads;