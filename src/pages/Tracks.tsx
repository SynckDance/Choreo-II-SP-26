import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Tracks() {
  const [activeTrack, setActiveTrack] = useState<'stage' | 'film'>('stage');

  return (
    <div className="tracks-page">
      <style>{`
        .tracks-page {
          max-width: 1000px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: 3rem;
        }

        .page-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .page-subtitle {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 600px;
        }

        /* Track Selector */
        .track-selector {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .track-option {
          background: var(--bg-secondary);
          border: 2px solid var(--border);
          border-radius: 12px;
          padding: 2rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
        }

        .track-option:hover {
          border-color: var(--text-muted);
        }

        .track-option.active {
          border-color: var(--accent);
        }

        .track-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .track-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .track-tagline {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        /* Track Content */
        .track-content {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2.5rem;
        }

        .track-header {
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border);
        }

        .track-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .track-intro {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .section-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent);
          margin-bottom: 1rem;
          margin-top: 2rem;
        }

        .section-title:first-of-type {
          margin-top: 0;
        }

        .focus-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .focus-card {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 1.25rem;
        }

        .focus-card-title {
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .focus-card-desc {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .deliverables-list {
          list-style: none;
        }

        .deliverables-list li {
          padding: 0.6rem 0;
          font-size: 0.9rem;
          color: var(--text-secondary);
          border-bottom: 1px dashed var(--border);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .deliverables-list li:last-child {
          border-bottom: none;
        }

        .deliverables-list li::before {
          content: "○";
          color: var(--accent);
          font-size: 0.6rem;
        }

        .track-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 2rem;
          padding: 0.75rem 1.25rem;
          background: var(--accent);
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          transition: background 0.2s ease;
        }

        .track-link:hover {
          background: var(--accent-hover);
        }

        @media (max-width: 600px) {
          .track-selector {
            grid-template-columns: 1fr;
          }

          .track-content {
            padding: 1.5rem;
          }
        }
      `}</style>

      <div className="page-header">
        <h1 className="page-title">Tracks</h1>
        <p className="page-subtitle">
          Choose your presentational format. Each track develops specific skills while sharing 
          the core choreographic principles of the course.
        </p>
      </div>

      <div className="track-selector">
        <button
          className={`track-option ${activeTrack === 'stage' ? 'active' : ''}`}
          onClick={() => setActiveTrack('stage')}
        >
          <div className="track-icon">🎭</div>
          <div className="track-name">Stage Track</div>
          <div className="track-tagline">Concert dance for live performance</div>
        </button>
        <button
          className={`track-option ${activeTrack === 'film' ? 'active' : ''}`}
          onClick={() => setActiveTrack('film')}
        >
          <div className="track-icon">🎬</div>
          <div className="track-name">Film Track</div>
          <div className="track-tagline">Dance film-making for screen</div>
        </button>
      </div>

      {activeTrack === 'stage' ? (
        <div className="track-content">
          <div className="track-header">
            <h2 className="track-title">Stage Track</h2>
            <p className="track-intro">
              Create a 6-10 minute dance work for live performance at EVOLUTION. You will collaborate with 
              AET composers, design lighting and costumes, and lead your ensemble through the full production process.
            </p>
          </div>

          <h3 className="section-title">Areas of Focus</h3>
          <div className="focus-grid">
            <div className="focus-card">
              <div className="focus-card-title">Spatial Design</div>
              <div className="focus-card-desc">Proscenium staging, floor patterns, levels, and audience relationship</div>
            </div>
            <div className="focus-card">
              <div className="focus-card-title">Lighting Design</div>
              <div className="focus-card-desc">Cues, colors, moods, and collaboration with technical team</div>
            </div>
            <div className="focus-card">
              <div className="focus-card-title">Sound + Music</div>
              <div className="focus-card-desc">Original compositions with AET, music selection, and multichannel options</div>
            </div>
            <div className="focus-card">
              <div className="focus-card-title">Costume + Design</div>
              <div className="focus-card-desc">Wardrobe choices that support the world of the work</div>
            </div>
          </div>

          <h3 className="section-title">Deliverables</h3>
          <ul className="deliverables-list">
            <li>Finished 6-10 minute work for EVOLUTION</li>
            <li>Lighting design cues and documentation</li>
            <li>Sound design with music credits</li>
            <li>Costume design documentation</li>
            <li>Rehearsal process documentation</li>
            <li>Final reflection</li>
          </ul>

          <NavLink to="/resources/stage-designs" className="track-link">
            View Stage Resources →
          </NavLink>
        </div>
      ) : (
        <div className="track-content">
          <div className="track-header">
            <h2 className="track-title">Film Track</h2>
            <p className="track-intro">
              Film is not "stage documentation." Film is its own choreographic language. You will learn to 
              choreograph framing, camera movement, editing, sound, and location alongside time, space, rhythm, and presence.
            </p>
          </div>

          <h3 className="section-title">Three Pillars</h3>
          <div className="focus-grid">
            <div className="focus-card">
              <div className="focus-card-title">Technical Craft</div>
              <div className="focus-card-desc">Camera, sound, lighting, editing, color. The tools that shape how movement reads on screen.</div>
            </div>
            <div className="focus-card">
              <div className="focus-card-title">Casting + Performance</div>
              <div className="focus-card-desc">Stage presence and camera presence are not the same. Cast for the work.</div>
            </div>
            <div className="focus-card">
              <div className="focus-card-title">Research + Reference</div>
              <div className="focus-card-desc">Study existing dance films on DanceFilmmaking.com. Build your visual vocabulary.</div>
            </div>
          </div>

          <h3 className="section-title">Workflow Phases</h3>
          <div className="focus-grid">
            <div className="focus-card">
              <div className="focus-card-title">Pre-Production</div>
              <div className="focus-card-desc">Concept, storyboard, shot list, casting, location scouting</div>
            </div>
            <div className="focus-card">
              <div className="focus-card-title">Production</div>
              <div className="focus-card-desc">Camera, sound, lighting on set, performance direction</div>
            </div>
            <div className="focus-card">
              <div className="focus-card-title">Post-Production</div>
              <div className="focus-card-desc">Editing, sound design, color grading, titles and credits</div>
            </div>
          </div>

          <h3 className="section-title">Deliverables</h3>
          <ul className="deliverables-list">
            <li>Finished dance film</li>
            <li>Film statement (1 page)</li>
            <li>Pre-production packet</li>
            <li>Production log</li>
            <li>Post-production notes</li>
            <li>Credits and archival metadata</li>
          </ul>

          <NavLink to="/tracks/film" className="track-link">
            View Full Film Track Guide →
          </NavLink>
        </div>
      )}
    </div>
  );
}
