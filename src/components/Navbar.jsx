import { useEffect, useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

// 1. Define your links once in an array
const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Shared function to render links
  const renderLinks = (isMobile = false) => (
    NAV_LINKS.map((link) => (
      <li key={link.name}>
        <a href={link.href} onClick={() => isMobile && setMenuOpen(false)}>
          {link.name}
        </a>
      </li>
    ))
  );

  return (
    <>
      <nav className={`top-navbar ${isScrolled ? "nav-hidden" : ""}`}>
        <div className="nav-container">
          <img src="/logo4.png" alt="Logo" className="navbar-logo-img" />

          {/* Desktop Links - mapped from array */}
          <ul className="nav-items">
            {renderLinks()}
          </ul>

          <div className="nav-actions">
            <a href="github.com" target="_blank" rel="noreferrer" className="github-button">
              <FaGithub /> <span>Github</span>
            </a>
            <button className="hamburger" onClick={() => setMenuOpen(true)}>
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </button>

        {/* Mobile Links - mapped from the same array */}
        <ul className="mobile-nav-items">
          {renderLinks(true)}
        </ul>

        <a href="github.com" className="github-button mobile-github">
          <FaGithub /> Github
        </a>
      </div>
      
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}
    </>
  );
}
