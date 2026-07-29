import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import RightSidebar from '../components/RightSidebar';
import BottomNav from '../components/BottomNav';
import PostCard from '../components/PostCard';
import { getPosts, getUsers, savePosts } from '../utils/localStorage';
import { FiSearch, FiTrendingUp, FiUsers, FiGrid, FiUserCheck, FiHeart } from 'react-icons/fi';

const Explore = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const queryParam = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [activeTab, setActiveTab] = useState('trending'); // 'trending' | 'users' | 'posts'
  
  const [posts, setPosts] = useState(() => getPosts());
  const [users, setUsers] = useState(() => getUsers());

  useEffect(() => {
    setSearchQuery(queryParam);
  }, [queryParam]);

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

  const filteredPosts = posts.filter(p =>
    p.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.authorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.authorUsername.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.bio.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="app-center-feed">
        {/* Explore Search Bar */}
        <div className="glass-card explore-search-card">
          <div className="input-wrapper">
            <FiSearch className="input-icon-left" />
            <input
              type="text"
              className="input-field search-input-large"
              placeholder="Search posts, hashtags, or users..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSearchParams(e.target.value ? { q: e.target.value } : {});
              }}
            />
          </div>
        </div>

        {/* Explore Tabs */}
        <div className="tab-group">
          <button
            className={`tab-btn ${activeTab === 'trending' ? 'active' : ''}`}
            onClick={() => setActiveTab('trending')}
          >
            <FiGrid /> Media Grid
          </button>
          <button
            className={`tab-btn ${activeTab === 'posts' ? 'active' : ''}`}
            onClick={() => setActiveTab('posts')}
          >
            <FiTrendingUp /> Top Posts ({filteredPosts.length})
          </button>
          <button
            className={`tab-btn ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            <FiUsers /> Accounts ({filteredUsers.length})
          </button>
        </div>

        {/* Tab Content 1: Media Grid */}
        {activeTab === 'trending' && (
          <div className="explore-media-grid">
            {posts.filter(p => p.image).map((post) => (
              <div key={post.id} className="explore-grid-item img-zoom-container">
                <img src={post.image} alt={post.content} />
                <div className="explore-grid-overlay">
                  <div className="overlay-stat"><FiHeart /> {post.likeCount || post.likes.length}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content 2: Posts List */}
        {activeTab === 'posts' && (
          <div className="posts-feed-list">
            {filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onUpdatePost={handleUpdatePost}
                onDeletePost={handleDeletePost}
              />
            ))}
          </div>
        )}

        {/* Tab Content 3: Users List */}
        {activeTab === 'users' && (
          <div className="explore-users-grid">
            {filteredUsers.map((user) => (
              <div key={user.id} className="glass-card explore-user-card">
                <div
                  className="user-card-cover"
                  style={{ backgroundImage: `url(${user.cover})` }}
                />
                <div className="user-card-body">
                  <div className="avatar avatar-lg user-card-avatar">
                    <img src={user.avatar} alt={user.name} />
                  </div>
                  <strong className="user-card-name">{user.name}</strong>
                  <span className="user-card-username">@{user.username}</span>
                  <p className="user-card-bio">{user.bio}</p>
                  <button
                    className="btn btn-outline btn-sm w-full mt-2"
                    onClick={() => navigate(`/profile?username=${user.username}`)}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <RightSidebar />
      <BottomNav />

      <style>{`
        .explore-search-card {
          padding: 0.75rem;
        }

        .search-input-large {
          padding-top: 0.85rem;
          padding-bottom: 0.85rem;
          font-size: 1rem;
        }

        .explore-media-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 0.75rem;
        }

        .explore-grid-item {
          position: relative;
          aspect-ratio: 1;
          border-radius: var(--radius-md);
          overflow: hidden;
          cursor: pointer;
        }

        .explore-grid-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .explore-grid-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-fast);
        }

        .explore-grid-item:hover .explore-grid-overlay {
          opacity: 1;
        }

        .overlay-stat {
          color: #ffffff;
          font-weight: 700;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .explore-users-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.25rem;
        }

        .explore-user-card {
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .user-card-cover {
          height: 80px;
          background-size: cover;
          background-position: center;
        }

        .user-card-body {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-top: -35px;
        }

        .user-card-avatar {
          border: 3px solid var(--bg-card);
          margin-bottom: 0.5rem;
        }

        .user-card-name {
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .user-card-username {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .user-card-bio {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-clamp: 2;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Explore;
