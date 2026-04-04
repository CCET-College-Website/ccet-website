import React, { useState, useEffect } from "react";
import "./NewAlumni.css";
import alumniBg from "../../assets/home/Events/event-bg.jpg";

const NewAlumni = () => {
	const [alumniData, setAlumniData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		fetchAlumni();
	}, []);

	useEffect(() => {
		if (alumniData.length > 0) {
			setActiveIndex(Math.floor(alumniData.length / 2));
		}
	}, [alumniData.length]);

	useEffect(() => {
		if (alumniData.length <= 1) return;

		const interval = setInterval(() => {
			setActiveIndex((prev) => {
				if (prev >= alumniData.length - 1) {
					return 0;
				}
				return prev + 1;
			});
		}, 3000);

		return () => clearInterval(interval);
	}, [alumniData.length]);

	const fetchAlumni = async () => {
		setLoading(true);
		setError(null);

		try {
			const response = await fetch('https://ccet.ac.in/api/alumni.php');
			const result = await response.json();

			if (Array.isArray(result) && result.length > 0) {
				setAlumniData(result);
			} else if (result.success === false) {
				setError(result.error || "No alumni data available");
				setAlumniData([]);
			} else {
				setError("No alumni data available");
				setAlumniData([]);
			}
		} catch (err) {
			setError("Error connecting to server");
			console.error("Fetch error:", err);
		} finally {
			setLoading(false);
		}
	};

	const handleRadioChange = (index) => {
		setActiveIndex(index);
	};

	const getFullUrl = (path) => {
		if (!path) return null;
		if (path.startsWith('http')) {
			return path;
		}
		return `https://ccet.ac.in/${path}`;
	};

	const getDefaultImage = () => {
		return "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80";
	};

	if (loading) {
		return (
			<section
				className="alumni-section position-relative text-center py-5"
				style={{
					backgroundImage: `url(${alumniBg})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					minHeight: "100vh",
				}}
			>
				<div
					className="position-absolute top-0 start-0 w-100 h-100"
					style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1 }}
				/>
				<div className="position-relative" style={{ zIndex: 2 }}>
					<h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
						Our Alumni
					</h2>
					<div className="text-white py-8">
						Loading alumni data...
					</div>
				</div>
			</section>
		);
	}

	if (error || alumniData.length === 0) {
		return (
			<section
				className="alumni-section position-relative text-center py-5"
				style={{
					backgroundImage: `url(${alumniBg})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					minHeight: "100vh",
				}}
			>
				<div
					className="position-absolute top-0 start-0 w-100 h-100"
					style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1 }}
				/>
				<div className="position-relative" style={{ zIndex: 2 }}>
					<h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
						Our Alumni
					</h2>
					<div className="text-white py-8">
						{error || "No alumni data available"}
					</div>
				</div>
			</section>
		);
	}

	const items = alumniData.length;

	return (
		<section
			className="alumni-section position-relative text-center py-5"
			style={{
				backgroundImage: `url(${alumniBg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				minHeight: "auto",
			}}
		>
			<div
				className="position-absolute top-0 start-0 w-100 h-100"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1 }}
			/>

			<div className="position-relative" style={{ zIndex: 2 }}>
				<div className="text-center m-2 p-2">
					<h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
						Our Alumni
					</h2>
				</div>
				<div className="carousel-container" style={{ gridTemplateColumns: `1fr ${alumniData.map(() => '30px').join(' ')} 1fr` }}>
					<button
						className="text-xl rounded-full text-center bg-blue-600 w-12 h-12 text-white hover:cursor-pointer hover:w-14 hover:h-14 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
						style={{ gridRow: '2 / 3', gridColumn: '1 / 2', justifySelf: 'end', marginRight: '20px' }}
						onClick={() => {
							if (activeIndex > 0) {
								setActiveIndex(activeIndex - 1);
							}
						}}
						disabled={activeIndex === 0}
					>
						&larr;
					</button>

					{Array.from({ length: items }).map((_, index) => (
						<input
							key={index}
							type="radio"
							name="position"
							checked={activeIndex === index}
							onChange={() => handleRadioChange(index)}
							style={{ gridColumn: `${index + 2} / ${index + 3}`, gridRow: '2 / 3' }}
						/>
					))}

					<button
						className="text-xl rounded-full text-center bg-blue-600 w-12 h-12 text-white hover:cursor-pointer hover:w-14 hover:h-14 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
						style={{ gridRow: '2 / 3', gridColumn: `${items + 2} / ${items + 3}`, justifySelf: 'start', marginLeft: '20px' }}
						onClick={() => {
							if (activeIndex < items - 1) {
								setActiveIndex(activeIndex + 1);
							}
						}}
						disabled={activeIndex === items - 1}
					>
						&rarr;
					</button>

					<main id="carousel" style={{
						'--position': activeIndex + 1,
						'--items': items,
						gridColumn: `1 / ${items + 3}`
					}}>
						{alumniData.map((alumni, index) => (
							<div
								key={alumni.id || index}
								className="item bg-white flex items-center rounded-lg shadow-lg border-2 border-gray-200"
								style={{
									'--offset': index + 1,
								}}
							>
								<div className="w-full max-w-sm">
									<div className="flex flex-col items-center text-center">
										<img
											className="w-32 h-32 mb-3 rounded-full object-cover shadow-md"
											src={getFullUrl(alumni.image) || getDefaultImage()}
											alt={`${alumni.name} image`}
											onError={(e) => {
												e.target.src = getDefaultImage();
											}}
										/>
										<h5 className="mb-2 text-xl font-semibold text-gray-900">
											{alumni.name}
										</h5>
										<span className="text-sm text-gray-600 font-medium">
											{alumni.work_company}
										</span>
										<span className="text-sm text-gray-500 mt-1">
											Batch: {alumni.batch_year}
										</span>
									</div>
								</div>
							</div>
						))}
					</main>
				</div>
			</div>
		</section>
	);
};

export default NewAlumni;