import { Link } from 'react-router-dom';

export function Workflow() {
  return (
    <div className="page-container">
      <div className="badge mb-4">Foundation</div>
      <h1 className="page-title">How the Course Works</h1>
      <p className="page-subtitle">Weekly structure + Collaboration norms</p>

      {/* Weekly Pattern */}
      <h2 className="section-heading">
        <span className="section-number">01</span>
        Weekly Pattern
      </h2>

      <div className="two-col-grid">
        <div className="card" style={{ borderLeftWidth: '6px', borderLeftColor: 'var(--color-coral)' }}>
          <p className="text-sm text-gray-500 mb-2" style={{ fontFamily: 'var(--font-mono)' }}>TUESDAYS</p>
          <h4 className="font-bold text-xl mb-2">Stage + Film</h4>
          <p className="text-sm text-gray-600 m-0">
            Class sessions focused on stage and film work. Learning new methods, 
            practicing normative choreographic techniques, and building together.
          </p>
        </div>
        <div className="card" style={{ borderLeftWidth: '6px', borderLeftColor: 'var(--color-blue)' }}>
          <p className="text-sm text-gray-500 mb-2" style={{ fontFamily: 'var(--font-mono)' }}>THURSDAYS</p>
          <h4 className="font-bold text-xl mb-2">AET Lab Time</h4>
          <p className="text-sm text-gray-600 m-0">
            Collaborative sessions with AET music composers. Exploring sound, 
            rhythm, and interdisciplinary making.
          </p>
        </div>
      </div>

      {/* Class vs Rehearsal */}
      <h2 className="section-heading">
        <span className="section-number">02</span>
        Class vs. Rehearsal
      </h2>

      <div className="callout callout-caution">
        <div className="callout-title">Important Distinction</div>
        <p className="m-0 font-semibold">
          Class time should never be mistaken for rehearsal space.
        </p>
      </div>

      <div className="two-col-grid" style={{ marginTop: '1rem' }}>
        <div className="card">
          <h4 className="font-bold mb-2">In Class</h4>
          <ul className="content-list text-sm">
            <li>Learn new details</li>
            <li>Refresh our memory</li>
            <li>Practice normative choreographic methods</li>
            <li>Collaborate and build together</li>
            <li>Receive feedback on daring ideas</li>
          </ul>
        </div>
        <div className="card card-dark">
          <h4 className="font-bold mb-2" style={{ color: 'white' }}>In Rehearsal</h4>
          <ul className="content-list text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>
            <li style={{ color: 'rgba(255,255,255,0.9)' }}>Make and create</li>
            <li style={{ color: 'rgba(255,255,255,0.9)' }}>Try new ideas</li>
            <li style={{ color: 'rgba(255,255,255,0.9)' }}>Work with your collaborators</li>
            <li style={{ color: 'rgba(255,255,255,0.9)' }}>Develop and refine material</li>
            <li style={{ color: 'rgba(255,255,255,0.9)' }}>Document your process</li>
          </ul>
          <p className="text-xs text-gray-400 mt-3 m-0" style={{ fontFamily: 'var(--font-mono)' }}>
            See TA for how to book studio spaces
          </p>
        </div>
      </div>

      {/* Course Activities */}
      <h2 className="section-heading">
        <span className="section-number">03</span>
        Course Activities
      </h2>

      <div className="space-y-3 mt-4">
        <div className="card">
          <div className="flex items-start gap-4">
            <span className="phase-marker">1</span>
            <div>
              <h4 className="font-bold mb-1">Course Introduction</h4>
              <p className="text-sm text-gray-600 m-0">
                Review syllabus, course materials, expectations. Create personal and group timelines.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-start gap-4">
            <span className="phase-marker phase-marker-coral">2</span>
            <div>
              <h4 className="font-bold mb-1">AET Collaboration</h4>
              <p className="text-sm text-gray-600 m-0">
                Work alongside composers in a shared creative environment to explore sound, rhythm, 
                and interdisciplinary making.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-start gap-4">
            <span className="phase-marker phase-marker-blue">3</span>
            <div>
              <h4 className="font-bold mb-1">Design Ideation</h4>
              <p className="text-sm text-gray-600 m-0">
                Film, lighting, dance motifs, costume ideas. Ask core questions: What are we making? 
                How are we making it? What resources do we need? What support systems will help us 
                reach our goals?
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-start gap-4">
            <span className="phase-marker phase-marker-mint">4</span>
            <div>
              <h4 className="font-bold mb-1">Studio Showings</h4>
              <p className="text-sm text-gray-600 m-0">
                Share in-progress work on designated dates to receive notes, reflect, and refine 
                your developing piece.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-start gap-4">
            <span className="phase-marker" style={{ background: '#A855F7' }}>5</span>
            <div>
              <h4 className="font-bold mb-1">Final Presentation</h4>
              <p className="text-sm text-gray-600 m-0">
                Present your completed work at EVOLUTION. Technical rehearsal occurs one week 
                prior to performance.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-start gap-4">
            <span className="phase-marker" style={{ background: '#FFE66D', color: '#000' }}>6</span>
            <div>
              <h4 className="font-bold mb-1">Reflection + Documentation</h4>
              <p className="text-sm text-gray-600 m-0">
                Submit final course artifacts: journals, movement motifs, rehearsal images/videos, 
                sound files, and any supporting materials that document your process.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Communication */}
      <h2 className="section-heading">
        <span className="section-number">04</span>
        Communication
      </h2>

      <div className="grid gap-4 mt-4">
        <div className="card">
          <h4 className="font-bold mb-2">You to Us</h4>
          <p className="text-sm text-gray-600 m-0">
            Let's talk! We care about you and your learning. Please come to us before or after 
            class, or reach out via Canvas to arrange a time to talk.
          </p>
        </div>

        <div className="card">
          <h4 className="font-bold mb-2">Us to You</h4>
          <p className="text-sm text-gray-600 m-0">
            <strong>Canvas</strong> will be our primary mode of communication. We will post all 
            announcements and course-related information there. Check Canvas regularly, and 
            minimally 24 hours in advance of our regular meeting times.
          </p>
        </div>

        <div className="card">
          <h4 className="font-bold mb-2">Messaging</h4>
          <p className="text-sm text-gray-600 m-0">
            Contact us via <strong>Canvas ONLY</strong> for general questions or concerns about 
            the course. Please give us 24 hours to respond. Contact your project choreographer 
            and/or designated faculty mentor via their preferred method for project-specific 
            communication.
          </p>
        </div>

        <div className="card card-coral" style={{ background: 'var(--color-coral)', borderColor: 'var(--color-coral)' }}>
          <h4 className="font-bold mb-2" style={{ color: 'white' }}>Emergencies</h4>
          <p className="text-sm m-0" style={{ color: 'rgba(255,255,255,0.95)' }}>
            Text the relevant person. Cell phone numbers will be distributed in class.
          </p>
        </div>
      </div>

      {/* Learner Rights */}
      <h2 className="section-heading">
        <span className="section-number">05</span>
        Learner Rights & Responsibilities
      </h2>

      <div className="two-col-grid">
        <div className="card" style={{ borderLeftWidth: '4px', borderLeftColor: 'var(--color-mint)' }}>
          <h4 className="font-bold mb-3">Your Rights</h4>
          <ul className="content-list text-sm">
            <li>An inclusive, respectful learning community that recognizes your individuality</li>
            <li>Respect for your earnest efforts to learn and grow</li>
            <li>Respectful, open communication and assessment from your professors</li>
          </ul>
        </div>
        <div className="card" style={{ borderLeftWidth: '4px', borderLeftColor: 'var(--color-coral)' }}>
          <h4 className="font-bold mb-3">Your Responsibilities</h4>
          <ul className="content-list text-sm">
            <li>Create an inclusive learning community for yourself and others</li>
            <li>Respect each person as they learn and grow</li>
            <li>Communicate openly and respectfully with your professors</li>
          </ul>
        </div>
      </div>

      {/* Learning Outcomes */}
      <h2 className="section-heading">
        <span className="section-number">06</span>
        Learning Outcomes
      </h2>

      <div className="prose">
        <p>By the end of this course, you will be able to:</p>
      </div>

      <div className="space-y-3 mt-4">
        <div className="card">
          <span className="tag tag-coral mb-2">Outcome 1</span>
          <p className="m-0">
            Collaborate effectively across disciplines (music, design, technology) to create 
            cohesive choreographic work.
          </p>
        </div>
        <div className="card">
          <span className="tag tag-blue mb-2">Outcome 2</span>
          <p className="m-0">
            Lead and participate in the technical rehearsal process, demonstrating artistic 
            clarity and production readiness.
          </p>
        </div>
        <div className="card">
          <span className="tag tag-mint mb-2">Outcome 3</span>
          <p className="m-0">
            Synthesize choreographic tools and methods to create a polished 6–10 minute dance work.
          </p>
        </div>
        <div className="card">
          <span className="tag tag-yellow mb-2">Outcome 4</span>
          <p className="m-0">
            Engage in risk-taking and experimentation, using Choreography II as a space for 
            evolution and artistic expansion.
          </p>
        </div>
        <div className="card">
          <span className="tag mb-2">Outcome 5</span>
          <p className="m-0">
            Design, produce, and document interdisciplinary projects, including original musical 
            content, longer-form dance compositions, and professional-quality process artifacts.
          </p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="three-col-grid" style={{ marginTop: '3rem' }}>
        <Link to="/semester-map" className="card no-underline text-center">
          <div className="text-xl mb-1">📅</div>
          <div className="font-semibold text-sm">Semester Map</div>
        </Link>
        <Link to="/assessment" className="card no-underline text-center">
          <div className="text-xl mb-1">✓</div>
          <div className="font-semibold text-sm">Assessment</div>
        </Link>
        <Link to="/templates" className="card no-underline text-center">
          <div className="text-xl mb-1">📄</div>
          <div className="font-semibold text-sm">Templates</div>
        </Link>
      </div>

    </div>
  );
}
