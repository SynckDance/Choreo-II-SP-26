import { Link } from 'react-router-dom';

export function PerformanceOutcome() {
  return (
    <div className="page-container">
      <div className="badge mb-4">Foundation</div>
      <h1 className="page-title">Performance + Documentation</h1>
      <p className="page-subtitle">The body as archive, records as practice</p>

      {/* Core Statement */}
      <div className="card card-dark" style={{ marginTop: '2rem' }}>
        <p className="text-lg m-0">
          In this course, we must <strong style={{ color: '#FF6B6B' }}>perform</strong>, and inevitably, 
          we must <strong style={{ color: '#4ECDC4' }}>record</strong> and <strong style={{ color: '#FFE66D' }}>document</strong>.
        </p>
      </div>

      {/* The Body as Archive */}
      <h2 className="section-heading">
        <span className="section-number">01</span>
        The Body as Archive
      </h2>

      <div className="prose">
        <p>
          Fundamental to dance is the fact that the body is an archive, and within it lies 
          an intrinsic capability to retain embodied information. Yet this information often 
          eludes the dancer because dance knowledge is <strong>ephemeral and intangible</strong> in nature.
        </p>
        <p>
          So while the body comes equipped with the ability to document, in order not to forget 
          or minimize our creative abilities, we must create records. And we must do so in ways 
          that are <strong>unique to us, our learning, and our retention</strong>.
        </p>
      </div>

      {/* Definitions */}
      <h2 className="section-heading">
        <span className="section-number">02</span>
        Key Definitions
      </h2>

      <div className="two-col-grid">
        <div className="definition-block" style={{ borderLeft: '4px solid var(--color-coral)' }}>
          <p className="font-bold text-lg mb-2" style={{ color: 'var(--color-coral)' }}>Performance</p>
          <p className="text-sm m-0">
            Everything we do in our dance creative space—from talking to colleagues, 
            to experimenting, to showing drafts, to performing on the big stage.
          </p>
        </div>
        <div className="definition-block" style={{ borderLeft: '4px solid var(--color-mint)' }}>
          <p className="font-bold text-lg mb-2" style={{ color: 'var(--color-mint)' }}>Documentation</p>
          <p className="text-sm m-0">
            Everything we actively seek to preserve—rough drafts, notes, short video clips, 
            audio recordings, and more.
          </p>
        </div>
      </div>

      {/* Performing */}
      <h2 className="section-heading">
        <span className="section-number">03</span>
        What is Performing?
      </h2>

      <div className="callout">
        <div className="callout-title">Beyond the Stage</div>
        <p className="m-0">
          Performing is not only designed for the stage—it's <strong>showing up every day to do work</strong>.
        </p>
      </div>

      <div className="grid gap-3 mt-4">
        <div className="card">
          <h4 className="font-bold mb-2">Craft performances that are:</h4>
          <div className="flex flex-wrap gap-2">
            <span className="tag">Compelling</span>
            <span className="tag">Clear</span>
            <span className="tag">Deeply Felt</span>
          </div>
        </div>
        <div className="card">
          <h4 className="font-bold mb-2">Let your work evolve as you:</h4>
          <div className="flex flex-wrap gap-2">
            <span className="tag tag-coral">Refine</span>
            <span className="tag tag-blue">Rehearse</span>
            <span className="tag tag-mint">Reflect</span>
          </div>
        </div>
      </div>

      {/* Documentation Practice */}
      <h2 className="section-heading">
        <span className="section-number">04</span>
        Documentation as Sacred Practice
      </h2>

      <div className="prose">
        <p>
          Documentation is not an afterthought—it is a sacred practice for the dancer. 
          Your records become the trace of your creative journey, a resource for future 
          work, and a way to understand your own development as an artist.
        </p>
      </div>

      <div className="card card-yellow" style={{ marginTop: '1rem' }}>
        <h4 className="font-bold mb-3">What to Document</h4>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="font-semibold mb-1">Process Materials</p>
            <ul className="content-list">
              <li>Rehearsal videos</li>
              <li>Movement motifs</li>
              <li>Inspirations</li>
              <li>Journal entries</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-1">Design Elements</p>
            <ul className="content-list">
              <li>Lighting moods</li>
              <li>Sound ideas</li>
              <li>Costume images</li>
              <li>Musical sketches</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Final Artifacts */}
      <h2 className="section-heading">
        <span className="section-number">05</span>
        Final Course Artifacts
      </h2>

      <div className="prose">
        <p>
          At the end of the semester, you will submit final course artifacts that document 
          your process and learning.
        </p>
      </div>

      <div className="space-y-2 mt-4">
        <div className="template-card">
          <span className="template-number">01</span>
          <span className="template-name">Process Journals</span>
        </div>
        <div className="template-card">
          <span className="template-number">02</span>
          <span className="template-name">Movement Motifs</span>
        </div>
        <div className="template-card">
          <span className="template-number">03</span>
          <span className="template-name">Rehearsal Images / Short Videos</span>
        </div>
        <div className="template-card">
          <span className="template-number">04</span>
          <span className="template-name">Sound Files</span>
        </div>
        <div className="template-card">
          <span className="template-number">05</span>
          <span className="template-name">Supporting Materials</span>
        </div>
      </div>

      {/* What You'll Leave With */}
      <h2 className="section-heading">
        <span className="section-number">06</span>
        What You Will Leave With
      </h2>

      <div className="grid gap-3 mt-4">
        <div className="card">
          <p className="m-0">→ A new set of <strong>work habits</strong></p>
        </div>
        <div className="card">
          <p className="m-0">→ New <strong>collaborations</strong> and language for speaking intelligently about your work</p>
        </div>
        <div className="card">
          <p className="m-0">→ A place to call your <strong>choreographic alma mater</strong></p>
        </div>
        <div className="card">
          <p className="m-0">→ New ways of <strong>seeing works</strong> by others and works you make</p>
        </div>
        <div className="card">
          <p className="m-0">→ New ways of <strong>digesting feedback</strong> and applying methods to your dance making</p>
        </div>
        <div className="card">
          <p className="m-0">→ <strong>Documentation as a sacred practice</strong> for the dancer</p>
        </div>
        <div className="card">
          <p className="m-0">→ Understanding that <strong>dance happens in many different ways</strong></p>
        </div>
      </div>

      {/* Navigation */}
      <div className="two-col-grid" style={{ marginTop: '2rem' }}>
        <Link to="/workflow" className="card no-underline text-center">
          <p className="text-sm text-gray-500 m-0" style={{ fontFamily: 'var(--font-mono)' }}>NEXT</p>
          <p className="font-bold m-0">How the Course Works →</p>
        </Link>
        <Link to="/templates" className="card no-underline text-center">
          <p className="text-sm text-gray-500 m-0" style={{ fontFamily: 'var(--font-mono)' }}>RESOURCES</p>
          <p className="font-bold m-0">Templates & Readings →</p>
        </Link>
      </div>

    </div>
  );
}
