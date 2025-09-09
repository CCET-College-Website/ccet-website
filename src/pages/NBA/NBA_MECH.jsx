import React from "react";
import "./NBA_CSE.css";

const CourseResources = () => {
  const resources = [
    { title: "OS Introduction", link: "#" },
    { title: "OS Processes", link: "#" },
    { title: "CPU Scheduling Part 1", link: "#" },
    { title: "CPU Scheduling Part 2", link: "#" },
    { title: "OS Deadlocks Part 1", link: "#" },
    { title: "OS Deadlocks Part 2", link: "#" },
    { title: "OS Deadlocks Part 3", link: "#" },
    { title: "OS Process Synchronization Part 1", link: "#" },
    { title: "OS Process Synchronization Part 2", link: "#" },
  ];

  return (
    <div className="course-container">
      {/* Course File Section */}
      <h2 className="section-title">Course Files</h2>
      <div className="course-file">
        <span>Course File: Operating System</span>
        <a href="#" className="download-link">Download</a>
      </div>

      {/* Resources Section */}
      <h2 className="section-title">Resources</h2>
      <table className="resources-table">
        <thead>
          <tr>
            <th>Operating Systems</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {resources.map((res, index) => (
            <tr key={index}>
              <td>{res.title}</td>
              <td>
                <a href={res.link} className="download-link">Download</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseResources;
