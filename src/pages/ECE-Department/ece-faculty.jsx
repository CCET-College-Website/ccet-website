import React from "react";
import ECEHeader from "./ece_header";
import ECEQuickLinksSidebar from "./sidebar";

const facultyData = [
  {
    name: "Dr. Devinder Singh Saini",
    designation: "Professor and HOD",
    qualifications: [
      "B.E., M.Tech, Ph.D.",
      "Area of Specialization: IoT, Fiber, VLSI Design, CDMA, Wireless Sensor Network.",
    ],
    additionalInfo: [
      "Fellow member of IETE, ISTE, IEI, AFOEM (ECS), Reviewer in leading Academic Journals, Incharge Library, Incharge CCIE Cell, Incharge ACTU.",
    ],
    contact: {
      mobile: "8146943224",
      email: "dsainifac@ccet.ac.in",
      office: "Available at: Room No 308, 2nd FLOOR, CCET (Degree Wing), CHANDIGARH",
    },
  },
  {
    name: "Dr. Krishna Gopal Sharma",
    designation: "Professor",
    qualifications: [
      "B.E., M.Tech, Ph.D.",
      "Area of Specialization: Optical Fiber, VLSI Design",
    ],
    additionalInfo: [
      "Associated member: Professional Bodies including Incharge Training & Placement and CCIE Student Initiative Association Cell.",
    ],
    contact: {
      mobile: "9888058987",
      email: "krishnagopal@ccet.ac.in",
      office: "Available at: H. No. 3522, Sector – 42/A, Chandigarh",
    },
  },
  {
    name: "Dr. Bhasker Gupta",
    designation: "Professor",
    qualifications: [
      "B.E., M.Tech, Ph.D.",
      "Area of Specialization: IoT, Fiber, VLSI Design, CDMA, Wireless Sensor Network.",
    ],
    additionalInfo: [
      "Fellow member of IETE, ISTE, IEI, Reviewer in leading Academic Journals, Incharge Library, Incharge CCIE Cell, Incharge ACTU.",
    ],
    contact: {
      mobile: "8146870598",
      email: "bhosker@ccet.ac.in",
      office: "Available at: Room No 308, 2nd FLOOR, CCET (Degree Wing), CHANDIGARH",
    },
  },
];

export default function ECE_Faculty() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen font-serif">
        <ECEQuickLinksSidebar />
        <ECEHeader />
      {/* Faculty Members Section */}
      <div className="max-w-7xl mx-auto p-8 rounded-md">
        <h2 className="text-center text-black font-bold text-3xl mb-14">Faculty Members</h2>
        {facultyData.map((f) => (
          <div
            key={f.contact.email}
            className="md:bg-gradient-to-r md:from-blue-900 md:to-slate-900  rounded-2xl text-white flex flex-row items-start shadow-lg mb-8"
          >
            {/* Placeholder for profile pic */}
            <div className="w-36 h-40 bg-blue-200 rounded-lg m-6 flex-shrink-0" />
            {/* Details */}
            <div className="py-6 pr-8">
              <h3 className="text-xl font-bold mb-2">{f.name}</h3>
              <p className="mb-1 font-semibold">{f.designation}</p>
              {f.qualifications.map((q, i) => (
                <p key={i} className="mb-0.5">
                  {q}
                </p>
              ))}
              {f.additionalInfo.map((info, i) => (
                <p key={i} className="italic my-1.5">
                  {info}
                </p>
              ))}
              <p className="mt-2 mb-0.5">
                <b>Mobile Number</b>: {f.contact.mobile}
              </p>
              <p className="mb-0.5">
                <b>Email</b>: {f.contact.email}
              </p>
              <p>
                <b>{f.contact.office}</b>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
