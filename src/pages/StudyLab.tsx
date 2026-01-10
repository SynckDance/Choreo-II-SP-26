import { Link } from 'react-router-dom';

const choreographers = [
  {
    name: 'Tyce Diorio',
    style: 'Commercial / Contemporary',
    video: 'https://youtu.be/fmGBVnz2d44',
    color: '#FF6B6B',
    prompt: 'How does Diorio blend commercial dance with emotional storytelling?'
  },
  {
    name: 'Brian Friedman',
    style: 'Commercial / Pop',
    video: 'https://youtu.be/S4THr88cn4Q',
    color: '#4D7CFF',
    prompt: 'What makes Friedman\'s choreography instantly recognizable in pop culture?'
  },
  {
    name: 'Crystal Pite',
    work: 'The Tempest',
    style: 'Contemporary / Theatre',
    video: 'https://youtu.be/160_fRFWzlU',
    color: '#A855F7',
    prompt: 'How does Pite use group dynamics to create theatrical narrative?'
  },
  {
    name: 'Akram Khan',
    work: 'Kaash',
    style: 'Kathak / Contemporary',
    video: 'https://youtu.be/ElpyMAbjAj8',
    color: '#4ECDC4',
    prompt: 'How does Khan fuse classical Kathak with contemporary movement?'
  },
  {
    name: 'Germaine Acogny',
    style: 'African Contemporary',
    video: 'https://youtu.be/27SL3TYxnAI',
    color: '#FF9F43',
    prompt: 'What is the "Mother of African Contemporary Dance" teaching us about roots?'
  },
  {
    name: 'Gregory Maqoma',
    style: 'African Contemporary',
    video: 'https://youtu.be/vjRdk3YMw20',
    color: '#FFE066',
    prompt: 'How does Maqoma address identity and history through movement?'
  },
  {
    name: 'Trisha Brown',
    style: 'Postmodern',
    video: 'https://youtu.be/4juID0hSyaw',
    color: '#4D7CFF',
    prompt: 'What can we learn from Brown\'s use of pedestrian movement and site-specificity?'
  },
  {
    name: 'Shapiro and Smith',
    work: 'To Have and To Hold',
    style: 'Contemporary',
    video: 'https://youtu.be/5A7d8MkWHxQ',
    color: '#FF6B6B',
    prompt: 'How do they explore partnership and intimacy through choreography?'
  },
  {
    name: 'Yvonne Rainer',
    style: 'Postmodern / Minimalist',
    video: 'https://youtu.be/_vHqIMFDbQI',
    color: '#4ECDC4',
    prompt: 'How did Rainer\'s "No Manifesto" change dance forever?'
  },
  {
    name: 'Kurt Jooss',
    style: 'Expressionist',
    video: 'https://youtu.be/z5L_4r6Ewwc',
    color: '#A855F7',
    prompt: 'What makes "The Green Table" still relevant after 90 years?'
  },
  {
    name: 'Mary Wigman',
    style: 'Expressionist',
    video: 'https://youtu.be/AtLSSuFlJ5c',
    color: '#FF9F43',
    prompt: 'How did Wigman\'s "Witch Dance" embody Ausdruckstanz?'
  },
  {
    name: 'Faustin Linyekula',
    style: 'African Contemporary',
    video: 'https://youtu.be/MlRFiWVhB18',
    color: '#FFE066',
    prompt: 'How does Linyekula use dance to excavate memory and history in Congo?'
  },
  {
    name: 'Hofesh Shechter',
    style: 'Contemporary / Theatre',
    video: 'https://youtu.be/-sXgZQ03h44',
    color: '#4D7CFF',
    prompt: 'How does Shechter create raw, visceral energy in his ensemble work?'
  },
  {
    name: 'Doris Humphrey',
    style: 'Modern',
    video: 'https://youtu.be/08HyZCA9z4Y',
    color: '#FF6B6B',
    prompt: 'How does Humphrey\'s "fall and recovery" principle inform your work?'
  },
  {
    name: 'Derek Hough',
    work: 'DWTS',
    style: 'Ballroom / Commercial',
    video: 'https://youtu.be/t8W4tyLo_oE',
    color: '#4ECDC4',
    prompt: 'How does Hough make ballroom dance accessible to mainstream audiences?'
  },
];

function getYouTubeId(url: string) {
  const match = url.match(/youtu\.be\/([^?]+)/) || url.match(/youtube\.com\/watch\?v=([^&]+)/);
  return match ? match[1] : '';
}

export function StudyLab() {
  return (
    <div className="page-container">
      <div className="badge badge-mint">Resources</div>
      <h1 className="page-title" style={{ marginTop: '1rem' }}>
        Study<br />
        <span style={{ color: '#A855F7' }}>Lab</span>
      </h1>
      <p className="page-subtitle">15 Choreographers to Inspire Your Practice</p>

      {/* Intro */}
      <div className="prose">
        <p>
          These choreographers represent diverse approaches to <span className="highlight-coral">movement creation</span>—from 
          postmodern minimalism to African contemporary, from commercial pop to expressionist theatre. 
          Watch, study, and let their work <span className="highlight-mint">inform your own</span>.
        </p>
      </div>

      {/* How to Use */}
      <div className="callout callout-blue" style={{ borderLeftColor: '#4D7CFF' }}>
        <div className="callout-title" style={{ color: '#4D7CFF' }}>How to Use This Lab</div>
        <ul className="content-list">
          <li>Watch each video with intention—take notes</li>
          <li>Consider the <strong>reflection prompt</strong> for each artist</li>
          <li>Discuss in class or with your collaborators</li>
          <li>Return to these artists throughout the semester</li>
        </ul>
      </div>

      {/* Video Grid */}
      <h2 className="section-heading">
        <span className="section-number">01</span>
        Featured Choreographers
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        {choreographers.map((artist, idx) => (
          <a 
            key={idx}
            href={artist.video}
            target="_blank"
            rel="noopener noreferrer"
            className="video-card"
            style={{ textDecoration: 'none' }}
          >
            {/* Thumbnail */}
            <div 
              className="video-card-thumbnail"
              style={{ 
                backgroundImage: `url(https://img.youtube.com/vi/${getYouTubeId(artist.video)}/hqdefault.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: artist.color,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: '#fff',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}>
                  ▶
                </div>
              </div>
            </div>
            
            {/* Info */}
            <div className="video-card-info">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span 
                  style={{ 
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.625rem',
                    background: artist.color,
                    color: artist.color === '#FFE066' ? '#0A0A0A' : '#fff',
                    padding: '0.25rem 0.5rem',
                    fontWeight: 700
                  }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span 
                  className="tag"
                  style={{ 
                    margin: 0, 
                    padding: '0.25rem 0.5rem',
                    fontSize: '0.5625rem',
                    border: 'none',
                    background: '#f0f0f0'
                  }}
                >
                  {artist.style}
                </span>
              </div>
              <div className="video-card-title">{artist.name}</div>
              {artist.work && (
                <div className="video-card-subtitle" style={{ marginBottom: '0.5rem' }}>
                  "{artist.work}"
                </div>
              )}
              <p style={{ 
                fontSize: '0.8125rem', 
                color: '#666', 
                margin: '0.75rem 0 0',
                fontStyle: 'italic',
                lineHeight: 1.5
              }}>
                {artist.prompt}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Categories */}
      <h2 className="section-heading">
        <span className="section-number">02</span>
        By Style
      </h2>

      <div className="three-col-grid">
        <div className="card">
          <div className="tag tag-coral" style={{ marginBottom: '1rem' }}>Modern / Postmodern</div>
          <ul className="content-list" style={{ margin: 0 }}>
            <li>Doris Humphrey</li>
            <li>Trisha Brown</li>
            <li>Yvonne Rainer</li>
          </ul>
        </div>
        <div className="card">
          <div className="tag tag-mint" style={{ marginBottom: '1rem' }}>African Contemporary</div>
          <ul className="content-list" style={{ margin: 0 }}>
            <li>Germaine Acogny</li>
            <li>Gregory Maqoma</li>
            <li>Faustin Linyekula</li>
          </ul>
        </div>
        <div className="card">
          <div className="tag tag-violet" style={{ marginBottom: '1rem' }}>Theatre / Expressionist</div>
          <ul className="content-list" style={{ margin: 0 }}>
            <li>Crystal Pite</li>
            <li>Kurt Jooss</li>
            <li>Mary Wigman</li>
            <li>Hofesh Shechter</li>
          </ul>
        </div>
      </div>

      <div className="two-col-grid">
        <div className="card">
          <div className="tag tag-blue" style={{ marginBottom: '1rem' }}>Commercial / Pop</div>
          <ul className="content-list" style={{ margin: 0 }}>
            <li>Tyce Diorio</li>
            <li>Brian Friedman</li>
            <li>Derek Hough</li>
          </ul>
        </div>
        <div className="card">
          <div className="tag tag-orange" style={{ marginBottom: '1rem' }}>Fusion / Contemporary</div>
          <ul className="content-list" style={{ margin: 0 }}>
            <li>Akram Khan</li>
            <li>Shapiro and Smith</li>
          </ul>
        </div>
      </div>

      {/* Reflection */}
      <div className="card-dark" style={{ marginTop: '3rem', padding: '2.5rem' }}>
        <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>
          Reflection Questions
        </h3>
        <ul className="content-list" style={{ margin: 0 }}>
          <li style={{ color: '#ccc' }}>What <span style={{ color: '#FF6B6B' }}>movement qualities</span> do you notice across different styles?</li>
          <li style={{ color: '#ccc' }}>How do these choreographers use <span style={{ color: '#4ECDC4' }}>space</span> differently?</li>
          <li style={{ color: '#ccc' }}>What role does <span style={{ color: '#FFE066' }}>music/sound</span> play in their work?</li>
          <li style={{ color: '#ccc' }}>Which artist's approach most resonates with your own <span style={{ color: '#A855F7' }}>creative vision</span>?</li>
        </ul>
      </div>

      {/* Navigation */}
      <div className="two-col-grid" style={{ marginTop: '3rem' }}>
        <Link to="/templates" className="card" style={{ textDecoration: 'none', textAlign: 'center' }}>
          <p style={{ margin: 0, fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', color: '#999' }}>NEXT</p>
          <p style={{ margin: '0.5rem 0 0', fontWeight: 700, color: '#0A0A0A' }}>Templates & Readings →</p>
        </Link>
        <Link to="/pathway-a" className="card" style={{ textDecoration: 'none', textAlign: 'center' }}>
          <p style={{ margin: 0, fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', color: '#999' }}>APPLY</p>
          <p style={{ margin: '0.5rem 0 0', fontWeight: 700, color: '#0A0A0A' }}>Artistic Ideation →</p>
        </Link>
      </div>

    </div>
  );
}
