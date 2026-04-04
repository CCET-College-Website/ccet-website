import React, { useEffect, useState } from "react";

export default function VisionMission() {
	const [visionMissionData, setVisionMissionData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch("https://ccet.ac.in/api/vission-mission.php")
			.then((response) => {
				if (!response.ok)
					throw new Error("Network response was not ok");
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setVisionMissionData(data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message || "Failed to fetch data");
				setLoading(false);
			});
	}, []);
	if (loading) {
		return <div>Loading Vision Mission data...</div>;
	}

	if (error) {
		return <div>Error loading Vision Mission data: {error}</div>;
	}
	return (
		<>
			<div className="bg-gradient-to-r from-blue-900 to-slate-900 shadow-2xl text-white rounded-3xl p-6 w-full max-w-5xl mt-8 mb-8 flex flex-col h-full">
				<h2 className="text-4xl font-bold text-center mb-8">
					VISION & MISSION
				</h2>

				<div
					id="vision-mission-container"
					className="grid grid-cols-1 gap-8 flex-grow"
				>
					{/* Vision Section */}
					<div
						id="vision"
						className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 flex flex-col"
					>
						<h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
							<span className="text-yellow-400 text-3xl">★</span>
							<span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
								Vision
							</span>
						</h3>
						<p className="text-gray-100 leading-relaxed text-lg flex-grow">
							{visionMissionData[0].vision_text}
						</p>
					</div>

					{/* Mission Section */}
					<div
						id="mission"
						className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 flex flex-col"
					>
						<h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
							<span className="text-green-400 text-3xl">📈</span>
							<span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
								Mission
							</span>
						</h3>
						<ol className="text-gray-100 leading-relaxed space-y-3 text-lg list-decimal list-inside flex-grow">
							{visionMissionData[0].mission_text
								.split("\n")
								.map((item, index) => (
									<li key={index} className="pl-2">
										{item}
									</li>
								))}
						</ol>
					</div>
				</div>
			</div>
		</>
	);
}