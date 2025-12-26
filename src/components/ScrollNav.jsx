import { useEffect, useRef, useState } from "react";
import "./ScrollNav.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function ScrollNav() {
  const navRef = useRef(null);
  const footerRef = useRef(null);
  const [active, setActive] = useState("home");
  const [stopNav, setStopNav] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const footer = document.querySelector("footer");
    footerRef.current = footer;

    // Active circle highlight
    const handleScroll = () => {
      let current = "";

      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const height = sec.clientHeight;

        if (scrollY >= top - height / 3) {
          current = sec.id;
        }
      });

      setActive(current);

      // FOOTER STOP LOGIC
      const nav = navRef.current;
      const footerTop = footer.getBoundingClientRect().top;

      if (footerTop <= window.innerHeight - 120) {
        setStopNav(true); // Stop when footer appears
      } else {
        setStopNav(false); // Normal
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={navRef}
      className={`side-nav ${stopNav ? "stop-nav" : ""}`}
    >
      <a href="#home" className={`nav-btn ${active === "home" ? "active" : ""}`}>
        <i className="fa-solid fa-house"></i>
      </a>

      <a href="#about" className={`nav-btn ${active === "about" ? "active" : ""}`}>
        <i className="fa-solid fa-user"></i>
      </a>

      <a href="#skills" className={`nav-btn ${active === "skills" ? "active" : ""}`}>
        <i className="fa-solid fa-briefcase"></i>
      </a>

      <a href="#projects" className={`nav-btn ${active === "projects" ? "active" : ""}`}>
        <i className="fa-solid fa-image"></i>
      </a>

      {/* <a href="#contact" className={`nav-btn ${active === "contact" ? "active" : ""}`}>
        <i className="fa-solid fa-envelope"></i>
      </a> */}
    </div>
  );
}
