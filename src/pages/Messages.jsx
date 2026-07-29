import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import BottomNav from '../components/BottomNav';
import { getConversations, saveConversations } from '../utils/localStorage';
import { useAuth } from '../context/AuthContext';
import { FiSearch, FiSend, FiMessageSquare, FiArrowLeft, FiMoreVertical } from 'react-icons/fi';

const Messages = () => {
  const { currentUser } = useAuth();
  const [conversations, setConversations] = useState(() => getConversations());
  const [activeConvoId, setActiveConvoId] = useState(conversations[0]?.id || null);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const activeConvo = conversations.find(c => c.id === activeConvoId);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim() || !activeConvo) return;

    const newMsg = {
      id: `m_${Date.now()}`,
      senderId: 'me',
      text: messageInput.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updated = conversations.map(c => {
      if (c.id === activeConvoId) {
        return {
          ...c,
          messages: [...c.messages, newMsg],
          unread: 0
        };
      }
      return c;
    });

    setConversations(updated);
    saveConversations(updated);
    setMessageInput('');
  };

  const filteredConvos = conversations.filter(c =>
    c.participant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.participant.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-layout messages-layout-wrapper">
      <Sidebar />

      <main className="messages-main-pane glass-card">
        <div className="messages-layout">
          {/* Left Conversations List Pane */}
          <div className={`messages-convos-pane ${activeConvoId ? 'mobile-hidden' : ''}`}>
            <div className="convos-header">
              <h2>Direct Messages</h2>
              <div className="input-wrapper search-wrapper">
                <FiSearch className="input-icon-left" />
                <input
                  type="text"
                  className="input-field"
                  placeholder="Search messages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="convos-list">
              {filteredConvos.map((convo) => {
                const lastMsg = convo.messages[convo.messages.length - 1];
                return (
                  <div
                    key={convo.id}
                    className={`convo-item ${convo.id === activeConvoId ? 'active' : ''}`}
                    onClick={() => setActiveConvoId(convo.id)}
                  >
                    <div className="avatar avatar-md">
                      <img src={convo.participant.avatar} alt={convo.participant.name} />
                      {convo.participant.online && <span className="avatar-online-dot" />}
                    </div>
                    <div className="convo-details">
                      <div className="convo-name-row">
                        <span className="convo-name">{convo.participant.name}</span>
                        {lastMsg && <span className="convo-time">{lastMsg.time}</span>}
                      </div>
                      <p className="convo-preview">{lastMsg?.text || 'No messages yet'}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Chat Thread Pane */}
          <div className={`messages-chat-pane ${!activeConvoId ? 'mobile-hidden' : ''}`}>
            {activeConvo ? (
              <>
                {/* Chat Top Header */}
                <div className="chat-header">
                  <button className="btn-icon mobile-back-btn" onClick={() => setActiveConvoId(null)}>
                    <FiArrowLeft />
                  </button>
                  <div className="avatar avatar-md">
                    <img src={activeConvo.participant.avatar} alt={activeConvo.participant.name} />
                    {activeConvo.participant.online && <span className="avatar-online-dot" />}
                  </div>
                  <div className="chat-header-text">
                    <span className="chat-user-name">{activeConvo.participant.name}</span>
                    <span className="chat-user-status">
                      {activeConvo.participant.online ? 'Online now' : 'Offline'}
                    </span>
                  </div>
                </div>

                {/* Messages Bubbles Area */}
                <div className="chat-messages-area">
                  {activeConvo.messages.map((msg) => {
                    const isMe = msg.senderId === 'me' || msg.senderId === currentUser?.id;
                    return (
                      <div key={msg.id} className={`chat-bubble-row ${isMe ? 'me' : 'them'}`}>
                        {!isMe && (
                          <div className="avatar avatar-sm">
                            <img src={activeConvo.participant.avatar} alt={activeConvo.participant.name} />
                          </div>
                        )}
                        <div className="chat-bubble">
                          <p>{msg.text}</p>
                          <span className="chat-bubble-time">{msg.time}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Message Send Form */}
                <form onSubmit={handleSendMessage} className="chat-input-form">
                  <div className="input-wrapper has-right-icon">
                    <input
                      type="text"
                      className="input-field chat-input"
                      placeholder="Type a message..."
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                    />
                    <button type="submit" className="input-icon-right chat-send-btn" disabled={!messageInput.trim()}>
                      <FiSend />
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="empty-state">
                <FiMessageSquare className="empty-state-icon" />
                <h3 className="empty-state-title">Select a conversation</h3>
                <p>Choose a friend from the left sidebar to start chatting!</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <BottomNav />

      <style>{`
        .messages-main-pane {
          padding: 0;
          height: calc(100vh - 3rem);
          overflow: hidden;
        }

        .messages-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          height: 100%;
        }

        .messages-convos-pane {
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .convos-header {
          padding: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .convos-header h2 { font-size: 1.35rem; }

        .convos-list {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        .convo-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.25rem;
          cursor: pointer;
          border-bottom: 1px solid var(--border-color);
          transition: background var(--transition-fast);
        }

        .convo-item:hover {
          background: var(--primary-light);
        }

        .convo-item.active {
          background: var(--primary-light);
          border-left: 3px solid var(--primary);
        }

        .convo-details {
          flex: 1;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .convo-name-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .convo-name {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .convo-time {
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .convo-preview {
          font-size: 0.82rem;
          color: var(--text-secondary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .messages-chat-pane {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: var(--bg-main);
        }

        .chat-header {
          padding: 0.85rem 1.25rem;
          background: var(--bg-card);
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .chat-header-text {
          display: flex;
          flex-direction: column;
        }

        .chat-user-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .chat-user-status {
          font-size: 0.75rem;
          color: var(--success);
        }

        .chat-messages-area {
          flex: 1;
          overflow-y: auto;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .chat-bubble-row {
          display: flex;
          align-items: flex-end;
          gap: 0.5rem;
          max-width: 75%;
        }

        .chat-bubble-row.me {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .chat-bubble-row.them {
          align-self: flex-start;
        }

        .chat-bubble {
          padding: 0.7rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.92rem;
          line-height: 1.4;
          position: relative;
        }

        .chat-bubble-row.me .chat-bubble {
          background: var(--gradient-primary);
          color: #ffffff;
          border-bottom-right-radius: 2px;
        }

        .chat-bubble-row.them .chat-bubble {
          background: var(--bg-card);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
          border-bottom-left-radius: 2px;
        }

        .chat-bubble-time {
          display: block;
          font-size: 0.68rem;
          opacity: 0.75;
          text-align: right;
          margin-top: 2px;
        }

        .chat-input-form {
          padding: 0.85rem 1.25rem;
          background: var(--bg-card);
          border-top: 1px solid var(--border-color);
        }

        .chat-input {
          border-radius: var(--radius-full);
        }

        .chat-send-btn {
          color: var(--primary);
        }

        .mobile-back-btn {
          display: none;
        }

        @media (max-width: 767px) {
          .messages-layout {
            grid-template-columns: 1fr;
          }
          .mobile-back-btn {
            display: inline-flex;
          }
        }
      `}</style>
    </div>
  );
};

export default Messages;
