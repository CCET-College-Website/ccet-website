import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Users, FileText, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const API_BASE_URL = 'https://ccet.ac.in/api/privacypolicy.php';

export default function PrivacyPolicy() {
    const [expandedSection, setExpandedSection] = useState(null);
    const [sections, setSections] = useState([]);
    const [definitions, setDefinitions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lastUpdated, setLastUpdated] = useState('September 05, 2020');

    useEffect(() => {
        fetchPrivacyData();
    }, []);

    const fetchPrivacyData = async () => {
        setLoading(true);
        setError(null);

        try {
            const [sectionsRes, definitionsRes] = await Promise.all([
                fetch(`${API_BASE_URL}?table=privacy_policy&is_active=true`),
                fetch(`${API_BASE_URL}?table=privacy_definitions&is_active=true`)
            ]);

            const [sectionsData, definitionsData] = await Promise.all([
                sectionsRes.json(),
                definitionsRes.json()
            ]);

            if (Array.isArray(sectionsData)) {
                setSections(sectionsData);
                // Get the most recent last_updated date
                const dates = sectionsData
                    .filter(s => s.last_updated)
                    .map(s => new Date(s.last_updated));
                if (dates.length > 0) {
                    const mostRecent = new Date(Math.max(...dates));
                    setLastUpdated(mostRecent.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }));
                }
            }
            if (Array.isArray(definitionsData)) {
                setDefinitions(definitionsData);
            }
        } catch (err) {
            console.error('Error fetching privacy data:', err);
            setError('Failed to load privacy policy data');
        } finally {
            setLoading(false);
        }
    };

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const getIconComponent = (iconName) => {
        const icons = {
            'FileText': FileText,
            'Eye': Eye,
            'Lock': Lock,
            'Users': Users,
            'Shield': Shield
        };
        return icons[iconName] || FileText;
    };

    const renderContent = (section) => {
        if (!section.content) return null;

        try {
            const parsedContent = JSON.parse(section.content);
            if (Array.isArray(parsedContent)) {
                return (
                    <div className="space-y-4">
                        {parsedContent.map((item, idx) => (
                            <div key={idx}>
                                {item.heading && (
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.heading}</h4>
                                )}
                                {item.text && <p className="text-gray-600 mb-3">{item.text}</p>}
                                {item.list && (
                                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                                        {item.list.map((listItem, listIdx) => (
                                            <li key={listIdx}>{listItem}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                );
            }
        } catch (e) {
        }

        return <p className="text-gray-600 leading-relaxed">{section.content}</p>;
    };

    const renderDefinitions = () => {
        if (definitions.length === 0) return null;

        return (
            <div className="space-y-3">
                {definitions.map((def) => (
                    <div key={def.id} className="bg-gray-50 p-3 rounded-lg">
                        <span className="font-semibold text-gray-800">{def.term}:</span>
                        <span className="text-gray-600 ml-2">{def.definition}</span>
                    </div>
                ))}
            </div>
        );
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
                <main className="max-w-6xl mx-auto px-4">
                    <div className="text-center">
                        <Shield className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                        <p className="text-gray-500">Loading privacy policy...</p>
                    </div>
                </main>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
                <main className="max-w-6xl mx-auto px-4">
                    <div className="text-center">
                        <Shield className="w-10 h-10 text-red-600 mx-auto mb-4" />
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                        <p className="text-red-600">{error}</p>
                    </div>
                </main>
            </div>
        );
    }

    const introSection = sections.find(s => s.section === 'introduction');
    const mainSections = sections.filter(s => s.section !== 'introduction' && s.section !== 'additional');
    const additionalSections = sections.filter(s => s.section === 'additional');

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
            <main className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <Shield className="w-10 h-10 text-blue-600" />
                        <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
                    </div>
                    <p className="text-gray-500">Last updated: {lastUpdated}</p>
                </div>

                {introSection && (
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <FileText className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">{introSection.title}</h2>
                                {renderContent(introSection)}
                            </div>
                        </div>
                    </div>
                )}

                <div className="space-y-4">
                    {mainSections.map((section) => {
                        const IconComponent = getIconComponent(section.icon);
                        const isExpanded = expandedSection === section.id;

                        return (
                            <div key={section.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <button
                                    onClick={() => toggleSection(section.id)}
                                    className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg">
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                                    </div>
                                    {isExpanded ? (
                                        <ChevronUp className="w-6 h-6 text-gray-400" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 text-gray-400" />
                                    )}
                                </button>

                                {isExpanded && (
                                    <div className="px-8 pb-8 pt-4 border-t border-gray-100">
                                        {section.section === 'interpretation' && definitions.length > 0 ? (
                                            <>
                                                {renderContent(section)}
                                                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Definitions</h3>
                                                {renderDefinitions()}
                                            </>
                                        ) : (
                                            renderContent(section)
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Additional Information */}
                {additionalSections.length > 0 && (
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        {additionalSections.map((section) => (
                            <div key={section.id} className="bg-white rounded-2xl shadow-lg p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{section.title}</h3>
                                <div className="text-gray-600 text-sm leading-relaxed">
                                    {renderContent(section)}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 mt-8 text-white">
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p className="mb-4 opacity-90">
                        If you have any questions about this Privacy Policy, you can contact us:
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                    >
                        Visit Contact Page
                        <ExternalLink className="w-4 h-4" />
                    </Link>
                </div>

                <footer className="text-center mt-12 text-gray-500 text-sm">
                    <p>© 2025 Chandigarh College Of Engineering And Technology</p>
                    <p className="mt-1">Sector 26, Chandigarh, India</p>
                </footer>
            </main>
        </div>
    );
}