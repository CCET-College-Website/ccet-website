import React, { useState, useEffect } from "react";

const CampusVirtualTour = () => {
	const [carouselImages, setCarouselImages] = useState([]);
	const [blockAImages, setBlockAImages] = useState([]);
	const [blockBImages, setBlockBImages] = useState([]);
	const [blockCImages, setBlockCImages] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const carouselResponse = await fetch(
					"https://ccet.ac.in/api/campus-tour.php?resource=carousel&is_active=true"
				);
				if (!carouselResponse.ok) throw new Error("Failed to fetch carousel");
				const carouselData = await carouselResponse.json();
				setCarouselImages(carouselData);

				const blocksResponse = await fetch(
					"https://ccet.ac.in/api/campus-tour.php?resource=blocks&is_active=true"
				);
				if (!blocksResponse.ok) throw new Error("Failed to fetch blocks");
				const blocksData = await blocksResponse.json();

				const blockA = blocksData.filter(img => img.block_name === "Block A");
				const blockB = blocksData.filter(img => img.block_name === "Block B");
				const blockC = blocksData.filter(img => img.block_name === "Block C");

				setBlockAImages(blockA);
				setBlockBImages(blockB);
				setBlockCImages(blockC);

				setLoading(false);
			} catch (err) {
				console.error("Error fetching campus tour data:", err);
				setError(err.message);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		if (carouselImages.length === 0) return;

		const interval = setInterval(() => {
			setCurrentIndex((prev) =>
				prev === carouselImages.length - 1 ? 0 : prev + 1
			);
		}, 4000);

		return () => clearInterval(interval);
	}, [carouselImages.length]);

	const prevImage = () => {
		setCurrentIndex((prev) =>
			prev === 0 ? carouselImages.length - 1 : prev - 1
		);
	};

	const nextImage = () => {
		setCurrentIndex((prev) =>
			prev === carouselImages.length - 1 ? 0 : prev + 1
		);
	};

	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
				<p className="text-xl text-gray-800 dark:text-gray-100">
					Loading Campus Tour...
				</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
				<div className="text-center">
					<p className="text-xl text-red-600 dark:text-red-400 mb-2">
						Error loading campus tour: {error}
					</p>
					<p className="text-gray-600 dark:text-gray-400">
						Please contact the administrator or try again later.
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 overflow-x-hidden">
			<main className="flex-grow px-4 py-8 w-full max-w-full">
				<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center px-2">
					Campus Virtual Tour
				</h1>
				<p className="text-base sm:text-lg text-center mb-8 sm:mb-12 px-4">
					Welcome to the virtual tour of CCET. Explore our blocks,
					classrooms, labs, and more.
				</p>

				{carouselImages.length > 0 && (
					<div className="relative max-w-5xl mx-auto px-2 sm:px-4">
						<img
							src={`https://ccet.ac.in/${carouselImages[currentIndex].image_url}`}
							alt={
								carouselImages[currentIndex].title ||
								`Campus View ${currentIndex + 1}`
							}
							className="w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] object-cover rounded-xl shadow-lg transition-opacity duration-500"
						/>

						{(carouselImages[currentIndex].title ||
							carouselImages[currentIndex].description) && (
							<div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 sm:p-4 rounded-b-xl">
								{carouselImages[currentIndex].title && (
									<h3 className="text-lg sm:text-xl font-bold">
										{carouselImages[currentIndex].title}
									</h3>
								)}
								{carouselImages[currentIndex].description && (
									<p className="text-xs sm:text-sm mt-1">
										{carouselImages[currentIndex].description}
									</p>
								)}
							</div>
						)}

						<button
							onClick={prevImage}
							className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white px-2 sm:px-4 py-2 rounded-r hover:bg-opacity-80 text-xl sm:text-2xl"
							aria-label="Previous image"
						>
							‹
						</button>
						<button
							onClick={nextImage}
							className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white px-2 sm:px-4 py-2 rounded-l hover:bg-opacity-80 text-xl sm:text-2xl"
							aria-label="Next image"
						>
							›
						</button>
					</div>
				)}
			</main>

			{blockAImages.length > 0 && (
				<section className="w-full px-4 py-8 max-w-7xl mx-auto">
					<h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Block A</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
						{blockAImages.map((img, index) => (
							<div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
								<img
									src={`https://ccet.ac.in/${img.image_url}`}
									alt={img.title || `Block A Image ${index + 1}`}
									className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
								/>
								{img.title && (
									<div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
										<p className="text-sm font-semibold">{img.title}</p>
										{img.description && (
											<p className="text-xs mt-1">{img.description}</p>
										)}
									</div>
								)}
							</div>
						))}
					</div>
				</section>
			)}

			{blockBImages.length > 0 && (
				<section className="w-full px-4 py-8 max-w-7xl mx-auto">
					<h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Block B</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
						{blockBImages.map((img, index) => (
							<div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
								<img
									src={`https://ccet.ac.in/${img.image_url}`}
									alt={img.title || `Block B Image ${index + 1}`}
									className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
								/>
								{img.title && (
									<div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
										<p className="text-sm font-semibold">{img.title}</p>
										{img.description && (
											<p className="text-xs mt-1">{img.description}</p>
										)}
									</div>
								)}
							</div>
						))}
					</div>
				</section>
			)}

			{blockCImages.length > 0 && (
				<section className="w-full px-4 py-8 max-w-7xl mx-auto">
					<h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Block C</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
						{blockCImages.map((img, index) => (
							<div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
								<img
									src={`https://ccet.ac.in/${img.image_url}`}
									alt={img.title || `Block C Image ${index + 1}`}
									className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
								/>
								{img.title && (
									<div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
										<p className="text-sm font-semibold">{img.title}</p>
										{img.description && (
											<p className="text-xs mt-1">{img.description}</p>
										)}
									</div>
								)}
							</div>
						))}
					</div>
				</section>
			)}
		</div>
	);
};

export default CampusVirtualTour;