export function StageDesigns() {
  return (
    <div className="page-container">
      <h1 className="page-title">Stage Designs</h1>
      <p className="page-subtitle">Annotated spatial references for choreographers</p>

      <div className="prose">
        <p>
          Understanding stage space is fundamental to choreographic design. These references will help you think about spatial composition, traffic patterns, and the relationship between bodies and architecture.
        </p>
      </div>

      <h2 className="section-heading">Stage Terminology</h2>

      <div className="diagram-placeholder" style={{ minHeight: '300px' }}>
        <p className="mb-4">Stage Areas Diagram</p>
        <div className="text-xs text-left max-w-md mx-auto space-y-1">
          <p><strong>Upstage</strong> — Away from audience (back of stage)</p>
          <p><strong>Downstage</strong> — Toward audience (front of stage)</p>
          <p><strong>Stage Right</strong> — Performer's right (audience's left)</p>
          <p><strong>Stage Left</strong> — Performer's left (audience's right)</p>
          <p><strong>Center</strong> — Middle of the stage</p>
          <p><strong>Wings</strong> — Offstage areas on the sides</p>
        </div>
      </div>

      <h2 className="section-heading">Ground Plans by Group Size</h2>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Solo</h3>
        <p className="text-sm text-[var(--color-bark)] mb-3">
          A single body owns the space. Consider: Where does the solo begin? Where does it travel? How does stillness read against the empty stage?
        </p>
        <div className="diagram-placeholder">
          [Ground plan: Solo figure with potential travel paths marked]
        </div>
        <ul className="content-list text-sm mt-3">
          <li>Center is powerful but expected—consider off-center placements</li>
          <li>Diagonal travel creates dynamic energy</li>
          <li>Stillness reads stronger against an empty stage</li>
        </ul>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Duet</h3>
        <p className="text-sm text-[var(--color-bark)] mb-3">
          Two bodies create relationship, tension, and dialogue. The space between them is as important as the space they occupy.
        </p>
        <div className="diagram-placeholder">
          [Ground plan: Duet configurations—parallel, facing, diagonal]
        </div>
        <ul className="content-list text-sm mt-3">
          <li>Distance between bodies communicates relationship</li>
          <li>Parallel facing vs. opposing facing reads differently</li>
          <li>Consider upstage/downstage power dynamics</li>
        </ul>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Trio</h3>
        <p className="text-sm text-[var(--color-bark)] mb-3">
          Three creates the possibility of isolation—one against two. Triangle formations naturally draw the eye.
        </p>
        <div className="diagram-placeholder">
          [Ground plan: Trio configurations—triangle, line, cluster]
        </div>
        <ul className="content-list text-sm mt-3">
          <li>Triangles are stable and visually satisfying</li>
          <li>Who is the apex? That person often reads as leader or outsider</li>
          <li>Lines of three create hierarchy based on position</li>
        </ul>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Ensemble</h3>
        <p className="text-sm text-[var(--color-bark)] mb-3">
          Large groups offer complexity—unison, canon, cluster, scatter. The challenge is clarity: where should the eye go?
        </p>
        <div className="diagram-placeholder">
          [Ground plan: Ensemble configurations—block, V-formation, scattered, clustered]
        </div>
        <ul className="content-list text-sm mt-3">
          <li>Symmetry reads as formal, intentional</li>
          <li>Asymmetry creates tension and organic feeling</li>
          <li>Depth (upstage/downstage layering) adds visual interest</li>
          <li>Consider sight lines—can everyone be seen?</li>
        </ul>
      </div>

      <h2 className="section-heading">Proscenium Staging</h2>

      <div className="prose">
        <p>
          The proscenium is a frame. Everything inside it is intentional. Key concepts:
        </p>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Masking + Wings</h3>
        <p className="text-sm text-[var(--color-bark)]">
          Black curtains (legs and borders) hide the offstage areas. Use entrances and exits intentionally—each one is a moment.
        </p>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Dead Zones</h3>
        <p className="text-sm text-[var(--color-bark)]">
          Areas of the stage where visibility is compromised or energy dissipates. Deep upstage corners and extreme downstage edges often read as weak.
        </p>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Sight Lines</h3>
        <p className="text-sm text-[var(--color-bark)]">
          What can the audience see from different seats? Extreme side seats lose some stage picture. Design for the full house.
        </p>
      </div>

      <h2 className="section-heading">Traffic Patterns</h2>

      <div className="prose">
        <p>
          How do bodies move through space over time? Consider:
        </p>
      </div>

      <ul className="content-list">
        <li><strong>Linear paths</strong> — Straight lines, direct energy</li>
        <li><strong>Curved paths</strong> — Softer, more organic, can circle back</li>
        <li><strong>Diagonal paths</strong> — Dynamic, cover the most ground, theatrical power</li>
        <li><strong>Random paths</strong> — Chaos, crowd, naturalism</li>
        <li><strong>Stillness</strong> — Absence of path is also a choice</li>
      </ul>

      <h2 className="section-heading">Spike Marks</h2>

      <div className="callout">
        <div className="callout-title">What Are Spike Marks?</div>
        <p>
          Small pieces of tape on the floor that mark important positions—where a dancer should stand, where a prop goes, where a set piece lands. Usually made with small crosses or dots of colored tape.
        </p>
      </div>

      <div className="prose">
        <p>
          Use spike marks for:
        </p>
      </div>

      <ul className="content-list">
        <li>Precise formations that need to be consistent</li>
        <li>Prop placements</li>
        <li>Landmarks for dancers to find in low light</li>
        <li>Technical cue positions</li>
      </ul>

      <div className="definition-block">
        <strong>Tip:</strong> Don't over-spike. Too many marks become confusing. Spike only what's essential for the work to succeed.
      </div>
    </div>
  )
}
