import { NavLink } from 'react-router-dom';

interface Resource {
  id: string;
  title: string;
  desc: string;
  url: string;
  tags: string[];
  icon: string;
  category: 'production' | 'research' | 'film' | 'venue';
}

export default function Resources() {
  const resources: Resource[] = [
    // Production Resources
    {
      id: 'costume-stock',
      title: 'UT Costume Stock',
      desc: 'Large diverse costume collection in Winship B.106. Free for UT Theatre & Dance students for class projects, New Works Festival, and EVOLUTION.',
      url: 'https://cloud.wikis.utexas.edu/wiki/spaces/tad/pages/71391057/UT+Costume+Stock+past',
      tags: ['Free', 'UT Resource', 'Costumes'],
      icon: '👗',
      category: 'production'
    },
    {
      id: 'prop-shop',
      title: 'TPA Prop Stock',
      desc: 'Furniture, hand props, and set dressing available for checkout. Free for UT Austin class, thesis, or curriculum projects.',
      url: 'https://sites.google.com/site/utpropshop/home',
      tags: ['Free', 'UT Resource', 'Props'],
      icon: '🪑',
      category: 'production'
    },
    {
      id: 'foundry',
      title: 'UT Foundry',
      desc: 'COFA Library makerspace with sewing machines, recording booths, and 3D printers for student use.',
      url: 'https://www.lib.utexas.edu/visit-us/library-spaces/foundry',
      tags: ['Free', 'UT Resource', 'Making'],
      icon: '🔧',
      category: 'production'
    },
    {
      id: 'creative-reuse',
      title: 'Austin Creative Reuse',
      desc: 'Affordable gently used crafting materials. Great for production design on a budget.',
      url: 'https://austincreativereuse.org/',
      tags: ['Budget', 'Local', 'Materials'],
      icon: '♻️',
      category: 'production'
    },
    // Film Resources
    {
      id: 'numeridanse',
      title: 'Numeridanse',
      desc: 'Free international dance video library with 800+ dance films, documentaries, and performances.',
      url: 'https://numeridanse.com/en/publication/category/dance-films/',
      tags: ['Watch', 'Research', 'Free'],
      icon: '🎬',
      category: 'film'
    },
    {
      id: 'dancefilmmaking',
      title: 'Dance Filmmaking',
      desc: 'The #1 online hub for dance films and screendance. Curated films from around the world.',
      url: 'https://www.dancefilmmaking.com',
      tags: ['Watch', 'Learn', 'Submit'],
      icon: '🎥',
      category: 'film'
    },
    {
      id: 'masterclass',
      title: 'Dance Filmmaking Masterclass',
      desc: 'Comprehensive course on conceptualization, cinematography, and editing by Nadav Heyman.',
      url: 'https://masterclass.dancefilmmaking.com/',
      tags: ['Course', 'Recommended'],
      icon: '🎓',
      category: 'film'
    },
    {
      id: 'danceoncamera',
      title: 'Dance on Camera',
      desc: 'Organization fostering connections between dance and film. Festival screenings and filmmaker support.',
      url: 'https://www.dancefilms.org/',
      tags: ['Festival', 'Community'],
      icon: '📽️',
      category: 'film'
    },
    // Venue Resources
    {
      id: 'payne-theatre',
      title: 'B. Iden Payne Theatre',
      desc: 'Technical specifications, equipment lists, and stage plots for our performance venue.',
      url: '/resources/stage-designs',
      tags: ['Stage', 'Technical'],
      icon: '🎭',
      category: 'venue'
    }
  ];

  const categories = [
    { id: 'production', title: 'Production Resources', desc: 'Costumes, props, materials, and making' },
    { id: 'film', title: 'Film Resources', desc: 'Dance on screen — watch, learn, submit' },
    { id: 'venue', title: 'Venue & Technical', desc: 'Theatre specifications and stage design' }
  ];

  return (
    <div className="resources-page">
      <style>{`
        .resources-page {
          max-width: 1000px;
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
          max-width: 600px;
        }

        .category-section {
          margin-bottom: 3rem;
        }

        .category-header {
          margin-bottom: 1.5rem;
        }

        .category-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .category-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .resource-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.5rem;
          text-decoration: none;
          color: inherit;
          transition: all 0.2s ease;
          display: block;
        }

        .resource-card:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .resource-card.internal:hover {
          border-color: #E85D04;
        }

        .resource-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .resource-icon {
          font-size: 2rem;
          line-height: 1;
        }

        .resource-title {
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 0.35rem;
        }

        .resource-tags {
          display: flex;
          gap: 0.35rem;
          flex-wrap: wrap;
        }

        .resource-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          padding: 0.2rem 0.5rem;
          background: var(--border-light);
          color: var(--text-muted);
          border-radius: 4px;
          text-transform: uppercase;
        }

        .resource-tag.free {
          background: rgba(16, 185, 129, 0.1);
          color: #10B981;
        }

        .resource-tag.ut {
          background: rgba(191, 87, 0, 0.1);
          color: #BF5700;
        }

        .resource-tag.recommended {
          background: rgba(99, 102, 241, 0.1);
          color: #6366F1;
        }

        .resource-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .resource-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          margin-top: 0.75rem;
          font-size: 0.85rem;
          color: var(--accent);
          font-weight: 500;
        }

        .contact-note {
          margin-top: 2rem;
          padding: 1.25rem 1.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 10px;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .contact-note strong {
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .resources-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <header className="page-header">
        <h1 className="page-title">Resources</h1>
        <p className="page-subtitle">
          Tools, materials, and references to support your EVOLUTION projects — from costumes and props to film libraries and technical specs.
        </p>
      </header>

      {categories.map((category) => {
        const categoryResources = resources.filter(r => r.category === category.id);
        if (categoryResources.length === 0) return null;
        
        return (
          <section key={category.id} className="category-section">
            <div className="category-header">
              <h2 className="category-title">{category.title}</h2>
              <p className="category-desc">{category.desc}</p>
            </div>
            <div className="resources-grid">
              {categoryResources.map((resource) => {
                const isInternal = resource.url.startsWith('/');
                
                if (isInternal) {
                  return (
                    <NavLink 
                      key={resource.id} 
                      to={resource.url}
                      className="resource-card internal"
                    >
                      <div className="resource-header">
                        <span className="resource-icon">{resource.icon}</span>
                        <div>
                          <div className="resource-title">{resource.title}</div>
                          <div className="resource-tags">
                            {resource.tags.map((tag) => (
                              <span 
                                key={tag} 
                                className={`resource-tag ${
                                  tag.toLowerCase() === 'free' ? 'free' : 
                                  tag.toLowerCase() === 'ut resource' ? 'ut' :
                                  tag.toLowerCase() === 'recommended' ? 'recommended' : ''
                                }`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="resource-desc">{resource.desc}</p>
                      <span className="resource-link">View →</span>
                    </NavLink>
                  );
                }
                
                return (
                  <a 
                    key={resource.id} 
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-card"
                  >
                    <div className="resource-header">
                      <span className="resource-icon">{resource.icon}</span>
                      <div>
                        <div className="resource-title">{resource.title}</div>
                        <div className="resource-tags">
                          {resource.tags.map((tag) => (
                            <span 
                              key={tag} 
                              className={`resource-tag ${
                                tag.toLowerCase() === 'free' ? 'free' : 
                                tag.toLowerCase() === 'ut resource' ? 'ut' :
                                tag.toLowerCase() === 'recommended' ? 'recommended' : ''
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="resource-desc">{resource.desc}</p>
                    <span className="resource-link">Visit site →</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}

      <div className="contact-note">
        <strong>Need help accessing a resource?</strong> Reach out to <strong>Annie (TA)</strong> or <strong>Prof. Emoghene</strong>. 
        For costume appointments, email <a href="mailto:utcostumerental@gmail.com">utcostumerental@gmail.com</a>. 
        For props, contact <a href="mailto:amurphy@texasperformingarts.org">amurphy@texasperformingarts.org</a>.
      </div>
    </div>
  );
}
