import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiCompass, FiPlusCircle, FiBell, FiUser } from 'react-icons/fi';

const BottomNav = ({ onOpenCreatePost }) => {
  return (
    <nav className="bottom-nav">
      <NavLink to="/home" className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}>
        <FiHome />
        <span>Home</span>
      </NavLink>

      <NavLink to="/explore" className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}>
        <FiCompass />
        <span>Explore</span>
      </NavLink>

      <button className="bottom-nav-create-btn" onClick={onOpenCreatePost} title="Create Post">
        <FiPlusCircle />
      </button>

      <NavLink to="/notifications" className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}>
        <FiBell />
        <span>Alerts</span>
      </NavLink>

      <NavLink to="/profile" className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}>
        <FiUser />
        <span>Profile</span>
      </NavLink>

      <style>{`
        .bottom-nav {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 64px;
          background: var(--bg-glass);
          backdrop-filter: var(--backdrop-blur);
          border-top: 1px solid var(--border-color);
          z-index: 900;
          align-items: center;
          justify-content: space-around;
          padding: 0 0.5rem;
        }

        .bottom-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          color: var(--text-muted);
          font-size: 1.25rem;
          font-weight: 600;
          transition: all var(--transition-fast);
          padding: 0.25rem 0.5rem;
        }

        .bottom-nav-item span {
          font-size: 0.7rem;
        }

        .bottom-nav-item.active {
          color: var(--primary);
          transform: translateY(-2px);
        }

        .bottom-nav-create-btn {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-full);
          background: var(--gradient-primary);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
          transform: translateY(-10px);
          transition: transform var(--transition-bounce);
        }

        .bottom-nav-create-btn:active {
          transform: translateY(-10px) scale(0.9);
        }

        @media (max-width: 767px) {
          .bottom-nav {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
};

export default BottomNav;
