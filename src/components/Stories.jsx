import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { getStories, saveStories } from '../utils/localStorage';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import StoryViewer from './StoryViewer';

const Stories = () => {
  const { currentUser } = useAuth();
  const { addToast } = useToast();

  const [stories, setStories] = useState(() => getStories());
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);

  const handleAddStory = (e) => {
    const file = e.target.files[0];
    if (file && currentUser) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newStory = {
          id: `story_${Date.now()}`,
          userId: currentUser.id,
          userName: currentUser.name,
          userAvatar: currentUser.avatar,
          image: reader.result,
          caption: "Just shared a new story moment!",
          timestamp: "Just now",
          seen: false
        };

        const updatedStories = [newStory, ...stories];
        setStories(updatedStories);
        saveStories(updatedStories);
        addToast('Story published successfully!', 'success');
      };
      reader.readAsDataURL(file);
    }
  };

  const openStoryViewer = (index) => {
    setActiveStoryIndex(index);
    // Mark seen
    const updated = [...stories];
    updated[index].seen = true;
    setStories(updated);
    saveStories(updated);
  };

  return (
    <div className="stories-container glass-card">
      <div className="stories-track">
        {/* Add Story Button for Current User */}
        {currentUser && (
          <label className="story-item story-add-item">
            <input
              type="file"
              accept="image/*"
              className="story-file-input"
              onChange={handleAddStory}
            />
            <div className="story-avatar-wrap">
              <img src={currentUser.avatar} alt="Add Story" />
              <div className="story-add-plus">
                <FiPlus />
              </div>
            </div>
            <span className="story-username">Your Story</span>
          </label>
        )}

        {/* Stories List */}
        {stories.map((story, index) => (
          <div
            key={story.id}
            className={`story-item story-card-anim ${story.seen ? 'seen' : 'unseen'}`}
            onClick={() => openStoryViewer(index)}
          >
            <div className="story-avatar-wrap">
              <div className="story-ring" />
              <img src={story.userAvatar} alt={story.userName} />
            </div>
            <span className="story-username">{story.userName}</span>
          </div>
        ))}
      </div>

      {/* Story Modal Viewer */}
      {activeStoryIndex !== null && (
        <StoryViewer
          stories={stories}
          initialIndex={activeStoryIndex}
          onClose={() => setActiveStoryIndex(null)}
        />
      )}

      <style>{`
        .stories-container {
          padding: 1rem;
          overflow-hidden: true;
        }

        .stories-track {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
        }

        .stories-track::-webkit-scrollbar {
          display: none;
        }

        .story-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
          flex-shrink: 0;
          width: 76px;
        }

        .story-avatar-wrap {
          position: relative;
          width: 64px;
          height: 64px;
          border-radius: var(--radius-full);
          padding: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .story-avatar-wrap img {
          width: 100%;
          height: 100%;
          border-radius: var(--radius-full);
          object-fit: cover;
          z-index: 2;
          border: 2px solid var(--bg-card);
        }

        .story-item.unseen .story-ring {
          position: absolute;
          inset: 0;
          border-radius: var(--radius-full);
          background: var(--gradient-primary);
          animation: storyRingPulse 6s linear infinite;
        }

        .story-item.seen .story-ring {
          position: absolute;
          inset: 0;
          border-radius: var(--radius-full);
          border: 2px solid var(--border-color);
        }

        .story-username {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 72px;
          text-align: center;
        }

        .story-add-item {
          position: relative;
        }

        .story-file-input {
          display: none;
        }

        .story-add-plus {
          position: absolute;
          bottom: 2px;
          right: 2px;
          z-index: 3;
          width: 22px;
          height: 22px;
          border-radius: var(--radius-full);
          background: var(--primary);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          border: 2px solid var(--bg-card);
        }
      `}</style>
    </div>
  );
};

export default Stories;
