import { Link } from 'react-router-dom';

export function Welcome() {
  const courseMap = [
    { label: 'Foundation', color: '#FF6B6B', to: '/workflow' },
    { label: 'Pathways', color: '#4ECDC4', to: '/pathway-a' },
    { label: 'Timeline', color: '#4D7CFF', to: '/semester-map' },
    { label: 'Tracks', color: '#FFE066', to: '/stage' },
    { label: 'Resources', color: '#A855F7', to: '/study-lab' },
    { label: 'Performance', color: '#FF9F43', to: '/performance-hub' },
  ];

  return (
    <div className="page-container">
      {/* Hero */}
      <div className="hero-section" style={{ borderRadius: '0 0 0 48px' }}>
        <div className="badge" style={{ background: '#FFE066', color: '#0A0A0A', animation: 'float 3s ease-in-out infinite' }}>
          Spring 2025
        </div>
        <h1 className="page-title" style={{ marginTop: '1.5rem' }}>
          Choreography<br />
          <span style={{ color: '#FF6B6B' }}>II</span>
        </h1>
        <p className="page-subtitle" style={{ color: '#666' }}>
          Design for Dance and Movement Theatre
        </p>
        
        {/* Animated dots */}
        <div className="decorative-dots" style={{ marginTop: '2rem' }}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        {/* Stats */}
        <div className="stats-row" style={{ marginTop: '2rem' }}>
          <div className="stat-item animate-in" style={{ animationDelay: '0.2s' }}>
            <div className="stat-number" style={{ color: '#FF6B6B' }}>26960</div>
            <div className="stat-label">Unique #</div>
          </div>
          <div className="stat-item animate-in" style={{ animationDelay: '0.3s' }}>
            <div className="stat-number" style={{ color: '#4ECDC4' }}>6–10</div>
            <div className="stat-label">Minutes</div>
          </div>
          <div className="stat-item animate-in" style={{ animationDelay: '0.4s' }}>
            <div className="stat-number" style={{ color: '#FFE066' }}>2</div>
            <div className="stat-label">Tracks</div>
          </div>
        </div>
      </div>

      {/* Course Map */}
      <h2 className="section-heading">
        <span className="section-number">00</span>
        Your Journey
      </h2>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        border: '3px solid #0A0A0A',
        marginBottom: '2rem'
      }}>
        {courseMap.map((item, idx) => (
          <Link 
            key={idx}
            to={item.to}
            className="stagger"
            style={{
              flex: '1 1 auto',
              minWidth: '120px',
              padding: '1.5rem 1rem',
              textAlign: 'center',
              background: '#fff',
              borderRight: idx < courseMap.length - 1 ? '3px solid #0A0A0A' : 'none',
              textDecoration: 'none',
              position: 'relative',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = item.color;
              e.currentTarget.style.transform = 'translateY(-8px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              background: item.color,
              margin: '0 auto 0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Space Mono', monospace",
              fontWeight: 700,
              fontSize: '0.875rem',
              color: idx === 3 ? '#0A0A0A' : '#fff'
            }}>
              {String(idx + 1).padStart(2, '0')}
            </div>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.6875rem',
              color: '#666',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              {item.label}
            </div>
          </Link>
        ))}
      </div>

      {/* Course Info Grid */}
      <div className="two-col-grid">
        <div className="card card-coral">
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6875rem', color: '#FF6B6B', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
            Schedule
          </div>
          <p style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.25rem' }}>
            Tue / Thu
          </p>
          <p style={{ fontSize: '1.125rem', color: '#333' }}>1:30 – 3:30 PM</p>
          <p style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.5rem' }}>Room 2.120 (New Dance Studio)</p>
        </div>
        <div className="card card-mint">
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6875rem', color: '#4ECDC4', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
            Office Hours
          </div>
          <p style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.25rem' }}>
            Tue / Thu
          </p>
          <p style={{ fontSize: '1.125rem', color: '#333' }}>11:00 AM – 1:00 PM</p>
          <p style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.5rem' }}>Office 2.132C</p>
        </div>
      </div>

      {/* Welcome Text */}
      <h2 className="section-heading">
        <span className="section-number">01</span>
        Welcome
      </h2>
      
      <div className="prose">
        <p>
          <span className="highlight-coral">Dance-making is an intimate and daring journey.</span> It asks you to be vulnerable, 
          curious, and intentional. It requires the courage to explore new ground and 
          the discipline to refine your ideas with care.
        </p>
        <p>
          This course is designed as an <span className="highlight-mint">incubator</span>—a space where you can make work in a 
          semi-leisurely and intentional way. You will move through a structured yet 
          flexible creative arc designed to support your <span className="highlight-blue">choreographic growth</span>.
        </p>
      </div>

      {/* Quote */}
      <div className="quote-block">
        "I consider this course a place where <em>exploration</em> is the rule, <em>discovery</em> is central, 
        and <em>growth</em> is our overarching goal."
      </div>

      {/* Three Pathways */}
      <h2 className="section-heading">
        <span className="section-number">02</span>
        Three Pathways
      </h2>

      <div className="stagger">
        <Link to="/pathway-a" className="pathway-card pathway-a">
          <div className="pathway-number">Pathway A</div>
          <div className="pathway-title">Artistic Ideation</div>
          <p style={{ color: '#666', margin: 0, fontSize: '1rem' }}>
            Concept development, movement research, and finding your choreographic voice.
          </p>
        </Link>

        <Link to="/pathway-b" className="pathway-card pathway-b">
          <div className="pathway-number">Pathway B</div>
          <div className="pathway-title">Production Design</div>
          <p style={{ color: '#666', margin: 0, fontSize: '1rem' }}>
            Technical elements—lighting, sound, costume—that transform movement into performance.
          </p>
        </Link>

        <Link to="/pathway-c" className="pathway-card pathway-c">
          <div className="pathway-number">Pathway C</div>
          <div className="pathway-title">Technical Collaboration</div>
          <p style={{ color: '#666', margin: 0, fontSize: '1rem' }}>
            Working with designers, technicians, and AET composers to realize your vision.
          </p>
        </Link>
      </div>

      {/* Two Tracks */}
      <h2 className="section-heading">
        <span className="section-number">03</span>
        Two Tracks
      </h2>

      <div className="two-col-grid">
        <Link to="/stage" className="card card-blue" style={{ textDecoration: 'none' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎪</div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6875rem', color: '#4D7CFF', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>
            Stage Track
          </div>
          <p style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0A0A0A' }}>
            Concert Dance
          </p>
          <p style={{ color: '#666', margin: 0, fontSize: '0.9375rem' }}>
            Create work for the B. Iden Payne Theatre with full production design.
          </p>
        </Link>

        <Link to="/film" className="card card-violet" style={{ textDecoration: 'none' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎬</div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6875rem', color: '#A855F7', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>
            Film Track
          </div>
          <p style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0A0A0A' }}>
            Dance on Film
          </p>
          <p style={{ color: '#666', margin: 0, fontSize: '0.9375rem' }}>
            Explore site-specific locations, editing, and the cinematic frame.
          </p>
        </Link>
      </div>

      {/* Professor's Notes */}
      <div className="card-yellow" style={{ padding: '2rem', border: '3px solid #FFE066', marginTop: '3rem' }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', color: '#B8860B', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>
          ⚠️ Professor's Note
        </div>
        <ul className="content-list" style={{ margin: 0 }}>
          <li><strong>Remember!</strong> Evolution is a <span className="highlight-coral">collaboration</span>, not a commission.</li>
          <li>More information on your topical outline document.</li>
          <li>Dance Area Goal for the Year: <strong><em>"Mind the Gap."</em></strong></li>
        </ul>
      </div>

      {/* Key Dates */}
      <h2 className="section-heading">
        <span className="section-number">04</span>
        Key Dates
      </h2>

      <div className="stagger">
        {[
          { date: 'Jan 29', title: 'Collaborative Partnership', points: '5 pts', color: '#FF6B6B' },
          { date: 'Mar 3–5', title: 'Mid-Semester Showing', points: '5 pts', color: '#4ECDC4' },
          { date: 'Mar 24', title: 'Final Design Submission', points: '10 pts', color: '#4D7CFF' },
          { date: 'Apr 16', title: 'Final Studio Showing', points: '10 pts', color: '#A855F7' },
          { date: 'Apr 25', title: 'EVOLUTION Performance', points: '30%', color: '#FFE066' },
        ].map((item, idx) => (
          <div 
            key={idx}
            className="template-card"
            style={{ borderLeftWidth: '6px', borderLeftColor: item.color }}
          >
            <span 
              className="phase-marker"
              style={{ background: item.color, color: item.color === '#FFE066' ? '#0A0A0A' : '#fff' }}
            >
              {item.date}
            </span>
            <span className="template-name" style={{ flex: 1 }}>{item.title}</span>
            <span style={{ 
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.75rem',
              color: '#999'
            }}>
              {item.points}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="card-dark" style={{ marginTop: '4rem', padding: '3rem', textAlign: 'center' }}>
        <p 
          style={{ 
            fontFamily: "'Syne', sans-serif",
            fontSize: '1.75rem',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '1rem',
            lineHeight: 1.3
          }}
        >
          You are not here to replicate.<br />
          <span style={{ color: '#FF6B6B' }}>You are here to create.</span><br />
          From which you <span style={{ color: '#4ECDC4' }}>evolve</span>.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
          <Link 
            to="/semester-map" 
            className="tag tag-coral"
            style={{ fontSize: '0.8125rem', padding: '0.75rem 1.5rem' }}
          >
            View Semester Map →
          </Link>
          <Link 
            to="/study-lab" 
            className="tag tag-mint"
            style={{ fontSize: '0.8125rem', padding: '0.75rem 1.5rem' }}
          >
            Study Lab →
          </Link>
        </div>
      </div>

    </div>
  );
}
