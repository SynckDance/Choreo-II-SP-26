import { Link } from 'react-router-dom'

export function FilmTrack() {
  return (
    <div className="page-container">
      <div className="inline-block px-3 py-1 bg-[var(--color-pathway-b)] text-white text-xs uppercase tracking-wider mb-4">
        Film Track
      </div>
      <h1 className="page-title">Film (EVOLUTION)</h1>
      <p className="page-subtitle">Creating dance for the camera</p>

      <div className="prose">
        <p>
          This semester we are introducing the opportunity to create a dance film to be presented on stage through projection, like a mini dance film festival.
        </p>
        <p>
          Dance on film is a newer medium for making dances. In this section we will learn how to make dances that are captured on film, and create films for EVOLUTION.
        </p>
      </div>

      <div className="callout">
        <div className="callout-title">Primary Resource</div>
        <p>
          We will focus on <a href="https://www.dancefilmmaking.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-terracotta)] underline">DanceFilmmaking.com</a> as our main resource for research, making, and reflection.
        </p>
      </div>

      <h2 className="section-heading">What You Must Learn</h2>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Investigate Works by Notable Dance Filmmakers</h3>
        <p className="text-sm text-[var(--color-bark)]">
          Study how choreographers and filmmakers have used the camera as a creative tool.
        </p>
        <p className="text-xs mt-2">
          <a href="https://www.dancefilmmaking.com/films" target="_blank" rel="noopener noreferrer" className="text-[var(--color-pathway-b)] underline">
            Explore films on DanceFilmmaking.com →
          </a>
        </p>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Understand Different Types of Films</h3>
        <p className="text-sm text-[var(--color-bark)]">
          From independent to professional productions—what works are successful across categories?
        </p>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Theatre Arts in Filmmaking</h3>
        <p className="text-sm text-[var(--color-bark)]">
          How do lighting, sound, costume, props translate into filmmaking? What changes? What stays the same?
        </p>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Dance Film vs. Music Video vs. Stage Recording</h3>
        <p className="text-sm text-[var(--color-bark)]">
          Understand the difference between dance film and music video, as well as stage-recorded dance versus dance made specifically for the camera.
        </p>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Location</h3>
        <p className="text-sm text-[var(--color-bark)]">
          Understand location and why it matters. Site becomes part of the composition.
        </p>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Camera Types and Outputs</h3>
        <p className="text-sm text-[var(--color-bark)]">
          Understand camera types and what their outputs are, and why that matters for your final product.
        </p>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Dance Translation to Film</h3>
        <p className="text-sm text-[var(--color-bark)]">
          How does dance translate from film to audience? The frame changes everything.
        </p>
      </div>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>Audience Perception</h3>
        <p className="text-sm text-[var(--color-bark)]">
          Understand audience perception as part of the performance, or what Allegra Fuller Snyder calls "the dance event."
        </p>
      </div>

      <h2 className="section-heading">Film Workflow</h2>
      
      <div className="prose">
        <p>
          Dance filmmaking requires understanding the full production pipeline from concept to final delivery.
        </p>
      </div>

      <div className="mt-4 p-4 bg-[var(--color-warm-white)] border border-[var(--color-sand)]">
        <p className="text-sm text-center text-[var(--color-bark)]">
          See the complete <Link to="/film-workflow" className="text-[var(--color-terracotta)] underline">Dance Film Workflow</Link> for the full production pipeline.
        </p>
      </div>

      <h2 className="section-heading">Film Resources</h2>

      <div className="pathway-card">
        <h3 className="subsection-heading" style={{ marginTop: 0 }}>DanceFilmmaking.com Films Library</h3>
        <p className="text-sm text-[var(--color-bark)]">
          Your primary research resource for studying dance film.
        </p>
        <a 
          href="https://www.dancefilmmaking.com/films" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block mt-3 px-4 py-2 bg-[var(--color-pathway-b)] text-white text-sm no-underline hover:opacity-90"
        >
          Browse Films →
        </a>
      </div>

      <div className="callout">
        <div className="callout-title">Festival Opportunity</div>
        <p>
          Films created for EVOLUTION can be submitted to dance film festivals. This is material that continues to work for you beyond the semester.
        </p>
      </div>
    </div>
  )
}
