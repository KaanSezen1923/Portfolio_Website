import profilePic from "../assets/image.png";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="about-content">
        <div className="about-left">
          <h2>About Me</h2>
          <div className="intro-text">
            <p>
              Hi! I'm <strong>Necmettin Kaan Sezen</strong>, a final-year Computer Engineering student with a passion for building intelligent systems.
            </p>
          </div>

          <div className="focus-areas">
            <h3>What I Do</h3>
            <p>
              I specialize in <strong>Artificial Intelligence</strong>, <strong>Large Language Models</strong>, and <strong>Computer Vision</strong> — creating systems that bridge cutting-edge research with real-world applications.
            </p>
          </div>

          <div className="projects-highlight">
            <h3>Featured Projects</h3>
            <ul>
              <li>
                <strong>MovieRAG</strong> — A GraphRAG-based recommendation system using multi-agent reasoning and Neo4j graph databases
              </li>
              <li>
                <strong>Microprocessor Education Assistant</strong> — Fine-tuned with QLoRA for personalized, contextual learning
              </li>
              <li>
                <strong>Face Recognition Systems</strong> — Real-time computer vision applications
              </li>
            </ul>
          </div>

          <div className="tech-stack">
            <h3>Tech Stack</h3>
            <p>
              LangChain • LangGraph • FastAPI • React/React Native • Firebase • Gemini • OpenAI • Neo4j
            </p>
          </div>

          <div className="connect">
            <p>
              I document my AI journey and share insights on{" "}
              <a href="https://medium.com/@kaantruk1923" target="_blank" rel="noopener noreferrer">
                Medium
              </a>{" "}
              and{" "}
              <a href="https://www.linkedin.com/in/kaan-sezen-542420255/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              . Let's connect and build the future of AI together!
            </p>
          </div>
        </div>

        <div className="about-right">
          <img src={profilePic} alt="Kaan Sezen" className="profile-pic" />
          <div className="image-caption">Future AI Engineer</div>
        </div>
      </div>
    </section>
  );
};

export default About;