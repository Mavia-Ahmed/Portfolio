import { useState } from "react";
import "./Skills.css";
import { motion } from "framer-motion";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("ai");

  const agenticSkills = [
    "OpenAI Agent SDK",
    "LangChain",
    "Prompt Engineering",
    "Context Engineering",
    "RAG",
    "Tool Integration",
    "Memory Systems",
    "PDF / Image QA",
  ];

  const frontendSkills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "DOM Manipulation",
    "Responsive Design",
  ];

  const skillsToShow = activeTab === "ai" ? agenticSkills : frontendSkills;

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-heading">My Skills</h2>

        <div className="skills-tabs">
          <button
            className={`skills-tab ${activeTab === "ai" ? "active" : ""}`}
            onClick={() => setActiveTab("ai")}
          >
            Agentic AI
          </button>

          <button
            className={`skills-tab ${activeTab === "frontend" ? "active" : ""}`}
            onClick={() => setActiveTab("frontend")}
          >
            Frontend Development
          </button>
        </div>

        <div className="skills-grid">
          {skillsToShow.map((skill) => (
            <motion.div key={skill} className="skill-card"
            initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4 }}
            >
              <span className="skill-icon">▸</span>
              <span className="skill-text">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

