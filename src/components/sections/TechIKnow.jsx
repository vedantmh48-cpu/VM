import { useState } from "react";
import {
    FaBolt,
    FaCode,
    FaDatabase,
    FaFilePowerpoint,
    FaJava,
    FaPaintBrush,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
    siCplusplus,
    siCss,
    siFigma,
    siGit,
    siGithub,
    siGsap,
    siHtml5,
    siIntel,
    siJavascript,
    siMongodb,
    siMysql,
    siNextdotjs,
    siNodedotjs,
    siNvidia,
    siPython,
    siReact,
    siTailwindcss,
    siTypescript,
    siVite,
} from "simple-icons";

function BrandLogo({ icon }) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d={icon.path} />
        </svg>
    );
}

function GitHubCommandsLogo() {
    return (
        <span className="tech-combined-icons">
            <BrandLogo icon={siGit} />
            <BrandLogo icon={siGithub} />
        </span>
    );
}

function PcHardwareLogo() {
    return (
        <span className="tech-combined-icons">
            <BrandLogo icon={siIntel} />
            <BrandLogo icon={siNvidia} />
        </span>
    );
}

const categories = ["All", "Languages", "Frameworks", "Databases", "Tools", "Skills"];

const technologies = [
    { name: "JavaScript", category: "Languages", role: "Interactive web experiences", tags: ["ES6+", "Web"], icon: <BrandLogo icon={siJavascript} />, accent: "#f7df1e" },
    { name: "TypeScript", category: "Languages", role: "Typed application development", tags: ["Types", "JavaScript"], icon: <BrandLogo icon={siTypescript} />, accent: "#3178c6" },
    { name: "HTML", category: "Languages", role: "Accessible web structure", tags: ["Semantic", "Web"], icon: <BrandLogo icon={siHtml5} />, accent: "#e34f26" },
    { name: "CSS", category: "Languages", role: "Responsive visual experiences", tags: ["Layouts", "Animation"], icon: <BrandLogo icon={siCss} />, accent: "#1572b6" },
    { name: "Python", category: "Languages", role: "Scripting and general-purpose programming", tags: ["Scripting", "Programming"], icon: <BrandLogo icon={siPython} />, accent: "#3776ab" },
    { name: "C/C++", category: "Languages", role: "Systems and general-purpose programming", tags: ["C", "C++"], icon: <BrandLogo icon={siCplusplus} />, accent: "#659ad2" },
    { name: "Java", category: "Languages", role: "Object-oriented application development", tags: ["OOP", "Programming"], icon: <FaJava />, accent: "#f89820" },
    { name: "React", category: "Frameworks", role: "Component-driven interfaces", tags: ["Components", "UI"], icon: <BrandLogo icon={siReact} />, accent: "#61dafb" },
    { name: "Next.js", category: "Frameworks", role: "Modern React applications", tags: ["React", "Web"], icon: <BrandLogo icon={siNextdotjs} />, accent: "#f5f5f5" },
    { name: "Node.js", category: "Frameworks", role: "JavaScript runtime and tooling", tags: ["JavaScript", "Runtime"], icon: <BrandLogo icon={siNodedotjs} />, accent: "#83cd29" },
    { name: "MySQL", category: "Databases", role: "Relational database management", tags: ["SQL", "Relational"], icon: <BrandLogo icon={siMysql} />, accent: "#4479a1" },
    { name: "PL/SQL", category: "Databases", role: "Procedural SQL and database programming", tags: ["SQL", "Database"], icon: <FaDatabase />, accent: "#f80000" },
    { name: "MongoDB", category: "Databases", role: "Document-oriented database", tags: ["NoSQL", "Documents"], icon: <BrandLogo icon={siMongodb} />, accent: "#47a248" },
    { name: "Tailwind CSS", category: "Tools", role: "Utility-first styling", tags: ["CSS", "UI"], icon: <BrandLogo icon={siTailwindcss} />, accent: "#38bdf8" },
    { name: "Vite", category: "Tools", role: "Frontend build tooling", tags: ["Development", "Build"], icon: <BrandLogo icon={siVite} />, accent: "#bd34fe" },
    { name: "GSAP", category: "Tools", role: "Web animation and motion", tags: ["Animation", "Motion"], icon: <BrandLogo icon={siGsap} />, accent: "#88ce02" },
    { name: "Figma", category: "Tools", role: "Interface and visual design", tags: ["Design", "Prototyping"], icon: <BrandLogo icon={siFigma} />, accent: "#a259ff" },
    { name: "VS Code", category: "Tools", role: "Code editing and development", tags: ["Editor", "Development"], icon: <VscVscode />, accent: "#007acc" },
    { name: "Antigravity", category: "Tools", role: "AI-assisted development", tags: ["Editor", "AI"], icon: <FaBolt />, accent: "#8b7bff" },
    { name: "Canva", category: "Tools", role: "Visual design and content creation", tags: ["Design", "Content"], icon: <FaPaintBrush />, accent: "#00c4cc" },
    { name: "Adobe Express", category: "Tools", role: "Quick visual content creation", tags: ["Design", "Content"], icon: <FaPaintBrush />, accent: "#ff4b4b" },
    { name: "Photoshop", category: "Tools", role: "Image editing and digital graphics", tags: ["Image editing", "Design"], icon: <FaPaintBrush />, accent: "#31a8ff" },
    { name: "Git & GitHub Commands", category: "Tools", role: "Version control and repository workflows", tags: ["Git", "GitHub"], icon: <GitHubCommandsLogo />, accent: "#f0f0f0" },
    { name: "Graphic Designing", category: "Skills", role: "Visual communication and creative design", tags: ["Visuals", "Creative"], icon: <FaPaintBrush />, accent: "#ff6f91" },
    { name: "PC Hardware", category: "Skills", role: "Computer components and hardware basics", tags: ["Components", "Systems"], icon: <PcHardwareLogo />, accent: "#76b900" },
    { name: "PPT Designer", category: "Skills", role: "Presentation design and slide storytelling", tags: ["Slides", "Presentations"], icon: <FaFilePowerpoint />, accent: "#d24726" },
];

export default function TechIKnow() {
    const [activeCategory, setActiveCategory] = useState("All");
    const visibleTechnologies = technologies.filter(
        (technology) => activeCategory === "All" || technology.category === activeCategory
    );

    return (
        <section className="tech-ik-section" id="tech-i-know" data-section="07">
            <div className="container">
                <div className="tech-ik-header" data-reveal>
                    <p className="section-label"><span className="label-index">07</span>Tools of the Trade</p>
                    <h2 className="section-title">Tech I <em className="accent-gradient">Know</em></h2>
                    <p className="tech-ik-subtitle">
                        Languages, databases, frameworks, and creative skills I use to bring digital ideas to life.
                    </p>
                </div>

                <div className="tech-filters" role="group" aria-label="Filter technologies">
                    {categories.map((category) => {
                        const count = category === "All"
                            ? technologies.length
                            : technologies.filter((technology) => technology.category === category).length;
                        const isActive = activeCategory === category;

                        return (
                            <button
                                type="button"
                                className={`tech-filter-btn${isActive ? " is-active" : ""}`}
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                aria-pressed={isActive}
                            >
                                {category}<span className="filter-count">{count}</span>
                            </button>
                        );
                    })}
                </div>

                <div className="tech-grid" aria-live="polite">
                    {visibleTechnologies.map((technology) => (
                        <article
                            className="tech-card"
                            data-reveal
                            key={technology.name}
                            style={{ "--tech-accent": technology.accent, opacity: 1 }}
                        >
                            <span className="tech-card-glow" aria-hidden="true"></span>
                            <div className="tech-card-top">
                                <span
                                    className="tech-icon-wrap"
                                    style={{ color: technology.accent, borderColor: `${technology.accent}55`, background: `${technology.accent}12` }}
                                    aria-hidden="true"
                                >
                                    {technology.icon}
                                </span>
                                <span className="tech-level-pill">{technology.category}</span>
                            </div>
                            <div className="tech-card-body">
                                <h3 className="tech-card-name">{technology.name}</h3>
                                <p className="tech-card-role">{technology.role}</p>
                                <div className="tech-card-tags">
                                    {technology.tags.map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <p className="tech-bottom-note">
                    <FaCode aria-hidden="true" />
                    My core programming languages are JavaScript, TypeScript, HTML, CSS, Python, C/C++, and Java.
                </p>
            </div>
        </section>
    );
}