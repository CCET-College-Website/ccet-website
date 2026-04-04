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
	const [isScrolled, setIsScrolled] = useState(false);
	const [lastUpdated, setLastUpdated] = useState("");
	const [fontSize, setFontSize] = useState("normal");
	const mobileNavRef = useRef(null);

	useEffect(() => {
		const now = new Date();
		const day = String(now.getDate()).padStart(2, "0");
		const month = String(now.getMonth() + 1).padStart(2, "0");
		const year = now.getFullYear();
		const hours = String(now.getHours()).padStart(2, "0");
		const minutes = String(now.getMinutes()).padStart(2, "0");
		const seconds = String(now.getSeconds()).padStart(2, "0");
		setLastUpdated(`${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`);
	}, []);

	useEffect(() => {
		const root = document.documentElement;
		if (fontSize === "large") {
			root.style.fontSize = "18px";
		} else if (fontSize === "small") {
			root.style.fontSize = "14px";
		} else {
			root.style.fontSize = "16px";
		}
	}, [fontSize]);

	useEffect(() => {
		fetchNavigationData();
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
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

	const formatNavigationData = (navigationData) => {
		return navigationData.map(navItem => {
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
		let positionClass = "left-1/2 -translate-x-1/2";
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
			<div className="w-full bg-white md:bg-gradient-to-r md:from-blue-900 md:to-slate-900 sticky top-0 z-50">
				<div className="flex justify-center items-center py-8">
					<span className="text-white">Loading navigation...</span>
				</div>
			</div>
		);
	}

	if (error && menuItems.length === 0) {
		return (
			<div className="w-full bg-white md:bg-gradient-to-r md:from-blue-900 md:to-slate-900 sticky top-0 z-50">
				<div className="flex justify-center items-center py-8">
					<span className="text-white">{error}</span>
				</div>
			</div>
		);
	}

	return (
		<>
			{/* Placeholder to prevent content from jumping behind fixed header */}
			<div className={`w-full transition-all duration-300 ${isScrolled ? 'h-[50px] lg:h-[60px]' : 'h-[130px] lg:h-[200px]'}`} />

			<div className="w-full bg-white md:bg-gradient-to-r md:from-blue-900 md:to-slate-900 fixed top-0 left-0 right-0 z-50 shadow-lg transition-all duration-300">
				{/* Mobile View */}
				<div className="lg:hidden w-full bg-gradient-to-r from-blue-900 to-slate-900 shadow">
					<div className={`w-full px-2 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
						<img
							src={CCETLogo}
							alt="CCET Logo"
							className={`w-auto transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'}`}
						/>

						<div className="flex-1 text-center px-2">
							<h1 className={`text-white font-serif leading-snug transition-all duration-300 ${isScrolled ? 'text-[14px]' : 'text-[16px]'}`}>
								Chandigarh College of Engineering and Technology
							</h1>

							<p className={`text-gray-300 font-serif leading-none mt-1 transition-all duration-300 ${isScrolled ? 'text-[12px]' : 'text-[14px]'}`}>
								(PU | Chandigarh)
							</p>
						</div>
						<img
							src={IndianEmblem}
							alt="Indian Emblem"
							className={`w-auto transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'}`}
						/>
					</div>

					<div className={`w-full flex justify-end pr-4 transition-all duration-300 ${isScrolled ? 'pb-2' : 'pb-3'}`}>
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
				<div className={`hidden lg:flex flex-col items-center px-2 w-full max-w-[1436px] mx-auto transition-all duration-300 ${isScrolled ? 'py-1' : 'py-3'}`}>
					{!isScrolled && (
						<div className="w-full flex items-center justify-between text-xs text-white/80 pb-1.5 mb-1 border-b border-white/20">
							<div className="flex items-center gap-2">
								<a href="#/rti" className="uppercase font-semibold tracking-wide hover:text-yellow-300 transition-colors">RTI</a>
								<span className="opacity-40">|</span>
								<a href="#/downloads" className="uppercase font-semibold tracking-wide hover:text-yellow-300 transition-colors">Downloads</a>
								<span className="opacity-40">|</span>
								<a href="#/contact" className="uppercase font-semibold tracking-wide hover:text-yellow-300 transition-colors">Contact Us</a>
								<span className="opacity-40">|</span>
								<span className="text-white/60">Last Updated: <span className="text-white/80 font-medium">{lastUpdated}</span></span>
							</div>
							<div className="flex items-center gap-2">
								<button className="w-4 h-4 rounded-sm bg-black border border-white/40 hover:border-yellow-300 transition-colors" title="High Contrast" />
								<button className="w-4 h-4 rounded-sm bg-white border border-white/40 hover:border-yellow-300 transition-colors" title="Normal Contrast" />
								<span className="opacity-40">|</span>
								<div className="flex items-center gap-1 select-none">
									<button onClick={() => setFontSize("large")} className={`font-bold leading-none hover:text-yellow-300 transition-colors text-sm ${fontSize === "large" ? "text-yellow-300" : ""}`} title="Larger text">A<sup>+</sup></button>
									<span className="opacity-40">|</span>
									<button onClick={() => setFontSize("normal")} className={`font-bold leading-none hover:text-yellow-300 transition-colors text-xs ${fontSize === "normal" ? "text-yellow-300" : ""}`} title="Normal text">A</button>
									<span className="opacity-40">|</span>
									<button onClick={() => setFontSize("small")} className={`font-bold leading-none hover:text-yellow-300 transition-colors text-[10px] ${fontSize === "small" ? "text-yellow-300" : ""}`} title="Smaller text">A<sup>-</sup></button>
								</div>
								<span className="opacity-40">|</span>
								<a href="#/academics/nirf" className="uppercase font-semibold tracking-wide hover:text-yellow-300 transition-colors">NIRF</a>
								<span className="opacity-40">|</span>
								<div className="flex items-center gap-2">
									<a href="https://www.instagram.com/ccet_degree" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors" title="Instagram">
										<svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
									</a>
									<a href="https://www.linkedin.com/school/chandigarh-college-of-engineering-technology-degree-wing-panjab-university/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors" title="LinkedIn">
										<svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
									</a>
									<a href="https://www.facebook.com/ccetofficial" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors" title="Facebook">
										<svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
									</a>
									<a href="#/contact" className="hover:text-yellow-300 transition-colors" title="Email">
										<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
									</a>
								</div>
							</div>
						</div>
					)}

					{!isScrolled && (
						<div className="flex w-full items-center justify-center gap-2 transition-all duration-300">
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
					)}

					<nav className={`w-full flex items-center relative z-50 transition-all duration-300 ${isScrolled ? 'my-0 justify-between' : '-mt-2 -mb-2 justify-center gap-3'}`}>
						{isScrolled && (
							<div className="flex items-center gap-1 select-none text-white/80 text-xs font-bold shrink-0">
								<button className="w-4 h-4 rounded-sm bg-black border border-white/40 hover:border-yellow-300 transition-colors" title="High Contrast" />
								<button className="w-4 h-4 rounded-sm bg-white border border-white/40 hover:border-yellow-300 transition-colors" title="Normal Contrast" />
								<span className="opacity-40 mx-0.5">|</span>
								<button onClick={() => setFontSize("large")} className={`hover:text-yellow-300 transition-colors text-sm leading-none ${fontSize === "large" ? "text-yellow-300" : ""}`} title="Larger text">A<sup>+</sup></button>
								<span className="opacity-40 mx-0.5">|</span>
								<button onClick={() => setFontSize("normal")} className={`hover:text-yellow-300 transition-colors text-xs leading-none ${fontSize === "normal" ? "text-yellow-300" : ""}`} title="Normal text">A</button>
								<span className="opacity-40 mx-0.5">|</span>
								<button onClick={() => setFontSize("small")} className={`hover:text-yellow-300 transition-colors text-[10px] leading-none ${fontSize === "small" ? "text-yellow-300" : ""}`} title="Smaller text">A<sup>-</sup></button>
							</div>
						)}

						{/* Nav items */}
						<div className={`flex items-center ${isScrolled ? 'gap-1' : 'gap-3'}`}>
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
										className={`cursor-pointer rounded-md font-serif whitespace-nowrap transition-all duration-200 ${isScrolled ? 'px-2 py-1 text-base' : 'px-3 py-1 text-xl'}
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
						</div>

						{isScrolled && (
							<div className="flex items-center gap-2 shrink-0 text-white/80">
								<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors" title="Instagram">
									<svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
								</a>
								<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors" title="LinkedIn">
									<svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
								</a>
								<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors" title="Facebook">
									<svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
								</a>
								<a href="mailto:info@ccet.ac.in" className="hover:text-yellow-300 transition-colors" title="Email">
									<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
								</a>
							</div>
						)}
					</nav>
				</div>

				{/* Mobile Menu */}
				{menuOpen && (
					<div className="fixed top-0 left-0 w-full h-full z-[60] bg-black bg-opacity-50">
						<div
							ref={mobileNavRef}
							className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-[70] overflow-y-auto"
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

							<div className="border-t-2 border-blue-900 mt-2">
								<div className="bg-blue-900 px-4 py-3">
									<p className="text-white/60 text-[10px] uppercase tracking-widest font-semibold mb-2">Quick Links</p>
									<div className="flex flex-wrap gap-x-3 gap-y-1">
										<a href="#/rti" className="text-white text-xs font-semibold hover:text-yellow-300 transition-colors">RTI</a>
										<span className="text-white/30 text-xs">|</span>
										<a href="#/downloads" className="text-white text-xs font-semibold hover:text-yellow-300 transition-colors">Downloads</a>
										<span className="text-white/30 text-xs">|</span>
										<a href="#/contact" className="text-white text-xs font-semibold hover:text-yellow-300 transition-colors">Contact Us</a>
										<span className="text-white/30 text-xs">|</span>
										<a href="#/academics/nirf" className="text-white text-xs font-semibold hover:text-yellow-300 transition-colors">NIRF</a>
									</div>
									<p className="text-white/50 text-[10px] mt-2">Last Updated: <span className="text-white/70">{lastUpdated}</span></p>
								</div>

								{/* Contrast + Font Size */}
								<div className="bg-gray-50 px-4 py-3 flex items-center justify-between">
									<div className="flex items-center gap-2">
										<span className="text-gray-500 text-[10px] uppercase tracking-wide font-semibold">Theme</span>
										<button className="w-5 h-5 rounded-sm bg-black border border-gray-400 hover:border-blue-700 transition-colors" title="High Contrast" />
										<button className="w-5 h-5 rounded-sm bg-white border border-gray-300 hover:border-blue-700 transition-colors" title="Normal Contrast" />
									</div>
									<div className="flex items-center gap-1 select-none">
										<span className="text-gray-500 text-[10px] uppercase tracking-wide font-semibold mr-1">Text</span>
										<button onClick={() => setFontSize("large")} className={`font-bold text-sm transition-colors ${fontSize === "large" ? "text-blue-700" : "text-gray-600 hover:text-blue-700"}`}>A<sup>+</sup></button>
										<span className="text-gray-300 mx-0.5">|</span>
										<button onClick={() => setFontSize("normal")} className={`font-bold text-xs transition-colors ${fontSize === "normal" ? "text-blue-700" : "text-gray-600 hover:text-blue-700"}`}>A</button>
										<span className="text-gray-300 mx-0.5">|</span>
										<button onClick={() => setFontSize("small")} className={`font-bold text-[10px] transition-colors ${fontSize === "small" ? "text-blue-700" : "text-gray-600 hover:text-blue-700"}`}>A<sup>-</sup></button>
									</div>
								</div>

								{/* Social Icons */}
								<div className="bg-blue-900 px-4 py-3 flex items-center justify-between">
									<p className="text-white/60 text-[10px] uppercase tracking-widest font-semibold">Follow Us</p>
									<div className="flex items-center gap-3">
										<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-yellow-300 transition-colors" title="Instagram">
											<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
										</a>
										<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-yellow-300 transition-colors" title="LinkedIn">
											<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
										</a>
										<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-yellow-300 transition-colors" title="Facebook">
											<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
										</a>
										<a href="mailto:info@ccet.ac.in" className="text-white/80 hover:text-yellow-300 transition-colors" title="Email">
											<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Header;