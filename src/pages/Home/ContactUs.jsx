import React from 'react';

const Contact = () => {
  return (
    <section className="py-8 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-[1140px] mx-auto">
        <h2 className="text-center mb-4 text-4xl lg:text-5xl font-bold text-gray-900 dark:text-[#30709aff]">
          Contact Us
        </h2>

        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          {/* Contact Info Box */}
          <div className="flex-1">
            <div className="p-4 shadow rounded w-full h-full
              bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900
              border border-gray-300 dark:border-[#30709aff]
              text-[1.355rem] leading-7 text-gray-800 dark:text-gray-400
              transition-all duration-300
              hover:shadow-xl hover:dark:shadow-[0_0_15px_rgba(255,255,255,0.08)]">
              <p><strong>Address:</strong><br /> PRH5+3H6, Sector 26, Chandigarh, 160019</p>
              <p><strong>Principal:</strong> Dr Manpreet Singh</p>
              <p><strong>Founded:</strong> 2002</p>
              <p><strong>Undergraduate Fees:</strong> 45,500 INR (2012–13)</p>
              <p><strong>Campus:</strong> 32 acres (13 ha), Urban</p>
              <p><strong>Phone:</strong> 0172 275 0872</p>
            </div>
          </div>

          {/* Map Box */}
          <div className="flex-1">
            <div className="shadow rounded overflow-hidden w-full h-full border border-gray-300 dark:border-gray-600">
              <iframe
                title="CCET Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.670688131168!2d76.80631047508783!3d30.727656985878713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed212e27c319%3A0x491b3277baba3581!2sChandigarh%20College%20Of%20Engineering%20and%20Technology%20Degree%20Wing!5e0!3m2!1sen!2sin!4v1750591690863!5m2!1sen!2sin"
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
