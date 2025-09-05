import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CCETLogo from '../../assets/header/CCET-Logo.png';
import IndianEmblem from '../../assets/header/Indian-Emblem.png';

// For Desktops

import AboutUsMenu from "./AboutUsMenu";
import AcademicsMenu from "./AcademicsMenu";
import StudentsSectionMenu from "./StudentsSectionMenu";
import NoticesMenu from "./NoticesMenu";
import AdmissionsMenu from "./AdmissionsMenu";
import ToggleTheme from "../ToggleTheme";



const Header = () => {
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeNav, setActiveNav] = useState('Home');
	const [expandedMenu, setExpandedMenu] = useState(null);
	const mobileNavRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
				setMenuOpen(false);
			}
		};
		if (menuOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [menuOpen]);

	// Enhanced menu items with proper routing
	const menuItems = [
		{ label: 'Home', path: '/' },
		{
			label: 'About Us',
			menu: <AboutUsMenu />,
			sections: [
				{
					title: 'About',
					links: [
						{ name: 'History', path: '/about/history' },
						{ name: 'Vision and Mission', path: '/about/vision-mission' },
						{ name: 'Campus Map', path: '/about/campus-map' },
						{ name: 'How To Reach Us', path: '/contact' }
					],
				},
				{
					title: 'Administration',
					links: [
						{ name: 'Principal', path: '/about/principal' },
						{ name: 'Officials at CCET', path: '/about/officials' },
						{ name: 'Academic Heads', path: '/about/academic-heads' },
						{ name: 'Administrator', path: '/about/administrator' }
					],
				},
				{
					title: 'Life @ CCET',
					links: [
						{ name: 'Campus Virtual Tour', path: '/life/virtual-tour' },
						{ name: 'Library', path: '/life/library' },
						{ name: 'Class Rooms', path: '/life/classrooms' },
						{ name: 'Canteen', path: '/life/canteen' },
						{ name: 'Infrastructure', path: '/life/infrastructure' },
						{ name: 'Policy on use of IT Resources', path: '/life/it-policy' },
						{ name: 'Sports Facility', path: '/life/sports' }
					],
				},
			]
		},
		{
			label: 'Academics',
			menu: <AcademicsMenu />,
			sections: [
				{
					title: 'Academic Departments',
					links: [
						{ name: 'Computer Science Engineering', path: '/academics/cse' },
						{ name: 'Mechanical Engineering', path: '/academics/me' },
						{ name: 'Electronics And Communication Engineering', path: '/academics/ece' },
						{ name: 'Civil Engineering', path: '/academics/civil' },
						{ name: 'Applied Science', path: '/academics/applied-science' }
					],
				},
				{
					title: 'Academics',
					links: [
						{ name: 'Convocation 2023', path: '/academics/convocation-2023' },
						{ name: 'Students Feedback', path: '/academics/feedback' },
						{ name: 'Examination', path: '/academics/examination' },
						{ name: 'E-Akademik', path: '/academics/e-akademik' },
						{ name: 'E-Cell', path: '/academics/e-cell' },
						{ name: 'NIRF', path: '/academics/nirf' },
						{ name: 'FAQs', path: '/faq' }
					],
				},
				{
					title: 'Mandatory Disclosure',
					links: [
						{ name: 'EoA Report 2024-25', path: '/academics/eoa-report-2024-25' },
						{ name: 'Application Part-1', path: '/academics/application-part-1' },
						{ name: 'Application Part-2', path: '/academics/application-part-2' },
						{ name: 'OLD AICTE EoAs', path: '/academics/old-aicte-eoas' }
					],
				},
				{
					title: 'Overview',
					links: [
						{ name: 'Courses Offered', path: '/courses' },
						{ name: 'Academic Calendar', path: '/academics/calendar' },
						{ name: 'Academic Prospectus', path: '/prospectus' },
						{ name: 'Affiliating University', path: 'https://puchd.ac.in/', external: true }
					],
				},
			]
		},
		{
			label: 'Students Section',
			menu: <StudentsSectionMenu />,
			sections: [
				{
					title: 'Academics',
					links: [
						{ name: 'Student Forms', path: '/student-forms' },
						{ name: 'Vidya Lakshmi (Education Loan)', path: '/vidya-lakshmi' },
						{ name: 'National Apprenticeship Training', path: '/national-apprenticeship' },
						{ name: 'Scholarships', path: '/scholarships' },
						{ name: 'Fit India', path: '/fit-india' }
					],
				},
				{
					title: 'Student Grievances Redressal System',
					links: [
						{ name: 'Grievance Portal', path: '/grievance-portal' }
					],
				},
				{
					title: 'Student Welfare',
					links: [
						{ name: 'Officials @ Student Welfare', path: '/student-welfare/officials' },
						{ name: 'Student Council', path: '/student-welfare/council' },
						{ name: 'Anti Ragging', path: '/student-welfare/anti-ragging' },
						{ name: 'Anti Ragging Committee', path: '/student-welfare/anti-ragging-committee' },
						{ name: 'Student Fee Payment (HDFC)', path: '/student-welfare/fee-payment' },
						{ name: 'Application form to be a New Voter', path: '/student-welfare/new-voter' }
					],
				},
				{
					title: 'Hostel',
					links: [
						{ name: 'Boys Hostel', path: '/hostel/boys' },
						{ name: 'Girls Hostel', path: '/hostel/girls' }
					],
				},
				{
					title: 'Events',
					links: [
						{ name: 'Student Chapters/Clubs', path: '/events/clubs' },
						{ name: 'Apratim', path: '/events/apratim' },
						{ name: 'ACM @ CCET', path: 'https://ccet.acm.org/', external: true },
						{ name: 'ASME @ CCET', path: '/events/asme' },
						{ name: 'NSS', path: '/events/nss' }
					],
				},
				{
					title: 'Sports',
					links: [
						{ name: 'Sports Facilities', path: '/sports/facilities' },
						{ name: 'Fit India Initiative', path: '/sports/fit-india' },
						{ name: 'Sports Tournaments', path: '/sports/tournaments' }
					],
				},
			]
		},
		{
			label: 'Admissions',
			menu: <AdmissionsMenu />,
			sections: [
				{
					title: 'Admissions',
					links: [
						{ name: 'Admission Notices', path: '/admissions/notices' },
						{ name: 'Help Desk', path: '/admissions/help-desk' }
					],
				},
				{
					title: 'Programmes',
					links: [
						{ name: 'Degree Course', path: '/admissions/degree-course' },
						{ name: 'Degree Course (PU-LEET)', path: '/admissions/pu-leet' },
						{ name: 'Doctorate (PhD)', path: '/admissions/phd' }
					],
				},
				{
					title: 'JAC',
					links: [
						{ name: 'Portal', path: '/admissions/jac-portal' },
						{ name: 'Counselling Schedule', path: '/admissions/counselling-schedule' },
						{ name: 'JAC Brochure 2025', path: '/admissions/jac-brochure-2025' },
						{ name: 'Opening/Closing Rank', path: '/admissions/opening-closing-rank' }
					],
				},
				{
					title: 'Criteria',
					links: [
						{ name: 'Eligibility', path: '/admissions/eligibility' }
					],
				},
			]
		},
		{ label: 'Placements', path: '/placements' },
		{
			label: 'Notices',
			menu: <NoticesMenu />,
			sections: [
				{
					title: 'Old Notices',
					links: [
						{ name: 'Forms', path: '/notices/forms' },
						{ name: 'Tenders', path: '/notices/tenders' },
						{ name: 'Online Fee Payment Link', path: '/notices/fee-payment' }
					],
				},
				{
					title: 'E-News Letters (pdf\'s)',
					links: [
						{ name: 'FingerPrint (Volume-VII, Issue I)', path: '/notices/fingerprint-vol7-i' },
						{ name: 'FingerPrint (Volume-VII, Issue II)', path: '/notices/fingerprint-vol7-ii' }
					],
				},
				{
					title: 'Detailed Info (B.E. Exams)',
					links: [
						{ name: 'Exam Notice 1', path: '/notices/exam-notice-1' },
						{ name: 'Exam Notice 2', path: '/notices/exam-notice-2' }
					],
				},
			]
		},
	];

	const toggleSubmenu = (label) => {
		if (expandedMenu === label) {
			setExpandedMenu(null);
		} else {
			setExpandedMenu(label);
		}
	};

	const handleNavigation = (item) => {
		if (item.external) {
			window.open(item.path, '_blank');
		} else {
			navigate(item.path);
		}
		setMenuOpen(false);
		setExpandedMenu(null);
	};

	// Handle main menu item clicks
	const handleMainMenuClick = (menuItem) => {
		if (menuItem.path) {
			// Direct navigation for items with paths
			navigate(menuItem.path);
			setActiveNav(menuItem.label);
			setMenuOpen(false);
		} else if (menuItem.sections) {
			// Toggle submenu for items with sections
			toggleSubmenu(menuItem.label);
		}
	};

	return (
		<div className="w-full bg-white md:bg-gradient-to-r md:from-blue-900 md:to-slate-900 relative z-50">
			{/* Mobile View */}
			<div className="lg:hidden w-full bg-gradient-to-r from-blue-900 to-slate-900 shadow">
				<div className="w-full px-4 py-3 flex items-center justify-between">
					<img src={CCETLogo} alt="CCET Logo" className="h-10 w-auto" />
					<div className="flex-1 text-center px-2">
						<h1 className="text-white text-2xl font-serif leading-tight">
							Chandigarh College of Engineering and Technology
						</h1>
						<p className="text-[20px] text-gray-300 font-serif leading-none mt-1">(PU | Chandigarh)</p>
					</div>
					<img src={IndianEmblem} alt="Indian Emblem" className="h-10 w-auto" />
				</div>

				<div className="w-full flex justify-end pb-3 pr-4">
					<button
						onClick={() => setMenuOpen(true)}
						className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-red-700 px-2.5 py-1 rounded-full shadow text-xs font-medium"
					>
						<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
						Menu
					</button>
				</div>
			</div>



			<div className="hidden lg:flex flex-col items-center px-2 py-3 w-full max-w-[1436px] mx-auto">
				<div className="flex w-full items-center justify-center gap-2">
					<div className="flex items-center h-full mx-14 min-w-[96px]">
						<img className="h-24 w-auto object-contain" src={CCETLogo} alt="College Logo" />
					</div>
					<div className="flex flex-col flex-shrink items-center px-2 w-full max-w-[900px]">
						<h1 className="font-serif text-white text-4xl text-center leading-tight">
							Chandigarh College of Engineering and Technology
						</h1>
						<h2 className="font-serif text-white text-lg text-center leading-snug mt-1 mb-2 px-2">
							(Government Institute Under Chandigarh UT Administration, Affiliated to Panjab University, Chandigarh)
						</h2>
						<div className="w-full px-4">
							<div className="max-w-4xl mx-auto border-t-2 border-white mt-2 mb-2" />
						</div>
					</div>
					<div className="flex items-center h-full mx-14 min-w-[96px]">
						<img className="h-24 w-auto object-contain" src={IndianEmblem} alt="Indian Emblem" />
					</div>
				</div>

				<nav className="w-full flex justify-center items-center gap-3 -mt-0 -mb-2 relative z-50">
					{menuItems.map(({ label, menu, path }) => (
						<div
							key={label}
							className="relative group"
							onMouseEnter={() => setActiveNav(label)}
							onMouseLeave={() => setTimeout(() => setActiveNav(''), undefined)}
						>
							<div
								className={`cursor-pointer px-3 py-1 rounded-md font-serif text-xl whitespace-nowrap transition-all duration-200
                  ${activeNav === label
									? 'bg-yellow-400 text-red-700 shadow-md'
									: 'text-white hover:bg-yellow-400 hover:text-red-700 hover:shadow-md'
								}`}
								onClick={() => path && navigate(path)}
							>
								{label}
							</div>
							{menu && activeNav === label && (
								<div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0">
									{menu}
								</div>
							)}
						</div>
						
					)) }
					
					<div className="ml-2">
                        <ToggleTheme />
                    </div>
					
				</nav>
				
			</div>

			{/* Mobile Slide Drawer */}
			{menuOpen && (
				<div className="fixed top-0 left-0 w-full h-full z-40 bg-black bg-opacity-50">
					<div
						ref={mobileNavRef}
						className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 overflow-y-auto"
					>
						<div className="p-4 border-b font-semibold text-lg bg-blue-900 text-white flex justify-between items-center">
							<span>Navigation</span>
							<button
								onClick={() => setMenuOpen(false)}
								className="text-white hover:text-yellow-300"
							>
								<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>


						{menuItems.map((menuItem) => (
							<div key={menuItem.label} className="border-b border-gray-200">
								
								<div
									className={`px-4 py-3 cursor-pointer transition-all duration-200 font-medium flex justify-between items-center
                    ${activeNav === menuItem.label ? 'bg-yellow-400 text-red-700' : 'text-gray-800 hover:bg-gray-100'}`}
									onClick={() => handleMainMenuClick(menuItem)}
								>
									<span>{menuItem.label}</span>
									{menuItem.sections && (
										<svg
											className={`w-5 h-5 transition-transform duration-200 ${expandedMenu === menuItem.label ? 'transform rotate-180' : ''}`}
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
										</svg>
									)}
								</div>

								{menuItem.sections && expandedMenu === menuItem.label && (
									<div className="bg-gray-50 pl-6 pr-4 py-2">
										{menuItem.sections.map((section, i) => (
											<div key={i} className="mb-3">
												<div className="font-semibold border-b border-gray-300 pb-1 mb-2 text-red-700 text-sm">
													{section.title}
												</div>
												<ul className="space-y-1">
													{section.links.map((link, j) => (
														<li
															key={j}
															className="hover:bg-[#FB923C] hover:text-white cursor-pointer transition-colors duration-200 px-2 py-1 rounded text-sm"
															onClick={() => handleNavigation(link)}
														>
															{link.name}
														</li>
													))}
												</ul>
											</div>
										))}
									</div>
								)}
							</div>
						))}				
								{/* Insert ThemeToggle here */}
							<div className="px-py-" >
								<ToggleTheme />
								</div>

					</div>
				</div>
			)}
			

		</div>
	);
};

export default Header;