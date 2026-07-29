import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiTrendingUp, FiUserPlus, FiUserCheck, FiMessageSquare } from 'react-icons/fi';
import { getUsers, saveUsers } from '../utils/localStorage';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const RightSidebar = () => {
  const { currentUser } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsersList] = useState(() => getUsers().filter(u => u.id !== currentUser?.id));
  const [followingMap, setFollowingMap] = useState({});

  const trendingTopics = [
    { tag: '#SociallaLaunch', postsCount: '18.4K posts' },
    { tag: '#Tech2026', postsCount: '12.1K posts' },
    { tag: '#UIUXDesign', postsCount: '9.8K posts' },
    { tag: '#FrontendDev', postsCount: '7.2K posts' },
    { tag: '#ReactVite', postsCount: '5.5K posts' }
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/explore?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const toggleFollow = (userId, userName) => {
    setFollowingMap(prev => {
      const isFollowing = !prev[userId];
      if (isFollowing) {
        addToast(`You are now following ${userName}!`, 'success');
      } else {
        addToast(`Unfollowed ${userName}`, 'info');
      }
      return { ...prev, [userId]: isFollowing };
    });
  };

  return (
    <aside className="app-right-sidebar">
      {/* Search Input Widget */}
      <form className="glass-card search-form" onSubmit={handleSearchSubmit}>
        <div className="input-wrapper">
          <FiSearch className="input-icon-left" />
          <input
            type="text"
            className="input-field"
            placeholder="Search Socialla..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </form>

      {/* Trending Topics Card */}
      <div className="glass-card right-card">
        <div className="card-header">
          <FiTrendingUp className="card-header-icon" />
          <h3>Trending Topics</h3>
        </div>
        <div className="trending-list">
          {trendingTopics.map(topic => (
            <div
              key={topic.tag}
              className="trending-item"
              onClick={() => navigate(`/explore?q=${encodeURIComponent(topic.tag)}`)}
            >
              <span className="trending-tag">{topic.tag}</span>
              <span className="trending-count">{topic.postsCount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Users Card */}
      <div className="glass-card right-card">
        <div className="card-header">
          <FiUserPlus className="card-header-icon" />
          <h3>Suggested People</h3>
        </div>
        <div className="suggested-list">
          {users.slice(0, 3).map(user => {
            const isFollowing = !!followingMap[user.id];
            return (
              <div key={user.id} className="suggested-item">
                <div
                  className="suggested-user-info"
                  onClick={() => navigate(`/profile?username=${user.username}`)}
                >
                  <div className="avatar avatar-md">
                    <img src={user.avatar} alt={user.name} />
                  </div>
                  <div className="suggested-details">
                    <span className="suggested-name">{user.name}</span>
                    <span className="suggested-handle">@{user.username}</span>
                  </div>
                </div>

                <button
                  className={`btn btn-sm ${isFollowing ? 'btn-secondary' : 'btn-outline'}`}
                  onClick={() => toggleFollow(user.id, user.name)}
                >
                  {isFollowing ? <><FiUserCheck /> Following</> : 'Follow'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Online Friends Quick Chat */}
      <div className="glass-card right-card">
        <div className="card-header">
          <div className="online-indicator-dot" />
          <h3>Online Friends</h3>
        </div>
        <div className="online-list">
          {users.slice(0, 4).map(user => (
            <div
              key={user.id}
              className="online-item"
              onClick={() => navigate('/messages')}
            >
              <div className="avatar avatar-sm">
                <img src={user.avatar} alt={user.name} />
                <span className="avatar-online-dot" />
              </div>
              <span className="online-name">{user.name}</span>
              <FiMessageSquare className="online-msg-icon" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .search-form {
          padding: 0.5rem;
        }

        .right-card {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .card-header-icon {
          color: var(--primary);
          font-size: 1.2rem;
        }

        .online-indicator-dot {
          width: 9px;
          height: 9px;
          background: var(--success);
          border-radius: var(--radius-full);
          box-shadow: 0 0 8px var(--success);
        }

        .trending-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .trending-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 0.5rem 0.6rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: background var(--transition-fast);
        }

        .trending-item:hover {
          background: var(--primary-light);
        }

        .trending-tag {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .trending-count {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .suggested-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .suggested-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }

        .suggested-user-info {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          cursor: pointer;
          overflow: hidden;
        }

        .suggested-details {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .suggested-name {
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .suggested-handle {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .btn-sm {
          padding: 0.35rem 0.85rem;
          font-size: 0.8rem;
        }

        .online-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .online-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.4rem 0.5rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: background var(--transition-fast);
        }

        .online-item:hover {
          background: var(--primary-light);
        }

        .online-name {
          font-weight: 600;
          font-size: 0.85rem;
          flex: 1;
        }

        .online-msg-icon {
          color: var(--text-muted);
          font-size: 1rem;
        }
      `}</style>
    </aside>
  );
};

export default RightSidebar;
