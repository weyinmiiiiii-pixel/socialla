import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import RightSidebar from '../components/RightSidebar';
import BottomNav from '../components/BottomNav';
import PostCard from '../components/PostCard';
import EditProfileModal from '../components/EditProfileModal';
import { useAuth } from '../context/AuthContext';
import { getPosts, getUsers, savePosts } from '../utils/localStorage';
import { FiEdit3, FiGrid, FiBookmark, FiImage, FiCalendar, FiCheckCircle } from 'react-icons/fi';

const Profile = () => {
  const { currentUser } = useAuth();
  const [searchParams] = useSearchParams();

  const queryUsername = searchParams.get('username');
  const initialTab = searchParams.get('tab') || 'posts';

  const [activeTab, setActiveTab] = useState(initialTab);
  const [showEditModal, setShowEditModal] = useState(false);

  const [usersList] = useState(() => getUsers());
  const [posts, setPosts] = useState(() => getPosts());

  // Determine profile user
  const targetUser = queryUsername
    ? usersList.find(u => u.username.toLowerCase() === queryUsername.toLowerCase()) || currentUser
    : currentUser;

  const isOwnProfile = targetUser?.id === currentUser?.id;

  const handleUpdatePost = (updatedPost) => {
    const updated = posts.map(p => p.id === updatedPost.id ? updatedPost : p);
    setPosts(updated);
    savePosts(updated);
  };

  const handleDeletePost = (postId) => {
    const updated = posts.filter(p => p.id !== postId);
    setPosts(updated);
    savePosts(updated);
  };

  // Filter user's posts
  const userPosts = posts.filter(p => p.authorId === targetUser?.id || p.authorUsername === targetUser?.username);
  const mediaPosts = userPosts.filter(p => p.image);
  const savedPosts = posts.filter(p => p.savedBy?.includes(targetUser?.id));

  if (!targetUser) return null;

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="app-center-feed">
        {/* Profile Card Header */}
        <div className="glass-card profile-card">
          {/* Cover Photo */}
          <div
            className="profile-banner"
            style={{ backgroundImage: `url(${targetUser.cover})` }}
          />

          {/* Profile Details Area */}
          <div className="profile-info-area">
            <div className="profile-header-row">
              <div className="profile-avatar-wrapper">
                <div className="avatar avatar-xl profile-avatar">
                  <img src={targetUser.avatar} alt={targetUser.name} />
                </div>
              </div>

              {isOwnProfile ? (
                <button className="btn btn-secondary edit-profile-btn" onClick={() => setShowEditModal(true)}>
                  <FiEdit3 /> Edit Profile
                </button>
              ) : (
                <button className="btn btn-primary edit-profile-btn">
                  Follow
                </button>
              )}
            </div>

            <div className="profile-meta">
              <h1 className="profile-name">
                {targetUser.name}
                {targetUser.verified && <FiCheckCircle className="verified-badge" />}
              </h1>
              <span className="profile-username">@{targetUser.username}</span>

              {targetUser.bio && <p className="profile-bio">{targetUser.bio}</p>}

              <div className="profile-stats-row">
                <div className="stat-item">
                  <strong>{targetUser.followers || 0}</strong>
                  <span>Followers</span>
                </div>
                <div className="stat-item">
                  <strong>{targetUser.following || 0}</strong>
                  <span>Following</span>
                </div>
                <div className="stat-item">
                  <strong>{userPosts.length}</strong>
                  <span>Posts</span>
                </div>
              </div>

              {targetUser.joinedDate && (
                <div className="joined-date">
                  <FiCalendar /> Joined {targetUser.joinedDate}
                </div>
              )}
            </div>

            {/* Profile Tabs */}
            <div className="tab-group profile-tabs">
              <button
                className={`tab-btn ${activeTab === 'posts' ? 'active' : ''}`}
                onClick={() => setActiveTab('posts')}
              >
                <FiGrid /> Posts ({userPosts.length})
              </button>
              <button
                className={`tab-btn ${activeTab === 'media' ? 'active' : ''}`}
                onClick={() => setActiveTab('media')}
              >
                <FiImage /> Media ({mediaPosts.length})
              </button>
              <button
                className={`tab-btn ${activeTab === 'saved' ? 'active' : ''}`}
                onClick={() => setActiveTab('saved')}
              >
                <FiBookmark /> Saved ({savedPosts.length})
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="posts-feed-list">
          {activeTab === 'posts' && userPosts.map(post => (
            <PostCard key={post.id} post={post} onUpdatePost={handleUpdatePost} onDeletePost={handleDeletePost} />
          ))}

          {activeTab === 'media' && mediaPosts.map(post => (
            <PostCard key={post.id} post={post} onUpdatePost={handleUpdatePost} onDeletePost={handleDeletePost} />
          ))}

          {activeTab === 'saved' && savedPosts.map(post => (
            <PostCard key={post.id} post={post} onUpdatePost={handleUpdatePost} onDeletePost={handleDeletePost} />
          ))}

          {((activeTab === 'posts' && userPosts.length === 0) ||
            (activeTab === 'media' && mediaPosts.length === 0) ||
            (activeTab === 'saved' && savedPosts.length === 0)) && (
            <div className="glass-card empty-state">
              <span className="empty-state-icon"><FiGrid /></span>
              <h3 className="empty-state-title">No content here yet</h3>
              <p>Items will appear here once published or saved.</p>
            </div>
          )}
        </div>
      </main>

      <RightSidebar />
      <BottomNav />

      {/* Edit Profile Modal */}
      {showEditModal && (
        <EditProfileModal onClose={() => setShowEditModal(false)} />
      )}

      <style>{`
        .profile-card {
          overflow: hidden;
          padding: 0;
        }

        .profile-banner {
          height: 180px;
          background-size: cover;
          background-position: center;
        }

        .profile-info-area {
          padding: 0 1.5rem 1rem 1.5rem;
        }

        .profile-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-top: -55px;
          margin-bottom: 1rem;
        }

        .profile-avatar-wrapper {
          position: relative;
        }

        .profile-avatar {
          border: 4px solid var(--bg-card);
          box-shadow: var(--shadow-lg);
        }

        .edit-profile-btn {
          font-weight: 700;
          padding: 0.6rem 1.25rem;
        }

        .profile-meta {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .profile-name {
          font-size: 1.75rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .profile-username {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .profile-bio {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0.4rem 0;
        }

        .profile-stats-row {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          margin-top: 0.5rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.9rem;
        }

        .stat-item strong {
          color: var(--text-primary);
        }

        .stat-item span {
          color: var(--text-muted);
        }

        .joined-date {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        .profile-tabs {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
};

export default Profile;
