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

interface Resource {
  id: string;
  title: string;
  desc: string;
  url: string;
  tags: string[];
  icon: string;
}

export default function Labs() {
  const [activeLab, setActiveLab] = useState<LabTab>('general');
  
  // Coach state
  const [coachInput, setCoachInput] = useState('');
  const [coachLoading, setCoachLoading] = useState(false);
  const [coachMessages, setCoachMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([]);

  // Clear coach when switching tabs
  const handleTabSwitch = (tab: LabTab) => {
    setActiveLab(tab);
    setCoachMessages([]);
    setCoachInput('');
  };

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

  // Film Lab Resources
  const filmResources: Resource[] = [
    {
      id: 'numeridanse',
      title: 'Numeridanse',
      desc: 'Free international dance video library with 800+ dance films, documentaries, and performances. Every genre represented.',
      url: 'https://numeridanse.com/en/publication/category/dance-films/',
      tags: ['Watch', 'Research', 'Free'],
      icon: '🎬'
    },
    {
      id: 'dancefilmmaking',
      title: 'Dance Filmmaking',
      desc: 'The #1 online hub for dance films and screendance. Curated films from around the world plus educational resources.',
      url: 'https://www.dancefilmmaking.com',
      tags: ['Watch', 'Learn', 'Submit'],
      icon: '🎥'
    },
    {
      id: 'masterclass',
      title: 'Dance Filmmaking Masterclass',
      desc: 'Comprehensive course on conceptualization, cinematography, and editing. Create professional dance films on any budget.',
      url: 'https://masterclass.dancefilmmaking.com/',
      tags: ['Course', 'Technique', 'Recommended'],
      icon: '🎓'
    },
    {
      id: 'danceoncamera',
      title: 'Dance on Camera',
      desc: 'Organization fostering connections between dance and film. Festival screenings and filmmaker support.',
      url: 'https://www.dancefilms.org/',
      tags: ['Festival', 'Community', 'Submit'],
      icon: '📽️'
    }
  ];

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
          desc: 'Core frameworks and skills for all choreographers — applicable to both stage and film work.',
          color: '#10B981'
        };
      case 'stage': 
        return { 
          icon: '🎭', 
          title: 'Stage Lab', 
          desc: 'Explorations specific to concert dance and live performance.',
          color: '#E85D04'
        };
      case 'film': 
        return { 
          icon: '🎬', 
          title: 'Film Lab', 
          desc: 'Explorations specific to dance on film and screen-based work.',
          color: '#6366F1'
        };
    }
  };

  const getCoachInfo = () => {
    switch (activeLab) {
      case 'stage':
        return {
          endpoint: '/api/stage-coach',
          title: 'Stage Coach',
          subtitle: 'Concert dance & live performance specialist',
          suggestions: [
            "How do I use the full depth of the stage?",
            "What should I prepare for tech rehearsal?",
            "My piece feels flat from the audience — help?",
            "How do I work with lighting designer?",
            "Tips for projecting energy in a large space",
            "How do I build to a climax?"
          ]
        };
      case 'film':
        return {
          endpoint: '/api/film-coach',
          title: 'Film Coach',
          subtitle: 'Dance on screen specialist',
          suggestions: [
            "How does camera angle change the choreography?",
            "When should I use close-ups vs wide shots?",
            "How do I communicate my vision to a videographer?",
            "What frame rate should I use for slow motion?",
            "How do I think about editing as choreography?",
            "Tips for filming on location?"
          ]
        };
      default:
        return null;
    }
  };

  const modules = getModules();
  const labInfo = getLabInfo();
  const coachInfo = getCoachInfo();

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'active': return { background: '#10B981' };
      case 'complete': return { background: 'var(--text-muted)' };
      case 'upcoming': return { background: '#6366F1' };
      default: return {};
    }
  };

  const askCoach = async () => {
    if (!coachInput.trim() || coachLoading || !coachInfo) return;
    
    const userMessage = coachInput.trim();
    setCoachInput('');
    setCoachLoading(true);
    
    const newMessages = [...coachMessages, { role: 'user' as const, content: userMessage }];
    setCoachMessages(newMessages);
    
    try {
      const response = await fetch(coachInfo.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      });
      
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'API error');
      
      const assistantMessage = data.content?.[0]?.text || 'I\'m having trouble responding right now. Please try again.';
      setCoachMessages([...newMessages, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error('Coach error:', error);
      setCoachMessages([...newMessages, { role: 'assistant', content: 'Unable to connect right now. Please try again, or reach out to Prof. Emoghene or TA Annie.' }]);
    }
    
    setCoachLoading(false);
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

        .lab-tab.general.active { color: #10B981; }
        .lab-tab.stage.active { color: #E85D04; }
        .lab-tab.film.active { color: #6366F1; }

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

        .module-info { flex: 1; }
        .module-title { font-weight: 600; font-size: 1.05rem; margin-bottom: 0.25rem; }
        .module-desc { font-size: 0.85rem; color: var(--text-secondary); }
        .module-meta { display: flex; align-items: center; gap: 0.75rem; }
        .module-date { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: var(--text-muted); }
        .module-status { font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; padding: 0.25rem 0.5rem; color: white; border-radius: 4px; text-transform: uppercase; }
        .module-arrow { font-size: 1.25rem; color: var(--text-muted); transition: all 0.2s ease; }
        .module-card:hover .module-arrow { color: var(--accent); transform: translateX(4px); }

        /* Resource Cards */
        .resources-section {
          margin-bottom: 2rem;
        }

        .resources-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .resource-card {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.25rem;
          transition: all 0.2s ease;
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .resource-card:hover {
          border-color: #6366F1;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.1);
        }

        .resource-header {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .resource-icon {
          font-size: 1.75rem;
          line-height: 1;
        }

        .resource-title {
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        .resource-tags {
          display: flex;
          gap: 0.35rem;
          flex-wrap: wrap;
        }

        .resource-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          padding: 0.2rem 0.4rem;
          background: rgba(99, 102, 241, 0.1);
          color: #6366F1;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .resource-tag.recommended {
          background: rgba(16, 185, 129, 0.1);
          color: #10B981;
        }

        .resource-desc {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .resource-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          margin-top: 0.75rem;
          font-size: 0.8rem;
          color: #6366F1;
          font-weight: 500;
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 2rem;
        }

        .empty-state-icon { font-size: 2.5rem; margin-bottom: 0.75rem; opacity: 0.5; }
        .empty-state-title { font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; }
        .empty-state-desc { font-size: 0.85rem; color: var(--text-secondary); max-width: 350px; margin: 0 auto; line-height: 1.5; }

        /* Module count badge */
        .module-count {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          padding: 0.15rem 0.4rem;
          background: var(--border);
          border-radius: 10px;
          color: var(--text-muted);
        }

        /* AI Coach Section */
        .coach-section {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
        }

        .coach-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .coach-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .coach-avatar.stage { background: linear-gradient(135deg, #E85D04, #F59E0B); }
        .coach-avatar.film { background: linear-gradient(135deg, #6366F1, #8B5CF6); }

        .coach-info h3 { font-size: 1.1rem; margin: 0 0 0.25rem 0; }
        .coach-info p { font-size: 0.8rem; color: var(--text-muted); margin: 0; }

        .coach-messages {
          max-height: 350px;
          overflow-y: auto;
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .coach-message {
          padding: 1rem 1.25rem;
          border-radius: 12px;
          font-size: 0.9rem;
          line-height: 1.6;
          max-width: 85%;
        }

        .coach-message.user {
          align-self: flex-end;
          border: 1px solid var(--border);
        }

        .coach-message.user.stage { background: rgba(232, 93, 4, 0.1); border-color: rgba(232, 93, 4, 0.2); }
        .coach-message.user.film { background: rgba(99, 102, 241, 0.1); border-color: rgba(99, 102, 241, 0.2); }

        .coach-message.assistant {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          align-self: flex-start;
        }

        .coach-input-row {
          display: flex;
          gap: 0.75rem;
        }

        .coach-input {
          flex: 1;
          padding: 0.875rem 1rem;
          border: 1px solid var(--border);
          border-radius: 8px;
          font-size: 0.9rem;
          background: var(--bg-primary);
          color: var(--text-primary);
          resize: none;
          font-family: inherit;
        }

        .coach-input:focus { outline: none; border-color: ${activeLab === 'stage' ? '#E85D04' : '#6366F1'}; }

        .coach-send-btn {
          padding: 0.875rem 1.5rem;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .coach-send-btn.stage { background: linear-gradient(135deg, #E85D04, #F59E0B); }
        .coach-send-btn.film { background: linear-gradient(135deg, #6366F1, #8B5CF6); }
        .coach-send-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
        .coach-send-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: none; }

        .coach-suggestions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .coach-suggestion {
          padding: 0.5rem 0.875rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 20px;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .coach-suggestion:hover { border-color: ${activeLab === 'stage' ? '#E85D04' : '#6366F1'}; }

        .coach-empty {
          text-align: center;
          padding: 2rem;
          color: var(--text-muted);
        }

        .coach-empty-icon { font-size: 2.5rem; margin-bottom: 0.75rem; }

        .coach-note {
          margin-top: 1.5rem;
          padding: 1rem;
          background: var(--border-light);
          border-radius: 8px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .resources-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 600px) {
          .lab-selector { flex-wrap: wrap; }
          .lab-tab { padding: 0.6rem 1rem; font-size: 0.85rem; }
          .module-card { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .module-meta { width: 100%; justify-content: flex-start; }
          .coach-message { max-width: 95%; }
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
          onClick={() => handleTabSwitch('general')}
        >
          📚 General Studies
          {generalModules.length > 0 && <span className="module-count">{generalModules.length}</span>}
        </button>
        <button
          className={`lab-tab stage ${activeLab === 'stage' ? 'active' : ''}`}
          onClick={() => handleTabSwitch('stage')}
        >
          🎭 Stage Lab
          {stageModules.length > 0 && <span className="module-count">{stageModules.length}</span>}
        </button>
        <button
          className={`lab-tab film ${activeLab === 'film' ? 'active' : ''}`}
          onClick={() => handleTabSwitch('film')}
        >
          🎬 Film Lab
          {filmModules.length > 0 && <span className="module-count">{filmModules.length}</span>}
        </button>
      </div>

      <div className="lab-content">
        <div className="lab-header">
          <div className="lab-header-top">
            <h2 className="lab-title">
              <span>{labInfo.icon}</span>
              {labInfo.title}
            </h2>
            <span className="lab-status">
              {activeLab === 'film' ? 'Resources + AI Coach' : modules.length > 0 ? `${modules.length} Module${modules.length > 1 ? 's' : ''}` : 'AI Coach Available'}
            </span>
          </div>
          <p className="lab-desc">{labInfo.desc}</p>
        </div>

        <div className="lab-body">
          {modules.length > 0 && (
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
          )}

          {activeLab === 'general' && modules.length === 0 && (
            <div className="empty-state">
              <div className="empty-state-icon">📚</div>
              <div className="empty-state-title">General studies modules coming soon</div>
              <div className="empty-state-desc">
                Core frameworks and skills will be added as we progress through the semester.
              </div>
            </div>
          )}

          {/* Film Lab Resources */}
          {activeLab === 'film' && (
            <div className="resources-section">
              <h3 className="resources-title">📖 Essential Resources</h3>
              <div className="resources-grid">
                {filmResources.map((resource) => (
                  <a 
                    key={resource.id} 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="resource-card"
                  >
                    <div className="resource-header">
                      <span className="resource-icon">{resource.icon}</span>
                      <div>
                        <div className="resource-title">{resource.title}</div>
                        <div className="resource-tags">
                          {resource.tags.map((tag) => (
                            <span 
                              key={tag} 
                              className={`resource-tag ${tag.toLowerCase() === 'recommended' ? 'recommended' : ''}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="resource-desc">{resource.desc}</p>
                    <span className="resource-link">Visit site →</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* AI Coach for Stage and Film */}
          {coachInfo && (
            <div className="coach-section">
              <div className="coach-header">
                <div className={`coach-avatar ${activeLab}`}>
                  {activeLab === 'stage' ? '🎭' : '🎬'}
                </div>
                <div className="coach-info">
                  <h3>{coachInfo.title}</h3>
                  <p>{coachInfo.subtitle}</p>
                </div>
              </div>

              <div className="coach-messages">
                {coachMessages.length === 0 ? (
                  <div className="coach-empty">
                    <div className="coach-empty-icon">💬</div>
                    <p>Ask me anything about {activeLab === 'stage' ? 'concert dance and live performance' : 'dance filmmaking and screen-based work'}.</p>
                  </div>
                ) : (
                  coachMessages.map((msg, i) => (
                    <div key={i} className={`coach-message ${msg.role} ${activeLab}`}>
                      {msg.content}
                    </div>
                  ))
                )}
                {coachLoading && (
                  <div className="coach-message assistant" style={{ fontStyle: 'italic', opacity: 0.7 }}>
                    Thinking...
                  </div>
                )}
              </div>

              <div className="coach-input-row">
                <textarea
                  className="coach-input"
                  rows={2}
                  placeholder={`Ask about ${activeLab === 'stage' ? 'staging, tech, space, lighting...' : 'camera, editing, framing, locations...'}`}
                  value={coachInput}
                  onChange={(e) => setCoachInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      askCoach();
                    }
                  }}
                />
                <button
                  className={`coach-send-btn ${activeLab}`}
                  onClick={askCoach}
                  disabled={coachLoading || !coachInput.trim()}
                >
                  {coachLoading ? '...' : 'Ask'}
                </button>
              </div>

              <div className="coach-suggestions">
                {coachInfo.suggestions.map((suggestion, i) => (
                  <button
                    key={i}
                    className="coach-suggestion"
                    onClick={() => setCoachInput(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>

              <div className="coach-note">
                <strong>Note:</strong> This coach helps you think through {activeLab === 'stage' ? 'live performance' : 'film'} challenges — 
                it won't make artistic decisions for you. For logistical questions, reach out to <strong>Annie (TA)</strong> or <strong>Prof. Emoghene</strong>.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
