const certifications = [
    { title: "Full-Stack Developer", status: "Certified" },
    { title: "Ethical Hacking", status: "Certified" },
    { title: "Social Media Marketing", status: "Certified" },
    { title: "Data Analytics", status: "Course in progress", inProgress: true },
];

export default function Certifications() {
    return (
        <section className="certifications" id="certifications" data-section="05">
            <div className="container">
                <p className="section-label" data-reveal><span className="label-index">05</span>Learning & Credentials</p>
                <h2 className="section-title" data-reveal>My <em className="accent-gradient">Certifications</em></h2>
                <div className="certification-grid">
                    {certifications.map((certification, index) => (
                        <article
                            className={`certification-card${certification.inProgress ? " is-in-progress" : ""}`}
                            data-reveal
                            key={certification.title}
                        >
                            <span className="certification-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                            <div>
                                <h3>{certification.title}</h3>
                                <p>{certification.status}</p>
                            </div>
                            <span className="certification-mark" aria-hidden="true">{certification.inProgress ? "↗" : "✓"}</span>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
