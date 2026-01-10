export function Templates() {
  return (
    <div className="page-container">
      <div className="badge mb-4">Resources</div>
      <h1 className="page-title">Templates & Readings</h1>
      <p className="page-subtitle">Documentation tools + Required texts</p>

      {/* Required Texts */}
      <h2 className="section-heading">
        <span className="section-number">01</span>
        Required Choreographic Texts
      </h2>

      <div className="space-y-4 mt-4">
        <div className="card">
          <div className="flex justify-between items-start mb-2">
            <span className="tag tag-coral">Required</span>
            <span className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-mono)' }}>2024</span>
          </div>
          <h4 className="font-bold text-lg mb-1">A Choreographer's Handbook</h4>
          <p className="text-sm text-gray-600 mb-2">Jonathan Burrows · Routledge · 2nd Edition</p>
          <p className="text-sm text-gray-500 mb-3" style={{ fontFamily: 'var(--font-mono)' }}>ISBN: 9781032629018</p>
          <div className="definition-block" style={{ margin: 0 }}>
            <p className="text-sm m-0">
              On choreography: <em>"Choreography is a negotiation with the patterns your body is thinking."</em>
            </p>
            <p className="text-sm m-0 mt-2">
              On rules: <em>"Try breaking the rules on a need to break the rules basis."</em>
            </p>
          </div>
        </div>

        <div className="card">
          <div className="flex justify-between items-start mb-2">
            <span className="tag tag-coral">Required</span>
            <span className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-mono)' }}>2008</span>
          </div>
          <h4 className="font-bold text-lg mb-1">Critical Response Process</h4>
          <p className="text-sm text-gray-600 mb-2">Liz Lerman · Contact Quarterly, vol. 33, no. 1</p>
          <div className="definition-block" style={{ margin: 0 }}>
            <p className="text-sm mb-2">A facilitated, four-step method emphasizing dialogue and inquiry:</p>
            <ol className="text-sm list-decimal list-inside space-y-1">
              <li>Statements of Meaning</li>
              <li>Artist as Questioner</li>
              <li>Neutral Questions from Responders</li>
              <li>Permission Options</li>
            </ol>
            <p className="text-sm m-0 mt-2">
              <strong>Roles:</strong> Artist, Responders, Facilitator
            </p>
          </div>
        </div>

        <div className="card">
          <div className="flex justify-between items-start mb-2">
            <span className="tag tag-coral">Required</span>
            <span className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-mono)' }}>2007</span>
          </div>
          <h4 className="font-bold text-lg mb-1">Sensational Knowledge</h4>
          <p className="text-sm text-gray-600 mb-2">Tomie Hahn · Wesleyan University Press</p>
          <p className="text-sm text-gray-500 mb-3" style={{ fontFamily: 'var(--font-mono)' }}>ISBN: 978-0819568359 (includes DVD)</p>
          <p className="text-sm text-gray-600 m-0">
            <strong>Significance:</strong> Understanding that making dance stems from embodied knowledge, external stimuli, and creative inquiry.
          </p>
        </div>
      </div>

      {/* Additional Suggested Reads */}
      <h2 className="section-heading">
        <span className="section-number">02</span>
        Additional Suggested Reads
      </h2>

      <div className="space-y-3 mt-4">
        <div className="template-card">
          <div>
            <span className="template-number">01</span>
            <span className="template-name">Choreographing Differences</span>
          </div>
          <p className="text-sm text-gray-500 m-0">Ann Cooper Albright · Wesleyan University Press · 1997</p>
        </div>

        <div className="template-card">
          <div>
            <span className="template-number">02</span>
            <span className="template-name">How to Avoid Making Art</span>
          </div>
          <p className="text-sm text-gray-500 m-0">Julia Cameron · Penguin Books · 2005</p>
        </div>

        <div className="template-card">
          <div>
            <span className="template-number">03</span>
            <span className="template-name">The Intimate Act of Choreography</span>
          </div>
          <p className="text-sm text-gray-500 m-0">Lynne Anne Blom & L. Tarin Chaplin · University of Pittsburgh Press</p>
        </div>
      </div>

      {/* Documentation Templates */}
      <h2 className="section-heading">
        <span className="section-number">03</span>
        Documentation Templates
      </h2>

      <p className="prose mb-4">
        These templates are available in your Google Folder. Use them to document your process, ideation, and design development.
      </p>

      <div className="space-y-3 mt-4">
        <a href="#" className="template-card no-underline">
          <div>
            <span className="template-number">01</span>
            <span className="template-name">Collaboration Agreement</span>
          </div>
          <span className="text-xs text-gray-500">Google Doc</span>
        </a>

        <a href="#" className="template-card no-underline">
          <div>
            <span className="template-number">02</span>
            <span className="template-name">Process Journal</span>
          </div>
          <span className="text-xs text-gray-500">Google Doc</span>
        </a>

        <a href="#" className="template-card no-underline">
          <div>
            <span className="template-number">03</span>
            <span className="template-name">Movement Motifs Log</span>
          </div>
          <span className="text-xs text-gray-500">Google Sheet</span>
        </a>

        <a href="#" className="template-card no-underline">
          <div>
            <span className="template-number">04</span>
            <span className="template-name">Lighting Design Notes</span>
          </div>
          <span className="text-xs text-gray-500">Google Doc</span>
        </a>

        <a href="#" className="template-card no-underline">
          <div>
            <span className="template-number">05</span>
            <span className="template-name">Sound Design Notes</span>
          </div>
          <span className="text-xs text-gray-500">Google Doc</span>
        </a>

        <a href="#" className="template-card no-underline">
          <div>
            <span className="template-number">06</span>
            <span className="template-name">Costume Design Board</span>
          </div>
          <span className="text-xs text-gray-500">Google Slides</span>
        </a>

        <a href="#" className="template-card no-underline">
          <div>
            <span className="template-number">07</span>
            <span className="template-name">Rehearsal Schedule</span>
          </div>
          <span className="text-xs text-gray-500">Google Sheet</span>
        </a>

        <a href="#" className="template-card no-underline">
          <div>
            <span className="template-number">08</span>
            <span className="template-name">Tech Week Checklist</span>
          </div>
          <span className="text-xs text-gray-500">Google Doc</span>
        </a>

        <a href="#" className="template-card no-underline">
          <div>
            <span className="template-number">09</span>
            <span className="template-name">Final Reflection</span>
          </div>
          <span className="text-xs text-gray-500">Google Doc</span>
        </a>
      </div>

      {/* What to Document */}
      <h2 className="section-heading">
        <span className="section-number">04</span>
        What to Document
      </h2>

      <div className="two-col-grid">
        <div className="card">
          <h4 className="font-bold mb-3">Process Materials</h4>
          <ul className="content-list text-sm">
            <li>Short rehearsal videos</li>
            <li>Movement motifs</li>
            <li>Inspirations & references</li>
            <li>Spatial patterns</li>
            <li>Choreographic intentions</li>
          </ul>
        </div>
        <div className="card">
          <h4 className="font-bold mb-3">Design Elements</h4>
          <ul className="content-list text-sm">
            <li>Lighting moods & cues</li>
            <li>Sound ideas & compositions</li>
            <li>Costume images & textures</li>
            <li>Color palettes</li>
            <li>Musical sketches</li>
          </ul>
        </div>
      </div>

      {/* Reminder */}
      <div className="callout" style={{ marginTop: '2rem' }}>
        <div className="callout-title">Documentation as Sacred Practice</div>
        <p className="m-0">
          The body is an archive, and within it lies an intrinsic capability to retain embodied information. Yet this information often eludes the dancer because dance knowledge is ephemeral and intangible in nature. In order not to forget or minimize our creative abilities, we must create records—in ways that are unique to us, our learning, and our retention.
        </p>
      </div>

      {/* External Resources */}
      <h2 className="section-heading">
        <span className="section-number">05</span>
        External Resources
      </h2>

      <div className="three-col-grid">
        <a 
          href="https://www.elementsofdance.org" 
          target="_blank" 
          rel="noopener noreferrer"
          className="card no-underline text-center"
        >
          <div className="text-2xl mb-2">🎯</div>
          <div className="font-semibold">Elements of Dance</div>
          <p className="text-xs text-gray-500 m-0 mt-1">elementsofdance.org ↗</p>
        </a>
        <a 
          href="https://dancefilmmaking.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="card no-underline text-center"
        >
          <div className="text-2xl mb-2">🎬</div>
          <div className="font-semibold">Dance Filmmaking</div>
          <p className="text-xs text-gray-500 m-0 mt-1">dancefilmmaking.com ↗</p>
        </a>
        <a 
          href="https://theatredance.utexas.edu" 
          target="_blank" 
          rel="noopener noreferrer"
          className="card no-underline text-center"
        >
          <div className="text-2xl mb-2">🎭</div>
          <div className="font-semibold">UT Theatre & Dance</div>
          <p className="text-xs text-gray-500 m-0 mt-1">theatredance.utexas.edu ↗</p>
        </a>
      </div>

    </div>
  );
}
