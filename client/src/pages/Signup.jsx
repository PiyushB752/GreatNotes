import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signupUser } from "../services/authService";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await signupUser(formData);

      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      setUser(data.user);

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Signup failed"
      );
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <div className="signup-grid">
          {/* Left Side */}

          <div className="signup-left">
            <h1 className="signup-left-title">
              Join GreatNotes
            </h1>

            <p className="signup-left-text">
              Build smarter study notes, organize your
              resources, and learn more efficiently with
              AI-powered assistance.
            </p>

            <div className="signup-features">
              <div>📝 Create Notes</div>
              <div>🎥 Save Learning Resources</div>
              <div>⚡ Generate AI Summaries</div>
            </div>
          </div>

          {/* Right Side */}

          <div className="signup-right">
            <div className="signup-header">
              <h2 className="signup-title">
                Create Account
              </h2>

              <p className="signup-subtitle">
                Start your learning journey
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="signup-form"
            >
              <div>
                <label className="signup-label">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  className="signup-input"
                />
              </div>

              <div>
                <label className="signup-label">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  className="signup-input"
                />
              </div>

              <div>
                <label className="signup-label">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  onChange={handleChange}
                  className="signup-input"
                />
              </div>

              <button
                type="submit"
                className="signup-button"
              >
                Create Account
              </button>
            </form>

            <p className="signup-footer">
              Already have an account?{" "}
              <Link
                to="/login"
                className="signup-link"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;