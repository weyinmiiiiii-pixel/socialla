import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiHeart,
  FiMessageSquare,
  FiShare2,
  FiBookmark,
  FiMoreHorizontal,
  FiCheckCircle,
  FiTrash2,
  FiLink
} from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import CommentSection from './CommentSection';
import ShareModal from './ShareModal';

const PostCard = ({ post, onUpdatePost, onDeletePost }) => {
  const { currentUser } = useAuth();
  const { addToast } = useToast();

  const [isLiked, setIsLiked] = useState(() => post.likes.includes(currentUser?.id));
  const [likeCount, setLikeCount] = useState(post.likeCount || post.likes.length);
  const [isSaved, setIsSaved] = useState(() => post.savedBy?.includes(currentUser?.id));
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(post.comments || []);
  const [showMenu, setShowMenu] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [popHeartAnim, setPopHeartAnim] = useState(false);

  const handleLike = () => {
    if (!currentUser) {
      addToast('Please log in to like posts.', 'warning');
      return;
    }

    const nextLiked = !isLiked;
    setIsLiked(nextLiked);
    setLikeCount(prev => (nextLiked ? prev + 1 : prev - 1));

    if (nextLiked) {
      setPopHeartAnim(true);
      setTimeout(() => setPopHeartAnim(false), 500);
    }

    const updatedLikes = nextLiked
      ? [...post.likes, currentUser.id]
      : post.likes.filter(id => id !== currentUser.id);

    const updatedPost = {
      ...post,
      likes: updatedLikes,
      likeCount: nextLiked ? likeCount + 1 : likeCount - 1
    };

    onUpdatePost(updatedPost);
  };

  const handleSave = () => {
    if (!currentUser) {
      addToast('Please log in to save posts.', 'warning');
      return;
    }

    const nextSaved = !isSaved;
    setIsSaved(nextSaved);

    const savedBy = post.savedBy || [];
    const updatedSavedBy = nextSaved
      ? [...savedBy, currentUser.id]
      : savedBy.filter(id => id !== currentUser.id);

    const updatedPost = { ...post, savedBy: updatedSavedBy };
    onUpdatePost(updatedPost);

    addToast(nextSaved ? 'Post saved to your bookmarks!' : 'Removed from saved posts.', 'info');
  };

  const handleAddComment = (newComment) => {
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    const updatedPost = {
      ...post,
      comments: updatedComments,
      commentCount: updatedComments.length
    };
    onUpdatePost(updatedPost);
  };

  const isAuthor = currentUser?.id === post.authorId;

  return (
    <article className="post-card glass-card">
      {/* Header */}
      <div className="post-header">
        <Link to={`/profile?username=${post.authorUsername}`} className="post-author-link">
          <div className="avatar avatar-md">
            <img src={post.authorAvatar} alt={post.authorName} />
          </div>
          <div className="post-author-details">
            <div className="author-name-row">
              <span className="author-name">{post.authorName}</span>
              {post.authorVerified && <FiCheckCircle className="verified-badge" />}
            </div>
            <span className="author-username">@{post.authorUsername} • {post.timestamp}</span>
          </div>
        </Link>

        <div className="post-menu-wrapper">
          <button className="btn-icon" onClick={() => setShowMenu(!showMenu)}>
            <FiMoreHorizontal />
          </button>

          {showMenu && (
            <div className="post-dropdown-menu">
              <button
                className="dropdown-item"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  addToast('Post link copied!', 'success');
                  setShowMenu(false);
                }}
              >
                <FiLink /> Copy Link
              </button>
              {isAuthor && (
                <button
                  className="dropdown-item danger-item"
                  onClick={() => {
                    onDeletePost(post.id);
                    addToast('Post deleted.', 'info');
                    setShowMenu(false);
                  }}
                >
                  <FiTrash2 /> Delete Post
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Post Text */}
      <div className="post-content">
        <p>{post.content}</p>
      </div>

      {/* Optional Post Image */}
      {post.image && (
        <div className="post-image-container img-zoom-container">
          <img src={post.image} alt="Post attachment" />
        </div>
      )}

      {/* Actions & Counts */}
      <div className="post-actions-bar">
        <div className="post-action-btns">
          <button
            className={`post-action-btn like-btn ${isLiked ? 'liked' : ''} ${popHeartAnim ? 'anim-heart-pop' : ''}`}
            onClick={handleLike}
          >
            {isLiked ? <FaHeart className="heart-icon-filled" /> : <FiHeart />}
            <span>{likeCount}</span>
          </button>

          <button
            className="post-action-btn comment-btn"
            onClick={() => setShowComments(!showComments)}
          >
            <FiMessageSquare />
            <span>{comments.length}</span>
          </button>

          <button
            className="post-action-btn share-btn"
            onClick={() => setShowShareModal(true)}
          >
            <FiShare2 />
            <span>{post.shares || 0}</span>
          </button>
        </div>

        <button
          className={`btn-icon save-btn ${isSaved ? 'saved' : ''}`}
          onClick={handleSave}
          title={isSaved ? 'Unsave Post' : 'Save Post'}
        >
          <FiBookmark />
        </button>
      </div>

      {/* Expandable Comments Section */}
      {showComments && (
        <CommentSection
          comments={comments}
          onAddComment={handleAddComment}
        />
      )}

      {/* Share Modal */}
      {showShareModal && (
        <ShareModal
          post={post}
          onClose={() => setShowShareModal(false)}
        />
      )}

      <style>{`
        .post-card {
          padding: 1.25rem;
          animation: postReveal 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .post-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.85rem;
        }

        .post-author-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .post-author-details {
          display: flex;
          flex-direction: column;
        }

        .author-name-row {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .author-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .verified-badge {
          color: var(--primary);
          font-size: 0.9rem;
        }

        .author-username {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .post-menu-wrapper {
          position: relative;
        }

        .post-dropdown-menu {
          position: absolute;
          right: 0;
          top: 100%;
          z-index: 50;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          padding: 0.4rem;
          min-width: 150px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          animation: dropdownSlide 0.2s ease-out;
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.55rem 0.75rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          border-radius: var(--radius-sm);
          transition: background var(--transition-fast);
        }

        .dropdown-item:hover {
          background: var(--primary-light);
          color: var(--primary);
        }

        .dropdown-item.danger-item:hover {
          background: var(--danger-light);
          color: var(--danger);
        }

        .post-content {
          font-size: 0.95rem;
          color: var(--text-primary);
          line-height: 1.55;
          margin-bottom: 0.85rem;
          white-space: pre-line;
        }

        .post-image-container {
          border-radius: var(--radius-md);
          max-height: 480px;
          overflow: hidden;
          margin-bottom: 0.85rem;
        }

        .post-image-container img {
          width: 100%;
          max-height: 480px;
          object-fit: cover;
        }

        .post-actions-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.5rem;
        }

        .post-action-btns {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .post-action-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: color var(--transition-fast), transform var(--transition-fast);
        }

        .post-action-btn span {
          font-size: 0.85rem;
        }

        .like-btn:hover { color: var(--danger); }
        .like-btn.liked { color: var(--danger); }
        .heart-icon-filled { color: var(--danger); }

        .comment-btn:hover { color: var(--primary); }
        .share-btn:hover { color: var(--success); }

        .save-btn.saved {
          color: var(--warning);
          fill: var(--warning);
        }
      `}</style>
    </article>
  );
};

export default PostCard;
