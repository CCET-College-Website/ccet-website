import React from 'react';
import SharedCseLayout from './SharedCseLayout';
import styles from './CseLabs.module.css';

const CseLabs = () => {
    const labsData = [
        {
            title: "Object Oriented and Procedural Programming Laboratory",
            description: "This lab provides hands-on experience with both procedural and object-oriented programming paradigms. Students work with languages like C, C++, and Java to develop problem-solving skills and understand fundamental programming concepts."
        },
        {
            title: "Microprocessor & Embedded System Laboratory",
            description: "Equipped with microcontroller kits and development boards, this lab allows students to experiment with microprocessor architecture, assembly language programming, and embedded system design for real-world applications."
        },
        {
            title: "Operating System (Unix/Linux) Laboratory",
            description: "Students gain practical experience with UNIX/Linux environments, shell scripting, process management, memory management, and file systems operations in this dedicated operating systems lab."
        },
        {
            title: "Database, OODBMS & Big Data Laboratory",
            description: "This lab focuses on database management systems, object-oriented databases, and big data technologies. Students work with SQL, NoSQL databases, and tools like Hadoop for large-scale data processing."
        },
        {
            title: "Software Engineering, Testing and Advanced Computing Laboratory",
            description: "Equipped with tools for software development lifecycle, this lab supports activities from requirements analysis to testing. Students learn about various software engineering methodologies and testing techniques."
        },
        {
            title: "Web Technology & Multimedia Laboratory",
            description: "This lab provides resources for web development and multimedia projects. Students work with front-end and back-end technologies, graphic design tools, and multimedia software to create interactive web applications."
        },
        {
            title: "Image Processing and Simulation & Modelling Laboratory",
            description: "Focused on digital image processing and computational modeling, this lab offers software and hardware for algorithm development, simulation, and analysis of complex systems."
        },
        {
            title: "Research and Development Laboratory",
            description: "A dedicated space for advanced research projects where students and faculty collaborate on cutting-edge technologies and innovative solutions to complex computing problems."
        },
        {
            title: "High Performance Computing Laboratory",
            description: "This lab features high-end computing resources for parallel processing, distributed computing, and computationally intensive tasks requiring significant processing power."
        },
        {
            title: "Hardware and Computer Assembly Laboratory",
            description: "Students learn about computer hardware components, assembly, troubleshooting, and maintenance in this hands-on lab that provides practical experience with physical computing systems."
        },
        {
            title: "Networking and Mobile Computing Laboratory",
            description: "Equipped with networking devices and mobile development platforms, this lab allows students to experiment with network configuration, protocols, and mobile application development."
        },
        {
            title: "Open Source and E-Learning Laboratory",
            description: "Dedicated to open-source technologies and digital learning, this lab provides resources for exploring open-source software and developing e-learning solutions and platforms."
        },
        {
            title: "Java and Application Development Laboratory",
            description: "Focused on Java programming and application development, this lab supports learning enterprise Java technologies, Android development, and cross-platform application creation."
        },
        {
            title: "Computer Centre and Project Laboratory",
            description: "The central computing facility that provides resources for student projects, offering a collaborative environment with necessary software and hardware support for major academic projects."
        }
    ];

    return (
        <SharedCseLayout pageTitle="Laboratories">
            <div className={styles.container}>
                <header>
                    <h1 className={styles.cselabsheading}>Laboratories</h1>
                    <div className={styles.headerLine}></div>
                    <p className={styles.cseintroText}>
                        At CSE Department, students are challenged by a flexible, thought-provoking curriculum and learn from faculty members who are experts in their areas. The courses in the Computer Sc. & Engineering are well organized to provide a wide spectrum of choices to the students. The faculty and students have interest in wide range of latest technologies that include Computer's Database Systems, Artificial Intelligence, Computer Networks & Distributed Computing, operating system, Computer Graphics, Mathematical Modelling, OOPS, Advanced DBMS (OODBMS, Distributed DBMS etc.), Software Engineering, Linux, Big Data, Computer Architecture, and Embedded Systems etc. To support the learning and practices in above technological area, Department of CSE have well equipped computer justify, project lab and oracle sponsored lab that have various Software Packages relevant to the Development of Minor and Major Projects undertaken during the Coursework. All the state of Art Facilities, Resources and Guidelines are provided to the students as per their requirement.
                    </p>
                </header>

                <div className={styles.labsGrid}>
                    {labsData.map((lab, index) => (
                        <div key={index} className={styles.labCard}>
                            <div className={styles.imagePlaceholder}>
                                <span className={styles.dimensionLabel}>385px × 246px</span>
                            </div>
                            <div className={styles.labContent}>
                                <h2 className={styles.labTitle}>{lab.title}</h2>
                                <p className={styles.labDescription}>{lab.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <footer>
                    <p>© 2023 University Laboratories. All rights reserved.</p>
                </footer>
            </div>
        </SharedCseLayout>
    );
};

export default CseLabs;