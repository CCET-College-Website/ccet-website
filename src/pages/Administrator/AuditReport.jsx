import React, { useState, useEffect } from "react";

export default function AuditReports() {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAuditReports();
    }, []);

    const fetchAuditReports = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('https://ccet.ac.in/api/auditreports.php');
            const result = await response.json();

            if (result.success && result.data.length > 0) {
                setReports(result.data);
            } else {
                setError(result.error || "No audit reports available");
                setReports([]);
            }
        } catch (err) {
            setError("Error loading audit reports");
            console.error("Audit reports fetch error:", err);
            setReports([]);
        } finally {
            setLoading(false);
        }
    };

    const getFullUrl = (path) => {
        if (!path) return '#';
        if (path.startsWith('http://') || path.startsWith('https://')) {
            return path;
        }
        return `https://ccet.ac.in/${path.startsWith('/') ? path.slice(1) : path}`;
    };

    if (loading) {
        return (
            <div className="p-6 max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-orange-600">Audit Reports</h1>
                <div className="flex justify-center items-center py-8">
                    <span className="text-gray-500">Loading audit reports...</span>
                </div>
            </div>
        );
    }

    if (error && reports.length === 0) {
        return (
            <div className="p-6 max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-orange-600">Audit Reports</h1>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-700">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-orange-600">Audit Reports</h1>
            <p className="mb-6 text-gray-700">
                Below is a list of audit reports. Click the link to view or download.
            </p>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <ul>
                    {reports.map((report, index) => (
                        <li
                            key={report.id || index}
                            className="flex justify-between items-center px-4 py-3 border-b last:border-b-0"
                        >
                            <span>{report.title}</span>
                            <a
                                href={getFullUrl(report.path)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm underline text-blue-600 hover:text-blue-800"
                            >
                                View
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}