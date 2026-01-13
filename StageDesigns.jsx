import React, { useState } from 'react';

// Stage Designs Page for Choreography II Course Guidebook
// B. Iden Payne Theatre Technical Infrastructure
// Design: Bold editorial, Syne/DM Sans/Space Mono, Coral/Mint/Blue/Yellow/Violet/Orange

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .stage-designs {
    font-family: 'DM Sans', sans-serif;
    background-color: #fff;
    background-image: 
      linear-gradient(#E8E8E8 1px, transparent 1px),
      linear-gradient(90deg, #E8E8E8 1px, transparent 1px);
    background-size: 48px 48px;
    min-height: 100vh;
    padding: 2rem;
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
    border-radius: 2px;
    margin-bottom: 1rem;
    animation: float 3s ease-in-out infinite;
  }

  .hero h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    color: #000;
    margin-bottom: 0.5rem;
    background: linear-gradient(90deg, #FF6B6B, #4ECDC4, #4D7CFF, #FF6B6B);
    background-size: 300% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradient 8s ease infinite;
  }

  .hero-subtitle {
    font-family: 'DM Sans', sans-serif;
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }

  .venue-name {
    font-family: 'Space Mono', monospace;
    font-size: 0.9rem;
    color: #000;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: #FFE066;
    display: inline-block;
    border: 2px solid #000;
  }

  /* Quick Stats Bar */
  .stats-bar {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1rem;
    margin-bottom: 3rem;
    animation: fadeInUp 0.6s ease-out 0.1s both;
  }

  .stat-card {
    background: #fff;
    border: 3px solid #000;
    padding: 1.25rem;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .stat-card:hover {
    transform: translate(-4px, -4px);
    box-shadow: 4px 4px 0 #000;
  }

  .stat-card.coral:hover { box-shadow: 4px 4px 0 #FF6B6B; }
  .stat-card.mint:hover { box-shadow: 4px 4px 0 #4ECDC4; }
  .stat-card.blue:hover { box-shadow: 4px 4px 0 #4D7CFF; }
  .stat-card.yellow:hover { box-shadow: 4px 4px 0 #FFE066; }
  .stat-card.violet:hover { box-shadow: 4px 4px 0 #A855F7; }
  .stat-card.orange:hover { box-shadow: 4px 4px 0 #FF9F43; }

  .stat-value {
    font-family: 'Syne', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    color: #000;
  }

  .stat-label {
    font-family: 'Space Mono', monospace;
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #666;
    margin-top: 0.25rem;
  }

  /* Section Tabs */
  .tabs-container {
    margin-bottom: 2rem;
    animation: fadeInUp 0.6s ease-out 0.2s both;
  }

  .tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    border-bottom: 3px solid #000;
    padding-bottom: 0.5rem;
  }

  .tab {
    font-family: 'Space Mono', monospace;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.75rem 1.25rem;
    border: 2px solid #000;
    background: #fff;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .tab:hover {
    background: #f5f5f5;
  }

  .tab.active {
    background: #000;
    color: #fff;
  }

  .tab.active.coral { background: #FF6B6B; color: #000; }
  .tab.active.mint { background: #4ECDC4; color: #000; }
  .tab.active.blue { background: #4D7CFF; color: #fff; }
  .tab.active.yellow { background: #FFE066; color: #000; }
  .tab.active.violet { background: #A855F7; color: #fff; }
  .tab.active.orange { background: #FF9F43; color: #000; }

  /* Content Sections */
  .section {
    animation: slideInRight 0.4s ease-out;
  }

  .section-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .section-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #000;
    font-size: 1.5rem;
  }

  .section-icon.coral { background: #FF6B6B; }
  .section-icon.mint { background: #4ECDC4; }
  .section-icon.blue { background: #4D7CFF; }
  .section-icon.yellow { background: #FFE066; }
  .section-icon.violet { background: #A855F7; }
  .section-icon.orange { background: #FF9F43; }

  .section-title {
    font-family: 'Syne', sans-serif;
    font-size: 1.75rem;
    font-weight: 700;
  }

  /* Info Cards */
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .info-card {
    background: #fff;
    border: 3px solid #000;
    padding: 1.5rem;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .info-card:hover {
    transform: translate(-6px, -6px);
    box-shadow: 6px 6px 0 #000;
  }

  .info-card.coral:hover { box-shadow: 6px 6px 0 #FF6B6B; }
  .info-card.mint:hover { box-shadow: 6px 6px 0 #4ECDC4; }
  .info-card.blue:hover { box-shadow: 6px 6px 0 #4D7CFF; }
  .info-card.yellow:hover { box-shadow: 6px 6px 0 #FFE066; }
  .info-card.violet:hover { box-shadow: 6px 6px 0 #A855F7; }
  .info-card.orange:hover { box-shadow: 6px 6px 0 #FF9F43; }

  .card-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid #E8E8E8;
  }

  .card-icon {
    font-size: 1.25rem;
  }

  .card-title {
    font-family: 'Syne', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
  }

  .card-badge {
    font-family: 'Space Mono', monospace;
    font-size: 0.6rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    background: #000;
    color: #fff;
    margin-left: auto;
  }

  .spec-list {
    list-style: none;
  }

  .spec-item {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px dashed #E8E8E8;
    font-size: 0.9rem;
  }

  .spec-item:last-child {
    border-bottom: none;
  }

  .spec-label {
    color: #666;
  }

  .spec-value {
    font-family: 'Space Mono', monospace;
    font-weight: 700;
    color: #000;
  }

  /* Data Tables */
  .data-table-wrapper {
    background: #fff;
    border: 3px solid #000;
    overflow: hidden;
    margin-bottom: 2rem;
  }

  .table-header {
    background: #000;
    color: #fff;
    padding: 1rem 1.5rem;
    font-family: 'Syne', sans-serif;
    font-weight: 700;
  }

  .data-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.85rem;
  }

  .data-table th {
    font-family: 'Space Mono', monospace;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: #f5f5f5;
    padding: 0.75rem 1rem;
    text-align: left;
    border-bottom: 2px solid #000;
  }

  .data-table td {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #E8E8E8;
  }

  .data-table tr:hover {
    background: #fffbeb;
  }

  .data-table .mono {
    font-family: 'Space Mono', monospace;
  }

  /* Document Links */
  .docs-section {
    margin-top: 3rem;
  }

  .docs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
  }

  .doc-card {
    background: #fff;
    border: 3px solid #000;
    padding: 1.25rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    text-decoration: none;
    color: inherit;
  }

  .doc-card:hover {
    transform: translate(-4px, -4px);
    box-shadow: 4px 4px 0 #FF6B6B;
  }

  .doc-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FF6B6B;
    border: 2px solid #000;
    font-size: 1.25rem;
    flex-shrink: 0;
  }

  .doc-info {
    flex: 1;
    min-width: 0;
  }

  .doc-title {
    font-family: 'Syne', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  .doc-meta {
    font-family: 'Space Mono', monospace;
    font-size: 0.65rem;
    color: #666;
    text-transform: uppercase;
  }

  .doc-arrow {
    font-size: 1.25rem;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
  }

  .doc-card:hover .doc-arrow {
    opacity: 1;
    transform: translateX(0);
  }

  /* Equipment Lists */
  .equipment-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.75rem;
  }

  .equipment-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: #fff;
    border: 2px solid #E8E8E8;
    font-size: 0.85rem;
  }

  .equipment-qty {
    font-family: 'Space Mono', monospace;
    font-weight: 700;
    background: #000;
    color: #fff;
    padding: 0.25rem 0.5rem;
    min-width: 40px;
    text-align: center;
  }

  .equipment-name {
    flex: 1;
  }

  /* Callout Box */
  .callout {
    background: #fffbeb;
    border: 3px solid #FFE066;
    padding: 1.5rem;
    margin: 2rem 0;
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }

  .callout-icon {
    font-size: 1.5rem;
  }

  .callout-content h4 {
    font-family: 'Syne', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .callout-content p {
    font-size: 0.9rem;
    color: #666;
    line-height: 1.5;
  }

  /* Animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* Responsive */
  @media (max-width: 768px) {
    .stage-designs {
      padding: 1rem;
    }
    
    .tabs {
      flex-direction: column;
    }
    
    .tab {
      width: 100%;
      text-align: center;
    }
    
    .cards-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const TABS = [
  { id: 'overview', label: 'Overview', color: 'coral', icon: '🎭' },
  { id: 'flying', label: 'Flying/Rigging', color: 'mint', icon: '⚙️' },
  { id: 'lighting', label: 'Lighting', color: 'yellow', icon: '💡' },
  { id: 'audio', label: 'Audio', color: 'blue', icon: '🔊' },
  { id: 'projections', label: 'Projections', color: 'violet', icon: '📽️' },
  { id: 'documents', label: 'Documents', color: 'orange', icon: '📄' },
];

const LINESET_DATA = [
  { line: 1, dist: '4"', use: 'Fire Curtain', notes: 'Does not travel' },
  { line: 2, dist: '1\'-3"', use: 'Main Curtain', notes: 'Guillotine only' },
  { line: 3, dist: '1\'-8"', use: 'Black Scrim', notes: '' },
  { line: 4, dist: '2\'-2"', use: 'Full Panel', notes: '' },
  { line: 5, dist: '2\'-8"', use: '', notes: '' },
  { line: 6, dist: '3\'-2"', use: 'LX1', notes: '' },
  { line: 7, dist: '3\'-8"', use: '', notes: '' },
  { line: 8, dist: '4\'-2"', use: 'Class Projection Screen', notes: '' },
  { line: 9, dist: '4\'-8"', use: 'Border', notes: '' },
  { line: 10, dist: '5\'-2"', use: 'Legs 16\' SR/SL', notes: '' },
  { line: 11, dist: '5\'-8"', use: 'LX2', notes: '' },
  { line: 12, dist: '6\'-2"', use: '', notes: '' },
  { line: 13, dist: '6\'-8"', use: 'Border', notes: '' },
  { line: 14, dist: '7\'-2"', use: 'Legs 16\' SR/SL', notes: '' },
  { line: 15, dist: '7\'-8"', use: 'LX3', notes: 'Blocked by lens' },
];

const LIGHTING_INVENTORY = [
  { qty: 22, name: 'HES SolaHyBeam 1000' },
  { qty: 12, name: 'HES SolaFrame 750' },
  { qty: 8, name: 'ETC Selador 11" Vivid-R LED' },
  { qty: 16, name: 'Chroma-Q Color One 100x' },
  { qty: 12, name: 'Chroma-Q Color Force 72"' },
  { qty: 38, name: 'ETC S4 Lustr Series 2' },
  { qty: 110, name: 'ETC S4 Conventional ERS' },
  { qty: 24, name: 'Source Four PAR' },
];

const AUDIO_SPEAKERS = [
  { qty: 2, name: 'd&b Y7P (Main L/R Upper)' },
  { qty: 4, name: 'd&b Y10P (Center + Main Lower)' },
  { qty: 4, name: 'd&b V-Sub (Subwoofers)' },
  { qty: 4, name: 'd&b M6 (Stage Monitors)' },
  { qty: 6, name: 'd&b E8 (Surrounds)' },
];

const DOCUMENTS = [
  { title: 'Technical Specifications', meta: 'Overview • 6 pages', category: 'overview' },
  { title: 'Construction Drawings', meta: 'Full Set • 27 sheets', category: 'construction' },
  { title: 'As-Built Drawings', meta: 'Reference • Multi-page', category: 'construction' },
  { title: 'Structural Evaluation', meta: 'Stage + Gridiron Capacity', category: 'structure' },
  { title: 'Lighting Section (FFD 2018)', meta: '56 Linesets • Trim Heights', category: 'lighting' },
  { title: 'Lighting Patch Panels', meta: 'Circuit Layout', category: 'lighting' },
  { title: 'Projections Plan View', meta: 'Throw Calculations', category: 'projections' },
  { title: 'Projections Section', meta: 'Barco + Panasonic Specs', category: 'projections' },
  { title: 'LED Wall Proposal', meta: '45\'-8" × 3⅜"', category: 'projections' },
  { title: 'Audio Signal Flow', meta: 'Rep System Block Diagram', category: 'audio' },
  { title: 'Audio Rack Elevations', meta: 'Amp/FOH/RF/IEM Racks', category: 'audio' },
  { title: 'Audio Panel Details', meta: 'Types A-G + Patch Panels', category: 'audio' },
  { title: 'Audio Conduit Pathway', meta: 'Stage to Booth Routing', category: 'audio' },
  { title: 'PE Markups', meta: 'Power + Audio Plans', category: 'electrical' },
  { title: 'Equipment List', meta: 'Full Inventory', category: 'overview' },
];

export default function StageDesigns() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewSection />;
      case 'flying':
        return <FlyingSection />;
      case 'lighting':
        return <LightingSection />;
      case 'audio':
        return <AudioSection />;
      case 'projections':
        return <ProjectionsSection />;
      case 'documents':
        return <DocumentsSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <>
      <style>{styles}</style>
      <div className="stage-designs">
        {/* Hero */}
        <div className="hero">
          <div className="hero-badge">Stage Track</div>
          <h1>Stage Designs</h1>
          <p className="hero-subtitle">
            Technical infrastructure documentation for your stage production. 
            Know your venue. Plan your design. Execute with precision.
          </p>
          <div className="venue-name">B. IDEN PAYNE THEATRE</div>
        </div>

        {/* Quick Stats */}
        <div className="stats-bar">
          <div className="stat-card coral">
            <div className="stat-value">466</div>
            <div className="stat-label">Seats</div>
          </div>
          <div className="stat-card mint">
            <div className="stat-value">32'-6"</div>
            <div className="stat-label">Proscenium W</div>
          </div>
          <div className="stat-card blue">
            <div className="stat-value">71'</div>
            <div className="stat-label">Grid Height</div>
          </div>
          <div className="stat-card yellow">
            <div className="stat-value">56</div>
            <div className="stat-label">Linesets</div>
          </div>
          <div className="stat-card violet">
            <div className="stat-value">208</div>
            <div className="stat-label">Dimmers</div>
          </div>
          <div className="stat-card orange">
            <div className="stat-value">64ch</div>
            <div className="stat-label">Audio Inputs</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs-container">
          <div className="tabs">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                className={`tab ${tab.color} ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {renderContent()}
      </div>
    </>
  );
}

function OverviewSection() {
  return (
    <div className="section">
      <div className="section-header">
        <div className="section-icon coral">🎭</div>
        <h2 className="section-title">Theatre Overview</h2>
      </div>

      <div className="cards-grid">
        <div className="info-card coral">
          <div className="card-header">
            <span className="card-icon">📐</span>
            <span className="card-title">Stage Dimensions</span>
          </div>
          <ul className="spec-list">
            <li className="spec-item">
              <span className="spec-label">Proscenium</span>
              <span className="spec-value">32'-6" × 19'-9"</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Plaster to Back Wall</span>
              <span className="spec-value">36'-0"</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Apron Depth</span>
              <span className="spec-value">4'-6"</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Wing SR</span>
              <span className="spec-value">12'-0"</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Wing SL</span>
              <span className="spec-value">45'-0"</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Catwalk Clearance</span>
              <span className="spec-value">24'-0"</span>
            </li>
          </ul>
        </div>

        <div className="info-card mint">
          <div className="card-header">
            <span className="card-icon">🪑</span>
            <span className="card-title">House</span>
          </div>
          <ul className="spec-list">
            <li className="spec-item">
              <span className="spec-label">Total Capacity</span>
              <span className="spec-value">466 seats</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">With Control Platform</span>
              <span className="spec-value">403 seats</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Wheelchair Seats</span>
              <span className="spec-value">8</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Apron to First Seat</span>
              <span className="spec-value">8'-6"</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Apron to Last Seat</span>
              <span className="spec-value">63'-0"</span>
            </li>
          </ul>
        </div>

        <div className="info-card blue">
          <div className="card-header">
            <span className="card-icon">🎹</span>
            <span className="card-title">Orchestra Pit</span>
          </div>
          <ul className="spec-list">
            <li className="spec-item">
              <span className="spec-label">Configuration</span>
              <span className="spec-value">3 Sections (Hydraulic)</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Outer Sections</span>
              <span className="spec-value">12'-25" × 5'-10"</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Center Section</span>
              <span className="spec-value">15' × 5'-10"</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Shelf Level</span>
              <span className="spec-value">-9' (below stage)</span>
            </li>
          </ul>
        </div>

        <div className="info-card yellow">
          <div className="card-header">
            <span className="card-icon">🚚</span>
            <span className="card-title">Load-In</span>
          </div>
          <ul className="spec-list">
            <li className="spec-item">
              <span className="spec-label">Dock Height</span>
              <span className="spec-value">33" above ground</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Door Size</span>
              <span className="spec-value">10' × 11'</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Distance to Stage</span>
              <span className="spec-value">50'</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="callout">
        <span className="callout-icon">⚠️</span>
        <div className="callout-content">
          <h4>Coordination Required</h4>
          <p>
            Consult the Director of Fabrication and Academic Production or assigned Technical Director 
            for ALL hanging needs. Equipment availability is subject to academic needs of the 
            Lighting Faculty and Arts and Entertainment Technology Department.
          </p>
        </div>
      </div>
    </div>
  );
}

function FlyingSection() {
  return (
    <div className="section">
      <div className="section-header">
        <div className="section-icon mint">⚙️</div>
        <h2 className="section-title">Flying and Rigging</h2>
      </div>

      <div className="cards-grid">
        <div className="info-card mint">
          <div className="card-header">
            <span className="card-icon">🎪</span>
            <span className="card-title">Fly System</span>
            <span className="card-badge">Single Purchase</span>
          </div>
          <ul className="spec-list">
            <li className="spec-item">
              <span className="spec-label">Type</span>
              <span className="spec-value">Counterweight</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Batten Capacity</span>
              <span className="spec-value">800 lbs + pipe</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Grid Height</span>
              <span className="spec-value">71'-0"</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Batten Travel (In)</span>
              <span className="spec-value">2'-10"</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Batten Travel (Out)</span>
              <span className="spec-value">69'-0"</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Batten Length</span>
              <span className="spec-value">40'-0"</span>
            </li>
          </ul>
        </div>

        <div className="info-card coral">
          <div className="card-header">
            <span className="card-icon">📍</span>
            <span className="card-title">Lineset Positions</span>
          </div>
          <ul className="spec-list">
            <li className="spec-item">
              <span className="spec-label">First Line from Plaster</span>
              <span className="spec-value">1'-8"</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Last Line from Plaster</span>
              <span className="spec-value">30'-8"</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Cyc Pipe (Motorized)</span>
              <span className="spec-value">31'-6" from plaster</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Total Linesets</span>
              <span className="spec-value">56</span>
            </li>
          </ul>
        </div>

        <div className="info-card blue">
          <div className="card-header">
            <span className="card-icon">🔌</span>
            <span className="card-title">Motorized Equipment</span>
          </div>
          <ul className="spec-list">
            <li className="spec-item">
              <span className="spec-label">Curved Cyc Pipe</span>
              <span className="spec-value">Motorized</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Light Ladders</span>
              <span className="spec-value">SR + SL Motorized</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Rep Lighting Truss</span>
              <span className="spec-value">3 × 40' Motorized</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Juliet Truss</span>
              <span className="spec-value">2 Chain Motors</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="data-table-wrapper">
        <div className="table-header">Rep Lineset Schedule (Lines 1-15)</div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Line #</th>
              <th>Distance US of PL</th>
              <th>Use / Rep Hang</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {LINESET_DATA.map((row) => (
              <tr key={row.line}>
                <td className="mono">{row.line}</td>
                <td className="mono">{row.dist}</td>
                <td>{row.use || '—'}</td>
                <td style={{ color: '#666', fontStyle: row.notes ? 'italic' : 'normal' }}>
                  {row.notes || '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LightingSection() {
  return (
    <div className="section">
      <div className="section-header">
        <div className="section-icon yellow">💡</div>
        <h2 className="section-title">Lighting</h2>
      </div>

      <div className="cards-grid">
        <div className="info-card yellow">
          <div className="card-header">
            <span className="card-icon">🎛️</span>
            <span className="card-title">Control</span>
          </div>
          <ul className="spec-list">
            <li className="spec-item">
              <span className="spec-label">Main Console</span>
              <span className="spec-value">ETC ION XE</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">DMX Outputs</span>
              <span className="spec-value">2048</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Moving Light Console</span>
              <span className="spec-value">HES Full Boar 4</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">2.4KW Dimmers</span>
              <span className="spec-value">208</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Constant Circuits</span>
              <span className="spec-value">62</span>
            </li>
          </ul>
        </div>

        <div className="info-card coral">
          <div className="card-header">
            <span className="card-icon">📍</span>
            <span className="card-title">FOH Positions</span>
          </div>
          <ul className="spec-list">
            <li className="spec-item">
              <span className="spec-label">1st Beam</span>
              <span className="spec-value">20 circuits</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">2nd Beam</span>
              <span className="spec-value">20 circuits</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">3rd Beam</span>
              <span className="spec-value">20 circuits</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Side Slots (×3)</span>
              <span className="spec-value">6 circuits each</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Proscenium/Juliet</span>
              <span className="spec-value">4 circuits</span>
            </li>
            <li className="spec-item">
              <span className="spec-label">Light Booth</span>
              <span className="spec-value">4 circuits</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="data-table-wrapper">
        <div className="table-header">Lighting Inventory</div>
        <div style={{ padding: '1.5rem' }}>
          <div className="equipment-grid">
            {LIGHTING_INVENTORY.map((item, i) => (
              <div className="equipment-item" key={i}>
                <span className="equipment-qty">{item.qty}</span>
                <span className="equipment-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cards-grid" style={{ marginTop: '1.5rem' }}>
        <div className="info-card blue">
          <div className="card-header">
            <span className="card-icon">🔍</span>
            <span className="card-title">ERS Lens Tubes</span>
          </div>
          <ul className="spec-list">
            <li className="spec-item"><span className="spec-label">10°</span><span className="spec-value">12</span></li>
            <li className="spec-item"><span className="spec-label">19°</span><span className="spec-value">20</span></li>
            <li className="spec-item"><span className="spec-label">26°</span><span className="spec-value">50</span></li>
            <li className="spec-item"><span className="spec-label">36°</span><span className="spec-value">56</span></li>
            <li className="spec-item"><span className="spec-label">50°</span><span className="spec-value">20</span></li>
          </ul>
        </div>

        <div className="info-card mint">
          <div className="card-header">
            <span className="card-icon">⚡</span>
            <span className="card-title">Trim Heights (Rep)</span>
          </div>
          <ul className="spec-list">
            <li className="spec-item"><span className="spec-label">Electrics</span><span className="spec-value">24'</span></li>
            <li className="spec-item"><span className="spec-label">AP Pipe</span><span className="spec-value">23'</span></li>
            <li className="spec-item"><span className="spec-label">Borders (most)</span><span className="spec-value">28'-6"</span></li>
            <li className="spec-item"><span className="spec-label">Border LS2</span><span className="spec-value">27'-9"</span></li>
            <li className="spec-item"><span className="spec-label">Border LS36</span><span className="spec-value">30'-7"</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function AudioSection() {
  return (
    <div className="section">
      <div className="section-header">
        <div className="section-icon blue">🔊</div>
        <h2 className="section-title">Audio</h2>
      </div>

      <div className="cards-grid">
        <div className="info-card blue">
          <div className="card-header">
            <span className="card-icon">🎛️</span>
            <span className="card-title">Console</span>
            <span className="card-badge">Yamaha CL3</span>
          </div>
          <ul className="spec-list">
            <li className="spec-item"><span className="spec-label">Digital Inputs</span><span className="spec-value">64</span></li>
            <li className="spec-item"><span className="spec-label">Analog Inputs</span><span className="spec-value">8</span></li>
            <li className="spec-item"><span className="spec-label">Mixes</span><span className="spec-value">24</span></li>
            <li className="spec-item"><span className="spec-label">Matrix Outputs</span><span className="spec-value">8</span></li>
            <li className="spec-item"><span className="spec-label">Analog Outputs</span><span className="spec-value">8</span></li>
            <li className="spec-item"><span className="spec-label">Network</span><span className="spec-value">Dante</span></li>
          </ul>
        </div>

        <div className="info-card coral">
          <div className="card-header">
            <span className="card-icon">🎤</span>
            <span className="card-title">Wireless</span>
            <span className="card-badge">Shure ULXD</span>
          </div>
          <ul className="spec-list">
            <li className="spec-item"><span className="spec-label">Quad Receivers</span><span className="spec-value">2 × ULXD4Q</span></li>
            <li className="spec-item"><span className="spec-label">Bodypack Mics</span><span className="spec-value">8 × ULXD1</span></li>
            <li className="spec-item"><span className="spec-label">Handheld (B58)</span><span className="spec-value">2 × ULXD/B58</span></li>
            <li className="spec-item"><span className="spec-label">Handheld (SM58)</span><span className="spec-value">2 × ULXD2/SM58</span></li>
            <li className="spec-item"><span className="spec-label">IEM Systems</span><span className="spec-value">4 × PSM 900</span></li>
          </ul>
        </div>

        <div className="info-card mint">
          <div className="card-header">
            <span className="card-icon">💻</span>
            <span className="card-title">Playback + Network</span>
          </div>
          <ul className="spec-list">
            <li className="spec-item"><span className="spec-label">Software</span><span className="spec-value">QLab 4</span></li>
            <li className="spec-item"><span className="spec-label">Stage Box</span><span className="spec-value">Yamaha RIO 1608</span></li>
            <li className="spec-item"><span className="spec-label">Dante Converters</span><span className="spec-value">2 × Rednet D16</span></li>
            <li className="spec-item"><span className="spec-label">Network Switch</span><span className="spec-value">Cisco SG350-48P</span></li>
          </ul>
        </div>
      </div>

      <div className="data-table-wrapper">
        <div className="table-header">d&b Audiotechnik PA System</div>
        <div style={{ padding: '1.5rem' }}>
          <div className="equipment-grid">
            {AUDIO_SPEAKERS.map((item, i) => (
              <div className="equipment-item" key={i}>
                <span className="equipment-qty">{item.qty}</span>
                <span className="equipment-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cards-grid" style={{ marginTop: '1.5rem' }}>
        <div className="info-card yellow">
          <div className="card-header">
            <span className="card-icon">🔌</span>
            <span className="card-title">Amplification</span>
          </div>
          <ul className="spec-list">
            <li className="spec-item"><span className="spec-label">d&b 30D</span><span className="spec-value">3 units</span></li>
            <li className="spec-item"><span className="spec-label">d&b 10D</span><span className="spec-value">2 units</span></li>
            <li className="spec-item"><span className="spec-label">House QSC</span><span className="spec-value">1 unit</span></li>
          </ul>
        </div>

        <div className="info-card violet">
          <div className="card-header">
            <span className="card-icon">📍</span>
            <span className="card-title">Panel Locations</span>
          </div>
          <ul className="spec-list">
            <li className="spec-item"><span className="spec-label">Stage</span><span className="spec-value">DSR, DSL, USR, USL, Pit</span></li>
            <li className="spec-item"><span className="spec-label">Catwalk</span><span className="spec-value">Juliet HL, Juliet HR</span></li>
            <li className="spec-item"><span className="spec-label">Proscenium</span><span className="spec-value">HL, HC, HR</span></li>
            <li className="spec-item"><span className="spec-label">FOH</span><span className="spec-value">Mix Position, Booth</span></li>
          </ul>
        </div>
      </div>

      <div className="callout">
        <span className="callout-icon">📏</span>
        <div className="callout-content">
          <h4>Conduit Pathway Limit</h4>
          <p>
            Maximum conduit pathway from stage to booth or floor box to booth: 225 feet. 
            Plan cable runs accordingly.
          </p>
        </div>
      </div>
    </div>
  );
}

function ProjectionsSection() {
  return (
    <div className="section">
      <div className="section-header">
        <div className="section-icon violet">📽️</div>
        <h2 className="section-title">Projections</h2>
      </div>

      <div className="cards-grid">
        <div className="info-card violet">
          <div className="card-header">
            <span className="card-icon">🎬</span>
            <span className="card-title">Barco HDX-W20 FLEX</span>
            <span className="card-badge">Booth</span>
          </div>
          <ul className="spec-list">
            <li className="spec-item"><span className="spec-label">Lumens</span><span className="spec-value">20,000</span></li>
            <li className="spec-item"><span className="spec-label">Aspect Ratio</span><span className="spec-value">16:10</span></li>
            <li className="spec-item"><span className="spec-label">Lens</span><span className="spec-value">R9862020 TLD+</span></li>
            <li className="spec-item"><span className="spec-label">Throw Ratio</span><span className="spec-value">1.8-2.6:1</span></li>
            <li className="spec-item"><span className="spec-label">Throw Distance</span><span className="spec-value">22'-6¼" @ 9°</span></li>
          </ul>
        </div>

        <div className="info-card coral">
          <div className="card-header">
            <span className="card-icon">🎬</span>
            <span className="card-title">Panasonic PT-RZ12K</span>
            <span className="card-badge">Flying</span>
          </div>
          <ul className="spec-list">
            <li className="spec-item"><span className="spec-label">Lumens</span><span className="spec-value">12,000</span></li>
            <li className="spec-item"><span className="spec-label">Technology</span><span className="spec-value">DLP</span></li>
            <li className="spec-item"><span className="spec-label">Resolution</span><span className="spec-value">1920 × 1200</span></li>
            <li className="spec-item"><span className="spec-label">Aspect Ratio</span><span className="spec-value">16:10</span></li>
            <li className="spec-item"><span className="spec-label">Lens</span><span className="spec-value">ET-D75LE95</span></li>
            <li className="spec-item"><span className="spec-label">Throw Ratio</span><span className="spec-value">0.36:1 (UST)</span></li>
          </ul>
        </div>

        <div className="info-card mint">
          <div className="card-header">
            <span className="card-icon">🖥️</span>
            <span className="card-title">Surfaces</span>
          </div>
          <ul className="spec-list">
            <li className="spec-item"><span className="spec-label">RP Screen</span><span className="spec-value">Lineset 50</span></li>
            <li className="spec-item"><span className="spec-label">White Scrim</span><span className="spec-value">Lineset 15</span></li>
            <li className="spec-item"><span className="spec-label">Black Scrim</span><span className="spec-value">Lineset 49</span></li>
            <li className="spec-item"><span className="spec-label">Panasonic Fly</span><span className="spec-value">Linesets 30 + 34</span></li>
          </ul>
        </div>
      </div>

      <div className="info-card yellow" style={{ marginTop: '1.5rem' }}>
        <div className="card-header">
          <span className="card-icon">📺</span>
          <span className="card-title">LED Wall (Proposed)</span>
          <span className="card-badge">Add-Alt #2</span>
        </div>
        <ul className="spec-list">
          <li className="spec-item"><span className="spec-label">Width</span><span className="spec-value">45'-8⅛"</span></li>
          <li className="spec-item"><span className="spec-label">Depth</span><span className="spec-value">3⅜"</span></li>
          <li className="spec-item"><span className="spec-label">Support Structure</span><span className="spec-value">W 8×13 beams, L 4×4×¼ hangers</span></li>
          <li className="spec-item"><span className="spec-label">Rigging Clamps</span><span className="spec-value">LNA KRCO62-A (5000 lb)</span></li>
        </ul>
      </div>

      <div className="callout">
        <span className="callout-icon">📐</span>
        <div className="callout-content">
          <h4>Stage Dimensions for Projection Planning</h4>
          <p>
            Total depth: 91'-10" | Catwalk height: +28'-9" | AC duct clearance: +24'-0" | 
            Distance between SR and SL catwalks: 51'-3"
          </p>
        </div>
      </div>
    </div>
  );
}

function DocumentsSection() {
  const categories = [
    { id: 'overview', label: 'Overview', color: '#FF6B6B' },
    { id: 'lighting', label: 'Lighting', color: '#FFE066' },
    { id: 'audio', label: 'Audio', color: '#4D7CFF' },
    { id: 'projections', label: 'Projections', color: '#A855F7' },
    { id: 'construction', label: 'Construction', color: '#4ECDC4' },
    { id: 'electrical', label: 'Electrical', color: '#FF9F43' },
    { id: 'structure', label: 'Structure', color: '#666' },
  ];

  return (
    <div className="section">
      <div className="section-header">
        <div className="section-icon orange">📄</div>
        <h2 className="section-title">Technical Documents</h2>
      </div>

      <p style={{ marginBottom: '2rem', color: '#666', maxWidth: '600px' }}>
        Download technical drawings, specifications, and reference materials for 
        B. Iden Payne Theatre. All documents are PDF format.
      </p>

      {categories.map((cat) => {
        const docs = DOCUMENTS.filter((d) => d.category === cat.id);
        if (docs.length === 0) return null;
        
        return (
          <div key={cat.id} style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              fontFamily: 'Syne, sans-serif', 
              fontSize: '1rem',
              fontWeight: 700,
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ 
                width: 12, 
                height: 12, 
                background: cat.color, 
                border: '2px solid #000',
                display: 'inline-block' 
              }}></span>
              {cat.label}
            </h3>
            <div className="docs-grid">
              {docs.map((doc, i) => (
                <a href="#" className="doc-card" key={i}>
                  <div className="doc-icon" style={{ background: cat.color }}>📄</div>
                  <div className="doc-info">
                    <div className="doc-title">{doc.title}</div>
                    <div className="doc-meta">{doc.meta}</div>
                  </div>
                  <span className="doc-arrow">→</span>
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
