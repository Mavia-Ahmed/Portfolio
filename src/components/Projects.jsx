import profileImg from "../assets/web-pic-1.png";
import profileImage from "../assets/AIimage.png";
import "./Projects.css"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects">
      <div className="full-content">
        <h2 className="projects-title">PORTFOLIO</h2>
        <h3 className="group-title">Agentic AI Projects</h3>
        <motion.div className="ai-content"
        initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ y: -8 }}
  transition={{ duration: 0.5 }}
        >
          <div className="for-image">
            <img src={profileImage} alt="" />
          </div>
          <div className="for-content">
            <h4>Autonomous Multi-Tool AI Agent</h4>

            <p className="ai-content-desc">
              An intelligent agent capable of planning, tool selection,
              and memory-based reasoning to solve complex tasks autonomously.
            </p>

            <div className="ai-content-stack">
              <span>OpenAI Agent SDK</span>
              <span>LangChain</span>
              <span>Tools</span>
              <span>Memory</span>
              <span>Python</span>
            </div>

            <a href="#" className="ai-content-link">
              View Project →
            </a>
            <br />
            <a href="#" className="ai-content2-link">
              view code &lt;/&gt;
            </a>
          </div>
        </motion.div>
        <h3 className="group-title">Front-end development</h3>
        <motion.div className="full-web-content"
        initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ y: -8 }}
  transition={{ duration: 0.5 }}
        >
          <div className="web-content">
            <div className="for-web-image">
              <img src={profileImg} alt="" />
            </div>
            <div className="for-web-content">
              <h2>Real-Estate Website</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti fuga quisquam tempora, s</p>
              <a href="#" className="ai-content-link">
                View Project →
              </a>
              <br />
              <a href="#" className="ai-content2-link">
                view code &lt;/&gt;
              </a>
            </div>
          </div>
          <div className="web2-content">
            <div className="for-web-image">
              <img src={profileImg} alt="" />
            </div>
            <div className="for-web-content">
              <h2>Interior Design Website</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti fuga quisquam tempora, s</p>
              <a href="#" className="ai-content-link">
                View Project →
              </a>
              <br />
              <a href="#" className="ai-content2-link">
                view code &lt;/&gt;
              </a>
            </div>
          </div>
        </motion.div>
        <div className="explore-projects">
          <Link to="/portfolio/1" target="_blank" rel="noopener noreferrer" className="all-project-link">
            Explore more projects here →
          </Link>
        </div>
      </div>
    </section>
  );
}