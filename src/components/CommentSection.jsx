import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const CommentSection = ({ comments, onAddComment }) => {
  const { currentUser } = useAuth();
  const { addToast } = useToast();
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    if (!currentUser) {
      addToast('Please log in to leave a comment.', 'warning');
      return;
    }

    const newComment = {
      id: `c_${Date.now()}`,
      authorName: currentUser.name,
      authorUsername: currentUser.username,
      authorAvatar: currentUser.avatar,
      content: commentText.trim(),
      timestamp: 'Just now'
    };

    onAddComment(newComment);
    setCommentText('');
    addToast('Comment added!', 'success');
  };

  return (
    <div className="comment-section">
      {/* Comments List */}
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <div className="avatar avatar-sm">
              <img src={comment.authorAvatar} alt={comment.authorName} />
            </div>
            <div className="comment-bubble">
              <div className="comment-header">
                <span className="comment-author-name">{comment.authorName}</span>
                <span className="comment-timestamp">{comment.timestamp}</span>
              </div>
              <p className="comment-content">{comment.content}</p>
            </div>
          </div>
        ))}

        {comments.length === 0 && (
          <div className="no-comments">Be the first to comment on this post!</div>
        )}
      </div>

      {/* Add Comment Form */}
      {currentUser && (
        <form onSubmit={handleSubmit} className="add-comment-form">
          <div className="avatar avatar-sm">
            <img src={currentUser.avatar} alt={currentUser.name} />
          </div>
          <div className="input-wrapper has-right-icon">
            <input
              type="text"
              className="input-field comment-input"
              placeholder="Write a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button type="submit" className="input-icon-right comment-submit-btn" disabled={!commentText.trim()}>
              <FiSend />
            </button>
          </div>
        </form>
      )}

      <style>{`
        .comment-section {
          padding-top: 1rem;
          margin-top: 0.75rem;
          border-top: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          animation: commentSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .comments-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .comment-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
        }

        .comment-bubble {
          flex: 1;
          background: var(--bg-secondary);
          padding: 0.65rem 0.9rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }

        .comment-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.2rem;
        }

        .comment-author-name {
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text-primary);
        }

        .comment-timestamp {
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .comment-content {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .no-comments {
          font-size: 0.85rem;
          color: var(--text-muted);
          text-align: center;
          padding: 0.5rem 0;
        }

        .add-comment-form {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-top: 0.25rem;
        }

        .comment-input {
          padding-top: 0.55rem;
          padding-bottom: 0.55rem;
          font-size: 0.88rem;
          border-radius: var(--radius-full);
        }

        .comment-submit-btn {
          color: var(--primary);
        }
      `}</style>
    </div>
  );
};

export default CommentSection;
