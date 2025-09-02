import React from "react";
import "./Degree.css";

const BachelorEngineering = () => {
  const seatMatrix = [
    { branch: "Computer Science and Engineering", seats: 75 },
    { branch: "Electronics and Communications Engineering", seats: 75 },
    { branch: "Civil Engineering", seats: 75 },
    { branch: "Mechanical Engineering", seats: 75 },
  ];

  return (
    <div className="be-container">
      <h1 className="be-title">BACHELOR OF ENGINEERING</h1>

      <p className="be-intro">
        Academics is central to the overall development of a student. The class
        mix is such that a diverse group of people compete and perform in a
        search of excellence. The wide range of background has one common
        denominator - POTENTIAL. The academic scores achieved by the students of
        an institute is testimony of the quality of the course and the
        dedication of the faculty imparting it. The high standards of inputs
        being poured by the vibrant teachers and the hard working students have
        bore out excellent results, as the university topper for the year
        2003-2004 for BE was from this institute.
      </p>

      <p className="be-intro">
        The undergraduate curriculum is broad based and is designed to introduce
        the students to a wide range of problems encountered by students in the
        field. A large number of elective subjects are offered to enable a
        student to study the area of his special interest in depth. Students are
        given practical problems of different areas as their projects and
        practical training are a part of the courses aimed at familiarizing the
        students with actual problems.
      </p>

      <h2 className="seat-title">Seat Matrix for Degree Courses</h2>
      <table className="seat-table">
        <thead>
          <tr>
            <th>Branch</th>
            <th>Number of Seats</th>
          </tr>
        </thead>
        <tbody>
          {seatMatrix.map((row, index) => (
            <tr key={index}>
              <td>{row.branch}</td>
              <td>{row.seats}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="be-note">
        NOTE : Admissions to B.E. 1st year programme are done through
        counselling conducted by JAC Chandigarh on the basis of JEE Main merit.{" "}
        <a
          href="https://www.jacchd.admissions.nic.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here to know more.
        </a>
      </p>

      <p className="be-note">
        NOTE : Admission through lateral entry in 2nd year of degree programme
        is on the basis of merit of PULEET, entrance test conducted by Panjab
        University, Chandigarh.
      </p>

      <div className="important-links">
        <h3>Important Links:</h3>
        <ul>
          <li>
            <a
              href="https://jacchd.admissions.nic.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              JAC Chandigarh Website
            </a>
          </li>
          <li>
            <a
              href="https://jeemain.nta.nic.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              JEE-MAINS Website
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BachelorEngineering;
