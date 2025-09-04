import React from 'react';
import { motion } from 'framer-motion';
import civil from './Headsimages/civil.png';
import ece from './Headsimages/ece.png';
import cse from './Headsimages/cse.png';
import mech from './Headsimages/mech.png';
import as from './Headsimages/applied-science.png';
import cse_resume from './HeadsResume/Sunil_K_Singh.pdf';
import ece_resume from './HeadsResume/DS_Saini.pdf';
import mech_resume from './HeadsResume/Jatinder_Madan.pdf';
import civil_resume from './HeadsResume/Rajesh_Kumar.pdf';
import as_resume from './HeadsResume/Varun_Gupta.pdf';

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
    resume: cse_resume,
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
    resume: civil_resume,
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
    resume: mech_resume,
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
    resume: ece_resume,
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
    resume: as_resume,
  },
];

const Academicheads = () => {
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-gray-900 tracking-wide">
        Academic Heads
      </h1>

      <div className="space-y-10">
        {academicHeads.map((head, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row bg-white shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden border border-gray-200 transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Image */}
            <div className="w-full md:w-1/3 bg-gray-50 flex items-center justify-center overflow-hidden group">
              <img
                src={head.image}
                alt={head.name}
                className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Info */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
              <h2 className="text-xl md:text-3xl font-bold text-blue-900 mb-2">
                {head.department}
              </h2>
              <p className="text-2xl font-semibold text-gray-800 mb-1">
                {head.name} — {head.position}
              </p>
              <p className="text-gray-600 mb-2">{head.designation}</p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Qualification:</span> {head.qualification}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Area of Interest:</span> {head.area}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Contact:</span> {head.contact}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Email:</span>{' '}
                <a href={`mailto:${head.email}`} className="text-blue-600 hover:underline">
                  {head.email}
                </a>
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Available at:</span> {head.room}
              </p>

              {/* Resume Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(head.resume, "_blank")}
                className="mt-5 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-md hover:from-orange-600 hover:to-red-600 transition-all"
              >
                View Resume
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Academicheads;
