import React, { useState, useEffect, useRef } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon, GlobeAltIcon, XMarkIcon } from "@heroicons/react/24/outline";

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
          .overflow-x-hidden::-webkit-scrollbar {
            display: none;
          }
          .overflow-x-hidden {
            -ms-overflow-style: none;
            scrollbar-width: none;
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
            <a href={antiRaggingRegulations} target="_blank" rel="noopener noreferrer" className="hover:underline">
              Anti-Ragging Regulations
            </a>
          </li>
          <li>
            <a href={antiRaggingAffidavitReg} target="_blank" rel="noopener noreferrer" className="hover:underline">
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

      <FloatHelpWidget />
    </div>
  );
};

function FloatHelpWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition-colors"
        >
          <span className="font-semibold">Quick Help</span>
        </button>
      )}

      {isOpen && (
        <div
          ref={widgetRef}
          className="w-80 bg-white border-2 border-blue-600 rounded-lg shadow-xl p-4 text-sm max-h-[90vh] overflow-y-auto"
        >
          <h3 className="text-base font-bold mb-2">
            National Anti-Ragging Helpline
          </h3>
          <p className="mb-1 text-red-700 font-semibold">24×7 Toll Free</p>
          <div className="mb-2 flex items-center gap-2">
            <PhoneIcon className="w-4 h-4 text-blue-600" />
            <span>1800-180-5522</span>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <EnvelopeIcon className="w-4 h-4 text-blue-600" />
            <a
              href="mailto:helpline@antiragging.in"
              className="text-blue-600 hover:underline break-all"
            >
              helpline@antiragging.in
            </a>
          </div>
          <div className="mb-4 flex items-center gap-2">
            <GlobeAltIcon className="w-4 h-4 text-blue-600" />
            <a
              href="https://www.antiragging.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline break-all"
            >
              www.antiragging.in
            </a>
          </div>

          <hr className="border-t border-blue-300 my-3" />

          <h4 className="text-base font-bold mb-1">UGC Monitoring Agency</h4>
          <p className="mb-1">Centre for Youth (C4Y)</p>
          <div className="mb-2 flex items-center gap-2">
            <EnvelopeIcon className="w-4 h-4 text-blue-600" />
            <a
              href="mailto:antiragging@c4yindia.org"
              className="text-blue-600 hover:underline break-all"
            >
              antiragging@c4yindia.org
            </a>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <GlobeAltIcon className="w-4 h-4 text-blue-600" />
            <a
              href="https://www.c4yindia.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline break-all"
            >
              www.c4yindia.org
            </a>
          </div>
          <div className="mb-4 flex items-center gap-2">
            <PhoneIcon className="w-4 h-4 text-blue-600" />
            <span>+91 98180 44577</span>
          </div>

          <hr className="border-t border-blue-300 my-3" />

          <h4 className="text-base font-bold mb-1">Important Helplines</h4>

          <div className="mb-2">
            <p className="font-medium">Professor‑in‑Charge Student Welfare</p>
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-blue-600" />
              <span>+91 98181 82457</span>
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="w-4 h-4 text-blue-600" />
              <a
                href="mailto:psw@ccet.ac.in"
                className="text-blue-600 hover:underline break-all"
              >
                psw@ccet.ac.in
              </a>
            </div>
          </div>

          <div className="mb-2">
            <p className="font-medium">Joint‑in‑Charge Student Welfare</p>
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-blue-600" />
              <span>+91 80549 77561</span>
            </div>
          </div>

          <div className="mb-2">
            <p className="font-medium">Head of Office</p>
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-blue-600" />
              <span>0172-275-0943</span>
            </div>
          </div>

          <div className="mb-4">
            <p className="font-medium">In‑charge Security</p>
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-blue-600" />
              <span>+91 62845 61607</span>
            </div>
          </div>

          <blockquote className="border-l-4 border-red-600 pl-4 italic text-xs text-red-700 mb-4">
            RAGGING IS A CRIMINAL OFFENCE AND THE CULPRITS WILL ATTRACT PUNITIVE
            ACTION AS MENTIONED IN THE UGC REGULATIONS.
          </blockquote>

          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-1 text-sm text-red-600 hover:text-red-700 font-medium"
          >
            <XMarkIcon className="w-4 h-4" /> Close
          </button>

          <style>{`
            .overflow-y-auto::-webkit-scrollbar {
              width: 6px;
            }
            .overflow-y-auto::-webkit-scrollbar-thumb {
              background-color: #3B82F6;
              border-radius: 9999px;
            }
            .overflow-y-auto::-webkit-scrollbar-track {
              background: #f1f1f1;
            }
          `}</style>
        </div>
      )}
    </div>
  );
}

export default AntiRagging;
