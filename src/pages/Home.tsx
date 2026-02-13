import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page">
      <style>{`
        .home-page {
          max-width: 900px;
          margin: 0 auto;
        }

        .hero {
          text-align: center;
          padding: 3rem 0 4rem;
          border-bottom: 1px solid var(--border);
          margin-bottom: 3rem;
        }

        .hero-badge {
          display: inline-block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent);
          padding: 0.4rem 0.75rem;
          border: 1px solid var(--accent);
          border-radius: 4px;
          margin-bottom: 1.5rem;
        }

        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 600;
          line-height: 1.1;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto 2rem;
        }

        .hero-meta {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .hero-meta span {
          margin: 0 0.5rem;
        }

        /* Quote */
        .quote-block {
          background: var(--bg-secondary);
          border-left: 3px solid var(--accent);
          padding: 1.5rem 2rem;
          margin-bottom: 3rem;
          border-radius: 0 8px 8px 0;
        }

        .quote-text {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-style: italic;
          line-height: 1.5;
          margin-bottom: 0.75rem;
        }

        .quote-author {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        /* Section */
        .section {
          margin-bottom: 3rem;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .section-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent);
          color: white;
          border-radius: 6px;
          font-size: 0.9rem;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .section-content {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .section-content p {
          margin-bottom: 1rem;
        }

        /* Cards Grid */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1.5rem;
          transition: all 0.2s ease;
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .card:hover {
          border-color: var(--accent);
          box-shadow: var(--shadow-lg);
          transform: translateY(-2px);
        }

        .card-icon {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .card-title {
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .card-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Info Grid */
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .info-item {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 1rem 1.25rem;
        }

        .info-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 0.35rem;
        }

        .info-value {
          font-weight: 500;
          font-size: 0.95rem;
        }

        /* Keywords */
        .keywords {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .keyword {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          padding: 0.35rem 0.65rem;
          background: var(--border-light);
          border-radius: 4px;
          color: var(--text-secondary);
        }

        /* Two Formats */
        .formats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .format-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1.75rem;
          text-align: center;
        }

        .format-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .format-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .format-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        @media (max-width: 600px) {
          .formats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="hero">
        <div className="hero-badge">Spring 2026</div>
        <h1>Choreography II</h1>
        <p className="hero-subtitle">
          Design for Dance and Movement Theatre. An advanced space for experimentation, 
          discovery, and growth as a 21st-century dance-maker.
        </p>
        <p className="hero-meta">
          T D 332N <span>·</span> Tue/Thu 1:30-3:30 PM <span>·</span> New Dance Studio 2.120
        </p>
      </div>

      <div className="quote-block">
        <p className="quote-text">
          "Evolution is a collaboration, not a commission."
        </p>
        <p className="quote-author">— EG Gionfreddo</p>
      </div>

      <div className="section">
        <div className="section-header">
          <div className="section-icon">◎</div>
          <h2 className="section-title">About This Course</h2>
        </div>
        <div className="section-content">
          <p>
            Dance-making is an intimate and daring journey. It asks you to be vulnerable, curious, and intentional. 
            It requires the courage to explore new ground and the discipline to refine your ideas with care.
          </p>
          <p>
            In this course, we move beyond arranging movement. We build concepts, shape narratives, collaborate across 
            disciplines, and craft dance works that carry purpose. You will experiment with layered choreographic tools, 
            lead rehearsals, collaborate with dancers and designers, and develop works for EVOLUTION.
          </p>
        </div>
        <div className="keywords">
          <span className="keyword">Concert Dance</span>
          <span className="keyword">Dance Film-making</span>
          <span className="keyword">Performance</span>
          <span className="keyword">Production</span>
          <span className="keyword">Collaboration</span>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <div className="section-icon">◐</div>
          <h2 className="section-title">Two Presentational Formats</h2>
        </div>
        <div className="section-content">
          <p>
            This year is experimental. We will work across two formats, expanding your perspective as a dance-maker 
            while developing skills across multiple facets of choreographic practice.
          </p>
        </div>
        <div className="formats-grid">
          <div className="format-card">
            <div className="format-icon">🎭</div>
            <div className="format-title">Stage</div>
            <div className="format-desc">Concert dance for live performance in the theatre</div>
          </div>
          <div className="format-card">
            <div className="format-icon">🎬</div>
            <div className="format-title">Film</div>
            <div className="format-desc">Dance film-making with camera as choreographic partner</div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <div className="section-icon">◉</div>
          <h2 className="section-title">Course Information</h2>
        </div>
        <div className="info-grid">
          <div className="info-item">
            <div className="info-label">Instructor</div>
            <div className="info-value">Prof. Sinclair Emoghene</div>
          </div>
          <div className="info-item">
            <div className="info-label">Teaching Assistant</div>
            <div className="info-value">Annie Irizarry Perez</div>
          </div>
          <div className="info-item">
            <div className="info-label">Office Hours</div>
            <div className="info-value">T/Th 11 AM - 1 PM</div>
          </div>
          <div className="info-item">
            <div className="info-label">Office Location</div>
            <div className="info-value">2.132C Dance Offices</div>
          </div>
          <div className="info-item">
            <div className="info-label">Final Performance</div>
            <div className="info-value">Apr 24, 2026</div>
          </div>
          <div className="info-item">
            <div className="info-label">Venue</div>
            <div className="info-value">B. Iden Payne Theatre</div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <div className="section-icon">→</div>
          <h2 className="section-title">Quick Links</h2>
        </div>
        <div className="cards-grid">
          <NavLink to="/pathways" className="card">
            <div className="card-icon">💡</div>
            <div className="card-title">Pathways</div>
            <div className="card-desc">Artistic Ideation, Production Design, and Collaboration frameworks</div>
          </NavLink>
          <NavLink to="/tracks" className="card">
            <div className="card-icon">🎯</div>
            <div className="card-title">Tracks</div>
            <div className="card-desc">Stage and Film track information and requirements</div>
          </NavLink>
          <NavLink to="/labs" className="card">
            <div className="card-icon">🔬</div>
            <div className="card-title">Labs</div>
            <div className="card-desc">Stage Lab and Film Lab for ongoing class work</div>
          </NavLink>
          <NavLink to="/timeline" className="card">
            <div className="card-icon">📅</div>
            <div className="card-title">Timeline</div>
            <div className="card-desc">Semester schedule, assignments, and Evolution calendar</div>
          </NavLink>
          <NavLink to="/resources" className="card">
            <div className="card-icon">📁</div>
            <div className="card-title">Resources</div>
            <div className="card-desc">Stage designs, film templates, and technical documents</div>
          </NavLink>
          <NavLink to="/books" className="card">
            <div className="card-icon">📚</div>
            <div className="card-title">Books</div>
            <div className="card-desc">Required and recommended readings for the course</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
