import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser =
      localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="profile-loading">
        Loading...
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1 className="profile-title">
          Profile
        </h1>
        <p className="profile-subtitle">
          Manage your account information.
        </p>
      </div>
      <div className="profile-user">
        <div className="profile-avatar">
          {user.name?.charAt(0).toUpperCase()}
        </div>
        <div>
          <h2 className="profile-user-name">
            {user.name}
          </h2>
          <p className="profile-user-email">
            {user.email}
          </p>
        </div>
      </div>
      <div className="profile-grid">
        <div className="profile-card">
          <p className="profile-card-label">
            Full Name
          </p>
          <h3 className="profile-card-value">
            {user.name}
          </h3>
        </div>
        <div className="profile-card">
          <p className="profile-card-label">
            Email Address
          </p>
          <h3 className="profile-card-value profile-break-all">
            {user.email}
          </h3>
        </div>
        {user.createdAt && (
          <div className="profile-card profile-card-full">
            <p className="profile-card-label">
              Member Since
            </p>
            <h3 className="profile-card-value">
              {new Date(user.createdAt).toLocaleDateString()}
            </h3>
          </div>
        )}
      </div>
      <button onClick={handleLogout} className="profile-logout-btn" >
        Logout
      </button>
    </div>
  );
}

export default Profile;