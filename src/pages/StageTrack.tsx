import { Link } from 'react-router-dom'

export function StageTrack() {
  return (
    <div className="page-container">
      <div className="inline-block px-3 py-1 bg-[var(--color-terracotta)] text-white text-xs uppercase tracking-wider mb-4">
        Stage Track
      </div>
      <h1 className="page-title">Stage (EVOLUTION)</h1>
      <p className="page-subtitle">Creating work for proscenium performance</p>

      <div className="prose">
        <p>
          Traditionally, we have performed EVOLUTION as a proscenium concert dance affair. This means dances are created to be performed on stage. With this comes the training to design for the stage.
        </p>
        <p>
          In this light, we are going to structure rehearsal, choreographic methods, and process in a way that gets us to a place of innovation on stage.
        </p>
      </div>

      <h2 className="section-heading">What You Must Learn</h2>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Investigate Works by Notable Choreographers</h3>
        <p className="text-sm text-[var(--color-bark)]">
          Study how master choreographers have solved problems of stage craft. What works? What doesn't? Why?
        </p>
        <p className="text-xs mt-2">
          <Link to="/study-lab" className="text-[var(--color-terracotta)] underline">
            See Study Lab for choreographic references →
          </Link>
        </p>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Understand Different Types of Stages</h3>
        <p className="text-sm text-[var(--color-bark)]">
          What works are successful on what type of stage? Proscenium, thrust, in-the-round, site-specific—each demands different thinking.
        </p>
        <p className="text-xs mt-2">
          <Link to="/stage-designs" className="text-[var(--color-terracotta)] underline">
            See Stage Designs for spatial reference →
          </Link>
        </p>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Understand the Arts of the Theatre</h3>
        <p className="text-sm text-[var(--color-bark)]">
          Lighting, sound, costumes, props, and more. How do these elements serve the work?
        </p>
        <p className="text-xs mt-2">
          <Link to="/lighting-glossary" className="text-[var(--color-terracotta)] underline">
            See Lighting Glossary →
          </Link>
        </p>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Understand Dance Translation</h3>
        <p className="text-sm text-[var(--color-bark)]">
          How does dance translate from stage to audience? What reaches them? What gets lost?
        </p>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Understand Audience Perception</h3>
        <p className="text-sm text-[var(--color-bark)]">
          Understand audience perception as part of the performance, or what Allegra Fuller Snyder calls "the dance event."
        </p>
      </div>

      <h2 className="section-heading">Casting for Stage</h2>

      <div className="callout">
        <div className="callout-title">On Auditions</div>
        <p>
          Dance on stage needs dancers, so we need a form of audition to secure the best dancers for the work, not just because we like the dancers, but because we believe their presence will move the creative needle further.
        </p>
      </div>

      <div className="prose">
        <p>
          When casting, consider:
        </p>
      </div>

      <ul className="content-list">
        <li>What movement qualities does your work demand?</li>
        <li>What kinds of bodies and presences will serve the concept?</li>
        <li>How will these dancers collaborate with your process?</li>
        <li>What range of skills does the work require?</li>
      </ul>

      <div className="mt-8 p-4 bg-[var(--color-warm-white)] border border-[var(--color-sand)]">
        <p className="text-sm text-center text-[var(--color-bark)]">
          Explore the <Link to="/study-lab" className="text-[var(--color-terracotta)] underline">Study Lab</Link> to research choreographers who have mastered stage craft.
        </p>
      </div>
    </div>
  )
}
