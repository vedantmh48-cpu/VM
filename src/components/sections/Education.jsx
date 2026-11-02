const education = [
    {
        index: "01",
        level: "Undergraduate",
        qualification: "B.Sc. Information Technology",
        institution: "Thakur College of Science and Commerce",
        location: "Mumbai",
        status: "Currently pursuing",
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
    },
    {
        index: "03",
        level: "Secondary · 10th",
        qualification: "Indian Certificate of Secondary Education",
        institution: "Tree House High School",
        location: "Vasai",
        status: "ICSE · CISCE Board",
    },
];

export default function Education() {
    return (
        <section className="education" id="education" data-section="04">
            <div className="container">
                <p className="section-label" data-reveal><span className="label-index">04</span>Academic Background</p>
                <h2 className="section-title" data-reveal>My <em className="accent-gradient">Education</em></h2>
                <div className="education-list">
                    {education.map((item) => (
                        <article className="education-card" data-reveal key={item.index}>
                            <span className="education-index" aria-hidden="true">{item.index}</span>
                            <div className="education-content">
                                <div className="education-heading">
                                    <div>
                                        <span className="education-level">{item.level}</span>
                                        <h3>{item.qualification}</h3>
                                    </div>
                                    <span className="education-status">{item.status}</span>
                                </div>
                                <p className="education-institution">{item.institution}<span>{item.location}</span></p>
                                {item.results && (
                                    <ul className="education-results" aria-label="First-year results">
                                        {item.results.map((result) => (
                                            <li key={result.label}>
                                                <span>{result.label}</span>
                                                <strong>{result.value}</strong>
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
