import React, { useState } from 'react';

// Film Track Pages for Choreography II Course Guidebook
// Design: Bold editorial, Syne/DM Sans/Space Mono, Coral/Mint/Blue/Yellow/Violet/Orange

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .film-track {
    font-family: 'DM Sans', sans-serif;
    background-color: #fff;
    background-image: 
      linear-gradient(#E8E8E8 1px, transparent 1px),
      linear-gradient(90deg, #E8E8E8 1px, transparent 1px);
    background-size: 48px 48px;
    min-height: 100vh;
    padding: 2rem;
    color: #000;
  }

  .hero {
    text-align: center;
    padding: 3rem 2rem;
    margin-bottom: 2rem;
    animation: fadeInUp 0.6s ease-out;
  }

  .hero-badge {
    display: inline-block;
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #fff;
    background: #000;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    animation: float 3s ease-in-out infinite;
  }

  .hero h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    margin-bottom: 0.5rem;
    background: linear-gradient(90deg, #A855F7, #FF6B6B, #4ECDC4, #A855F7);
    background-size: 300% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradient 8s ease infinite;
  }

  .hero-subtitle {
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .tabs { display: flex; flex-wrap: wrap; gap: 0.5rem; border-bottom: 3px solid #000; padding-bottom: 0.5rem; margin-bottom: 2rem; }
  .tab {
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.75rem 1rem;
    border: 2px solid #000;
    background: #fff;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .tab:hover { background: #f5f5f5; }
  .tab.active { background: #000; color: #fff; }
  .tab.active.violet { background: #A855F7; }
  .tab.active.coral { background: #FF6B6B; color: #000; }
  .tab.active.mint { background: #4ECDC4; color: #000; }
  .tab.active.blue { background: #4D7CFF; }
  .tab.active.yellow { background: #FFE066; color: #000; }
  .tab.active.orange { background: #FF9F43; color: #000; }

  .section { animation: slideInRight 0.4s ease-out; }
  .section-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
  .section-icon {
    width: 48px; height: 48px;
    display: flex; align-items: center; justify-content: center;
    border: 3px solid #000; font-size: 1.5rem;
  }
  .section-icon.violet { background: #A855F7; }
  .section-icon.coral { background: #FF6B6B; }
  .section-icon.mint { background: #4ECDC4; }
  .section-icon.blue { background: #4D7CFF; }
  .section-icon.yellow { background: #FFE066; }
  .section-icon.orange { background: #FF9F43; }

  .section-title { font-family: 'Syne', sans-serif; font-size: 1.75rem; font-weight: 700; }
  .section-intro { font-size: 1rem; color: #444; max-width: 700px; margin-bottom: 2rem; line-height: 1.6; }

  .pillars-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem; }
  .pillar-card {
    background: #fff; border: 3px solid #000; padding: 2rem;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); cursor: pointer;
  }
  .pillar-card:hover { transform: translate(-8px, -8px); box-shadow: 8px 8px 0 #000; }
  .pillar-card.violet:hover { box-shadow: 8px 8px 0 #A855F7; }
  .pillar-card.coral:hover { box-shadow: 8px 8px 0 #FF6B6B; }
  .pillar-card.mint:hover { box-shadow: 8px 8px 0 #4ECDC4; }

  .pillar-number { font-family: 'Syne', sans-serif; font-size: 3rem; font-weight: 800; line-height: 1; margin-bottom: 0.5rem; }
  .pillar-card.violet .pillar-number { color: #A855F7; }
  .pillar-card.coral .pillar-number { color: #FF6B6B; }
  .pillar-card.mint .pillar-number { color: #4ECDC4; }

  .pillar-title { font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; }
  .pillar-desc { font-size: 0.9rem; color: #666; line-height: 1.5; }

  .cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem; }
  .info-card {
    background: #fff; border: 3px solid #000; padding: 1.5rem;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .info-card:hover { transform: translate(-6px, -6px); box-shadow: 6px 6px 0 #000; }
  .info-card.violet:hover { box-shadow: 6px 6px 0 #A855F7; }
  .info-card.coral:hover { box-shadow: 6px 6px 0 #FF6B6B; }
  .info-card.mint:hover { box-shadow: 6px 6px 0 #4ECDC4; }
  .info-card.blue:hover { box-shadow: 6px 6px 0 #4D7CFF; }
  .info-card.yellow:hover { box-shadow: 6px 6px 0 #FFE066; }
  .info-card.orange:hover { box-shadow: 6px 6px 0 #FF9F43; }

  .card-header {
    display: flex; align-items: center; gap: 0.75rem;
    margin-bottom: 1rem; padding-bottom: 0.75rem; border-bottom: 2px solid #E8E8E8;
  }
  .card-icon { font-size: 1.25rem; }
  .card-title { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 700; }
  .card-badge {
    font-family: 'Space Mono', monospace; font-size: 0.6rem; font-weight: 700;
    text-transform: uppercase; padding: 0.25rem 0.5rem; background: #000; color: #fff; margin-left: auto;
  }
  .card-content { font-size: 0.9rem; color: #444; line-height: 1.6; }
  .card-content ul { list-style: none; margin-top: 0.75rem; }
  .card-content li { padding: 0.4rem 0; padding-left: 1.25rem; position: relative; }
  .card-content li::before { content: "→"; position: absolute; left: 0; color: #999; }

  .checklist { background: #fff; border: 3px solid #000; margin-bottom: 2rem; }
  .checklist-header {
    background: #000; color: #fff; padding: 1rem 1.5rem;
    font-family: 'Syne', sans-serif; font-weight: 700;
    display: flex; align-items: center; gap: 0.75rem;
  }
  .checklist-items { padding: 1rem 1.5rem; }
  .checklist-item {
    display: flex; align-items: flex-start; gap: 0.75rem;
    padding: 0.75rem 0; border-bottom: 1px dashed #E8E8E8; font-size: 0.9rem;
  }
  .checklist-item:last-child { border-bottom: none; }
  .checkbox {
    width: 20px; height: 20px; border: 2px solid #000; flex-shrink: 0; margin-top: 2px;
    display: flex; align-items: center; justify-content: center; cursor: pointer;
  }
  .checkbox:hover { background: #f5f5f5; }
  .checkbox.checked { background: #4ECDC4; }
  .checkbox.checked::after { content: "✓"; font-weight: 700; }
  .checklist-text { flex: 1; }
  .checklist-label { font-family: 'Space Mono', monospace; font-size: 0.65rem; text-transform: uppercase; color: #999; margin-top: 0.25rem; }

  .workflow-timeline { display: flex; gap: 0; margin-bottom: 2rem; flex-wrap: wrap; }
  .workflow-phase {
    flex: 1; min-width: 200px; background: #fff; border: 3px solid #000; border-right: none;
    padding: 1.5rem; cursor: pointer; transition: all 0.3s ease;
  }
  .workflow-phase:last-child { border-right: 3px solid #000; }
  .workflow-phase:hover { background: #f9f9f9; }
  .workflow-phase.active { background: #000; color: #fff; }
  .workflow-phase.active.coral { background: #FF6B6B; color: #000; }
  .workflow-phase.active.mint { background: #4ECDC4; color: #000; }
  .workflow-phase.active.blue { background: #4D7CFF; color: #fff; }
  .phase-number { font-family: 'Space Mono', monospace; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem; }
  .phase-title { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 700; }

  .external-link {
    display: flex; align-items: center; gap: 1rem;
    background: #fff; border: 3px solid #000; padding: 1.25rem;
    text-decoration: none; color: inherit; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); margin-bottom: 1rem;
  }
  .external-link:hover { transform: translate(-4px, -4px); box-shadow: 4px 4px 0 #A855F7; }
  .external-icon {
    width: 48px; height: 48px; background: #A855F7; border: 2px solid #000;
    display: flex; align-items: center; justify-content: center; font-size: 1.5rem;
  }
  .external-info { flex: 1; }
  .external-title { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; margin-bottom: 0.25rem; }
  .external-url { font-family: 'Space Mono', monospace; font-size: 0.7rem; color: #666; }

  .callout {
    background: #fffbeb; border: 3px solid #FFE066; padding: 1.5rem; margin: 2rem 0;
    display: flex; gap: 1rem; align-items: flex-start;
  }
  .callout.violet { border-color: #A855F7; background: #faf5ff; }
  .callout.coral { border-color: #FF6B6B; background: #fff5f5; }
  .callout-icon { font-size: 1.5rem; }
  .callout-content h4 { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; }
  .callout-content p { font-size: 0.9rem; color: #666; line-height: 1.5; }

  .subsection-header {
    font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700;
    margin: 2rem 0 1rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #E8E8E8;
    display: flex; align-items: center; gap: 0.5rem;
  }
  .subsection-letter {
    width: 28px; height: 28px; background: #000; color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Space Mono', monospace; font-size: 0.8rem; font-weight: 700;
  }

  .choice-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin: 1.5rem 0; }
  .choice-card {
    background: #fff; border: 2px solid #E8E8E8; padding: 1rem; text-align: center;
    cursor: pointer; transition: all 0.2s ease;
  }
  .choice-card:hover { border-color: #000; transform: translateY(-2px); }
  .choice-card.selected { border-color: #000; border-width: 3px; background: #fffbeb; }
  .choice-icon { font-size: 1.5rem; margin-bottom: 0.5rem; }
  .choice-label { font-family: 'Space Mono', monospace; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; }

  .template-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
  .template-card {
    background: #fff; border: 3px solid #000; padding: 1.25rem;
    display: flex; align-items: center; gap: 1rem; cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .template-card:hover { transform: translate(-4px, -4px); box-shadow: 4px 4px 0 #FF6B6B; }
  .template-icon {
    width: 40px; height: 40px; border: 2px solid #000;
    display: flex; align-items: center; justify-content: center; font-size: 1.25rem;
  }
  .template-info { flex: 1; }
  .template-title { font-family: 'Syne', sans-serif; font-size: 0.95rem; font-weight: 700; margin-bottom: 0.25rem; }
  .template-desc { font-family: 'Space Mono', monospace; font-size: 0.65rem; color: #666; text-transform: uppercase; }

  .research-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
  .research-card {
    background: #fff; border: 3px solid #000; overflow: hidden;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .research-card:hover { transform: translate(-4px, -4px); box-shadow: 4px 4px 0 #A855F7; }
  .research-thumb {
    height: 120px; background: linear-gradient(135deg, #A855F7 0%, #4D7CFF 100%);
    display: flex; align-items: center; justify-content: center; font-size: 3rem;
  }
  .research-content { padding: 1rem; }
  .research-title { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; }
  .research-meta { font-family: 'Space Mono', monospace; font-size: 0.65rem; color: #666; text-transform: uppercase; }

  @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes slideInRight { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
  @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
  @keyframes gradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }

  @media (max-width: 768px) {
    .film-track { padding: 1rem; }
    .tabs { flex-direction: column; }
    .tab { width: 100%; text-align: center; }
    .workflow-timeline { flex-direction: column; }
    .workflow-phase { border-right: 3px solid #000; }
  }
`;

const TABS = [
  { id: 'overview', label: '🎬 Overview', color: 'violet' },
  { id: 'workflow', label: '📋 Workflow', color: 'coral' },
  { id: 'technical', label: '🎥 Technical', color: 'mint' },
  { id: 'casting', label: '🎭 Casting', color: 'blue' },
  { id: 'research', label: '📚 Research', color: 'yellow' },
  { id: 'templates', label: '📄 Templates', color: 'orange' },
];

export default function FilmTrack() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activePhase, setActivePhase] = useState('pre');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <OverviewSection onNavigate={setActiveTab} />;
      case 'workflow': return <WorkflowSection activePhase={activePhase} setActivePhase={setActivePhase} />;
      case 'technical': return <TechnicalSection />;
      case 'casting': return <CastingSection />;
      case 'research': return <ResearchSection />;
      case 'templates': return <TemplatesSection />;
      default: return <OverviewSection onNavigate={setActiveTab} />;
    }
  };

  return (
    <>
      <style>{styles}</style>
      <div className="film-track">
        <div className="hero">
          <div className="hero-badge">Film Track</div>
          <h1>Film Lab</h1>
          <p className="hero-subtitle">
            Film is not "stage documentation." Film is its own choreographic language.
            Learn to choreograph framing, camera movement, editing, sound, and location.
          </p>
        </div>

        <div className="tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${tab.color} ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {renderContent()}
      </div>
    </>
  );
}

function OverviewSection({ onNavigate }) {
  return (
    <div className="section">
      <div className="section-header">
        <div className="section-icon violet">🎬</div>
        <h2 className="section-title">Film Track Overview</h2>
      </div>
      <p className="section-intro">
        In this track, you will make dances for the camera. You will leave with a finished dance film
        and a documentation package that proves your process, decisions, collaborations, and growth.
      </p>

      <div className="pillars-grid">
        <div className="pillar-card violet" onClick={() => onNavigate('technical')}>
          <div className="pillar-number">01</div>
          <div className="pillar-title">Technical Craft</div>
          <div className="pillar-desc">Camera, sound, lighting, editing, color. The tools that shape how movement reads on screen.</div>
        </div>
        <div className="pillar-card coral" onClick={() => onNavigate('casting')}>
          <div className="pillar-number">02</div>
          <div className="pillar-title">Casting + Performance</div>
          <div className="pillar-desc">Who performs, how they rehearse, how they deliver on screen. Stage presence and camera presence are not the same.</div>
        </div>
        <div className="pillar-card mint" onClick={() => onNavigate('research')}>
          <div className="pillar-number">03</div>
          <div className="pillar-title">Research + Reference</div>
          <div className="pillar-desc">Study existing dance films. Build your visual vocabulary using DanceFilmmaking.com.</div>
        </div>
      </div>

      <h3 className="subsection-header"><span>📋</span> Film Workflow Pipeline</h3>
      <div className="workflow-timeline">
        <div className="workflow-phase coral" onClick={() => onNavigate('workflow')}>
          <div className="phase-number">Phase 1</div>
          <div className="phase-title">Pre-Production</div>
        </div>
        <div className="workflow-phase" onClick={() => onNavigate('workflow')}>
          <div className="phase-number">Phase 2</div>
          <div className="phase-title">Production</div>
        </div>
        <div className="workflow-phase" onClick={() => onNavigate('workflow')}>
          <div className="phase-number">Phase 3</div>
          <div className="phase-title">Post-Production</div>
        </div>
      </div>

      <a href="https://www.dancefilmmaking.com/" target="_blank" rel="noreferrer" className="external-link">
        <div className="external-icon">🎥</div>
        <div className="external-info">
          <div className="external-title">DanceFilmmaking.com</div>
          <div className="external-url">Our main research library for dance film examples</div>
        </div>
      </a>

      <div className="callout violet">
        <span className="callout-icon">🎯</span>
        <div className="callout-content">
          <h4>Your Final Deliverable</h4>
          <p>A finished dance film + a documentation package that proves your process, decisions, collaborations, and growth.</p>
        </div>
      </div>
    </div>
  );
}

function WorkflowSection({ activePhase, setActivePhase }) {
  return (
    <div className="section">
      <div className="section-header">
        <div className="section-icon coral">📋</div>
        <h2 className="section-title">Film Workflow</h2>
      </div>
      <p className="section-intro">
        This is the step-by-step pipeline. Film gets easier when your workflow is clean.
      </p>

      <div className="workflow-timeline">
        <div className={`workflow-phase coral ${activePhase === 'pre' ? 'active' : ''}`} onClick={() => setActivePhase('pre')}>
          <div className="phase-number">Phase 1</div>
          <div className="phase-title">Pre-Production</div>
        </div>
        <div className={`workflow-phase mint ${activePhase === 'prod' ? 'active' : ''}`} onClick={() => setActivePhase('prod')}>
          <div className="phase-number">Phase 2</div>
          <div className="phase-title">Production</div>
        </div>
        <div className={`workflow-phase blue ${activePhase === 'post' ? 'active' : ''}`} onClick={() => setActivePhase('post')}>
          <div className="phase-number">Phase 3</div>
          <div className="phase-title">Post-Production</div>
        </div>
      </div>

      {activePhase === 'pre' && <PreProductionContent />}
      {activePhase === 'prod' && <ProductionContent />}
      {activePhase === 'post' && <PostProductionContent />}
    </div>
  );
}

function PreProductionContent() {
  const [checkedItems, setCheckedItems] = useState({});
  const toggleCheck = (id) => setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <>
      <h3 className="subsection-header"><div className="subsection-letter">A</div> Concept and Intent</h3>
      <div className="cards-grid">
        <div className="info-card coral">
          <div className="card-header">
            <span className="card-icon">💭</span>
            <span className="card-title">Core Questions</span>
          </div>
          <div className="card-content">
            <ul>
              <li>What is the film about?</li>
              <li>What is the emotional temperature?</li>
              <li>What does the camera need to feel?</li>
              <li>What does the audience need to understand without explanation?</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="subsection-header"><div className="subsection-letter">B</div> Structure Choices</h3>
      <div className="choice-grid">
        <div className="choice-card"><div className="choice-icon">✨</div><div className="choice-label">Abstract / Poetic</div></div>
        <div className="choice-card"><div className="choice-icon">📖</div><div className="choice-label">Narrative</div></div>
        <div className="choice-card"><div className="choice-icon">🎬</div><div className="choice-label">Documentary</div></div>
        <div className="choice-card"><div className="choice-icon">🧪</div><div className="choice-label">Experimental</div></div>
      </div>

      <h3 className="subsection-header"><div className="subsection-letter">C</div> Words or No Words</h3>
      <div className="choice-grid">
        <div className="choice-card selected"><div className="choice-icon">🤫</div><div className="choice-label">No Words</div></div>
        <div className="choice-card"><div className="choice-icon">🎙️</div><div className="choice-label">Voiceover</div></div>
        <div className="choice-card"><div className="choice-icon">🗣️</div><div className="choice-label">On-Screen Speech</div></div>
        <div className="choice-card"><div className="choice-icon">📝</div><div className="choice-label">Text on Screen</div></div>
      </div>

      <div className="callout coral">
        <span className="callout-icon">⚠️</span>
        <div className="callout-content">
          <h4>Rule for Words</h4>
          <p>If you use words, words must serve the dance. The dance cannot become background decoration.</p>
        </div>
      </div>

      <div className="checklist">
        <div className="checklist-header"><span>✓</span> Pre-Production Deliverables</div>
        <div className="checklist-items">
          {['concept', 'structure', 'words', 'location', 'storyboard', 'shotlist', 'team', 'schedule'].map((id, i) => (
            <div className="checklist-item" key={id}>
              <div className={`checkbox ${checkedItems[id] ? 'checked' : ''}`} onClick={() => toggleCheck(id)}></div>
              <div className="checklist-text">
                {['Concept paragraph', 'Film structure choice', 'Words or no words decision', 'Location plan (2 options)', 'Storyboard or beat map', 'Shot list', 'Team roles list', 'Production schedule'][i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function ProductionContent() {
  return (
    <>
      <div className="callout" style={{ borderColor: '#4ECDC4', background: '#f0fdf9' }}>
        <span className="callout-icon">🎯</span>
        <div className="callout-content">
          <h4>Goal</h4>
          <p>Capture usable footage with intention, not endless footage with confusion.</p>
        </div>
      </div>

      <div className="cards-grid">
        <div className="info-card mint">
          <div className="card-header"><span className="card-icon">🎥</span><span className="card-title">Camera Fundamentals</span></div>
          <div className="card-content">
            <ul>
              <li>Resolution: shoot consistent quality</li>
              <li>Frame rate: based on movement needs</li>
              <li>Shutter: avoid flicker and blown highlights</li>
              <li>White balance: lock for consistency</li>
              <li>Stabilization: tripod/gimbal or handheld with intent</li>
            </ul>
          </div>
        </div>
        <div className="info-card coral">
          <div className="card-header"><span className="card-icon">🖼️</span><span className="card-title">Composition for Dance</span></div>
          <div className="card-content">
            <ul>
              <li>Wide shots: phrase architecture</li>
              <li>Close shots: breath, sweat, tension</li>
              <li>Camera height changes power</li>
              <li>Clean background reads intentional</li>
            </ul>
          </div>
        </div>
        <div className="info-card orange">
          <div className="card-header"><span className="card-icon">❤️</span><span className="card-title">Dancer Safety</span><span className="card-badge">Critical</span></div>
          <div className="card-content">
            <ul>
              <li>Warm-up and cooldown</li>
              <li>Break schedule</li>
              <li>Floor safety</li>
              <li>Temperature and hydration</li>
              <li>Respect dancers as collaborators</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function PostProductionContent() {
  return (
    <>
      <div className="callout">
        <span className="callout-icon">🎯</span>
        <div className="callout-content">
          <h4>Goal</h4>
          <p>Post-production is choreography. Editing is rhythm. Sound is world-building.</p>
        </div>
      </div>

      <div className="cards-grid">
        <div className="info-card blue">
          <div className="card-header"><span className="card-icon">✂️</span><span className="card-title">Edit Workflow</span></div>
          <div className="card-content">
            <ul>
              <li>Organize footage first</li>
              <li>Create rough cut (structure)</li>
              <li>Build rhythm and pacing</li>
              <li>Cut on breath, impact, stillness</li>
              <li>Picture lock: stop changing structure</li>
            </ul>
          </div>
        </div>
        <div className="info-card violet">
          <div className="card-header"><span className="card-icon">🔊</span><span className="card-title">Sound Design</span></div>
          <div className="card-content">
            Choose a direction:
            <ul>
              <li>Music-driven cut</li>
              <li>Location sound-driven</li>
              <li>Sound design-driven (foley, textures)</li>
            </ul>
          </div>
        </div>
        <div className="info-card coral">
          <div className="card-header"><span className="card-icon">🎨</span><span className="card-title">Color</span></div>
          <div className="card-content">
            <ul>
              <li>Correct: exposure + white balance</li>
              <li>Grade: mood + style</li>
              <li>Keep skin tones believable</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function TechnicalSection() {
  return (
    <div className="section">
      <div className="section-header">
        <div className="section-icon mint">🎥</div>
        <h2 className="section-title">Technical Craft Toolkit</h2>
      </div>
      <p className="section-intro">
        This page is not meant to overwhelm you. It is meant to give you a clear menu of technical decisions.
      </p>

      <div className="cards-grid">
        <div className="info-card mint">
          <div className="card-header"><span className="card-icon">📷</span><span className="card-title">Camera + Capture</span></div>
          <div className="card-content">
            <ul>
              <li>Camera types: phone, DSLR, mirrorless, cinema</li>
              <li>Lenses: wide, normal, telephoto</li>
              <li>Stabilization: tripod, gimbal, handheld, dolly</li>
              <li>Frame rates: normal vs slow motion</li>
              <li>Focus: auto vs manual</li>
            </ul>
          </div>
        </div>
        <div className="info-card coral">
          <div className="card-header"><span className="card-icon">🏠</span><span className="card-title">Location + Design</span></div>
          <div className="card-content">
            Location is choreography. Walls, floors, texture all shape movement.
            <ul>
              <li>Props and objects</li>
              <li>Environment and space</li>
              <li>Wardrobe and color palette</li>
            </ul>
          </div>
        </div>
        <div className="info-card yellow">
          <div className="card-header"><span className="card-icon">💡</span><span className="card-title">Lighting Basics</span></div>
          <div className="card-content">
            <ul>
              <li>Natural: golden hour, shade, direct sun</li>
              <li>Artificial: practical lamps, LED, studio</li>
              <li>Key, fill, back light</li>
              <li>Goal: dancers must be readable</li>
            </ul>
          </div>
        </div>
        <div className="info-card blue">
          <div className="card-header"><span className="card-icon">🎤</span><span className="card-title">Sound Capture</span></div>
          <div className="card-content">
            Audio matters more than people think.
            <ul>
              <li>Capture clean audio</li>
              <li>Or plan sound design intentionally</li>
              <li>Room tone, footsteps, breath</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function CastingSection() {
  return (
    <div className="section">
      <div className="section-header">
        <div className="section-icon blue">🎭</div>
        <h2 className="section-title">Casting + Performance</h2>
      </div>
      <p className="section-intro">
        Stage presence and camera presence are not the same thing. Cast for the work, not just for friendship.
      </p>

      <div className="cards-grid">
        <div className="info-card blue">
          <div className="card-header"><span className="card-icon">❓</span><span className="card-title">Casting Questions</span></div>
          <div className="card-content">
            <ul>
              <li>Who carries the film?</li>
              <li>Virtuosity, softness, rawness, acting, stillness?</li>
              <li>Technical ability, emotional ability, or both?</li>
              <li>Do not cast only your friends</li>
            </ul>
          </div>
        </div>
        <div className="info-card coral">
          <div className="card-header"><span className="card-icon">🎥</span><span className="card-title">Rehearsal for Film</span></div>
          <div className="card-content">
            <ul>
              <li>Rehearse with camera early</li>
              <li>Rehearse transitions and re-takes</li>
              <li>Build endurance for multiple takes</li>
              <li>Practice "small performance" for close-ups</li>
              <li>Practice stillness</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="subsection-header"><div className="subsection-letter">B</div> Audition Options</h3>
      <div className="choice-grid">
        <div className="choice-card"><div className="choice-icon">📢</div><div className="choice-label">Open Call</div></div>
        <div className="choice-card"><div className="choice-icon">✉️</div><div className="choice-label">Invitation</div></div>
        <div className="choice-card"><div className="choice-icon">🎓</div><div className="choice-label">Workshop</div></div>
        <div className="choice-card selected"><div className="choice-icon">📹</div><div className="choice-label">Camera Test</div></div>
      </div>
    </div>
  );
}

function ResearchSection() {
  return (
    <div className="section">
      <div className="section-header">
        <div className="section-icon yellow">📚</div>
        <h2 className="section-title">Research Library</h2>
      </div>
      <p className="section-intro">
        We use DanceFilmmaking.com as our main research library. Study existing dance films. Build your visual vocabulary.
      </p>

      <a href="https://www.dancefilmmaking.com/films" target="_blank" rel="noreferrer" className="external-link">
        <div className="external-icon">🎬</div>
        <div className="external-info">
          <div className="external-title">DanceFilmmaking.com Films</div>
          <div className="external-url">Browse by category: award winning, narrative, low budget, under 10 min</div>
        </div>
      </a>

      <a href="https://www.dancefilmmaking.com/film/choreography-for-the-camera-%28free-lesson%29" target="_blank" rel="noreferrer" className="external-link">
        <div className="external-icon">🎓</div>
        <div className="external-info">
          <div className="external-title">Free Lesson: Choreography for the Camera</div>
          <div className="external-url">dancefilmmaking.com</div>
        </div>
      </a>

      <div className="info-card yellow" style={{ marginTop: '2rem' }}>
        <div className="card-header">
          <span className="card-icon">🎯</span>
          <span className="card-title">Monthly Film Analysis</span>
          <span className="card-badge">2 Films/Month</span>
        </div>
        <div className="card-content">
          Select 2 films per month. For each:
          <ul>
            <li>What is choreographed by the body?</li>
            <li>What is choreographed by the camera?</li>
            <li>What is choreographed by editing?</li>
            <li>What is the sound doing?</li>
            <li>What is the location doing?</li>
            <li>One thing I will borrow, one thing I refuse</li>
          </ul>
        </div>
      </div>

      <h3 className="subsection-header"><span>🎬</span> Categories to Explore</h3>
      <div className="research-grid">
        {[
          { icon: '🏆', title: 'Award Winning', desc: 'Festival selections' },
          { icon: '📖', title: 'Narrative', desc: 'Story-driven' },
          { icon: '💰', title: 'Low Budget', desc: 'Constraints spark creativity' },
          { icon: '⏱️', title: 'Under 10 Minutes', desc: 'Short form' },
          { icon: '🌍', title: 'By Region', desc: 'Global perspectives' },
          { icon: '🧪', title: 'Experimental', desc: 'Pushing form' },
        ].map((cat) => (
          <div className="research-card" key={cat.title}>
            <div className="research-thumb">{cat.icon}</div>
            <div className="research-content">
              <div className="research-title">{cat.title}</div>
              <div className="research-meta">{cat.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TemplatesSection() {
  return (
    <div className="section">
      <div className="section-header">
        <div className="section-icon orange">📄</div>
        <h2 className="section-title">Templates + Documentation</h2>
      </div>
      <p className="section-intro">
        Download templates to guide your process. Submit your documentation package to prove your growth.
      </p>

      <h3 className="subsection-header"><span>📋</span> Production Templates</h3>
      <div className="template-grid">
        {[
          { icon: '📋', title: 'Storyboard Template', desc: 'Beat map + shot planning', color: '#FF6B6B' },
          { icon: '📝', title: 'Shot List Template', desc: 'Coverage + continuity', color: '#4ECDC4' },
          { icon: '📢', title: 'Casting Call Template', desc: 'Audition announcement', color: '#4D7CFF' },
          { icon: '📊', title: 'Camera Test Rubric', desc: 'Performer evaluation', color: '#A855F7' },
          { icon: '📓', title: 'Production Log', desc: 'Shoot day documentation', color: '#FFE066' },
          { icon: '✂️', title: 'Post-Production Notes', desc: 'Edit, sound, color', color: '#FF9F43' },
        ].map((t) => (
          <div className="template-card" key={t.title}>
            <div className="template-icon" style={{ background: t.color }}>{t.icon}</div>
            <div className="template-info">
              <div className="template-title">{t.title}</div>
              <div className="template-desc">{t.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="subsection-header"><span>📦</span> Final Documentation Package</h3>
      <div className="checklist">
        <div className="checklist-header"><span>✓</span> Required Components</div>
        <div className="checklist-items">
          {[
            ['Film statement (1 page)', 'What you made and why'],
            ['Pre-production packet', 'Concept, storyboard, shot list, location, schedule'],
            ['Production log', 'What you captured, what changed, what you learned'],
            ['Post-production notes', 'Edit, sound, color decisions'],
            ['Credits page', 'Full attribution'],
            ['Final film file', 'Screening-ready export'],
            ['Archival metadata', 'Title, date, runtime, cast, locations, roles'],
          ].map(([text, label], i) => (
            <div className="checklist-item" key={i}>
              <div className="checkbox"></div>
              <div className="checklist-text">{text}<div className="checklist-label">{label}</div></div>
            </div>
          ))}
        </div>
      </div>

      <div className="callout violet">
        <span className="callout-icon">🏆</span>
        <div className="callout-content">
          <h4>Festival Readiness (Optional)</h4>
          <p>Create a trailer (15-30 sec), synopsis (50-150 words), director statement, correct file specs, and confirm music permissions.</p>
        </div>
      </div>
    </div>
  );
}
