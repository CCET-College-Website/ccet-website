import React, { useState, useEffect } from "react";
import "./RecentUpdates.css";

function RecentUpdates() {
    const [updates, setUpdates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUpdates();
    }, []);

    const fetchUpdates = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch('https://ccet.ac.in/api/marquee.php');

            if (!response.ok) {
                throw new Error('Failed to fetch updates');
            }

            const data = await response.json();

            // Handle error response from API
            if (data.success === false) {
                throw new Error(data.error || 'Failed to fetch updates');
            }

            // Sort updates by date (newest first)
            const sortedUpdates = data.sort((a, b) =>
                new Date(b.date) - new Date(a.date)
            );

            // Take only the most recent 10 updates for the marquee
            setUpdates(sortedUpdates.slice(0, 10));
        } catch (err) {
            setError('Failed to load updates: ' + err.message);
            console.error('Error fetching updates:', err);
        } finally {
            setLoading(false);
        }
    };

    const isNewUpdate = (dateString) => {
        const updateDate = new Date(dateString);
        const currentDate = new Date();
        const oneWeekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
        return updateDate >= oneWeekAgo;
    };

    const handleUpdateClick = (update) => {
        // Priority: external_links > pdf > no link
        const link = update.external_links || update.pdf;

        if (link && link !== '#') {
            // Handle both absolute and relative URLs
            if (link.startsWith('http')) {
                window.open(link, '_blank', 'noopener,noreferrer');
            } else {
                const path = link.startsWith('/') ? link : `/${link}`;
                const encodedPath = path.split('/').map(segment =>
                    encodeURIComponent(segment)
                ).join('/');
                const fullUrl = `https://ccet.ac.in${encodedPath}`;
                window.open(fullUrl, '_blank', 'noopener,noreferrer');
            }
        }
    };

    if (loading) {
        return (
            <div className="recent-updates-strip">
                <div className="recent-label">Recent Updates</div>
                <div className="updates-wrapper">
                    <div className="updates-scroll">
                        <span className="update-item">Loading updates...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="recent-updates-strip">
                <div className="recent-label">Recent Updates</div>
                <div className="updates-wrapper">
                    <div className="updates-scroll">
            <span className="update-item" style={{ color: '#ff6b6b' }}>
              {error}
            </span>
                    </div>
                </div>
            </div>
        );
    }

    if (updates.length === 0) {
        return (
            <div className="recent-updates-strip">
                <div className="recent-label">Recent Updates</div>
                <div className="updates-wrapper">
                    <div className="updates-scroll">
                        <span className="update-item">No updates available</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="recent-updates-strip">
            <div className="recent-label">Recent Updates</div>
            <div className="updates-wrapper">
                <div className="updates-scroll">
                    {updates.map((update, index) => (
                        <span key={update.id || index} className="update-item">
              {isNewUpdate(update.date) && <span className="new-tag">NEW</span>}
                            {update.external_links || update.pdf ? (
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleUpdateClick(update);
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {update.text}
                                </a>
                            ) : (
                                <span>{update.text}</span>
                            )}
            </span>
                    ))}
                    {/* Duplicate items for seamless scrolling */}
                    {updates.map((update, index) => (
                        <span key={`dup-${update.id || index}`} className="update-item">
              {isNewUpdate(update.date) && <span className="new-tag">NEW</span>}
                            {update.external_links || update.pdf ? (
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleUpdateClick(update);
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {update.text}
                                </a>
                            ) : (
                                <span>{update.text}</span>
                            )}
            </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RecentUpdates;
