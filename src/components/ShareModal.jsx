import React from 'react';
import { FiX, FiCopy, FiShare2, FiCheck } from 'react-icons/fi';
import { useToast } from '../context/ToastContext';

const ShareModal = ({ post, onClose }) => {
  const { addToast } = useToast();

  const handleCopyLink = () => {
    const link = `${window.location.origin}/home#${post.id}`;
    navigator.clipboard.writeText(link);
    addToast('Post link copied to clipboard!', 'success');
    onClose();
  };

  const handleShareToFeed = () => {
    addToast('Post re-shared to your Socialla feed!', 'success');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content share-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Share Post</h3>
          <button className="btn-icon" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <div className="modal-body">
          <div className="share-post-preview">
            <div className="avatar avatar-sm">
              <img src={post.authorAvatar} alt={post.authorName} />
            </div>
            <div className="share-preview-text">
              <span className="share-preview-author">{post.authorName}</span>
              <p className="share-preview-excerpt">{post.content}</p>
            </div>
          </div>

          <div className="share-options">
            <button className="btn btn-secondary share-opt-btn" onClick={handleCopyLink}>
              <FiCopy /> Copy Link
            </button>
            <button className="btn btn-primary share-opt-btn" onClick={handleShareToFeed}>
              <FiShare2 /> Share to Socialla Feed
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .share-modal {
          padding: 1.5rem;
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .modal-body {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .share-post-preview {
          display: flex;
          gap: 0.75rem;
          padding: 0.85rem;
          background: var(--bg-secondary);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }

        .share-preview-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
          overflow: hidden;
        }

        .share-preview-author {
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text-primary);
        }

        .share-preview-excerpt {
          font-size: 0.82rem;
          color: var(--text-muted);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .share-options {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .share-opt-btn {
          width: 100%;
          justify-content: center;
          padding: 0.75rem;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default ShareModal;
