import { useEffect } from "react";
import { FaTrophy, FaBriefcase, FaUniversity, FaUsers } from "react-icons/fa";
import "./Achievements.css"; // make sure this is imported


function Achievements() {
  useEffect(() => {
    const container = document.getElementById("achievements-scroll");
    let interval = setInterval(() => {
      if (container) {
        container.scrollTop += 1;
        if (container.scrollTop >= container.scrollHeight - container.clientHeight) {
          container.scrollTop = 0;
        }
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="achievements-section p-6 shadow-lg rounded-2xl ">
      <h2 className="achievements -title text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2 ">
        <FaTrophy className="text-yellow-500" /> ACHIEVEMENTS
      </h2>

      <div id="achievements-scroll" className="achievements -scroll h-96 overflow-hidden space-y-6 pr-2">

        {/* General Achievements */}
        <section className="achievement-category">
          <h3 className=" font-bold text-lg  mb-2 flex items-center gap-2">
            <FaTrophy className="text-yellow-500" /> Achievements
          </h3>
          <p className="text-sm  p-2 rounded">
            Chandigarh College of Engineering and Technology (CCET) received NBA accreditation for its B.E. (Computer Science and Engineering) and B.E. (Electronics and Communication Engineering) programs on February 12, 2025, recognizing its commitment to academic excellence and quality education.
          </p>
          <p className="text-sm p-2 rounded">
            Team CCET won 1st place at Cyberthon.AI 2025, a national hackathon by Chandigarh Police, Infosys, and CSRC-PEC, beating 81 teams in the finals at Infosys Campus, Chandigarh.
          </p>
        </section>

        {/* CSE Placements */}
        <section className="achievement-category">
          <h3 className=" font-bold text-lg  mb-2 flex items-center gap-2">
            <FaBriefcase className="text-green-500" /> Students from CSE with Placements in Good Companies
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-sm ">
            <li>Aman Tangri (CSE, 2023): Placed with CVENT, a leading company known for high-paying roles.</li>
            <li>Kriti Aggarwal (CSE, 2023): Secured placement in FIS, which offers strong career opportunities and competitive salaries.</li>
            <li>Vyom Verma (CSE, 2024): Successfully placed with uTrade, a prominent firm offering attractive packages.</li>
            <li>Anish Benjwal (CSE, 2024): Joined Edifecs, a well-regarded company in the healthcare IT space.</li>
            <li>Soumya Sharma (CSE, 2024): Placed with Kimbal Technologies, known for innovative technology solutions.</li>
            <li>Shubham Goyat (CSE, 2024): Recruited by XenonStack, a company providing excellent growth opportunities.</li>
            <li>Shivam Kumar (CSE, 2024): Joined Kimbal Technologies, which has a reputation for offering lucrative packages.</li>
            <li>Anamika Sharma (CSE, 2024): Placed with uTrade, an industry leader in financial technology.</li>
            <li>Rahul Thakur (CSE, 2023): Secured a role with Infosys (SP), a multinational company known for its competitive compensation.</li>
            <li>Shivam Jain (CSE, 2024): Hired by uTrade, demonstrating the company’s strong preference for talent from this institution.</li>
          </ul>
        </section>

        {/* ECE Placements */}
        <section className="achievement-category">
          <h3 className="font-bold text-lg  mb-2 flex items-center gap-2">
            <FaBriefcase className="text-blue-500" /> Students from ECE with Placements in Good Companies
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-900 dark:text-gray-900">
            <li>Kanishka Singh (ECE, 2023): Recruited by uTrade (QA), a top-tier company in financial technology.</li>
            <li>Anika Takkar (ECE, 2024): Secured a position with uTrade, emphasizing her strong technical skills.</li>
            <li>Rishika (ECE, 2024): Placed with Elite Safety Sciences, a reputable organization in its sector.</li>
            <li>Harshit Atri (ECE, 2023): Joined Sagacious Research, a company known for its high standards and rewarding roles.</li>
            <li>Aayushi Sharma (ECE, 2024): Hired by XenonStack, a firm with substantial opportunities in cutting-edge technologies.</li>
            <li>Kanika Gupta (ECE, 2023): Successfully placed with Sagacious Research, a top employer in intellectual property research.</li>
            <li>Divyanshu Bhardwaj (ECE, 2024): Joined GreyB, a well-known company for IP solutions.</li>
            <li>Prakhar Singh Guleria (ECE, 2024): Secured a role with Sagacious Research, a consistent recruiter from the institution.</li>
            <li>Anmol Sharma (ECE, 2024): Placed with TT Consultants, a leader in intellectual property services.</li>
            <li>Apoorv Raj (ECE, 2024): Recruited by Kimbal Tech (Hardware), a company offering premium roles in its domain.</li>
          </ul>
        </section>

        {/* Higher Studies */}
        <section className="achievement-category">
          <h3 className="font-bold text-lg text-gray-700 dark:text-gray-700 mb-2 flex items-center gap-2">
            <FaUniversity className="text-purple-500" /> Students Placed in Good Colleges after Graduation
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-900 dark:text-gray-900">
            <li>Gopal Mengi (CO, 2020): Pursuing MSc at Universität des Saarlandes, Germany.</li>
            <li>Gagandeep Mangat (CO, 2016): Secured admission for M.Tech at IIT Kanpur through GATE (AIR 202).</li>
            <li>Saksham Gupta (CO, 2016): Enrolled in PGP at the Indian School of Business, India.</li>
            <li>Shreya Attri (CO, 2016): Accepted into the MBA program at NMIMS, Bangalore, India, via CAT.</li>
            <li>Avinash Kaur Sama (CO, 2016): Pursuing M.E. CSE at UIET, Chandigarh, India, through PUCET.</li>
            <li>Abhishek Kaushik (CO, 2017): Admitted to M.Tech CS at IISC, Bangalore, India, with GATE (AIR 106).</li>
             <li>Lakshay Mittal (CO, 2017): Currently pursuing an MS in Computer Science (2022-2024) at San Francisco State University, United States.</li>
            <li>Manvi Goel (CO, 2017): Enrolled in the MBA (Analytics) program (2023-2025) at IIM Kashipur, India.</li>
            <li>Neha Garg (CO, 2017): Pursuing M.Tech at IIIT Allahabad, India.</li>
            <li>Paritosh Singh (CO, 2017): Completed an MS in Computer Science (AI, 2021-23) at the University of Southern California, United States.</li>
            <li>Ayush Kapoor (CO, 2018): Pursuing ME in Computer Engineering at the University of Waterloo, Canada.</li>
            <li>Mukesh Sahani (CO, 2018): Admitted to M.Tech CSE at IIT Dhanbad through GATE (AIR 439), India.</li>
            <li>Rashandeep Singh (CO, 2018): Enrolled in ME Computer Engineering at the University of Waterloo, Canada.</li>
            <li>Udayveer Singh (CO, 2018): Co-founder of Gane Solutions.</li>
            <li>Kaniskha Tikko (CO, 2018): Pursuing Postgraduate Management at the University of Buffalo, United States.</li>
            <li>Abhishek Sharma (CO, 2019): Accepted into M.Tech at IIIT Bangalore, India, via GATE.</li> 
          </ul>
        </section>

        {/* Other Achievements */}
        <section className="achievement-category">
          <h3 className="font-bold text-lg text-gray-700 dark:text-gray-700 mb-2 flex items-center gap-2">
            <FaUsers className="text-red-500" /> Other Notable Achievements
          </h3>
          <p className="text-sm   p-2 rounded">
            On 9th August 2023, The National Service Scheme (NSS) unit of Chandigarh College of Engineering and Technology (degree wing), organized a Plantation Drive for Medicinal Plants. As part of 'Meri Maati Mera Desh,' 75 medicinal plants were planted, nurturing both environment and community
          </p>
          <p className="text-sm  p-2 rounded">
            Apostle of Speech, the Literary and Debating Society of CCET, has once again proven its excellence in the field of debate by emerging as the champions of the IIT Kanpur Antragani Fest Parliamentary Debate Competition, held from 17th March to 20th March 2023. The team, comprising Chatenya from Mechanical Engineering 3rd year, Ishita from Computer Science Engineering 3rd year, and Raj from Computer Science Engineering 1st year, secured the coveted 1st position in the competition, showcasing their skills and knowledge of various pertinent issues.
          </p>
          <p className="text-sm  p-2 rounded">
            In addition to their team win, individual members of the Apostle of Speech team also received top honors in the competition. Ishita was awarded the Best Speaker of the competition, while Chatenya was named the Second Best Speaker. Their eloquence, wit, and astute observations set them apart from the other participants, and rightfully earned them the recognition they deserve.
          </p>
          <p className="text-sm p-2 rounded">
            Congratulations to the team and we wish them all the best for their future endeavors AOS Club is proud to announce following achievements:
          </p>
        </section>
      </div>
    </div>
  );
}

export default Achievements;
