import React, { useEffect, useState } from "react";
import "./HelpDesk.css";

const API_BASE_URL = "https://ccet.ac.in/api/help-desk.php";

const HelpDesk = () => {
    const [helpdeskData, setHelpdeskData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchHelpdeskData();
    }, []);

    const fetchHelpdeskData = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}?is_active=true`);
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();

            if (data.success === false) {
                throw new Error(data.error || "Failed to fetch data");
            }

            setHelpdeskData(data);
            setLoading(false);
        } catch (err) {
            setError(err.message || "Failed to fetch helpdesk data");
            setLoading(false);
        }
    };

    const groupByCategory = (data) => {
        return data.reduce((acc, item) => {
            if (!acc[item.category]) {
                acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
        }, {});
    };

    if (loading) {
        return (
            <div className="helpdesk-container">
                <h2 className="title">Admissions Help Desk</h2>
                <p>Loading helpdesk information...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="helpdesk-container">
                <h2 className="title">Admissions Help Desk</h2>
                <p style={{ color: 'red' }}>Error: {error}</p>
            </div>
        );
    }

    const groupedData = groupByCategory(helpdeskData);

    return (
        <div className="helpdesk-container">
            <h2 className="title">Admissions Help Desk</h2>

            {Object.keys(groupedData).map((category) => (
                <div key={category}>
                    <h3 className="subtitle">{category}</h3>
                    <ul className="contact-list">
                        {groupedData[category].map((contact) => (
                            <li key={contact.id}>
                                {contact.designation} {contact.name} - <span>{contact.contact}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <p className="email">
                Email: <a href="mailto:helpdesk@ccet.ac.in">helpdesk@ccet.ac.in</a>
            </p>
        </div>
    );
};

export default HelpDesk;