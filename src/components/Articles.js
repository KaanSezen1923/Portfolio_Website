import article1 from '../assets/article1.png';
import article2 from '../assets/article2.png';
import article3 from '../assets/article3.png';
import article4 from '../assets/article4.png';
import "../styles/Articles.css";

const Articles = () => {
  return (
    <section id="articles" className="section">
      <h2>Articles</h2>
      <div className="article-list">
        <div className="article-card">
          <h3>MovieRag: A Smart GraphRAG Movie Recommendation Chatbot to Beat Streaming Overload</h3>
          <img src={article1} alt="Article 1" />
          <a href='https://medium.com/@kaantruk1923/movierag-a-smart-graphrag-movie-recommendation-chatbot-to-beat-streaming-overload-e44fbc855eb6' target="_blank" rel="noopener noreferrer">
            Read on Medium
          </a>
        </div>
        <div className="article-card">
          <h3>Building DocuMind: A RAG-Powered PDF Chatbot with Streamlit and Google Gemini</h3>
          <img src={article2} alt="Article 2" />
          <a href='https://medium.com/@kaantruk1923/building-documind-a-rag-powered-pdf-chatbot-with-streamlit-and-google-gemini-2e11000959be' target="_blank" rel="noopener noreferrer">
            Read on Medium
          </a>
        </div>
        <div className="article-card">
          <h3>Building a Face Recognition App with Streamlit: A Step-by-Step Guide</h3>
          <img src={article3} alt="Article 3" />
          <a href='https://medium.com/@kaantruk1923/building-a-face-recognition-app-with-streamlit-a-step-by-step-guide-1f0951909a7a' target="_blank" rel="noopener noreferrer">
            Read on Medium
          </a>
        </div>
        <div className="article-card">
          <h3>Combining Cinema and Technology: Character Vocalization Using Python-Based Facial Recognition</h3>
          <img src={article4} alt="Article 4" />
          <a href='https://medium.com/@kaantruk1923/combining-cinema-and-technology-character-vocalization-using-python-based-facial-recognition-8a5af4e03f27' target="_blank" rel="noopener noreferrer">
            Read on Medium
          </a>
        </div>
       
      </div>
    </section>
  );
};

export default Articles;
