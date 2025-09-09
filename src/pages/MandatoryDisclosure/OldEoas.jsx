import React from 'react';
import { Download } from 'lucide-react';
import styles from './Report.module.css';
import OldEoaPdf from '../../assets/PDFs/EoaReports/EOA-Report-2024-2025.pdf';

const OldEOA = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = OldEoaPdf;
        link.download = 'EOA-Report-2024-2025.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>EOA Report 2024-2025</h1>
            <div className={styles.underline}></div>

            <div className={styles.pdfPlaceholder}>
                <iframe
                    src={OldEoaPdf}
                    title="EOA Report 2024-2025"
                    className={styles.pdfViewer}
                    frameBorder="0"
                >
                    <div className={styles.pdfFallback}>
                        <p>PDF Viewer Placeholder</p>
                        <p>EOA Report will be displayed here</p>
                        <p>
                            Your browser doesn't support PDF viewing. Please download the
                            file.
                        </p>
                    </div>
                </iframe>
            </div>

            <button
                className={styles.downloadButton}
                onClick={handleDownload}
                type="button"
            >
                <Download size={20} />
                Download EOA Report 2024-2025
            </button>
        </div>
    );
};

export default OldEOA;
