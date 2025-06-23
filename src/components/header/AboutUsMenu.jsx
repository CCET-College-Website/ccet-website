import React from 'react';

const AboutUsMenu = () => {
    const sections = [
        {
            title: 'About',
            links: ['History', 'Vision and Mission', 'Campus Map', 'How To Reach Us'],
        },
        {
            title: 'Administration',
            links: ['Principal', 'Officials at CCET', 'Academic Heads', 'Administrator'],
        },
        {
            title: 'Life @ CCET',
            links: [
                'Campus Virtual Tour', 'Library', 'Class Rooms', 'Canteen', 'Infrastructure',
                'Policy on use of IT Resources', 'Sports Facility'
            ],
        },
    ];

    return (
        <div className="absolute top-full -left-20 transform overflow-x-auto -translate-x-[9%] hidden group-hover:grid grid-cols-3 bg-white/80 shadow-xl z-50 p-6 gap-8 text-1xl text-gray-800 rounded-lg border border-gray-100 w-[1000px] max-w-[90vw] right-0 mx-auto">
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

export default AboutUsMenu;