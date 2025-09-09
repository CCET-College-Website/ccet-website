import React from 'react'
import ECEHeader from './ece_header';
import ECEQuickLinksSidebar from './sidebar';

const EceLabs = () => {
  return (
    <div>
      <ECEHeader />
      <ECEQuickLinksSidebar />
      <div className="bg-white min-h-screen flex flex-col items-center px-6 py-12">
        {/* Heading with blue lines */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="block w-8 h-0.5 bg-blue-900"></span>
          <h2 className="text-2xl font-bold text-gray-800">Laboratories</h2>
          <span className="block w-8 h-0.5 bg-blue-900"></span>
        </div>

        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full mb-12">
          {/* Photo */}
          <div className="flex items-center justify-center">
            <div className="w-64 h-72 bg-gray-300 rounded-md flex items-center justify-center">
              <span className="text-gray-700">photo</span>
            </div>
          </div>

          {/* Description */}
          <div className="bg-[#1F3A93] text-white rounded-xl shadow-lg p-6 text-sm leading-relaxed text-justify">
            <h3 className="text-base font-semibold mb-2">
              ANALOG & DIGITAL ELECTRONICS LAB
            </h3>
            <p>
              This lab aims at familiarizing the student with the various along
              communication techniques viz. Amplitude modulation, Frequency
              modulation and Phase Modulation etc. AM receiver kit is used for
              demonstration of the receiver parameters viz. sensitivity selectivity
              and fidelity. A kit for familiarization with phased lock loop (PLL)
              is also head. As at present mostly the data transmission is done by
              digital means, knowledge of these methods is very useful for
              engineering students. In this lab various data communication
              techniques like analog (AM, FM & PM) and digital (ASK, FSK, PSK &
              QPSK) are analyzed practically. Introduction to various media types
              for data transmission are also given in this lab. In communication
              lab techniques transmit data digitally are taught. We have
              MATLAB(SIMULINK)/ COMSIM software for digital link simulation, for
              error introduction & error estimation in digital link. In this lab
              we have various equipment to teach the students the basics concepts
              of digital electronics. To study logic gates we have TTL logic gates
              7400, 7402, 7408, 7432,7486, 74150 demultiplexer kits. Other than
              this IC–7483, 7476 JK Flipflops and 7474 D FlipFlops and Johnson
              counters.
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
          {/* Description */}
          <div className="bg-[#09142A] text-white rounded-xl shadow-lg p-6 text-sm leading-relaxed text-justify">
            <h3 className="text-base font-semibold mb-2">
              MICROPROCESSOR AND ADVANCED MICROPROCESSOR LAB
            </h3>
            <p>
              The lab is fully equiped with kits of 8085/8086. Interfacing cards
              like ADC, DAC, dc motor, Traffic light Control, Stepper motors kits
              of various interfacing devices like 8255 (PPI), 8259 (Interrupt
              Controller), 8279 (keyboard controller) & 8237 (DMA Controller).
            </p>
          </div>

          {/* Photo */}
          <div className="flex items-center justify-center">
            <div className="w-64 h-72 bg-gray-300 rounded-md flex items-center justify-center">
              <span className="text-gray-700">photo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EceLabs;