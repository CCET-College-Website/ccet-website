import React from "react";
import ECEHeader from "./ece_header";
import ECEQuickLinksSidebar from "./sidebar";

export default function EceObjectives() {
    return (
        <div>
            <ECEHeader />
            <ECEQuickLinksSidebar />
            
            <div className="p-8 bg-gray-50 text-gray-900">
                {/* Heading */}
                <h1 className="text-2xl font-bold text-center mb-10">Objectives</h1>

                {/* Vision and Mission */}
                <div>
                    <h2 className="text-xl font-semibold text-center mb-6">Vision and Mission</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Vision */}
                        <div className="border border-gray-300 rounded-lg p-6 shadow-sm bg-white">
                            <h3 className="font-bold mb-2">Vision</h3>
                            <p>
                                To become a center of excellence in Engineering and Research to develop innovative technocrats for societal needs.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="border border-gray-300 rounded-lg p-6 shadow-sm bg-white">
                            <h3 className="font-bold mb-2">Mission</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>To provide learning environment that stimulates intellectual growth of students.</li>
                                <li>To promote quality education in the field of electronics and communication engineering through research and innovative activities.</li>
                                <li>To develop trained professionals who are competent to face the challenges of industrial and social needs.</li>
                                <li>To promote interaction with experts from industry and academia for excellence in technical, ethical, and entrepreneurial skills.</li>
                                <li>To encourage the students to participate in multidisciplinary activities for enhancing teamwork skills.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Program Educational Objectives */}
                <div className="mt-12">
                    <h2 className="text-xl font-semibold text-center mb-6">
                        Program Educational Objectives (PEOs)
                    </h2>
                    <div className="border border-gray-300 rounded-lg p-6 shadow-sm bg-white">
                        <h3 className="font-bold mb-4">Mission</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <span className="font-bold text-blue-600">PEO1:</span> Graduates will be able to build career in Electronics and Communication engineering, allied industries and entrepreneurship.
                            </li>
                            <li>
                                <span className="font-bold text-blue-600">PEO2:</span> Graduates will be able to pursue higher education and research.
                            </li>
                            <li>
                                <span className="font-bold text-blue-600">PEO3:</span> Graduates will design or develop product for societal needs based on engineering problems with multi-disciplinary knowledge.
                            </li>
                            <li>
                                <span className="font-bold text-blue-600">PEO4:</span> Graduates will be able to adapt and innovate in ever changing technological environment by maintaining professional and ethical standards.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Program Specific Outcomes */}
                <div className="mt-12">
                    <h2 className="text-xl font-semibold text-center mb-6">
                        Program Specific Outcomes (PSOs)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* PSO1 */}
                        <div className="border border-gray-300 rounded-lg p-6 shadow-sm bg-white">
                            <h3 className="font-bold text-blue-600 mb-2">PSO1</h3>
                            <p>
                                Apply concepts of Science and engineering fundamentals to solve complex problems in the area of ECE.
                            </p>
                        </div>

                        {/* PSO2 */}
                        <div className="border border-gray-300 rounded-lg p-6 shadow-sm bg-white">
                            <h3 className="font-bold text-blue-600 mb-2">PSO2</h3>
                            <p>
                                Apply knowledge of ECE with societal and professional ethics and function effectively as lifelong learners.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
