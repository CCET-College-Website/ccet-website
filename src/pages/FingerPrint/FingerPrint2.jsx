import React from 'react';
import { Download } from 'lucide-react';
import styles from './Report.module.css';
import FingerPrintPdf from '../../assets/PDFs/FingerPrint/Newsletter-issue-2.pdf';

const FingerPrintIssue2 = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = FingerPrintPdf;
        link.download = 'Newsletter-issue-2.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>FingerPrint (Volume VII, Issue 2)</h1>
            <div className={styles.underline}></div>

            <div className={styles.pdfPlaceholder}>
                <iframe
                    src={FingerPrintPdf}
                    title="FingerPrint (Volume VII, Issue 2)"
                    className={styles.pdfViewer}
                    frameBorder="0"
                >
                    <div className={styles.pdfFallback}>
                        <p>PDF Viewer Placeholder</p>
                        <p>FingerPrint Magazine will be displayed here</p>
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
                Download FingerPrint (Vol VII, Issue 2)
            </button>
        </div>
    );
};

export default FingerPrintIssue2;
