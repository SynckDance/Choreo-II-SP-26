import { Link } from 'react-router-dom';

export function PathwayA() {
  return (
    <div className="page-container">
      <div className="badge" style={{ background: 'var(--color-coral)' }}>Pathway A</div>
      <h1 className="page-title" style={{ marginTop: '1rem' }}>Artistic Ideation</h1>
      <p className="page-subtitle">From concept to choreographic voice</p>

      {/* Big Question */}
      <div className="card card-dark" style={{ marginTop: '2rem' }}>
        <p className="text-xl m-0" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
          What is the idea? What are we making? Who are we making this for and why?
        </p>
      </div>

      {/* Core Questions */}
      <h2 className="section-heading">
        <span className="section-number">01</span>
        Core Questions
      </h2>

      <div className="grid gap-3 mt-4">
        <div className="card" style={{ borderColor: 'var(--color-coral)' }}>
          <p className="m-0"><strong>What is the larger vision?</strong></p>
        </div>
        <div className="card" style={{ borderColor: 'var(--color-coral)' }}>
          <p className="m-0"><strong>What do you consider as feedback for improving your work?</strong></p>
        </div>
        <div className="card" style={{ borderColor: 'var(--color-coral)' }}>
          <p className="m-0"><strong>How does feedback function during the making process?</strong></p>
        </div>
        <div className="card" style={{ borderColor: 'var(--color-coral)' }}>
          <p className="m-0"><strong>How does feedback function after the performance?</strong></p>
        </div>
        <div className="card" style={{ borderColor: 'var(--color-coral)' }}>
          <p className="m-0"><strong>What does reflection mean for you?</strong></p>
        </div>
      </div>

      {/* The Idea */}
      <h2 className="section-heading">
        <span className="section-number">02</span>
        Finding Your Idea
      </h2>

      <div className="prose">
        <p>
          Ideas don't arrive fully formed. They emerge from your experiences, your questions, 
          your curiosities, and your willingness to explore the unfamiliar. The work of this 
          pathway is to excavate, shape, and refine your choreographic concepts.
        </p>
      </div>

      <div className="callout" style={{ marginTop: '1.5rem' }}>
        <div className="callout-title">Starting Points</div>
        <ul className="content-list text-sm">
          <li>Personal experience or memory</li>
          <li>A question you can't stop asking</li>
          <li>A physical sensation or quality</li>
          <li>A relationship between bodies</li>
          <li>An image, text, sound, or object</li>
          <li>A response to social or cultural conditions</li>
        </ul>
      </div>

      {/* Movement Research */}
      <h2 className="section-heading">
        <span className="section-number">03</span>
        Movement Research
      </h2>

      <div className="prose">
        <p>
          Movement research is the laboratory of choreography. It's where you test ideas 
          in the body, discover what interests you, and generate material that can be 
          shaped into performance.
        </p>
      </div>

      <div className="two-col-grid">
        <div className="card">
          <h4 className="font-bold mb-2">Generate</h4>
          <p className="text-sm text-gray-600 m-0">
            Create movement that is unfamiliar, bold, personal, and technically dynamic. 
            Don't edit too quickly—let ideas accumulate.
          </p>
        </div>
        <div className="card">
          <h4 className="font-bold mb-2">Observe</h4>
          <p className="text-sm text-gray-600 m-0">
            Watch your movement with fresh eyes. What surprises you? What resonates with 
            your concept? What needs to be cut?
          </p>
        </div>
        <div className="card">
          <h4 className="font-bold mb-2">Refine</h4>
          <p className="text-sm text-gray-600 m-0">
            Shape your raw material. Clarify intentions. Make choices about timing, 
            dynamics, spatial pathways.
          </p>
        </div>
        <div className="card">
          <h4 className="font-bold mb-2">Document</h4>
          <p className="text-sm text-gray-600 m-0">
            Record everything. Short videos, notes, sketches, voice memos. Your future 
            self will thank you.
          </p>
        </div>
      </div>

      {/* Developing Voice */}
      <h2 className="section-heading">
        <span className="section-number">04</span>
        Choreographic Voice
      </h2>

      <div className="prose">
        <p>
          Your choreographic voice is the distinctive way you make meaning through movement. 
          It emerges from your aesthetic preferences, your physical vocabulary, your 
          conceptual interests, and your values as an artist.
        </p>
        <p>
          This semester, you'll deepen your understanding of who you are as a maker by 
          engaging in practices that challenge your habits and expand your vocabulary.
        </p>
      </div>

      <div className="card card-yellow" style={{ marginTop: '1.5rem' }}>
        <h4 className="font-bold mb-2">Questions to Ask Yourself</h4>
        <ul className="content-list text-sm">
          <li>What kinds of movement am I drawn to? Why?</li>
          <li>What ideas or themes recur in my work?</li>
          <li>How do I make decisions in the studio?</li>
          <li>What do I want audiences to experience?</li>
          <li>What challenges do I consistently encounter?</li>
        </ul>
      </div>

      {/* Feedback & Reflection */}
      <h2 className="section-heading">
        <span className="section-number">05</span>
        Feedback & Reflection
      </h2>

      <div className="prose">
        <p>
          Feedback is designed to support reflection, not correction. In this course, 
          you choose what type of feedback serves you and when you want to receive it.
        </p>
      </div>

      <div className="card" style={{ marginTop: '1rem' }}>
        <h4 className="font-bold mb-3">Liz Lerman's Critical Response Process</h4>
        <div className="grid gap-2">
          <div className="flex items-start gap-3">
            <span className="phase-marker" style={{ minWidth: '2rem', height: '2rem', fontSize: '0.75rem' }}>1</span>
            <div>
              <p className="font-semibold m-0">Statements of Meaning</p>
              <p className="text-sm text-gray-600 m-0">Responders share what was meaningful, interesting, or moving.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="phase-marker" style={{ minWidth: '2rem', height: '2rem', fontSize: '0.75rem' }}>2</span>
            <div>
              <p className="font-semibold m-0">Artist as Questioner</p>
              <p className="text-sm text-gray-600 m-0">The artist asks questions about the work.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="phase-marker" style={{ minWidth: '2rem', height: '2rem', fontSize: '0.75rem' }}>3</span>
            <div>
              <p className="font-semibold m-0">Neutral Questions</p>
              <p className="text-sm text-gray-600 m-0">Responders ask neutral, non-judgmental questions.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="phase-marker" style={{ minWidth: '2rem', height: '2rem', fontSize: '0.75rem' }}>4</span>
            <div>
              <p className="font-semibold m-0">Permission Options</p>
              <p className="text-sm text-gray-600 m-0">Responders ask permission to share opinions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-4 mt-8">
        <Link to="/pathway-b" className="card no-underline flex-1 text-center" style={{ borderColor: 'var(--color-blue)' }}>
          <p className="text-sm text-gray-500 m-0" style={{ fontFamily: 'var(--font-mono)' }}>NEXT</p>
          <p className="font-bold m-0">Pathway B: Production Design →</p>
        </Link>
      </div>

    </div>
  );
}
