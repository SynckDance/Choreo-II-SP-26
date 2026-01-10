export function LightingGlossary() {
  return (
    <div className="page-container">
      <h1 className="page-title">Lighting Glossary</h1>
      <p className="page-subtitle">A student-friendly reference for stage lighting</p>

      <div className="prose">
        <p>
          Understanding lighting terminology helps you communicate with designers and think more precisely about how light shapes your work. This glossary covers the fundamentals.
        </p>
      </div>

      <h2 className="section-heading">Basic Concepts</h2>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Intensity</h3>
        <p className="text-sm text-[var(--color-bark)]">
          The brightness of a light. Controlled by dimmers. Measured in percentages (0% = off, 100% = full). Intensity shapes mood and focus.
        </p>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Dimming</h3>
        <p className="text-sm text-[var(--color-bark)]">
          The act of raising or lowering intensity. Can be instant or gradual. The speed of a dim changes how a moment feels.
        </p>
      </div>

      <h2 className="section-heading">Lighting Directions</h2>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Front Light</h3>
        <p className="text-sm text-[var(--color-bark)]">
          Light coming from in front of the performer, toward the audience. Provides visibility and fills shadows. Can flatten the body if used alone.
        </p>
        <div className="diagram-placeholder mt-3">
          [Diagram: Light position in front, hitting performer face-on]
        </div>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Side Light</h3>
        <p className="text-sm text-[var(--color-bark)]">
          Light coming from the wings (sides of the stage). Sculpts the body, reveals muscle and form, creates drama. Essential for dance.
        </p>
        <div className="diagram-placeholder mt-3">
          [Diagram: Light positions on both wings hitting performer laterally]
        </div>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Back Light</h3>
        <p className="text-sm text-[var(--color-bark)]">
          Light coming from behind the performer. Creates silhouettes, halos, and separation from the background. Adds depth and drama.
        </p>
        <div className="diagram-placeholder mt-3">
          [Diagram: Light position upstage, hitting performer from behind]
        </div>
      </div>

      <h2 className="section-heading">Lighting Types</h2>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Wash</h3>
        <p className="text-sm text-[var(--color-bark)]">
          General lighting that covers a large area evenly. Used for overall visibility and color mood. Multiple instruments blended together.
        </p>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Special</h3>
        <p className="text-sm text-[var(--color-bark)]">
          A focused light on a specific area or performer. Creates emphasis and draws the eye. Used for solos, key moments, or specific staging.
        </p>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Follow Spot</h3>
        <p className="text-sm text-[var(--color-bark)]">
          A powerful, manually operated spotlight that follows a performer. Common in musicals and large-scale productions. Creates strong focus.
        </p>
      </div>

      <h2 className="section-heading">Lighting Changes</h2>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Cue</h3>
        <p className="text-sm text-[var(--color-bark)]">
          A recorded lighting state. Cues are numbered and called by the stage manager. "Light cue 5, GO" changes the lighting from one state to the next.
        </p>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Fade</h3>
        <p className="text-sm text-[var(--color-bark)]">
          A gradual change in lighting. Fades can be fast (1 second) or slow (30+ seconds). The speed affects the emotional quality of the transition.
        </p>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Blackout</h3>
        <p className="text-sm text-[var(--color-bark)]">
          All stage lights go to zero. Used for scene endings, dramatic moments, or practical transitions. Can be instant or faded.
        </p>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Bump</h3>
        <p className="text-sm text-[var(--color-bark)]">
          An instant change in lighting—no fade, immediate switch. Creates impact and punctuation.
        </p>
      </div>

      <h2 className="section-heading">Working with Lighting Designers</h2>

      <div className="callout">
        <div className="callout-title">Communication Tips</div>
        <ul className="content-list">
          <li>Describe the <em>feeling</em> you want, not just the technical request</li>
          <li>"I want this moment to feel intimate and warm" is more useful than "make it dim"</li>
          <li>Bring visual references—photos, paintings, film stills</li>
          <li>Be specific about timing—when should the change happen?</li>
          <li>Trust the designer's expertise while being clear about your vision</li>
        </ul>
      </div>

      <div className="prose mt-6">
        <p>
          Remember: lighting is not just visibility. It shapes emotion, focus, and meaning. Think of light as another performer in your work.
        </p>
      </div>
    </div>
  )
}
