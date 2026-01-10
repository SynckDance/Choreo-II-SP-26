export function PerformanceHub() {
  return (
    <div className="page-container">
      {/* Hero */}
      <div className="hero-section">
        <div className="relative z-10">
          <div className="badge mb-4" style={{ background: '#FFE66D', color: '#000' }}>Performance</div>
          <h1 className="page-title" style={{ color: 'white' }}>
            EVOLUTION 2025
          </h1>
          <p className="page-subtitle">
            B. Iden Payne Theatre · April 21–26
          </p>
          
          <div className="flex flex-wrap gap-6 mt-8">
            <div>
              <div className="stat-number" style={{ color: '#FF6B6B' }}>04/25</div>
              <div className="stat-label">Performance Night</div>
            </div>
            <div>
              <div className="stat-number" style={{ color: '#4ECDC4' }}>7PM</div>
              <div className="stat-label">Showtime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Week Overview */}
      <h2 className="section-heading">
        <span className="section-number">01</span>
        Performance Week Overview
      </h2>

      <div className="space-y-3 mt-4">
        <div className="card">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-mono)' }}>MONDAY APR 21</p>
              <h4 className="font-bold text-lg">Restore / LX Focus</h4>
            </div>
            <span className="tag">2–5pm</span>
          </div>
        </div>

        <div className="card">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-mono)' }}>TUESDAY APR 22</p>
              <h4 className="font-bold text-lg">Restore / LX Focus</h4>
            </div>
            <span className="tag">2–5pm</span>
          </div>
        </div>

        <div className="card" style={{ borderColor: 'var(--color-blue)' }}>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-mono)' }}>WEDNESDAY APR 23</p>
              <h4 className="font-bold text-lg">Tech Rehearsal #11</h4>
            </div>
            <span className="tag tag-blue">7–10pm</span>
          </div>
          <p className="text-sm text-gray-600 mt-2 m-0">All choreographers</p>
        </div>

        <div className="card" style={{ borderColor: 'var(--color-mint)' }}>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-mono)' }}>THURSDAY APR 24</p>
              <h4 className="font-bold text-lg">Dress Rehearsal</h4>
            </div>
            <span className="tag tag-mint">7–10pm</span>
          </div>
          <p className="text-sm text-gray-600 mt-2 m-0">All choreographers · Final Exam Date</p>
        </div>

        <div className="card card-dark">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-400" style={{ fontFamily: 'var(--font-mono)' }}>FRIDAY APR 25</p>
              <h4 className="font-bold text-xl" style={{ color: 'white' }}>🎭 PERFORMANCE #1</h4>
            </div>
            <span className="tag tag-yellow">7–10pm</span>
          </div>
        </div>

        <div className="card">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-mono)' }}>SATURDAY APR 26</p>
              <h4 className="font-bold text-lg">Strike</h4>
            </div>
            <span className="tag">9am–5pm</span>
          </div>
          <p className="text-sm text-gray-600 mt-2 m-0">Mandatory for all participants</p>
        </div>
      </div>

      {/* Tech Rehearsal Schedule */}
      <h2 className="section-heading">
        <span className="section-number">02</span>
        Tech Rehearsal Groups
      </h2>

      <p className="prose mb-4">
        Tech rehearsals run April 6–12. You will be assigned to a group. Each slot is 3 hours.
      </p>

      <div className="grid gap-3 mt-4">
        <div className="card">
          <div className="flex justify-between items-start mb-2">
            <p className="text-sm text-gray-500 m-0" style={{ fontFamily: 'var(--font-mono)' }}>TUE APR 7</p>
            <span className="tag tag-coral">Group 1</span>
          </div>
          <p className="font-semibold m-0">Tech Rehearsal #2 · 6:30–9:30pm</p>
        </div>

        <div className="two-col-grid" style={{ margin: 0 }}>
          <div className="card">
            <p className="text-sm text-gray-500 mb-1" style={{ fontFamily: 'var(--font-mono)' }}>WED APR 8</p>
            <p className="font-semibold mb-1">Tech #3 · 3:30–6:30pm</p>
            <span className="tag tag-blue">Group 2</span>
          </div>
          <div className="card">
            <p className="text-sm text-gray-500 mb-1" style={{ fontFamily: 'var(--font-mono)' }}>WED APR 8</p>
            <p className="font-semibold mb-1">Tech #4 · 6:30–9:30pm</p>
            <span className="tag tag-blue">Group 3</span>
          </div>
        </div>

        <div className="two-col-grid" style={{ margin: 0 }}>
          <div className="card">
            <p className="text-sm text-gray-500 mb-1" style={{ fontFamily: 'var(--font-mono)' }}>THU APR 9</p>
            <p className="font-semibold mb-1">Tech #5 · 3:30–6:30pm</p>
            <span className="tag tag-mint">Group 4</span>
          </div>
          <div className="card">
            <p className="text-sm text-gray-500 mb-1" style={{ fontFamily: 'var(--font-mono)' }}>THU APR 9</p>
            <p className="font-semibold mb-1">Tech #6 · 6:30–9:30pm</p>
            <span className="tag tag-mint">Group 5</span>
          </div>
        </div>

        <div className="two-col-grid" style={{ margin: 0 }}>
          <div className="card">
            <p className="text-sm text-gray-500 mb-1" style={{ fontFamily: 'var(--font-mono)' }}>FRI APR 10</p>
            <p className="font-semibold mb-1">Tech #7 · 3:30–6:30pm</p>
            <span className="tag tag-yellow">Group 6</span>
          </div>
          <div className="card">
            <p className="text-sm text-gray-500 mb-1" style={{ fontFamily: 'var(--font-mono)' }}>FRI APR 10</p>
            <p className="font-semibold mb-1">Tech #8 · 6:30–9:30pm</p>
            <span className="tag tag-yellow">Group 7</span>
          </div>
        </div>

        <div className="two-col-grid" style={{ margin: 0 }}>
          <div className="card">
            <p className="text-sm text-gray-500 mb-1" style={{ fontFamily: 'var(--font-mono)' }}>SAT APR 11</p>
            <p className="font-semibold mb-1">Tech #9 · 3:30–6:30pm</p>
            <span className="tag">Group 8</span>
          </div>
          <div className="card">
            <p className="text-sm text-gray-500 mb-1" style={{ fontFamily: 'var(--font-mono)' }}>SAT APR 11</p>
            <p className="font-semibold mb-1">Tech #10 · 6:30–9:30pm</p>
            <span className="tag">Group 9</span>
          </div>
        </div>
      </div>

      {/* Venue Info */}
      <h2 className="section-heading">
        <span className="section-number">03</span>
        Venue Information
      </h2>

      <div className="card">
        <h4 className="font-bold text-lg mb-2">B. Iden Payne Theatre</h4>
        <p className="text-sm text-gray-600 m-0">
          Our performance venue for EVOLUTION. Tech rehearsals and performances take place here.
          Tour scheduled with Jeff Grapko during Week 1.
        </p>
      </div>

      {/* Checklist */}
      <h2 className="section-heading">
        <span className="section-number">04</span>
        Pre-Tech Checklist
      </h2>

      <div className="card card-yellow">
        <h4 className="font-bold mb-3">Before Your Tech Slot</h4>
        <ul className="content-list text-sm">
          <li>Final choreography complete and set</li>
          <li>Music/sound files submitted in correct format</li>
          <li>Lighting cues documented and communicated</li>
          <li>Costume pieces gathered and organized</li>
          <li>Dancers know the piece thoroughly</li>
          <li>Emergency contact list updated</li>
        </ul>
      </div>

      {/* Important Reminders */}
      <div className="callout" style={{ marginTop: '2rem' }}>
        <div className="callout-title">Remember</div>
        <p className="m-0">
          Evolution is a <strong>collaboration</strong>, not a commission. Your presence at tech 
          rehearsals is mandatory. Strike participation is required for all.
        </p>
      </div>

      {/* Calendar Credit */}
      <div className="text-sm text-gray-400 mt-8" style={{ fontFamily: 'var(--font-mono)' }}>
        Tech Calendar posted 11.21.25 · Author: Jeff Grapko
      </div>

    </div>
  );
}
