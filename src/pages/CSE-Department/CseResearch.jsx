import React, { useState } from 'react';
import SharedCseLayout from './SharedCseLayout';
import styles from './CseResearch.module.css';

const CseResearch = () => {
    const [activeTab, setActiveTab] = useState('faculty');

    const facultyPublications = [
        {
            title: "Development of Sustainable Concrete Using Recycled Aggregates",
            authors: "Kumar, R., Sharma, K., & Mehta, A. (2023). Journal of Sustainable Construction Materials",
            meta: "Impact Factor: 4.2 | Citations: 18"
        },
        {
            title: "Seismic Retrofitting Techniques for Heritage Structures",
            authors: "Poonam, Kumar, A., & Khan, M. S. P. (2022). International Journal of Structural Engineering",
            meta: "Impact Factor: 3.8 | Citations: 12"
        }
    ];

    const studentPublications = [
        {
            title: "Analysis of Green Building Materials for Sustainable Construction",
            authors: "Singh, A., & Gupta, P. (2023). Student Journal of Civil Engineering",
            meta: "Published in: Vol. 12, Issue 3"
        }
    ];

    const researchProjects = [
        {
            title: "Smart Infrastructure Monitoring System",
            authors: "Funded by DST, 2022-2024",
            meta: "Budget: ₹25 lakhs | Status: Ongoing"
        }
    ];

    const renderContent = () => {
        switch(activeTab) {
            case 'faculty':
                return facultyPublications.map((pub, index) => (
                    <div key={index} className={styles.publication}>
                        <div className={styles.publicationIndicator}></div>
                        <div className={styles.publicationDetails}>
                            <h3>{pub.title}</h3>
                            <p>{pub.authors}</p>
                            <p className={styles.meta}>{pub.meta}</p>
                        </div>
                    </div>
                ));
            case 'student':
                return studentPublications.map((pub, index) => (
                    <div key={index} className={styles.publication}>
                        <div className={styles.publicationIndicator}></div>
                        <div className={styles.publicationDetails}>
                            <h3>{pub.title}</h3>
                            <p>{pub.authors}</p>
                            <p className={styles.meta}>{pub.meta}</p>
                        </div>
                    </div>
                ));
            case 'projects':
                return researchProjects.map((project, index) => (
                    <div key={index} className={styles.publication}>
                        <div className={styles.publicationIndicator}></div>
                        <div className={styles.publicationDetails}>
                            <h3>{project.title}</h3>
                            <p>{project.authors}</p>
                            <p className={styles.meta}>{project.meta}</p>
                        </div>
                    </div>
                ));
            default:
                return null;
        }
    };

    return (
        <SharedCseLayout pageTitle="Research">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Research & Publications</h1>
                    <div className={styles.headerLine}></div>
                    <p>Faculty and students research contributions</p>
                </div>

                <div className={styles.contentCard}>
                    <div className={styles.cardHeader}>
                        <div
                            className={`${styles.tab} ${activeTab === 'faculty' ? styles.active : styles.inactive}`}
                            onClick={() => setActiveTab('faculty')}
                        >
                            Faculty Publications
                        </div>
                        <div
                            className={`${styles.tab} ${activeTab === 'student' ? styles.active : styles.inactive}`}
                            onClick={() => setActiveTab('student')}
                        >
                            Student Publications
                        </div>
                        <div
                            className={`${styles.tab} ${activeTab === 'projects' ? styles.active : styles.inactive}`}
                            onClick={() => setActiveTab('projects')}
                        >
                            Research Projects
                        </div>
                    </div>

                    <div className={styles.cardBody}>
                        <div className={styles.sectionTitle}>
                            {activeTab === 'faculty' && 'Faculty Publications'}
                            {activeTab === 'student' && 'Student Publications'}
                            {activeTab === 'projects' && 'Research Projects'}
                        </div>
                        {renderContent()}
                    </div>
                </div>
            </div>
        </SharedCseLayout>
    );
};

export default CseResearch;
