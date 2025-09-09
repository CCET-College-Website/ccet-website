import React from "react";

export default function VisionMission() {
  return (
    <>
   
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 shadow-2xl text-white rounded-3xl p-6 w-full max-w-5xl mt-8 mb-8 flex flex-col h-full">
        <h2 className="text-4xl font-bold text-center mb-8">VISION & MISSION</h2>
      
      <div id="vision-mission-container" className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-grow">
        {/* Vision Section */}
        <div id="vision" className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 flex flex-col">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-yellow-400 text-3xl">★</span> 
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Vision</span>
          </h3>
          <p className="text-gray-100 leading-relaxed text-lg flex-grow">
            Chandigarh College of Engineering and Technology aims to be a centre of excellence for imparting technical
            education and serving the society with self-motivated and highly competent technocrats.
          </p>
        </div>

        {/* Mission Section */}
        <div id="mission" className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 flex flex-col">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-green-400 text-3xl">📈</span>
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Mission</span>
          </h3>
          <ol className="text-gray-100 leading-relaxed space-y-3 text-lg list-decimal list-inside flex-grow">
            <li className="pl-2">To provide high quality and value-based technical education.</li>
            <li className="pl-2">
              To establish a centre of excellence in emerging and cutting-edge technologies by encouraging research
              and consultancy in collaboration with industry and organizations of repute.
            </li>
            <li className="pl-2">
              To foster a transformative learning environment for technocrats focused on inter-disciplinary knowledge;
              problem-solving; leadership, communication, and interpersonal skills.
            </li>
            <li className="pl-2">
              To imbibe the spirit of entrepreneurship and innovation for the development of enterprising leaders for
              contributing to Nation progress and Humanity.
            </li>
          </ol>
        </div>
      </div>
    </div>
    </>
  );
}