import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
      <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >

      {/* TEXT AREA */}
      <div className="hero-text">
        <h4>Hi there! I am</h4>
        <h1 className="hero-name">
          <span className="first-name">Mavia</span>
          <span className="last-name">Ahmed</span>
        </h1>

        <p>
          A passionate Frontend Web Developer crafting clean, modern, and
          user-friendly digital experiences. 
          <br />
          I love building elegant UI with
          smooth interactions, animations, and pixel-perfect layouts.
        </p>

        <div className="new-buttons">
          <button className="btn-modern">Resume</button>
          <button className="btn-light">Portfolio</button>
        </div>
      </div>

    </motion.section>
  );
};

export default Hero;

