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
  FiCheck
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
    <div className="auth-page-wrapper">
      <div className="auth-card glass-card register-card">
        <div className="auth-header">
          <Link to="/" className="auth-logo">
            <img src="/socialla-logo.svg" alt="Socialla Logo" />
            <span>Socialla</span>
          </Link>
          <h2>Create Your Account</h2>
          <p>Join the Socialla community and start sharing your moments.</p>
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

      <style>{`
        .register-card {
          max-width: 520px;
        }

        .register-avatar-picker {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .input-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .strength-meter-wrap {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-top: 4px;
        }

        .strength-bar-bg {
          height: 4px;
          background: var(--border-color);
          border-radius: 2px;
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

        @media (max-width: 520px) {
          .input-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Register;
