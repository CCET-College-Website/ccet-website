import React, { useEffect, useState } from 'react';
import './infrastructure.css';

const Infrastructure = () => {
    const [infrastructureData, setInfrastructureData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://ccet.ac.in/api/infrastructure.php?is_active=true")
            .then((response) => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setInfrastructureData(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching infrastructure data:", err);
                setError(err.message || "Failed to fetch data");
                setLoading(false);
            });
    }, []);

    const groupedData = infrastructureData.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    if (loading) {
        return (
            <div className="infrastructure-container">
                <div className="banner"></div>
                <div style={{ textAlign: 'center', padding: '4rem' }}>
                    <p>Loading Infrastructure data...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="infrastructure-container">
                <div className="banner"></div>
                <div style={{ textAlign: 'center', padding: '4rem', color: '#dc3545' }}>
                    <p>Error loading Infrastructure data: {error}</p>
                    <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                        Please contact the administrator or try again later.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="infrastructure-container">
            <div className="banner"></div>

            {Object.entries(groupedData).map(([category, items]) => (
                <div key={category} className={category === 'Hostel' ? 'residential-info-card' : 'info-card'}>
                    <div className="section-title">{category}</div>

                    {items.map((item, index) => (
                        <div key={item.id || index}>
                            {item.title && item.title !== category && (
                                <div className="bold" style={{ marginTop: index > 0 ? '1rem' : 0 }}>
                                    {item.title}
                                </div>
                            )}
                            {item.description && (
                                <div
                                    style={{ marginTop: '0.5rem' }}
                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Infrastructure;