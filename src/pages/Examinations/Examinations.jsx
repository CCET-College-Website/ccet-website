import React, { useState } from 'react';
import pdf from "../../assets/examinations/dummy.pdf";

const Examinations = () => {
    

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden p-6">

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">EXAMINATION</h1>
          <h2 className="text-2xl font-semibold text-gray-700">Datesheet May-2025</h2>
        </div>

        <div className="w-full h-96 border border-gray-300 rounded-lg overflow-hidden shadow-md">
          <iframe 
            src={pdf}
            className="w-full h-full"
            title="Examination Datesheet PDF"
          ></iframe>
        </div>
      </div>
    </div>
  );

};

export default Examinations;