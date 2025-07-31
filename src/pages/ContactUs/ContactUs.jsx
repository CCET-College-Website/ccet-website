import React, { useState } from "react";
import facebookIcon from '../../assets/socials/facebook.png';
import instagramIcon from '../../assets/socials/instagram.png';
import mailIcon from '../../assets/socials/mail.png';
import linkedinIcon from '../../assets/socials/linkedin.png'

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState("EMAIL");
const [activeAddressTab, setActiveAddressTab] = useState("Roadways");

  const tabs = ["EMAIL", "PHONE", "SOCIALS", "ADDRESS"];

  const emailData = [
    { name: "Principal", email: "principal@ccet.ac.in" },
    { name: "General Inquiry (Academics)", email: "academiccell@ccet.ac.in" },
    { name: "Trainings and Placement", email: "tpo@ccet.ac.in" },
    { name: "Admissions Help Desk", email: "helpdesk@ccet.ac.in" },
     { name: "Public Relations", email: "pr@ccet.ac.in" },
    { name: "General Info", email: "info@ccet.ac.in" },
    
  ];

  const PhoneData = [
    { name: "Phone", phone: "+91-172-2750872,\n +91-172-2750943" },
    { name: "Fax", phone: "0172-2750872" },
    { name: "Trainings and Placement", phone: "+91 9414403565" },
    { name: "Tender Enquiry", phone: "0172 2750943" },
    
  ];

  return (
    <div className="min-h-screen bg-white px-6 md:px-20 py-10 text-gray-800 font-sans">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4">CONTACT US</h1>
        <p className="text-xl font-medium">
          Chandigarh College of Engineering & Technology (CCET)
          <br />
          Sector-26 , 160019, Chandigarh
        </p>
      </div>

      {/* Main Tabs */}
<div className="grid grid-cols-2 sm:flex justify-center gap-4 bg-gray-200 rounded-xl w-full max-w-3xl mx-auto mb-10 p-4 text-base sm:text-xl font-bold">
  {tabs.map((tab) => (
    <button
      key={tab}
      className={`w-full py-3 rounded-lg text-center transition-all duration-200 ${
        activeTab === tab
          ? "bg-[#102A56] text-white shadow-md"
          : "bg-white text-black hover:bg-gray-300"
      }`}
      onClick={() => setActiveTab(tab)}
    >
      {tab}
    </button>
  ))}
</div>


      {/* EMAIL SECTION */}
  {activeTab === "EMAIL" && (
  <>
    <style>
      {`
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}
    </style>

    <div className="overflow-x-auto max-w-3xl mx-auto">
      <table
        className="w-full border-collapse bg-[#102A56] text-white rounded-lg overflow-hidden"
        style={{
          animation: "popIn 0.5s ease-out forwards",
          transformOrigin: "center center", 
        }}
      >
        <thead className="bg-[#0A1C3F]">
          <tr className="text-left">
            <th className="px-4 py-3 text-[#FBBF24] text-lg lg:text-xl font-bold">NAME</th>
            <th className="px-4 py-3 text-[#FBBF24] text-lg lg:text-xl border-l border-[#28446E] font-bold">
              EMAIL ADDRESS
            </th>
          </tr>
        </thead>
        <tbody>
          {emailData.map((row, index) => (
            <tr
              key={index}
              className="border-t border-[#28446E] hover:bg-[#1F3B6E] transition-colors duration-200"
            >
              <td className="px-6 py-4 text-lg lg:text-xl">{row.name}</td>
              <td className="px-6 py-4 text-lg lg:text-xl border-l border-[#28446E]">
                <a
                  href={`mailto:${row.email}`}
                  className="underline text-blue-200 hover:text-yellow-300"
                >
                  {row.email}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
)}
      
      {/* PHONE SECTION */}

 {activeTab === "PHONE" && (
  <>
    <style>
      {`
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}
    </style>

    <div className="overflow-x-auto max-w-3xl mx-auto">
      <table
        className="w-full border-collapse bg-[#102A56] text-white rounded-lg overflow-hidden"
        style={{
          animation: "popIn 0.5s ease-out forwards",
          transformOrigin: "center center",
        }}
      >
        <thead className="bg-[#0A1C3F]">
          <tr className="text-left">
            <th className="px-4 py-3 text-[#FBBF24] text-lg lg:text-xl font-bold">NAME</th>
            <th className="px-4 py-3 text-[#FBBF24] text-lg lg:text-xl border-l border-[#28446E] font-bold">
              PHONE NUMBER
            </th>
          </tr>
        </thead>
        <tbody>
          {PhoneData.map((row, index) => (
            <tr
              key={index}
              className="border-t border-[#28446E] hover:bg-[#1F3B6E] transition-colors duration-200"
            >
              <td className="px-6 py-4 text-lg lg:text-xl ">{row.name}</td>
              <td className="px-4 py-3 border-l border-[#28446E] text-blue-200 font-bold whitespace-nowrap">
              <span className="inline-block whitespace-nowrap">
                {row.phone.replace(/\n/g, ' • ')}
              </span>
            </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
)}

 {/* SOCIAL SECTION */}

{activeTab === "SOCIALS" && (
  <>
    <style>
      {`
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}
    </style>

   <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mt-10 animate-[popIn_0.5s_ease-out_forwards]">
  <div className="grid grid-cols-2 sm:flex justify-center items-center gap-6 sm:gap-8 mt-10 animate-[popIn_0.5s_ease-out_forwards]">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/ccet-degree-a82593264/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-28 h-28 sm:w-40 sm:h-40 bg-[#102A56] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
  >
    <img src={linkedinIcon} alt="LinkedIn" className="w-12 h-12 sm:w-20 sm:h-20" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/ccet_degree/?hl=en"
    target="_blank"
    rel="noopener noreferrer"
    className="w-28 h-28 sm:w-40 sm:h-40 bg-[#102A56] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
  >
    <img src={instagramIcon} alt="Instagram" className="w-12 h-12 sm:w-20 sm:h-20" />
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-28 h-28 sm:w-40 sm:h-40 bg-[#102A56] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
  >
    <img src={facebookIcon} alt="Facebook" className="w-12 h-12 sm:w-20 sm:h-20" />
  </a>

  {/* Mail */}
  <a
    href="mailto:pr@ccet.ac.in"
    target="_blank"
    rel="noopener noreferrer"
    className="w-28 h-28 sm:w-40 sm:h-40 bg-[#102A56] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
  >
    <img src={mailIcon} alt="Mail" className="w-12 h-12 sm:w-20 sm:h-20" />
  </a>
</div>

</div>
</>
)}

 {/* ADDRESS SECTION */}

{activeTab === "ADDRESS" && (
    <>
    <style>
      {`
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}
    </style>
  <div className="max-w-4xl mx-auto mt-10 px-4 space-y-6">

    {/* Sub-tabs */}
    <div className="flex justify-center gap-4 flex-wrap"
    style={{
          animation: "popIn 0.5s ease-out forwards",
          transformOrigin: "center center",
        }}>
      {["Roadways", "Railways", "Airways"].map((mode) => (
        <button
          key={mode}
          onClick={() => setActiveAddressTab(mode)}
          className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-200 ${
            activeAddressTab === mode
              ? "bg-[#0B2452] text-white shadow-md"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          {mode}
        </button>
      ))}
    </div>

    <div className="flex flex-col lg:flex-row gap-8">

      {/* Content Box */}
      <div className="lg:w-[50%]">
        <div className="bg-[#102A56] text-white rounded-xl p-6 text-lg shadow-md min-h-[460px]"
        style={{
          animation: "popIn 0.5s ease-out forwards",
          transformOrigin: "center center",
        }}>
          {activeAddressTab === "Roadways" && (
           <div>
          <h1 className="mb-4 font-extrabold text-lg">
            Roadways Connectivity to CCET Chandigarh:
            </h1>
            <ul className="list-disc list-inside space-y-1 text-bold">
            <li>Located in Sector 26, near Madhya Marg.</li>
            <li>7 km from ISBT-17, 9 km from ISBT-43 (15–20 min).</li>
            <li>CTU buses, autos, cabs easily available.</li>
            <li>Well-connected to Panchkula & Mohali via Chandigarh roads.</li>
            <li>Smooth, well-maintained roads enable easy daily commute.</li>
            </ul>
            </div>

          )}
          {activeAddressTab === "Railways" && (
            <div>
          <h1 className="mb-4 font-extrabold text-lg">
            Railways Connectivity to CCET Chandigarh:
            </h1>
            <ul className="list-disc list-inside space-y-1 text-bold">
            <li>Chandigarh Railway Station ~4 km from CCET.</li>
            <li>Auto & cab availability from station to campus.</li>
            <li>Frequent trains from Delhi, Amritsar, Kalka, Mumbai.</li>
            <li>Easy last-mile connectivity via local buses & autos.</li>
            
            </ul>
            </div>
          )}
          {activeAddressTab === "Airways" && (
             <div>
          <h1 className="mb-4 font-extrabold text-lg">
            Airways Connectivity to CCET Chandigarh:
            </h1>
            <ul className="list-disc list-inside space-y-1 text-bold">
            <li>Chandigarh International Airport ~17 km from CCET.</li>
            <li>Connected to Delhi, Mumbai, Bangalore, Jaipur, etc.</li>
            <li>Cabs, autos, and airport shuttle easily available.</li>
            <li>~30–40 min travel time to campus via well-connected roads.</li>
            </ul>
            </div>
          )}
        </div>
      </div>

      {/* Google Map */}
      <div className="lg:w-[50%]"
      style={{
          animation: "popIn 0.5s ease-out forwards",
          transformOrigin: "center center",
        }}>
        <iframe
          title="CCET Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.670688131168!2d76.80631047508783!3d30.727656985878713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed212e27c319%3A0x491b3277baba3581!2sChandigarh%20College%20Of%20Engineering%20and%20Technology%20Degree%20Wing!5e0!3m2!1sen!2sin!4v1750591690863!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-xl shadow-md w-full h-full min-h-[200px]"
        ></iframe>
      </div>

    </div>
  </div>
  </>
)}
</div>
  );
};

export default ContactUs;
