import { useState } from 'react';

export default function Labs() {
  const [activeLab, setActiveLab] = useState<'stage' | 'film'>('stage');

  return (
    <div className="labs-page">
      <style>{`
        .labs-page {
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

        /* Lab Selector */
        .lab-selector {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border);
          padding-bottom: 0.5rem;
        }

        .lab-tab {
          padding: 0.75rem 1.5rem;
          background: transparent;
          border: none;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          border-radius: 6px 6px 0 0;
          transition: all 0.2s ease;
        }

        .lab-tab:hover {
          color: var(--text-primary);
          background: var(--border-light);
        }

        .lab-tab.active {
          color: var(--accent);
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-bottom: 1px solid var(--bg-secondary);
          margin-bottom: -1px;
        }

        /* Lab Content */
        .lab-content {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          min-height: 400px;
        }

        .lab-header {
          padding: 2rem;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .lab-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .lab-icon {
          font-size: 1.5rem;
        }

        .lab-status {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          padding: 0.35rem 0.75rem;
          background: var(--border-light);
          color: var(--text-muted);
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .lab-body {
          padding: 3rem 2rem;
          text-align: center;
        }

        .empty-state-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .empty-state-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .empty-state-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          max-width: 400px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Schedule */
        .lab-schedule {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px dashed var(--border);
        }

        .schedule-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }

        .schedule-info {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
      `}</style>

      <div className="page-header">
        <h1 className="page-title">Labs</h1>
        <p className="page-subtitle">
          Ongoing workspace for class activities. Labs are updated throughout the semester as we work together.
        </p>
      </div>

      <div className="lab-selector">
        <button
          className={`lab-tab ${activeLab === 'stage' ? 'active' : ''}`}
          onClick={() => setActiveLab('stage')}
        >
          🎭 Stage Lab
        </button>
        <button
          className={`lab-tab ${activeLab === 'film' ? 'active' : ''}`}
          onClick={() => setActiveLab('film')}
        >
          🎬 Film Lab
        </button>
      </div>

      <div className="lab-content">
        <div className="lab-header">
          <h2 className="lab-title">
            <span className="lab-icon">{activeLab === 'stage' ? '🎭' : '🎬'}</span>
            {activeLab === 'stage' ? 'Stage Lab' : 'Film Lab'}
          </h2>
          <span className="lab-status">In Development</span>
        </div>

        <div className="lab-body">
          <div className="empty-state-icon">🔬</div>
          <div className="empty-state-title">Lab materials coming soon</div>
          <div className="empty-state-desc">
            {activeLab === 'stage' 
              ? 'Stage Lab content will be added as we progress through the semester. Check back after our first showings.'
              : 'Film Lab content will be added as we progress through the semester. Check back after our first showings.'
            }
          </div>

          <div className="lab-schedule">
            <div className="schedule-title">Lab Sessions</div>
            <div className="schedule-info">
              {activeLab === 'stage' 
                ? 'Tuesdays and Thursdays with AET collaborators'
                : 'Tuesdays and Thursdays with AET collaborators'
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
