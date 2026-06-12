import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../services/authService";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [formData, setFormData] = useState({
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
      const data = await loginUser(formData);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-grid">
          <div className="login-left">
            <h1 className="login-left-title">Welcome Back</h1>
            <p className="login-left-text">
              Continue organizing your study notes, AI summaries, videos, images and learning resources with GreatNotes.
            </p>
            <div className="login-features">
              <div>📚 Smart Study Notes</div>
              <div>🤖 AI Summaries</div>
              <div>✅ Task Management</div>
            </div>
          </div>
          <div className="login-right">
            <div className="login-header">
              <h2 className="login-title">Login</h2>
              <p className="login-subtitle">Sign in to your account</p>
            </div>
            <form onSubmit={handleSubmit} className="login-form">
              <div>
                <label className="login-label">Email</label>
                <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} className="login-input" />
              </div>
              <div>
                <label className="login-label">Password</label>
                <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} className="login-input" />
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
            <p className="login-footer">
              Don't have an account?{" "}
              <Link to="/signup" className="login-link">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;