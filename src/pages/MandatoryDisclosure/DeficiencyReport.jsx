import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import styles from './Report.module.css';

const DeficiencyReport = () => {
    const [pdfs, setPdfs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activePdfIndex, setActivePdfIndex] = useState(0);

    const TAB_ID = 40; // Deficiency Report tab ID

    useEffect(() => {
        fetchPdfs();
    }, []);

    const fetchPdfs = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://ccet.ac.in/api/header.php?endpoint=pdfs&tab_id=${TAB_ID}`);
            const result = await response.json();

            if (result.data && result.data.length > 0) {
                setPdfs(result.data);
            } else {
                setError("No deficiency reports available");
                setPdfs([]);
            }
        } catch (err) {
            setError("Error loading deficiency reports");
            console.error("Deficiency Report fetch error:", err);
            setPdfs([]);
        } finally {
            setLoading(false);
        }
    };

    const getFullPdfUrl = (pdfLink) => {
        if (!pdfLink) return '';
        if (pdfLink.startsWith('http://') || pdfLink.startsWith('https://')) {
            return pdfLink;
        }
        return `https://ccet.ac.in/${pdfLink.startsWith('/') ? pdfLink.slice(1) : pdfLink}`;
    };

    const handleDownload = () => {
        if (!currentPdf) return;

        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = currentPdf.pdf_name + '.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (loading) {
        return (
            <div className={styles.container}>
                <h1 className={styles.heading}>Deficiency Report 2025-2026</h1>
                <div className={styles.underline}></div>
                <div className="flex justify-center items-center py-16">
                    <span className="text-gray-500">Loading deficiency reports...</span>
                </div>
            </div>
        );
    }

    if (error && pdfs.length === 0) {
        return (
            <div className={styles.container}>
                <h1 className={styles.heading}>Deficiency Report 2025-2026</h1>
                <div className={styles.underline}></div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                    <p className="text-red-700">{error}</p>
                </div>
            </div>
        );
    }

    const currentPdf = pdfs[activePdfIndex];
    const pdfUrl = getFullPdfUrl(currentPdf?.pdf_link);

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>
                {currentPdf?.pdf_name || 'Deficiency Report 2025-2026'}
            </h1>
            <div className={styles.underline}></div>

            {/* PDF Tabs - if multiple PDFs exist */}
            {pdfs.length > 1 && (
                <div className="mb-6 flex flex-wrap gap-2 justify-center">
                    {pdfs.map((pdf, index) => (
                        <button
                            key={pdf.id}
                            onClick={() => setActivePdfIndex(index)}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                activePdfIndex === index
                                    ? 'bg-orange-600 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {pdf.pdf_name}
                        </button>
                    ))}
                </div>
            )}

            <div className={styles.pdfPlaceholder}>
                <iframe
                    src={pdfUrl}
                    title={currentPdf?.pdf_name || 'Deficiency Report 2025-2026'}
                    className={styles.pdfViewer}
                    frameBorder="0"
                >
                    <div className={styles.pdfFallback}>
                        <p>PDF Viewer Placeholder</p>
                        <p>Deficiency Report will be displayed here</p>
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
                Download {currentPdf?.pdf_name || 'Deficiency Report 2025-2026'}
            </button>
        </div>
    );
};

export default DeficiencyReport;