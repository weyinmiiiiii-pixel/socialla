import {
  INITIAL_USERS,
  INITIAL_POSTS,
  INITIAL_STORIES,
  INITIAL_NOTIFICATIONS,
  INITIAL_CONVERSATIONS,
  INITIAL_SETTINGS
} from '../data/mockData';

const KEYS = {
  USERS: 'socialla_users',
  CURRENT_USER: 'socialla_current_user',
  POSTS: 'socialla_posts',
  STORIES: 'socialla_stories',
  NOTIFICATIONS: 'socialla_notifications',
  MESSAGES: 'socialla_messages',
  SETTINGS: 'socialla_settings'
};

// Safe JSON parser helper
const getItem = (key, fallback) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (error) {
    console.error(`Error reading ${key} from localStorage:`, error);
    return fallback;
  }
};

const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error);
  }
};

// Users
export const getUsers = () => {
  let users = getItem(KEYS.USERS, null);
  if (!users) {
    setItem(KEYS.USERS, INITIAL_USERS);
    return INITIAL_USERS;
  }
  const existingIds = new Set(users.map(u => u.id));
  const missingUsers = INITIAL_USERS.filter(u => !existingIds.has(u.id));
  if (missingUsers.length > 0) {
    users = [...users, ...missingUsers];
    setItem(KEYS.USERS, users);
  }
  return users;
};

export const saveUsers = (users) => setItem(KEYS.USERS, users);

// Current User Session
export const getCurrentUser = () => getItem(KEYS.CURRENT_USER, null);
export const setCurrentUser = (user) => setItem(KEYS.CURRENT_USER, user);
export const removeCurrentUser = () => localStorage.removeItem(KEYS.CURRENT_USER);

// Posts
export const getPosts = () => {
  let posts = getItem(KEYS.POSTS, null);
  if (!posts) {
    setItem(KEYS.POSTS, INITIAL_POSTS);
    return INITIAL_POSTS;
  }
  const existingIds = new Set(posts.map(p => p.id));
  const missingPosts = INITIAL_POSTS.filter(p => !existingIds.has(p.id));
  if (missingPosts.length > 0) {
    posts = [...missingPosts, ...posts];
    setItem(KEYS.POSTS, posts);
  }
  return posts;
};
export const savePosts = (posts) => setItem(KEYS.POSTS, posts);

// Stories
export const getStories = () => {
  const stories = getItem(KEYS.STORIES, null);
  if (!stories) {
    setItem(KEYS.STORIES, INITIAL_STORIES);
    return INITIAL_STORIES;
  }
  return stories;
};
export const saveStories = (stories) => setItem(KEYS.STORIES, stories);

// Notifications
export const getNotifications = () => {
  const notifs = getItem(KEYS.NOTIFICATIONS, null);
  if (!notifs) {
    setItem(KEYS.NOTIFICATIONS, INITIAL_NOTIFICATIONS);
    return INITIAL_NOTIFICATIONS;
  }
  return notifs;
};
export const saveNotifications = (notifs) => setItem(KEYS.NOTIFICATIONS, notifs);

// Messages
export const getConversations = () => {
  let convos = getItem(KEYS.MESSAGES, null);
  if (!convos) {
    setItem(KEYS.MESSAGES, INITIAL_CONVERSATIONS);
    return INITIAL_CONVERSATIONS;
  }
  const existingIds = new Set(convos.map(c => c.id));
  const missingConvos = INITIAL_CONVERSATIONS.filter(c => !existingIds.has(c.id));
  if (missingConvos.length > 0) {
    convos = [...convos, ...missingConvos];
    setItem(KEYS.MESSAGES, convos);
  }
  return convos;
};
export const saveConversations = (convos) => setItem(KEYS.MESSAGES, convos);

// Settings
export const getSettings = () => {
  const settings = getItem(KEYS.SETTINGS, null);
  if (!settings) {
    setItem(KEYS.SETTINGS, INITIAL_SETTINGS);
    return INITIAL_SETTINGS;
  }
  return settings;
};
export const saveSettings = (settings) => setItem(KEYS.SETTINGS, settings);

// Complete Storage Reset / Clear
export const resetLocalStorageData = () => {
  localStorage.setItem(KEYS.USERS, JSON.stringify(INITIAL_USERS));
  localStorage.setItem(KEYS.POSTS, JSON.stringify(INITIAL_POSTS));
  localStorage.setItem(KEYS.STORIES, JSON.stringify(INITIAL_STORIES));
  localStorage.setItem(KEYS.NOTIFICATIONS, JSON.stringify(INITIAL_NOTIFICATIONS));
  localStorage.setItem(KEYS.MESSAGES, JSON.stringify(INITIAL_CONVERSATIONS));
  localStorage.setItem(KEYS.SETTINGS, JSON.stringify(INITIAL_SETTINGS));
  localStorage.removeItem(KEYS.CURRENT_USER);
};
