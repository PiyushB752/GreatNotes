import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Sidebar.css";

function Sidebar() {
  const location = useLocation();
  const { user, logout } = useAuth();

  const [collapsed, setCollapsed] = useState(false);

  const links = [
    {
      name: "Dashboard",
      icon: "📚",
      path: "/dashboard",
    },
    {
      name: "Create Note",
      icon: "➕",
      path: "/notes/create",
    },
    {
      name: "Todo List",
      icon: "✅",
      path: "/todo",
    },
    {
      name: "Profile",
      icon: "👤",
      path: "/profile",
    },
  ];

  return (
    <aside
      className={`sidebar ${
        collapsed ? "sidebar-collapsed" : "sidebar-expanded"
      }`}
    >
      <div className="sidebar-header">
        <div className="sidebar-header-content">
          {!collapsed && (
            <div>
              <h1 className="sidebar-title">GreatNotes</h1>

              <p className="sidebar-subtitle">
                Smart Study Notes
              </p>
            </div>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="sidebar-toggle-btn"
          >
            {collapsed ? "➡️" : "⬅️"}
          </button>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="sidebar-links">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              title={link.name}
              className={`sidebar-link ${
                location.pathname === link.path
                  ? "sidebar-link-active"
                  : ""
              } ${collapsed ? "sidebar-link-collapsed" : ""}`}
            >
              <span className="sidebar-link-icon">
                {link.icon}
              </span>

              {!collapsed && (
                <span className="sidebar-link-text">
                  {link.name}
                </span>
              )}
            </Link>
          ))}
        </div>
      </nav>

      <div className="sidebar-footer">
        {collapsed ? (
          <div className="sidebar-footer-collapsed">
            <div className="sidebar-avatar">
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            <button
              onClick={logout}
              className="sidebar-logout-icon-btn"
            >
              🚪
            </button>
          </div>
        ) : (
          <>
            <div className="sidebar-user">
              <div className="sidebar-avatar sidebar-avatar-large">
                {user?.name?.charAt(0).toUpperCase()}
              </div>

              <div className="sidebar-user-info">
                <h3 className="sidebar-user-name">
                  {user?.name || "Student"}
                </h3>

                <p className="sidebar-user-email">
                  {user?.email}
                </p>
              </div>
            </div>

            <button
              onClick={logout}
              className="sidebar-logout-btn"
            >
              <span>🚪</span>
              <span className="sidebar-logout-text">
                Logout
              </span>
            </button>
          </>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;