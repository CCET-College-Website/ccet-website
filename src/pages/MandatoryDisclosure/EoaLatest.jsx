import React from 'react';
import { Download } from 'lucide-react';
import styles from './Report.module.css';
import EoaLatestPdf from '../../assets/PDFs/EoaReports/EOA-Report-2025-2026.pdf';

const EoaLatest = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = EoaLatestPdf;
        link.download = 'EOA-Report-2025-2026.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>EOA Report 2025-2026</h1>
            <div className={styles.underline}></div>

            <div className={styles.pdfPlaceholder}>
                <iframe
                    src={EoaLatestPdf}
                    title="Eoa Report 2025-2026"
                    className={styles.pdfViewer}
                    frameBorder="0"
                >
                    <div className={styles.pdfFallback}>
                        <p>PDF Viewer Placeholder</p>
                        <p>EOA Report will be displayed here</p>
                        <p>Your browser doesn't support PDF viewing. Please download the file.</p>
                    </div>
                </iframe>
            </div>

            <button
                className={styles.downloadButton}
                onClick={handleDownload}
                type="button"
            >
                <Download size={20} />
                Download EOA Report 2025-2026
            </button>
        </div>
    );
};

export default EoaLatest;

