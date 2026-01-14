export default function Books() {
  const requiredBooks = [
    {
      title: "A Choreographer's Handbook",
      author: 'Jonathan Burrows',
      publisher: 'Routledge',
      year: '2024',
      edition: '2nd Edition',
      isbn: '978-1032629018',
      description: 'On choreography: "Choreography is a negotiation with the patterns your body is thinking." This updated edition invites the reader to investigate how and why to make a dance performance through stories, questions, ideas, and paradoxes.',
      cover: '📘'
    },
    {
      title: "Liz Lerman's Critical Response Process",
      author: 'Liz Lerman and John Borstel',
      publisher: 'Contact Quarterly',
      year: '2008',
      edition: '',
      isbn: '',
      description: 'A facilitated, four-step method that emphasizes the values of dialogue and inquiry. Offers choreographers the opportunity to exercise control over the criticism directed at their work through Statements of Meaning, Artist as Questioner, Neutral Questions, and Permission Options.',
      cover: '📗'
    },
    {
      title: 'Sensational Knowledge: Embodying Culture Through Japanese Dance',
      author: 'Tomie Hahn',
      publisher: 'Wesleyan University Press',
      year: '2007',
      edition: '1st Edition (includes DVD)',
      isbn: '978-0819568359',
      description: 'Understanding that making dance stems from embodied knowledge, external stimuli, and creative inquiry. Explores sensual orientations, energetic sensibilities, aesthetics, and modes of transmission.',
      cover: '📙'
    },
  ];

  const recommendedBooks = [
    {
      title: 'Choreographing Differences: The Body and Identity in Contemporary Dance',
      author: 'Ann Cooper Albright',
      publisher: 'Wesleyan University Press',
      year: '1997',
      description: 'Examines how the dancing body can articulate cultural identities and challenge normative representations.',
      cover: '📕'
    },
    {
      title: 'How to Avoid Making Art',
      author: 'Julia Cameron',
      publisher: 'Penguin Books',
      year: '2005',
      description: 'A guide to overcoming creative blocks and embracing the artistic process.',
      cover: '📓'
    },
    {
      title: 'The Intimate Act of Choreography',
      author: 'Lynne Anne Blom and L. Tarin Chaplin',
      publisher: 'University of Pittsburgh Press',
      year: '',
      description: 'A foundational text on choreographic craft and the creative process of making dances.',
      cover: '📔'
    },
  ];

  return (
    <div className="books-page">
      <style>{`
        .books-page {
          max-width: 900px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: 3rem;
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
          max-width: 600px;
        }

        /* Section */
        .section {
          margin-bottom: 3rem;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .section-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.35rem 0.65rem;
          border-radius: 4px;
        }

        .section-badge.required {
          background: var(--accent);
          color: white;
        }

        .section-badge.recommended {
          background: var(--border);
          color: var(--text-secondary);
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 600;
        }

        /* Book Card */
        .book-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.75rem;
          margin-bottom: 1rem;
          display: grid;
          grid-template-columns: 60px 1fr;
          gap: 1.5rem;
          transition: all 0.2s ease;
        }

        .book-card:hover {
          border-color: var(--text-muted);
          box-shadow: var(--shadow);
        }

        .book-cover {
          font-size: 2.5rem;
          text-align: center;
        }

        .book-info {
          min-width: 0;
        }

        .book-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          font-weight: 600;
          margin-bottom: 0.35rem;
          line-height: 1.3;
        }

        .book-author {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
        }

        .book-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1rem;
          margin-bottom: 1rem;
        }

        .book-meta-item {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .book-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Recommended cards are simpler */
        .book-card.recommended {
          grid-template-columns: 40px 1fr;
          gap: 1rem;
          padding: 1.25rem;
        }

        .book-card.recommended .book-cover {
          font-size: 1.75rem;
        }

        .book-card.recommended .book-title {
          font-size: 1rem;
        }

        .book-card.recommended .book-desc {
          font-size: 0.8rem;
        }

        @media (max-width: 600px) {
          .book-card {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .book-cover {
            text-align: left;
          }
        }
      `}</style>

      <div className="page-header">
        <h1 className="page-title">Books</h1>
        <p className="page-subtitle">
          Required and recommended readings for Choreography II. These texts support your growth as a dance-maker, 
          collaborator, and critical thinker.
        </p>
      </div>

      <div className="section">
        <div className="section-header">
          <span className="section-badge required">Required</span>
          <h2 className="section-title">Course Texts</h2>
        </div>

        {requiredBooks.map((book, i) => (
          <div key={i} className="book-card">
            <div className="book-cover">{book.cover}</div>
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">{book.author}</p>
              <div className="book-meta">
                <span className="book-meta-item">{book.publisher}</span>
                {book.year && <span className="book-meta-item">{book.year}</span>}
                {book.edition && <span className="book-meta-item">{book.edition}</span>}
                {book.isbn && <span className="book-meta-item">ISBN: {book.isbn}</span>}
              </div>
              <p className="book-desc">{book.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="section">
        <div className="section-header">
          <span className="section-badge recommended">Suggested</span>
          <h2 className="section-title">Additional Reads</h2>
        </div>

        {recommendedBooks.map((book, i) => (
          <div key={i} className="book-card recommended">
            <div className="book-cover">{book.cover}</div>
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">{book.author} · {book.publisher} {book.year && `(${book.year})`}</p>
              <p className="book-desc">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
