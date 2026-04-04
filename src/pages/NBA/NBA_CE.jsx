import React, { useState, useEffect } from "react";
import "./NBA_CSE.css";

const CourseResources = () => {
    const [department, setDepartment] = useState(null);
    const [courseFiles, setCourseFiles] = useState([]);
    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const DEPARTMENT_CODE = 'CE';

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                `https://ccet.ac.in/api/nba-files.php?grouped=true&department=${DEPARTMENT_CODE}`
            );
            const data = await response.json();

            if (data.department) {
                setDepartment(data.department);
                setCourseFiles(data.course_files || []);
                setResources(data.resources || []);
            } else {
                setError(data.error || "Failed to load department data");
            }
        } catch (err) {
            setError("Error loading data");
            console.error("Fetch error:", err);
        } finally {
            setLoading(false);
        }
    };

    const getFullUrl = (path) => {
        if (!path) return "#";
        if (path.startsWith('http')) {
            return path;
        }
        const cleanPath = path.startsWith('/') ? path.substring(1) : path;
        return `https://ccet.ac.in/${cleanPath}`;
    };

    if (loading) {
        return (
            <div className="course-container">
                <div className="text-center py-5">
                    <h2>Loading {DEPARTMENT_CODE} Resources...</h2>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="course-container">
                <div className="text-center text-red-500 py-5">
                    <h2>{error}</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="course-container">
            {department && (
                <div className="department-header" style={{
                    fontSize: '2.5rem',
                    color: '#1e40af',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    padding: '20px 0',
                    marginBottom: '30px'
                }}>
                    <h1 style={{ margin: 0 }}>{department.full_name}</h1>
                </div>
            )}

            {courseFiles.length > 0 && (
                <>
                    <h2 className="section-title">Course Files</h2>
                    {courseFiles.map((file, index) => (
                        <div key={file.id || index} className="course-file">
                            <span>Course File: {file.course_name}</span>
                            <a
                                href={getFullUrl(file.file_url)}
                                className="download-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {file.file_name}
                            </a>
                        </div>
                    ))}
                </>
            )}

            {resources.length > 0 && (
                <>
                    <h2 className="section-title">Resources</h2>
                    <table className="resources-table">
                        <thead>
                        <tr>
                            <th>Resource Title</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {resources.map((res, index) => (
                            <tr key={res.id || index}>
                                <td>
                                    {res.resource_title}
                                    {res.category && (
                                        <span className="resource-category"> ({res.category})</span>
                                    )}
                                </td>
                                <td>
                                    <a
                                        href={getFullUrl(res.resource_url)}
                                        className="download-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Download
                                    </a>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </>
            )}

            {courseFiles.length === 0 && resources.length === 0 && (
                <div className="text-center py-5">
                    <p>No resources available for {DEPARTMENT_CODE} department.</p>
                </div>
            )}
        </div>
    );
};

export default CourseResources;