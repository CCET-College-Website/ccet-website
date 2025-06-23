import React from 'react';

const AcademicsMenu = () => {
    const sections = [
        {
            title: 'Academic Departments',
            links: [
                'Computer Science Engineering', 'Mechanical Engineering',
                'Electronics And Communication Engineering', 'Civil Engineering', 'Applied Science'
            ],
        },
        {
            title: 'Academics',
            links: ['Convocation 2023', 'Students Feedback', 'Examination', 'E-Akademik', 'E-Cell', 'NIRF', 'FAQs'],
        },
        {
            title: 'Mandatory Disclosure',
            links: ['EoA Report 2024-25', 'Application Part-1', 'Application Part-2', 'OLD AICTE EoAs'],
        },
        {
            title: 'Overview',
            links: ['Courses Offered', 'Academic Calendar', 'Academic Prospectus', 'Affiliating University'],
        },
    ];

    return (
        <div className="absolute top-full left-1/2 transform -translate-x-[31%] hidden group-hover:grid grid-cols-4 bg-white/80 shadow-xl z-50 p-6 gap-6 text-1xl text-gray-800 rounded-lg border border-gray-100 w-[1000px] max-w-[90vw]">
        {sections.map((section, i) => (
                <div key={i}>
                    <div className="font-semibold border-b border-gray-200 pb-2 mb-3 text-red-700">{section.title}</div>
                    <ul className="space-y-2">
                        {section.links.map((link, j) => (
                            <li className="hover:bg-[#FB923C] hover:text-white cursor-pointer transition-colors duration-200 px-2 py-1 rounded">{link}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default AcademicsMenu;