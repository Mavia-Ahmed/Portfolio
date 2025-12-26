import React from "react";
import "./About.css";
import profileImg from "../assets/hero.png"; // change to your actual file name
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section id="about" className="about-section"
    initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
    >
      <div className="about-container">
        <h2 className="divider-title">
          ABOUT ME
        </h2>
        
        <p className="about-subtitle">ALLOW ME TO INTRODUCE MYSELF.</p>

        <div className="about-content">
          <div className="about-image-wrapper">
            <img src={profileImg} alt="About" className="about-image" />
            <p className="about-annotation">That's me →</p>
          </div>

          <div className="about-text">
            <p>
              I'm obsessed with making things and even more obsessed with making things better.
              I've been in the business of creating since I hung my first
              painting on the fridge when I was 3. After graduating, I've been
              actively involved in the web design community for the last 8 years.
              I’ve designed websites for small businesses, corporations,
              nonprofits, churches, musicians and more.
            </p>

            <p>
              My specialty is front-end web design and development, making pixel
              magic in Photoshop, and turning it into beautiful, semantic HTML &
              CSS. I love making designs move by creating professional motion
              graphics and video.
            </p>

            <p>
              When I'm not designing, I'm probably spending time with my family,
              reading, enjoying basketball, or learning something new while
              staying inspired by great creators.
            </p>
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default About;
