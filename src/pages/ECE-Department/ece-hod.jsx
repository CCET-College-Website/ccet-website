import React from "react";
import bookResearch from "../../assets/ECE-Department/book_research.png";
import boxIdea from "../../assets/ECE-Department/box_idea.png";
import money from "../../assets/ECE-Department/money.png";
import paper from "../../assets/ECE-Department/paper.png";
import ECEQuickLinksSidebar from "./sidebar";
import ECEHeader from "./ece_header";

function EceHOD() {
    const stats = [
        { value: "17+", label: "Years\nof Service" },
        { value: "20", label: "Faculty\nMembers" },
        { value: "400", label: "Students" },
        { value: "100", label: "Courses\nOffered", highlight: true }
    ];
    return (
        <div className="bg-white min-h-screen font-serif">
            <ECEQuickLinksSidebar />
            <div className="relative w-full">
                <ECEHeader />
                {/* Vertically centered aside */}
                <aside className="absolute inset-y-0 right-12 flex flex-col justify-center items-center h-[32rem] py-8 z-10 space-y-6">
                    {stats.map(({ value, label, highlight }, i) => (
                        <div
                            key={i}
                            className={`flex flex-col items-center justify-center border-2 w-32 h-32 rounded-full bg-black/60 ${highlight ? "border-yellow-400" : "border-white"
                                }`}
                        >
                            <span
                                className={`text-2xl md:text-3xl font-bold ${highlight ? "text-yellow-400" : "text-yellow-400"
                                    }`}
                            >
                                {value}
                            </span>
                            <span
                                className={`text-white text-base mt-1 text-center leading-tight px-2 ${highlight ? "text-yellow-400 font-bold" : ""
                                    }`}
                                style={{ whiteSpace: "pre-line" }}
                            >
                                {label}
                            </span>
                        </div>
                    ))}
                </aside>
            </div>


            <main className="container mx-auto px-3 md:px-8 py-8">
                {/* HOD's Message */}
                <section className="md:bg-gradient-to-r md:from-blue-900 md:to-slate-900 text-white rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center mb-8">
                    <img
                        src="/images/hod.jpg"
                        alt="Dr. Davinder Singh Saini"
                        className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mr-6 mb-4 md:mb-0"
                    />
                    <div>
                        <h2 className="text-lg font-semibold">Dr. Davinder Singh Saini</h2>
                        <p>Professor &amp; Head, ECE</p>
                        <p>Email-ID: dsaini@ccet.ac.in</p>
                        <div className="mt-4 space-y-3 text-base">
                            <p>
                                With technology spreading its domain to all walks of life, there is a need to upgrade the ever-widening knowledge base. CCET has risen to the occasion, and resolves to provide talented, skilled and highly competent technical human resource to the industrial society. Education is imparted in the institute in a manner that each student realizes his responsibility at enhancing the present skills and shaping the future.
                            </p>
                            <p>
                                In its endeavour to foster an optimum blend of self-discipline and consistency, the college provides robust curriculum to attune to the scientific scenario of the industry. It commits to serve the society with versatile expertise in the field. I always strive to empower students with efforts to fulfill societal obligations with distinction. I invite all potential seekers to participate in the campus recruitment program.
                            </p>
                        </div>
                    </div>
                </section>

                {/* About Us Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">About us</h2>
                    <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-xl p-6 shadow-lg">
                        <img
                            src="/images/department-building.jpg"
                            alt="Department Building"
                            className="w-full md:w-64 h-40 object-cover rounded mb-6 md:mb-0 md:mr-8"
                        />
                        <div className="text-gray-700 space-y-3">
                            <p>
                                The Department of Electronics and Communication Engineering at Chandigarh College of Engineering and Technology (CCET) offers a comprehensive curriculum that equips students with technical knowledge in communication systems and electronic technologies.
                            </p>
                            <p>
                                Our B.E. (ECE) program has been accredited with the National Board of Accreditation (NBA), acknowledging the quality and rigour of our academic framework.
                            </p>
                            <p>
                                The B.E. (Electronics and Communication Engineering) program was granted NBA accreditation on February 12, 2025, affirming our dedication to maintaining excellence in engineering education and research.
                            </p>
                        </div>
                    </div>
                </section>

                {/* News + Photo Gallery Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                    <div className="bg-white shadow rounded-lg p-6">
                        <h2 className="font-bold text-xl border-b pb-2 mb-4">
                            News and Announcements
                        </h2>
                        <ul className="space-y-3 text-gray-700 text-base">
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-xl mb-4 border-b pb-2">
                            Photo Gallery
                        </h2>
                        <img
                            src="/images/department-building.jpg"
                            alt="Department Gallery"
                            className="rounded-lg w-full h-52 object-cover"
                        />
                    </div>
                </section>

                {/* Research Highlights Section */}
                <section className="md:bg-gradient-to-r md:from-blue-900 md:to-slate-900 text-white rounded-2xl py-10 px-5 mb-12 flex flex-col items-center">
                    <h2 className="text-3xl font-bold mb-8">
                        Research <span className="text-orange-400">Highlights</span>
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-12">
                        <div className="flex flex-col items-center">
                            {/* Publications Icon */}
                            <div className="mb-2 w-12 h-12 flex justify-center items-center">
                                <img
                                    src={bookResearch}
                                    alt="Publications"
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                            <div className="text-2xl font-bold">165</div>
                            <div className="text-base">Publications</div>
                        </div>
                        <div className="flex flex-col items-center">
                            {/* Patents Icon */}
                            <div className="mb-2 w-12 h-12 flex justify-center items-center">
                                <img
                                    src={boxIdea}
                                    alt="Patents"
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                            <div className="text-2xl font-bold">20</div>
                            <div className="text-base">Patents</div>
                        </div>
                        <div className="flex flex-col items-center">
                            {/* Funding Icon */}
                            <div className="mb-2 w-12 h-12 flex justify-center items-center">
                                <img src={money} alt="Funding" className="w-10 h-10 object-contain" />
                            </div>
                            <div className="text-2xl font-bold">20</div>
                            <div className="text-base">Funding (in Lakhs)</div>
                        </div>
                        <div className="flex flex-col items-center">
                            {/* Projects Icon */}
                            <div className="mb-2 w-12 h-12 flex justify-center items-center">
                                <img src={paper} alt="Projects" className="w-10 h-10 object-contain" />
                            </div>
                            <div className="text-2xl font-bold">50</div>
                            <div className="text-base">Projects</div>
                        </div>
                    </div>
                </section>

                {/* Programs Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Programs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl shadow flex flex-col md:flex-row items-center p-6">
                            <img
                                src="/images/banner.jpg"
                                alt="B.E. Electronics"
                                className="w-full md:w-52 h-36 object-cover rounded-lg mr-0 md:mr-6 mb-4 md:mb-0"
                            />
                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    Bachelor of Engineering in ECE
                                </h3>
                                <p className="text-gray-700">
                                    Chandigarh College of Engineering and Technology
                                </p>
                                <div className="flex space-x-4 text-gray-600 mt-2 mb-4">
                                    <span>
                                        <strong>Tuition Fee:</strong> Rs. 65,000/year
                                    </span>
                                    <span>
                                        <strong>Duration:</strong> 4 Years
                                    </span>
                                </div>
                                <button className="px-4 py-2 bg-blue-900 hover:bg-blue-700 rounded text-white text-sm font-semibold">
                                    Details
                                </button>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow flex flex-col md:flex-row items-center p-6">
                            <img
                                src="/images/phd-ece.jpg"
                                alt="PhD ECE"
                                className="w-full md:w-52 h-36 object-cover rounded-lg mr-0 md:mr-6 mb-4 md:mb-0"
                            />
                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    PhD in Electronics and Communication Engineering
                                </h3>
                                <p className="text-gray-700">
                                    Chandigarh College of Engineering and Technology
                                </p>
                                <div className="flex space-x-4 text-gray-600 mt-2 mb-4">
                                    <span>
                                        <strong>Tuition Fee:</strong> Rs. 65,000/year
                                    </span>
                                    <span>
                                        <strong>Duration:</strong> 24 Months
                                    </span>
                                </div>
                                <button className="px-4 py-2 bg-blue-900 hover:bg-blue-700 rounded text-white text-sm font-semibold">
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default EceHOD;
