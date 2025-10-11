import React, { useState, useEffect } from "react";
import facebookIcon from '../../assets/socials/facebook.png';
import instagramIcon from '../../assets/socials/instagram.png';
import mailIcon from '../../assets/socials/mail.png';
import linkedinIcon from '../../assets/socials/linkedin.png';

const API_BASE_URL = "https://ccet.ac.in/api/contact.php";

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState("EMAIL");
  const [activeAddressTab, setActiveAddressTab] = useState("Roadways");

  const [emailData, setEmailData] = useState([]);
  const [phoneData, setPhoneData] = useState([]);
  const [socialsData, setSocialsData] = useState([]);
  const [addressData, setAddressData] = useState([]);

  const [loading, setLoading] = useState({
    emails: true,
    phones: true,
    socials: true,
    address: true
  });
  const [error, setError] = useState({
    emails: null,
    phones: null,
    socials: null,
    address: null
  });

  const tabs = ["EMAIL", "PHONE", "SOCIALS", "ADDRESS"];

  useEffect(() => {
    fetch(`${API_BASE_URL}?resource=emails&is_active=true`)
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch emails");
          return response.json();
        })
        .then((data) => {
          setEmailData(data);
          setLoading(prev => ({ ...prev, emails: false }));
        })
        .catch((err) => {
          setError(prev => ({ ...prev, emails: err.message }));
          setLoading(prev => ({ ...prev, emails: false }));
        });
  }, []);

  useEffect(() => {
    fetch(`${API_BASE_URL}?resource=phones&is_active=true`)
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch phones");
          return response.json();
        })
        .then((data) => {
          setPhoneData(data);
          setLoading(prev => ({ ...prev, phones: false }));
        })
        .catch((err) => {
          setError(prev => ({ ...prev, phones: err.message }));
          setLoading(prev => ({ ...prev, phones: false }));
        });
  }, []);

  useEffect(() => {
    fetch(`${API_BASE_URL}?resource=socials&is_active=true`)
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch socials");
          return response.json();
        })
        .then((data) => {
          setSocialsData(data);
          setLoading(prev => ({ ...prev, socials: false }));
        })
        .catch((err) => {
          setError(prev => ({ ...prev, socials: err.message }));
          setLoading(prev => ({ ...prev, socials: false }));
        });
  }, []);

  useEffect(() => {
    fetch(`${API_BASE_URL}?resource=address&is_active=true`)
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch address");
          return response.json();
        })
        .then((data) => {
          setAddressData(data);
          setLoading(prev => ({ ...prev, address: false }));
        })
        .catch((err) => {
          setError(prev => ({ ...prev, address: err.message }));
          setLoading(prev => ({ ...prev, address: false }));
        });
  }, []);

  const getSocialIcon = (platform) => {
    const icons = {
      'Facebook': facebookIcon,
      'Instagram': instagramIcon,
      'LinkedIn': linkedinIcon,
      'Mail': mailIcon
    };
    return icons[platform] || mailIcon;
  };

  return (
      <div className="min-h-screen bg-white px-6 md:px-20 py-10 text-gray-800 font-sans">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4">CONTACT US</h1>
          <p className="text-xl font-medium">
            Chandigarh College of Engineering & Technology (CCET)
            <br />
            Sector-26, 160019, Chandigarh
          </p>
        </div>

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
                {loading.emails ? (
                    <div className="text-center py-8 text-xl">Loading email data...</div>
                ) : error.emails ? (
                    <div className="text-center py-8 text-xl text-red-600">Error: {error.emails}</div>
                ) : (
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
                              key={row.id || index}
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
                )}
              </div>
            </>
        )}

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
                {loading.phones ? (
                    <div className="text-center py-8 text-xl">Loading phone data...</div>
                ) : error.phones ? (
                    <div className="text-center py-8 text-xl text-red-600">Error: {error.phones}</div>
                ) : (
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
                      {phoneData.map((row, index) => (
                          <tr
                              key={row.id || index}
                              className="border-t border-[#28446E] hover:bg-[#1F3B6E] transition-colors duration-200"
                          >
                            <td className="px-6 py-4 text-lg lg:text-xl">{row.name}</td>
                            <td className="px-4 py-3 border-l border-[#28446E] text-blue-200 font-bold whitespace-nowrap">
                        <span className="inline-block whitespace-nowrap">
                          {row.phone}
                        </span>
                            </td>
                          </tr>
                      ))}
                      </tbody>
                    </table>
                )}
              </div>
            </>
        )}

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
                {loading.socials ? (
                    <div className="text-center py-8 text-xl">Loading social media links...</div>
                ) : error.socials ? (
                    <div className="text-center py-8 text-xl text-red-600">Error: {error.socials}</div>
                ) : (
                    <div className="grid grid-cols-2 sm:flex justify-center items-center gap-6 sm:gap-8">
                      {socialsData.map((social) => (
                          <a
                              key={social.id}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-28 h-28 sm:w-40 sm:h-40 bg-[#102A56] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                          >
                            <img
                                src={social.icon_url || getSocialIcon(social.platform)}
                                alt={social.platform}
                                className="w-12 h-12 sm:w-20 sm:h-20"
                            />
                          </a>
                      ))}
                    </div>
                )}
              </div>
            </>
        )}

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
                <div
                    className="flex justify-center gap-4 flex-wrap"
                    style={{
                      animation: "popIn 0.5s ease-out forwards",
                      transformOrigin: "center center",
                    }}
                >
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
                  <div className="lg:w-[50%]">
                    <div
                        className="bg-[#102A56] text-white rounded-xl p-6 text-lg shadow-md min-h-[460px]"
                        style={{
                          animation: "popIn 0.5s ease-out forwards",
                          transformOrigin: "center center",
                        }}
                    >
                      {loading.address ? (
                          <div className="text-center py-8">Loading address data...</div>
                      ) : error.address ? (
                          <div className="text-center py-8 text-red-400">Error: {error.address}</div>
                      ) : (
                          <>
                            {addressData
                                .filter((addr) => addr.mode === activeAddressTab)
                                .map((addr) => (
                                    <div key={addr.id}>
                                      <h1 className="mb-4 font-extrabold text-lg">{addr.title}</h1>
                                      <div
                                          className="space-y-1"
                                          dangerouslySetInnerHTML={{ __html: addr.content }}
                                      />
                                    </div>
                                ))}
                          </>
                      )}
                    </div>
                  </div>

                  <div
                      className="lg:w-[50%]"
                      style={{
                        animation: "popIn 0.5s ease-out forwards",
                        transformOrigin: "center center",
                      }}
                  >
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