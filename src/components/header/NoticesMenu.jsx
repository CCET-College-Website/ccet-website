import React from 'react';

const NoticesMenu = () => {
    const sections = [
        {
            title: 'Old Notices',
            links: ['Forms', 'Tenders', 'Online Fee Payment Link'],
        },
        {
            title: 'E-News Letters (pdf\'s)',
            links: ['FingerPrint (Volume-VII, Issue I)', 'FingerPrint (Volume-VII, Issue II)'],
        },
        {
            title: 'Detailed Info (B.E. Exams)',
            links: ['Exam Notice 1', 'Exam Notice 2'], // Placeholder text
        },
    ];

    return (
        <div className="absolute top-full left-1/2 transform -translate-x-[93%] hidden group-hover:grid grid-cols-3 bg-white/70 backdrop-blur-md shadow-xl z-50 p-6 gap-6 text-1xl text-gray-800 rounded-lg border border-gray-100 min-w-[1000px] max-w-[90vw]">
        {sections.map((section, i) => (
                <div key={i}>
                    <div className="font-semibold border-b border-gray-200 pb-2 mb-3 text-red-700">{section.title}</div>
                    <ul className="space-y-2">
                        {section.links.map((link) => (
                            <li className="hover:bg-[#FB923C] hover:text-white cursor-pointer transition-colors duration-200 px-2 py-1 rounded">{link}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default NoticesMenu;