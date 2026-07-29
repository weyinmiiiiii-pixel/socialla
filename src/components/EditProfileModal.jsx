import React, { useState } from 'react';
import { FiX, FiCamera, FiSave } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const EditProfileModal = ({ onClose }) => {
  const { currentUser, updateProfile } = useAuth();
  const { addToast } = useToast();

  const [name, setName] = useState(currentUser?.name || '');
  const [username, setUsername] = useState(currentUser?.username || '');
  const [bio, setBio] = useState(currentUser?.bio || '');
  const [avatar, setAvatar] = useState(currentUser?.avatar || '');
  const [cover, setCover] = useState(currentUser?.cover || '');

  const handleAvatarFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleCoverFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setCover(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !username.trim()) {
      addToast('Name and username cannot be empty.', 'warning');
      return;
    }

    updateProfile({
      name: name.trim(),
      username: username.trim(),
      bio: bio.trim(),
      avatar,
      cover
    });

    addToast('Profile updated successfully!', 'success');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content edit-profile-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Edit Profile</h3>
          <button className="btn-icon" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          {/* Cover Photo Upload */}
          <div className="edit-cover-wrap" style={{ backgroundImage: `url(${cover})` }}>
            <label className="btn btn-secondary change-cover-btn">
              <FiCamera /> Change Cover
              <input type="file" accept="image/*" onChange={handleCoverFile} hidden />
            </label>
          </div>

          {/* Avatar Upload */}
          <div className="edit-avatar-wrap">
            <div className="avatar avatar-xl">
              <img src={avatar} alt="Avatar Preview" />
            </div>
            <label className="btn-icon change-avatar-btn" title="Change Profile Picture">
              <FiCamera />
              <input type="file" accept="image/*" onChange={handleAvatarFile} hidden />
            </label>
          </div>

          {/* Form Fields */}
          <div className="input-group">
            <label className="input-label">Full Name</label>
            <input
              type="text"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label className="input-label">Username</label>
            <input
              type="text"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label className="input-label">Bio</label>
            <textarea
              className="input-field"
              rows="3"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              <FiSave /> Save Changes
            </button>
          </div>
        </form>
      </div>

      <style>{`
        .edit-profile-modal {
          padding: 1.5rem;
          max-width: 580px;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .edit-cover-wrap {
          height: 140px;
          border-radius: var(--radius-md);
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 0.75rem;
        }

        .change-cover-btn {
          font-size: 0.8rem;
          padding: 0.4rem 0.8rem;
        }

        .edit-avatar-wrap {
          position: relative;
          width: 90px;
          margin-top: -50px;
          margin-left: 1rem;
        }

        .change-avatar-btn {
          position: absolute;
          bottom: 0;
          right: 0;
          background: var(--primary);
          color: #ffffff;
          box-shadow: var(--shadow-md);
        }

        .modal-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.75rem;
          margin-top: 0.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }
      `}</style>
    </div>
  );
};

export default EditProfileModal;
