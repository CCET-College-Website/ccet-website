import React from 'react';

const StudentsSectionMenu = () => {
    const sections = [
        {
            title: 'Academics',
            links: [
                'Student Forms',
                'Vidya Lakshmi (Education Loan)',
                'National Apprenticeship Training',
                'Scholarships',
                'Fit India'
            ],
        },
        {
            title: 'Student Grievances Redressal System',
            links: [],
        },
        {
            title: 'Student Welfare',
            links: [
                'Officials @ Student Welfare',
                'Student Council',
                'Anti Ragging',
                'Anti Ragging Committee',
                'Student Fee Payment (HDFC)',
                'Application form to be a New Voter'
            ],
        },
        {
            title: 'Hostel',
            links: [
                'Boys Hostel',
                'Girls Hostel'
            ],
        },
        {
            title: 'Events',
            links: [
                'Student Chapters/Clubs',
                'Apratim',
                'ACM @ CCET',
                'ASME @ CCET',
                'NSS'
            ],
        },
        {
            title: 'Sports',
            links: [
                'Sports Facilities',
                'Fit India Initiative',
                'Sports Tournaments'
            ],
        },
    ];

    return (
        <div className="absolute top-full left-1/2 transform -translate-x-[47%] hidden group-hover:grid grid-cols-3 bg-white/70 backdrop-blur-md shadow-xl z-50 p-6 gap-6 text-1xl text-gray-800 rounded-lg border border-gray-100 min-w-[1000px] max-w-[90vw]">
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

export default StudentsSectionMenu;