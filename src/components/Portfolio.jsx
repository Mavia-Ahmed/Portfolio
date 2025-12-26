import "./Portfolio.css";
import profileImg from "../assets/AIimage.png";
import { motion } from "framer-motion";


const projects = [
  {
    title: "Agentic AI Research Assistant",
    description:
      "An autonomous AI agent that reasons over documents, plans actions, and executes tools to answer complex queries.",
    image: "/projects/agentic-ai-1.png",
    tech: ["Python", "LangChain", "OpenAI SDK"],
    live: "#",
    code: "#",
  },
  {
    title: "Multi-Agent Workflow System",
    description:
      "A coordinated multi-agent system handling task delegation, memory, and tool orchestration.",
    image: "/projects/agentic-ai-2.png",
    tech: ["Agents", "Memory", "Tools"],
    live: "#",
    code: "#",
  },
  {
    title: "Frontend Product Dashboard",
    description:
      "A modern dashboard focused on clarity, performance, and clean UI for real-world usage.",
    image: "/projects/frontend-1.png",
    tech: ["React", "CSS", "UX"],
    live: "#",
    code: "#",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio-body">
      <div className="portfolio-page">

      <motion.div className="portfolio-intro"
      initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
      >
        <h3 className="intro-line">
          Building agentic AI systems & clean frontend products. <a href="https://github.com/yourusername" target="_blank">GitHub↗</a>
        </h3>
      </motion.div>


      <div className="portfolio-projects">
        <h3 className="portfolio-title">Agentic AI Projects</h3>
        {projects.map((project, index) => (
          <motion.div className="portfolio-card" key={index}
          initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  whileHover={{ y: -8 }}
  transition={{ duration: 0.5 }}
          >
            <div className="portfolio-image">
              <img src={profileImg} alt={project.title} />
            </div>

            <div className="portfolio-content">
              <h4>{project.title}</h4>
              <p className="portfolio-desc">{project.description}</p>

              <div className="portfolio-tech">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <div className="portfolio-links">
                <a href={project.live} target="_blank" className="portfolio1-link">
                  Read more →
                </a>
                <br />

                <a href={project.code} target="_blank" className="portfolio2-link">
                  view code &lt;/&gt;
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}