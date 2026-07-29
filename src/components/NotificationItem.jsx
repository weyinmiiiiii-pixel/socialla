import React from 'react';
import { FiHeart, FiMessageSquare, FiUserPlus, FiAtSign, FiCheck } from 'react-icons/fi';

const NotificationItem = ({ notif, onToggleRead }) => {
  const getIcon = () => {
    switch (notif.type) {
      case 'like': return <FiHeart className="notif-icon notif-like" />;
      case 'comment': return <FiMessageSquare className="notif-icon notif-comment" />;
      case 'follow': return <FiUserPlus className="notif-icon notif-follow" />;
      case 'mention': return <FiAtSign className="notif-icon notif-mention" />;
      default: return <FiHeart className="notif-icon" />;
    }
  };

  return (
    <div className={`notification-item glass-card ${!notif.read ? 'unread' : ''}`}>
      <div className="notif-avatar-wrap">
        <div className="avatar avatar-md">
          <img src={notif.user.avatar} alt={notif.user.name} />
        </div>
        <div className="notif-badge-overlay">{getIcon()}</div>
      </div>

      <div className="notif-details">
        <p className="notif-text">
          <strong className="notif-username">{notif.user.name}</strong>{' '}
          {notif.targetText}
        </p>
        <span className="notif-timestamp">{notif.timestamp}</span>
      </div>

      <button
        className="btn-icon notif-read-btn"
        onClick={() => onToggleRead(notif.id)}
        title={notif.read ? 'Mark as Unread' : 'Mark as Read'}
      >
        <FiCheck className={notif.read ? 'read-check' : ''} />
      </button>

      <style>{`
        .notification-item {
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: background var(--transition-fast);
          position: relative;
        }

        .notification-item.unread {
          border-left: 4px solid var(--primary);
          background: var(--primary-light);
        }

        .notif-avatar-wrap {
          position: relative;
        }

        .notif-badge-overlay {
          position: absolute;
          bottom: -4px;
          right: -4px;
          width: 22px;
          height: 22px;
          border-radius: var(--radius-full);
          background: var(--bg-card);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
        }

        .notif-icon { font-size: 0.85rem; }
        .notif-like { color: var(--danger); }
        .notif-comment { color: var(--primary); }
        .notif-follow { color: var(--success); }
        .notif-mention { color: var(--warning); }

        .notif-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .notif-text {
          font-size: 0.92rem;
          color: var(--text-primary);
          line-height: 1.4;
        }

        .notif-username {
          font-weight: 700;
        }

        .notif-timestamp {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .notif-read-btn {
          color: var(--text-muted);
        }

        .read-check {
          color: var(--success);
        }
      `}</style>
    </div>
  );
};

export default NotificationItem;
