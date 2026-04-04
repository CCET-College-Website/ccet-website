import React, { useState, useEffect } from "react";

export default function RulesPolicies() {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activePdfIndex, setActivePdfIndex] = useState(0);

  const TAB_ID = 71; // Rules and Policies tab ID

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
        setError("No PDF documents available");
        setPdfs([]);
      }
    } catch (err) {
      setError("Error loading PDF documents");
      console.error("PDF fetch error:", err);
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

  if (loading) {
    return (
        <div className="py-12 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold text-center mb-6 tracking-wide">
              RULES AND POLICIES
            </h1>
            <div className="flex justify-center items-center py-16">
              <span className="text-gray-500">Loading documents...</span>
            </div>
          </div>
        </div>
    );
  }

  if (error && pdfs.length === 0) {
    return (
        <div className="py-12 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold text-center mb-6 tracking-wide">
              RULES AND POLICIES
            </h1>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        </div>
    );
  }

  const currentPdf = pdfs[activePdfIndex];
  const pdfUrl = getFullPdfUrl(currentPdf?.pdf_link);

  return (
      <div className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-center mb-6 tracking-wide">
            RULES AND POLICIES
          </h1>

          <div className="h-px bg-gray-200 mb-8" />

          {pdfs.length > 1 && (
              <div className="mb-6 flex flex-wrap gap-2">
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

          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <div className="max-w-[1100px] mx-auto">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                <h2 className="text-lg font-medium">
                  {currentPdf?.pdf_name || 'Document'}
                </h2>

                <div className="flex items-center gap-3">
                  <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-3 py-2 border border-gray-300 rounded hover:bg-white"
                  >
                    Open in new tab
                  </a>
                  <a
                      href={pdfUrl}
                      download
                      className="text-sm px-3 py-2 bg-orange-600 text-white rounded hover:bg-orange-500"
                  >
                    Download PDF
                  </a>
                </div>
              </div>

              <div className="w-full border border-gray-300 rounded overflow-hidden">
                <iframe
                    title={currentPdf?.pdf_name || 'Rules and Policies PDF'}
                    src={pdfUrl}
                    className="w-full"
                    style={{ minHeight: "60vh", height: "75vh", border: "none" }}
                />
              </div>

              <div className="text-sm text-gray-600 mt-3">
                If the PDF doesn't display,{" "}
                <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-600"
                >
                  click here to open it
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}