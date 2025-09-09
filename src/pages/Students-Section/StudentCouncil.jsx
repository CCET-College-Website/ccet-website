import React from "react";

const StudentCouncil = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Student Council</h2>
      
      {/* Table Section */}
      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>S.No.</th>
              <th>Position</th>
              <th>Name</th>
              <th>Roll No</th>
              <th>Year/Semester</th>
              <th>Branch</th>
              <th>Mobile No</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>President</td>
              <td>Akshansh Thakur</td>
              <td>CO22306</td>
              <td>2nd Year / 4th Sem.</td>
              <td>CSE</td>
              <td>8219816256</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Vice President</td>
              <td>Divyansh Manro</td>
              <td>CO22327</td>
              <td>3rd Year / 6th Sem.</td>
              <td>CSE</td>
              <td>8360799948</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Secretary</td>
              <td>Aditya Yadav</td>
              <td>CO22327</td>
              <td>3rd Year / 6th Sem.</td>
              <td>CSE</td>
              <td>9736191204</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Joint Secretary</td>
              <td>Dikshant Suri</td>
              <td>CO24518</td>
              <td>1st Year / 2nd Sem.</td>
              <td>CSE</td>
              <td>9478142569</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Treasurer</td>
              <td>Nikhil</td>
              <td>CO22532</td>
              <td>3rd Year / 6th Sem.</td>
              <td>ECE</td>
              <td>9350577043</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* PDF Section */}
      <div className="mt-5">
        <h3 className="mb-3">Student Council FAQs</h3>
        <iframe
          src="/pdfs/StudentCouncilFAQ.pdf"
          width="100%"
          height="600px"
          title="Student Council FAQs"
        ></iframe>
      </div>
    </div>
  );
};

export default StudentCouncil;
