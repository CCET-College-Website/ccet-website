import React from 'react';

const NoticesMenu = () => {
    const sections = [
        {
            title: 'Old Notices',
            links: [
                { name: 'Forms', url: '/forms' },
                { name: 'Tenders', url: '/tenders' },
                {
                    name: 'Online Fee Payment Link',
                    url: 'https://paydirect.eduqfix.com/app/3qTjKfysWsfqEyNTM4giVFX4VGVYGZss5NYRHpY65DaJgmu14S3Ff6NKoVa3l2Ay/6593'
                },
            ],
        },
        {
            title: "E-News Letters (pdf's)",
            links: [
                { name: 'FingerPrint (Volume-VII, Issue I)', url: '/newsletter/v7-i1' },
                { name: 'FingerPrint (Volume-VII, Issue II)', url: '/newsletter/v7-i2' },
            ],
        },
        {
            title: 'Detailed Info (B.E. Exams)',
            links: [
                { name: 'Exam Notice 1', url: '/exam-notice-1' }, // placeholder
                { name: 'Exam Notice 2', url: '/exam-notice-2' }, // placeholder
            ],
        },
    ];

    return (
        <div className="absolute top-full left-1/2 transform -translate-x-[93%] hidden group-hover:grid grid-cols-3 bg-white/70 backdrop-blur-md shadow-xl z-50 p-6 gap-6 text-1xl text-gray-800 rounded-lg border border-gray-100 min-w-[1000px] max-w-[90vw]">
            {sections.map((section, i) => (
                <div key={i}>
                    <div className="font-semibold border-b border-gray-200 pb-2 mb-3 text-red-700">
                        {section.title}
                    </div>
                    <ul className="space-y-2">
                        {section.links.map((link, idx) => (
                            <li
                                key={idx}
                                className="hover:bg-[#FB923C] hover:text-white cursor-pointer transition-colors duration-200 px-2 py-1 rounded"
                            >
                                {link.url.startsWith("http") ? (
                                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                                        {link.name}
                                    </a>
                                ) : (
                                    <a href={link.url}>{link.name}</a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default NoticesMenu;
