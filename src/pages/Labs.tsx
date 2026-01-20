import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Labs() {
  const [activeLab, setActiveLab] = useState<'stage' | 'film'>('stage');

  const stageModules = [
    {
      id: 'two-body-problem',
      title: 'Two Body Problem',
      desc: 'Exploring duality and bi-focal vantage points',
      date: 'Week 2',
      status: 'active',
      path: '/labs/two-body-problem'
    }
  ];

  const filmModules: typeof stageModules = [];

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
          min-height: 300px;
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
          padding: 2rem;
        }

        /* Module Cards */
        .modules-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .module-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 10px;
          text-decoration: none;
          color: inherit;
          transition: all 0.2s ease;
        }

        .module-card:hover {
          border-color: var(--accent);
          transform: translateX(4px);
        }

        .module-info {
          flex: 1;
        }

        .module-title {
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }

        .module-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .module-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .module-date {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .module-status {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          padding: 0.25rem 0.5rem;
          background: var(--accent);
          color: white;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .module-arrow {
          font-size: 1.25rem;
          color: var(--text-muted);
          transition: all 0.2s ease;
        }

        .module-card:hover .module-arrow {
          color: var(--accent);
          transform: translateX(4px);
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 3rem 2rem;
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
      `}</style>

      <div className="page-header">
        <h1 className="page-title">Labs</h1>
        <p className="page-subtitle">
          Ongoing workspace for class explorations. Labs are updated throughout the semester as we work together.
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
          <span className="lab-status">{activeLab === 'stage' && stageModules.length > 0 ? 'Active' : 'In Development'}</span>
        </div>

        <div className="lab-body">
          {activeLab === 'stage' && stageModules.length > 0 ? (
            <div className="modules-grid">
              {stageModules.map((module) => (
                <NavLink key={module.id} to={module.path} className="module-card">
                  <div className="module-info">
                    <div className="module-title">{module.title}</div>
                    <div className="module-desc">{module.desc}</div>
                  </div>
                  <div className="module-meta">
                    <span className="module-date">{module.date}</span>
                    <span className="module-status">{module.status}</span>
                    <span className="module-arrow">→</span>
                  </div>
                </NavLink>
              ))}
            </div>
          ) : activeLab === 'film' && filmModules.length > 0 ? (
            <div className="modules-grid">
              {filmModules.map((module) => (
                <NavLink key={module.id} to={module.path} className="module-card">
                  <div className="module-info">
                    <div className="module-title">{module.title}</div>
                    <div className="module-desc">{module.desc}</div>
                  </div>
                  <div className="module-meta">
                    <span className="module-date">{module.date}</span>
                    <span className="module-status">{module.status}</span>
                    <span className="module-arrow">→</span>
                  </div>
                </NavLink>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">🔬</div>
              <div className="empty-state-title">
                {activeLab === 'film' ? 'Film Lab modules coming soon' : 'No modules yet'}
              </div>
              <div className="empty-state-desc">
                {activeLab === 'stage' 
                  ? 'Stage Lab content will be added as we progress through the semester.'
                  : 'Film Lab content will be added as we progress through the semester.'
                }
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
