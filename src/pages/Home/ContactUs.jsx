import React from 'react';

const Contact = () => {
  return (
    <div
      className="py-5"
      style={{
        paddingInline: '0.5rem',
        backgroundColor: '#f8f9fa',
      }}
    >
      <div className="container" style={{ maxWidth: '1140px' }}>
        <h2
          className="text-center mb-5"
          style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#212529',
          }}
        >
          Contact Us
        </h2>

        <div className="row g-4">
          {/* Contact Info Box */}
          <div className="col-12 col-md-6 d-flex">
            <div
              className="p-4 shadow rounded w-100"
              style={{
                background: '#ffffff',
                border: '1px solid #dee2e6',
                fontSize: '1.355rem',
                lineHeight: '1.7',
              }}
            >
              <p><strong>Address:</strong><br /> PRH5+3H6, Sector 26, Chandigarh, 160019</p>
              <p><strong>Principal:</strong> <a href="#" style={{ textDecoration: 'none', color: '#007bff' }}>Dr Manpreet Singh</a></p>
              <p><strong>Founded:</strong> 2002</p>
              <p><strong>Undergraduate Fees:</strong> 45,500 INR (2012–13)</p>
              <p><strong>Campus:</strong> 32 acres (13 ha), Urban</p>
              <p><strong>Phone:</strong> <a href="tel:01722750872" style={{ textDecoration: 'none', color: '#007bff' }}>0172 275 0872</a></p>
            </div>
          </div>

          {/* Map Box */}
          <div className="col-12 col-md-6 d-flex">
            <div
              className="shadow rounded overflow-hidden w-100"
              style={{
                border: '1px solid #dee2e6',
                minHeight: '330px',
              }}
            >

              <iframe
                title="CCET Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.670688131168!2d76.80631047508783!3d30.727656985878713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed212e27c319%3A0x491b3277baba3581!2sChandigarh%20College%20Of%20Engineering%20and%20Technology%20Degree%20Wing!5e0!3m2!1sen!2sin!4v1750591690863!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  minHeight: '330px',
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.670688131168!2d76.80631047508783!3d30.727656985878713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed212e27c319%3A0x491b3277baba3581!2sChandigarh%20College%20Of%20Engineering%20and%20Technology%20Degree%20Wing!5e0!3m2!1sen!2sin!4v1750591690863!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
