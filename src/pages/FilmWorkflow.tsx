export function FilmWorkflow() {
  return (
    <div className="page-container">
      <h1 className="page-title">Dance Film Workflow</h1>
      <p className="page-subtitle">The complete pipeline from ideation to delivery</p>

      <div className="prose">
        <p>
          Dance filmmaking requires understanding the full production process. This workflow guides you from concept through final delivery, with practical considerations at each stage.
        </p>
      </div>

      {/* Pre-Production */}
      <div className="mb-8">
        <div className="flex items-start mb-3">
          <span className="phase-marker">1</span>
          <h2 className="text-xl" style={{ fontFamily: 'var(--font-display)', marginTop: '0.125rem' }}>
            Pre-Production
          </h2>
        </div>

        <div className="ml-10">
          <h3 className="subsection-heading">Concept + Intent</h3>
          <ul className="content-list text-sm">
            <li>What is the core idea?</li>
            <li>Why does this need to be a film (not stage)?</li>
            <li>What is the emotional or conceptual journey?</li>
            <li>Who is the intended audience?</li>
          </ul>

          <h3 className="subsection-heading">References</h3>
          <ul className="content-list text-sm">
            <li>Collect visual references—films, photographs, paintings</li>
            <li>Study dance films that inspire you</li>
            <li>Create a mood board</li>
          </ul>

          <h3 className="subsection-heading">Storyboarding + Shot List</h3>
          <ul className="content-list text-sm">
            <li>Sketch out the visual narrative</li>
            <li>Plan each shot: wide, medium, close-up</li>
            <li>Consider camera movement vs. dancer movement</li>
            <li>Identify key moments that need specific coverage</li>
          </ul>

          <h3 className="subsection-heading">Team Roles</h3>
          <ul className="content-list text-sm">
            <li>Director/Choreographer (you)</li>
            <li>Cinematographer/Camera operator</li>
            <li>Sound recordist (if needed)</li>
            <li>Production assistant</li>
            <li>Editor (may be you or a collaborator)</li>
          </ul>

          <h3 className="subsection-heading">Schedule + Budget</h3>
          <ul className="content-list text-sm">
            <li>How many shoot days do you need?</li>
            <li>What are the costs (equipment, locations, costumes)?</li>
            <li>Build in contingency time</li>
          </ul>

          <h3 className="subsection-heading">Location Scouting</h3>
          <ul className="content-list text-sm">
            <li>Visit potential locations at the time you'll shoot</li>
            <li>Consider: light, sound, access, safety, permissions</li>
            <li>Document location details (photos, measurements)</li>
          </ul>

          <h3 className="subsection-heading">Permissions + Safety</h3>
          <ul className="content-list text-sm">
            <li>Get written permission for all locations</li>
            <li>Check for permit requirements</li>
            <li>Assess safety: surfaces, obstacles, weather contingencies</li>
            <li>Plan for dancer care: warm-up space, water, shade</li>
          </ul>
        </div>
      </div>

      {/* Production */}
      <div className="mb-8">
        <div className="flex items-start mb-3">
          <span className="phase-marker">2</span>
          <h2 className="text-xl" style={{ fontFamily: 'var(--font-display)', marginTop: '0.125rem' }}>
            Production
          </h2>
        </div>

        <div className="ml-10">
          <h3 className="subsection-heading">Camera Roles</h3>
          <ul className="content-list text-sm">
            <li>Static vs. moving camera—each creates different energy</li>
            <li>Handheld vs. stabilized (tripod, gimbal)</li>
            <li>Consider: Who operates? What is their movement vocabulary?</li>
          </ul>

          <h3 className="subsection-heading">Sound Plan</h3>
          <ul className="content-list text-sm">
            <li>Will you record live sound?</li>
            <li>Music playback for dancer timing</li>
            <li>Ambient sound capture for post</li>
          </ul>

          <h3 className="subsection-heading">Continuity</h3>
          <ul className="content-list text-sm">
            <li>If shooting out of order, track: costume details, hair, props, lighting</li>
            <li>Take reference photos between setups</li>
            <li>Note which takes worked</li>
          </ul>

          <h3 className="subsection-heading">Performance Notes</h3>
          <ul className="content-list text-sm">
            <li>Camera performance is different from stage performance</li>
            <li>Small is often more powerful on camera</li>
            <li>Eyes and face carry more weight</li>
            <li>Give dancers feedback based on playback</li>
          </ul>

          <h3 className="subsection-heading">Lighting for Camera</h3>
          <ul className="content-list text-sm">
            <li>Natural light is beautiful but changes constantly</li>
            <li>Overcast days provide soft, even light</li>
            <li>Avoid harsh midday sun—deep shadows are hard to control</li>
            <li>Golden hour (just after sunrise, before sunset) is magical</li>
          </ul>

          <h3 className="subsection-heading">Coverage Plan</h3>
          <ul className="content-list text-sm">
            <li>Get wide shots for context</li>
            <li>Get close-ups for emotion and detail</li>
            <li>Get multiple takes—you need options in the edit</li>
            <li>Shoot more than you think you need</li>
          </ul>
        </div>
      </div>

      {/* Post-Production */}
      <div className="mb-8">
        <div className="flex items-start mb-3">
          <span className="phase-marker">3</span>
          <h2 className="text-xl" style={{ fontFamily: 'var(--font-display)', marginTop: '0.125rem' }}>
            Post-Production
          </h2>
        </div>

        <div className="ml-10">
          <h3 className="subsection-heading">Edit Workflow</h3>
          <ul className="content-list text-sm">
            <li>Organize footage: label clips, create bins, log takes</li>
            <li>Start with a rough cut—don't get precious early</li>
            <li>Edit to the music first, then refine</li>
            <li>Watch on different screens (phone, computer, TV)</li>
          </ul>

          <h3 className="subsection-heading">Sound Mix</h3>
          <ul className="content-list text-sm">
            <li>Balance music, ambient sound, and any dialogue/breath</li>
            <li>Consider: Is silence part of your design?</li>
            <li>Check levels on headphones AND speakers</li>
          </ul>

          <h3 className="subsection-heading">Color</h3>
          <ul className="content-list text-sm">
            <li>Color correction: make footage consistent</li>
            <li>Color grading: create a mood or look</li>
            <li>Keep it subtle unless extreme color is part of the concept</li>
          </ul>

          <h3 className="subsection-heading">Titles + Credits</h3>
          <ul className="content-list text-sm">
            <li>Opening title: film name, choreographer</li>
            <li>End credits: all collaborators, dancers, crew, music, location</li>
            <li>Keep credits professional and complete</li>
          </ul>

          <h3 className="subsection-heading">Export Specs</h3>
          <ul className="content-list text-sm">
            <li>Festival submissions often require specific formats (check each festival)</li>
            <li>Web: H.264, 1080p minimum, 4K if possible</li>
            <li>Keep a high-quality master file archived</li>
          </ul>

          <h3 className="subsection-heading">Delivery Checklist</h3>
          <ul className="content-list text-sm">
            <li>Final film file in required format(s)</li>
            <li>Still images for press/promotion</li>
            <li>Short description and artist statement</li>
            <li>Complete credits list</li>
            <li>Technical specs (runtime, aspect ratio, format)</li>
          </ul>

          <h3 className="subsection-heading">Archival Copy</h3>
          <ul className="content-list text-sm">
            <li>Keep the highest quality version archived</li>
            <li>Back up to multiple locations (hard drive + cloud)</li>
            <li>Keep project files in case you need to re-export</li>
          </ul>
        </div>
      </div>

      <div className="callout">
        <div className="callout-title">Remember</div>
        <p>
          Dance film is its own art form—not a recording of a stage piece. Use the camera as a creative tool, not just a documentation device. The frame, the cut, the pacing—these are choreographic decisions.
        </p>
      </div>
    </div>
  )
}
