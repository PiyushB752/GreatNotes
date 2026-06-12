import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-icon">📚</span>

          <span className="navbar-logo-text">
            GreatNotes
          </span>
        </Link>

        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>

          <Link to="/about" className="navbar-link">
            About
          </Link>

          <Link to="/login" className="navbar-link">
            Login
          </Link>

          <Link to="/signup" className="navbar-button">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;