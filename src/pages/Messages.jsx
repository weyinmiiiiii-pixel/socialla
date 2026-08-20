import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../components/Sidebar';
import BottomNav from '../components/BottomNav';
import { getConversations, saveConversations } from '../utils/localStorage';
import { useAuth } from '../context/AuthContext';
import { FiSearch, FiSend, FiMessageSquare, FiArrowLeft } from 'react-icons/fi';

const Messages = () => {
  const { currentUser } = useAuth();
  const [conversations, setConversations] = useState(() => getConversations());
  const [activeConvoId, setActiveConvoId] = useState(conversations[0]?.id || null);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const chatEndRef = useRef(null);

  const activeConvo = conversations.find(c => c.id === activeConvoId);

  // Auto-scroll chat area to bottom when messages or active conversation changes
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeConvoId, conversations]);

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
                  <div ref={chatEndRef} />
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

      {!activeConvoId && <BottomNav />}

      <style>{`
        .messages-layout-wrapper {
          height: 100vh;
          max-width: 100% !important;
          width: 100% !important;
          margin: 0 !important;
          padding: 0.75rem 1.25rem !important;
          grid-template-columns: 260px 1fr !important;
          gap: 1.25rem !important;
          overflow: hidden;
          box-sizing: border-box;
        }

        .messages-main-pane {
          padding: 0;
          height: calc(100vh - 1.5rem);
          max-height: calc(100vh - 1.5rem);
          margin: 0;
          width: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border-radius: var(--radius-lg);
        }

        .messages-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }

        .messages-convos-pane {
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          height: 100%;
          background: var(--bg-card);
          overflow: hidden;
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
          width: 100%;
          background: var(--bg-main);
          overflow: hidden;
          position: relative;
        }

        .chat-header {
          padding: 1rem 1.25rem;
          background: var(--bg-card);
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
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
          padding: 0.75rem 1.1rem;
          border-radius: 16px;
          font-size: 0.92rem;
          line-height: 1.45;
          position: relative;
        }

        .chat-bubble-row.me .chat-bubble {
          background: var(--gradient-primary);
          color: #ffffff;
          border-bottom-right-radius: 4px;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.25);
        }

        .chat-bubble-row.them .chat-bubble {
          background: var(--bg-card);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
          border-bottom-left-radius: 4px;
        }

        .chat-bubble-time {
          display: block;
          font-size: 0.68rem;
          opacity: 0.8;
          text-align: right;
          margin-top: 4px;
        }

        .chat-input-form {
          padding: 1rem 1.25rem;
          background: var(--bg-card);
          border-top: 1px solid var(--border-color);
          flex-shrink: 0;
          width: 100%;
          position: sticky;
          bottom: 0;
          z-index: 10;
        }

        .chat-input-form .input-wrapper {
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
        }

        .chat-input-form .chat-input {
          width: 100%;
          border-radius: var(--radius-full);
          padding: 0.85rem 3.5rem 0.85rem 1.25rem !important;
          font-size: 0.95rem;
          background: var(--bg-input);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          transition: all var(--transition-fast);
        }

        .chat-input-form .chat-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px var(--primary-light);
        }

        .chat-send-btn {
          position: absolute;
          right: 0.6rem;
          top: 50%;
          transform: translateY(-50%);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--gradient-primary);
          color: #ffffff;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
          z-index: 2;
        }

        .chat-send-btn:hover:not(:disabled) {
          transform: translateY(-50%) scale(1.05);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }

        .chat-send-btn:disabled {
          opacity: 0.45;
          cursor: not-allowed;
          background: var(--text-muted);
          box-shadow: none;
        }

        .mobile-back-btn {
          display: none;
        }

        @media (max-width: 1023px) {
          .messages-layout-wrapper {
            grid-template-columns: 80px 1fr !important;
            padding: 0.75rem !important;
          }
        }

        @media (max-width: 767px) {
          .messages-layout-wrapper {
            display: block !important;
            padding: 0 !important;
            height: 100vh !important;
          }
          .messages-main-pane {
            height: 100vh !important;
            max-height: 100vh !important;
            margin: 0;
            border-radius: 0;
          }
          .messages-layout {
            grid-template-columns: 1fr !important;
          }
          .mobile-hidden {
            display: none !important;
          }
          .mobile-back-btn {
            display: inline-flex;
          }
          .chat-input-form {
            padding-bottom: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Messages;
