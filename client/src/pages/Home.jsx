import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
      <section className="home-hero">
        <div className="home-container home-center">
          <span className="home-badge">
            📚 Smart Study Notes Platform
          </span>
          <h1 className="home-title">
            Study Smarter
            <br />
            With{" "}
            <span className="home-gradient-text">
              GreatNotes
            </span>
          </h1>
          <p className="home-description">
            Create structured notes, store learning resources, organize study materials and generate AI-powered summaries in one beautiful workspace.
          </p>
          <div className="home-hero-buttons">
            <Link to="/signup" className="home-primary-btn" >
              Get Started
            </Link>
            <Link to="/about" className="home-secondary-btn" >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className="home-features">
        <div className="home-container">
          <div className="home-features-grid">
            <div className="home-feature-card">
              <div className="home-feature-icon">📝</div>
              <h3 className="home-feature-title">
                Smart Notes
              </h3>
              <p className="home-feature-text">
                Create detailed study notes and organize your learning materials efficiently.
              </p>
            </div>
            <div className="home-feature-card">
              <div className="home-feature-icon">🤖</div>
              <h3 className="home-feature-title">
                AI Summaries
              </h3>
              <p className="home-feature-text">
                Generate concise summaries using Gemini AI and revise concepts faster.
              </p>
            </div>
            <div className="home-feature-card">
              <div className="home-feature-icon">📚</div>
              <h3 className="home-feature-title">
                Study Resources
              </h3>
              <p className="home-feature-text">
                Save videos, images, audio recordings, and
                definitions inside your notes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-how-it-works">
        <div className="home-container-small">
          <h2 className="home-section-title">
            How It Works
          </h2>
          <div className="home-steps-grid">
            <div className="home-step">
              <div className="home-step-number">
                1
              </div>
              <h3 className="home-step-title">
                Create Notes
              </h3>
              <p className="home-step-text">
                Create notes for subjects, chapters, or concepts you want to learn.
              </p>
            </div>
            <div className="home-step">
              <div className="home-step-number">
                2
              </div>
              <h3 className="home-step-title">
                Add Blocks
              </h3>
              <p className="home-step-text">
                Add text, videos, images, definitions, audio and summaries.
              </p>
            </div>
            <div className="home-step">
              <div className="home-step-number">
                3
              </div>
              <h3 className="home-step-title">
                Learn Better
              </h3>
              <p className="home-step-text">
                Keep everything organized and revise smarter
                using AI-generated summaries.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-cta">
        <div className="home-container-cta">
          <div className="home-cta-card">
            <h2 className="home-cta-title">
              Ready To Improve Your Learning?
            </h2>
            <p className="home-cta-text">
              Join GreatNotes and organize your study materials
              in one place.
            </p>
            <Link to="/signup" className="home-cta-btn" >
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;