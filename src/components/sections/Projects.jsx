function ProjectPoster({ src, alt }) {
    return (
        <img
            className="project-poster"
            src={`${import.meta.env.BASE_URL}images/${src}`}
            alt={alt}
            loading="lazy"
        />
    );
}

function BUStudioPreview() {
    return (
        <div className="media-preview bu-studio-preview" role="img" aria-label="BU Studio visual identity illustration">
            <div className="bu-studio-grid" aria-hidden="true"></div>
            <span className="bu-studio-kicker">INDEPENDENT CREATIVE STUDIO</span>
            <div className="bu-studio-wordmark"><span>BU</span><i></i><span>STUDIO</span></div>
            <span className="bu-studio-caption">IDENTITY / DIGITAL / DIRECTION</span>
        </div>
    );
}

export default function Projects() {
    return (
        <section className="projects" id="projects" data-section="02">
            <div className="container">
                <p className="section-label" data-reveal><span className="label-index">02</span>Selected Work</p>
                <h2 className="section-title" data-reveal>Things I've <em className="accent-gradient">Built</em></h2>
                <div className="projects-grid">
                    <article className="project-card" data-reveal data-cursor="view">
                        <div className="card-media">
                            <span className="card-index">01</span>
                            <ProjectPoster src="fc.png" alt="File Converter project poster" />
                            <span className="status status-active">● Active</span>
                        </div>
                        <div className="card-body">
                            <div className="card-top"><h3>File Converter</h3><a href="https://vedantmh48-cpu.github.io/file-converter/" className="card-link" target="_blank" rel="noopener">View Project <span className="link-arrow">↗</span></a></div>
                            <p>Fast browser-based file conversion tool with drag-and-drop support and instant format switching.</p>
                            <div className="tech-stack"><span>Next.js</span><span>TypeScript</span><span>Tailwind</span></div>
                        </div>
                    </article>
                    <article className="project-card" data-reveal data-cursor="view">
                        <div className="card-media">
                            <span className="card-index">02</span>
                            <ProjectPoster src="et.png" alt="Expense Tracker project poster" />
                            <span className="status status-active">● Active</span>
                        </div>
                        <div className="card-body">
                            <div className="card-top"><h3>Expense Tracker</h3><a href="https://vedantmh48-cpu.github.io/Expense-tracker/" className="card-link" target="_blank" rel="noopener">View Project <span className="link-arrow">↗</span></a></div>
                            <p>Personal finance dashboard with visual insights, category management and smooth interactions.</p>
                            <div className="tech-stack"><span>React</span><span>Charts</span><span>TypeScript</span></div>
                        </div>
                    </article>
                    <article className="project-card" data-reveal data-cursor="view">
                        <div className="card-media">
                            <span className="card-index">03</span>
                            <ProjectPoster src="pai.png" alt="Procelya AI project poster" />
                            <span className="status status-active">● Live</span>
                        </div>
                        <div className="card-body">
                            <div className="card-top"><h3>Procelya AI</h3><a href="https://vedantmh48-cpu.github.io/Procelya-AI/" className="card-link" target="_blank" rel="noopener noreferrer">View Project <span className="link-arrow">↗</span></a></div>
                            <p>Intelligent workflow platform — automating repetitive tasks with AI-powered pipelines and clean interfaces.</p>
                            <div className="tech-stack"><span>Next.js</span><span>AI / LLM</span><span>Supabase</span></div>
                        </div>
                    </article>
                    <article className="project-card" data-reveal data-cursor="view">
                        <div className="card-media">
                            <span className="card-index">04</span>
                            <ProjectPoster src="f1.png" alt="Formula 1 project poster" />
                            <span className="status status-active">● Live</span>
                        </div>
                        <div className="card-body">
                            <div className="card-top"><h3>F1 Race Experience</h3><a href="https://vedantmh48-cpu.github.io/F1/" className="card-link" target="_blank" rel="noopener noreferrer">View Project <span className="link-arrow">↗</span></a></div>
                            <p>A motorsport-inspired digital experience exploring circuit visuals, race-day stats and the energy of Formula One.</p>
                            <div className="tech-stack"><span>Sports UI</span><span>Data Visuals</span><span>Motion</span></div>
                        </div>
                    </article>
                    <article className="project-card" data-reveal data-cursor="view">
                        <div className="card-media">
                            <span className="card-index">05</span>
                            <BUStudioPreview />
                            <span className="status status-active">● Live</span>
                        </div>
                        <div className="card-body">
                            <div className="card-top"><h3>BU Studio</h3><a href="https://bustudio.vercel.app/" className="card-link" target="_blank" rel="noopener noreferrer">View Project <span className="link-arrow">↗</span></a></div>
                            <p>A considered visual identity and digital direction concept for a contemporary creative studio.</p>
                            <div className="tech-stack"><span>Brand Identity</span><span>Art Direction</span><span>Web Design</span></div>
                        </div>
                    </article>
                    <article className="project-card" data-reveal data-cursor="view">
                        <div className="card-media">
                            <span className="card-index">06</span>
                            <ProjectPoster src="marvel.jpg" alt="Marvel Studios project poster" />
                            <span className="status status-soon">◉ Studio Concept</span>
                        </div>
                        <div className="card-body">
                            <div className="card-top"><h3>Marvel Studios</h3><a href="https://vedantmh48-cpu.github.io/Marvel/" className="card-link" target="_blank" rel="noopener noreferrer">View Project <span className="link-arrow">↗</span></a></div>
                            <p>A cinematic digital experience concept shaped around bold storytelling and immersive visual design.</p>
                            <div className="tech-stack"><span>React</span><span>Vite</span><span>GSAP</span></div>
                        </div>
                    </article>
                </div>
                <div className="projects-actions" data-reveal>
                    <a
                        href="https://github.com/vedantmh48-cpu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary projects-more-btn"
                        data-cursor="button"
                    >
                        Explore More Projects <span className="btn-arrow" aria-hidden="true">↗</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
