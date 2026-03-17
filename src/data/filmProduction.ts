// src/data/filmProduction.ts

export interface ProductionTable {
  headers: string[];
  rows: string[][];
}

export interface SubSection {
  title: string;
  paragraphs?: string[];
  table?: ProductionTable;
  list?: string[];
}

export interface FilmProductionSection {
  number: string;
  title: string;
  methodology: {
    paragraphs: string[];
    subSections?: SubSection[];
  };
  example: {
    title: string;
    lines: string[];
  };
}

export const filmProductionSections: FilmProductionSection[] = [
  {
    number: '01',
    title: 'Script Writing Diagrams',
    methodology: {
      paragraphs: [
        'A dance film script diagram maps the structural logic of the film before any prose or storyboard is written. It works at three levels: narrative arc, movement arc, and emotional arc. These three arcs run in parallel across the film\'s sequence and they should align at the beginning, at each turning point, and at the end. The diagram is not a screenplay format document. It is a visual planning instrument that lets the director see the whole film at once and identify where the arcs are in agreement, where they are in productive tension, and where they collapse into redundancy.',
        'The narrative arc describes what happens in the story — the sequence of events or images. The movement arc describes what the body is doing — what kinetic qualities are present in each section, what traditions or vocabularies are being called, and how the quality changes across the film. The emotional arc describes what the viewer should be feeling or sensing at each moment. When all three align, you have a powerful scene. When the movement arc pulls against the narrative arc, you have productive tension. When the emotional arc lags behind both, the film feels slow.',
      ],
      subSections: [
        {
          title: 'Three-Arc Diagram Template',
          table: {
            headers: ['ELEMENT', 'DESCRIPTION / USE'],
            rows: [
              ['Narrative Arc', 'Sequence of events or images across the film\'s timeline. Usually five to seven beats from opening image to final image.'],
              ['Movement Arc', 'Kinetic quality progression. What traditions, vocabularies, spatial patterns, and energy levels appear in each section. Tracks how the body\'s relationship to space and time evolves.'],
              ['Emotional Arc', 'Intended viewer experience at each stage. What is the viewer sensing? Disorientation, recognition, grief, joy, diffusion? This is the felt register the film is building.'],
              ['Alignment Points', 'Moments where all three arcs converge. These become the film\'s strongest beats — opening image, turning points, climax, resolution.'],
              ['Tension Points', 'Moments where arcs deliberately diverge for effect. Movement going inward while narrative is expanding outward, for example. Mark these intentionally so they serve the film.'],
              ['Collapse Warnings', 'Moments where the arcs fall out of relationship without purpose. These are the sections to revise or cut.'],
            ],
          },
        },
      ],
    },
    example: {
      title: 'Rooted in Motion — Ten Poem Project: Three-Arc Breakdown',
      lines: [
        'NARRATIVE ARC:',
        '  Beat 1 — Arrival: Body in transit, movement across threshold, disorientation of a new ground',
        '  Beat 2 — Remembering: Contact with the ground activates memory of the Niger Delta ecology',
        '  Beat 3 — Confrontation: Movement is interrupted by systems of classification and naming',
        '  Beat 4 — Refusal: Body resists classification through kinetic overload and retrograde',
        '  Beat 5 — Emergence: Body reconstitutes itself through ancestral movement vocabulary',
        '  Beat 6 — Resolution: Body is present, grounded, and in relationship with the new land',
        '',
        'MOVEMENT ARC:',
        '  Beat 1 — High displacement, spatial disorientation, floating quality, no floor contact',
        '  Beat 2 — Slow descent, weight returns, Isoko ground-contact movement vocabulary',
        '  Beat 3 — Staccato interruptions, movement fragmented, vocabulary shifted toward Western vernacular',
        '  Beat 4 — Retrograde of Beat 3, explosive force, recovery of polyrhythm',
        '  Beat 5 — Full Isoko and West African diaspora vocabulary, sustained, grounded',
        '  Beat 6 — Simple walking, one tradition, one body, one ground',
        '',
        'EMOTIONAL ARC:',
        '  Beat 1 — Unsettled, curious, slightly afraid',
        '  Beat 2 — Recognition, warmth, the relief of contact',
        '  Beat 3 — Unease, alienation, fragmentation',
        '  Beat 4 — Anger, release, catharsis',
        '  Beat 5 — Joy, abundance, celebration',
        '  Beat 6 — Quiet, resolution, belonging',
        '',
        'ALIGNMENT: Beats 1, 4, and 6 are full alignment points.',
        'TENSION: Beat 3 — movement vocabulary does not match narrative intent intentionally.',
        'COLLAPSE RISK: Beat 2 risks being too long. Movement richness must not slow narrative momentum.',
      ],
    },
  },
  {
    number: '02',
    title: 'Shoot Storyboards',
    methodology: {
      paragraphs: [
        'A shoot storyboard translates the script diagram into specific shots. For a dance film, each storyboard panel describes the frame composition, the camera movement, the dancer\'s position and trajectory in the frame, and the intended duration of the shot. Unlike narrative film, dance film storyboards must account for continuous movement rather than a static subject. The camera and the body are in active relationship, and the storyboard needs to represent that relationship visually, even in text form.',
        'Each panel should specify lens choice, camera height, camera movement direction, and whether the frame is holding the dancer at rest, tracking with the dancer, or countermoving against the dancer. Countermovement — where the camera moves opposite the dancer\'s trajectory — creates spatial tension and is one of the most powerful compositional tools in dance film. Note it explicitly when planned.',
      ],
      subSections: [
        {
          title: 'Storyboard Panel Template',
          table: {
            headers: ['SCENE', 'FRAME / ACTION', 'CAMERA', 'DURATION'],
            rows: [
              ['S1', 'Opening — body in corridor, side-lit, no floor', '50mm, eye level, static hold', '0:00 – 0:18'],
              ['S2', 'Body descends — weight returns to floor', '35mm, low angle, slow push in', '0:18 – 0:42'],
              ['S3', 'Full vocabulary — wide space', '24mm, wide, circular track right', '0:42 – 1:15'],
              ['S4', 'Retrograde sequence — close on hands', '85mm macro, static, tight', '1:15 – 1:45'],
              ['S5', 'Group emergence — five bodies in formation', 'Drone, overhead pull-out to reveal', '1:45 – 2:30'],
              ['S6', 'Final image — single body, golden hour', '50mm, eye level, slow push back', '2:30 – 3:00'],
            ],
          },
        },
      ],
    },
    example: {
      title: 'Ten Poem Project — Scene 4: Interrogation Room',
      lines: [
        'Panel 4A:',
        '  Frame: Body seated, wired, sensor suit visible. Camera frames from chest up.',
        '  Lens: 85mm. Camera: Static, eye level, slight dutch tilt.',
        '  Action: Dancer is still for 8 seconds then begins slow involuntary tremor building to full shaking.',
        '  Duration: 0:00 – 0:22',
        '',
        'Panel 4B:',
        '  Frame: Extreme close-up on face. Eyes open, no expression.',
        '  Lens: 135mm macro. Camera: Static.',
        '  Action: Eyes track slowly left. No body movement. Holds.',
        '  Duration: 0:22 – 0:34',
        '',
        'Panel 4C:',
        '  Frame: Wide shot — room visible. Body at center. Wires trailing.',
        '  Lens: 24mm. Camera: Slow circular track counterclockwise.',
        '  Action: Body rises from chair in single sustained movement. Arms open last.',
        '  Duration: 0:34 – 0:58',
        '',
        'Panel 4D:',
        '  Frame: Overhead — body lying on floor, wires radiating outward like roots.',
        '  Lens: 14mm wide. Camera: Drone hold, no movement.',
        '  Action: Body still. Breath visible. Final image of scene.',
        '  Duration: 0:58 – 1:10',
      ],
    },
  },
  {
    number: '03',
    title: 'Music Storyboard',
    methodology: {
      paragraphs: [
        'The music storyboard maps the audio landscape of the film against its visual timeline. For a dance film, this is not simply a music cue sheet. It is a compositional document that tracks the relationship between the score and the movement at every moment. The music storyboard identifies where the score drives the movement, where the movement drives the score, and where they operate independently. These three relationships produce entirely different visual and kinesthetic experiences for the viewer.',
        'The storyboard should also track sonic texture — whether a moment is melodic, percussive, ambient, or silent. Silence is a compositional element and must be planned as deliberately as any other. The document should name specific instruments, traditions, or sound sources being used. If the score draws from live performance, field recording, electronic processing, or archival audio, those sources should be specified because they affect how the score is licensed, credited, and archived.',
      ],
      subSections: [
        {
          title: 'Music Cue Map',
          table: {
            headers: ['TIMECODE', 'SCENE', 'SOUND SOURCE', 'RELATIONSHIP TO MOVEMENT'],
            rows: [
              ['0:00 – 0:18', 'S1 Arrival', 'Ambient field recording — riverine soundscape', 'Independent — score grounds the geography before the body speaks'],
              ['0:18 – 0:42', 'S2 Descent', 'Single talking drum — slow pulse', 'Music drives — downbeat coincides with floor contact moment'],
              ['0:42 – 1:15', 'S3 Full vocab', 'Full percussion ensemble — Isoko ceremonial rhythm', 'Movement drives — camera cut on accents, score follows energy'],
              ['1:15 – 1:45', 'S4 Retrograde', 'Score reversed — retrograde audio mirrors retrograde movement', 'Synchronized — mirror relationship, no lead'],
              ['1:45 – 2:30', 'S5 Emergence', 'Vocal ensemble enters — call and response', 'Counterpoint — vocal phrase ends as movement phrase begins'],
              ['2:30 – 3:00', 'S6 Final image', 'Single voice. Fade to ambient. Silence last 8 seconds.', 'Independent — music exits, body and image remain'],
            ],
          },
        },
      ],
    },
    example: {
      title: 'Music Notes — Ten Poem Project',
      lines: [
        'Sound sources in use:',
        '  Field recordings from Warri, Delta State — riverine ambient, market sounds, rainfall on corrugated iron',
        '  Talking drum — single player, Yoruba tradition, live recorded',
        '  Isoko ceremonial percussion — archival recording, requires permissions and credit',
        '  Electronic processing in Ableton Live — spectral stretching applied to field recordings in Scenes 1 and 6',
        '  Vocal ensemble — 4 voices, call and response, original composition',
        '',
        'Key compositional decisions:',
        '  Retrograde audio in Scene 4 requires exact sync with retrograde movement in edit.',
        '  Final 8 seconds must be silence — no fade, hard cut to silence on last movement beat.',
        '  Score must be delivered stems-separated (drums, ambient, voice) for edit flexibility.',
        '',
        'Credits required: Archival Isoko percussion — source institution and recordist to be confirmed before distribution.',
      ],
    },
  },
  {
    number: '04',
    title: 'Editing Sections and Story Compilation',
    methodology: {
      paragraphs: [
        'The editing section document is built before footage is captured. It describes how the film will be assembled and what the logic of each editorial decision will be. Dance film editing operates on kinetic logic rather than narrative logic alone. Cuts are driven by movement phrase endings, energy peaks, breath, and spatial transitions — not simply by story beats. The editor and director must agree on this logic before a single shot is reviewed, because applying the wrong editorial logic to dance footage produces a fundamentally different film.',
        'The story compilation phase refers to the assembly of all selected takes into a rough cut that has story coherence but not yet rhythmic or kinetic precision. This is distinct from a rough assembly (all footage in order) and a fine cut (rhythmically precise). The story compilation asks one question: does the film\'s argument — its story — arrive from beginning to end? If not, the problem is in the structure, not the edit. Fix structure first. Rhythm second.',
      ],
      subSections: [
        {
          title: 'Editorial Logic Map',
          table: {
            headers: ['CUT TYPE', 'WHEN TO USE'],
            rows: [
              ['Kinetic cut', 'Cut on the peak energy moment of a movement phrase. The incoming shot opens at a matching or contrasting energy level. Most common in dance film.'],
              ['Breath cut', 'Cut on the moment of inhalation or stillness between phrases. Creates space and legibility. Essential after high-energy sequences.'],
              ['Spatial cut', 'Cut on a movement that exits the frame in one direction and enters the next from the same direction, creating a through-line. Or cut to opposite entry for tension.'],
              ['Hard cut to silence', 'Cut to a completely still, silent frame on a movement accent. Extremely powerful. Use maximum twice per film or it loses force.'],
              ['Dissolve', 'Use only when the transition itself is content — two bodies or two traditions overlapping. Not for convenience.'],
              ['Jump cut', 'For fragmentation sequences. Must feel deliberate, not accidental. Establish rhythm of jump cuts before using them.'],
            ],
          },
        },
        {
          title: 'Story Compilation Checklist',
          list: [
            'Assemble all selected takes in script order — one take per scene, the best performance take, not the best-lit take.',
            'Play back the assembly without scoring. Does the story arrive? Can you follow the arc?',
            'Mark every moment where your attention breaks. Those are structural problems.',
            'Add temporary score if needed to check the film\'s emotional arc. Use the final score stems if available.',
            'Fix structure before cutting for rhythm. Restructuring after fine-cutting loses work.',
            'Lock story compilation before any color, sound, or VFX work begins.',
          ],
        },
      ],
    },
    example: {
      title: 'Ten Poem Project: Scene 3 to Scene 4 Transition',
      lines: [
        'Scene 3 ends with the full group retrograde sequence, peak energy, no resolution.',
        'Scene 4 opens in the interrogation room — stillness, isolation, silence.',
        '',
        'Editorial decision: Hard cut on the final retrograde accent — from maximum kinetic energy',
        'to complete stillness. No sound bridge. Silence begins before the cut, not after.',
        '',
        'This means the last half-second of Scene 3 audio fades to silence before the picture cut.',
        'The cut lands in silence. Scene 4 opens silent and stays silent for 4 seconds.',
        '',
        'Reason: The hard cut from maximum energy to silence creates the sensation of interruption',
        'that the interrogation scene requires. A dissolve would soften the violence of the transition.',
        '',
        'Software: DaVinci Resolve. Timeline: 24fps, 4K DCI.',
        'Export: ProRes 4444 master. H.264 for festival portals. DCP on request.',
      ],
    },
  },
  {
    number: '05',
    title: 'Shoot Equipment',
    methodology: {
      paragraphs: [
        'Equipment selection for a dance film shoot is driven by the movement demands of the choreography, the locations, and the available crew. A smaller crew requires more versatile and lightweight equipment. A larger production can support more complex rigs. The key constraint unique to dance film is that equipment must not interfere with the movement space. Camera rigs, lights, and audio equipment must be positioned so that the dancer has full spatial range at all times unless the equipment\'s presence in the frame is a deliberate compositional choice.',
      ],
      subSections: [
        {
          title: 'Camera Package',
          table: {
            headers: ['ITEM', 'SPECIFICATION / USE'],
            rows: [
              ['Primary camera', 'Sony FX6 or ARRI Alexa Mini LF. Full frame for movement work in lower light. High frame rate capability for slow-motion passages.'],
              ['Secondary camera', 'Sony A7S III or FX3 for handheld and tight-space work. Matches primary sensor profile closely.'],
              ['Lenses', '24mm, 35mm, 50mm, 85mm, 135mm. At minimum carry a fast prime kit T1.4 or faster for low light.'],
              ['Stabilization', 'DJI RS3 Pro gimbal for tracking shots. Shoulder rig for kinetic handheld. Fluid head tripod for static holds.'],
              ['Drone', 'DJI Inspire 3 or Mavic 3 Cine for aerial overhead. Requires FAA Part 107 clearance and location permit.'],
              ['Memory', 'CFexpress cards x4, minimum 512GB each. Always shoot with backup.'],
            ],
          },
        },
        {
          title: 'Audio Package',
          table: {
            headers: ['ITEM', 'SPECIFICATION / USE'],
            rows: [
              ['Recorder', 'Sound Devices MixPre-6 II. 6-track, 32-bit float. Records field audio for sync and atmosphere.'],
              ['Microphones', 'Sennheiser MKH 416 shotgun for directional capture. DPA 4060 lavalier for body mic when needed.'],
              ['Sync', 'Tentacle Sync timecode on all cameras and recorder. Sync on set daily.'],
              ['Ambient capture', 'Zoom H6 for room tone and field recordings at each location. Minimum 2 minutes of clean room tone per location.'],
            ],
          },
        },
      ],
    },
    example: {
      title: 'Ten Poem Project — Day 1 Equipment Pack (Interrogation Room, Studio)',
      lines: [
        'Camera A:  Sony FX6, 85mm T1.5, RS3 Pro gimbal — Panels 4A and 4C',
        'Camera B:  Sony FX3, 135mm macro, static tripod — Panel 4B extreme close-up',
        'Camera C:  DJI Mavic 3 Cine, overhead — Panel 4D (confirm ceiling height)',
        '',
        'Audio:     MixPre-6 II rolling throughout. No live audio (score added in post).',
        '           Room tone captured at every lighting change.',
        '',
        'Special:   Sensor suit requires 20-minute setup before camera rolls.',
        '           Wires must be dressed on camera before recording begins.',
        '           Have gaffer tape and wire management kit on set.',
        '',
        'Power:     2 Edison circuits confirmed in studio. Bring 50-foot extension cables x3.',
      ],
    },
  },
  {
    number: '06',
    title: 'Run of First Takes',
    methodology: {
      paragraphs: [
        'The first take protocol for a dance film is different from narrative film. The first take is always a camera rehearsal — the director watches how the camera and the body interact in the actual space, not as they were imagined in preproduction. The first take reveals discrepancies between the storyboard and the reality of the space, the light, and the dancer\'s energy on that day. These discrepancies are information, not problems.',
        'The director should call the first take with the declared intention of learning, not capturing. After the first take, the team gathers and the director and DP discuss what they saw. Decisions about frame adjustments, lighting tweaks, and blocking modifications are made before the second take. Takes are logged on the slate and in the production log. Maximum six takes per shot — if no circled take by Take 4, stop and reassess.',
      ],
      subSections: [
        {
          title: 'Take Log Format',
          table: {
            headers: ['SHOT', 'TAKE', 'ENERGY', 'DIRECTOR NOTE'],
            rows: [
              ['4A — Chest up, still', 'T1', '4/5', 'Frame too tight — push back slightly. Good performance.'],
              ['4A — Chest up, still', 'T2', '5/5', 'CIRCLE. Perfect stillness into tremor. Lighting ideal.'],
              ['4B — Face macro', 'T1', '3/5', 'Eye track too fast. Needs to be imperceptible.'],
              ['4B — Face macro', 'T3', '5/5', 'CIRCLE. Barely perceptible. Hold at end is strong.'],
              ['4C — Wide room', 'T1', '4/5', 'Track started too early. Begin after 2 seconds of stillness.'],
              ['4C — Wide room', 'T2', '5/5', 'CIRCLE. Rise and arm opening timed perfectly with track.'],
            ],
          },
        },
      ],
    },
    example: {
      title: 'First Take Notes — Scene 3, Day 2: Isoko Group Sequence',
      lines: [
        'Planned: 24mm wide, circular track right, 5 dancers in full Isoko ceremonial vocabulary',
        '',
        'Camera rehearsal finding: Track position put camera in shadow of light rig.',
        'Solution: Shift track 18 inches forward. Adjust key light 15 degrees.',
        '',
        'Take 1: Dancers cold from reset. Energy 2/5. Track operator unsure of speed. No circle.',
        'Take 2: Energy 4/5. Track slightly too fast — arrived at end position before dancers peaked. No circle.',
        'Take 3: CIRCLE. Track operator matched dancer energy perfectly in final 20 seconds.',
        '         Dancer in center position hit the floor accent 2 frames before track stop. Usable.',
        '',
        'Isoko arm pattern in second dancer (SR position) dropped in Takes 1 and 2.',
        'Corrected in Take 3 after choreographer note between takes.',
      ],
    },
  },
  {
    number: '07',
    title: 'Run of First Edits',
    methodology: {
      paragraphs: [
        'The first edit is a structural assembly of all circled takes in sequence. It is not a fine cut. The purpose of the first edit is to find the film\'s actual length and rhythm — two qualities that almost always differ from preproduction estimates. Most dance films are over-long in first assembly because every circled take represents a strong performance moment, and the instinct is to use all of it. The first edit is where you learn what to give up.',
        'The first edit session should produce three outputs: the rough assembly with all circled takes, a structural note document recording what works and what does not, and a cut list identifying every moment that could be trimmed or removed. The director should not edit in isolation. The editor makes the first pass. The director watches and responds. The conversation between them is the creative core of the edit.',
      ],
      subSections: [
        {
          title: 'First Edit Protocol',
          list: [
            'Import all circled takes. Organize by scene number in project bins. Do not import non-circled takes yet.',
            'Assemble circled takes in storyboard order, cutting each at the storyboard\'s planned duration.',
            'Add temporary score stems as reference, not for rhythm decisions yet.',
            'Play back full assembly. Director and editor watch without stopping. No comments during playback.',
            'After playback: director marks every moment of attentional loss. Editor marks every technical concern.',
            'Build cut list. Discuss each item. Agree on structural changes before any cutting begins.',
          ],
        },
      ],
    },
    example: {
      title: 'Ten Poem Project — Assembly v0.1 Notes',
      lines: [
        'Total first assembly runtime: 4 minutes 42 seconds',
        'Target runtime: 7 to 10 minutes (festival standard for short dance film)',
        '',
        'Finding: Assembly is shorter than target, not longer.',
        'Scene 2 (descent) and Scene 5 (emergence) are each too short.',
        '',
        'Structural notes:',
        '  Scene 1 to Scene 2 transition: WORKS. Hard cut from stillness to drum downbeat lands correctly.',
        '  Scene 2: Needs 20–25 more seconds. B-roll material available to extend.',
        '  Scene 3: STRONG. Circular track lands perfectly. No changes.',
        '  Scene 3 to Scene 4: Hard cut to silence WORKS. Keep exactly as planned.',
        '  Scene 4: Tight and effective. 4B (face macro) could be 3 seconds shorter.',
        '  Scene 5: Needs additional group material. Consider adding overhead drone pass.',
        '  Scene 6: Hold is too short. Let the final image breathe to at least 12 seconds.',
      ],
    },
  },
  {
    number: '08',
    title: 'Production Runs',
    methodology: {
      paragraphs: [
        'A production run is a scheduled full-day or half-day shoot session with a defined shot list, confirmed crew call times, and a clear end target. Production runs for a dance film are planned around the dancer\'s energy and the light. The dancer\'s peak performance energy on any given day is typically in the two to three hours after warm-up. Plan the hardest, most technically demanding shots in that window. Schedule coverage and insert shots for the end of the day.',
        'The production run document serves as the crew call sheet, the schedule, the shot priority list, and the contingency plan in one document. Every crew member carries it. It specifies call time, first shot time, meal break, and wrap. It lists the shot priority sequence — which shots must be captured for the day to succeed, and which shots are secondary.',
      ],
      subSections: [
        {
          title: 'Production Run Schedule Template',
          table: {
            headers: ['TIME', 'ACTION', 'CREW LEAD', 'NOTES'],
            rows: [
              ['07:00', 'Crew call. Equipment load-in and setup.', 'AD', 'Location access confirmed day prior.'],
              ['08:30', 'Dancer arrival. Warm-up begins.', 'Choreographer', 'Full warm-up minimum 45 minutes.'],
              ['09:00', 'Camera and lighting check — first setup.', 'DP / Gaffer', 'DP confirms frame before dancer is on set.'],
              ['09:30', 'Camera rehearsal + Take 1, priority shot.', 'Director', 'Best energy window of the day.'],
              ['11:30', 'Setup for second shot. Dancer rests.', 'AD / DP', 'Transition time is 45 minutes.'],
              ['13:00', 'Meal break — 30 minutes.', 'All crew', 'No exceptions.'],
              ['13:30', 'Setup for third shot or B-roll coverage.', 'AD / DP', 'Secondary material.'],
              ['15:00', 'Insert shots, detail work, pick-ups.', 'DP', 'Low-energy shots. Dancer may not be needed.'],
              ['16:30', 'Final review. Confirm circled takes.', 'Director', 'Before equipment comes down.'],
              ['17:00', 'Wrap. Equipment strike.', 'AD / PA', 'Location must be clear by agreed time.'],
            ],
          },
        },
      ],
    },
    example: {
      title: 'Production Run — Day 1: Interrogation Room, Oscar Brockett Theatre Studio',
      lines: [
        'Location: Brockett Studio B  |  Call Time: 07:00',
        'Director: Sinclair Emoghene',
        '',
        'Priority shots this day:',
        '  P1 — Scene 4A: Chest up, sensor suit, tremor sequence. MUST get this day.',
        '  P2 — Scene 4B: Face macro, eye track. MUST get this day.',
        '  P3 — Scene 4C: Wide room, rising, circular track. Strong preference this day.',
        '  P4 — Scene 4D: Overhead drone, body on floor. Only if ceiling height permits.',
        '',
        'Contingency: If P3 and P4 slip, schedule half day on Day 3.',
        '',
        'Health and safety: Dancer in sensor suit for maximum 90 minutes continuous.',
        '  Mandatory break at 90 minutes. Suit off. 20 minutes rest.',
        '  Water and electrolytes on set at all times.',
      ],
    },
  },
  {
    number: '09',
    title: 'Lighting and Light Requirements',
    methodology: {
      paragraphs: [
        'Lighting a dance film is fundamentally different from lighting narrative film because the subject is in continuous motion across a large space. A static subject can be lit for a specific position. A moving body must be lit for a range of positions, orientations, and spatial relationships — all while preserving the visibility of movement quality, texture, and shadow. Shadow is not the enemy in dance film lighting. Controlled shadow that reveals the body\'s three-dimensionality is a primary compositional tool.',
        'The lighting plan should specify key light position, fill ratio, backlight or rim light position, and any practical lights in frame. For outdoor or natural light scenes, the plan specifies the time of day and the direction of the sun, and names the contingency if cloud cover changes the quality of the light.',
      ],
      subSections: [
        {
          title: 'Lighting Setup Reference',
          table: {
            headers: ['SETUP TYPE', 'DESCRIPTION AND USE'],
            rows: [
              ['Hard side-light', 'Single source from 90 degrees stage left or right. Reveals muscle definition and movement texture. Produces dramatic shadow. Ratio: 1:0 (no fill).'],
              ['Three-point', 'Key, fill, and backlight. Fill at half the key intensity. Backlight separates dancer from background. Ratio: 1:0.5 key to fill.'],
              ['Motivated practical', 'Uses practical lights in the location as the source — windows, industrial fixtures, street lights. Most naturalistic.'],
              ['Silhouette', 'Strong backlight, no front fill. Body becomes shape and line. Used for opening and closing images.'],
              ['Top light', 'Single source from directly overhead. Creates deeply shadowed eye sockets, dramatic quality. Excellent for confrontation or interrogation scenes.'],
              ['Golden hour', 'Outdoor, 30–60 minutes before sunset. Warm orange quality, long soft shadows, direction from a single low source. Plan the shot around this narrow window.'],
            ],
          },
        },
        {
          title: 'Color Temperature Guide',
          table: {
            headers: ['SOURCE', 'KELVIN / NOTE'],
            rows: [
              ['Daylight / sky', '5600K. Neutral. Match with LED panels at daylight setting for interior scenes.'],
              ['Golden hour sun', '2500K–3500K. Very warm. Preserve the warmth in camera. Correct in post only if needed.'],
              ['Tungsten practical', '3200K. Warm interior quality. LED panels at 3200K for matching.'],
              ['LED panels (adjustable)', '2700K–6500K. Full range for matching any mixed environment.'],
              ['Fluorescent (existing)', '4000K with green shift. Requires minus-green gel on camera or correction in post.'],
            ],
          },
        },
      ],
    },
    example: {
      title: 'Lighting Plan — Scene 4: Interrogation Room',
      lines: [
        'Intended quality: Institutional, slightly threatening. Controlled darkness. No naturalism.',
        '',
        'Key: Single Arri SkyPanel S60 at 5600K, 90 degrees stage left, 8 feet high, hard (no diffusion).',
        'Fill: None. Embrace the shadow on the SR side of the body.',
        'Backlight / rim: Small Dedolight at 3200K from behind-left at 45 degrees. Just catches the shoulder.',
        'Practical: One bare practical bulb in frame (background), 2700K, slightly underexposed.',
        'Camera ISO: 1600. Aperture T2.8 on 85mm.',
        '',
        'Scene 4D (overhead drone shot):',
        '  Astera Titan tube directly overhead, 4000K, full diffusion.',
        '  Wires on floor must catch the light — place a small practical near the body.',
        '',
        'Scene 6: Golden hour, exterior.',
        '  No artificial light. Natural source only.',
        '  Scout required 7 days before shoot for sun direction.',
        '  Backup plan: If overcast, reschedule. Do not shoot golden hour under cloud cover.',
      ],
    },
  },
  {
    number: '10',
    title: 'Color Edits',
    methodology: {
      paragraphs: [
        'Color grading in a dance film serves the emotional arc, the tradition being represented, and the visual coherence of the film. The colorist works from a look document that the director prepares in preproduction. This document describes the intended emotional register of each scene in color terms, identifies any specific references, and specifies the deliverable formats.',
        'For a dance film that draws on specific cultural traditions, the color grade must be considered in relation to skin tone and the visibility of movement detail. A grade that desaturates the image to create a cool, cinematic look may simultaneously flatten the dancer\'s skin and reduce the legibility of muscular detail. The colorist must balance aesthetic intention against the film\'s primary obligation, which is to make the movement visible and readable.',
      ],
      subSections: [
        {
          title: 'Look Document by Scene',
          table: {
            headers: ['SCENE', 'COLOR INTENTION'],
            rows: [
              ['S1 — Arrival', 'Desaturated blue-grey. Institutional cool. Body slightly underexposed. Skin barely warm.'],
              ['S2 — Descent / Memory', 'Warm shift begins. Earth tones enter. Ground takes on red-brown quality. Terracotta, dark water, deep green.'],
              ['S3 — Full vocabulary', 'Saturated, warm, full color. Skin richly rendered. No desaturation. Let the tradition be fully present.'],
              ['S4 — Interrogation', 'Return to institutional cool, harder contrast. More shadow crushing. Skin flattened by grade.'],
              ['S5 — Emergence', 'Warmest scene. Slight overexposure in highlights. Skin luminous. The emerging body should glow.'],
              ['S6 — Resolution', 'Golden hour warmth retained and extended. Single body, single warm light.'],
            ],
          },
        },
        {
          title: 'Color Pipeline',
          list: [
            'Shoot in S-Log3 / S-Gamut3.Cine (Sony) or LOG-C (ARRI). Never shoot in a picture profile.',
            'Apply LUT in DaVinci Resolve for monitoring on set — do not bake it in.',
            'Color session in DaVinci Resolve. Primary correction first — exposure, white balance, contrast.',
            'Secondary grade — skin tone node, saturation, shadow lift, highlight roll-off.',
            'Scene-to-scene match. Watch full sequence after each scene grade to confirm coherence.',
            'Export: ProRes 4444 master (Rec.709), H.264 for web, DCP on request for festival theatrical.',
          ],
        },
      ],
    },
    example: {
      title: 'Color Grade Note — Scene 2 to Scene 3 Transition',
      lines: [
        'Scene 2 grade: Lift the shadows slightly. Red-brown earth tones in the floor.',
        '  Skin: Warm but not overexposed. The body is returning to memory, not fully in it yet.',
        '  Highlights: Hold back. No bloom.',
        '  Tool: Qualifier on floor area in Resolve. Hue shift toward red-orange.',
        '',
        'Scene 3 grade: Full saturation. Warm. Skin luminous.',
        '  Move the vectorscope toward the skin tone line. Open up. Let the tradition breathe.',
        '  Shadows: Deep but not crushed. Movement detail must survive in the darker parts of the frame.',
        '  Contrast: S-curve, not a hard gamma. Smooth rolloff into highlights.',
        '',
        'Transition note:',
        '  Scene 2 ends slightly cooler than Scene 3 begins.',
        '  The grade shift happens at the cut — not across a dissolve.',
        '  The viewer may not consciously register the temperature shift, but they will feel the energetic change.',
      ],
    },
  },
  {
    number: '11',
    title: 'Sound Effects',
    methodology: {
      paragraphs: [
        'Sound effects in a dance film are a compositional layer distinct from both the score and any captured location audio. They work in the body — the audience hears them not just as ambient information but as physical sensation. A well-placed sound effect in a dance film can make the viewer feel weight, texture, breath, and spatial depth that the camera and score alone cannot produce.',
        'The sound design for a dance film falls into three categories: body sounds (breath, footfall, contact, fabric movement), environmental sounds (room tone, location-specific atmosphere, ecological sounds), and designed sounds (processed, synthetic, or layered sounds created in post to produce specific effects). All three categories must be considered for each scene.',
      ],
      subSections: [
        {
          title: 'Sound Design Categories',
          table: {
            headers: ['CATEGORY', 'DESCRIPTION AND EXAMPLES'],
            rows: [
              ['Body — breath', 'Recorded close-mic of the dancer\'s breath rhythm. Synchronized in post. Creates intimacy and physical presence. Cut breath sounds out of scored sections and let them return in quiet passages.'],
              ['Body — footfall', 'Contact microphone or Foley recording of bare foot or shoe on specific floor surface. Hardwood, concrete, grass, sand — each changes the character of the movement.'],
              ['Body — fabric', 'Foley of costume material. Silk, leather, cotton each read differently. Layer under movement sequences to add textural presence, especially in close-shot passages.'],
              ['Environmental — room tone', 'Clean recording of the location\'s ambient sound at rest. The ear registers its absence as artificial silence. Always record 2 minutes minimum per location.'],
              ['Environmental — ecological', 'Field recordings from the specific place the tradition originates. These ground the body in its land even across migration.'],
              ['Designed — processed movement', 'Sounds created from processed recordings of the movement itself. Record close-mic, process in Ableton or Max/MSP, layer under the score to make the movement audible.'],
              ['Designed — impact and accent', 'Designed percussive hits on specific movement accents. Used sparingly. Maximum three or four uses per film.'],
              ['Designed — spatial reverb', 'Processing that moves the sound environment from intimate to vast or vice versa. Used for scene transitions where spatial scale changes dramatically.'],
            ],
          },
        },
        {
          title: 'Sound Cue Sheet',
          table: {
            headers: ['TIMECODE', 'SCENE', 'EFFECT', 'SOURCE / NOTE'],
            rows: [
              ['0:00 – 0:18', 'S1 Arrival', 'Room tone — corridor. Distant footstep.', 'Location recording. Subtle. Under score.'],
              ['0:18 – 0:42', 'S2 Descent', 'Bare foot on hardwood Foley. Breath close-mic.', 'Foley session required. Sync to picture.'],
              ['0:42 – 1:15', 'S3 Full vocab', 'Ecological — ambient under score.', 'Field recording from archive. Full scene.'],
              ['1:15 – 1:45', 'S4 Retrograde', 'Processed movement audio — retrograde fabric sound.', 'Record costume, process in Ableton, reverse.'],
              ['1:45 – 2:30', 'S5 Emergence', 'Group breath synchronized. Room ambience opens.', '5 dancer breath close-mic. Blend in mix.'],
              ['2:30 – 3:00', 'S6 Final', 'Riverine ecological. Wind. Fade to pure room tone. Final 8 seconds: silence.', 'Field recording.'],
            ],
          },
        },
      ],
    },
    example: {
      title: 'Sound Design Session Plan — Ten Poem Project',
      lines: [
        'Software: Pro Tools for final mix. Ableton Live for sound design and processing.',
        '',
        'Session 1 — Foley:',
        '  Record: Bare foot on hardwood, concrete, sand/dirt.',
        '  Record: Costume fabric — full movement range in each garment worn in the film.',
        '  Record: Breath — dancer performs each major phrase close-mic. No music in room.',
        '',
        'Session 2 — Ecological assembly:',
        '  Pull Niger Delta field recordings from GMR archive.',
        '  Process in Ableton: Spectral stretch passages for Scene 6.',
        '',
        'Session 3 — Designed sounds:',
        '  Build Scene 4 impact: Combine subsonic sine wave (40Hz), body impact Foley, brief reversal of Scene 3 drum accent.',
        '  Build retrograde fabric sound: Record costume movement forward, reverse, stretch 200%.',
        '',
        'Session 4 — Final mix:',
        '  5.1 surround for theatrical / festival DCP.',
        '  Stereo downmix for web and streaming.',
        '  Loudness: -23 LUFS for broadcast / streaming. -18 LUFS for theatrical.',
      ],
    },
  },
];
