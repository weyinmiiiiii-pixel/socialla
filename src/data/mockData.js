// Initial seed data for Socialla application

export const INITIAL_USERS = [
  {
    id: "u_alex",
    name: "Alex Vance",
    username: "alex_vance",
    email: "alex@socialla.com",
    password: "Password123!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    bio: "Product Designer & Frontend Engineer 🚀 Crafting intuitive digital experiences with clean code.",
    followers: 2450,
    following: 480,
    verified: true,
    joinedDate: "March 2026"
  },
  {
    id: "u_sarah",
    name: "Sarah Jenkins",
    username: "sarah_design",
    email: "sarah@socialla.com",
    password: "Password123!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80",
    bio: "Lead UX Researcher & Visual Artist 🎨 Exploring generative AI & minimal aesthetics.",
    followers: 5120,
    following: 310,
    verified: true,
    joinedDate: "January 2026"
  },
  {
    id: "u_marcus",
    name: "Marcus Chen",
    username: "marcus_tech",
    email: "marcus@socialla.com",
    password: "Password123!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    bio: "Building open source tools & scale systems ⚡ Coffee addict & tech podcast host.",
    followers: 1890,
    following: 620,
    verified: false,
    joinedDate: "February 2026"
  },
  {
    id: "u_elena",
    name: "Elena Rodriguez",
    username: "elena_travels",
    email: "elena@socialla.com",
    password: "Password123!",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    bio: "Travel Photographer 📷 Capturing hidden gems around Europe & Latin America.",
    followers: 8430,
    following: 215,
    verified: true,
    joinedDate: "December 2025"
  },
  {
    id: "u_david",
    name: "David Kim",
    username: "david_ai",
    email: "david@socialla.com",
    password: "Password123!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    bio: "AI Engineer & Machine Learning Enthusiast. Exploring neural networks & web development.",
    followers: 3200,
    following: 410,
    verified: false,
    joinedDate: "April 2026"
  }
];

export const INITIAL_POSTS = [
  {
    id: "post_1",
    authorId: "u_sarah",
    authorName: "Sarah Jenkins",
    authorUsername: "sarah_design",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    authorVerified: true,
    content: "Just finished redesigning the core design tokens for our new web application! 🎨 Combining vibrant neon gradients with glassmorphism overlays creates such a fresh vibe. What do you think of this visual hierarchy?",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1000&q=80",
    likes: ["u_alex", "u_marcus", "u_elena"],
    likeCount: 42,
    comments: [
      {
        id: "c_1",
        authorName: "Alex Vance",
        authorUsername: "alex_vance",
        authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        content: "The subtle glass blur backdrop is incredible! Great work Sarah.",
        timestamp: "2 hours ago"
      },
      {
        id: "c_2",
        authorName: "Marcus Chen",
        authorUsername: "marcus_tech",
        authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        content: "Looks super crisp on OLED displays. Loving the contrast!",
        timestamp: "1 hour ago"
      }
    ],
    commentCount: 2,
    shares: 14,
    savedBy: ["u_alex"],
    timestamp: "3 hours ago"
  },
  {
    id: "post_2",
    authorId: "u_elena",
    authorName: "Elena Rodriguez",
    authorUsername: "elena_travels",
    authorAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    authorVerified: true,
    content: "Golden hour in the Swiss Alps 🏔️ Early morning hiking pays off when you catch sunrise above the clouds. Absolutely breathtaking scenery!",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    likes: ["u_sarah", "u_david"],
    likeCount: 128,
    comments: [
      {
        id: "c_3",
        authorName: "David Kim",
        authorUsername: "david_ai",
        authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        content: "What camera lens did you use for this shot? Lighting is perfect!",
        timestamp: "4 hours ago"
      }
    ],
    commentCount: 1,
    shares: 29,
    savedBy: [],
    timestamp: "5 hours ago"
  },
  {
    id: "post_3",
    authorId: "u_marcus",
    authorName: "Marcus Chen",
    authorUsername: "marcus_tech",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    authorVerified: false,
    content: "Excited to launch Socialla today! A frontend social experience built with pure React, modern CSS design tokens, zero external database dependencies, and complete client-side persistence.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
    likes: ["u_alex", "u_sarah", "u_elena", "u_david"],
    likeCount: 89,
    comments: [],
    commentCount: 0,
    shares: 31,
    savedBy: ["u_alex"],
    timestamp: "1 day ago"
  }
];

export const INITIAL_STORIES = [
  {
    id: "story_1",
    userId: "u_sarah",
    userName: "Sarah Jenkins",
    userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80",
    caption: "Morning desk setup ☕ Ready to code!",
    timestamp: "2h ago",
    seen: false
  },
  {
    id: "story_2",
    userId: "u_elena",
    userName: "Elena Rodriguez",
    userAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    caption: "Exploring coastal waves 🌊",
    timestamp: "4h ago",
    seen: false
  },
  {
    id: "story_3",
    userId: "u_marcus",
    userName: "Marcus Chen",
    userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    caption: "Debugging till midnight 💻",
    timestamp: "6h ago",
    seen: true
  },
  {
    id: "story_4",
    userId: "u_david",
    userName: "David Kim",
    userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    caption: "AI Hackathon vibes 🤖",
    timestamp: "8h ago",
    seen: true
  }
];

export const INITIAL_NOTIFICATIONS = [
  {
    id: "notif_1",
    type: "like",
    user: {
      name: "Sarah Jenkins",
      username: "sarah_design",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
    },
    targetText: "liked your post 'Just finished redesigning the core design tokens...'",
    timestamp: "10m ago",
    read: false
  },
  {
    id: "notif_2",
    type: "comment",
    user: {
      name: "Marcus Chen",
      username: "marcus_tech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    targetText: "commented: 'Looks super crisp on OLED displays...'",
    timestamp: "1h ago",
    read: false
  },
  {
    id: "notif_3",
    type: "follow",
    user: {
      name: "Elena Rodriguez",
      username: "elena_travels",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
    },
    targetText: "started following you on Socialla.",
    timestamp: "3h ago",
    read: true
  },
  {
    id: "notif_4",
    type: "mention",
    user: {
      name: "David Kim",
      username: "david_ai",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
    },
    targetText: "mentioned you in a comment.",
    timestamp: "1d ago",
    read: true
  }
];

export const INITIAL_CONVERSATIONS = [
  {
    id: "conv_sarah",
    participant: {
      id: "u_sarah",
      name: "Sarah Jenkins",
      username: "sarah_design",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      online: true
    },
    unread: 2,
    messages: [
      { id: "m1", senderId: "u_sarah", text: "Hey! Did you check out the new design system components?", time: "10:30 AM" },
      { id: "m2", senderId: "u_sarah", text: "I uploaded the Figma tokens to the post feed!", time: "10:31 AM" },
      { id: "m3", senderId: "me", text: "Yes! The glassmorphism and gradient cards look super slick.", time: "10:45 AM" },
      { id: "m4", senderId: "u_sarah", text: "Awesome! Let me know if we need any extra icon sets.", time: "10:50 AM" }
    ]
  },
  {
    id: "conv_marcus",
    participant: {
      id: "u_marcus",
      name: "Marcus Chen",
      username: "marcus_tech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      online: true
    },
    unread: 0,
    messages: [
      { id: "m10", senderId: "u_marcus", text: "Deploying the Socialla frontend update now!", time: "Yesterday" },
      { id: "m11", senderId: "me", text: "Sweet! All localStorage sync utilities are running smooth.", time: "Yesterday" }
    ]
  },
  {
    id: "conv_elena",
    participant: {
      id: "u_elena",
      name: "Elena Rodriguez",
      username: "elena_travels",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
      online: false
    },
    unread: 0,
    messages: [
      { id: "m20", senderId: "u_elena", text: "Thanks for saving my mountain hiking story highlight!", time: "3 days ago" }
    ]
  }
];

export const INITIAL_SETTINGS = {
  theme: "dark",
  notifications: {
    likes: true,
    comments: true,
    follows: true,
    messages: true
  },
  privacy: {
    privateProfile: false,
    showOnlineStatus: true,
    allowTagging: true
  }
};
