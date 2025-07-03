import React from "react";
import { AcademicCapIcon, ComputerDesktopIcon, CpuChipIcon, CogIcon, BuildingOffice2Icon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Computer Science and Engineering (CSE)",
    description:
      "In this high–tech era, computer technology is impacting every sector of human life—education, healthcare, manufacturing, transportation, and entertainment. The CSE curriculum at CCET provides a balanced mix of theoretical foundations and practical applications, including courses in advanced programming, data structures, artificial intelligence, machine learning, computer networks, and cloud computing. Our state-of-the-art labs offer students hands-on experience in software development, coding, system design, and project management. Graduates from this program excel in top tech firms, pursue research, or build successful startups.",
    icon: ComputerDesktopIcon,
    color: "border-blue-800 text-blue-800",
  },
  {
    title: "Electronics and Communication Engineering (ECE)",
    description:
      "From smartphones to satellites, electronics and communication systems are the backbone of today’s connected world. The ECE department at CCET equips students with skills in VLSI design, embedded systems, wireless communication, digital signal processing, and IoT technologies. Students work in modern labs equipped with simulation tools and hardware kits for embedded development. The curriculum emphasizes both design and analysis of electronic systems. ECE graduates are sought after in telecom industries, embedded software companies, semiconductor firms, and government research organizations.",
    icon: CpuChipIcon,
    color: "border-pink-600 text-pink-600",
  },
  {
    title: "Mechanical Engineering (ME)",
    description:
      "Mechanical Engineering remains one of the most versatile and evergreen engineering branches. At CCET, the ME department covers core subjects like thermodynamics, fluid mechanics, heat transfer, manufacturing processes, and machine design. Students also learn modern tools like CAD/CAM and simulation software. The department houses well-equipped labs in areas like robotics, fluid dynamics, and strength of materials. Graduates from ME work in automotive, aerospace, energy, manufacturing industries, and can also prepare for higher studies or competitive exams like GATE and IES.",
    icon: CogIcon,
    color: "border-orange-600 text-orange-600",
  },
  {
    title: "Civil Engineering (CE)",
    description:
      "Civil Engineering shapes the infrastructure we live in—from roads, bridges, and buildings to water supply and environmental solutions. The Civil Engineering department at CCET emphasizes both traditional engineering concepts and modern technologies like CAD, Building Information Modeling (BIM), and environmental impact analysis. With a focus on structural engineering, transportation, geotechnical, and water resource management, students gain hands-on experience in surveying, soil testing, and construction management. Graduates go on to build careers in construction firms, government bodies, consultancy, and research institutions.",
    icon: BuildingOffice2Icon,
    color: "border-green-700 text-green-700",
  },
  {
    title: "Doctoral Program (Ph.D.)",
    description:
      "Chandigarh College of Engineering & Technology (Degree Wing) is an approved Research Centre of Panjab University, Chandigarh for PhD programs in Engineering (CSE, ECE, CE, ME). The PhD program offers scholars opportunities for advanced research in cutting-edge areas like Artificial Intelligence, Wireless Communication, Sustainable Infrastructure, Robotics, and more. Doctoral candidates work under experienced faculty mentors, engage in funded research projects, and publish in reputed journals. The admission process is conducted by Panjab University, Chandigarh. For detailed instructions and the PhD admission prospectus, kindly visit:",
    icon: AcademicCapIcon,
    color: "border-purple-700 text-purple-700",
    link: "http://phdadmissions.puchd.ac.in",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const Courses = () => {
  return (
    <div
      className="px-4 md:px-16 py-14 max-w-7xl mx-auto"
      style={{
        background: "linear-gradient(to right, #f8fafc, #e2e8f0)",
      }}
    >
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-center mb-6 text-black">
        Courses Offered
      </h1>

      {/* Academic Intro Description */}
      <p className="text-gray-800 text-lg text-justify mb-10 leading-relaxed">
        Academics is central to the overall development of a student. The
        classes allow diverse groups of people to compete and perform to the
        peak of their potential, growing towards excellence. The academic
        scores achieved by the students of an institute are testimony of the
        quality of the courses offered and the dedication of the faculty
        imparting it. The high standards of inputs being poured by the vibrant
        teachers and the outputs by the hard working students have bore out
        excellent results, as shown by the fact that the university topper for
        the year 2003-2004 for BE was from CCET (DG).
      </p>

      {/* Courses List */}
      <div className="space-y-10">
        {courses.map((course, index) => {
          const Icon = course.icon;
          return (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className={`bg-white border border-gray-300 border-l-8 ${course.color} rounded-xl shadow-md p-6 space-y-4 transition duration-300 hover:shadow-lg`}
            >
              {/* Heading with Icon */}
              <div className={`flex items-center gap-3 ${course.color}`}>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-8 h-8" />
                </motion.div>
                <h2 className={`text-2xl font-bold ${course.color}`}>
                  {course.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-800 leading-relaxed">
                {course.description}
                {course.title.includes("Ph.D.") && (
                  <>
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 underline ml-1"
                    >
                      {course.link}
                    </a>
                  </>
                )}
              </p>

              {/* Know More Button */}
              <div>
                <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-500 shadow-md transition">
                  Know more...
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
