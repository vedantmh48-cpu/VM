import { FaBullhorn, FaChartLine, FaCode, FaShieldAlt } from "react-icons/fa";

const certifications = [
    {
        title: "Full-Stack Developer",
        field: "Web Development",
        summary: "Training in building complete web experiences across the front end and back end.",
        skills: ["Frontend", "Backend", "Web apps"],
        status: "Certified",
        icon: <FaCode />,
        accent: "#f2b447",
    },
    {
        title: "Ethical Hacking",
        field: "Cybersecurity",
        summary: "Learning security fundamentals and responsible approaches to identifying risks.",
        skills: ["Security", "Networking", "Ethics"],
        status: "Certified",
        icon: <FaShieldAlt />,
        accent: "#71c4b5",
    },
    {
        title: "Social Media Marketing",
        field: "Digital Marketing",
        summary: "Credential focused on social media strategy, audience engagement, and campaigns.",
        skills: ["Social media", "Content", "Campaigns"],
        status: "Certified",
        icon: <FaBullhorn />,
        accent: "#e07a5f",
    },
    {
        title: "Data Analytics",
        field: "Analytics",
        summary: "Currently developing skills in interpreting data and communicating insights.",
        skills: ["Data", "Analysis", "Insights"],
        status: "Course in progress",
        icon: <FaChartLine />,
        accent: "#a78bfa",
        inProgress: true,
    },
];

export default function Certifications() {
    return (
        <section className="certifications" id="certifications" data-section="05">
            <div className="container">
                <p className="section-label" data-reveal><span className="label-index">05</span>Learning & Credentials</p>
                <h2 className="section-title" data-reveal>My <em className="accent-gradient">Certifications</em></h2>
                <div className="cert-cards-grid">
                    {certifications.map((certification, index) => (
                        <article
                            className="cert-card-enhanced"
                            data-reveal
                            style={{ "--card-accent": certification.accent }}
                            key={certification.title}
                        >
                            <div className="cert-top-bar">
                                <span className="cert-icon-wrapper" aria-hidden="true">{certification.icon}</span>
                                <span className="cert-status-badge">
                                    <span className={`cert-status-tag ${certification.inProgress ? "progress" : "verified"}`}>
                                        {certification.inProgress ? "In progress" : "Certified"}
                                    </span>
                                </span>
                            </div>
                            <div className="cert-content">
                                <span className="cert-field">{certification.field}</span>
                                <h3 className="cert-title">{certification.title}</h3>
                                <p className="cert-summary">{certification.summary}</p>
                                <div className="cert-skills-wrap">
                                    {certification.skills.map((skill) => (
                                        <span className="cert-skill-chip" key={skill}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="cert-footer">
                                <span className="cert-issuer">{certification.status}</span>
                                <span className="cert-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
