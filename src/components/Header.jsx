import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiSun, FiMoon, FiUserCheck, FiArrowRight } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import PillNav from './PillNav/PillNav';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '#features' },
    { label: 'Explore', href: '#preview' },
    { label: 'Feed', href: '/home' }
  ];

  return (
    <header className="landing-header">
      <div className="container landing-header-container">
        <PillNav
          logo="/socialla-logo.svg"
          logoAlt="Socialla"
          items={navItems}
          activeHref={location.pathname}
          baseColor={theme === 'dark' ? '#1e293b' : '#ffffff'}
          pillColor={theme === 'dark' ? '#0f172a' : '#f1f5f9'}
          pillTextColor={theme === 'dark' ? '#f8fafc' : '#0f172a'}
          hoveredPillTextColor="#ffffff"
          className="socialla-pill-nav"
        />

        <div className="landing-header-actions">
          <button
            className="btn-icon"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>

          {isAuthenticated ? (
            <Link to="/home" className="btn btn-primary">
              <FiUserCheck /> Dashboard <FiArrowRight />
            </Link>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost">Log In</Link>
              <Link to="/register" className="btn btn-primary">Create Account</Link>
            </>
          )}
        </div>
      </div>

      <style>{`
        .landing-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--bg-glass);
          backdrop-filter: var(--backdrop-blur);
          border-bottom: 1px solid var(--border-color);
          animation: headerSlideDown 0.4s ease-out;
        }

        .landing-header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
        }

        .socialla-pill-nav {
          margin: 0;
        }

        .landing-header-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
      `}</style>
    </header>
  );
};

export default Header;
