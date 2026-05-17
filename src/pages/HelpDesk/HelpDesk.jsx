import React, { useEffect, useState } from "react";
import "./HelpDesk.css";

const API_BASE_URL = "https://ccet.ac.in/api/help-desk.php";

const getInitials = (name) =>
    name.split(" ").filter(Boolean).map((w) => w[0]).slice(0, 2).join("").toUpperCase();

const Avatar = ({ image, name, size }) => {
    const [failed, setFailed] = useState(false);
    if (image && !failed) {
        return (
            <img
                className={`hd-avatar hd-avatar--${size}`}
                src={image}
                alt={name}
                onError={() => setFailed(true)}
            />
        );
    }
    return (
        <div className={`hd-avatar hd-avatar--${size} hd-avatar--fallback`}>
            {getInitials(name)}
        </div>
    );
};

const HelpDesk = () => {
    const [data, setData]       = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError]     = useState(null);

    useEffect(() => { load(); }, []);

    const load = async () => {
        try {
            const res  = await fetch(API_BASE_URL);
            if (!res.ok) throw new Error("Network error");
            const json = await res.json();
            if (json.success === false) throw new Error(json.error || "Failed to load");
            setData(json);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return (
        <div className="hd-page-bg">
            <div className="hd-wrap">
                <h2 className="hd-page-title">Admissions Help Desk</h2>
                <p className="hd-loading">Loading…</p>
            </div>
        </div>
    );

    if (error) return (
        <div className="hd-page-bg">
            <div className="hd-wrap">
                <h2 className="hd-page-title">Admissions Help Desk</h2>
                <p className="hd-error">{error}</p>
            </div>
        </div>
    );

    const { coordinators = [], members = {} } = data;

    return (
        <div className="hd-page-bg">
            <div className="hd-wrap">

                <div className="hd-page-header">
                    <h2 className="hd-page-title">Admissions Help Desk</h2>
                    <p className="hd-page-sub">Chandigarh College of Engineering &amp; Technology</p>
                </div>
                {coordinators.length > 0 && (
                    <div className="hd-block">
                        <h3 className="hd-block-title">Coordinator</h3>
                        <div className="hd-coord-list">
                            {coordinators.map(c => (
                                <div key={c.id} className="hd-coord-row">
                                    <Avatar image={c.image} name={c.name} size="coord" />
                                    <div className="hd-coord-info">
                                        <span className="hd-name">{c.name}</span>
                                        <span className="hd-desg">{c.designation}</span>
                                    </div>
                                    <div className="hd-coord-contacts">
                                        <a href={`tel:${c.contact}`} className="hd-phone">{c.contact}</a>
                                        {c.email && (
                                            <a href={`mailto:${c.email}`} className="hd-email">{c.email}</a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {Object.keys(members).map((cat) => (
                    <div key={cat} className="hd-block">
                        <h3 className="hd-block-title">{cat}</h3>
                        <div className="hd-coord-list">
                            {members[cat].map(c => (
                                <div key={c.id} className="hd-coord-row">
                                    <Avatar image={c.image} name={c.name} size="coord" />
                                    <div className="hd-coord-info">
                                        <span className="hd-name">{c.name}</span>
                                        <span className="hd-desg">{c.designation}</span>
                                    </div>
                                    <div className="hd-coord-contacts">
                                        <a href={`tel:${c.contact}`} className="hd-phone">{c.contact}</a>
                                        {c.email && (
                                            <a href={`mailto:${c.email}`} className="hd-email">{c.email}</a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="hd-footer">
                    <span>For general enquiries, email us at</span>
                    <a href="mailto:helpdesk@ccet.ac.in">helpdesk@ccet.ac.in</a>
                </div>

            </div>
        </div>
    );
};

export default HelpDesk;