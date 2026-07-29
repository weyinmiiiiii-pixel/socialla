import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  FiHome,
  FiCompass,
  FiBell,
  FiMessageSquare,
  FiBookmark,
  FiUser,
  FiSettings,
  FiLogOut,
  FiPlusCircle
} from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const Sidebar = ({ onOpenCreatePost }) => {
  const { currentUser, logout } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    addToast('You have logged out successfully.', 'info');
    navigate('/login');
  };

  const navItems = [
    { label: 'Home', path: '/home', icon: <FiHome /> },
    { label: 'Explore', path: '/explore', icon: <FiCompass /> },
    { label: 'Notifications', path: '/notifications', icon: <FiBell />, badge: 2 },
    { label: 'Messages', path: '/messages', icon: <FiMessageSquare />, badge: 2 },
    { label: 'Bookmarks', path: '/profile?tab=saved', icon: <FiBookmark /> },
    { label: 'Profile', path: '/profile', icon: <FiUser /> },
    { label: 'Settings', path: '/settings', icon: <FiSettings /> }
  ];

  return (
    <aside className="app-left-sidebar">
      <div className="sidebar-container glass-card">
        {/* Brand Logo */}
        <NavLink to="/home" className="sidebar-logo">
          <img src="/socialla-logo.svg" alt="Socialla" className="sidebar-logo-img" />
          <span className="sidebar-logo-text">Socialla</span>
        </NavLink>

        {/* Navigation List */}
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `sidebar-nav-item ${isActive ? 'active' : ''}`
              }
            >
              <span className="sidebar-nav-icon">{item.icon}</span>
              <span className="sidebar-text">{item.label}</span>
              {item.badge && <span className="sidebar-badge">{item.badge}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Create Post Quick Button */}
        {onOpenCreatePost && (
          <button className="btn btn-primary sidebar-post-btn" onClick={onOpenCreatePost}>
            <FiPlusCircle className="sidebar-post-btn-icon" />
            <span className="sidebar-post-btn-text">Create Post</span>
          </button>
        )}

        {/* User Card */}
        {currentUser && (
          <div className="sidebar-user-footer">
            <NavLink to="/profile" className="sidebar-user-info">
              <div className="avatar avatar-md">
                <img src={currentUser.avatar} alt={currentUser.name} />
              </div>
              <div className="sidebar-user-details sidebar-text">
                <span className="sidebar-user-name">{currentUser.name}</span>
                <span className="sidebar-user-handle">@{currentUser.username}</span>
              </div>
            </NavLink>

            <button
              className="btn-icon sidebar-logout-btn"
              onClick={handleLogout}
              title="Logout"
            >
              <FiLogOut />
            </button>
          </div>
        )}
      </div>

      <style>{`
        .sidebar-container {
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 1.25rem;
          gap: 1.5rem;
        }

        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem;
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 800;
        }

        .sidebar-logo-img {
          width: 36px;
          height: 36px;
          border-radius: 10px;
        }

        .sidebar-logo-text {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          flex: 1;
        }

        .sidebar-nav-item {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          padding: 0.75rem 1rem;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
          position: relative;
        }

        .sidebar-nav-item:hover {
          background: var(--primary-light);
          color: var(--primary);
          transform: translateX(4px);
        }

        .sidebar-nav-item.active {
          background: var(--gradient-primary);
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        .sidebar-nav-icon {
          font-size: 1.25rem;
          display: flex;
          align-items: center;
        }

        .sidebar-badge {
          margin-left: auto;
          background: var(--accent);
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: var(--radius-full);
        }

        .sidebar-post-btn {
          width: 100%;
          padding: 0.8rem;
          border-radius: var(--radius-md);
          font-weight: 700;
        }

        .sidebar-post-btn-icon {
          font-size: 1.2rem;
        }

        .sidebar-user-footer {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sidebar-user-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          overflow: hidden;
        }

        .sidebar-user-details {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .sidebar-user-name {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-primary);
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .sidebar-user-handle {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .sidebar-logout-btn {
          color: var(--text-muted);
        }

        .sidebar-logout-btn:hover {
          color: var(--danger);
          background: var(--danger-light);
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
