import React from 'react';
import { motion } from 'framer-motion';
import civil from './Headsimages/civil.png';
import ece from './Headsimages/ece.png';
import cse from './Headsimages/cse.png';
import mech from './Headsimages/mech.png';
import as from './Headsimages/applied-science.png';

const academicHeads = [
  {
    department: 'Computer Science and Engineering',
    name: 'Dr. Sunil K. Singh',
    position: 'Head of Department',
    designation: 'Professor & HOD',
    qualification: 'BE, ME, PhD',
    area: 'Reconfigurable computing, Embedded System, Linux',
    contact: '9818182457',
    email: 'sksingh@ccet.ac.in',
    room: 'Room no. 415, CSE Department, CCET Degree Wing',
    image: cse,
  },
  {
    department: 'Civil Engineering',
    name: 'Dr. Rajesh Kumar',
    position: 'Head of Department',
    designation: 'Professor & HOD',
    qualification: 'BE, ME, PhD',
    area: 'Structure Analysis & Design, SCC, RAC etc',
    contact: '9478584248',
    email: 'rajeshkumar@ccet.ac.in',
    room: 'Room No.-305B, Block-B, CCET (Degree Wing)',
    image: civil,
  },
  {
    department: 'Mechanical Engineering',
    name: 'Dr. Jatinder Madan',
    position: 'Head of Department',
    designation: 'Professor & HOD',
    qualification: 'BE, ME, PhD',
    area: 'CAD CAM, Design Automation',
    contact: '9042192970',
    email: 'jatindermadan@ccet.ac.in',
    room: 'Room No. B 308, Block - B, CCET (Degree Wing)',
    image: mech,
  },
  {
    department: 'Electronics and Communication Engineering',
    name: 'Dr. Davinder Singh Saini',
    position: 'Head of Department',
    designation: 'Professor & HOD',
    qualification: 'BE, ME, PhD',
    area: 'Wireless Communication, 4G, MIMO-OFDM',
    contact: '8146730369',
    email: 'dssaini@ccet.ac.in',
    room: 'Room No. 315, 2nd Floor, CCET (Degree Wing), Chandigarh',
    image: ece,
  },
  {
    department: 'Applied Science',
    name: 'Dr. Varun Gupta',
    position: 'Head of Department',
    designation: 'Professor & HOD',
    qualification: 'BE, ME, PhD',
    area: 'Deep learning, Machine learning and Software Engineering',
    contact: '9646047091',
    email: 'varungupta@ccet.ac.in',
    room: 'Room No. 109, Ground Floor, Block A, Applied Science Department, CCET, Degree Wing',
    image: as,
  },
];

const Academicheads = () => {
  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">Academic Heads</h1>

      <div className="space-y-8">
        {academicHeads.map((head, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-stretch bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200"
          >
            {/* Image with Hover Zoom */}
            <div className="w-full md:w-1/3 bg-gray-100 flex items-center justify-center overflow-hidden group">
              <img
                src={head.image}
                alt={head.name}
                className="w-full h-auto object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 p-4 md:p-6 flex flex-col justify-center">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 uppercase mb-2">
                {head.department}
              </h2>
              <p className="font-semibold text-base md:text-lg mb-1">
                {head.name} - {head.position}
              </p>
              <p className="text-gray-700 mb-1">{head.designation}</p>
              <p className="text-gray-700 mb-1">Qualification: {head.qualification}</p>
              <p className="text-gray-700 mb-1">Area of Interest: {head.area}</p>
              <p className="text-gray-700 mb-1">Contact: {head.contact}</p>
              <p className="text-gray-700 mb-1">
                Email: <a href={`mailto:${head.email}`} className="text-blue-600 underline">{head.email}</a>
              </p>
              <p className="text-gray-700">Available at: {head.room}</p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-3 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition self-start"
              >
                Read More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Academicheads;
