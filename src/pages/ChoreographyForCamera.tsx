import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function ChoreographyForCamera() {
  const [activeSection, setActiveSection] = useState<'video' | 'concepts' | 'notes'>('video');

  const keyConcepts = [
    {
      id: 'nuance',
      title: 'Nuance',
      time: '1:48',
      desc: 'Unlike stage performances where movements need to be big, film allows for small, subtle details — fingers moving, shoulder blades tightening. The audience is privy to every detail.',
      icon: '🔍'
    },
    {
      id: 'speed',
      title: 'Speed',
      time: '3:10',
      desc: 'Dance filmmaking allows manipulation of speed through slow motion, fast motion, time-lapses, and repetitions. These should enhance the choreography and story, not cover up lazy work.',
      icon: '⚡'
    },
    {
      id: 'pace',
      title: 'Pace',
      time: '4:22',
      desc: 'The ability to switch angles makes choreography extremely fluid on camera. You can manipulate the rhythm at which the audience discovers the movement and skip boring transitions.',
      icon: '🎬'
    },
    {
      id: 'depth',
      title: 'Depth',
      time: '5:22',
      desc: 'The camera offers endless possibilities — positioning, cutting off or accentuating body parts, playing with focus, forming unique relationships between dancers, bodies, and space.',
      icon: '📐'
    },
    {
      id: 'team-player',
      title: 'Choreography as Team Player',
      time: '6:03',
      desc: 'Choreography is only one piece of the puzzle. It must exist harmoniously with story, cinematography, concept, location, production design, and dancers\' abilities.',
      icon: '🤝'
    },
    {
      id: 'adapt-dancers',
      title: 'Adapt to Your Dancers',
      time: '8:27',
      desc: 'Adapt movement language to the strengths of your dancers. Strong performers are valuable — flexibility is key, even if it means adjusting pre-choreographed phrases.',
      icon: '💪'
    },
    {
      id: 'adapt-location',
      title: 'Adapt to the Location',
      time: '9:53',
      desc: 'Choreography for camera is often site-specific. Ideas should not be rigid — movements may look different in various settings. Let the location inform the choreography.',
      icon: '📍'
    },
    {
      id: 'camera-mind',
      title: 'Choreograph with Camera in Mind',
      time: '12:20',
      desc: 'Consider how the camera captures movement from different heights, angles, and distances. Film with your phone during rehearsals. Invite your DP to rehearsals.',
      icon: '📱'
    },
    {
      id: 'improvisation',
      title: 'The Pillars Technique',
      time: '17:26',
      desc: 'Use "pillars" — short choreographed phrases before and after improvisation. Dancers repeat as camera switches angles. Crucial for smooth editing transitions.',
      icon: '🏛️'
    },
    {
      id: 'directing',
      title: 'Directing Dancers',
      time: '19:46',
      desc: 'Communicate clear intention about tone and emotion. Portray confidence and have a clear vision. Be honest and direct — it leads to respect and great performances.',
      icon: '🎯'
    }
  ];

  const practiceNotes = [
    {
      title: 'Think Small for Camera Nuance',
      note: 'Unlike the stage where large movements are necessary, the camera captures subtle details like a twitch of an ear or tightening shoulder blades. Actively choreograph and encourage dancers to explore these minute movements.'
    },
    {
      title: 'Embrace Speed Manipulation Delicately',
      note: 'Use slow motion, fast motion, and time-lapses to enhance your story, but avoid overusing them simply to "look cool" or cover up weak choreography. Ensure speed changes serve a narrative purpose.'
    },
    {
      title: 'Manipulate Pace Through Editing',
      note: 'Film allows you to control how the audience discovers your choreography. Use cuts and angles to reveal layers of movement at your own pace, skipping unnecessary transitions found in live performance.'
    },
    {
      title: 'Choreograph for Depth with Camera Positioning',
      note: 'Experiment with unique camera angles, heights, and distances. Play with focus to guide the viewer\'s eye and explore how different perspectives create unique relationships between dancers, their bodies, and the space.'
    },
    {
      title: 'Ensure Choreography is a Team Player',
      note: 'Your choreography shouldn\'t exist in isolation. It needs to harmonize with every other element — story, cinematography, location, and production design. Adapt your movement to fit the overall concept.'
    },
    {
      title: 'Adapt to Your Dancers\' Strengths',
      note: 'Be flexible with your choreography. If a dancer struggles with a specific movement, adapt to their strengths rather than forcing it. Strong performers are valuable assets.'
    },
    {
      title: 'Embrace Site-Specificity',
      note: 'Your location is a key element. Don\'t be too married to studio-choreographed pieces; be prepared to adjust to fit the environment. Look for ways the space (walls, pillars, natural elements) can integrate with the choreography.'
    },
    {
      title: 'Pre-Visualize with the Camera in Mind',
      note: 'Film your choreography with a phone from different angles during rehearsals. Invite your DP to rehearsals for test shots. This conversation between director, choreographer, and DP is crucial.'
    },
    {
      title: 'Integrate Improvisation with "Pillars"',
      note: 'Use short choreographed "pillar" phrases at the beginning and end of longer improvised sections. This allows smooth transitions in editing, making the film look intentionally choreographed even with significant improv.'
    },
    {
      title: 'Communicate Clear Intention',
      note: 'Be explicit about the tone and emotion you want (happy, melancholic, angry). Clear intention will significantly change how dancers perform the same choreography.'
    },
    {
      title: 'Portray Confidence and Be Honest',
      note: 'Dancers need to trust their director. Have a clear vision and confidence. Honest and blunt feedback (about unison, facial expressions, energy) is essential for moving from mediocre to great.'
    }
  ];

  return (
    <div className="camera-lesson">
      <style>{`
        .camera-lesson {
          max-width: 1000px;
          margin: 0 auto;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .breadcrumb a {
          color: var(--text-secondary);
          text-decoration: none;
        }

        .breadcrumb a:hover {
          color: var(--accent);
        }

        .lesson-header {
          margin-bottom: 2rem;
        }

        .lesson-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          padding: 0.35rem 0.75rem;
          background: linear-gradient(135deg, #6366F1, #8B5CF6);
          color: white;
          border-radius: 4px;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .lesson-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 600;
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }

        .lesson-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .lesson-meta-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .lesson-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 700px;
        }

        .instructor-note {
          margin-top: 1rem;
          padding: 1rem 1.25rem;
          background: rgba(99, 102, 241, 0.08);
          border-left: 3px solid #6366F1;
          border-radius: 0 8px 8px 0;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .instructor-note strong {
          color: var(--text-primary);
        }

        /* Section Tabs */
        .section-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border);
          padding-bottom: 0.5rem;
        }

        .section-tab {
          padding: 0.75rem 1.25rem;
          background: transparent;
          border: none;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          border-radius: 6px 6px 0 0;
          transition: all 0.2s ease;
        }

        .section-tab:hover {
          color: var(--text-primary);
          background: var(--border-light);
        }

        .section-tab.active {
          color: #6366F1;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-bottom: 1px solid var(--bg-secondary);
          margin-bottom: -1px;
        }

        /* Video Section */
        .video-container {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
        }

        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
        }

        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .video-info {
          padding: 1.5rem;
          border-top: 1px solid var(--border);
        }

        .video-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .video-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1rem;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 6px;
          font-size: 0.85rem;
          color: var(--text-primary);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .video-link:hover {
          border-color: #6366F1;
          color: #6366F1;
        }

        /* Concepts Grid */
        .concepts-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .concept-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1.25rem;
          transition: all 0.2s ease;
        }

        .concept-card:hover {
          border-color: #6366F1;
          transform: translateY(-2px);
        }

        .concept-header {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .concept-icon {
          font-size: 1.5rem;
          line-height: 1;
        }

        .concept-title {
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        .concept-time {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: #6366F1;
        }

        .concept-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Practice Notes */
        .notes-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .note-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1.25rem 1.5rem;
        }

        .note-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #6366F1, #8B5CF6);
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 50%;
          margin-right: 0.75rem;
        }

        .note-title {
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 0.5rem;
          display: inline;
        }

        .note-text {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-top: 0.5rem;
        }

        /* Reflection Prompt */
        .reflection-box {
          margin-top: 2rem;
          padding: 1.5rem;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(139, 92, 246, 0.08));
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 12px;
        }

        .reflection-title {
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .reflection-questions {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.8;
        }

        .reflection-questions li {
          margin-bottom: 0.5rem;
        }

        @media (max-width: 768px) {
          .concepts-grid {
            grid-template-columns: 1fr;
          }

          .section-tabs {
            flex-wrap: wrap;
          }
        }
      `}</style>

      <nav className="breadcrumb">
        <NavLink to="/labs">Labs</NavLink>
        <span>→</span>
        <span>Choreography for the Camera</span>
      </nav>

      <header className="lesson-header">
        <div className="lesson-badge">🎬 Film Lab • Free Lesson</div>
        <h1 className="lesson-title">Choreography for the Camera</h1>
        <div className="lesson-meta">
          <span className="lesson-meta-item">👤 Nadav Heyman</span>
          <span className="lesson-meta-item">⏱️ ~25 min</span>
          <span className="lesson-meta-item">📍 dancefilmmaking.com</span>
        </div>
        <p className="lesson-desc">
          A comprehensive lesson on choreographing specifically for the camera, highlighting the key differences 
          between stage choreography and dance filmmaking. Learn techniques for nuance, speed, pace, depth, 
          and how to adapt your work to dancers, locations, and the camera itself.
        </p>
        <div className="instructor-note">
          <strong>Note from Prof. Emoghene:</strong> Nadav Heyman is the creator of dancefilmmaking.com, 
          the leading platform for dance films worldwide. I serve as one of the main curators on the platform. 
          This lesson is foundational for anyone working in dance on film.
        </div>
      </header>

      <div className="section-tabs">
        <button
          className={`section-tab ${activeSection === 'video' ? 'active' : ''}`}
          onClick={() => setActiveSection('video')}
        >
          📺 Watch Lesson
        </button>
        <button
          className={`section-tab ${activeSection === 'concepts' ? 'active' : ''}`}
          onClick={() => setActiveSection('concepts')}
        >
          💡 Key Concepts
        </button>
        <button
          className={`section-tab ${activeSection === 'notes' ? 'active' : ''}`}
          onClick={() => setActiveSection('notes')}
        >
          📝 Practice Notes
        </button>
      </div>

      {activeSection === 'video' && (
        <div className="video-container">
          <div className="video-wrapper">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/jOhCZnIq8GM?si=US3hp7G7jkroVk8g" 
              title="Choreography for the Camera - Nadav Heyman"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            />
          </div>
          <div className="video-info">
            <div className="video-links">
              <a 
                href="https://www.dancefilmmaking.com/film/choreography-for-the-camera-(free-lesson)" 
                target="_blank" 
                rel="noopener noreferrer"
                className="video-link"
              >
                🌐 View on dancefilmmaking.com
              </a>
              <a 
                href="https://masterclass.dancefilmmaking.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="video-link"
              >
                🎓 Full Masterclass
              </a>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'concepts' && (
        <>
          <div className="concepts-grid">
            {keyConcepts.map((concept) => (
              <div key={concept.id} className="concept-card">
                <div className="concept-header">
                  <span className="concept-icon">{concept.icon}</span>
                  <div>
                    <div className="concept-title">{concept.title}</div>
                    <div className="concept-time">{concept.time}</div>
                  </div>
                </div>
                <p className="concept-desc">{concept.desc}</p>
              </div>
            ))}
          </div>

          <div className="reflection-box">
            <div className="reflection-title">🤔 Reflection Questions</div>
            <ul className="reflection-questions">
              <li>How might your current choreography change if you thought "small" for the camera?</li>
              <li>What unique features of your filming location could inform the movement?</li>
              <li>Where could you use the "pillars" technique in your piece?</li>
              <li>How would you describe the tone/emotion of your film to your dancers?</li>
            </ul>
          </div>
        </>
      )}

      {activeSection === 'notes' && (
        <>
          <div className="notes-list">
            {practiceNotes.map((note, index) => (
              <div key={index} className="note-card">
                <span className="note-number">{index + 1}</span>
                <span className="note-title">{note.title}</span>
                <p className="note-text">{note.note}</p>
              </div>
            ))}
          </div>

          <div className="reflection-box">
            <div className="reflection-title">✍️ Apply to Your Work</div>
            <ul className="reflection-questions">
              <li>Pick 3 notes from above that are most relevant to your current project.</li>
              <li>For each, write one specific action you'll take in your next rehearsal or shoot.</li>
              <li>After filming, revisit this list — what worked? What would you do differently?</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
