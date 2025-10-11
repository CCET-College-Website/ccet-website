import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import CCETLogo from "../../assets/header/ccetLogo.png";
import IndianEmblem from "../../assets/header/Indian-Emblem.png";

const Header = () => {
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeNav, setActiveNav] = useState("Home");
	const [expandedMenu, setExpandedMenu] = useState(null);
	const [menuItems, setMenuItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const mobileNavRef = useRef(null);

	useEffect(() => {
		fetchNavigationData();
	}, []);

	const fetchNavigationData = async () => {
		setLoading(true);
		setError(null);

		try {
			const response = await fetch('https://ccet.ac.in/api/header.php?endpoint=full-navigation');
			const result = await response.json();

			if (result.navigation && result.navigation.length > 0) {
				const formattedMenuItems = formatNavigationData(result.navigation);
				setMenuItems(formattedMenuItems);
			} else {
				setError("No navigation data available");
				setMenuItems([]);
			}
		} catch (err) {
			setError("Error loading navigation");
			console.error("Navigation fetch error:", err);
			setMenuItems([]);
		} finally {
			setLoading(false);
		}
	};

	// Transform API data to match the component's expected format
	const formatNavigationData = (navigationData) => {
		return navigationData.map(navItem => {
			// If nav item has no submenus, it's a direct link
			if (!navItem.submenus || navItem.submenus.length === 0) {
				return {
					label: navItem.nav_name,
					path: navItem.nav_path || "/",
					external: navItem.nav_path?.startsWith('http')
				};
			}

			const sections = navItem.submenus.map(submenu => ({
				title: submenu.submenu_name,
				links: submenu.tabs.map(tab => ({
					name: tab.tab_name,
					path: tab.tab_path,
					url: tab.tab_path,
					external: tab.is_external,
					pdfs: tab.pdfs || []
				}))
			}));

			return {
				label: navItem.nav_name,
				sections: sections,
			};
		});
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				mobileNavRef.current &&
				!mobileNavRef.current.contains(event.target)
			) {
				setMenuOpen(false);
			}
		};
		if (menuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [menuOpen]);

	const toggleSubmenu = (label) => {
		if (expandedMenu === label) {
			setExpandedMenu(null);
		} else {
			setExpandedMenu(label);
		}
	};

	const handleNavigation = (item) => {
		if (item.external || item.url?.startsWith('http') || item.path?.startsWith('http')) {
			window.open(item.path || item.url, "_blank");
		} else {
			navigate(item.path || item.url);
		}
		setMenuOpen(false);
		setExpandedMenu(null);
	};

	const handleMainMenuClick = (menuItem) => {
		if (menuItem.path) {
			if (menuItem.external) {
				window.open(menuItem.path, "_blank");
			} else {
				navigate(menuItem.path);
			}
			setActiveNav(menuItem.label);
			setMenuOpen(false);
		} else if (menuItem.sections) {
			toggleSubmenu(menuItem.label);
		}
	};

	const renderDropdownMenu = (sections, label) => {
		// Different positioning for different menus
		let positionClass = "left-1/2 -translate-x-1/2"; // default center
		let gridCols = "grid-cols-3";

		if (label === "About Us") {
			positionClass = "-left-30 -translate-x-[11%]";
			gridCols = "grid-cols-3";
		} else if (label === "Admissions") {
			positionClass = "left-1/2 -translate-x-[30%]";
			gridCols = "grid-cols-4";
		} else if (label === "Academics") {
			positionClass = "left-1/2 -translate-x-[45%]";
			gridCols = "grid-cols-4";
		} else if (label === "Students Section") {
			positionClass = "left-1/2 -translate-x-[60%]";
			gridCols = "grid-cols-3";
		} else if (label === "Notices") {
			positionClass = "left-1/2 -translate-x-[93%]";
			gridCols = "grid-cols-1 md:grid-cols-3";
		}

		return (
			<div className={`absolute top-full ${positionClass} transform overflow-x-auto hidden group-hover:grid ${gridCols} bg-white/70 backdrop-blur-md shadow-xl z-50 p-6 gap-6 text-1xl text-gray-800 rounded-lg border border-gray-100 min-w-[1000px] max-w-[90vw]`}>
				{sections.map((section, i) => (
					<div key={i}>
						<div className="font-semibold border-b border-gray-200 pb-2 mb-3 text-red-700">
							{section.title}
						</div>
						<ul className="space-y-2">
							{section.links.map((link, idx) => (
								<li
									key={idx}
									className="hover:bg-[#FB923C] hover:text-white cursor-pointer transition-colors duration-200 px-2 py-1 rounded"
								>
									{(link.external || link.url?.startsWith('http') || link.path?.startsWith('http')) ? (
										<a
											href={link.path || link.url}
											target="_blank"
											rel="noopener noreferrer"
											className="block w-full"
										>
											{link.name}
										</a>
									) : (
										<Link to={link.path || link.url} className="block w-full">
											{link.name}
										</Link>
									)}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		);
	};

	if (loading) {
		return (
			<div className="w-full bg-white md:bg-gradient-to-r md:from-blue-900 md:to-slate-900 relative z-50">
				<div className="flex justify-center items-center py-8">
					<span className="text-white">Loading navigation...</span>
				</div>
			</div>
		);
	}

	if (error && menuItems.length === 0) {
		return (
			<div className="w-full bg-white md:bg-gradient-to-r md:from-blue-900 md:to-slate-900 relative z-50">
				<div className="flex justify-center items-center py-8">
					<span className="text-white">{error}</span>
				</div>
			</div>
		);
	}

	return (
		<div className="w-full bg-white md:bg-gradient-to-r md:from-blue-900 md:to-slate-900 relative z-50">
			<div className="lg:hidden w-full bg-gradient-to-r from-blue-900 to-slate-900 shadow">
				<div className="w-full px-2 py-3 flex items-center justify-between">
					<img
						src={CCETLogo}
						alt="CCET Logo"
						className="h-16 w-auto"
					/>

					<div className="flex-1 text-center px-2">
						<h1 className="text-white text-[16px] font-serif leading-snug">
							Chandigarh College of Engineering and Technology
						</h1>

						<p className="text-[14px] text-gray-300 font-serif leading-none mt-1">
							(PU | Chandigarh)
						</p>
					</div>
					<img
						src={IndianEmblem}
						alt="Indian Emblem"
						className="h-16 w-auto"
					/>
				</div>

				<div className="w-full flex justify-end pb-3 pr-4">
					<button
						onClick={() => setMenuOpen(true)}
						className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-red-700 px-2.5 py-1 rounded-full shadow text-xs font-medium"
					>
						<svg
							className="w-3 h-3"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
						Menu
					</button>
				</div>
			</div>

			{/* Desktop View */}
			<div className="hidden lg:flex flex-col items-center px-2 py-3 w-full max-w-[1436px] mx-auto">
				<div className="flex w-full items-center justify-center gap-2">
					<div className="flex items-center h-full mx-14 min-w-[96px]">
						<img
							className="h-36 w-auto object-contain"
							src={CCETLogo}
							alt="College Logo"
						/>
					</div>
					<div className="flex flex-col flex-shrink items-center px-2 w-full max-w-[900px]">
						<h1 className="font-serif text-white text-4xl text-center leading-tight">
							Chandigarh College of Engineering and Technology
						</h1>
						<h2 className="font-serif text-white text-lg text-center leading-snug mt-1 mb-2 px-2">
							(Government Institute Under Chandigarh UT
							Administration, Affiliated to Panjab University,
							Chandigarh)
						</h2>
						<div className="w-full px-4">
							<div className="max-w-4xl mx-auto border-t-2 border-white mt-2 mb-2" />
						</div>
					</div>
					<div className="flex items-center h-full mx-14 min-w-[96px]">
						<img
							className="h-34 w-auto object-contain"
							src={IndianEmblem}
							alt="Indian Emblem"
						/>
					</div>
				</div>

				<nav className="w-full flex justify-center items-center gap-3 -mt-0 -mb-2 relative z-50">
					{menuItems.map((menuItem) => (
						<div
							key={menuItem.label}
							className="relative group"
							onMouseEnter={() => setActiveNav(menuItem.label)}
							onMouseLeave={() =>
								setTimeout(() => setActiveNav(""), undefined)
							}
						>
							<div
								className={`cursor-pointer px-3 py-1 rounded-md font-serif text-xl whitespace-nowrap transition-all duration-200
                  ${
									activeNav === menuItem.label
										? "bg-yellow-400 text-red-700 shadow-md"
										: "text-white hover:bg-yellow-400 hover:text-red-700 hover:shadow-md"
								}`}
								onClick={() => {
									if (menuItem.path) {
										if (menuItem.external) {
											window.open(menuItem.path, "_blank");
										} else {
											navigate(menuItem.path);
										}
									}
								}}
							>
								{menuItem.label}
							</div>
							{menuItem.sections && activeNav === menuItem.label &&
								renderDropdownMenu(menuItem.sections, menuItem.label)
							}
						</div>
					))}
				</nav>
			</div>

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
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>

						{menuItems.map((menuItem) => (
							<div
								key={menuItem.label}
								className="border-b border-gray-200"
							>
								<div
									className={`px-4 py-3 cursor-pointer transition-all duration-200 font-medium flex justify-between items-center
                    ${
										activeNav === menuItem.label
											? "bg-yellow-400 text-red-700"
											: "text-gray-800 hover:bg-gray-100"
									}`}
									onClick={() =>
										handleMainMenuClick(menuItem)
									}
								>
									<span>{menuItem.label}</span>
									{menuItem.sections && (
										<svg
											className={`w-5 h-5 transition-transform duration-200 ${
												expandedMenu === menuItem.label
													? "transform rotate-180"
													: ""
											}`}
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									)}
								</div>

								{menuItem.sections &&
									expandedMenu === menuItem.label && (
										<div className="bg-gray-50 pl-6 pr-4 py-2">
											{menuItem.sections.map(
												(section, i) => (
													<div
														key={i}
														className="mb-3"
													>
														<div className="font-semibold border-b border-gray-300 pb-1 mb-2 text-red-700 text-sm">
															{section.title}
														</div>
														<ul className="space-y-1">
															{section.links.map(
																(link, j) => (
																	<li
																		key={j}
																		className="hover:bg-[#FB923C] hover:text-white cursor-pointer transition-colors duration-200 px-2 py-1 rounded text-sm"
																		onClick={() =>
																			handleNavigation(
																				link
																			)
																		}
																	>
																		{
																			link.name
																		}
																	</li>
																)
															)}
														</ul>
													</div>
												)
											)}
										</div>
									)}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Header;