import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/pathways', label: 'Pathways' },
  { path: '/tracks', label: 'Tracks' },
  { path: '/labs', label: 'Labs' },
  { path: '/timeline', label: 'Timeline' },
  { path: '/resources', label: 'Resources' },
  { path: '/books', label: 'Books' },
];

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPWA, setIsPWA] = useState(false);
  const [canGoBack, setCanGoBack] = useState(false);

  // Detect if running as PWA
  useEffect(() => {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches 
      || (window.navigator as any).standalone === true;
    setIsPWA(isStandalone);
  }, []);

  // Track if we can go back (not on home page)
  useEffect(() => {
    setCanGoBack(location.pathname !== '/');
  }, [location.pathname]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false); // Close mobile menu on navigation
  }, [location.pathname]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :root {
          --bg-primary: #FAFAFA;
          --bg-secondary: #FFFFFF;
          --text-primary: #1A1A1A;
          --text-secondary: #666666;
          --text-muted: #999999;
          --accent: #E85D04;
          --accent-hover: #DC520A;
          --border: #E5E5E5;
          --border-light: #F0F0F0;
          --success: #10B981;
          --shadow: 0 1px 3px rgba(0,0,0,0.08);
          --shadow-lg: 0 4px 12px rgba(0,0,0,0.1);
        }

        .dark {
          --bg-primary: #0A0A0A;
          --bg-secondary: #141414;
          --text-primary: #FAFAFA;
          --text-secondary: #A0A0A0;
          --text-muted: #666666;
          --accent: #FF7B3A;
          --accent-hover: #FF8D52;
          --border: #2A2A2A;
          --border-light: #1F1F1F;
          --shadow: 0 1px 3px rgba(0,0,0,0.3);
          --shadow-lg: 0 4px 12px rgba(0,0,0,0.4);
        }

        .app-container {
          min-height: 100vh;
          background: var(--bg-primary);
          color: var(--text-primary);
          font-family: 'Inter', -apple-system, sans-serif;
          transition: background 0.3s ease, color 0.3s ease;
        }

        /* Header */
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border);
          backdrop-filter: blur(10px);
        }

        .header-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }

        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          text-decoration: none;
          letter-spacing: -0.02em;
        }

        .logo span {
          color: var(--accent);
        }

        /* Back Button */
        .back-btn {
          width: 36px;
          height: 36px;
          border: 1px solid var(--border);
          border-radius: 8px;
          background: var(--bg-secondary);
          color: var(--text-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          margin-right: 0.75rem;
          transition: all 0.2s ease;
        }

        .back-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .back-btn:active {
          transform: scale(0.95);
        }

        .header-left {
          display: flex;
          align-items: center;
        }

        /* Navigation */
        .nav {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .nav-link {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          padding: 0.5rem 0.875rem;
          border-radius: 6px;
          transition: all 0.2s ease;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: var(--border-light);
        }

        .nav-link.active {
          color: var(--accent);
          background: transparent;
        }

        /* Header Actions */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .theme-toggle {
          width: 36px;
          height: 36px;
          border: 1px solid var(--border);
          border-radius: 8px;
          background: var(--bg-secondary);
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          transition: all 0.2s ease;
        }

        .theme-toggle:hover {
          border-color: var(--text-muted);
          color: var(--text-primary);
        }

        /* Main Content */
        .main-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 3rem 2rem;
          min-height: calc(100vh - 64px - 80px);
        }

        /* Footer */
        .footer {
          border-top: 1px solid var(--border);
          padding: 1.5rem 2rem;
          text-align: center;
        }

        .footer-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-text {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .footer-text a {
          color: var(--text-secondary);
          text-decoration: none;
        }

        .footer-text a:hover {
          color: var(--accent);
        }

        .footer-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-links a {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-decoration: none;
        }

        .footer-links a:hover {
          color: var(--accent);
        }

        /* Mobile */
        @media (max-width: 900px) {
          .header-inner {
            padding: 0 1rem;
          }

          .nav {
            display: none;
          }

          .main-content {
            padding: 2rem 1rem;
          }

          .mobile-menu-btn {
            display: flex;
          }
        }

        /* Mobile Menu Button */
        .mobile-menu-btn {
          display: none;
          width: 36px;
          height: 36px;
          border: 1px solid var(--border);
          border-radius: 8px;
          background: var(--bg-secondary);
          color: var(--text-primary);
          cursor: pointer;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }

        /* Mobile Menu Overlay */
        .mobile-menu-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 200;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .mobile-menu-overlay.open {
          display: block;
          opacity: 1;
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: -280px;
          width: 280px;
          height: 100%;
          background: var(--bg-secondary);
          z-index: 201;
          transition: right 0.3s ease;
          display: flex;
          flex-direction: column;
          box-shadow: -4px 0 20px rgba(0,0,0,0.1);
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          border-bottom: 1px solid var(--border);
        }

        .mobile-menu-close {
          width: 36px;
          height: 36px;
          border: none;
          background: transparent;
          color: var(--text-primary);
          cursor: pointer;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu-nav {
          flex: 1;
          padding: 1rem 0;
          overflow-y: auto;
        }

        .mobile-nav-link {
          display: block;
          padding: 1rem 1.5rem;
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          border-left: 3px solid transparent;
          transition: all 0.2s ease;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          background: var(--border-light);
          color: var(--accent);
          border-left-color: var(--accent);
        }

        .mobile-menu-footer {
          padding: 1rem;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Bottom Navigation for PWA */
        .bottom-nav {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          padding: 0.5rem 0.25rem;
          padding-bottom: calc(0.5rem + env(safe-area-inset-bottom));
          z-index: 100;
        }

        .bottom-nav-inner {
          display: flex;
          justify-content: space-around;
          align-items: center;
          max-width: 500px;
          margin: 0 auto;
        }

        .bottom-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.2rem;
          padding: 0.4rem 0.75rem;
          text-decoration: none;
          color: var(--text-muted);
          font-size: 0.65rem;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .bottom-nav-item:hover,
        .bottom-nav-item.active {
          color: var(--accent);
          background: var(--border-light);
        }

        .bottom-nav-icon {
          font-size: 1.25rem;
        }

        @media (max-width: 900px) {
          .bottom-nav {
            display: block;
          }

          .main-content {
            padding-bottom: 5rem;
          }

          .footer {
            padding-bottom: 5rem;
          }
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: var(--bg-primary);
        }

        ::-webkit-scrollbar-thumb {
          background: var(--border);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: var(--text-muted);
        }
      `}</style>

      <header className="header">
        <div className="header-inner">
          <div className="header-left">
            {canGoBack && (
              <button className="back-btn" onClick={handleBack} aria-label="Go back">
                ←
              </button>
            )}
            <NavLink to="/" className="logo">
              CHOREOGRAPHY <span>II</span>
            </NavLink>
          </div>

          <nav className="nav">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end={item.path === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              ☰
            </button>
            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? '☀' : '☽'}
            </button>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <span className="logo">CHOREO <span>II</span></span>
          <button 
            className="mobile-menu-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <nav className="mobile-menu-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              end={item.path === '/'}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀' : '☽'}
          </button>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-text">
            Choreography II · Spring 2026 · <a href="https://theatredance.utexas.edu" target="_blank" rel="noreferrer">UT Austin Department of Theatre and Dance</a>
          </p>
          <div className="footer-links">
            <a href="mailto:sinclair.emoghene@austin.utexas.edu">Contact</a>
            <a href="https://utexas.instructure.com" target="_blank" rel="noreferrer">Canvas</a>
          </div>
        </div>
      </footer>

      {/* Bottom Navigation for Mobile/PWA */}
      <nav className="bottom-nav">
        <div className="bottom-nav-inner">
          <NavLink to="/" className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`} end>
            <span className="bottom-nav-icon">🏠</span>
            Home
          </NavLink>
          <NavLink to="/tracks" className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}>
            <span className="bottom-nav-icon">🎯</span>
            Tracks
          </NavLink>
          <NavLink to="/labs" className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}>
            <span className="bottom-nav-icon">🔬</span>
            Labs
          </NavLink>
          <NavLink to="/resources" className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}>
            <span className="bottom-nav-icon">📁</span>
            Resources
          </NavLink>
          <button
            className="bottom-nav-item"
            onClick={() => setMobileMenuOpen(true)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <span className="bottom-nav-icon">☰</span>
            More
          </button>
        </div>
      </nav>
    </div>
  );
}
