import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  getUsers,
  saveUsers,
  getCurrentUser,
  setCurrentUser,
  removeCurrentUser
} from '../utils/localStorage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUserState] = useState(() => getCurrentUser());
  const [loading, setLoading] = useState(false);

  // Synchronize initial users database in localStorage if needed
  useEffect(() => {
    getUsers();
  }, []);

  const register = async ({ name, username, email, password, avatar }) => {
    setLoading(true);
    try {
      const users = getUsers();
      
      const emailExists = users.some(u => u.email.toLowerCase() === email.toLowerCase());
      if (emailExists) {
        throw new Error('An account with this email address already exists.');
      }

      const usernameExists = users.some(u => u.username.toLowerCase() === username.toLowerCase());
      if (usernameExists) {
        throw new Error('This username is already taken. Please pick another.');
      }

      const newUser = {
        id: `u_${Date.now()}`,
        name,
        username,
        email,
        password,
        avatar: avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80',
        cover: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
        bio: 'Welcome to my Socialla profile! Excited to connect and share.',
        followers: 0,
        following: 0,
        verified: false,
        joinedDate: 'Just now'
      };

      const updatedUsers = [...users, newUser];
      saveUsers(updatedUsers);
      setCurrentUser(newUser);
      setCurrentUserState(newUser);
      
      return newUser;
    } finally {
      setLoading(false);
    }
  };

  const login = async (identifier, password) => {
    setLoading(true);
    try {
      const users = getUsers();
      const cleanIdent = identifier.trim().toLowerCase();

      const user = users.find(
        u => u.email.toLowerCase() === cleanIdent || u.username.toLowerCase() === cleanIdent
      );

      if (!user) {
        throw new Error('No user account found with that email or username.');
      }

      if (user.password !== password) {
        throw new Error('Incorrect password. Please verify and try again.');
      }

      setCurrentUser(user);
      setCurrentUserState(user);
      return user;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    removeCurrentUser();
    setCurrentUserState(null);
  };

  const updateProfile = (updatedFields) => {
    if (!currentUser) return;
    
    const updatedUser = { ...currentUser, ...updatedFields };
    setCurrentUser(updatedUser);
    setCurrentUserState(updatedUser);

    // Sync with global users list
    const users = getUsers();
    const newUsers = users.map(u => u.id === currentUser.id ? updatedUser : u);
    saveUsers(newUsers);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading,
        register,
        login,
        logout,
        updateProfile,
        isAuthenticated: !!currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
