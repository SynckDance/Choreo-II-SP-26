import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, ExternalLink } from 'lucide-react'
import { UserButton } from '@clerk/clerk-react'

const navSections = [
  {
    title: 'Start Here',
    color: '#FF6B6B',
    links: [
      { to: '/', label: 'Welcome', emoji: '👋' },
      { to: '/performance-outcome', label: 'Performance Outcome', emoji: '🎭' },
      { to: '/workflow', label: 'How It Works', emoji: '⚙️' },
    ]
  },
  {
    title: 'Pathways',
    color: '#4ECDC4',
    links: [
      { to: '/pathway-a', label: 'A: Artistic Ideation', emoji: '💡' },
      { to: '/pathway-b', label: 'B: Production Design', emoji: '🎨' },
      { to: '/pathway-c', label: 'C: Collaboration', emoji: '🤝' },
    ]
  },
  {
    title: 'Timeline',
    color: '#4D7CFF',
    links: [
      { to: '/semester-map', label: 'Semester Map', emoji: '📅' },
      { to: '/evolution', label: 'Development Arc', emoji: '📈' },
    ]
  },
  {
    title: 'Tracks',
    color: '#FFE066',
    links: [
      { to: '/stage', label: 'Stage Track', emoji: '🎪' },
      { to: '/film', label: 'Film Track', emoji: '🎬' },
    ]
  },
  {
    title: 'Resources',
    color: '#A855F7',
    links: [
      { to: '/study-lab', label: 'Study Lab', emoji: '📚' },
      { to: '/stage-designs', label: 'Stage Designs', emoji: '🏛️' },
      { to: '/lighting-glossary', label: 'Lighting', emoji: '💡' },
      { to: '/film-workflow', label: 'Film Workflow', emoji: '🎞️' },
      { to: '/templates', label: 'Templates', emoji: '📄' },
    ]
  },
  {
    title: 'Requirements',
    color: '#FF9F43',
    links: [
      { to: '/assessment', label: 'Assessment', emoji: '📊' },
      { to: '/performance-hub', label: 'Performance Week', emoji: '🌟' },
    ]
  },
]

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Determine current section for course map
  const getCurrentSection = () => {
    const path = location.pathname
    if (path === '/' || path.includes('performance-outcome') || path.includes('workflow')) return 0
    if (path.includes('pathway')) return 1
    if (path.includes('semester') || path.includes('evolution')) return 2
    if (path.includes('stage') || path.includes('film')) return 3
    if (path.includes('study') || path.includes('template') || path.includes('lighting')) return 4
    if (path.includes('assessment') || path.includes('performance-hub')) return 5
    return 0
  }

  const currentSection = getCurrentSection()

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Mobile header */}
      <header 
        className="lg:hidden flex items-center justify-between px-4 py-4 sticky top-0 z-50"
        style={{ 
          background: '#0A0A0A',
          borderBottom: '3px solid #FF6B6B'
        }}
      >
        <div>
          <div 
            style={{ 
              fontFamily: "'Syne', sans-serif",
              fontSize: '1.25rem',
              fontWeight: 800,
              color: '#fff'
            }}
          >
            Choreo II
          </div>
        </div>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2"
          style={{ 
            color: '#fff',
            background: mobileMenuOpen ? '#FF6B6B' : 'transparent',
            border: '2px solid #FF6B6B'
          }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile nav overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40" 
          style={{ background: 'rgba(0,0,0,0.5)' }}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:sticky top-0 left-0 h-screen w-72 
          overflow-y-auto z-50
          transform
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        style={{ 
          background: '#0A0A0A',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Sidebar Header */}
        <div className="p-5" style={{ borderBottom: '3px solid #1A1A1A' }}>
          <h1 
            style={{ 
              fontFamily: "'Syne', sans-serif",
              fontSize: '1.75rem',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '0.25rem',
              letterSpacing: '-0.02em'
            }}
          >
            Choreography <span style={{ color: '#FF6B6B' }}>II</span>
          </h1>
          <p 
            style={{ 
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.625rem',
              color: '#666',
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}
          >
            T D 332N · Spring 2025
          </p>
          
          {/* Mini Course Map */}
          <div style={{ display: 'flex', gap: '4px', marginTop: '1rem' }}>
            {['#FF6B6B', '#4ECDC4', '#4D7CFF', '#FFE066', '#A855F7', '#FF9F43'].map((color, idx) => (
              <div 
                key={idx}
                style={{
                  flex: 1,
                  height: '4px',
                  background: idx <= currentSection ? color : '#333',
                  transition: 'background 0.5s ease'
                }}
              />
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav className="py-2">
          {navSections.map((section, idx) => (
            <div key={idx}>
              <div 
                className="nav-section-title"
                style={{ color: section.color }}
              >
                {section.title}
              </div>
              {section.links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => 
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                  style={({ isActive }) => ({
                    color: isActive ? section.color : '#999',
                    background: isActive ? `${section.color}15` : 'transparent',
                    borderLeftColor: isActive ? section.color : 'transparent'
                  })}
                >
                  <span style={{ fontSize: '1rem' }}>{link.emoji}</span>
                  {link.label}
                </NavLink>
              ))}
            </div>
          ))}
          
          {/* External Links */}
          <div>
            <div className="nav-section-title" style={{ color: '#666' }}>External</div>
            <a
              href="https://www.elementsofdance.org"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              style={{ color: '#666' }}
            >
              <span>🌐</span>
              Elements of Dance
              <ExternalLink size={12} style={{ marginLeft: 'auto', opacity: 0.5 }} />
            </a>
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div 
          className="p-5 mt-auto"
          style={{ borderTop: '3px solid #1A1A1A' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: { width: '36px', height: '36px' }
                }
              }}
            />
            <div>
              <p 
                style={{ 
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.5625rem',
                  color: '#666',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  margin: 0
                }}
              >
                Signed in
              </p>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #333', paddingTop: '1rem', marginTop: '0.5rem' }}>
            <p 
              style={{ 
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.5625rem',
                color: '#666',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '0.5rem'
              }}
            >
              Instructor
            </p>
            <p style={{ 
              fontWeight: 600, 
              color: '#fff', 
              fontSize: '0.9375rem',
              fontFamily: "'DM Sans', sans-serif",
              margin: 0
            }}>
              Sinclair Emoghene
            </p>
            <p style={{ 
              fontSize: '0.75rem', 
              color: '#666',
              marginTop: '0.25rem'
            }}>
              Office 2.132C
            </p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0">
        <Outlet />
      </main>
    </div>
  )
}
