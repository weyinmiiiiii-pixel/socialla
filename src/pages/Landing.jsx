import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FiUsers,
  FiZap,
  FiCompass,
  FiHeart,
  FiMessageSquare,
  FiBookmark,
  FiShield,
  FiArrowRight,
  FiStar,
  FiCheckCircle,
  FiCamera,
  FiTrendingUp,
  FiLock
} from 'react-icons/fi';
import Header from '../components/Header';
import GlassIcons from '../components/GlassIcons/GlassIcons';
import SpecularButton from '../components/SpecularButton/SpecularButton';

const Landing = () => {
  return (
    <div className="landing-page" id="home">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-badge">
            <FiStar className="hero-badge-icon" />
            <span>The Next Generation Social Experience</span>
          </div>

          <h1 className="hero-title">
            Connect, Share & Discover <br />
            <span className="hero-title-gradient">Without Boundaries</span>
          </h1>

          <p className="hero-description">
            Socialla empowers creators and communities to express themselves freely with stunning design, rich stories, dynamic post interactions, and total privacy control.
          </p>

          <div className="hero-ctas">
            <Link to="/register">
              <SpecularButton
                size="lg"
                radius={24}
                tint="#6366f1"
                tintOpacity={1}
                blur={0}
                textColor="#ffffff"
                lineColor="#a5b4fc"
                baseColor="#4f46e5"
                intensity={1.5}
                shineSize={12}
                shineFade={45}
                followMouse
                autoAnimate={false}
                proximity={200}
              >
                Create Free Account <FiArrowRight />
              </SpecularButton>
            </Link>
            <Link to="/home">
              <SpecularButton
                size="lg"
                radius={24}
                tint="#334155"
                tintOpacity={0.6}
                blur={8}
                textColor="#e2e8f0"
                lineColor="#94a3b8"
                baseColor="#475569"
                intensity={0.8}
                shineSize={14}
                shineFade={40}
                followMouse
                autoAnimate={false}
                proximity={200}
              >
                Explore Socialla
              </SpecularButton>
            </Link>
          </div>

          {/* Hero Animated Mockup Feed */}
          <div className="hero-mockup-wrapper">
            <div className="mockup-bg-glow" />
            
            {/* Main Center Card */}
            <div className="glass-card mockup-main-card">
              <div className="mockup-header">
                <div className="avatar avatar-md">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" alt="Sarah" />
                </div>
                <div className="mockup-user">
                  <span className="mockup-name">Sarah Jenkins <FiCheckCircle className="verified-badge" /></span>
                  <span className="mockup-handle">@sarah_design • Just now</span>
                </div>
              </div>
              <p className="mockup-text">
                Exploring glassmorphism overlays and vibrant HSL color spaces in Socialla 🚀 Modern UI design feels so smooth!
              </p>
              <div className="mockup-img-wrap">
                <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1000&q=80" alt="Design preview" />
              </div>
              <div className="mockup-actions">
                <div className="mockup-action-item text-danger"><FiHeart /> 142</div>
                <div className="mockup-action-item text-primary"><FiMessageSquare /> 28</div>
                <div className="mockup-action-item text-success"><FiBookmark /> Saved</div>
              </div>
            </div>

            {/* Floating Badge 1 */}
            <div className="glass-card floating-card float-left">
              <div className="float-icon-bg bg-primary"><FiZap /></div>
              <div className="float-text">
                <strong>Instant Engagement</strong>
                <span>Real-time interactions</span>
              </div>
            </div>

            {/* Floating Badge 2 */}
            <div className="glass-card floating-card float-right">
              <div className="float-icon-bg bg-accent"><FiUsers /></div>
              <div className="float-text">
                <strong>10,000+ Creators</strong>
                <span>Global network</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-primary">Why Socialla</span>
            <h2>Designed for Modern Connectivity</h2>
            <p>Everything you need in a modern social media platform, meticulously built for speed and aesthetics.</p>
          </div>
          <div className="glass-icons-feature-section">
            <GlassIcons
              items={[
                { icon: <FiCamera />,    color: 'purple',  label: 'Share' },
                { icon: <FiUsers />,     color: 'blue',    label: 'Connect' },
                { icon: <FiCompass />,   color: 'indigo',  label: 'Discover' },
                { icon: <FiHeart />,     color: 'red',     label: 'Engage' },
                { icon: <FiBookmark />,  color: 'orange',  label: 'Save' },
                { icon: <FiShield />,    color: 'green',   label: 'Privacy' },
                { icon: <FiZap />,       color: 'indigo',  label: 'Realtime' },
                { icon: <FiTrendingUp />,color: 'blue',    label: 'Trending' },
                { icon: <FiLock />,      color: 'purple',  label: 'Secure' },
              ]}
              className="features-glass-icons"
            />
            <div className="features-text-grid">
              <div className="feature-text-item">
                <h3>Share Your Moments</h3>
                <p>Post photos, stories, and rich media with customizable tags and live feed updates.</p>
              </div>
              <div className="feature-text-item">
                <h3>Connect With People</h3>
                <p>Follow creators, grow your community, and discover vibrant social circles.</p>
              </div>
              <div className="feature-text-item">
                <h3>Engage &amp; React</h3>
                <p>Like, comment, bookmark, and share content with animated, fluid interactions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Socialla Preview Showcase Section */}
      <section className="preview-section" id="preview">
        <div className="container preview-container">
          <div className="preview-content">
            <span className="badge badge-success">Interactive Showcase</span>
            <h2>Experience the Future Social Feed Today</h2>
            <p>
              From immersive full-screen story viewers to dark/light theme switching, Socialla offers a flawless user interface tailored for desktop, tablet, and mobile devices.
            </p>
            <ul className="preview-checklist">
              <li><FiCheckCircle className="check-icon" /> Fluid story highlights with auto-progress controls</li>
              <li><FiCheckCircle className="check-icon" /> Heart-pop animated like interactions</li>
              <li><FiCheckCircle className="check-icon" /> Full dark and light theme switching</li>
              <li><FiCheckCircle className="check-icon" /> Mobile-first responsive layout design</li>
            </ul>
            <Link to="/register" className="btn btn-primary">
              Join Socialla Today <FiArrowRight />
            </Link>
          </div>

          <div className="preview-mockup-wrapper">
            <div className="glass-card preview-card">
              <div className="story-strip-demo">
                <div className="story-demo-item">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" alt="Alex" />
                  <span>Alex</span>
                </div>
                <div className="story-demo-item active">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" alt="Sarah" />
                  <span>Sarah</span>
                </div>
                <div className="story-demo-item">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" alt="Marcus" />
                  <span>Marcus</span>
                </div>
              </div>

              <div className="post-demo-box">
                <div className="post-demo-header">
                  <div className="avatar avatar-sm">
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" alt="Elena" />
                  </div>
                  <div>
                    <strong>Elena Rodriguez</strong>
                    <div className="text-muted text-xs">@elena_travels</div>
                  </div>
                </div>
                <p className="text-sm mt-2">Catching morning clouds over the mountains! 🏔️✨</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="glass-card cta-card">
            <h2>Ready to Experience Socialla?</h2>
            <p>Join thousands of creators sharing their passions and connecting across the globe.</p>
            <div className="cta-buttons">
              <Link to="/register">
                <SpecularButton
                  size="lg"
                  radius={24}
                  tint="#ffffff"
                  tintOpacity={0.15}
                  blur={4}
                  textColor="#ffffff"
                  lineColor="#e0e7ff"
                  baseColor="#a5b4fc"
                  intensity={1.4}
                  shineSize={10}
                  shineFade={35}
                  autoAnimate={true}
                  speed={0.5}
                >
                  Create Free Account
                </SpecularButton>
              </Link>
              <Link to="/login">
                <SpecularButton
                  size="lg"
                  radius={24}
                  tint="#ffffff"
                  tintOpacity={0.1}
                  blur={4}
                  textColor="#e2e8f0"
                  lineColor="#94a3b8"
                  baseColor="#334155"
                  intensity={0.7}
                  shineSize={14}
                  shineFade={40}
                  followMouse
                >
                  Sign In
                </SpecularButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container footer-container">
          <div className="footer-col brand-col">
            <div className="landing-logo">
              <img src="/socialla-logo.svg" alt="Socialla" className="landing-logo-img" />
              <span className="landing-logo-text">Socialla</span>
            </div>
            <p className="footer-bio">
              Socialla is a modern, high-performance social platform created for seamless sharing, vibrant design, and genuine social connection.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#preview">About</a>
            <Link to="/home">Feed</Link>
          </div>

          <div className="footer-col">
            <h4>Account</h4>
            <Link to="/login">Log In</Link>
            <Link to="/register">Create Account</Link>
            <Link to="/settings">Settings</Link>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#security">Security</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© 2026 Socialla Platform. All rights reserved. Crafted with React & Vite.</p>
        </div>
      </footer>

      <style>{`
        .landing-page {
          overflow-x: hidden;
        }

        .hero-section {
          padding: 5rem 0 4rem 0;
          text-align: center;
          position: relative;
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1rem;
          background: var(--primary-light);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: var(--radius-full);
          color: var(--primary);
          font-weight: 700;
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
          animation: landingEntrance 0.6s ease-out;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: -1px;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          animation: heroReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-title-gradient {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          max-width: 680px;
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2.25rem;
        }

        .hero-ctas {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 3.5rem;
        }

        .hero-btn {
          padding: 0.85rem 1.85rem;
          font-size: 1.05rem;
        }

        .hero-mockup-wrapper {
          position: relative;
          width: 100%;
          max-width: 640px;
          margin: 0 auto;
        }

        .mockup-bg-glow {
          position: absolute;
          inset: -20px;
          background: var(--gradient-primary);
          filter: blur(50px);
          opacity: 0.25;
          border-radius: 40px;
          z-index: 1;
        }

        .mockup-main-card {
          position: relative;
          z-index: 2;
          padding: 1.5rem;
          text-align: left;
          animation: heroFloat 6s ease-in-out infinite;
        }

        .mockup-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.85rem;
        }

        .mockup-user {
          display: flex;
          flex-direction: column;
        }

        .mockup-name {
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .mockup-handle {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .mockup-text {
          font-size: 0.95rem;
          margin-bottom: 0.85rem;
        }

        .mockup-img-wrap {
          border-radius: var(--radius-md);
          overflow: hidden;
          max-height: 240px;
          margin-bottom: 0.85rem;
        }

        .mockup-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          font-size: 0.85rem;
          font-weight: 700;
        }

        .mockup-action-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .text-danger { color: var(--danger); }
        .text-primary { color: var(--primary); }
        .text-success { color: var(--success); }

        .floating-card {
          position: absolute;
          z-index: 3;
          padding: 0.75rem 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: var(--shadow-xl);
        }

        .float-left {
          top: 15%;
          left: -80px;
          animation: heroFloatSecondary 5s ease-in-out infinite;
        }

        .float-right {
          bottom: 20%;
          right: -80px;
          animation: heroFloat 7s ease-in-out infinite;
        }

        .float-icon-bg {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 1.2rem;
        }

        .bg-primary { background: var(--gradient-primary); }
        .bg-accent { background: var(--gradient-accent); }

        .float-text {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .float-text strong {
          font-size: 0.88rem;
          color: var(--text-primary);
        }

        .float-text span {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        /* Features Section */
        .features-section {
          padding: 5rem 0;
          background: var(--bg-secondary);
        }

        .section-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 3.5rem auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .section-header h2 {
          font-size: 2.25rem;
        }

        .section-header p {
          color: var(--text-secondary);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.75rem;
        }

        .feature-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .feature-icon {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 1.4rem;
        }

        .bg-gradient-1 { background: linear-gradient(135deg, #6366f1, #8b5cf6); }
        .bg-gradient-2 { background: linear-gradient(135deg, #8b5cf6, #d946ef); }
        .bg-gradient-3 { background: linear-gradient(135deg, #3b82f6, #06b6d4); }

        .feature-card h3 {
          font-size: 1.2rem;
        }

        .feature-card p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        /* Preview Showcase Section */
        .preview-section {
          padding: 5rem 0;
        }

        .preview-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .preview-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.25rem;
        }

        .preview-content h2 {
          font-size: 2.2rem;
        }

        .preview-checklist {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .preview-checklist li {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .check-icon {
          color: var(--success);
          font-size: 1.1rem;
        }

        .preview-mockup-wrapper {
          position: relative;
        }

        .preview-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .story-strip-demo {
          display: flex;
          gap: 1rem;
        }

        .story-demo-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .story-demo-item img {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-full);
          border: 2px solid var(--border-color);
        }

        .story-demo-item.active img {
          border-color: var(--primary);
        }

        .post-demo-box {
          background: var(--bg-secondary);
          padding: 1rem;
          border-radius: var(--radius-md);
        }

        .post-demo-header {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        /* CTA Section */
        .cta-section {
          padding: 3rem 0 5rem 0;
        }

        .cta-card {
          padding: 4rem 2rem;
          text-align: center;
          background: var(--gradient-primary);
          color: #ffffff;
          border: none;
        }

        .cta-card h2 {
          color: #ffffff;
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .cta-card p {
          max-width: 540px;
          margin: 0 auto 2rem auto;
          font-size: 1.1rem;
          opacity: 0.9;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .btn-lg {
          padding: 0.9rem 2rem;
          font-size: 1.05rem;
        }

        /* Footer */
        .landing-footer {
          background: var(--bg-card);
          border-top: 1px solid var(--border-color);
          padding: 4rem 0 2rem 0;
        }

        .footer-container {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 2.5rem;
          margin-bottom: 3rem;
        }

        .brand-col {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-bio {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .footer-col h4 {
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .footer-col a {
          display: block;
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 0.6rem;
        }
        .footer-col a:hover { color: var(--primary); }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
          text-align: center;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .float-left, .float-right { display: none; }
          .preview-container { grid-template-columns: 1fr; }
          .footer-container { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.4rem; }
          .footer-container { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default Landing;
