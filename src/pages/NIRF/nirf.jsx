import React, { useState, useEffect } from "react";

const NIRF = () => {
    const [nirfReports, setNirfReports] = useState([]);
    const [nirfLogo, setNirfLogo] = useState("");
    const [overviewText, setOverviewText] = useState([]);
    const [openYear, setOpenYear] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchNirfReports();
    }, []);

    const fetchNirfReports = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch("https://ccet.ac.in/api/nirf.php");
            const data = await response.json();

            if (data.success === false) {
                setError(data.error || "Failed to load NIRF reports");
                setNirfReports([]);
                setNirfLogo("");
                setOverviewText([]);
            } else {
                const reports = Array.isArray(data) ? data : [];

                const logoEntry = reports.find((report) => parseInt(report.year) === 2000);
                if (logoEntry && logoEntry.pdf_path) {
                    setNirfLogo(logoEntry.pdf_path);
                }

                const overviewEntry = reports.find((report) => parseInt(report.year) === 1900);
                if (overviewEntry && overviewEntry.pdf_path) {
                    // Split by newline or double newline to create paragraphs
                    const paragraphs = overviewEntry.pdf_path.split('\n').filter(p => p.trim() !== '');
                    setOverviewText(paragraphs);
                }

                const actualReports = reports.filter((report) => {
                    const year = parseInt(report.year);
                    return year !== 2000 && year !== 1900;
                });
                setNirfReports(actualReports);
            }
        } catch (err) {
            setError("Error loading NIRF reports");
            console.error("Fetch error:", err);
        } finally {
            setLoading(false);
        }
    };

    const getFullUrl = (path) => {
        if (!path) return "#";
        if (path.startsWith('http')) return path;
        const cleanPath = path.startsWith('/') ? path.substring(1) : path;
        return `https://ccet.ac.in/${cleanPath}`;
    };

    const toggleYear = (year) => {
        setOpenYear(openYear === year ? null : year);
    };

    if (loading) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-semibold text-blue-700">Loading NIRF Information...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-20 text-red-500">
                <h2 className="text-2xl font-semibold">{error}</h2>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen font-sans bg-gray-50">
            <main className="flex-1 max-w-5xl mx-auto px-4 py-8">
                {/* Header Title */}
                <div className="flex flex-row items-center justify-center bg-gray-100 py-6 px-4 rounded shadow mb-8">
                    {nirfLogo && (
                        <img
                            src={nirfLogo}
                            alt="NIRF Logo"
                            className="h-16 w-auto mr-4"
                        />
                    )}
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        National Institutional Ranking Framework (NIRF)
                    </h1>
                </div>

                {/* Overview */}
                {overviewText.length > 0 && (
                    <div className="bg-white border-l-4 border-blue-600 shadow p-4 rounded mb-6">
                        <h2 className="text-lg font-semibold text-blue-700 mt-4 mb-4">Overview</h2>
                        {overviewText.map((paragraph, index) => (
                            <p key={index} className="text-gray-700 text-justify mt-2">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                )}

                <div className="text-gray-800">
                    <h3 className="text-xl font-semibold mb-4 text-center">
                        The following sections have links to the documents submitted by CCET to NIRF in the respective years:
                    </h3>

                    {nirfReports.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                            <p>No NIRF reports available at the moment.</p>
                        </div>
                    ) : (
                        nirfReports.map((report) => (
                            <div
                                key={report.year}
                                className="bg-white rounded shadow-md mb-3 overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleYear(report.year)}
                                    className="w-full flex justify-between items-center px-4 py-3 text-left text-blue-800 font-semibold hover:bg-blue-50 transition"
                                >
                                    <span>▶ Data submitted for NIRF {report.year}</span>
                                    <span>{openYear === report.year ? "−" : "+"}</span>
                                </button>
                                {openYear === report.year && (
                                    <div className="px-4 pb-4 text-sm text-blue-700">
                                        <a
                                            href={getFullUrl(report.pdf_path)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline hover:text-blue-900"
                                        >
                                            View PDF Report for {report.year}
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
};

export default NIRF;