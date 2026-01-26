import { useState } from 'react';
import { NavLink } from 'react-router-dom';

type LabTab = 'general' | 'stage' | 'film';

interface Module {
  id: string;
  title: string;
  desc: string;
  date: string;
  status: 'active' | 'complete' | 'upcoming';
  path: string;
}

export default function Labs() {
  const [activeLab, setActiveLab] = useState<LabTab>('general');

  // General Studies - applies to both Stage and Film tracks
  const generalModules: Module[] = [
    {
      id: 'two-body-problem',
      title: 'Two Body Problem',
      desc: 'Exploring duality and bi-focal vantage points',
      date: 'Week 2',
      status: 'complete',
      path: '/labs/two-body-problem'
    },
    {
      id: 'collaboration',
      title: 'The Art of Effective Collaboration',
      desc: 'Enter, navigate, and exit collaborations with clarity and integrity',
      date: 'Week 3',
      status: 'active',
      path: '/labs/collaboration'
    }
  ];

  // Stage Lab - specific to concert dance / live performance
  const stageModules: Module[] = [];

  // Film Lab - specific to dance on film
  const filmModules: Module[] = [];

  const getModules = () => {
    switch (activeLab) {
      case 'general': return generalModules;
      case 'stage': return stageModules;
      case 'film': return filmModules;
    }
  };

  const getLabInfo = () => {
    switch (activeLab) {
      case 'general': 
        return { 
          icon: '📚', 
          title: 'General Studies', 
          desc: 'Core frameworks and skills for all choreographers — applicable to both stage and film work.'
        };
      case 'stage': 
        return { 
          icon: '🎭', 
          title: 'Stage Lab', 
          desc: 'Explorations specific to concert dance and live performance.'
        };
      case 'film': 
        return { 
          icon: '🎬', 
          title: 'Film Lab', 
          desc: 'Explorations specific to dance on film and screen-based work.'
        };
    }
  };

  const modules = getModules();
  const labInfo = getLabInfo();

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'active': return { background: '#10B981' };
      case 'complete': return { background: 'var(--text-muted)' };
      case 'upcoming': return { background: '#6366F1' };
      default: return {};
    }
  };

  return (
    <div className="labs-page">
      <style>{`
        .labs-page {
          max-width: 1000px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: 2rem;
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
          padding: 0.75rem 1.25rem;
          background: transparent;
          border: none;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          border-radius: 6px 6px 0 0;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
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

        .lab-tab.general.active {
          color: #10B981;
        }

        .lab-tab.stage.active {
          color: #E85D04;
        }

        .lab-tab.film.active {
          color: #6366F1;
        }

        /* Lab Content */
        .lab-content {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          min-height: 300px;
        }

        .lab-header {
          padding: 1.75rem 2rem;
          border-bottom: 1px solid var(--border);
        }

        .lab-header-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .lab-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .lab-icon {
          font-size: 1.4rem;
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

        .lab-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          max-width: 500px;
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
          font-size: 1.05rem;
          margin-bottom: 0.25rem;
        }

        .module-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .module-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
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

        /* Module count badge */
        .module-count {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          padding: 0.15rem 0.4rem;
          background: var(--border);
          border-radius: 10px;
          color: var(--text-muted);
        }

        @media (max-width: 600px) {
          .lab-selector {
            flex-wrap: wrap;
          }

          .lab-tab {
            padding: 0.6rem 1rem;
            font-size: 0.85rem;
          }

          .module-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .module-meta {
            width: 100%;
            justify-content: flex-start;
          }
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
          className={`lab-tab general ${activeLab === 'general' ? 'active' : ''}`}
          onClick={() => setActiveLab('general')}
        >
          📚 General Studies
          {generalModules.length > 0 && <span className="module-count">{generalModules.length}</span>}
        </button>
        <button
          className={`lab-tab stage ${activeLab === 'stage' ? 'active' : ''}`}
          onClick={() => setActiveLab('stage')}
        >
          🎭 Stage Lab
          {stageModules.length > 0 && <span className="module-count">{stageModules.length}</span>}
        </button>
        <button
          className={`lab-tab film ${activeLab === 'film' ? 'active' : ''}`}
          onClick={() => setActiveLab('film')}
        >
          🎬 Film Lab
          {filmModules.length > 0 && <span className="module-count">{filmModules.length}</span>}
        </button>
      </div>

      <div className="lab-content">
        <div className="lab-header">
          <div className="lab-header-top">
            <h2 className="lab-title">
              <span className="lab-icon">{labInfo.icon}</span>
              {labInfo.title}
            </h2>
            <span className="lab-status">
              {modules.length > 0 ? `${modules.length} Module${modules.length > 1 ? 's' : ''}` : 'Coming Soon'}
            </span>
          </div>
          <p className="lab-desc">{labInfo.desc}</p>
        </div>

        <div className="lab-body">
          {modules.length > 0 ? (
            <div className="modules-grid">
              {modules.map((module) => (
                <NavLink key={module.id} to={module.path} className="module-card">
                  <div className="module-info">
                    <div className="module-title">{module.title}</div>
                    <div className="module-desc">{module.desc}</div>
                  </div>
                  <div className="module-meta">
                    <span className="module-date">{module.date}</span>
                    <span className="module-status" style={getStatusStyle(module.status)}>
                      {module.status}
                    </span>
                    <span className="module-arrow">→</span>
                  </div>
                </NavLink>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">🔬</div>
              <div className="empty-state-title">
                {activeLab === 'film' ? 'Film Lab modules coming soon' : 'Modules coming soon'}
              </div>
              <div className="empty-state-desc">
                {activeLab === 'general' && 'General studies content will be added as we progress through the semester.'}
                {activeLab === 'stage' && 'Stage-specific explorations will be added as we progress through the semester.'}
                {activeLab === 'film' && 'Film-specific explorations will be added as we progress through the semester.'}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
