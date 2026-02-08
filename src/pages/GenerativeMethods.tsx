import { useState } from 'react';
import { NavLink } from 'react-router-dom';

type Phase = 'overview' | 'expand' | 'deepen' | 'structure';

export default function GenerativeMethods() {
  const [activePhase, setActivePhase] = useState<Phase>('overview');

  const phases = {
    expand: {
      title: 'Expand',
      color: '#10B981',
      icon: '🌱',
      desc: 'From impulse to material — growing your initial idea outward.',
      steps: [
        {
          name: 'Micro-Scale Exploration',
          detail: 'Joint patterns, breath, weight',
          prompt: 'What is the smallest unit of this movement? Isolate it.'
        },
        {
          name: 'Meso-Scale Development',
          detail: 'Phrase building, 2-30 seconds',
          prompt: 'Let the micro grow. What phrase emerges when you let it breathe?'
        }
      ]
    },
    deepen: {
      title: 'Deepen',
      color: '#6366F1',
      icon: '🔍',
      desc: 'From material to meaning — refining and discovering what matters.',
      steps: [
        {
          name: 'Capture & Movement DNA',
          detail: 'Document emerging patterns',
          prompt: 'What keeps recurring? Name it. This is your movement\'s signature.'
        },
        {
          name: 'Creative Decision Point',
          detail: 'Choose your direction',
          prompt: 'What do you want to say? What stays, what goes?'
        },
        {
          name: 'Spatial Ecology',
          detail: 'Levels, radius, pathways',
          prompt: 'Where does this movement want to live in space?'
        },
        {
          name: 'Energetic Signature',
          detail: 'Intensity, attack, continuity',
          prompt: 'What is the quality? Sharp or soft? Sustained or sudden?'
        },
        {
          name: 'Temporal Weave',
          detail: 'Phrasing, acceleration, pauses',
          prompt: 'Where does time stretch? Where does it compress?'
        }
      ]
    },
    structure: {
      title: 'Structure',
      color: '#E85D04',
      icon: '🏗️',
      desc: 'From meaning to form — building toward performance.',
      steps: [
        {
          name: 'Macro-Scale Integration',
          detail: 'Combining phrases into sections',
          prompt: 'How do your phrases speak to each other?'
        },
        {
          name: 'Sonic Integration',
          detail: 'What sounds does this call for?',
          prompt: 'If this movement had a soundtrack, what would it sound like?'
        },
        {
          name: 'Full Sequence Iteration',
          detail: 'Run it, break it, run it again',
          prompt: 'What reveals itself only when you do the whole thing?'
        },
        {
          name: 'Final Capture & Analysis',
          detail: 'Document the work',
          prompt: 'Record it. Watch it. What do you see that you didn\'t feel?'
        },
        {
          name: 'Movement Journal',
          detail: 'Creative process trail',
          prompt: 'Write the story of how this piece came to be.'
        }
      ]
    }
  };

  return (
    <div className="gen-methods">
      <style>{`
        .gen-methods {
          max-width: 1000px;
          margin: 0 auto;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .breadcrumb a {
          color: var(--text-secondary);
          text-decoration: none;
        }

        .breadcrumb a:hover {
          color: var(--accent);
        }

        .lesson-header {
          margin-bottom: 2rem;
        }

        .lesson-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          padding: 0.35rem 0.75rem;
          background: linear-gradient(135deg, #10B981, #6366F1);
          color: white;
          border-radius: 4px;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .lesson-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 600;
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }

        .lesson-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 700px;
        }

        /* Flow Diagram */
        .flow-diagram {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .flow-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          letter-spacing: 0.05em;
        }

        .flow-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .flow-start {
          text-align: center;
          padding: 1rem;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(99, 102, 241, 0.1));
          border: 2px dashed var(--border);
          border-radius: 8px;
          font-weight: 600;
        }

        .flow-arrow {
          text-align: center;
          color: var(--text-muted);
          font-size: 1.25rem;
        }

        .flow-phases {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .flow-phase {
          padding: 1.25rem;
          background: var(--bg-primary);
          border: 2px solid var(--border);
          border-radius: 10px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .flow-phase:hover {
          transform: translateY(-2px);
        }

        .flow-phase.expand { border-color: #10B981; }
        .flow-phase.expand:hover, .flow-phase.expand.active { background: rgba(16, 185, 129, 0.1); }
        
        .flow-phase.deepen { border-color: #6366F1; }
        .flow-phase.deepen:hover, .flow-phase.deepen.active { background: rgba(99, 102, 241, 0.1); }
        
        .flow-phase.structure { border-color: #E85D04; }
        .flow-phase.structure:hover, .flow-phase.structure.active { background: rgba(232, 93, 4, 0.1); }

        .flow-phase-icon {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
        }

        .flow-phase-title {
          font-weight: 600;
          font-size: 1rem;
        }

        .flow-phase-sub {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        .flow-iteration {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 1rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 8px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .flow-iteration-icon {
          font-size: 1.25rem;
        }

        /* Phase Detail */
        .phase-detail {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 2rem;
        }

        .phase-header {
          padding: 1.5rem 2rem;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .phase-header.expand { background: rgba(16, 185, 129, 0.05); border-left: 4px solid #10B981; }
        .phase-header.deepen { background: rgba(99, 102, 241, 0.05); border-left: 4px solid #6366F1; }
        .phase-header.structure { background: rgba(232, 93, 4, 0.05); border-left: 4px solid #E85D04; }

        .phase-icon {
          font-size: 2rem;
        }

        .phase-info h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          margin: 0 0 0.25rem 0;
        }

        .phase-info p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .phase-steps {
          padding: 1.5rem 2rem;
        }

        .step-card {
          padding: 1.25rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 8px;
          margin-bottom: 1rem;
        }

        .step-card:last-child {
          margin-bottom: 0;
        }

        .step-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .step-name {
          font-weight: 600;
          font-size: 1rem;
        }

        .step-detail {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: var(--text-muted);
          padding: 0.25rem 0.5rem;
          background: var(--border-light);
          border-radius: 4px;
        }

        .step-prompt {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-style: italic;
          padding-left: 1rem;
          border-left: 2px solid var(--border);
        }

        /* Overview */
        .overview-content {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .overview-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }

        .overview-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .overview-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .overview-list li {
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.9rem;
        }

        .overview-list li:last-child {
          border-bottom: none;
        }

        .overview-list-icon {
          font-size: 1.25rem;
        }

        /* Sources */
        .sources-box {
          margin-top: 1.5rem;
          padding: 1rem 1.25rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 8px;
        }

        .sources-title {
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text-muted);
        }

        .sources-list {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .flow-phases {
            grid-template-columns: 1fr;
          }

          .phase-header {
            flex-direction: column;
            text-align: center;
          }

          .step-header {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>

      <nav className="breadcrumb">
        <NavLink to="/labs">Labs</NavLink>
        <span>→</span>
        <span>Generative Methods</span>
      </nav>

      <header className="lesson-header">
        <div className="lesson-badge">📚 General Studies • Week 5</div>
        <h1 className="lesson-title">Generative Methods</h1>
        <p className="lesson-desc">
          A framework for moving from initial impulse to finished work. Three phases — Expand, Deepen, Structure — 
          guide you through the creative process while leaving room for iteration and external inspiration.
        </p>
      </header>

      {/* Interactive Flow Diagram */}
      <div className="flow-diagram">
        <div className="flow-title">The Generative Process</div>
        <div className="flow-container">
          <div className="flow-start">
            ✨ Initial Movement Impulse
          </div>
          
          <div className="flow-arrow">↓</div>
          
          <div className="flow-phases">
            <div 
              className={`flow-phase expand ${activePhase === 'expand' ? 'active' : ''}`}
              onClick={() => setActivePhase('expand')}
            >
              <div className="flow-phase-icon">🌱</div>
              <div className="flow-phase-title">Expand</div>
              <div className="flow-phase-sub">Micro → Meso Scale</div>
            </div>
            
            <div 
              className={`flow-phase deepen ${activePhase === 'deepen' ? 'active' : ''}`}
              onClick={() => setActivePhase('deepen')}
            >
              <div className="flow-phase-icon">🔍</div>
              <div className="flow-phase-title">Deepen</div>
              <div className="flow-phase-sub">DNA → Decisions</div>
            </div>
            
            <div 
              className={`flow-phase structure ${activePhase === 'structure' ? 'active' : ''}`}
              onClick={() => setActivePhase('structure')}
            >
              <div className="flow-phase-icon">🏗️</div>
              <div className="flow-phase-title">Structure</div>
              <div className="flow-phase-sub">Macro → Final Form</div>
            </div>
          </div>
          
          <div className="flow-arrow">↓ ↑</div>
          
          <div className="flow-iteration">
            <span className="flow-iteration-icon">🔄</span>
            <span><strong>Iteration Loop</strong> — External Inspiration (artifacts, sounds, spaces) + Collaborative Input (other bodies, responses)</span>
          </div>
        </div>
      </div>

      {/* Phase Detail or Overview */}
      {activePhase === 'overview' ? (
        <div className="overview-content">
          <h2 className="overview-title">How to Use This Framework</h2>
          <p className="overview-text">
            This isn't a linear recipe — it's a map. You might spend three sessions in Expand before touching Deepen. 
            You might jump to Structure and realize you need to go back. The iteration loop is always available: 
            bring in new inspiration, get feedback, let the work teach you what it needs.
          </p>
          <p className="overview-text">
            Click on any phase above to see the specific steps and prompts.
          </p>
          <ul className="overview-list">
            <li>
              <span className="overview-list-icon">🌱</span>
              <div><strong>Expand</strong> — Generate material. Don't judge, just make. From the smallest gesture to 30-second phrases.</div>
            </li>
            <li>
              <span className="overview-list-icon">🔍</span>
              <div><strong>Deepen</strong> — Refine and discover. What patterns emerge? What qualities define this work? Make decisions.</div>
            </li>
            <li>
              <span className="overview-list-icon">🏗️</span>
              <div><strong>Structure</strong> — Build toward form. Integrate phrases, add sound, iterate the full sequence, document.</div>
            </li>
          </ul>
          <div className="sources-box">
            <div className="sources-title">Sources & Influences</div>
            <div className="sources-list">
              Laban Movement Analysis • Viewpoints • Forsythe Improvisation Technologies • 
              Gaga Movement Language • Contact Improvisation • Embodiment Studio
            </div>
          </div>
        </div>
      ) : (
        <div className="phase-detail">
          <div className={`phase-header ${activePhase}`}>
            <span className="phase-icon">{phases[activePhase].icon}</span>
            <div className="phase-info">
              <h2>{phases[activePhase].title}</h2>
              <p>{phases[activePhase].desc}</p>
            </div>
          </div>
          <div className="phase-steps">
            {phases[activePhase].steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-header">
                  <span className="step-name">{step.name}</span>
                  <span className="step-detail">{step.detail}</span>
                </div>
                <p className="step-prompt">"{step.prompt}"</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Back to Overview */}
      {activePhase !== 'overview' && (
        <button 
          onClick={() => setActivePhase('overview')}
          style={{
            padding: '0.75rem 1.5rem',
            background: 'transparent',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)'
          }}
        >
          ← Back to Overview
        </button>
      )}
    </div>
  );
}
