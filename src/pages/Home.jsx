import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import RightSidebar from '../components/RightSidebar';
import BottomNav from '../components/BottomNav';
import Stories from '../components/Stories';
import CreatePost from '../components/CreatePost';
import PostCard from '../components/PostCard';
import { getPosts, savePosts } from '../utils/localStorage';
import { FiTrendingUp, FiClock, FiUsers, FiX } from 'react-icons/fi';

const Home = () => {
  const [posts, setPosts] = useState(() => getPosts());
  const [activeTab, setActiveTab] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handlePostCreated = (newPost) => {
    const updated = [newPost, ...posts];
    setPosts(updated);
    savePosts(updated);
    if (showCreateModal) setShowCreateModal(false);
  };

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

  // Filter posts based on active tab
  const getFilteredPosts = () => {
    if (activeTab === 'popular') {
      return [...posts].sort((a, b) => (b.likeCount || 0) - (a.likeCount || 0));
    }
    return posts;
  };

  const filteredPosts = getFilteredPosts();

  return (
    <div className="app-layout">
      <Sidebar onOpenCreatePost={() => setShowCreateModal(true)} />

      <main className="app-center-feed">
        {/* Story Carousel */}
        <Stories />

        {/* Create Post Form Widget */}
        <CreatePost onPostCreated={handlePostCreated} />

        {/* Feed Filter Tabs */}
        <div className="feed-filter-bar glass-card">
          <button
            className={`feed-tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <FiClock /> Recent
          </button>
          <button
            className={`feed-tab ${activeTab === 'popular' ? 'active' : ''}`}
            onClick={() => setActiveTab('popular')}
          >
            <FiTrendingUp /> Trending
          </button>
        </div>

        {/* Posts Feed List */}
        <div className="posts-feed-list">
          {filteredPosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onUpdatePost={handleUpdatePost}
              onDeletePost={handleDeletePost}
            />
          ))}

          {filteredPosts.length === 0 && (
            <div className="glass-card empty-state">
              <span className="empty-state-icon"><FiClock /></span>
              <h3 className="empty-state-title">No posts in feed</h3>
              <p>Be the first to share a post with the Socialla community!</p>
            </div>
          )}
        </div>
      </main>

      <RightSidebar />
      <BottomNav onOpenCreatePost={() => setShowCreateModal(true)} />

      {/* Quick Modal Create Post Triggered from Sidebar/BottomNav */}
      {showCreateModal && (
        <div className="modal-backdrop" onClick={() => setShowCreateModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header p-4 flex justify-between items-center border-b">
              <h3>Create Post</h3>
              <button className="btn-icon" onClick={() => setShowCreateModal(false)}>
                <FiX />
              </button>
            </div>
            <CreatePost onPostCreated={handlePostCreated} />
          </div>
        </div>
      )}

      <style>{`
        .feed-filter-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem;
        }

        .feed-tab {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.65rem 1rem;
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-muted);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .feed-tab:hover {
          color: var(--text-primary);
          background: var(--bg-secondary);
        }

        .feed-tab.active {
          background: var(--gradient-primary);
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.25);
        }

        .posts-feed-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
      `}</style>
    </div>
  );
};

export default Home;
