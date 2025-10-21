
import profilePic from "../assets/image.png";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="section">
      
      <div className="about-content">
        <div className="about-left">
          <h2>About Me</h2>
          <p>
            I’m a 3rd-year Computer Engineering student passionate about Artificial Intelligence,
            Large Language Models, and Computer Vision. I’ve worked on projects like
            face recognition, LLM fine-tuning, and RAG systems.
          </p>
        </div>
  
        <div className="about-right">
          <img src={profilePic} alt="Kaan Sezen" className="profile-pic" />
        </div>
      </div>


     

    </section>
  );
};

export default About;




