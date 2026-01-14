const choreographers = [
  { id: 1, name: 'Tyce Diorio', video: 'https://youtu.be/fmGBVnz2d44', style: 'Commercial/Contemporary', thumbnail: 'https://img.youtube.com/vi/fmGBVnz2d44/hqdefault.jpg' },
  { id: 2, name: 'Brian Friedman', video: 'https://youtu.be/S4THr88cn4Q', style: 'Commercial/Pop', thumbnail: 'https://img.youtube.com/vi/S4THr88cn4Q/hqdefault.jpg' },
  { id: 3, name: 'Crystal Pite', work: 'The Tempest', video: 'https://youtu.be/160_fRFWzlU', style: 'Contemporary/Theatre', thumbnail: 'https://img.youtube.com/vi/160_fRFWzlU/hqdefault.jpg' },
  { id: 4, name: 'Akram Khan', work: 'Kaash', video: 'https://youtu.be/ElpyMAbjAj8', style: 'Kathak/Contemporary', thumbnail: 'https://img.youtube.com/vi/ElpyMAbjAj8/hqdefault.jpg' },
  { id: 5, name: 'Germaine Acogny', video: 'https://youtu.be/27SL3TYxnAI', style: 'African Contemporary', thumbnail: 'https://img.youtube.com/vi/27SL3TYxnAI/hqdefault.jpg' },
  { id: 6, name: 'Gregory Maqoma', video: 'https://youtu.be/vjRdk3YMw20', style: 'African Contemporary', thumbnail: 'https://img.youtube.com/vi/vjRdk3YMw20/hqdefault.jpg' },
  { id: 7, name: 'Trisha Brown', video: 'https://youtu.be/4juID0hSyaw', style: 'Postmodern', thumbnail: 'https://img.youtube.com/vi/4juID0hSyaw/hqdefault.jpg' },
  { id: 8, name: 'Shapiro and Smith', video: 'https://youtu.be/5A7d8MkWHxQ', style: 'Contemporary', thumbnail: 'https://img.youtube.com/vi/5A7d8MkWHxQ/hqdefault.jpg' },
  { id: 9, name: 'Yvonne Rainer', video: 'https://youtu.be/_vHqIMFDbQI', style: 'Postmodern/Minimalist', thumbnail: 'https://img.youtube.com/vi/_vHqIMFDbQI/hqdefault.jpg' },
  { id: 10, name: 'Kurt Jooss', video: 'https://youtu.be/z5L_4r6Ewwc', style: 'Expressionist', thumbnail: 'https://img.youtube.com/vi/z5L_4r6Ewwc/hqdefault.jpg' },
  { id: 11, name: 'Mary Wigman', video: 'https://youtu.be/AtLSSuFlJ5c', style: 'Expressionist', thumbnail: 'https://img.youtube.com/vi/AtLSSuFlJ5c/hqdefault.jpg' },
  { id: 12, name: 'Faustin Linyekula', video: 'https://youtu.be/MlRFiWVhB18', style: 'African Contemporary', thumbnail: 'https://img.youtube.com/vi/MlRFiWVhB18/hqdefault.jpg' },
  { id: 13, name: 'Hofesh Shechter', video: 'https://youtu.be/-sXgZQ03h44', style: 'Contemporary/Theatre', thumbnail: 'https://img.youtube.com/vi/-sXgZQ03h44/hqdefault.jpg' },
  { id: 14, name: 'Doris Humphrey', video: 'https://youtu.be/08HyZCA9z4Y', style: 'Modern', thumbnail: 'https://img.youtube.com/vi/08HyZCA9z4Y/hqdefault.jpg' },
  { id: 15, name: 'Derek Hough', work: 'DWTS', video: 'https://youtu.be/t8W4tyLo_oE', style: 'Ballroom/Commercial', thumbnail: 'https://img.youtube.com/vi/t8W4tyLo_oE/hqdefault.jpg' },
];

export default function StudyLab() {
  return (
    <div className="studylab-page">
      <style>{`
        .studylab-page {
          max-width: 1100px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: 2.5rem;
        }

        .page-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .page-subtitle {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 700px;
        }

        /* Reflection Prompts */
        .reflection-box {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: 0 8px 8px 0;
          padding: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .reflection-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent);
          margin-bottom: 0.75rem;
        }

        .reflection-list {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 0.5rem;
        }

        .reflection-list li {
          font-size: 0.85rem;
          color: var(--text-secondary);
          padding: 0.35rem 0;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .reflection-list li::before {
          content: "→";
          color: var(--accent);
          flex-shrink: 0;
        }

        /* Video Grid */
        .video-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.25rem;
        }

        .video-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.2s ease;
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .video-card:hover {
          border-color: var(--accent);
          transform: translateY(-3px);
          box-shadow: var(--shadow-lg);
        }

        .video-thumb {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          background: #000;
          overflow: hidden;
        }

        .video-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.9;
          transition: opacity 0.2s ease;
        }

        .video-card:hover .video-thumb img {
          opacity: 1;
        }

        .video-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          background: rgba(232, 93, 4, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
          transition: all 0.2s ease;
        }

        .video-card:hover .video-play {
          background: var(--accent);
          transform: translate(-50%, -50%) scale(1.1);
        }

        .video-number {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          background: rgba(0,0,0,0.7);
          color: white;
          border-radius: 4px;
        }

        .video-info {
          padding: 1rem 1.25rem;
        }

        .video-name {
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        .video-work {
          font-style: italic;
          color: var(--text-secondary);
          font-size: 0.85rem;
        }

        .video-style {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: var(--accent);
          margin-top: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @media (max-width: 600px) {
          .video-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="page-header">
        <h1 className="page-title">Study Lab</h1>
        <p className="page-subtitle">
          Investigate works by notable choreographers. Study how master dance-makers have solved problems of craft. 
          What works? What does not? Why?
        </p>
      </div>

      <div className="reflection-box">
        <div className="reflection-title">Reflection Prompts</div>
        <ul className="reflection-list">
          <li>What catches my attention first?</li>
          <li>How does the movement relate to space?</li>
          <li>What is the relationship between sound and movement?</li>
          <li>How are transitions handled?</li>
          <li>What risks does the choreographer take?</li>
          <li>What would I borrow? What would I refuse?</li>
        </ul>
      </div>

      <div className="video-grid">
        {choreographers.map((c) => (
          <a
            key={c.id}
            href={c.video}
            target="_blank"
            rel="noopener noreferrer"
            className="video-card"
          >
            <div className="video-thumb">
              <img src={c.thumbnail} alt={c.name} />
              <div className="video-play">▶</div>
              <div className="video-number">#{c.id}</div>
            </div>
            <div className="video-info">
              <div className="video-name">{c.name}</div>
              {c.work && <div className="video-work">"{c.work}"</div>}
              <div className="video-style">{c.style}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
