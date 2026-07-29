import React, { createContext, useContext, useState, useCallback } from 'react';
import { FiCheckCircle, FiAlertCircle, FiInfo, FiX } from 'react-icons/fi';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info', duration = 3500) => {
    const id = Date.now() + Math.random().toString(36).substr(2, 5);
    setToasts(prev => [...prev, { id, message, type }]);

    setTimeout(() => {
      removeToast(id);
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="toast-container">
        {toasts.map(toast => (
          <div key={toast.id} className={`toast-item toast-${toast.type}`}>
            <div className="toast-icon">
              {toast.type === 'success' && <FiCheckCircle />}
              {toast.type === 'error' && <FiAlertCircle />}
              {toast.type === 'info' && <FiInfo />}
            </div>
            <span className="toast-message">{toast.message}</span>
            <button className="toast-close" onClick={() => removeToast(toast.id)}>
              <FiX />
            </button>
          </div>
        ))}
      </div>
      <style>{`
        .toast-container {
          position: fixed;
          top: 1.5rem;
          right: 1.5rem;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          pointer-events: none;
        }

        .toast-item {
          pointer-events: auto;
          min-width: 280px;
          max-width: 400px;
          padding: 0.85rem 1.1rem;
          border-radius: var(--radius-md);
          background: var(--bg-card);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-lg);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          animation: toastSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .toast-icon {
          font-size: 1.25rem;
          display: flex;
          align-items: center;
        }

        .toast-success .toast-icon { color: var(--success); }
        .toast-error .toast-icon { color: var(--danger); }
        .toast-info .toast-icon { color: var(--primary); }

        .toast-message {
          font-size: 0.9rem;
          font-weight: 500;
          flex: 1;
        }

        .toast-close {
          color: var(--text-muted);
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          padding: 2px;
          border-radius: 4px;
        }
        .toast-close:hover {
          color: var(--text-primary);
          background: var(--bg-secondary);
        }
      `}</style>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
