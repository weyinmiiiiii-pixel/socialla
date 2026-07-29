import React, { useState, useEffect } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const StoryViewer = ({ stories, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const story = stories[currentIndex];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < stories.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        onClose();
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex, stories.length, onClose]);

  const handlePrev = (e) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (currentIndex < stories.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onClose();
    }
  };

  if (!story) return null;

  return (
    <div className="story-viewer-modal" onClick={onClose}>
      <div className="story-viewer-content" onClick={(e) => e.stopPropagation()}>
        {/* Progress Bars */}
        <div className="story-progress-bar-container">
          {stories.map((st, i) => (
            <div key={st.id} className="story-progress-track">
              <div
                className="story-progress-fill"
                style={{
                  width: i < currentIndex ? '100%' : i === currentIndex ? '100%' : '0%',
                  transition: i === currentIndex ? 'width 5s linear' : 'none'
                }}
              />
            </div>
          ))}
        </div>

        {/* Top Bar Header */}
        <div className="story-viewer-header">
          <div className="story-user-info">
            <div className="avatar avatar-sm">
              <img src={story.userAvatar} alt={story.userName} />
            </div>
            <div className="story-header-text">
              <span className="story-user-name">{story.userName}</span>
              <span className="story-time">{story.timestamp}</span>
            </div>
          </div>

          <button className="btn-icon story-close-btn" onClick={onClose}>
            <FiX />
          </button>
        </div>

        {/* Image Content */}
        <div className="story-image-wrap">
          <img src={story.image} alt={story.caption || 'Story'} />
          {story.caption && (
            <div className="story-caption-overlay">
              <p>{story.caption}</p>
            </div>
          )}
        </div>

        {/* Navigation Arrows */}
        {currentIndex > 0 && (
          <button className="story-nav-btn story-prev-btn" onClick={handlePrev}>
            <FiChevronLeft />
          </button>
        )}

        <button className="story-nav-btn story-next-btn" onClick={handleNext}>
          <FiChevronRight />
        </button>
      </div>

      <style>{`
        .story-viewer-modal {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          animation: fadeIn 0.25s ease-out;
        }

        .story-viewer-content {
          position: relative;
          width: 100%;
          max-width: 420px;
          height: 90vh;
          max-height: 740px;
          background: #0f172a;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
          animation: modalScaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .story-progress-bar-container {
          position: absolute;
          top: 12px;
          left: 12px;
          right: 12px;
          z-index: 10;
          display: flex;
          gap: 6px;
        }

        .story-progress-track {
          flex: 1;
          height: 3px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
          overflow: hidden;
        }

        .story-progress-fill {
          height: 100%;
          background: #ffffff;
        }

        .story-viewer-header {
          position: absolute;
          top: 24px;
          left: 12px;
          right: 12px;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .story-user-info {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .story-header-text {
          display: flex;
          flex-direction: column;
        }

        .story-user-name {
          color: #ffffff;
          font-weight: 700;
          font-size: 0.9rem;
          text-shadow: 0 1px 3px rgba(0,0,0,0.8);
        }

        .story-time {
          color: rgba(255, 255, 255, 0.75);
          font-size: 0.75rem;
        }

        .story-close-btn {
          color: #ffffff;
          background: rgba(0,0,0,0.4);
        }
        .story-close-btn:hover {
          background: rgba(0,0,0,0.7);
        }

        .story-image-wrap {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .story-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .story-caption-overlay {
          position: absolute;
          bottom: 24px;
          left: 16px;
          right: 16px;
          padding: 0.85rem 1.1rem;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(8px);
          border-radius: var(--radius-md);
          color: #ffffff;
          font-weight: 600;
          font-size: 0.9rem;
          text-align: center;
        }

        .story-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 15;
          width: 44px;
          height: 44px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(4px);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          transition: background var(--transition-fast);
        }

        .story-nav-btn:hover {
          background: rgba(255, 255, 255, 0.4);
        }

        .story-prev-btn { left: 12px; }
        .story-next-btn { right: 12px; }
      `}</style>
    </div>
  );
};

export default StoryViewer;
