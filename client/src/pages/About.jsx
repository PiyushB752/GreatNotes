import "./About.css";

function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <span className="about-badge">
          About GreatNotes
        </span>
        <h1 className="about-title">
          Built For Students,
          <br />
          Designed For Learning
        </h1>
        <p className="about-description">
          GreatNotes helps students organize notes, manage
          study resources, and generate AI-powered summaries
          from a single platform.
        </p>
      </section>
      <section className="about-mission-section">
        <div className="about-mission-card">
          <h2 className="about-mission-title">
            Our Mission
          </h2>
          <p className="about-mission-text">
            Learning becomes easier when everything is
            organized. GreatNotes was built to help students
            collect study materials, create structured notes,
            save educational resources, and revise efficiently
            using AI assistance.
          </p>
        </div>
      </section>
      <section className="about-features-section">
        <h2 className="about-features-title">
          What Makes GreatNotes Different?
        </h2>
        <div className="about-features-grid">
          <div className="about-feature-card">
            <h3 className="about-feature-title">
              📚 All Study Resources Together
            </h3>
            <p className="about-feature-text">
              Combine text notes, images, videos, audio files,
              definitions, and AI summaries in one note.
            </p>
          </div>
          <div className="about-feature-card">
            <h3 className="about-feature-title">
              🤖 AI Powered Learning
            </h3>
            <p className="about-feature-text">
              Generate concise summaries to quickly revise
              lengthy study materials.
            </p>
          </div>
          <div className="about-feature-card">
            <h3 className="about-feature-title">
              🎯 Productivity Focused
            </h3>
            <p className="about-feature-text">
              Use the integrated Todo system to track study
              tasks and assignments.
            </p>
          </div>
          <div className="about-feature-card">
            <h3 className="about-feature-title">
              ⚡ Modern User Experience
            </h3>
            <p className="about-feature-text">
              Clean layouts, responsive design, and an
              intuitive interface built for students.
            </p>
          </div>
        </div>
      </section>
      <section className="about-cta-section">
        <div className="about-cta-content">
          <h2 className="about-cta-title">
            Learn Better With GreatNotes
          </h2>
          <p className="about-cta-text">
            A modern study companion that helps students stay
            organized, productive, and focused.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;