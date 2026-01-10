export function Assessment() {
  return (
    <div className="page-container">
      <div className="badge mb-4">Requirements</div>
      <h1 className="page-title">Assessment</h1>
      <p className="page-subtitle">Grading Policy + Course Expectations</p>

      {/* Grade Breakdown */}
      <h2 className="section-heading">
        <span className="section-number">01</span>
        Grade Breakdown
      </h2>

      <div className="grid gap-3 mt-4">
        <div className="card" style={{ borderLeftWidth: '6px', borderLeftColor: 'var(--color-coral)' }}>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-lg mb-0">Quality of Work</p>
              <p className="text-sm text-gray-600 m-0">Progress from first to last project</p>
            </div>
            <div className="stat-number" style={{ fontSize: '2.5rem' }}>30%</div>
          </div>
        </div>

        <div className="card" style={{ borderLeftWidth: '6px', borderLeftColor: 'var(--color-blue)' }}>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-lg mb-0">Participation</p>
              <p className="text-sm text-gray-600 m-0">Engagement, presence, collaboration</p>
            </div>
            <div className="stat-number" style={{ fontSize: '2.5rem' }}>20%</div>
          </div>
        </div>

        <div className="card" style={{ borderLeftWidth: '6px', borderLeftColor: 'var(--color-mint)' }}>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-lg mb-0">Reflections & Discussions</p>
              <p className="text-sm text-gray-600 m-0">Submitted at end of each week</p>
            </div>
            <div className="stat-number" style={{ fontSize: '2.5rem' }}>10%</div>
          </div>
        </div>

        <div className="card" style={{ borderLeftWidth: '6px', borderLeftColor: 'var(--color-violet)' }}>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-lg mb-0">Work Habits</p>
              <p className="text-sm text-gray-600 m-0">Fulfillment of syllabus expectations</p>
            </div>
            <div className="stat-number" style={{ fontSize: '2.5rem' }}>10%</div>
          </div>
        </div>

        <div className="card card-dark">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-lg mb-0" style={{ color: 'white' }}>Final Performance</p>
              <p className="text-sm text-gray-400 m-0">EVOLUTION completion</p>
            </div>
            <div className="stat-number" style={{ fontSize: '2.5rem', color: '#FFE66D' }}>30%</div>
          </div>
        </div>
      </div>

      {/* Major Assignments */}
      <h2 className="section-heading">
        <span className="section-number">02</span>
        Major Assignments
      </h2>

      <div className="space-y-4 mt-4">
        <div className="card">
          <div className="flex justify-between items-start mb-2">
            <span className="tag tag-coral">Assignment 1</span>
            <span className="font-bold">5 pts</span>
          </div>
          <h4 className="font-bold text-lg mb-2">Developing a Collaborative Partnership</h4>
          <p className="text-sm text-gray-500 mb-3" style={{ fontFamily: 'var(--font-mono)' }}>DUE: JANUARY 29</p>
          <p className="text-sm text-gray-600 mb-3">Establish the core collaborators for your work this semester.</p>
          <ul className="content-list text-sm">
            <li>Identify and confirm a dance partner (co-choreographer or co-creative partner)</li>
            <li>Begin developing a collaboration with a composer (AET)</li>
            <li>Submit list of collaborators and collaboration notes in your Google Folder</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3" style={{ fontFamily: 'var(--font-mono)' }}>+ COUNTED AS PARTICIPATION POINTS</p>
        </div>

        <div className="card">
          <div className="flex justify-between items-start mb-2">
            <span className="tag tag-blue">Assignment 2</span>
            <span className="font-bold">5 pts</span>
          </div>
          <h4 className="font-bold text-lg mb-2">Mid-Semester Showing + Documentation</h4>
          <p className="text-sm text-gray-500 mb-3" style={{ fontFamily: 'var(--font-mono)' }}>DUE: MARCH 3 & 5</p>
          <p className="text-sm text-gray-600 mb-3">Present your in-progress choreography for feedback and assessment.</p>
          <ul className="content-list text-sm">
            <li>Short rehearsal videos documenting progress from semester start to showing date</li>
            <li>Written documentation: process, ideation, movement motifs, inspirations</li>
            <li>Lighting moods, sound ideas, costume images (ideas), musical sketches</li>
            <li>Participation in feedback process</li>
            <li>Updated materials uploaded to your Google Folder</li>
          </ul>
        </div>

        <div className="card">
          <div className="flex justify-between items-start mb-2">
            <span className="tag tag-mint">Assignment 3</span>
            <span className="font-bold">10 pts</span>
          </div>
          <h4 className="font-bold text-lg mb-2">Final Design Submission</h4>
          <p className="text-sm text-gray-500 mb-3" style={{ fontFamily: 'var(--font-mono)' }}>DUE: MARCH 24 (SPRING BREAK RECOMMENDED)</p>
          <p className="text-sm text-gray-600 mb-3">Submit finalized design elements for your semester project.</p>
          <ul className="content-list text-sm">
            <li>Choreographic design notes (movement intentions, moments, motifs, spatial patterns)</li>
            <li>Lighting design (final cues, colors, moods, intensities)</li>
            <li>Sound design (selected music, collaborative compositions, multichannel ideas)</li>
            <li>Costume design (colors, textures, silhouettes, inspirations)</li>
            <li>All materials uploaded in Google Folder for review</li>
          </ul>
        </div>

        <div className="card">
          <div className="flex justify-between items-start mb-2">
            <span className="tag tag-yellow">Assignment 4</span>
            <span className="font-bold">10 pts</span>
          </div>
          <h4 className="font-bold text-lg mb-2">Final Studio Showing Before Tech</h4>
          <p className="text-sm text-gray-500 mb-3" style={{ fontFamily: 'var(--font-mono)' }}>DUE: APRIL 16</p>
          <p className="text-sm text-gray-600 mb-3">Last studio presentation before entering technical rehearsal.</p>
          <ul className="content-list text-sm">
            <li>Present nearly completed work in studio</li>
            <li>Discuss remaining challenges (physical, artistic, logistical, collaborative)</li>
            <li>Share mental, artistic, and creative reflections</li>
            <li>Name the support you need as you enter tech</li>
            <li>Upload final rehearsal videos and remaining notes</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3" style={{ fontFamily: 'var(--font-mono)' }}>5 PTS QUALITY + 5 PTS PARTICIPATION</p>
        </div>
      </div>

      {/* Course Expectations */}
      <h2 className="section-heading">
        <span className="section-number">03</span>
        Course Expectations
      </h2>

      <div className="prose">
        <ul className="content-list">
          <li><strong>Studio time outside of class</strong> will be required for all choreographic study assignments. See TA for how to book studio spaces.</li>
          <li><strong>Full investment</strong> in and timely completion of all assignments is a minimum expectation.</li>
          <li><strong>Late assignments</strong> will not be accepted and will count as an "F" unless prior arrangements are made with instructors.</li>
          <li><strong>Openness</strong> to new ideas, ways of moving, seeing, hearing, sensing, thinking and creating is essential.</li>
          <li><strong>Professionalism:</strong> Reliability, positive attitude, productive approach, focus and commitment, class participation, respect for others.</li>
          <li><strong>Thoughtful contribution</strong> to discussions and critiques.</li>
          <li>Students are expected to attend all <strong>departmental dance events</strong> and as many outside dance concerts as possible.</li>
        </ul>
      </div>

      {/* Attendance */}
      <h2 className="section-heading">
        <span className="section-number">04</span>
        Attendance Policy
      </h2>

      <div className="callout">
        <div className="callout-title">We Need You Here!</div>
        <p className="m-0">
          Attendance at all rehearsals is mandatory. It's the only way we can realize our work and that you can realize your goals.
        </p>
      </div>

      <div className="grid gap-4 mt-4">
        <div className="card">
          <h4 className="font-bold mb-2">Communicating Absences</h4>
          <p className="text-sm text-gray-600 m-0">
            If you will be absent, please let us know <strong>at least 48 hours in advance</strong> by speaking with us directly AND via Canvas message to all permanent faculty members and your project lead. Regardless of why you miss class/rehearsal, you're still responsible for what you miss.
          </p>
        </div>

        <div className="card">
          <h4 className="font-bold mb-2">Partial Participation</h4>
          <p className="text-sm text-gray-600 m-0">
            If you need to modify activities, please let your project leader or one of us know. If part of a student or Guest Artist project, inform your designated choreographer as well as ALL permanent faculty members.
          </p>
        </div>

        <div className="card">
          <h4 className="font-bold mb-2">Religious Holy Days</h4>
          <p className="text-sm text-gray-600 m-0">
            By University policy, you must notify your professors of your pending absence <strong>at least fourteen days prior</strong> to the date of observance. You will have an opportunity to complete missed work within a reasonable time frame.
          </p>
        </div>

        <div className="card callout-caution" style={{ borderLeft: '4px solid #FFE66D' }}>
          <h4 className="font-bold mb-2">No Excused Absences</h4>
          <p className="text-sm text-gray-600 m-0">
            Due to the nature of this course—working on a tight timeline for creating a professional performance—there are no excused absences beyond religious observances.
          </p>
        </div>
      </div>

      {/* Departmental Production */}
      <h2 className="section-heading">
        <span className="section-number">05</span>
        Production Attendance Requirement
      </h2>

      <div className="prose">
        <p>
          This course requires students to attend Department of Theatre and Dance productions as part of the 2024/25 season. Information on discounted tickets for major and non-major students can be found at: <a href="https://theatredance.utexas.edu/discounted-student-tickets" target="_blank" rel="noopener noreferrer">theatredance.utexas.edu/discounted-student-tickets</a>
        </p>
        <p>
          Students interested in attending shows for free by participating in our volunteer usher program or in applying for paid positions may request more information by emailing: <strong>tadticketing@austin.utexas.edu</strong>
        </p>
      </div>

      {/* Participation Guidelines */}
      <h2 className="section-heading">
        <span className="section-number">06</span>
        Participation Guidelines
      </h2>

      <div className="three-col-grid">
        <div className="card text-center">
          <div className="text-2xl mb-2">📱</div>
          <h4 className="font-bold mb-2">Electronic Etiquette</h4>
          <p className="text-sm text-gray-600 m-0">
            Phones/tablets in airplane mode or Do Not Disturb. Put away until needed.
          </p>
        </div>
        <div className="card text-center">
          <div className="text-2xl mb-2">👗</div>
          <h4 className="font-bold mb-2">Dress Code</h4>
          <p className="text-sm text-gray-600 m-0">
            Comfortable dance clothing that protects skin for floorwork and A/C spaces.
          </p>
        </div>
        <div className="card text-center">
          <div className="text-2xl mb-2">⚠️</div>
          <h4 className="font-bold mb-2">Risk</h4>
          <p className="text-sm text-gray-600 m-0">
            You participate at your own risk. Instructors not responsible for injuries during normal activities.
          </p>
        </div>
      </div>

      {/* AI Policy */}
      <h2 className="section-heading">
        <span className="section-number">07</span>
        Generative AI Policy
      </h2>

      <div className="card card-dark">
        <p className="m-0 opacity-90">
          Please work with the professor to determine usage and course policy regarding the use of AI and its applications in dance-making and choreography.
        </p>
      </div>

      {/* Final Exam */}
      <div className="card card-yellow" style={{ marginTop: '2rem', textAlign: 'center' }}>
        <p className="text-sm text-gray-600 mb-1" style={{ fontFamily: 'var(--font-mono)' }}>FINAL EXAM DATE</p>
        <p className="text-2xl font-bold m-0">April 24, 2025</p>
        <p className="text-sm text-gray-600 mt-1">EVOLUTION Performance</p>
      </div>

    </div>
  );
}
