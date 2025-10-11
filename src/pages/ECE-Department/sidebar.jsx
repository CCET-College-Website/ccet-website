import React, { useState } from "react";
import { Link } from "react-router-dom";

const quickLinks = [
	{ label: "Overview", path: "/ece" },
	{ label: "HOD Desk", path: "/ece/ece-hod" },
	{ label: "Faculty", path: "/ece/ece-faculty" },
	{ label: "Time Table", path: "/ece/timetable" },
	{ label: "Syllabus", path: "/ece/ece-syllabus" },
	{ label: "Laboratories", path: "/ece/ece-labs" },
	{ label: "Research", path: "/ece/research" },
];

export default function ECEQuickLinksSidebar() {
	const [open, setOpen] = useState(true);

	return (
		<>
			{/* Sidebar (small height, centered vertically) */}
			<div
				className={`fixed left-0 top-1/2 -translate-y-1/2 md:bg-gradient-to-r md:from-blue-900 md:to-slate-900/90 md:backdrop-blur-md rounded-r-xl text-[#f5f8ff] z-[1500] flex flex-col transition-all duration-300 ease-in-out ${
					open ? "w-[170px] h-[340px]" : "w-0 h-[340px]"
				}`}
				style={{ boxShadow: "2px 0 7px rgb(208 216 238 / 0.14)" }}
			>
				{/* Links List */}
				{open && (
					<nav className="mt-2 flex flex-col overflow-y-auto">
						{quickLinks.map((link) => (
							<Link
								key={link.label}
								to={link.path}
								className="block px-4 py-2 border-b border-[#1a3d5a] rounded-r-xl text-base font-medium hover:bg-[#24476a9f] transition-colors truncate"
								title={link.label}
							>
								{link.label}
							</Link>
						))}
					</nav>
				)}
			</div>

			{/* Toggle Button (sticks to sidebar edge) */}
			<button
				onClick={() => setOpen(!open)}
				aria-label={open ? "Hide Quick Links" : "Show Quick Links"}
				title={open ? "Hide Quick Links" : "Show Quick Links"}
				className="fixed top-1/2 -translate-y-1/2 left-[170px] bg-blue-800 text-white rounded-lg border border-gray-300 shadow-md px-3 py-1.5 font-semibold text-sm cursor-pointer select-none flex items-center gap-1 z-[1600]"
				style={{
					transform: open
						? "translateY(-50%) translateX(0)"
						: "translateY(-50%) translateX(-170px)",
					transition: "transform 0.3s ease-in-out",
				}}
			>
				<span
					className={`transition-transform duration-300 ${
						open ? "rotate-180" : "rotate-0"
					}`}
				>
					«
				</span>
				Quick Links
			</button>
		</>
	);
}
