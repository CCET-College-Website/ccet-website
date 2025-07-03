import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/20/solid";

import poster1 from "../../../../assets/Anti-Ragging/poster-1.jpg";
import poster2 from "../../../../assets/Anti-Ragging/poster-2.jpg";
import poster3 from "../../../../assets/Anti-Ragging/poster-3.jpg";
import poster4 from "../../../../assets/Anti-Ragging/poster-4.jpg";

import antiRaggingInstructions from "../../../../assets/Anti-Ragging/Anti-Ragging-Instructions.pdf";
import antiRaggingRegulations from "../../../../assets/Anti-Ragging/Anti-Ragging-Regulations.pdf";
import antiRaggingAffidavitReg from "../../../../assets/Anti-Ragging/Anti-Ragging-Affidavit-Reg.pdf";
import annexure1 from "../../../../assets/Anti-Ragging/Annexure-I.pdf";
import annexure1st from "../../../../assets/Anti-Ragging/Annexure-I-1st.pdf";
import annexure2nd from "../../../../assets/Anti-Ragging/Annexure-I-2nd.pdf";
import annexure3rd from "../../../../assets/Anti-Ragging/Annexure-I-3rd.pdf";
const AntiRagging = () => {
  return (
    <div className="px-4 md:px-16 py-10 max-w-6xl mx-auto">
      
      {/* Posters */}
      <div className="overflow-x-hidden w-full mb-10 relative">
        <div className="flex gap-6 animate-scroll-x">
          {
            [...[poster1, poster2, poster3, poster4], ...[poster1, poster2, poster3, poster4]].map(
              (poster, index) => (
                <div
                  key={index}
                  className="w-40 sm:w-48 md:w-56 flex-shrink-0 rounded shadow hover:shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={poster}
                    alt={`Poster ${index + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              )
            )
          }
        </div>
        <style>{`
          @keyframes scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-x {
            animation: scroll-x 25s linear infinite;
          }
          /* Hide scrollbars for all browsers */
          .overflow-x-hidden::-webkit-scrollbar {
            display: none;
          }
          .overflow-x-hidden {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;     /* Firefox */
          }
        `}</style>
      </div>

      {/* Main Info Text */}
      <div className="space-y-6 text-justify leading-relaxed text-gray-800">
        <h2 className="text-xl md:text-2xl font-bold">Online Affidavit on Anti-Ragging</h2>
        <p>
          As per the various orders and Judgments of the Supreme Court of India and hence the directions from the UGC and Ministry of Education, being an Institute of Higher Education, CCET has put in place several measures to curb Ragging.{" "}
          <strong>CCET has zero tolerance towards ragging. Ragging is a criminal offence and is strictly forbidden.</strong>
        </p>
        <p>
          As per the orders of the SC and hence the previous direction from the UGC, every registered student and her/his parents were to physically sign an undertaking affidavit in the format provided by the UGC. This used to be a mandatory exercise at the time of your registration. However, recently, as per the new guidelines of the UGC, the filing of the affidavit, by all existing students of the institute, has been made an online process.
        </p>
        <p>
          Successful registration on the UGC's online portal gives each student a unique Reference ID for recording and later use, when required. As filing the affidavit is MANDATORY by order, we urge you all to <strong>follow the detailed instructions given below</strong> and file the anti-ragging affidavit at your earliest convenience.
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1 break-words">
          <li>
            Visit the dedicated Anti Ragging Website by clicking:{" "}
            <a
              href="https://antiragging.in/"
              className="text-blue-600 underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://antiragging.in/
            </a>
          </li>
          <li>Click on the tab "Form" and "Register For Undertaking"</li>
          <li>
            Or both combined link is:{" "}
            <a
              href="https://antiragging.in/affidavit_registration_disclaimer.html"
              className="text-blue-600 underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://antiragging.in/affidavit_registration_disclaimer.html
            </a>
          </li>
          <li>You will be directed to the page "You are going to fill an Affidavit for Anti Ragging"</li>
          <li>Choose the "College" tab and start filling the self-explanatory fields in the online filling page</li>
          <li>After filling the form in complete click on "Submit Form"</li>
        </ul>

        <p className="font-semibold">
          The following information on institute is <u>required while filling</u> the undertaking form:
        </p>
        <ul className="list-decimal list-inside ml-4 space-y-1">
          <li>
            <strong>Name of the college Director:</strong> Dr. Manpreet Singh
          </li>
          <li>
            <strong>University Phone No.:</strong> 0172 275 0943
          </li>
          <li>
            <strong>Nearest police station:</strong> Police Station –26, Sector 26, Chandigarh
          </li>
          <li>
            <strong>National Anti-Ragging Helpline:</strong> 1800 180 5522
          </li>
        </ul>

        <p>
          After successful submission and hence reference ID has been generated. You are requested to{" "}
          <strong>note the auto generated reference number</strong> and submit the pdf file to faculty advisor for record keeping by the Institute.
        </p>

        <p className="text-lg font-semibold">
          Anti Ragging Instructions :-{" "}
          <a
            href={antiRaggingInstructions}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline ml-2"
          >
            Click Here
          </a>
        </p>
      </div>

      {/* Supreme Court Box */}
      <div className="bg-gray-200 border border-gray-300 rounded-xl shadow-md p-6 mt-10">
        <h2 className="text-lg md:text-xl font-semibold mb-2 inline-block border-b border-blue-600">
  Supreme Court & UGC regulations link :
        </h2>
        <ul className="list-none text-sm space-y-2 text-blue-700 mt-4">
          <li>
            <a
              href={antiRaggingRegulations}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Anti-Ragging Regulations
            </a>
          </li>
          <li>
            <a
              href={antiRaggingAffidavitReg}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Anti Ragging Affidavit-reg
            </a>
          </li>
          <li>
            <a href={annexure1} target="_blank" rel="noopener noreferrer" className="hover:underline">
              Annexure-I.pdf
            </a>
          </li>
          <li>
            <a href={annexure1st} target="_blank" rel="noopener noreferrer" className="hover:underline">
              Annexure-I-1st.pdf
            </a>
          </li>
          <li>
            <a href={annexure2nd} target="_blank" rel="noopener noreferrer" className="hover:underline">
              Annexure-I-2nd.pdf
            </a>
          </li>
          <li>
            <a href={annexure3rd} target="_blank" rel="noopener noreferrer" className="hover:underline">
              Annexure-I-3rd.pdf
            </a>
          </li>
        </ul>
      </div>



      {/* National Helpline */}
      <div className="text-center mt-10 text-gray-800">
        <p className="text-lg font-semibold">National Anti-Ragging Helpline :</p>
        <div className="flex justify-center items-center gap-2 mt-2">
          <PhoneIcon className="w-5 h-5 text-blue-700" />
          <p>1800-180-5522</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <EnvelopeIcon className="w-5 h-5 text-blue-700" />
          <p>helpline@antiragging.in</p>
        </div>
       
      </div>
      
    </div>
  );
};

export default AntiRagging;
