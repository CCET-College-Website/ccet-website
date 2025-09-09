//CampusVirtualTour.jsx
import React, { useState, useEffect } from "react";

import img1 from "../assets/campus-virtual-tour/carousel/block a.jpg";
import img2 from "../assets/campus-virtual-tour/carousel/gate 1.jpg";
import img3 from "../assets/campus-virtual-tour/carousel/gate 2.jpg";
import img4 from "../assets/campus-virtual-tour/carousel/img4.jpg";
import img5 from "../assets/campus-virtual-tour/carousel/img5.jpg";
import img6 from "../assets/campus-virtual-tour/carousel/img6.jpg";
import img7 from "../assets/campus-virtual-tour/carousel/img7.jpg";
import img8 from "../assets/campus-virtual-tour/carousel/img8.jpg";
import SnapGallery from "../components/SnapGallery";

// Block A
import img17 from "../assets/campus-virtual-tour/block a/ablk1.jpg";
import img18 from "../assets/campus-virtual-tour/block a/ablk2.jpg";
import img19 from "../assets/campus-virtual-tour/block a/ablk3.jpg";
import img20 from "../assets/campus-virtual-tour/block a/ablk4.jpg";
import img21 from "../assets/campus-virtual-tour/block a/ablk5.jpg";
import img22 from "../assets/campus-virtual-tour/block a/ablk6.jpg";
import img23 from "../assets/campus-virtual-tour/block a/ablk7.jpg";
import img24 from "../assets/campus-virtual-tour/block a/ablk8.jpg";

// Block B
import img9 from "../assets/campus-virtual-tour/block b/blk1.jpg";
import img10 from "../assets/campus-virtual-tour/block b/blk2.jpg";
import img11 from "../assets/campus-virtual-tour/block b/blk3.jpg";
import img12 from "../assets/campus-virtual-tour/block b/blk4.jpg";
import img13 from "../assets/campus-virtual-tour/block b/blk5.jpg";
import img14 from "../assets/campus-virtual-tour/block b/blk6.jpg";
import img15 from "../assets/campus-virtual-tour/block b/blk7.jpg";
import img16 from "../assets/campus-virtual-tour/block b/blk8.jpg";

// Block c
import img27 from "../assets/campus-virtual-tour/block c/cblk1.jpg";
import img28 from "../assets/campus-virtual-tour/block c/cblk2.jpg";
import img29 from "../assets/campus-virtual-tour/block c/cblk3.jpg";
import img30 from "../assets/campus-virtual-tour/block c/cblk4.jpg";
import img31 from "../assets/campus-virtual-tour/block c/cblk5.jpg";
import img32 from "../assets/campus-virtual-tour/block c/cblk6.jpg";
import img33 from "../assets/campus-virtual-tour/block c/cblk7.jpg";
import img34 from "../assets/campus-virtual-tour/block c/cblk8.jpg";

const CampusVirtualTour = () => {
	const images = [img1, img2, img3, img4, img5, img6, img7, img8];
	const [currentIndex, setCurrentIndex] = useState(0);

	const blockAImages = [
		img17,
		img18,
		img19,
		img20,
		img21,
		img22,
		img23,
		img24,
	];
	const blockBImages = [
		img9,
		img10,
		img11,
		img12,
		img13,
		img14,
		img15,
		img16,
	];
	const blockCImages = [
		img27,
		img28,
		img29,
		img30,
		img31,
		img32,
		img33,
		img34,
	];

	// Auto-scroll every 4 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) =>
				prev === images.length - 1 ? 0 : prev + 1
			);
		}, 4000); // 4000ms = 4 seconds

		return () => clearInterval(interval); // Cleanup on unmount
	}, [images.length]);

	const prevImage = () => {
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const nextImage = () => {
		setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	return (
		<div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
			<main className="flex-grow px-4 py-8">
				<h1 className="text-4xl font-bold mb-6 text-center">
					Campus Virtual Tour
				</h1>
				<p className="text-lg text-center mb-12">
					Welcome to the virtual tour of CCET. Explore our blocks,
					classrooms, labs, and more.
				</p>

				{/* Carousel */}
				<div className="relative max-w-5xl mx-auto">
					<img
						src={images[currentIndex]}
						alt={`Campus View ${currentIndex + 1}`}
						className="w-full h-[32rem] object-cover rounded-xl shadow-lg transition-opacity duration-500"
					/>

					{/* Navigation Buttons */}
					<button
						onClick={prevImage}
						className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white px-4 py-2 rounded-r hover:bg-opacity-80"
					>
						‹
					</button>
					<button
						onClick={nextImage}
						className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white px-4 py-2 rounded-l hover:bg-opacity-80"
					>
						›
					</button>
				</div>
			</main>

			<SnapGallery images={blockAImages} blockName="Block A" />
			<SnapGallery images={blockBImages} blockName="Block B" />
			<SnapGallery images={blockCImages} blockName="Block C" />
		</div>
	);
};

export default CampusVirtualTour;
