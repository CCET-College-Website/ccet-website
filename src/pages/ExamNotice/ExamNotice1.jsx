import React from 'react';
import { Download } from 'lucide-react';
import styles from './Report.module.css';
import ExamNoticePdf from '../../assets/PDFs/ExamNotice/ExamNotice.pdf';

const ExamNotice1 = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = ExamNoticePdf;
        link.download = 'ExamNotice.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Exam Notice 1</h1>
            <div className={styles.underline}></div>

            <div className={styles.pdfPlaceholder}>
                <iframe
                    src={ExamNoticePdf}
                    title="Exam Notice 1"
                    className={styles.pdfViewer}
                    frameBorder="0"
                >
                    <div className={styles.pdfFallback}>
                        <p>PDF Viewer Placeholder</p>
                        <p>Exam Notice will be displayed here</p>
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
                Download Exam Notice 1
            </button>
        </div>
    );
};

export default ExamNotice1;
