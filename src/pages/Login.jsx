import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight, FiX } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const Login = () => {
  const { login, loading } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!identifier.trim()) {
      setErrorMessage('Please enter your email address or username.');
      return;
    }
    if (!password) {
      setErrorMessage('Please enter your password.');
      return;
    }

    try {
      await login(identifier, password);
      addToast('Welcome back to Socialla!', 'success');
      navigate('/home');
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (!resetEmail.trim()) return;
    addToast(`Password reset link sent to ${resetEmail}`, 'info');
    setShowForgotModal(false);
    setResetEmail('');
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card glass-card">
        <div className="auth-header">
          <Link to="/" className="auth-logo">
            <img src="/socialla-logo.svg" alt="Socialla Logo" />
            <span>Socialla</span>
          </Link>
          <h2>Welcome Back</h2>
          <p>Log in to access your feed, messages, and saved posts.</p>
        </div>

        {errorMessage && (
          <div className="auth-error-banner">
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <label className="input-label">Email or Username</label>
            <div className="input-wrapper">
              <FiMail className="input-icon-left" />
              <input
                type="text"
                className="input-field"
                placeholder="alex@socialla.com or alex_vance"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-label-row">
              <label className="input-label">Password</label>
              <button
                type="button"
                className="forgot-link"
                onClick={() => setShowForgotModal(true)}
              >
                Forgot password?
              </button>
            </div>
            <div className="input-wrapper has-right-icon">
              <FiLock className="input-icon-left" />
              <input
                type={showPassword ? 'text' : 'password'}
                className="input-field"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="input-icon-right"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>

          <div className="remember-row">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Remember me on this browser</span>
            </label>
          </div>

          <button type="submit" className="btn btn-primary auth-submit-btn" disabled={loading}>
            {loading ? 'Authenticating...' : 'Sign In'} <FiArrowRight />
          </button>
        </form>

        <div className="auth-footer">
          <span>Don't have an account?</span>
          <Link to="/register" className="auth-switch-link">
            Create Account
          </Link>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="modal-backdrop" onClick={() => setShowForgotModal(false)}>
          <div className="modal-content forgot-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Reset Password</h3>
              <button className="btn-icon" onClick={() => setShowForgotModal(false)}>
                <FiX />
              </button>
            </div>
            <form onSubmit={handleForgotSubmit} className="modal-body">
              <p className="forgot-desc">
                Enter your account email address and we'll send you a password recovery link.
              </p>
              <div className="input-group">
                <label className="input-label">Email Address</label>
                <div className="input-wrapper">
                  <FiMail className="input-icon-left" />
                  <input
                    type="email"
                    className="input-field"
                    placeholder="name@socialla.com"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-full mt-2">
                Send Reset Link
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .auth-page-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          background: linear-gradient(135deg, var(--bg-main) 0%, var(--bg-secondary) 100%);
        }

        .auth-card {
          width: 100%;
          max-width: 520px;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          animation: modalScaleIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .auth-card .input-field {
          width: 100%;
          padding: 0.85rem 1rem 0.85rem 2.8rem;
          font-size: 0.98rem;
        }

        .auth-card .input-wrapper.has-right-icon .input-field {
          padding-right: 2.8rem;
        }

        .auth-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
        }

        .auth-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .auth-logo img {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .auth-logo span {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .auth-header h2 {
          font-size: 1.75rem;
        }

        .auth-header p {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .auth-error-banner {
          padding: 0.75rem 1rem;
          background: var(--danger-light);
          border: 1px solid var(--danger);
          border-radius: var(--radius-md);
          color: var(--danger);
          font-size: 0.88rem;
          font-weight: 600;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .input-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .forgot-link {
          font-size: 0.8rem;
          color: var(--primary);
          font-weight: 600;
        }
        .forgot-link:hover { text-decoration: underline; }

        .remember-row {
          display: flex;
          align-items: center;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          cursor: pointer;
        }

        .auth-submit-btn {
          width: 100%;
          padding: 0.8rem;
          font-size: 1rem;
          font-weight: 700;
          margin-top: 0.25rem;
        }

        .auth-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-muted);
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        .auth-switch-link {
          font-weight: 700;
          color: var(--primary);
        }

        .forgot-modal {
          padding: 1.5rem;
        }
        .forgot-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Login;
