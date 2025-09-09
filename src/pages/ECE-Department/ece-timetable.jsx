import React from "react";
import ECEHeader from "./ece_header";
import ECEQuickLinksSidebar from "./sidebar";

export default function EceTimeTable() {
    return (
        <div>
            <ECEQuickLinksSidebar />
            <ECEHeader />
            
            <div className="p-8 bg-gray-50 text-gray-900">
                {/* Heading */}
                <h1 className="text-2xl font-bold text-center mb-8 relative inline-block w-full">
                    <span className="relative px-4 bg-gray-50">
                        Time Table
                    </span>
                    <div className="absolute top-1/2 left-0 right-0 border-t border-gray-400 -z-10"></div>
                </h1>

                {/* Time Table Box */}
                <div className="border border-blue-900 rounded-lg shadow-md bg-white p-4">
                    <h2 className="text-lg font-semibold text-center mb-4">Time Table</h2>

                    {/* PDF Embed */}
                    <div className="w-full h-[600px]">
                        <iframe
                            src="/timetable.pdf"
                            title="Time Table"
                            className="w-full h-full rounded-md"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>

    );
}
