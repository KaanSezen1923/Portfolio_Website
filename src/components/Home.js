import "../styles/Home.css";
import profilePic from "../assets/image.png";

const Home = () => {
  return (
    <section id="home" className="section">
      <div className="home-content">
        
        <div className="home-left">
          <img src={profilePic} alt="Kaan Sezen" className="profile-pic" />
        </div>

      
        <div className="home-right">
          <h1>Hi, I'm Kaan Sezen 👋</h1>
          <p>Computer Engineering Student • AI Enthusiast • Developer</p>
          <button
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;

