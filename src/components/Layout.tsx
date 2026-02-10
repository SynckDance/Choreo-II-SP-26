import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .layout {
    display: flex;
    min-height: 100vh;
  }

  .sidebar {
    width: 280px;
    background: #fff;
    border-right: 3px solid #000;
    padding: 1.5rem;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    overflow-y: auto;
    z-index: 100;
    display: flex;
    flex-direction: column;
  }

  .sidebar-header {
    margin-bottom: 2rem;
  }

  .sidebar-logo {
    font-family: 'Syne', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    color: #000;
    text-decoration: none;
    display: block;
    margin-bottom: 0.25rem;
  }

  .sidebar-subtitle {
    font-family: 'Space Mono', monospace;
    font-size: 0.7rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .nav-section {
    margin-bottom: 1.5rem;
  }

  .nav-section-title {
    font-family: 'Space Mono', monospace;
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #999;
    margin-bottom: 0.75rem;
    padding-left: 0.5rem;
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    color: #000;
    text-decoration: none;
    border: 2px solid transparent;
    border-radius: 4px;
    margin-bottom: 0.25rem;
    transition: all 0.2s ease;
  }

  .nav-link:hover {
    background: #f5f5f5;
    border-color: #e0e0e0;
  }

  .nav-link.active {
    background: #000;
    color: #fff;
    border-color: #000;
  }

  .nav-link-icon {
    font-size: 1.1rem;
    width: 24px;
    text-align: center;
  }

  .nav-link-badge {
    margin-left: auto;
    font-family: 'Space Mono', monospace;
    font-size: 0.6rem;
    padding: 0.2rem 0.4rem;
    border-radius: 2px;
    font-weight: 700;
  }

  .nav-link-badge.coral { background: #FF6B6B; color: #fff; }
  .nav-link-badge.mint { background: #4ECDC4; color: #000; }
  .nav-link-badge.blue { background: #4D7CFF; color: #fff; }
  .nav-link-badge.yellow { background: #FFE066; color: #000; }
  .nav-link-badge.violet { background: #A855F7; color: #fff; }
  .nav-link-badge.orange { background: #FF9F43; color: #000; }

  .sidebar-footer {
    margin-top: auto;
    padding-top: 1rem;
    border-top: 2px solid #e0e0e0;
  }

  .semester-badge {
    font-family: 'Space Mono', monospace;
    font-size: 0.7rem;
    color: #666;
    text-align: center;
    padding: 0.5rem;
    background: #f5f5f5;
    border: 2px solid #e0e0e0;
    border-radius: 4px;
  }

  .main-content {
    flex: 1;
    margin-left: 280px;
    min-height: 100vh;
    background-color: #fff;
    background-image: 
      linear-gradient(#E8E8E8 1px, transparent 1px),
      linear-gradient(90deg, #E8E8E8 1px, transparent 1px);
    background-size: 48px 48px;
  }

  .mobile-header {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: #fff;
    border-bottom: 3px solid #000;
    z-index: 99;
    padding: 0 1rem;
    align-items: center;
    justify-content: space-between;
  }

  .mobile-logo {
    font-family: 'Syne', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    color: #000;
    text-decoration: none;
  }

  .mobile-menu-btn {
    width: 40px;
    height: 40px;
    background: #000;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
  }

  .sidebar-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 98;
  }

  @media (max-width: 768px) {
    .sidebar {
      transform: translateX(-100%);
      transition: transform 0.3s ease;
    }

    .sidebar.open {
      transform: translateX(0);
    }

    .sidebar-overlay.open {
      display: block;
    }

    .mobile-header {
      display: flex;
    }

    .main-content {
      margin-left: 0;
      padding-top: 60px;
    }
  }
`;

const NAV_ITEMS = [
  {
    section: 'Main',
    items: [
      { path: '/', label: 'Home', icon: '🏠' },
      { path: '/timeline', label: 'Timeline', icon: '📅', badge: 'SP26', badgeColor: 'blue' },
    ]
  },
  {
    section: 'Pathways',
    items: [
      { path: '/pathways', label: 'Assessment Pathways', icon: '🛤️' },
    ]
  },
  {
    section: 'Tracks',
    items: [
      { path: '/tracks', label: 'Overview', icon: '🎭' },
      { path: '/tracks/stage', label: 'Stage Track', icon: '🎪', badge: 'Live', badgeColor: 'coral' },
      { path: '/tracks/film', label: 'Film Track', icon: '🎬', badge: 'New', badgeColor: 'mint' },
    ]
  },
  {
    section: 'Labs',
    items: [
      { path: '/labs', label: 'All Labs', icon: '🧪' },
      { path: '/labs/two-body-problem', label: 'Two Body Problem', icon: '👥' },
      { path: '/labs/collaboration', label: 'Collaboration', icon: '🤝' },
      { path: '/labs/choreography-for-camera', label: 'Camera Work', icon: '📹' },
      { path: '/labs/generative-methods', label: 'Generative Methods', icon: '🌱', badge: 'Week 5', badgeColor: 'yellow' },
    ]
  },
  {
    section: 'Resources',
    items: [
      { path: '/resources', label: 'All Resources', icon: '📚' },
      { path: '/resources/stage-designs', label: 'Stage Designs', icon: '📐' },
      { path: '/resources/study-lab', label: 'Study Lab', icon: '🎓' },
      { path: '/books', label: 'Books', icon: '📖' },
    ]
  },
];

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const closeSidebar = () => setSidebarOpen(false);

  // Scroll to top on route change
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <style>{styles}</style>
      <div className="layout">
        {/* Mobile Header */}
        <div className="mobile-header">
          <NavLink to="/" className="mobile-logo" onClick={closeSidebar}>
            Choreo II
          </NavLink>
          <button 
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle menu"
          >
            {sidebarOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Overlay */}
        <div 
          className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`}
          onClick={closeSidebar}
        />

        {/* Sidebar */}
        <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <NavLink to="/" className="sidebar-logo" onClick={closeSidebar}>
              Choreography II
            </NavLink>
            <div className="sidebar-subtitle">T D 332N • Spring 2026</div>
          </div>

          {NAV_ITEMS.map((section) => (
            <div key={section.section} className="nav-section">
              <div className="nav-section-title">{section.section}</div>
              {section.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeSidebar}
                  end={item.path === '/'}
                >
                  <span className="nav-link-icon">{item.icon}</span>
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`nav-link-badge ${item.badgeColor || ''}`}>
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          ))}

          <div className="sidebar-footer">
            <div className="semester-badge">
              Prof. Sinclair Emoghene<br/>
              UT Austin • Dept of Theatre & Dance
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </>
  );
}
