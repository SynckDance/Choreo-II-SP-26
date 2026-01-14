import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const stageDocs = [
  { title: 'Technical Specifications', desc: 'Overview of B. Iden Payne Theatre', file: '/docs/Payne_Technical_Specs_03_12_24.pdf', category: 'overview' },
  { title: 'Equipment List', desc: 'Full inventory', file: '/docs/01UT_Payne_Equipment_List_2019-03-15.pdf', category: 'overview' },
  { title: 'As-Built Drawings', desc: 'Reference drawings', file: '/docs/WIN_Payne_Theatre_As_Built_Drawings.pdf', category: 'construction' },
  { title: 'Structural Evaluation', desc: 'Stage and gridiron capacity', file: '/docs/combined_WIN_structural_evaluation.pdf', category: 'construction' },
  { title: 'Lighting Section', desc: '56 linesets and trim heights', file: '/docs/FFD_Section_100818.pdf', category: 'lighting' },
  { title: 'Lighting Patch Panels', desc: 'Circuit layout', file: '/docs/PAYNE_LX_PATCH_PANELS.pdf', category: 'lighting' },
  { title: 'Projections Plan View', desc: 'Throw calculations', file: '/docs/_10-1-18__Fall_for_Dance_Projections_Plan_View_V2.pdf', category: 'projections' },
  { title: 'Projections Section', desc: 'Barco and Panasonic specs', file: '/docs/_10-1-18__Fall_for_Dance_Projections_Sectional_V2.pdf', category: 'projections' },
  { title: 'LED Wall Proposal', desc: 'Add-alt proposal', file: '/docs/Payne_AET_Proposal_LED_WALL.pdf', category: 'projections' },
  { title: 'Audio Plots', desc: 'Rep system drawings', file: '/docs/02_UT_Payne_Audio_01-14_Plots_2019-03-15.pdf', category: 'audio' },
  { title: 'Audio Signal Flow', desc: 'Block diagram', file: '/docs/03_UT_Payne_Audio_15_Rep_Signal_Flow_2019-06-13.pdf', category: 'audio' },
  { title: 'Audio Rack Elevations', desc: 'Amp, FOH, RF, IEM racks', file: '/docs/04_UT_Payne_Audio_15-16_Racks_2019-06-13.pdf', category: 'audio' },
  { title: 'Audio Panel Details', desc: 'Types A-G and patch panels', file: '/docs/05_UT_Payne_Audio_17-18_Panel_Details_2019-06-17.pdf', category: 'audio' },
  { title: 'Audio Conduit Pathway', desc: 'Stage to booth routing', file: '/docs/WIN_PAYNE_AUDIO_CONDUIT_PATHWAY_MARKUP_V1.pdf', category: 'audio' },
  { title: 'PE Markups', desc: 'Power and audio plans', file: '/docs/06_UT_Payne_PE_Markups_2019-03-15.pdf', category: 'electrical' },
];

const filmTemplates = [
  { title: 'Storyboard Template', desc: 'Beat map and shot planning', icon: '📋' },
  { title: 'Shot List Template', desc: 'Coverage and continuity', icon: '📝' },
  { title: 'Casting Call Template', desc: 'Audition announcement', icon: '📢' },
  { title: 'Camera Test Rubric', desc: 'Performer evaluation', icon: '📊' },
  { title: 'Production Log', desc: 'Shoot day documentation', icon: '📓' },
  { title: 'Post-Production Notes', desc: 'Edit, sound, color notes', icon: '✂️' },
];

export default function Resources() {
  const [activeSection, setActiveSection] = useState<'stage' | 'film'>('stage');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'overview', label: 'Overview' },
    { id: 'lighting', label: 'Lighting' },
    { id: 'audio', label: 'Audio' },
    { id: 'projections', label: 'Projections' },
    { id: 'construction', label: 'Construction' },
    { id: 'electrical', label: 'Electrical' },
  ];

  const filteredDocs = activeCategory === 'all' 
    ? stageDocs 
    : stageDocs.filter(d => d.category === activeCategory);

  return (
    <div className="resources-page">
      <style>{`
        .resources-page {
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

        /* Section Toggle */
        .section-toggle {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .section-btn {
          flex: 1;
          padding: 1.25rem;
          background: var(--bg-secondary);
          border: 2px solid var(--border);
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
        }

        .section-btn:hover {
          border-color: var(--text-muted);
        }

        .section-btn.active {
          border-color: var(--accent);
        }

        .section-btn-icon {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
        }

        .section-btn-title {
          font-weight: 600;
          font-size: 0.95rem;
        }

        .section-btn-count {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        /* Category Filter */
        .category-filter {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .category-btn {
          padding: 0.4rem 0.8rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 4px;
          font-size: 0.75rem;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .category-btn:hover {
          border-color: var(--text-muted);
        }

        .category-btn.active {
          background: var(--accent);
          border-color: var(--accent);
          color: white;
        }

        /* Documents Grid */
        .docs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1rem;
        }

        .doc-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.25rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 8px;
          text-decoration: none;
          color: inherit;
          transition: all 0.2s ease;
        }

        .doc-card:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: var(--shadow);
        }

        .doc-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent);
          color: white;
          border-radius: 6px;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .doc-info {
          flex: 1;
          min-width: 0;
        }

        .doc-title {
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0.2rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .doc-desc {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .doc-arrow {
          color: var(--text-muted);
          transition: transform 0.2s ease;
        }

        .doc-card:hover .doc-arrow {
          transform: translateX(3px);
          color: var(--accent);
        }

        /* Templates Grid */
        .templates-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1rem;
        }

        .template-card {
          padding: 1.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 10px;
          transition: all 0.2s ease;
        }

        .template-card:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
        }

        .template-icon {
          font-size: 2rem;
          margin-bottom: 0.75rem;
        }

        .template-title {
          font-weight: 600;
          margin-bottom: 0.35rem;
        }

        .template-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        /* Link to full page */
        .full-page-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 2rem;
          padding: 0.75rem 1.25rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 8px;
          text-decoration: none;
          color: var(--text-primary);
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .full-page-link:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        /* External Link */
        .external-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 10px;
          text-decoration: none;
          color: inherit;
          margin-top: 1.5rem;
          transition: all 0.2s ease;
        }

        .external-link:hover {
          border-color: var(--accent);
        }

        .external-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent);
          border-radius: 8px;
          font-size: 1.5rem;
        }

        .external-info {
          flex: 1;
        }

        .external-title {
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .external-desc {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
      `}</style>

      <div className="page-header">
        <h1 className="page-title">Resources</h1>
        <p className="page-subtitle">
          Technical documents, templates, and reference materials for your choreographic work.
        </p>
      </div>

      <div className="section-toggle">
        <button
          className={`section-btn ${activeSection === 'stage' ? 'active' : ''}`}
          onClick={() => setActiveSection('stage')}
        >
          <div className="section-btn-icon">🎭</div>
          <div className="section-btn-title">Stage Resources</div>
          <div className="section-btn-count">{stageDocs.length} documents</div>
        </button>
        <button
          className={`section-btn ${activeSection === 'film' ? 'active' : ''}`}
          onClick={() => setActiveSection('film')}
        >
          <div className="section-btn-icon">🎬</div>
          <div className="section-btn-title">Film Resources</div>
          <div className="section-btn-count">{filmTemplates.length} templates</div>
        </button>
      </div>

      {activeSection === 'stage' ? (
        <>
          <div className="category-filter">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="docs-grid">
            {filteredDocs.map((doc, i) => (
              <a
                key={i}
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="doc-card"
              >
                <div className="doc-icon">📄</div>
                <div className="doc-info">
                  <div className="doc-title">{doc.title}</div>
                  <div className="doc-desc">{doc.desc}</div>
                </div>
                <span className="doc-arrow">→</span>
              </a>
            ))}
          </div>

          <NavLink to="/resources/stage-designs" className="full-page-link">
            View Full Stage Designs Reference →
          </NavLink>
        </>
      ) : (
        <>
          <div className="templates-grid">
            {filmTemplates.map((t, i) => (
              <div key={i} className="template-card">
                <div className="template-icon">{t.icon}</div>
                <div className="template-title">{t.title}</div>
                <div className="template-desc">{t.desc}</div>
              </div>
            ))}
          </div>

          <a
            href="https://www.dancefilmmaking.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="external-link"
          >
            <div className="external-icon">🎥</div>
            <div className="external-info">
              <div className="external-title">DanceFilmmaking.com</div>
              <div className="external-desc">Our main research library for dance film examples and tutorials</div>
            </div>
          </a>

          <NavLink to="/tracks/film" className="full-page-link">
            View Full Film Track Guide →
          </NavLink>
        </>
      )}
    </div>
  );
}
