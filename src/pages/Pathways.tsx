import { useState } from 'react';

const pathways = [
  {
    id: 'a',
    letter: 'A',
    title: 'Artistic Ideation',
    icon: '💡',
    color: '#E85D04',
    description: 'Generate movement that is unfamiliar, bold, personal, and technically dynamic. Stretch your physical and conceptual imagination.',
    questions: [
      'What is the work about?',
      'What are you trying to make the audience feel?',
      'What movement vocabulary serves the idea?',
      'What surprises you in the studio?',
      'What risks are you willing to take?'
    ],
    practices: [
      'Improvisation as research',
      'Movement motif development',
      'Conceptual mapping',
      'Emotional temperature setting',
      'Risk-taking and experimentation'
    ]
  },
  {
    id: 'b',
    letter: 'B',
    title: 'Production Design',
    icon: '🎨',
    color: '#10B981',
    description: 'Plan rehearsals, shape timelines, communicate expectations, and bring your visions into organized form.',
    questions: [
      'What resources do you need?',
      'What is your timeline?',
      'How will lighting serve the work?',
      'What does sound contribute?',
      'How do costumes communicate character?'
    ],
    practices: [
      'Lighting design thinking',
      'Sound design and music selection',
      'Costume and wardrobe planning',
      'Spatial design and staging',
      'Technical documentation'
    ]
  },
  {
    id: 'c',
    letter: 'C',
    title: 'Collaboration',
    icon: '🤝',
    color: '#6366F1',
    description: 'Work with peers in ways that respect process, invite dialogue, and cultivate shared ownership. This is not a commission, it is a collaboration.',
    questions: [
      'Who are your collaborators?',
      'How do you give and receive feedback?',
      'What does shared ownership look like?',
      'How do you navigate creative differences?',
      'What support do you need?'
    ],
    practices: [
      'Critical Response Process',
      'Rehearsal facilitation',
      'Peer feedback sessions',
      'Cross-disciplinary dialogue',
      'Collaborative decision-making'
    ]
  }
];

export default function Pathways() {
  const [activePathway, setActivePathway] = useState(pathways[0]);

  return (
    <div className="pathways-page">
      <style>{`
        .pathways-page {
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

        /* Pathway Selector */
        .pathway-selector {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
        }

        .pathway-tab {
          flex: 1;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1.25rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
        }

        .pathway-tab:hover {
          border-color: var(--text-muted);
        }

        .pathway-tab.active {
          border-color: var(--accent);
          border-width: 2px;
        }

        .pathway-tab-letter {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .pathway-tab.active .pathway-tab-letter {
          color: var(--accent);
        }

        .pathway-tab-title {
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        /* Pathway Content */
        .pathway-content {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
        }

        .pathway-header {
          padding: 2rem;
          border-bottom: 1px solid var(--border);
        }

        .pathway-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .pathway-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .pathway-letter-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          padding: 0.25rem 0.5rem;
          background: var(--accent);
          color: white;
          border-radius: 4px;
        }

        .pathway-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .pathway-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }

        .pathway-section {
          padding: 1.75rem 2rem;
        }

        .pathway-section:first-child {
          border-right: 1px solid var(--border);
        }

        .pathway-section-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }

        .pathway-list {
          list-style: none;
        }

        .pathway-list li {
          padding: 0.5rem 0;
          font-size: 0.9rem;
          color: var(--text-secondary);
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .pathway-list li::before {
          content: "→";
          color: var(--accent);
          flex-shrink: 0;
        }

        @media (max-width: 700px) {
          .pathway-selector {
            flex-direction: column;
          }

          .pathway-body {
            grid-template-columns: 1fr;
          }

          .pathway-section:first-child {
            border-right: none;
            border-bottom: 1px solid var(--border);
          }
        }
      `}</style>

      <div className="page-header">
        <h1 className="page-title">Pathways</h1>
        <p className="page-subtitle">
          Three interconnected areas of focus that guide your choreographic development throughout the semester.
        </p>
      </div>

      <div className="pathway-selector">
        {pathways.map((p) => (
          <button
            key={p.id}
            className={`pathway-tab ${activePathway.id === p.id ? 'active' : ''}`}
            onClick={() => setActivePathway(p)}
          >
            <div className="pathway-tab-letter">{p.letter}</div>
            <div className="pathway-tab-title">{p.title}</div>
          </button>
        ))}
      </div>

      <div className="pathway-content">
        <div className="pathway-header">
          <div className="pathway-icon">{activePathway.icon}</div>
          <h2 className="pathway-title">
            <span className="pathway-letter-badge">{activePathway.letter}</span>
            {activePathway.title}
          </h2>
          <p className="pathway-desc">{activePathway.description}</p>
        </div>

        <div className="pathway-body">
          <div className="pathway-section">
            <h3 className="pathway-section-title">Core Questions</h3>
            <ul className="pathway-list">
              {activePathway.questions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>
          <div className="pathway-section">
            <h3 className="pathway-section-title">Practices</h3>
            <ul className="pathway-list">
              {activePathway.practices.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
