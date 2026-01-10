import { Link } from 'react-router-dom';

export function Evolution() {
  return (
    <div className="page-container">
      <div className="badge mb-4">Timeline</div>
      <h1 className="page-title">Choreographic Development</h1>
      <p className="page-subtitle">The arc of creation through the semester</p>

      {/* Philosophy */}
      <h2 className="section-heading">
        <span className="section-number">01</span>
        The Incubator Model
      </h2>

      <div className="prose">
        <p>
          This course is designed as an <strong>incubator</strong>: a space where you can make work 
          in a semi-leisurely and intentional way. You move through a structured yet flexible 
          creative arc designed to support your choreographic growth.
        </p>
      </div>

      <div className="card card-dark" style={{ marginTop: '1.5rem' }}>
        <p className="text-lg m-0" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
          "I consider this course a place where exploration is the rule, discovery is central, 
          and growth is our overarching goal."
        </p>
      </div>

      {/* The Arc */}
      <h2 className="section-heading">
        <span className="section-number">02</span>
        The Creative Arc
      </h2>

      <div className="space-y-4 mt-4">
        <div className="card" style={{ borderLeftWidth: '6px', borderLeftColor: 'var(--color-coral)' }}>
          <div className="flex items-start gap-4">
            <div className="big-number" style={{ fontSize: '3rem', lineHeight: 1 }}>1</div>
            <div>
              <h4 className="font-bold text-lg mb-1">Orientation</h4>
              <p className="text-sm text-gray-500 mb-2" style={{ fontFamily: 'var(--font-mono)' }}>WEEKS 1–3</p>
              <p className="text-sm text-gray-600 m-0">
                Establish foundations. Meet collaborators. Tour spaces. Begin asking questions 
                about what you want to make.
              </p>
            </div>
          </div>
        </div>

        <div className="card" style={{ borderLeftWidth: '6px', borderLeftColor: 'var(--color-blue)' }}>
          <div className="flex items-start gap-4">
            <div className="big-number" style={{ fontSize: '3rem', lineHeight: 1 }}>2</div>
            <div>
              <h4 className="font-bold text-lg mb-1">Generation</h4>
              <p className="text-sm text-gray-500 mb-2" style={{ fontFamily: 'var(--font-mono)' }}>WEEKS 4–8</p>
              <p className="text-sm text-gray-600 m-0">
                Deep making. Generate movement. Work with AET composers. Experiment boldly. 
                Document everything. Mid-semester showing.
              </p>
            </div>
          </div>
        </div>

        <div className="card" style={{ borderLeftWidth: '6px', borderLeftColor: 'var(--color-mint)' }}>
          <div className="flex items-start gap-4">
            <div className="big-number" style={{ fontSize: '3rem', lineHeight: 1 }}>3</div>
            <div>
              <h4 className="font-bold text-lg mb-1">Refinement</h4>
              <p className="text-sm text-gray-500 mb-2" style={{ fontFamily: 'var(--font-mono)' }}>WEEKS 9–14</p>
              <p className="text-sm text-gray-600 m-0">
                Shape and clarify. Finalize design elements. Integrate feedback. 
                Prepare for tech. Final studio showings.
              </p>
            </div>
          </div>
        </div>

        <div className="card" style={{ borderLeftWidth: '6px', borderLeftColor: '#FFE66D' }}>
          <div className="flex items-start gap-4">
            <div className="big-number" style={{ fontSize: '3rem', lineHeight: 1 }}>4</div>
            <div>
              <h4 className="font-bold text-lg mb-1">Realization</h4>
              <p className="text-sm text-gray-500 mb-2" style={{ fontFamily: 'var(--font-mono)' }}>WEEKS 15–16</p>
              <p className="text-sm text-gray-600 m-0">
                Tech rehearsals. Dress rehearsal. EVOLUTION performance. 
                Reflection and documentation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Create */}
      <h2 className="section-heading">
        <span className="section-number">03</span>
        What You'll Create
      </h2>

      <div className="stats-row">
        <div className="stat-item">
          <div className="stat-number">6-10</div>
          <div className="stat-label">Minutes</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">2</div>
          <div className="stat-label">Formats</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">1</div>
          <div className="stat-label">Performance</div>
        </div>
      </div>

      <div className="two-col-grid">
        <div className="card" style={{ borderColor: 'var(--color-coral)' }}>
          <span className="tag tag-coral mb-3">Stage Track</span>
          <h4 className="font-bold mb-2">Concert Dance</h4>
          <p className="text-sm text-gray-600 m-0">
            Create work for the B. Iden Payne Theatre stage. Full production with 
            lighting, sound, and costume design.
          </p>
          <Link to="/stage" className="text-sm mt-3 inline-block">
            → Stage Track Details
          </Link>
        </div>
        <div className="card" style={{ borderColor: 'var(--color-blue)' }}>
          <span className="tag tag-blue mb-3">Film Track</span>
          <h4 className="font-bold mb-2">Dance on Film</h4>
          <p className="text-sm text-gray-600 m-0">
            Create work for the camera. Explore site-specific locations, editing, 
            and the cinematic frame.
          </p>
          <Link to="/film" className="text-sm mt-3 inline-block">
            → Film Track Details
          </Link>
        </div>
      </div>

      {/* Key Milestones */}
      <h2 className="section-heading">
        <span className="section-number">04</span>
        Key Milestones
      </h2>

      <div className="space-y-3 mt-4">
        <div className="card">
          <div className="flex justify-between items-center">
            <div>
              <span className="tag tag-coral">Jan 29</span>
              <p className="font-semibold mt-2 mb-0">Collaborative Partnership</p>
            </div>
            <span className="text-sm text-gray-500">5 pts</span>
          </div>
        </div>
        <div className="card">
          <div className="flex justify-between items-center">
            <div>
              <span className="tag tag-blue">Mar 3 & 5</span>
              <p className="font-semibold mt-2 mb-0">Mid-Semester Showing</p>
            </div>
            <span className="text-sm text-gray-500">5 pts</span>
          </div>
        </div>
        <div className="card">
          <div className="flex justify-between items-center">
            <div>
              <span className="tag tag-mint">Mar 24</span>
              <p className="font-semibold mt-2 mb-0">Final Design Submission</p>
            </div>
            <span className="text-sm text-gray-500">10 pts</span>
          </div>
        </div>
        <div className="card">
          <div className="flex justify-between items-center">
            <div>
              <span className="tag tag-yellow">Apr 16</span>
              <p className="font-semibold mt-2 mb-0">Final Studio Showing</p>
            </div>
            <span className="text-sm text-gray-500">10 pts</span>
          </div>
        </div>
        <div className="card card-dark">
          <div className="flex justify-between items-center">
            <div>
              <span className="tag" style={{ background: '#FFE66D', color: '#000' }}>Apr 25</span>
              <p className="font-semibold mt-2 mb-0" style={{ color: 'white' }}>🎭 EVOLUTION Performance</p>
            </div>
            <span className="text-sm text-gray-400">30%</span>
          </div>
        </div>
      </div>

      {/* The Caution */}
      <div className="callout callout-caution" style={{ marginTop: '2rem' }}>
        <div className="callout-title">⚠ Remember</div>
        <p className="m-0 font-semibold">
          You are not here to replicate. You are here to create. From which you evolve.
        </p>
      </div>

      {/* Links */}
      <div className="two-col-grid" style={{ marginTop: '2rem' }}>
        <Link to="/semester-map" className="card no-underline text-center">
          <div className="text-xl mb-1">📅</div>
          <div className="font-semibold">Full Semester Map</div>
        </Link>
        <Link to="/performance-hub" className="card no-underline text-center">
          <div className="text-xl mb-1">🎭</div>
          <div className="font-semibold">Performance Week</div>
        </Link>
      </div>

    </div>
  );
}
