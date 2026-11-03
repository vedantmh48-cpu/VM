import { FaAward, FaBookOpen, FaGraduationCap, FaMapMarkerAlt, FaSchool } from "react-icons/fa";

const education = [
    {
        index: "01",
        level: "Undergraduate",
        qualification: "B.Sc. Information Technology",
        institution: "Thakur College of Science and Commerce",
        location: "Mumbai",
        status: "Currently pursuing",
        icon: <FaGraduationCap />,
        current: true,
        results: [
            { label: "Semester 1", value: "9.00 SGPA" },
            { label: "Semester 2", value: "9.36 SGPA" },
            { label: "First-year CGPA", value: "9.18" },
        ],
    },
    {
        index: "02",
        level: "Higher Secondary · 12th",
        qualification: "Higher Secondary Education",
        institution: "Tilak Junior College",
        location: "Navi Mumbai",
        status: "Completed",
        icon: <FaSchool />,
    },
    {
        index: "03",
        level: "Secondary · 10th",
        qualification: "Indian Certificate of Secondary Education",
        institution: "Tree House High School",
        location: "Vasai",
        status: "ICSE · CISCE Board",
        icon: <FaBookOpen />,
    },
];

export default function Education() {
    return (
        <section className="education" id="education" data-section="04">
            <div className="container">
                <p className="section-label" data-reveal><span className="label-index">04</span>Academic Background</p>
                <h2 className="section-title" data-reveal>My <em className="accent-gradient">Education</em></h2>
                <div className="education-timeline">
                    {education.map((item) => (
                        <article
                            className={`education-card-enhanced${item.current ? " is-current" : ""}`}
                            data-reveal
                            key={item.index}
                        >
                            <span className="edu-card-glow" aria-hidden="true"></span>
                            <div className="edu-rail" aria-hidden="true">
                                <span className="edu-icon-bubble">{item.icon}</span>
                                {item.index !== "03" && <span className="edu-rail-line"></span>}
                            </div>
                            <div className="edu-body">
                                <div className="edu-header">
                                    <div className="edu-meta-row">
                                        <span className="edu-badge-level">{item.level}</span>
                                        <span className={`edu-status-pill ${item.current ? "live" : "completed"}`}>
                                            {item.current ? <FaAward aria-hidden="true" /> : <span aria-hidden="true">✓</span>}
                                            {item.status}
                                        </span>
                                    </div>
                                    <h3 className="edu-title">{item.qualification}</h3>
                                </div>
                                <div className="edu-institution-info">
                                    <span className="edu-inst-name">{item.institution}</span>
                                    <span className="edu-inst-sep" aria-hidden="true">·</span>
                                    <span className="edu-inst-location">
                                        <FaMapMarkerAlt aria-hidden="true" /> {item.location}
                                    </span>
                                    {item.level.startsWith("Secondary · 10th") && (
                                        <span className="edu-inst-board">ICSE · CISCE Board</span>
                                    )}
                                </div>
                                {item.results && (
                                    <ul className="edu-metrics-grid" aria-label="First-year results">
                                        {item.results.map((result) => (
                                            <li className="edu-metric-item" key={result.label}>
                                                <span className="metric-label">{result.label}</span>
                                                <strong className="metric-val">{result.value}</strong>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
