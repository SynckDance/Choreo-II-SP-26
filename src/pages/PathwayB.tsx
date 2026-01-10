import { Link } from 'react-router-dom';

export function PathwayB() {
  return (
    <div className="page-container">
      <div className="badge" style={{ background: 'var(--color-blue)' }}>Pathway B</div>
      <h1 className="page-title" style={{ marginTop: '1rem' }}>Production Design</h1>
      <p className="page-subtitle">Technical elements that transform movement into performance</p>

      {/* Big Question */}
      <div className="card card-dark" style={{ marginTop: '2rem' }}>
        <p className="text-xl m-0" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
          What are the technical elements that will support what I am making? What do I know about these technical elements and how do I find the resources to learn what I do not know?
        </p>
      </div>

      {/* Core Question */}
      <h2 className="section-heading">
        <span className="section-number">01</span>
        The Essential Question
      </h2>

      <div className="callout">
        <div className="callout-title">Ask Yourself</div>
        <p className="m-0 font-semibold">
          What does application of these technical elements mean for my work and why are they important?
        </p>
      </div>

      {/* Four Design Areas */}
      <h2 className="section-heading">
        <span className="section-number">02</span>
        Design Elements
      </h2>

      <div className="grid gap-4 mt-4">
        <div className="card" style={{ borderLeftWidth: '6px', borderLeftColor: '#FFE66D' }}>
          <div className="flex items-start gap-4">
            <span className="phase-marker" style={{ background: '#FFE66D', color: '#000' }}>💡</span>
            <div>
              <h4 className="font-bold text-lg mb-2">Lighting Design</h4>
              <p className="text-sm text-gray-600 mb-3">
                Light shapes mood, directs focus, and creates atmosphere. It's how you paint the stage.
              </p>
              <ul className="content-list text-sm">
                <li>Final cues and transitions</li>
                <li>Colors and moods</li>
                <li>Intensities and angles</li>
                <li>Special effects</li>
              </ul>
              <Link to="/lighting-glossary" className="text-sm mt-2 inline-block">
                → Lighting Glossary
              </Link>
            </div>
          </div>
        </div>

        <div className="card" style={{ borderLeftWidth: '6px', borderLeftColor: '#A855F7' }}>
          <div className="flex items-start gap-4">
            <span className="phase-marker" style={{ background: '#A855F7' }}>🎵</span>
            <div>
              <h4 className="font-bold text-lg mb-2">Sound Design</h4>
              <p className="text-sm text-gray-600 mb-3">
                Sound is the invisible partner. It supports, drives, and transforms the movement.
              </p>
              <ul className="content-list text-sm">
                <li>Selected music or silence</li>
                <li>Collaborative compositions with AET</li>
                <li>Multichannel ideas</li>
                <li>Live vs. recorded elements</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card" style={{ borderLeftWidth: '6px', borderLeftColor: '#FF6B6B' }}>
          <div className="flex items-start gap-4">
            <span className="phase-marker phase-marker-coral">👗</span>
            <div>
              <h4 className="font-bold text-lg mb-2">Costume Design</h4>
              <p className="text-sm text-gray-600 mb-3">
                What bodies wear shapes how they're perceived and how they move.
              </p>
              <ul className="content-list text-sm">
                <li>Colors and textures</li>
                <li>Silhouettes</li>
                <li>Movement functionality</li>
                <li>Visual inspirations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card" style={{ borderLeftWidth: '6px', borderLeftColor: '#4ECDC4' }}>
          <div className="flex items-start gap-4">
            <span className="phase-marker phase-marker-mint">📐</span>
            <div>
              <h4 className="font-bold text-lg mb-2">Choreographic Design</h4>
              <p className="text-sm text-gray-600 mb-3">
                The architecture of your movement. How bodies move through space and time.
              </p>
              <ul className="content-list text-sm">
                <li>Movement intentions and motifs</li>
                <li>Spatial patterns</li>
                <li>Key moments and transitions</li>
                <li>Compositional structure</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Design Ideation Process */}
      <h2 className="section-heading">
        <span className="section-number">03</span>
        Design Ideation Process
      </h2>

      <div className="prose">
        <p>
          Design ideation is asking core questions that guide your project. Start with what you're 
          making and work outward to the technical elements that support your vision.
        </p>
      </div>

      <div className="card card-yellow" style={{ marginTop: '1.5rem' }}>
        <h4 className="font-bold mb-3">Guiding Questions</h4>
        <ul className="content-list text-sm">
          <li><strong>What are we making?</strong></li>
          <li><strong>How are we making it?</strong></li>
          <li><strong>What resources do we need?</strong></li>
          <li><strong>What support systems will help us reach our goals?</strong></li>
        </ul>
      </div>

      {/* Assignment Connection */}
      <h2 className="section-heading">
        <span className="section-number">04</span>
        Assignment #3: Final Design Submission
      </h2>

      <div className="card" style={{ borderColor: 'var(--color-blue)' }}>
        <div className="flex justify-between items-start mb-3">
          <span className="tag tag-blue">Due March 24</span>
          <span className="font-bold">10 pts</span>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Submit finalized design elements for your semester project. All materials uploaded 
          in your Google Folder for professor and TA review.
        </p>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>✓ Choreographic design notes</div>
          <div>✓ Lighting design</div>
          <div>✓ Sound design</div>
          <div>✓ Costume design</div>
        </div>
      </div>

      {/* Resources */}
      <h2 className="section-heading">
        <span className="section-number">05</span>
        Resources
      </h2>

      <div className="three-col-grid">
        <Link to="/lighting-glossary" className="card no-underline text-center">
          <div className="text-xl mb-1">💡</div>
          <div className="font-semibold text-sm">Lighting Glossary</div>
        </Link>
        <Link to="/stage-designs" className="card no-underline text-center">
          <div className="text-xl mb-1">🎭</div>
          <div className="font-semibold text-sm">Stage Designs</div>
        </Link>
        <Link to="/templates" className="card no-underline text-center">
          <div className="text-xl mb-1">📄</div>
          <div className="font-semibold text-sm">Templates</div>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex gap-4 mt-8">
        <Link to="/pathway-a" className="card no-underline flex-1 text-center" style={{ borderColor: 'var(--color-coral)' }}>
          <p className="text-sm text-gray-500 m-0" style={{ fontFamily: 'var(--font-mono)' }}>PREV</p>
          <p className="font-bold m-0">← Pathway A: Ideation</p>
        </Link>
        <Link to="/pathway-c" className="card no-underline flex-1 text-center" style={{ borderColor: 'var(--color-mint)' }}>
          <p className="text-sm text-gray-500 m-0" style={{ fontFamily: 'var(--font-mono)' }}>NEXT</p>
          <p className="font-bold m-0">Pathway C: Collaboration →</p>
        </Link>
      </div>

    </div>
  );
}
