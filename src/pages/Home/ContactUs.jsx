import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'https://ccet.ac.in/api/contact-us.php';

  useEffect(() => {
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data && data.length > 0 && !data.error) {
        setContactData(data[0]);
      } else {
        throw new Error('No contact data available');
      }
    } catch (err) {
      setError(err.message);
      console.error('Error fetching contact data:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
        <section className="py-8 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-[1140px] mx-auto">
            <div className="text-center">Loading contact information...</div>
          </div>
        </section>
    );
  }

  if (error) {
    return (
        <section className="py-8 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-[1140px] mx-auto">
            <div className="text-center text-red-500">Error: {error}</div>
          </div>
        </section>
    );
  }

  if (!contactData) {
    return (
        <section className="py-8 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-[1140px] mx-auto">
            <div className="text-center">No contact information found.</div>
          </div>
        </section>
    );
  }

  return (
      <section className="py-8 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-[1140px] mx-auto">
          <h2 className="text-center mb-4 text-4xl lg:text-5xl font-bold text-gray-900 dark:text-[#30709aff]">
            Contact Us
          </h2>

          <div className="flex flex-col md:flex-row gap-6 items-stretch">
            <div className="flex-1">
              <div className="p-4 shadow rounded w-full h-full
              bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900
              border border-gray-300 dark:border-[#30709aff]
              text-[1.355rem] leading-7 text-gray-800 dark:text-gray-400
              transition-all duration-300
              hover:shadow-xl hover:dark:shadow-[0_0_15px_rgba(255,255,255,0.08)]">
                <p><strong>Address:</strong><br /> {contactData.address}</p>
                <p><strong>Principal:</strong> {contactData.principal_name}</p>
                <p><strong>Founded:</strong> {contactData.founded_year}</p>
                <p><strong>Undergraduate Fees:</strong> {contactData.undergraduate_fees}</p>
                <p><strong>Campus:</strong> {contactData.campus_area}</p>
                <p><strong>Phone:</strong> {contactData.phone}</p>
              </div>
            </div>

            <div className="flex-1">
              <div className="shadow rounded overflow-hidden w-full h-full border border-gray-300 dark:border-gray-600">
                <iframe
                    title="CCET Location"
                    src={contactData.map_url}
                    className="w-full h-full min-h-[300px] border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;