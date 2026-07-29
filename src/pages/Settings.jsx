import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import RightSidebar from '../components/RightSidebar';
import BottomNav from '../components/BottomNav';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useToast } from '../context/ToastContext';
import { resetLocalStorageData, getSettings, saveSettings } from '../utils/localStorage';
import {
  FiUser,
  FiSun,
  FiMoon,
  FiMonitor,
  FiBell,
  FiShield,
  FiLogOut,
  FiTrash2,
  FiSave,
  FiCheck
} from 'react-icons/fi';

const Settings = () => {
  const { currentUser, updateProfile, logout } = useAuth();
  const { theme, setTheme } = useTheme();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState('account'); // 'account' | 'appearance' | 'notifications' | 'privacy' | 'danger'

  // Form states
  const [name, setName] = useState(currentUser?.name || '');
  const [username, setUsername] = useState(currentUser?.username || '');
  const [email, setEmail] = useState(currentUser?.email || '');

  // Preference states
  const [settings, setSettingsState] = useState(() => getSettings());

  const handleUpdateAccount = (e) => {
    e.preventDefault();
    updateProfile({ name, username, email });
    addToast('Account details updated successfully!', 'success');
  };

  const handleToggleNotif = (key) => {
    const updated = {
      ...settings,
      notifications: {
        ...settings.notifications,
        [key]: !settings.notifications[key]
      }
    };
    setSettingsState(updated);
    saveSettings(updated);
    addToast('Notification preferences saved.', 'info');
  };

  const handleTogglePrivacy = (key) => {
    const updated = {
      ...settings,
      privacy: {
        ...settings.privacy,
        [key]: !settings.privacy[key]
      }
    };
    setSettingsState(updated);
    saveSettings(updated);
    addToast('Privacy preferences updated.', 'info');
  };

  const handleResetData = () => {
    if (window.confirm('Are you sure you want to reset all local storage data back to default?')) {
      resetLocalStorageData();
      addToast('All local data reset. Reloading app...', 'info');
      setTimeout(() => {
        window.location.href = '/login';
      }, 1000);
    }
  };

  const handleLogout = () => {
    logout();
    addToast('Logged out successfully.', 'info');
    navigate('/login');
  };

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="app-center-feed">
        <div className="glass-card settings-card">
          <div className="settings-header">
            <h2>Settings & Preferences</h2>
            <p>Manage your account settings, appearance, and privacy controls.</p>
          </div>

          <div className="settings-container">
            {/* Sidebar Navigation */}
            <div className="settings-nav">
              <button
                className={`settings-nav-btn ${activeSection === 'account' ? 'active' : ''}`}
                onClick={() => setActiveSection('account')}
              >
                <FiUser /> Account
              </button>
              <button
                className={`settings-nav-btn ${activeSection === 'appearance' ? 'active' : ''}`}
                onClick={() => setActiveSection('appearance')}
              >
                <FiSun /> Appearance
              </button>
              <button
                className={`settings-nav-btn ${activeSection === 'notifications' ? 'active' : ''}`}
                onClick={() => setActiveSection('notifications')}
              >
                <FiBell /> Notifications
              </button>
              <button
                className={`settings-nav-btn ${activeSection === 'privacy' ? 'active' : ''}`}
                onClick={() => setActiveSection('privacy')}
              >
                <FiShield /> Privacy
              </button>
              <button
                className={`settings-nav-btn danger-nav ${activeSection === 'danger' ? 'active' : ''}`}
                onClick={() => setActiveSection('danger')}
              >
                <FiTrash2 /> Account Actions
              </button>
            </div>

            {/* Content Pane */}
            <div className="settings-content">
              {/* 1. Account Section */}
              {activeSection === 'account' && (
                <form onSubmit={handleUpdateAccount} className="settings-section">
                  <h3>Account Settings</h3>

                  <div className="input-group">
                    <label className="input-label">Display Name</label>
                    <input
                      type="text"
                      className="input-field"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="input-group">
                    <label className="input-label">Username</label>
                    <input
                      type="text"
                      className="input-field"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="input-group">
                    <label className="input-label">Email Address</label>
                    <input
                      type="email"
                      className="input-field"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary mt-2">
                    <FiSave /> Save Changes
                  </button>
                </form>
              )}

              {/* 2. Appearance Section */}
              {activeSection === 'appearance' && (
                <div className="settings-section">
                  <h3>Theme & Appearance</h3>
                  <p className="section-desc">Select how Socialla looks for you.</p>

                  <div className="theme-options-grid">
                    <div
                      className={`theme-option-card ${theme === 'dark' ? 'selected' : ''}`}
                      onClick={() => setTheme('dark')}
                    >
                      <div className="theme-card-icon"><FiMoon /></div>
                      <strong>Dark Mode</strong>
                      <span>Sleek dark aesthetics</span>
                    </div>

                    <div
                      className={`theme-option-card ${theme === 'light' ? 'selected' : ''}`}
                      onClick={() => setTheme('light')}
                    >
                      <div className="theme-card-icon"><FiSun /></div>
                      <strong>Light Mode</strong>
                      <span>Clean crisp white vibe</span>
                    </div>

                    <div
                      className={`theme-option-card ${theme === 'system' ? 'selected' : ''}`}
                      onClick={() => setTheme('system')}
                    >
                      <div className="theme-card-icon"><FiMonitor /></div>
                      <strong>System Preference</strong>
                      <span>Matches OS settings</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. Notifications Section */}
              {activeSection === 'notifications' && (
                <div className="settings-section">
                  <h3>Notification Preferences</h3>
                  <p className="section-desc">Choose which activities trigger notifications.</p>

                  <div className="toggle-list">
                    <div className="toggle-item">
                      <div>
                        <strong>Like Alerts</strong>
                        <p>Notify when someone likes your posts</p>
                      </div>
                      <input
                        type="checkbox"
                        className="toggle-checkbox"
                        checked={settings.notifications?.likes ?? true}
                        onChange={() => handleToggleNotif('likes')}
                      />
                    </div>

                    <div className="toggle-item">
                      <div>
                        <strong>Comment Alerts</strong>
                        <p>Notify when someone comments on your posts</p>
                      </div>
                      <input
                        type="checkbox"
                        className="toggle-checkbox"
                        checked={settings.notifications?.comments ?? true}
                        onChange={() => handleToggleNotif('comments')}
                      />
                    </div>

                    <div className="toggle-item">
                      <div>
                        <strong>Follower Alerts</strong>
                        <p>Notify when someone starts following you</p>
                      </div>
                      <input
                        type="checkbox"
                        className="toggle-checkbox"
                        checked={settings.notifications?.follows ?? true}
                        onChange={() => handleToggleNotif('follows')}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 4. Privacy Section */}
              {activeSection === 'privacy' && (
                <div className="settings-section">
                  <h3>Privacy Controls</h3>

                  <div className="toggle-list">
                    <div className="toggle-item">
                      <div>
                        <strong>Private Profile</strong>
                        <p>Only followers can see your posts</p>
                      </div>
                      <input
                        type="checkbox"
                        className="toggle-checkbox"
                        checked={settings.privacy?.privateProfile ?? false}
                        onChange={() => handleTogglePrivacy('privateProfile')}
                      />
                    </div>

                    <div className="toggle-item">
                      <div>
                        <strong>Show Online Status</strong>
                        <p>Allow friends to see when you are active</p>
                      </div>
                      <input
                        type="checkbox"
                        className="toggle-checkbox"
                        checked={settings.privacy?.showOnlineStatus ?? true}
                        onChange={() => handleTogglePrivacy('showOnlineStatus')}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 5. Danger / Account Actions */}
              {activeSection === 'danger' && (
                <div className="settings-section">
                  <h3>Account Actions</h3>

                  <div className="danger-actions-list">
                    <div className="danger-action-card">
                      <div>
                        <strong>Log Out</strong>
                        <p>Sign out of your active Socialla session</p>
                      </div>
                      <button className="btn btn-secondary" onClick={handleLogout}>
                        <FiLogOut /> Logout
                      </button>
                    </div>

                    <div className="danger-action-card">
                      <div>
                        <strong>Reset All Local Storage Data</strong>
                        <p>Clear custom posts, comments, and revert seed state</p>
                      </div>
                      <button className="btn btn-primary bg-danger" onClick={handleResetData}>
                        <FiTrash2 /> Reset Local Data
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <RightSidebar />
      <BottomNav />

      <style>{`
        .settings-card {
          padding: 1.5rem;
        }

        .settings-header {
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-color);
        }

        .settings-header p {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .settings-container {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 1.5rem;
        }

        .settings-nav {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .settings-nav-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-secondary);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
          text-align: left;
        }

        .settings-nav-btn:hover {
          background: var(--primary-light);
          color: var(--primary);
        }

        .settings-nav-btn.active {
          background: var(--gradient-primary);
          color: #ffffff;
        }

        .settings-content {
          padding-left: 1rem;
          border-left: 1px solid var(--border-color);
        }

        .settings-section {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .section-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .theme-options-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1rem;
        }

        .theme-option-card {
          padding: 1.25rem;
          border-radius: var(--radius-md);
          border: 2px solid var(--border-color);
          background: var(--bg-card);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
          transition: all var(--transition-fast);
        }

        .theme-option-card:hover {
          border-color: var(--primary);
        }

        .theme-option-card.selected {
          border-color: var(--primary);
          background: var(--primary-light);
        }

        .theme-card-icon {
          font-size: 1.75rem;
          color: var(--primary);
        }

        .toggle-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .toggle-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem;
          background: var(--bg-secondary);
          border-radius: var(--radius-md);
        }

        .toggle-item p {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .toggle-checkbox {
          width: 20px;
          height: 20px;
          accent-color: var(--primary);
          cursor: pointer;
        }

        .danger-actions-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .danger-action-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
        }

        .bg-danger {
          background: var(--danger) !important;
          box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
        }

        @media (max-width: 768px) {
          .settings-container {
            grid-template-columns: 1fr;
          }
          .settings-content {
            border-left: none;
            padding-left: 0;
            border-top: 1px solid var(--border-color);
            padding-top: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Settings;
