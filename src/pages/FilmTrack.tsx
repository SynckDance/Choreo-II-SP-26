import { useState } from 'react';
import { filmProductionSections } from '../data/filmProduction';
import type { FilmProductionSection, ProductionTable } from '../data/filmProduction';

function GuideTable({ table }: { table: ProductionTable }) {
  return (
    <div className="guide-table-wrapper">
      <table className="guide-table">
        <thead>
          <tr>
            {table.headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

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

  .ft-hero {
    text-align: center;
    padding: 3rem 2rem;
    margin-bottom: 2rem;
    animation: ft-fadeInUp 0.6s ease-out;
  }

  .ft-hero-badge {
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
    animation: ft-float 3s ease-in-out infinite;
  }

  .ft-hero h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    margin-bottom: 0.5rem;
    background: linear-gradient(90deg, #A855F7, #FF6B6B, #4ECDC4, #A855F7);
    background-size: 300% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ft-gradient 8s ease infinite;
  }

  .ft-hero-subtitle {
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .ft-tabs { display: flex; flex-wrap: wrap; gap: 0.5rem; border-bottom: 3px solid #000; padding-bottom: 0.5rem; margin-bottom: 2rem; }
  .ft-tab {
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
  .ft-tab:hover { background: #f5f5f5; }
  .ft-tab.active { background: #000; color: #fff; }
  .ft-tab.active.violet { background: #A855F7; }
  .ft-tab.active.coral { background: #FF6B6B; color: #000; }
  .ft-tab.active.mint { background: #4ECDC4; color: #000; }
  .ft-tab.active.blue { background: #4D7CFF; }
  .ft-tab.active.yellow { background: #FFE066; color: #000; }
  .ft-tab.active.orange { background: #FF9F43; color: #000; }

  .ft-section { animation: ft-slideInRight 0.4s ease-out; }
  .ft-section-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
  .ft-section-icon {
    width: 48px; height: 48px;
    display: flex; align-items: center; justify-content: center;
    border: 3px solid #000; font-size: 1.5rem;
  }
  .ft-section-icon.violet { background: #A855F7; }
  .ft-section-icon.coral { background: #FF6B6B; }
  .ft-section-icon.mint { background: #4ECDC4; }
  .ft-section-icon.blue { background: #4D7CFF; }
  .ft-section-icon.yellow { background: #FFE066; }
  .ft-section-icon.orange { background: #FF9F43; }

  .ft-section-title { font-family: 'Syne', sans-serif; font-size: 1.75rem; font-weight: 700; }
  .ft-section-intro { font-size: 1rem; color: #444; max-width: 700px; margin-bottom: 2rem; line-height: 1.6; }

  .ft-pillars-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem; }
  .ft-pillar-card {
    background: #fff; border: 3px solid #000; padding: 2rem;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); cursor: pointer;
  }
  .ft-pillar-card:hover { transform: translate(-8px, -8px); box-shadow: 8px 8px 0 #000; }
  .ft-pillar-card.violet:hover { box-shadow: 8px 8px 0 #A855F7; }
  .ft-pillar-card.coral:hover { box-shadow: 8px 8px 0 #FF6B6B; }
  .ft-pillar-card.mint:hover { box-shadow: 8px 8px 0 #4ECDC4; }

  .ft-pillar-number { font-family: 'Syne', sans-serif; font-size: 3rem; font-weight: 800; line-height: 1; margin-bottom: 0.5rem; }
  .ft-pillar-card.violet .ft-pillar-number { color: #A855F7; }
  .ft-pillar-card.coral .ft-pillar-number { color: #FF6B6B; }
  .ft-pillar-card.mint .ft-pillar-number { color: #4ECDC4; }

  .ft-pillar-title { font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; }
  .ft-pillar-desc { font-size: 0.9rem; color: #666; line-height: 1.5; }

  .ft-cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem; }
  .ft-info-card {
    background: #fff; border: 3px solid #000; padding: 1.5rem;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .ft-info-card:hover { transform: translate(-6px, -6px); box-shadow: 6px 6px 0 #000; }
  .ft-info-card.violet:hover { box-shadow: 6px 6px 0 #A855F7; }
  .ft-info-card.coral:hover { box-shadow: 6px 6px 0 #FF6B6B; }
  .ft-info-card.mint:hover { box-shadow: 6px 6px 0 #4ECDC4; }
  .ft-info-card.blue:hover { box-shadow: 6px 6px 0 #4D7CFF; }
  .ft-info-card.yellow:hover { box-shadow: 6px 6px 0 #FFE066; }
  .ft-info-card.orange:hover { box-shadow: 6px 6px 0 #FF9F43; }

  .ft-card-header {
    display: flex; align-items: center; gap: 0.75rem;
    margin-bottom: 1rem; padding-bottom: 0.75rem; border-bottom: 2px solid #E8E8E8;
  }
  .ft-card-icon { font-size: 1.25rem; }
  .ft-card-title { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 700; }
  .ft-card-badge {
    font-family: 'Space Mono', monospace; font-size: 0.6rem; font-weight: 700;
    text-transform: uppercase; padding: 0.25rem 0.5rem; background: #000; color: #fff; margin-left: auto;
  }
  .ft-card-content { font-size: 0.9rem; color: #444; line-height: 1.6; }
  .ft-card-content ul { list-style: none; margin-top: 0.75rem; }
  .ft-card-content li { padding: 0.4rem 0; padding-left: 1.25rem; position: relative; }
  .ft-card-content li::before { content: "→"; position: absolute; left: 0; color: #999; }

  .ft-checklist { background: #fff; border: 3px solid #000; margin-bottom: 2rem; }
  .ft-checklist-header {
    background: #000; color: #fff; padding: 1rem 1.5rem;
    font-family: 'Syne', sans-serif; font-weight: 700;
    display: flex; align-items: center; gap: 0.75rem;
  }
  .ft-checklist-items { padding: 1rem 1.5rem; }
  .ft-checklist-item {
    display: flex; align-items: flex-start; gap: 0.75rem;
    padding: 0.75rem 0; border-bottom: 1px dashed #E8E8E8; font-size: 0.9rem;
  }
  .ft-checklist-item:last-child { border-bottom: none; }
  .ft-checkbox {
    width: 20px; height: 20px; border: 2px solid #000; flex-shrink: 0; margin-top: 2px;
    display: flex; align-items: center; justify-content: center; cursor: pointer;
  }
  .ft-checkbox:hover { background: #f5f5f5; }
  .ft-checkbox.checked { background: #4ECDC4; }
  .ft-checklist-text { flex: 1; }
  .ft-checklist-label { font-family: 'Space Mono', monospace; font-size: 0.65rem; text-transform: uppercase; color: #999; margin-top: 0.25rem; }

  .ft-workflow-timeline { display: flex; gap: 0; margin-bottom: 2rem; flex-wrap: wrap; }
  .ft-workflow-phase {
    flex: 1; min-width: 200px; background: #fff; border: 3px solid #000; border-right: none;
    padding: 1.5rem; cursor: pointer; transition: all 0.3s ease;
  }
  .ft-workflow-phase:last-child { border-right: 3px solid #000; }
  .ft-workflow-phase:hover { background: #f9f9f9; }
  .ft-workflow-phase.active { background: #000; color: #fff; }
  .ft-workflow-phase.active.coral { background: #FF6B6B; color: #000; }
  .ft-workflow-phase.active.mint { background: #4ECDC4; color: #000; }
  .ft-workflow-phase.active.blue { background: #4D7CFF; color: #fff; }
  .ft-phase-number { font-family: 'Space Mono', monospace; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem; }
  .ft-phase-title { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 700; }

  .ft-external-link {
    display: flex; align-items: center; gap: 1rem;
    background: #fff; border: 3px solid #000; padding: 1.25rem;
    text-decoration: none; color: inherit; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); margin-bottom: 1rem;
  }
  .ft-external-link:hover { transform: translate(-4px, -4px); box-shadow: 4px 4px 0 #A855F7; }
  .ft-external-icon {
    width: 48px; height: 48px; background: #A855F7; border: 2px solid #000;
    display: flex; align-items: center; justify-content: center; font-size: 1.5rem;
  }
  .ft-external-info { flex: 1; }
  .ft-external-title { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; margin-bottom: 0.25rem; }
  .ft-external-url { font-family: 'Space Mono', monospace; font-size: 0.7rem; color: #666; }

  .ft-callout {
    background: #fffbeb; border: 3px solid #FFE066; padding: 1.5rem; margin: 2rem 0;
    display: flex; gap: 1rem; align-items: flex-start;
  }
  .ft-callout.violet { border-color: #A855F7; background: #faf5ff; }
  .ft-callout.coral { border-color: #FF6B6B; background: #fff5f5; }
  .ft-callout.mint { border-color: #4ECDC4; background: #f0fdf9; }
  .ft-callout-icon { font-size: 1.5rem; }
  .ft-callout-content h4 { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; }
  .ft-callout-content p { font-size: 0.9rem; color: #666; line-height: 1.5; }

  .ft-subsection-header {
    font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700;
    margin: 2rem 0 1rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #E8E8E8;
    display: flex; align-items: center; gap: 0.5rem;
  }
  .ft-subsection-letter {
    width: 28px; height: 28px; background: #000; color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Space Mono', monospace; font-size: 0.8rem; font-weight: 700;
  }

  .ft-choice-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin: 1.5rem 0; }
  .ft-choice-card {
    background: #fff; border: 2px solid #E8E8E8; padding: 1rem; text-align: center;
    cursor: pointer; transition: all 0.2s ease;
  }
  .ft-choice-card:hover { border-color: #000; transform: translateY(-2px); }
  .ft-choice-card.selected { border-color: #000; border-width: 3px; background: #fffbeb; }
  .ft-choice-icon { font-size: 1.5rem; margin-bottom: 0.5rem; }
  .ft-choice-label { font-family: 'Space Mono', monospace; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; }

  .ft-template-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
  .ft-template-card {
    background: #fff; border: 3px solid #000; padding: 1.25rem;
    display: flex; align-items: center; gap: 1rem; cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .ft-template-card:hover { transform: translate(-4px, -4px); box-shadow: 4px 4px 0 #FF6B6B; }
  .ft-template-icon {
    width: 40px; height: 40px; border: 2px solid #000;
    display: flex; align-items: center; justify-content: center; font-size: 1.25rem;
  }
  .ft-template-info { flex: 1; }
  .ft-template-title { font-family: 'Syne', sans-serif; font-size: 0.95rem; font-weight: 700; margin-bottom: 0.25rem; }
  .ft-template-desc { font-family: 'Space Mono', monospace; font-size: 0.65rem; color: #666; text-transform: uppercase; }

  .ft-research-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
  .ft-research-card {
    background: #fff; border: 3px solid #000; overflow: hidden;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .ft-research-card:hover { transform: translate(-4px, -4px); box-shadow: 4px 4px 0 #A855F7; }
  .ft-research-thumb {
    height: 120px; background: linear-gradient(135deg, #A855F7 0%, #4D7CFF 100%);
    display: flex; align-items: center; justify-content: center; font-size: 3rem;
  }
  .ft-research-content { padding: 1rem; }
  .ft-research-title { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; }
  .ft-research-meta { font-family: 'Space Mono', monospace; font-size: 0.65rem; color: #666; text-transform: uppercase; }

  @keyframes ft-fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes ft-slideInRight { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
  @keyframes ft-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
  @keyframes ft-gradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }

  @media (max-width: 768px) {
    .film-track { padding: 1rem; }
    .ft-tabs { flex-direction: column; }
    .ft-tab { width: 100%; text-align: center; }
    .ft-workflow-timeline { flex-direction: column; }
    .ft-workflow-phase { border-right: 3px solid #000; }
  }

  /* Production Guide */
  .production-guide {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .guide-intro {
    padding: 24px 0 32px;
    border-bottom: 2px solid #000;
  }

  .guide-intro p {
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    color: #666;
    line-height: 1.7;
    max-width: 680px;
  }

  .guide-section {
    border-bottom: 1px solid #E8E8E8;
    padding: 32px 0;
  }

  .guide-section:last-child {
    border-bottom: none;
  }

  .guide-section-header {
    display: flex;
    align-items: baseline;
    gap: 16px;
    margin-bottom: 20px;
  }

  .guide-section-number {
    font-family: 'Space Mono', monospace;
    font-size: 13px;
    font-weight: 700;
    color: #A855F7;
    letter-spacing: 0.1em;
    flex-shrink: 0;
  }

  .guide-section-title {
    font-family: 'Syne', sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #000;
    margin: 0;
  }

  .guide-methodology {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;
  }

  .guide-paragraph {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    line-height: 1.75;
    color: #333333;
    margin: 0;
  }

  .guide-subsection {
    margin-top: 20px;
  }

  .guide-subsection-title {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #666;
    margin: 0 0 12px;
  }

  /* Table */
  .guide-table-wrapper {
    overflow-x: auto;
    border: 1px solid #E8E8E8;
    border-radius: 0;
  }

  .guide-table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
  }

  .guide-table th {
    background: #000;
    color: #fff;
    font-weight: 700;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 10px 14px;
    text-align: left;
    white-space: nowrap;
  }

  .guide-table td {
    padding: 10px 14px;
    color: #333333;
    border-bottom: 1px solid #E8E8E8;
    vertical-align: top;
    line-height: 1.5;
  }

  .guide-table tr:last-child td {
    border-bottom: none;
  }

  .guide-table tr:nth-child(even) td {
    background: #FAFAFA;
  }

  /* List */
  .guide-list {
    padding-left: 24px;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .guide-list li {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    line-height: 1.65;
    color: #333333;
  }

  /* Example */
  .guide-example-wrapper {
    margin-top: 8px;
  }

  .guide-example-toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px 16px;
    background: #FAFAFA;
    border: 1px solid #E8E8E8;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: #A855F7;
    text-align: left;
    transition: background 0.15s;
  }

  .guide-example-toggle:hover {
    background: #F0F0F0;
  }

  .guide-example-body {
    padding: 20px;
    background: #F8F4F1;
    border: 1px solid #E8DDD8;
    border-top: none;
  }

  .guide-example-line {
    font-family: 'Space Mono', monospace;
    font-size: 13px;
    line-height: 1.7;
    color: #2A2A2A;
    margin: 0;
    white-space: pre-wrap;
  }

  @media (max-width: 768px) {
    .guide-section-title {
      font-size: 18px;
    }
    .guide-table th,
    .guide-table td {
      font-size: 13px;
      padding: 8px 10px;
    }
  }
`;

const TABS = [
  { id: 'overview', label: '🎬 Overview', color: 'violet' },
  { id: 'workflow', label: '📋 Workflow', color: 'coral' },
  { id: 'technical', label: '🎥 Technical', color: 'mint' },
  { id: 'casting', label: '🎭 Casting', color: 'blue' },
  { id: 'research', label: '📚 Research', color: 'yellow' },
  { id: 'templates', label: '📄 Templates', color: 'orange' },
  { id: 'guide', label: '📖 Production Guide', color: 'violet' },
];

export default function FilmTrack() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activePhase, setActivePhase] = useState('pre');
  const [expandedExamples, setExpandedExamples] = useState<Set<string>>(new Set());

  const toggleExample = (id: string) => {
    setExpandedExamples(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <OverviewSection onNavigate={setActiveTab} />;
      case 'workflow': return <WorkflowSection activePhase={activePhase} setActivePhase={setActivePhase} />;
      case 'technical': return <TechnicalSection />;
      case 'casting': return <CastingSection />;
      case 'research': return <ResearchSection />;
      case 'templates': return <TemplatesSection />;
      case 'guide': return <ProductionGuideSection expandedExamples={expandedExamples} toggleExample={toggleExample} />;
      default: return <OverviewSection onNavigate={setActiveTab} />;
    }
  };

  return (
    <>
      <style>{styles}</style>
      <div className="film-track">
        <div className="ft-hero">
          <div className="ft-hero-badge">Film Track</div>
          <h1>Film Lab</h1>
          <p className="ft-hero-subtitle">
            Film is not "stage documentation." Film is its own choreographic language.
            Learn to choreograph framing, camera movement, editing, sound, and location.
          </p>
        </div>

        <div className="ft-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`ft-tab ${tab.color} ${activeTab === tab.id ? 'active' : ''}`}
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

function OverviewSection({ onNavigate }: { onNavigate: (tab: string) => void }) {
  return (
    <div className="ft-section">
      <div className="ft-section-header">
        <div className="ft-section-icon violet">🎬</div>
        <h2 className="ft-section-title">Film Track Overview</h2>
      </div>
      <p className="ft-section-intro">
        In this track, you will make dances for the camera. You will leave with a finished dance film
        and a documentation package that proves your process, decisions, collaborations, and growth.
      </p>

      <div className="ft-pillars-grid">
        <div className="ft-pillar-card violet" onClick={() => onNavigate('technical')}>
          <div className="ft-pillar-number">01</div>
          <div className="ft-pillar-title">Technical Craft</div>
          <div className="ft-pillar-desc">Camera, sound, lighting, editing, color. The tools that shape how movement reads on screen.</div>
        </div>
        <div className="ft-pillar-card coral" onClick={() => onNavigate('casting')}>
          <div className="ft-pillar-number">02</div>
          <div className="ft-pillar-title">Casting + Performance</div>
          <div className="ft-pillar-desc">Who performs, how they rehearse, how they deliver on screen. Stage presence and camera presence are not the same.</div>
        </div>
        <div className="ft-pillar-card mint" onClick={() => onNavigate('research')}>
          <div className="ft-pillar-number">03</div>
          <div className="ft-pillar-title">Research + Reference</div>
          <div className="ft-pillar-desc">Study existing dance films. Build your visual vocabulary using DanceFilmmaking.com.</div>
        </div>
      </div>

      <h3 className="ft-subsection-header"><span>📋</span> Film Workflow Pipeline</h3>
      <div className="ft-workflow-timeline">
        <div className="ft-workflow-phase coral" onClick={() => onNavigate('workflow')}>
          <div className="ft-phase-number">Phase 1</div>
          <div className="ft-phase-title">Pre-Production</div>
        </div>
        <div className="ft-workflow-phase" onClick={() => onNavigate('workflow')}>
          <div className="ft-phase-number">Phase 2</div>
          <div className="ft-phase-title">Production</div>
        </div>
        <div className="ft-workflow-phase" onClick={() => onNavigate('workflow')}>
          <div className="ft-phase-number">Phase 3</div>
          <div className="ft-phase-title">Post-Production</div>
        </div>
      </div>

      <a href="https://www.dancefilmmaking.com/" target="_blank" rel="noreferrer" className="ft-external-link">
        <div className="ft-external-icon">🎥</div>
        <div className="ft-external-info">
          <div className="ft-external-title">DanceFilmmaking.com</div>
          <div className="ft-external-url">Our main research library for dance film examples</div>
        </div>
      </a>

      <div className="ft-callout violet">
        <span className="ft-callout-icon">🎯</span>
        <div className="ft-callout-content">
          <h4>Your Final Deliverable</h4>
          <p>A finished dance film + a documentation package that proves your process, decisions, collaborations, and growth.</p>
        </div>
      </div>
    </div>
  );
}

function WorkflowSection({ activePhase, setActivePhase }: { activePhase: string; setActivePhase: (phase: string) => void }) {
  return (
    <div className="ft-section">
      <div className="ft-section-header">
        <div className="ft-section-icon coral">📋</div>
        <h2 className="ft-section-title">Film Workflow</h2>
      </div>
      <p className="ft-section-intro">
        This is the step-by-step pipeline. Film gets easier when your workflow is clean.
      </p>

      <div className="ft-workflow-timeline">
        <div className={`ft-workflow-phase coral ${activePhase === 'pre' ? 'active' : ''}`} onClick={() => setActivePhase('pre')}>
          <div className="ft-phase-number">Phase 1</div>
          <div className="ft-phase-title">Pre-Production</div>
        </div>
        <div className={`ft-workflow-phase mint ${activePhase === 'prod' ? 'active' : ''}`} onClick={() => setActivePhase('prod')}>
          <div className="ft-phase-number">Phase 2</div>
          <div className="ft-phase-title">Production</div>
        </div>
        <div className={`ft-workflow-phase blue ${activePhase === 'post' ? 'active' : ''}`} onClick={() => setActivePhase('post')}>
          <div className="ft-phase-number">Phase 3</div>
          <div className="ft-phase-title">Post-Production</div>
        </div>
      </div>

      {activePhase === 'pre' && <PreProductionContent />}
      {activePhase === 'prod' && <ProductionContent />}
      {activePhase === 'post' && <PostProductionContent />}
    </div>
  );
}

function PreProductionContent() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const toggleCheck = (id: string) => setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));

  const items = [
    { id: 'concept', text: 'Concept paragraph' },
    { id: 'structure', text: 'Film structure choice' },
    { id: 'words', text: 'Words or no words decision' },
    { id: 'location', text: 'Location plan (2 options)' },
    { id: 'storyboard', text: 'Storyboard or beat map' },
    { id: 'shotlist', text: 'Shot list' },
    { id: 'team', text: 'Team roles list' },
    { id: 'schedule', text: 'Production schedule' },
  ];

  return (
    <>
      <h3 className="ft-subsection-header"><div className="ft-subsection-letter">A</div> Concept and Intent</h3>
      <div className="ft-cards-grid">
        <div className="ft-info-card coral">
          <div className="ft-card-header">
            <span className="ft-card-icon">💭</span>
            <span className="ft-card-title">Core Questions</span>
          </div>
          <div className="ft-card-content">
            <ul>
              <li>What is the film about?</li>
              <li>What is the emotional temperature?</li>
              <li>What does the camera need to feel?</li>
              <li>What does the audience need to understand without explanation?</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="ft-subsection-header"><div className="ft-subsection-letter">B</div> Structure Choices</h3>
      <div className="ft-choice-grid">
        <div className="ft-choice-card"><div className="ft-choice-icon">✨</div><div className="ft-choice-label">Abstract / Poetic</div></div>
        <div className="ft-choice-card"><div className="ft-choice-icon">📖</div><div className="ft-choice-label">Narrative</div></div>
        <div className="ft-choice-card"><div className="ft-choice-icon">🎬</div><div className="ft-choice-label">Documentary</div></div>
        <div className="ft-choice-card"><div className="ft-choice-icon">🧪</div><div className="ft-choice-label">Experimental</div></div>
      </div>

      <h3 className="ft-subsection-header"><div className="ft-subsection-letter">C</div> Words or No Words</h3>
      <div className="ft-choice-grid">
        <div className="ft-choice-card selected"><div className="ft-choice-icon">🤫</div><div className="ft-choice-label">No Words</div></div>
        <div className="ft-choice-card"><div className="ft-choice-icon">🎙️</div><div className="ft-choice-label">Voiceover</div></div>
        <div className="ft-choice-card"><div className="ft-choice-icon">🗣️</div><div className="ft-choice-label">On-Screen Speech</div></div>
        <div className="ft-choice-card"><div className="ft-choice-icon">📝</div><div className="ft-choice-label">Text on Screen</div></div>
      </div>

      <div className="ft-callout coral">
        <span className="ft-callout-icon">⚠️</span>
        <div className="ft-callout-content">
          <h4>Rule for Words</h4>
          <p>If you use words, words must serve the dance. The dance cannot become background decoration.</p>
        </div>
      </div>

      <div className="ft-checklist">
        <div className="ft-checklist-header"><span>✓</span> Pre-Production Deliverables</div>
        <div className="ft-checklist-items">
          {items.map((item) => (
            <div className="ft-checklist-item" key={item.id}>
              <div className={`ft-checkbox ${checkedItems[item.id] ? 'checked' : ''}`} onClick={() => toggleCheck(item.id)}>
                {checkedItems[item.id] && '✓'}
              </div>
              <div className="ft-checklist-text">{item.text}</div>
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
      <div className="ft-callout mint">
        <span className="ft-callout-icon">🎯</span>
        <div className="ft-callout-content">
          <h4>Goal</h4>
          <p>Capture usable footage with intention, not endless footage with confusion.</p>
        </div>
      </div>

      <div className="ft-cards-grid">
        <div className="ft-info-card mint">
          <div className="ft-card-header"><span className="ft-card-icon">🎥</span><span className="ft-card-title">Camera Fundamentals</span></div>
          <div className="ft-card-content">
            <ul>
              <li>Resolution: shoot consistent quality</li>
              <li>Frame rate: based on movement needs</li>
              <li>Shutter: avoid flicker and blown highlights</li>
              <li>White balance: lock for consistency</li>
              <li>Stabilization: tripod/gimbal or handheld with intent</li>
            </ul>
          </div>
        </div>
        <div className="ft-info-card coral">
          <div className="ft-card-header"><span className="ft-card-icon">🖼️</span><span className="ft-card-title">Composition for Dance</span></div>
          <div className="ft-card-content">
            <ul>
              <li>Wide shots: phrase architecture</li>
              <li>Close shots: breath, sweat, tension</li>
              <li>Camera height changes power</li>
              <li>Clean background reads intentional</li>
            </ul>
          </div>
        </div>
        <div className="ft-info-card orange">
          <div className="ft-card-header"><span className="ft-card-icon">❤️</span><span className="ft-card-title">Dancer Safety</span><span className="ft-card-badge">Critical</span></div>
          <div className="ft-card-content">
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
      <div className="ft-callout">
        <span className="ft-callout-icon">🎯</span>
        <div className="ft-callout-content">
          <h4>Goal</h4>
          <p>Post-production is choreography. Editing is rhythm. Sound is world-building.</p>
        </div>
      </div>

      <div className="ft-cards-grid">
        <div className="ft-info-card blue">
          <div className="ft-card-header"><span className="ft-card-icon">✂️</span><span className="ft-card-title">Edit Workflow</span></div>
          <div className="ft-card-content">
            <ul>
              <li>Organize footage first</li>
              <li>Create rough cut (structure)</li>
              <li>Build rhythm and pacing</li>
              <li>Cut on breath, impact, stillness</li>
              <li>Picture lock: stop changing structure</li>
            </ul>
          </div>
        </div>
        <div className="ft-info-card violet">
          <div className="ft-card-header"><span className="ft-card-icon">🔊</span><span className="ft-card-title">Sound Design</span></div>
          <div className="ft-card-content">
            Choose a direction:
            <ul>
              <li>Music-driven cut</li>
              <li>Location sound-driven</li>
              <li>Sound design-driven (foley, textures)</li>
            </ul>
          </div>
        </div>
        <div className="ft-info-card coral">
          <div className="ft-card-header"><span className="ft-card-icon">🎨</span><span className="ft-card-title">Color</span></div>
          <div className="ft-card-content">
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
    <div className="ft-section">
      <div className="ft-section-header">
        <div className="ft-section-icon mint">🎥</div>
        <h2 className="ft-section-title">Technical Craft Toolkit</h2>
      </div>
      <p className="ft-section-intro">
        This page is not meant to overwhelm you. It is meant to give you a clear menu of technical decisions.
      </p>

      <div className="ft-cards-grid">
        <div className="ft-info-card mint">
          <div className="ft-card-header"><span className="ft-card-icon">📷</span><span className="ft-card-title">Camera + Capture</span></div>
          <div className="ft-card-content">
            <ul>
              <li>Camera types: phone, DSLR, mirrorless, cinema</li>
              <li>Lenses: wide, normal, telephoto</li>
              <li>Stabilization: tripod, gimbal, handheld, dolly</li>
              <li>Frame rates: normal vs slow motion</li>
              <li>Focus: auto vs manual</li>
            </ul>
          </div>
        </div>
        <div className="ft-info-card coral">
          <div className="ft-card-header"><span className="ft-card-icon">🏠</span><span className="ft-card-title">Location + Design</span></div>
          <div className="ft-card-content">
            Location is choreography. Walls, floors, texture all shape movement.
            <ul>
              <li>Props and objects</li>
              <li>Environment and space</li>
              <li>Wardrobe and color palette</li>
            </ul>
          </div>
        </div>
        <div className="ft-info-card yellow">
          <div className="ft-card-header"><span className="ft-card-icon">💡</span><span className="ft-card-title">Lighting Basics</span></div>
          <div className="ft-card-content">
            <ul>
              <li>Natural: golden hour, shade, direct sun</li>
              <li>Artificial: practical lamps, LED, studio</li>
              <li>Key, fill, back light</li>
              <li>Goal: dancers must be readable</li>
            </ul>
          </div>
        </div>
        <div className="ft-info-card blue">
          <div className="ft-card-header"><span className="ft-card-icon">🎤</span><span className="ft-card-title">Sound Capture</span></div>
          <div className="ft-card-content">
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
    <div className="ft-section">
      <div className="ft-section-header">
        <div className="ft-section-icon blue">🎭</div>
        <h2 className="ft-section-title">Casting + Performance</h2>
      </div>
      <p className="ft-section-intro">
        Stage presence and camera presence are not the same thing. Cast for the work, not just for friendship.
      </p>

      <div className="ft-cards-grid">
        <div className="ft-info-card blue">
          <div className="ft-card-header"><span className="ft-card-icon">❓</span><span className="ft-card-title">Casting Questions</span></div>
          <div className="ft-card-content">
            <ul>
              <li>Who carries the film?</li>
              <li>Virtuosity, softness, rawness, acting, stillness?</li>
              <li>Technical ability, emotional ability, or both?</li>
              <li>Do not cast only your friends</li>
            </ul>
          </div>
        </div>
        <div className="ft-info-card coral">
          <div className="ft-card-header"><span className="ft-card-icon">🎥</span><span className="ft-card-title">Rehearsal for Film</span></div>
          <div className="ft-card-content">
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

      <h3 className="ft-subsection-header"><div className="ft-subsection-letter">B</div> Audition Options</h3>
      <div className="ft-choice-grid">
        <div className="ft-choice-card"><div className="ft-choice-icon">📢</div><div className="ft-choice-label">Open Call</div></div>
        <div className="ft-choice-card"><div className="ft-choice-icon">✉️</div><div className="ft-choice-label">Invitation</div></div>
        <div className="ft-choice-card"><div className="ft-choice-icon">🎓</div><div className="ft-choice-label">Workshop</div></div>
        <div className="ft-choice-card selected"><div className="ft-choice-icon">📹</div><div className="ft-choice-label">Camera Test</div></div>
      </div>
    </div>
  );
}

function ResearchSection() {
  return (
    <div className="ft-section">
      <div className="ft-section-header">
        <div className="ft-section-icon yellow">📚</div>
        <h2 className="ft-section-title">Research Library</h2>
      </div>
      <p className="ft-section-intro">
        We use DanceFilmmaking.com as our main research library. Study existing dance films. Build your visual vocabulary.
      </p>

      <a href="https://www.dancefilmmaking.com/films" target="_blank" rel="noreferrer" className="ft-external-link">
        <div className="ft-external-icon">🎬</div>
        <div className="ft-external-info">
          <div className="ft-external-title">DanceFilmmaking.com Films</div>
          <div className="ft-external-url">Browse by category: award winning, narrative, low budget, under 10 min</div>
        </div>
      </a>

      <a href="https://www.dancefilmmaking.com/film/choreography-for-the-camera-%28free-lesson%29" target="_blank" rel="noreferrer" className="ft-external-link">
        <div className="ft-external-icon">🎓</div>
        <div className="ft-external-info">
          <div className="ft-external-title">Free Lesson: Choreography for the Camera</div>
          <div className="ft-external-url">dancefilmmaking.com</div>
        </div>
      </a>

      <div className="ft-info-card yellow" style={{ marginTop: '2rem' }}>
        <div className="ft-card-header">
          <span className="ft-card-icon">🎯</span>
          <span className="ft-card-title">Monthly Film Analysis</span>
          <span className="ft-card-badge">2 Films/Month</span>
        </div>
        <div className="ft-card-content">
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

      <h3 className="ft-subsection-header"><span>🎬</span> Categories to Explore</h3>
      <div className="ft-research-grid">
        {[
          { icon: '🏆', title: 'Award Winning', desc: 'Festival selections' },
          { icon: '📖', title: 'Narrative', desc: 'Story-driven' },
          { icon: '💰', title: 'Low Budget', desc: 'Constraints spark creativity' },
          { icon: '⏱️', title: 'Under 10 Minutes', desc: 'Short form' },
          { icon: '🌍', title: 'By Region', desc: 'Global perspectives' },
          { icon: '🧪', title: 'Experimental', desc: 'Pushing form' },
        ].map((cat) => (
          <div className="ft-research-card" key={cat.title}>
            <div className="ft-research-thumb">{cat.icon}</div>
            <div className="ft-research-content">
              <div className="ft-research-title">{cat.title}</div>
              <div className="ft-research-meta">{cat.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TemplatesSection() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const toggleCheck = (id: string) => setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));

  const packageItems = [
    { id: 'statement', text: 'Film statement (1 page)', label: 'What you made and why' },
    { id: 'preprod', text: 'Pre-production packet', label: 'Concept, storyboard, shot list, location, schedule' },
    { id: 'prodlog', text: 'Production log', label: 'What you captured, what changed, what you learned' },
    { id: 'postprod', text: 'Post-production notes', label: 'Edit, sound, color decisions' },
    { id: 'credits', text: 'Credits page', label: 'Full attribution' },
    { id: 'final', text: 'Final film file', label: 'Screening-ready export' },
    { id: 'metadata', text: 'Archival metadata', label: 'Title, date, runtime, cast, locations, roles' },
  ];

  return (
    <div className="ft-section">
      <div className="ft-section-header">
        <div className="ft-section-icon orange">📄</div>
        <h2 className="ft-section-title">Templates + Documentation</h2>
      </div>
      <p className="ft-section-intro">
        Download templates to guide your process. Submit your documentation package to prove your growth.
      </p>

      <h3 className="ft-subsection-header"><span>📋</span> Production Templates</h3>
      <div className="ft-template-grid">
        {[
          { icon: '📋', title: 'Storyboard Template', desc: 'Beat map + shot planning', color: '#FF6B6B' },
          { icon: '📝', title: 'Shot List Template', desc: 'Coverage + continuity', color: '#4ECDC4' },
          { icon: '📢', title: 'Casting Call Template', desc: 'Audition announcement', color: '#4D7CFF' },
          { icon: '📊', title: 'Camera Test Rubric', desc: 'Performer evaluation', color: '#A855F7' },
          { icon: '📓', title: 'Production Log', desc: 'Shoot day documentation', color: '#FFE066' },
          { icon: '✂️', title: 'Post-Production Notes', desc: 'Edit, sound, color', color: '#FF9F43' },
        ].map((t) => (
          <div className="ft-template-card" key={t.title}>
            <div className="ft-template-icon" style={{ background: t.color }}>{t.icon}</div>
            <div className="ft-template-info">
              <div className="ft-template-title">{t.title}</div>
              <div className="ft-template-desc">{t.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="ft-subsection-header"><span>📦</span> Final Documentation Package</h3>
      <div className="ft-checklist">
        <div className="ft-checklist-header"><span>✓</span> Required Components</div>
        <div className="ft-checklist-items">
          {packageItems.map((item) => (
            <div className="ft-checklist-item" key={item.id}>
              <div className={`ft-checkbox ${checkedItems[item.id] ? 'checked' : ''}`} onClick={() => toggleCheck(item.id)}>
                {checkedItems[item.id] && '✓'}
              </div>
              <div className="ft-checklist-text">
                {item.text}
                <div className="ft-checklist-label">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ft-callout violet">
        <span className="ft-callout-icon">🏆</span>
        <div className="ft-callout-content">
          <h4>Festival Readiness (Optional)</h4>
          <p>Create a trailer (15-30 sec), synopsis (50-150 words), director statement, correct file specs, and confirm music permissions.</p>
        </div>
      </div>
    </div>
  );
}

function ProductionGuideSection({ expandedExamples, toggleExample }: { expandedExamples: Set<string>; toggleExample: (id: string) => void }) {
  return (
    <div className="ft-section">
      <div className="ft-section-header">
        <div className="ft-section-icon violet">📖</div>
        <h2 className="ft-section-title">Production Guide</h2>
      </div>

      <div className="production-guide">
        <div className="guide-intro">
          <p>A complete reference for dance film production — from script diagram through final mix. Each section includes methodology and a worked example from the Ten Poem Project.</p>
        </div>

        {filmProductionSections.map((section: FilmProductionSection) => (
          <div key={section.number} className="guide-section">

            <div className="guide-section-header">
              <span className="guide-section-number">{section.number}</span>
              <h3 className="guide-section-title">{section.title}</h3>
            </div>

            <div className="guide-methodology">
              {section.methodology.paragraphs.map((p, i) => (
                <p key={i} className="guide-paragraph">{p}</p>
              ))}

              {section.methodology.subSections?.map((sub, si) => (
                <div key={si} className="guide-subsection">
                  <h4 className="guide-subsection-title">{sub.title}</h4>

                  {sub.table && <GuideTable table={sub.table} />}

                  {sub.list && (
                    <ol className="guide-list">
                      {sub.list.map((item, li) => (
                        <li key={li}>{item}</li>
                      ))}
                    </ol>
                  )}

                  {sub.paragraphs?.map((p, pi) => (
                    <p key={pi} className="guide-paragraph">{p}</p>
                  ))}
                </div>
              ))}
            </div>

            <div className="guide-example-wrapper">
              <button
                className="guide-example-toggle"
                onClick={() => toggleExample(section.number)}
              >
                <span>Example: {section.example.title}</span>
                <span>{expandedExamples.has(section.number) ? '▲' : '▼'}</span>
              </button>

              {expandedExamples.has(section.number) && (
                <div className="guide-example-body">
                  {section.example.lines.map((line, li) => (
                    line === ''
                      ? <br key={li} />
                      : <p key={li} className="guide-example-line">{line}</p>
                  ))}
                </div>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
