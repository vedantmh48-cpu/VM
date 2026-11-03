import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/#home" },
  { label: "About", to: "/#about" },
  { label: "Skills", to: "/#skills" },
  { label: "Projects", to: "/#projects" },
  { label: "Education", to: "/#education" },
  { label: "Certifications", to: "/#certifications" },
  { label: "Tech I Know", to: "/#tech-i-know" },
  { label: "Contact", to: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.classList.remove("menu-open");
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const handleNavClick = (e, to) => {
    setMenuOpen(false);
    document.body.classList.remove("menu-open");
    const hash = to.split("#")[1];
    if (hash) {
      e.preventDefault();
      if (location.pathname !== "/") {
        window.location.href = to;
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`} id="navbar">
        <nav className="nav-inner">
          <Link to="/#home" className="logo" data-cursor="button" onClick={(e) => handleNavClick(e, "/#home")}>
            <img src={`${import.meta.env.BASE_URL}Logo1.png`} alt="Vedant logo" className="logo-img" draggable="false" />
            <span className="logo-text">VedantMhatre<span className="dot">.</span></span>
          </Link>

          <span className="island-label" aria-hidden="true">Vedant<span className="dot">.</span></span>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="nav-link" data-cursor="button" onClick={(e) => handleNavClick(e, link.to)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <a href={`${import.meta.env.BASE_URL}Vedant%20Mhatre.pdf`} className="nav-cta" data-cursor="button" download="Vedant Mhatre.pdf">
            Download Resume
          </a>

          <button
            className={`hamburger${menuOpen ? " active" : ""}`}
            id="hamburger"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
            data-cursor="button"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      <nav className={`mobile-menu${menuOpen ? " open" : ""}`} id="mobileMenu" aria-label="Mobile navigation">
        <div className="mobile-menu-inner">
          <div className="mobile-menu-header">
            <div>
              <span className="mobile-menu-kicker">Vedant Mhatre</span>
              <span className="mobile-menu-title">Navigate</span>
            </div>
            <button className="mobile-menu-close" type="button" onClick={() => setMenuOpen(false)}>
              <span className="mobile-menu-close-arrow" aria-hidden="true">←</span>
              <span>Close</span>
            </button>
          </div>
          <ul>
            {navLinks.map((link, index) => (
              <li key={link.to}>
                <Link to={link.to} className="mobile-link" onClick={(e) => handleNavClick(e, link.to)}>
                  <span className="mobile-link-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <span>{link.label}</span>
                  <span className="mobile-link-arrow" aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mobile-menu-footer">Creative developer <span aria-hidden="true">·</span> Designer</p>
        </div>
      </nav>
    </>
  );
}
