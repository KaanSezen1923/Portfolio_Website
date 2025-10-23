import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import "../styles/Projects.css";


const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Face Recognition System</h3>
          <img src={project1} alt="Face Recognition System" className="project-image" />
          <p>Built with OpenCV, dlib, and face_recognition. Detects and identifies faces in real-time.</p>
          <a href="https://github.com/KaanSezen1923/Face-Search-Streamlit-App" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>Microprocessor Education Bot</h3>
          <img src={project2} alt="Microprocessor Education Bot" className="project-image" />
          <p>LLM fine-tuned with QLoRA for helping students learn microprocessors.</p>
          <a href="https://github.com/KaanSezen1923/Microprocessor_Education_Bot" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>Movie Rag</h3>
          <img src={project3} alt="Movie Rag" className="project-image" />
          <p>Movie Recommendation chatbot based graphrag uses neo4j graph database</p>
          <a href="https://github.com/KaanSezen1923/MovieRag" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>Tolkien Chatbot Streamlit App</h3>
          <img src={project4} alt="Tolkien Chatbot Streamlit App" className="project-image" />
          <p>Chatbot about J.R.R. Tolkien and his works using GPT-3.5 Turbo model.</p>
          <a href="https://github.com/KaanSezen1923/Tolkien-Chatbot-Streamlit-App" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>AI Image Generator App</h3>
          <img src={project5} alt="AI Image Generator App" className="project-image" />
          <p>Streamlit app that generates images from text prompts using dalle-3 model.</p>
                    <a href="https://github.com/KaanSezen1923/AI-Image-Generator" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>MovieRag Vercel App</h3>
          <img src={project6} alt="MovieRag Vercel App" className="project-image" />
          <p>React website deployed vercel make a movie recommendations uses graphrag arthitecture.</p>
          <a href="https://movierag.vercel.app">
            Try MovieRag
          </a>
        </div>
      </div>

    </section>
  );
};

export default Projects;
