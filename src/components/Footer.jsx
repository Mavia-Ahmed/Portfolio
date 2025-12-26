import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Identity */}
        <motion.div className="footer-brand"
        initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
        >
          <img src="/logo4.png" alt="Logo" className="footer-logo" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  >
          <p className="footer-greeting">
            Thanks for scrolling this far <span>👋</span>
          </p>

          <p className="footer-sub">Quik Links:</p>

          {/* Primary Actions */}
          <nav className="footer-actions">
            <a href="YOUR_PROJECT_LINK" target="_blank" rel="noreferrer">
              My Projects
            </a>
            <a href="YOUR_GITHUB_LINK" target="_blank" rel="noreferrer">
              GitHub Profile
            </a>
          </nav>
        </motion.div>

        {/* Social */}
        <motion.div className="footer-social"
        initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
        >
          <span className="footer-social-title">Let’s Connect</span>
          <div className="social-icons">
            <a href="YOUR_LINKEDIN_LINK" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="YOUR_GITHUB_LINK" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:your@email.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </motion.div>
      </div>
      {/* Meta */}
        <p className="footer-copy">© 2025 Ali Khan</p>
    </footer>
  );
};

export default Footer;
