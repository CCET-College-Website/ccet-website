import React from 'react';

const AdmissionsMenu = () => {
    const sections = [
        {
            title: 'Admissions',
            links: ['Admission Notices', 'Help Desk'],
        },
        {
            title: 'Programmes',
            links: ['Degree Course', 'Degree Course (PU-LEET)', 'Doctorate (PhD)'],
        },
        {
            title: 'JAC',
            links: ['Portal', 'Counselling Schedule', 'JAC Brochure 2025', 'Opening/Closing Rank'],
        },
        {
            title: 'Criteria',
            links: ['Eligibility'],
        },
    ];

    return (
        <div className="absolute top-full left-1/2 transform -translate-x-[65%] hidden group-hover:grid grid-cols-4 bg-white/70 backdrop-blur-md shadow-xl z-50 p-6 gap-6 text-1xl text-gray-800 rounded-lg border border-gray-100 min-w-[1000px] max-w-[90vw]">
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

export default AdmissionsMenu;