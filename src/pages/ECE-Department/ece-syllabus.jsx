import React, { useState, useEffect } from "react";
// Assuming you intended to use a layout component like SharedECELayout 
// or the existing header/sidebar components for ECE.
import ECEHeader from "./ece_header"; 
import ECEQuickLinksSidebar from "./sidebar"; 

// Renamed function to reflect its purpose
export default function EceSyllabus() { 
    const [syllabusUrl, setSyllabusUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = 'https://ccet.ac.in/api/syllabus.php'; 

    useEffect(() => {
        const fetchSyllabus = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                
                // Filter and find the most recent syllabus for 'ECE'
                const eceSyllabus = data
                    .filter(item => item.department === 'ECE')
                    // Sort descending by year to get the newest first
                    .sort((a, b) => b.year.localeCompare(a.year)); 
                
                if (eceSyllabus.length > 0) {
                    setSyllabusUrl(eceSyllabus[0].pdf);
                } else {
                    setError("No ECE syllabus found in the API response.");
                }

            } catch (err) {
                console.error("Failed to fetch syllabus:", err);
                setError("Failed to load syllabus data. Please check the API source or network.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchSyllabus();
    }, []);

    // --- Content Rendering ---

    const renderContent = () => {
        if (isLoading) {
            return <p className="text-center text-blue-600 p-4">Loading syllabus...</p>;
        }

        if (error) {
            return <p className="text-center text-red-600 p-4 font-semibold">{error}</p>;
        }

        if (syllabusUrl) {
            return (
                <div className="w-full">
                    {/* Download Link */}
                    <div className="text-center mb-4">
                        <a 
                            href={syllabusUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-600 hover:text-blue-800 font-medium underline"
                        >
                            Download ECE Syllabus
                        </a>
                    </div>
                    
                    {/* PDF Embed with increased height (h-[900px]) */}
                    {/* Set max-w-4xl/5xl and mx-auto for better centering on large screens */}
                    <div className="w-full max-w-4xl mx-auto h-[900px] border border-gray-300 rounded-lg overflow-hidden shadow-xl">
                        <iframe
                            src={syllabusUrl}
                            title="ECE Syllabus"
                            className="w-full h-full"
                        >
                            <p className="p-4 text-center">Your browser does not support embedded PDFs. Please use the download link.</p>
                        </iframe>
                    </div>
                </div>
            );
        }
        
        // Fallback for when no URL is found but no specific error occurred
        return <p className="text-center text-gray-500 p-4">Syllabus content currently unavailable.</p>;
    };

    return (
        <div>
            <ECEQuickLinksSidebar />
            <ECEHeader />

            <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
                {/* Main Heading */}
                <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8 relative">
                    <span className="relative px-4 bg-gray-50 z-10">
                        ECE Syllabus
                    </span>
                    <div className="absolute top-1/2 left-0 right-0 border-t-2 border-blue-900 z-0 transform -translate-y-1/2"></div>
                </h1>

                {/* Syllabus Box */}
                <div className="border border-blue-900 rounded-lg shadow-2xl bg-white p-4 sm:p-6 mx-auto max-w-5xl">
                    <h2 className="text-xl font-bold text-center text-blue-900 mb-6">Latest Academic Scheme & Syllabus</h2>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}