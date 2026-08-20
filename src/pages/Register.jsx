import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FiUser,
  FiAtSign,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiCamera,
  FiArrowRight,
  FiCheck,
  FiZap,
  FiShield,
  FiUsers,
  FiLayers
} from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const Register = () => {
  const { register, loading } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [avatar, setAvatar] = useState('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Password strength meter calculation
  const getPasswordStrength = () => {
    if (!password) return { label: '', score: 0, color: '' };
    let score = 0;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    switch (score) {
      case 1: return { label: 'Weak', score: 25, color: 'var(--danger)' };
      case 2: return { label: 'Fair', score: 50, color: 'var(--warning)' };
      case 3: return { label: 'Strong', score: 75, color: 'var(--primary)' };
      case 4: return { label: 'Excellent', score: 100, color: 'var(--success)' };
      default: return { label: 'Weak', score: 15, color: 'var(--danger)' };
    }
  };

  const strength = getPasswordStrength();

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) return setErrorMessage('Please enter your full name.');
    if (!username.trim()) return setErrorMessage('Please choose a unique username.');
    if (!email.trim()) return setErrorMessage('Please enter your email address.');
    if (!password) return setErrorMessage('Please create a password.');
    if (password !== confirmPassword) return setErrorMessage('Passwords do not match.');

    try {
      await register({
        name: name.trim(),
        username: username.trim().toLowerCase(),
        email: email.trim().toLowerCase(),
        password,
        avatar
      });

      addToast('Account created! Welcome to Socialla.', 'success');
      navigate('/home');
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="register-fullscreen-wrapper">
      {/* Left Visual Branding Panel */}
      <div className="register-hero-side">
        <div className="register-hero-glow glow-1" />
        <div className="register-hero-glow glow-2" />

        <div className="register-hero-top">
          <Link to="/" className="register-brand-logo">
            <img src="/socialla-logo.svg" alt="Socialla Logo" />
            <span>Socialla</span>
          </Link>
        </div>

        <div className="register-hero-body">
          <div className="register-badge">
            <FiZap /> <span>Next-Gen Social Network</span>
          </div>

          <h1 className="register-hero-title">
            Join millions of creators sharing their world.
          </h1>

          <p className="register-hero-subtitle">
            Connect with vibrant communities, share your moments, and experience real-time conversations in a beautifully designed space.
          </p>

          <div className="register-features-list">
            <div className="feature-item">
              <div className="feature-icon"><FiUsers /></div>
              <div>
                <h4>Global Community</h4>
                <p>Connect with creators, friends, and trending discussions world-wide.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon"><FiLayers /></div>
              <div>
                <h4>Glassmorphic Aesthetic</h4>
                <p>Enjoy a sleek, dynamic interface with customizable themes and fluid motion.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon"><FiShield /></div>
              <div>
                <h4>Privacy & Security First</h4>
                <p>Your data stays safe with state-of-the-art authentication & privacy controls.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="register-hero-footer">
          <p>© {new Date().getFullYear()} Socialla Inc. All rights reserved.</p>
        </div>
      </div>

      {/* Right Registration Form Panel */}
      <div className="register-form-side">
        <div className="register-form-card">
          {/* Mobile Header Logo */}
          <div className="register-mobile-logo">
            <Link to="/" className="register-brand-logo">
              <img src="/socialla-logo.svg" alt="Socialla Logo" />
              <span>Socialla</span>
            </Link>
          </div>

          <div className="auth-header">
            <h2>Create Your Account</h2>
            <p>Join the Socialla community today. It only takes a minute.</p>
          </div>

          {errorMessage && (
            <div className="auth-error-banner">
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            {/* Avatar Upload */}
            <div className="register-avatar-picker">
              <div className="avatar avatar-lg">
                <img src={avatar} alt="Avatar Preview" />
              </div>
              <label className="btn btn-secondary btn-sm change-avatar-file">
                <FiCamera /> Choose Photo
                <input type="file" accept="image/*" onChange={handleAvatarChange} hidden />
              </label>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label className="input-label">Full Name</label>
                <div className="input-wrapper">
                  <FiUser className="input-icon-left" />
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Alex Vance"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label className="input-label">Username</label>
                <div className="input-wrapper">
                  <FiAtSign className="input-icon-left" />
                  <input
                    type="text"
                    className="input-field"
                    placeholder="alex_vance"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Email Address</label>
              <div className="input-wrapper">
                <FiMail className="input-icon-left" />
                <input
                  type="email"
                  className="input-field"
                  placeholder="alex@socialla.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Password</label>
              <div className="input-wrapper has-right-icon">
                <FiLock className="input-icon-left" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="input-field"
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="input-icon-right" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>
              {/* Strength Meter Bar */}
              {password && (
                <div className="strength-meter-wrap">
                  <div className="strength-bar-bg">
                    <div
                      className="strength-bar-fill"
                      style={{ width: `${strength.score}%`, backgroundColor: strength.color }}
                    />
                  </div>
                  <span className="strength-label" style={{ color: strength.color }}>
                    Password Strength: {strength.label}
                  </span>
                </div>
              )}
            </div>

            <div className="input-group">
              <label className="input-label">Confirm Password</label>
              <div className="input-wrapper has-right-icon">
                <FiLock className="input-icon-left" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="input-field"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <span
                  className="input-icon-right"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>
            </div>

            <button type="submit" className="btn btn-primary auth-submit-btn" disabled={loading}>
              {loading ? 'Creating Account...' : 'Get Started'} <FiArrowRight />
            </button>
          </form>

          <div className="auth-footer">
            <span>Already have an account?</span>
            <Link to="/login" className="auth-switch-link">
              Log In
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .register-fullscreen-wrapper {
          display: flex;
          min-height: 100vh;
          width: 100vw;
          background: var(--bg-main);
          overflow-x: hidden;
        }

        /* Left Hero Showcase */
        .register-hero-side {
          flex: 1.1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 3.5rem 4rem;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(168, 85, 247, 0.14) 50%, rgba(236, 72, 153, 0.12) 100%), var(--bg-secondary);
          border-right: 1px solid var(--border-color);
          position: relative;
          overflow: hidden;
        }

        .register-hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          opacity: 0.6;
        }

        .glow-1 {
          top: -10%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: rgba(99, 102, 241, 0.3);
        }

        .glow-2 {
          bottom: -10%;
          right: -10%;
          width: 450px;
          height: 450px;
          background: rgba(236, 72, 153, 0.25);
        }

        .register-brand-logo {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .register-brand-logo img {
          width: 42px;
          height: 42px;
          border-radius: 12px;
        }

        .register-brand-logo span {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .register-hero-body {
          max-width: 540px;
          margin: 2rem 0;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .register-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1rem;
          background: rgba(99, 102, 241, 0.15);
          color: var(--primary);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 700;
          width: fit-content;
        }

        .register-hero-title {
          font-size: 2.75rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }

        .register-hero-subtitle {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .register-features-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 1rem;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .feature-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          min-width: 42px;
          border-radius: 12px;
          background: var(--bg-glass);
          border: 1px solid var(--border-color);
          color: var(--primary);
          font-size: 1.2rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .feature-item h4 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
          color: var(--text-primary);
        }

        .feature-item p {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .register-hero-footer {
          position: relative;
          z-index: 1;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        /* Right Form Side */
        .register-form-side {
          flex: 1;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 2.5rem;
          background: var(--bg-main);
          overflow-y: auto;
        }

        .register-form-card {
          width: 100%;
          max-width: 580px;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          animation: modalScaleIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .register-mobile-logo {
          display: none;
        }

        .auth-header {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .auth-header h2 {
          font-size: 2.2rem;
          font-weight: 800;
        }

        .auth-header p {
          font-size: 1rem;
          color: var(--text-muted);
        }

        .auth-error-banner {
          padding: 0.85rem 1.1rem;
          background: var(--danger-light);
          border: 1px solid var(--danger);
          border-radius: var(--radius-md);
          color: var(--danger);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.35rem;
          width: 100%;
        }

        .register-avatar-picker {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 0.5rem 0;
        }

        .avatar-lg {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--primary);
        }

        .avatar-lg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .change-avatar-file {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.1rem;
          font-size: 0.88rem;
          cursor: pointer;
        }

        .input-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          width: 100%;
        }

        .register-form-card .input-group {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .register-form-card .input-wrapper {
          width: 100%;
          position: relative;
        }

        .register-form-card .input-field {
          width: 100%;
          padding: 0.85rem 1rem 0.85rem 2.8rem;
          font-size: 0.98rem;
        }

        .register-form-card .input-wrapper.has-right-icon .input-field {
          padding-right: 2.8rem;
        }

        .strength-meter-wrap {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-top: 6px;
        }

        .strength-bar-bg {
          height: 5px;
          background: var(--border-color);
          border-radius: 3px;
          overflow: hidden;
        }

        .strength-bar-fill {
          height: 100%;
          transition: width 0.3s ease, background-color 0.3s ease;
        }

        .strength-label {
          font-size: 0.75rem;
          font-weight: 700;
        }

        .auth-submit-btn {
          margin-top: 0.75rem;
          width: 100%;
          padding: 0.95rem;
          font-size: 1.05rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          border-radius: var(--radius-md);
        }

        .auth-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          color: var(--text-muted);
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-color);
        }

        .auth-switch-link {
          font-weight: 700;
          color: var(--primary);
        }

        .auth-switch-link:hover {
          text-decoration: underline;
        }

        /* Responsive Breakpoints */
        @media (max-width: 960px) {
          .register-hero-side {
            display: none;
          }

          .register-mobile-logo {
            display: flex;
            margin-bottom: 0.5rem;
          }

          .register-form-side {
            padding: 2.5rem 1.5rem;
          }

          .register-form-card {
            max-width: 100%;
          }
        }

        @media (max-width: 600px) {
          .input-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Register;
