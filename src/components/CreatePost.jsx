import React, { useState } from 'react';
import { FiImage, FiSmile, FiMapPin, FiX, FiSend } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const CreatePost = ({ onPostCreated }) => {
  const { currentUser } = useAuth();
  const { addToast } = useToast();

  const [text, setText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() && !selectedImage) {
      addToast('Please enter text or attach an image to publish a post.', 'warning');
      return;
    }

    setIsSubmitting(true);

    const newPost = {
      id: `post_${Date.now()}`,
      authorId: currentUser?.id || 'u_guest',
      authorName: currentUser?.name || 'Guest User',
      authorUsername: currentUser?.username || 'guest_user',
      authorAvatar: currentUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      authorVerified: currentUser?.verified || false,
      content: text.trim(),
      image: selectedImage || null,
      likes: [],
      likeCount: 0,
      comments: [],
      commentCount: 0,
      shares: 0,
      savedBy: [],
      timestamp: 'Just now'
    };

    setTimeout(() => {
      onPostCreated(newPost);
      setText('');
      setSelectedImage(null);
      setIsSubmitting(false);
      addToast('Your post has been published to Socialla feed!', 'success');
    }, 300);
  };

  if (!currentUser) return null;

  return (
    <div className="create-post-card glass-card">
      <form onSubmit={handleSubmit}>
        <div className="create-post-header">
          <div className="avatar avatar-md">
            <img src={currentUser.avatar} alt={currentUser.name} />
          </div>
          <textarea
            className="create-post-textarea"
            placeholder={`What's on your mind, ${currentUser.name.split(' ')[0]}?`}
            rows="3"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        {/* Selected Image Preview */}
        {selectedImage && (
          <div className="create-post-image-preview">
            <img src={selectedImage} alt="Post attachment preview" />
            <button
              type="button"
              className="btn-icon remove-image-btn"
              onClick={() => setSelectedImage(null)}
              title="Remove attachment"
            >
              <FiX />
            </button>
          </div>
        )}

        <div className="create-post-actions">
          <div className="create-post-tools">
            <label className="btn-icon tool-btn" title="Add Image">
              <FiImage className="tool-icon image-icon" />
              <input
                type="file"
                accept="image/*"
                className="hidden-file-input"
                onChange={handleImageChange}
              />
            </label>
            <button type="button" className="btn-icon tool-btn" title="Add Tag" onClick={() => addToast('Tag friends feature coming soon!', 'info')}>
              <FiSmile className="tool-icon smile-icon" />
            </button>
            <button type="button" className="btn-icon tool-btn" title="Add Location" onClick={() => addToast('Location added to post!', 'info')}>
              <FiMapPin className="tool-icon pin-icon" />
            </button>
          </div>

          <button
            type="submit"
            className="btn btn-primary create-post-submit-btn"
            disabled={isSubmitting || (!text.trim() && !selectedImage)}
          >
            <FiSend /> {isSubmitting ? 'Posting...' : 'Post'}
          </button>
        </div>
      </form>

      <style>{`
        .create-post-card {
          padding: 1.25rem;
          animation: createPostEntrance 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .create-post-header {
          display: flex;
          gap: 0.85rem;
        }

        .create-post-textarea {
          flex: 1;
          resize: none;
          background: transparent;
          color: var(--text-primary);
          font-size: 0.98rem;
          font-family: inherit;
          border: none;
          padding: 0.25rem 0;
        }

        .create-post-textarea::placeholder {
          color: var(--text-muted);
        }

        .create-post-image-preview {
          position: relative;
          margin-top: 0.75rem;
          border-radius: var(--radius-md);
          overflow: hidden;
          max-height: 280px;
        }

        .create-post-image-preview img {
          width: 100%;
          max-height: 280px;
          object-fit: cover;
        }

        .remove-image-btn {
          position: absolute;
          top: 8px;
          right: 8px;
          background: rgba(15, 23, 42, 0.7);
          color: #ffffff;
        }
        .remove-image-btn:hover {
          background: rgba(239, 68, 68, 0.9);
        }

        .create-post-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-color);
        }

        .create-post-tools {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .tool-btn {
          font-size: 1.25rem;
        }

        .image-icon { color: var(--primary); }
        .smile-icon { color: var(--warning); }
        .pin-icon { color: var(--accent); }

        .hidden-file-input {
          display: none;
        }

        .create-post-submit-btn {
          padding: 0.55rem 1.4rem;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};

export default CreatePost;
