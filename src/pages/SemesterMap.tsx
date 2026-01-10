export function SemesterMap() {
  return (
    <div className="page-container">
      <div className="badge mb-4">Timeline</div>
      <h1 className="page-title">Semester Map</h1>
      <p className="page-subtitle">Spring 2025 · 16 Weeks · Jan – Apr</p>

      {/* Key Dates */}
      <div className="stats-row" style={{ marginBottom: '2rem' }}>
        <div className="stat-item">
          <div className="stat-number">01/13</div>
          <div className="stat-label">First Day</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">04/24</div>
          <div className="stat-label">Performance</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">04/26</div>
          <div className="stat-label">Strike</div>
        </div>
      </div>

      {/* Four Phases */}
      <h2 className="section-heading">
        <span className="section-number">01</span>
        The Four Phases
      </h2>

      <div className="grid gap-4 mt-4">
        <div className="card" style={{ borderLeftWidth: '6px', borderLeftColor: 'var(--color-coral)' }}>
          <div className="flex items-start gap-4">
            <div className="phase-marker phase-marker-coral">1</div>
            <div>
              <h3 className="text-lg font-bold mb-1">Orientation</h3>
              <p className="text-sm text-gray-500 mb-2" style={{ fontFamily: 'var(--font-mono)' }}>WEEKS 1–3 · JAN 13 – JAN 31</p>
              <p className="m-0">Course overview, tour of Payne Theatre, AET collaboration begins, establish collaborative partnerships.</p>
            </div>
          </div>
        </div>

        <div className="card" style={{ borderLeftWidth: '6px', borderLeftColor: 'var(--color-blue)' }}>
          <div className="flex items-start gap-4">
            <div className="phase-marker phase-marker-blue">2</div>
            <div>
              <h3 className="text-lg font-bold mb-1">Build</h3>
              <p className="text-sm text-gray-500 mb-2" style={{ fontFamily: 'var(--font-mono)' }}>WEEKS 4–9 · FEB 3 – MAR 12</p>
              <p className="m-0">Deep making. Lab time with AET composers. Stage and film work. Mid-semester showing (Mar 3 & 5).</p>
            </div>
          </div>
        </div>

        <div className="card" style={{ borderLeftWidth: '6px', borderLeftColor: 'var(--color-mint)' }}>
          <div className="flex items-start gap-4">
            <div className="phase-marker phase-marker-mint">3</div>
            <div>
              <h3 className="text-lg font-bold mb-1">Refinement</h3>
              <p className="text-sm text-gray-500 mb-2" style={{ fontFamily: 'var(--font-mono)' }}>WEEKS 11–14 · MAR 24 – APR 9</p>
              <p className="m-0">Showings, design submissions, final studio showings, preparation for tech.</p>
            </div>
          </div>
        </div>

        <div className="card card-dark">
          <div className="flex items-start gap-4">
            <div className="phase-marker" style={{ background: '#FFE66D', color: '#000' }}>4</div>
            <div>
              <h3 className="text-lg font-bold mb-1" style={{ color: 'white' }}>Tech + Performance</h3>
              <p className="text-sm text-gray-400 mb-2" style={{ fontFamily: 'var(--font-mono)' }}>WEEKS 15–16 · APR 21 – APR 26</p>
              <p className="m-0 opacity-90">Technical rehearsals, dress rehearsal, EVOLUTION performance, strike.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Spring Break Note */}
      <div className="callout callout-caution" style={{ marginTop: '1.5rem' }}>
        <div className="callout-title">Spring Break</div>
        <p className="m-0">Week 10 (Mar 17–19) is Spring Break. Final Design Submission recommended during this time (Due Mar 24).</p>
      </div>

      {/* Weekly Schedule */}
      <h2 className="section-heading">
        <span className="section-number">02</span>
        Weekly Schedule
      </h2>

      <div className="space-y-3 mt-4">
        {/* Week 1 */}
        <div className="card">
          <div className="flex justify-between items-start mb-2">
            <span className="tag">Week 1</span>
            <span className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-mono)' }}>JAN 13, 15</span>
          </div>
          <p className="font-semibold mb-1">Course Intro + Tour</p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>T: Course overview, syllabus review</li>
            <li>Th: Tour the Payne Theatre with Jeff Grapko and Chris (AET)</li>
          </ul>
        </div>

        {/* Week 2 */}
        <div className="card">
          <div className="flex justify-between items-start mb-2">
            <span className="tag">Week 2</span>
            <span className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-mono)' }}>JAN 20, 22</span>
          </div>
          <p className="font-semibold mb-1">Stage + Film / AET Lab</p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>T: Stage – Film</li>
            <li>Th: Lab time with AET</li>
          </ul>
        </div>

        {/* Week 3 */}
        <div className="card" style={{ borderColor: 'var(--color-coral)' }}>
          <div className="flex justify-between items-start mb-2">
            <span className="tag tag-coral">Week 3</span>
            <span className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-mono)' }}>JAN 27, 29</span>
          </div>
          <p className="font-semibold mb-1">Assignment #1 Due</p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>T: Stage – Film</li>
            <li>Th: Lab time with AET</li>
          </ul>
          <div className="mt-3 p-2 bg-red-50 text-sm">
            <strong>Due 01/29:</strong> Develop a Collaborative Partnership (5 pts)
          </div>
        </div>

        {/* Weeks 4-7 */}
        <div className="card">
          <div className="flex justify-between items-start mb-2">
            <span className="tag">Weeks 4–7</span>
            <span className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-mono)' }}>FEB 3 – FEB 26</span>
          </div>
          <p className="font-semibold mb-1">Build Phase</p>
          <p className="text-sm text-gray-600">
            Consistent pattern: Tuesday = Stage/Film work, Thursday = Lab time with AET. Deep making and collaboration.
          </p>
        </div>

        {/* Week 8 */}
        <div className="card" style={{ borderColor: 'var(--color-coral)' }}>
          <div className="flex justify-between items-start mb-2">
            <span className="tag tag-coral">Week 8</span>
            <span className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-mono)' }}>MAR 3, 5</span>
          </div>
          <p className="font-semibold mb-1">Assignment #2: Mid-Semester Showing</p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>T: Stage – Film</li>
            <li>Th: Lab time with AET</li>
          </ul>
          <div className="mt-3 p-2 bg-red-50 text-sm">
            <strong>Due 03/05:</strong> Mid-Semester Showing + Documentation (5 pts)
          </div>
        </div>

        {/* Week 9 */}
        <div className="card">
          <div className="flex justify-between items-start mb-2">
            <span className="tag">Week 9</span>
            <span className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-mono)' }}>MAR 10, 12</span>
          </div>
          <p className="font-semibold mb-1">Stage + Film / AET Lab</p>
          <p className="text-sm text-gray-600">Continue building and refining based on mid-semester feedback.</p>
        </div>

        {/* Week 10 */}
        <div className="card card-yellow">
          <div className="flex justify-between items-start mb-2">
            <span className="tag" style={{ background: '#000', color: '#fff' }}>Week 10</span>
            <span className="text-sm" style={{ fontFamily: 'var(--font-mono)' }}>MAR 17, 19</span>
          </div>
          <p className="font-bold text-lg">🌴 SPRING BREAK</p>
          <p className="text-sm">Recommended: Work on Final Design Submission</p>
        </div>

        {/* Week 11 */}
        <div className="card" style={{ borderColor: 'var(--color-coral)' }}>
          <div className="flex justify-between items-start mb-2">
            <span className="tag tag-coral">Week 11</span>
            <span className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-mono)' }}>MAR 24, 26</span>
          </div>
          <p className="font-semibold mb-1">Assignment #3: Final Design Submission</p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>T: Showings — Stage/Film</li>
            <li>Th: Showings — Lab time</li>
          </ul>
          <div className="mt-3 p-2 bg-red-50 text-sm">
            <strong>Due 03/24:</strong> Final Design Submission (10 pts)
          </div>
        </div>

        {/* Week 12 */}
        <div className="card">
          <div className="flex justify-between items-start mb-2">
            <span className="tag">Week 12</span>
            <span className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-mono)' }}>MAR 31</span>
          </div>
          <p className="font-semibold mb-1">Showings Continue</p>
          <p className="text-sm text-gray-600">T: Showings — Stage/Film</p>
        </div>

        {/* Week 13-14 */}
        <div className="card">
          <div className="flex justify-between items-start mb-2">
            <span className="tag">Weeks 13–14</span>
            <span className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-mono)' }}>APR 2 – APR 9</span>
          </div>
          <p className="font-semibold mb-1">Final Prep + Lab Review</p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>Th Apr 2: Lab time with AET (review)</li>
            <li>T/Th Apr 7–9: Stage/Film + Lab time</li>
          </ul>
        </div>

        {/* Week 15 */}
        <div className="card" style={{ borderColor: 'var(--color-coral)' }}>
          <div className="flex justify-between items-start mb-2">
            <span className="tag tag-coral">Week 15</span>
            <span className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-mono)' }}>APR 14, 16</span>
          </div>
          <p className="font-semibold mb-1">Assignment #4: Final Studio Showing</p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>T: Final showings — Stage/Film</li>
            <li>Th: Final showings — Performance prep and checklists</li>
          </ul>
          <div className="mt-3 p-2 bg-red-50 text-sm">
            <strong>Due 04/16:</strong> Final Studio Showing Before Tech (10 pts)
          </div>
        </div>

        {/* Week 16 */}
        <div className="card card-dark">
          <div className="flex justify-between items-start mb-2">
            <span className="tag tag-yellow">Week 16</span>
            <span className="text-sm text-gray-400" style={{ fontFamily: 'var(--font-mono)' }}>APR 21 – 26</span>
          </div>
          <p className="font-semibold text-lg mb-1" style={{ color: 'white' }}>🎭 EVOLUTION WEEK</p>
          <ul className="text-sm opacity-90 space-y-1">
            <li>T Apr 21: Restore / LX Focus (2–5pm)</li>
            <li>W Apr 22: Restore / LX Focus (2–5pm)</li>
            <li>Th Apr 23: Tech Rehearsal #11 (7–10pm)</li>
            <li>F Apr 24: Dress Rehearsal (7–10pm)</li>
            <li>S Apr 25: <strong>PERFORMANCE #1</strong> (7–10pm)</li>
            <li>Su Apr 26: Strike (9am–5pm)</li>
          </ul>
        </div>
      </div>

      {/* Tech Schedule Detail */}
      <h2 className="section-heading">
        <span className="section-number">03</span>
        Tech Rehearsal Groups
      </h2>

      <p className="prose mb-4">
        Evolution tech rehearsals run April 6–12. You will be assigned to a group for your tech slot.
      </p>

      <div className="two-col-grid">
        <div className="card">
          <p className="text-sm text-gray-500 mb-2" style={{ fontFamily: 'var(--font-mono)' }}>APR 6–9</p>
          <ul className="text-sm space-y-1">
            <li>Mon Apr 6: No tech</li>
            <li>Tue Apr 7: Group 1 (6:30–9:30pm)</li>
            <li>Wed Apr 8: Groups 2 & 3 (3:30pm & 6:30pm)</li>
            <li>Thu Apr 9: Groups 4 & 5 (3:30pm & 6:30pm)</li>
          </ul>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500 mb-2" style={{ fontFamily: 'var(--font-mono)' }}>APR 10–12</p>
          <ul className="text-sm space-y-1">
            <li>Fri Apr 10: Groups 6 & 7 (3:30pm & 6:30pm)</li>
            <li>Sat Apr 11: Groups 8 & 9 (3:30pm & 6:30pm)</li>
            <li>Sun Apr 12: No tech</li>
          </ul>
        </div>
      </div>

      {/* Final Note */}
      <div className="callout" style={{ marginTop: '2rem' }}>
        <div className="callout-title">Remember</div>
        <p className="m-0">
          This schedule is subject to reconfiguration. Check Canvas regularly for updates.
        </p>
      </div>

    </div>
  );
}
