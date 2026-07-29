import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import RightSidebar from '../components/RightSidebar';
import BottomNav from '../components/BottomNav';
import NotificationItem from '../components/NotificationItem';
import { getNotifications, saveNotifications } from '../utils/localStorage';
import { FiBell, FiCheckCircle } from 'react-icons/fi';
import { useToast } from '../context/ToastContext';

const Notifications = () => {
  const { addToast } = useToast();
  const [notifications, setNotifications] = useState(() => getNotifications());
  const [filter, setFilter] = useState('all'); // 'all' | 'unread'

  const handleToggleRead = (id) => {
    const updated = notifications.map(n => n.id === id ? { ...n, read: !n.read } : n);
    setNotifications(updated);
    saveNotifications(updated);
  };

  const handleMarkAllRead = () => {
    const updated = notifications.map(n => ({ ...n, read: true }));
    setNotifications(updated);
    saveNotifications(updated);
    addToast('All notifications marked as read.', 'success');
  };

  const filteredNotifs = filter === 'unread'
    ? notifications.filter(n => !n.read)
    : notifications;

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="app-center-feed">
        {/* Header Bar */}
        <div className="glass-card notif-header-card">
          <div className="notif-title-row">
            <h2>Notifications {unreadCount > 0 && <span className="badge badge-primary">{unreadCount} new</span>}</h2>
            {unreadCount > 0 && (
              <button className="btn btn-secondary btn-sm" onClick={handleMarkAllRead}>
                <FiCheckCircle /> Mark All Read
              </button>
            )}
          </div>

          <div className="tab-group notif-tabs">
            <button
              className={`tab-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Notifications ({notifications.length})
            </button>
            <button
              className={`tab-btn ${filter === 'unread' ? 'active' : ''}`}
              onClick={() => setFilter('unread')}
            >
              Unread ({unreadCount})
            </button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="notif-feed-list">
          {filteredNotifs.map((notif) => (
            <NotificationItem
              key={notif.id}
              notif={notif}
              onToggleRead={handleToggleRead}
            />
          ))}

          {filteredNotifs.length === 0 && (
            <div className="glass-card empty-state">
              <span className="empty-state-icon"><FiBell /></span>
              <h3 className="empty-state-title">No notifications</h3>
              <p>You're all caught up! When people like, comment, or follow you, updates will appear here.</p>
            </div>
          )}
        </div>
      </main>

      <RightSidebar />
      <BottomNav />

      <style>{`
        .notif-header-card {
          padding: 1.25rem 1.25rem 0 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .notif-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .notif-title-row h2 {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 1.5rem;
        }

        .notif-tabs {
          margin-bottom: 0;
        }

        .notif-feed-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
      `}</style>
    </div>
  );
};

export default Notifications;
