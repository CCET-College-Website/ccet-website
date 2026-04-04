import React, { useState, useEffect, useRef } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import {
	PhoneIcon,
	GlobeAltIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";

const AntiRagging = () => {
	const [posters, setPosters] = useState([]);
	const [documents, setDocuments] = useState([]);
	const [contacts, setContacts] = useState([]);
	const [instituteDetails, setInstituteDetails] = useState([]);
	const [infoContent, setInfoContent] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchAllData();
	}, []);

	const fetchAllData = async () => {
		setLoading(true);
		setError(null);

		try {
			const [postersRes, documentsRes, contactsRes, instituteRes, infoRes] = await Promise.all([
				fetch("https://ccet.ac.in/api/anti-ragging.php?entity=posters&is_active=true"),
				fetch("https://ccet.ac.in/api/anti-ragging.php?entity=documents&is_active=true"),
				fetch("https://ccet.ac.in/api/anti-ragging.php?entity=contacts&is_active=true"),
				fetch("https://ccet.ac.in/api/anti-ragging.php?entity=institute_details&is_active=true"),
				fetch("https://ccet.ac.in/api/anti-ragging.php?entity=info&is_active=true"),
			]);

			const [postersData, documentsData, contactsData, instituteData, infoData] = await Promise.all([
				postersRes.json(),
				documentsRes.json(),
				contactsRes.json(),
				instituteRes.json(),
				infoRes.json(),
			]);

			setPosters(Array.isArray(postersData) ? postersData : []);
			setDocuments(Array.isArray(documentsData) ? documentsData : []);
			setContacts(Array.isArray(contactsData) ? contactsData : []);
			setInstituteDetails(Array.isArray(instituteData) ? instituteData : []);
			setInfoContent(Array.isArray(infoData) ? infoData : []);
		} catch (err) {
			setError("Error loading data");
			console.error("Fetch error:", err);
		} finally {
			setLoading(false);
		}
	};

	const getContent = (key) => {
		const content = infoContent.find(c => c.section_key === key);
		return content ? content.content_text : "";
	};

	const getContentsByType = (type) => {
		return infoContent.filter(c => c.content_type === type);
	};

	const nationalContacts = contacts.filter(c => c.is_national);
	const instructionDoc = documents.find(d => d.document_type === 'instruction');
	const listItems = getContentsByType('list_item');

	if (loading) {
		return (
			<div className="text-center py-20">
				<h2 className="text-2xl font-semibold text-blue-700">Loading Anti-Ragging Information...</h2>
			</div>
		);
	}

	if (error) {
		return (
			<div className="text-center py-20 text-red-500">
				<h2 className="text-2xl font-semibold">{error}</h2>
			</div>
		);
	}

	return (
		<div className="px-4 md:px-16 py-10 max-w-6xl mx-auto">
			{posters.length > 0 && (
				<div className="overflow-x-hidden w-full mb-10 relative">
					<div className="flex gap-6 animate-scroll-x">
						{[...posters, ...posters].map((poster, index) => (
							<div
								key={index}
								className="w-40 sm:w-48 md:w-56 flex-shrink-0 rounded shadow hover:shadow-lg transition-transform duration-300 hover:scale-105"
							>
								<img
									src={poster.image_url}
									alt={poster.alt_text || `Poster ${index + 1}`}
									className="w-full h-auto object-contain"
								/>
							</div>
						))}
					</div>
					<style>{`
          @keyframes scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-x {
            animation: scroll-x 25s linear infinite;
          }
          .overflow-x-hidden::-webkit-scrollbar {
            display: none;
          }
          .overflow-x-hidden {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
				</div>
			)}

			<div className="space-y-6 text-justify leading-relaxed text-gray-800">
				{getContent('main_heading') && (
					<h2 className="text-xl md:text-2xl font-bold">
						{getContent('main_heading')}
					</h2>
				)}

				{getContent('intro_para_1') && (
					<p dangerouslySetInnerHTML={{
						__html: getContent('intro_para_1').replace(
							/(CCET has zero tolerance towards ragging\. Ragging is a criminal offence and is strictly forbidden\.)/,
							'<strong>$1</strong>'
						)
					}} />
				)}

				{getContent('intro_para_2') && <p>{getContent('intro_para_2')}</p>}

				{getContent('intro_para_3') && (
					<p dangerouslySetInnerHTML={{
						__html: getContent('intro_para_3').replace(
							/(follow the detailed instructions given below)/,
							'<strong>$1</strong>'
						)
					}} />
				)}

				{listItems.length > 0 && (
					<ul className="list-disc list-inside ml-4 space-y-1 break-words">
						{listItems.map((item) => (
							<li key={item.id}>
								{item.content_text.includes('http') ? (
									<>
										{item.content_text.split('http')[0]}
										<a
											href={item.content_text.match(/https?:\/\/[^\s]+/)?.[0]}
											className="text-blue-600 underline break-all"
											target="_blank"
											rel="noopener noreferrer"
										>
											{item.content_text.match(/https?:\/\/[^\s]+/)?.[0]}
										</a>
									</>
								) : (
									item.content_text
								)}
							</li>
						))}
					</ul>
				)}

				{instituteDetails.length > 0 && (
					<>
						{getContent('institute_info_heading') && (
							<p className="font-semibold">
								{getContent('institute_info_heading').split('required while filling')[0]}
								<u>required while filling</u>
								{getContent('institute_info_heading').split('required while filling')[1]}
							</p>
						)}
						<ul className="list-decimal list-inside ml-4 space-y-1">
							{instituteDetails.map((detail) => (
								<li key={detail.id}>
									<strong>{detail.detail_label}:</strong> {detail.detail_value}
								</li>
							))}
						</ul>
					</>
				)}

				{getContent('closing_para') && (
					<p dangerouslySetInnerHTML={{
						__html: getContent('closing_para').replace(
							/(note the auto generated reference number)/,
							'<strong>$1</strong>'
						)
					}} />
				)}

				{instructionDoc && (
					<p className="text-lg font-semibold">
						Anti Ragging Instructions :-{" "}
						<a
							href={instructionDoc.document_url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-600 underline ml-2"
						>
							Click Here
						</a>
					</p>
				)}
			</div>

			{documents.filter(d => d.document_type !== 'instruction').length > 0 && (
				<div className="bg-gray-200 border border-gray-300 rounded-xl shadow-md p-6 mt-10">
					{getContent('regulations_heading') && (
						<h2 className="text-lg md:text-xl font-semibold mb-2 inline-block border-b border-blue-600">
							{getContent('regulations_heading')} :
						</h2>
					)}
					<ul className="list-none text-sm space-y-2 text-blue-700 mt-4">
						{documents
							.filter(d => d.document_type !== 'instruction')
							.map((doc) => (
								<li key={doc.id}>
									<a
										href={doc.document_url}
										target="_blank"
										rel="noopener noreferrer"
										className="hover:underline"
									>
										{doc.document_title}
									</a>
								</li>
							))}
					</ul>
				</div>
			)}

			{nationalContacts.length > 0 && (
				<div className="text-center mt-10 text-gray-800">
					{getContent('helpline_heading') && (
						<p className="text-lg font-semibold">
							{getContent('helpline_heading')} :
						</p>
					)}
					{nationalContacts.map((contact) => (
						<div key={contact.id}>
							{contact.phone && (
								<div className="flex justify-center items-center gap-2 mt-2">
									<PhoneIcon className="w-5 h-5 text-blue-700" />
									<p>{contact.phone}</p>
								</div>
							)}
							{contact.email && (
								<div className="flex justify-center items-center gap-2">
									<EnvelopeIcon className="w-5 h-5 text-blue-700" />
									<p>{contact.email}</p>
								</div>
							)}
						</div>
					))}
				</div>
			)}

			<FloatHelpWidget contacts={contacts} warningMessage={getContent('warning_message')} />
		</div>
	);
};

function FloatHelpWidget({ contacts, warningMessage }) {
	const [isOpen, setIsOpen] = useState(false);
	const widgetRef = useRef(null);

	const nationalContacts = contacts.filter(c => c.is_national);
	const instituteContacts = contacts.filter(c => c.is_institute);
	const ugcContacts = contacts.filter(c => !c.is_national && !c.is_institute);

	useEffect(() => {
		function handleClickOutside(event) {
			if (
				widgetRef.current &&
				!widgetRef.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		}
		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	return (
		<div className="fixed bottom-6 right-6 z-50">
			{!isOpen && (
				<button
					onClick={() => setIsOpen(true)}
					className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition-colors"
				>
					<span className="font-semibold">Quick Help</span>
				</button>
			)}

			{isOpen && (
				<div
					ref={widgetRef}
					className="w-80 bg-white border-2 border-blue-600 rounded-lg shadow-xl p-4 text-sm max-h-[90vh] overflow-y-auto"
				>
					{nationalContacts.length > 0 && (
						<>
							<h3 className="text-base font-bold mb-2">
								National Anti-Ragging Helpline
							</h3>
							<p className="mb-1 text-red-700 font-semibold">
								24×7 Toll Free
							</p>
							{nationalContacts.map((contact) => (
								<div key={contact.id}>
									{contact.phone && (
										<div className="mb-2 flex items-center gap-2">
											<PhoneIcon className="w-4 h-4 text-blue-600" />
											<span>{contact.phone}</span>
										</div>
									)}
									{contact.email && (
										<div className="mb-2 flex items-center gap-2">
											<EnvelopeIcon className="w-4 h-4 text-blue-600" />
											<a
												href={`mailto:${contact.email}`}
												className="text-blue-600 hover:underline break-all"
											>
												{contact.email}
											</a>
										</div>
									)}
									{contact.website && (
										<div className="mb-4 flex items-center gap-2">
											<GlobeAltIcon className="w-4 h-4 text-blue-600" />
											<a
												href={contact.website}
												target="_blank"
												rel="noopener noreferrer"
												className="text-blue-600 hover:underline break-all"
											>
												{contact.website}
											</a>
										</div>
									)}
								</div>
							))}
						</>
					)}

					{ugcContacts.length > 0 && (
						<>
							<hr className="border-t border-blue-300 my-3" />
							{ugcContacts.map((contact) => (
								<div key={contact.id} className="mb-4">
									<h4 className="text-base font-bold mb-1">
										{contact.helpline_name}
									</h4>
									{contact.designation && <p className="mb-1">{contact.designation}</p>}
									{contact.email && (
										<div className="mb-2 flex items-center gap-2">
											<EnvelopeIcon className="w-4 h-4 text-blue-600" />
											<a
												href={`mailto:${contact.email}`}
												className="text-blue-600 hover:underline break-all"
											>
												{contact.email}
											</a>
										</div>
									)}
									{contact.website && (
										<div className="mb-2 flex items-center gap-2">
											<GlobeAltIcon className="w-4 h-4 text-blue-600" />
											<a
												href={contact.website}
												target="_blank"
												rel="noopener noreferrer"
												className="text-blue-600 hover:underline break-all"
											>
												{contact.website}
											</a>
										</div>
									)}
									{contact.phone && (
										<div className="mb-2 flex items-center gap-2">
											<PhoneIcon className="w-4 h-4 text-blue-600" />
											<span>{contact.phone}</span>
										</div>
									)}
								</div>
							))}
						</>
					)}

					{instituteContacts.length > 0 && (
						<>
							<hr className="border-t border-blue-300 my-3" />
							<h4 className="text-base font-bold mb-1">
								Important Helplines
							</h4>
							{instituteContacts.map((contact) => (
								<div key={contact.id} className="mb-2">
									<p className="font-medium">{contact.helpline_name}</p>
									{contact.phone && (
										<div className="flex items-center gap-2">
											<PhoneIcon className="w-4 h-4 text-blue-600" />
											<span>{contact.phone}</span>
										</div>
									)}
									{contact.email && (
										<div className="flex items-center gap-2">
											<EnvelopeIcon className="w-4 h-4 text-blue-600" />
											<a
												href={`mailto:${contact.email}`}
												className="text-blue-600 hover:underline break-all"
											>
												{contact.email}
											</a>
										</div>
									)}
								</div>
							))}
						</>
					)}

					{warningMessage && (
						<blockquote className="border-l-4 border-red-600 pl-4 italic text-xs text-red-700 mb-4">
							{warningMessage}
						</blockquote>
					)}

					<button
						onClick={() => setIsOpen(false)}
						className="flex items-center gap-1 text-sm text-red-600 hover:text-red-700 font-medium"
					>
						<XMarkIcon className="w-4 h-4" /> Close
					</button>

					<style>{`
            .overflow-y-auto::-webkit-scrollbar {
              width: 6px;
            }
            .overflow-y-auto::-webkit-scrollbar-thumb {
              background-color: #3B82F6;
              border-radius: 9999px;
            }
            .overflow-y-auto::-webkit-scrollbar-track {
              background: #f1f1f1;
            }
          `}</style>
				</div>
			)}
		</div>
	);
}

export default AntiRagging;