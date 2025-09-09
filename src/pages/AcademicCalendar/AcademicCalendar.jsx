import React from 'react';
import { Download } from 'lucide-react';
import styles from './AcademicCalendar.module.css';
import academicCalendarPdf from '../../assets/PDFs/AcademicCalendar/Academic-Calendar2026.pdf';

const AcademicCalendar = () => {
    const handleDownload = () => {
        // Create a temporary anchor element to trigger download
        const link = document.createElement('a');
        link.href = academicCalendarPdf;
        link.download = 'Academic-Calendar2026.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Academic Calendar</h1>
            <div className={styles.underline}></div>

            <div className={styles.pdfPlaceholder}>
                {/* You can replace this with an iframe or PDF viewer component */}
                <iframe
                    src={academicCalendarPdf}
                    title="Academic Calendar"
                    className={styles.pdfViewer}
                    frameBorder="0"
                >
                    <div className={styles.pdfFallback}>
                        <p>PDF Viewer Placeholder</p>
                        <p>Academic Calendar will be displayed here</p>
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
                Download Academic Calendar
            </button>
        </div>
    );
};

export default AcademicCalendar;
