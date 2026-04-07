import { useState } from 'react';

type Tab = 'tech-schedule' | 'show-order' | 'behind-scenes' | 'artist-statement';

interface TechGroup {
  group: string;
  members: string[];
  rehearsal: string;
  time: string;
}

interface TechDay {
  date: string;
  day: string;
  venue: string;
  groups: TechGroup[];
}

export default function Evolution() {
  const [activeTab, setActiveTab] = useState<Tab>('tech-schedule');

  const techSchedule: TechDay[] = [
    {
      date: 'April 6',
      day: 'Monday',
      venue: 'B. Iden Payne Theatre',
      groups: [
        { group: 'Group 1', members: ['Valentina', 'Emma', 'Marco'], rehearsal: 'Tech Rehearsal #1', time: '6:30pm - 9:30pm' }
      ]
    },
    {
      date: 'April 7',
      day: 'Tuesday',
      venue: 'B. Iden Payne Theatre',
      groups: [
        { group: 'Group 2', members: ['Bryli', 'Ariyana', 'Heather'], rehearsal: 'Tech Rehearsal #2', time: '3:30pm - 6:30pm' },
        { group: 'Group 3', members: ['Christian', 'Audrey', 'Will'], rehearsal: 'Tech Rehearsal #3', time: '6:30pm - 9:30pm' }
      ]
    },
    {
      date: 'April 8',
      day: 'Wednesday',
      venue: 'B. Iden Payne Theatre',
      groups: [
        { group: 'Group 4', members: ['Elyse', 'Jae'], rehearsal: 'Tech Rehearsal #4', time: '3:30pm - 4:15pm' },
        { group: 'Group 5', members: ['Jeremy', 'Rhea', 'Kel'], rehearsal: 'Tech Rehearsal #4', time: '4:15pm - 5:00pm' },
        { group: 'Group 6', members: ['Laura', 'Merrin', 'Darren'], rehearsal: 'Tech Rehearsal #4', time: '5:00pm - 5:45pm' },
        { group: 'Group 7', members: ['London', 'Jake'], rehearsal: 'Tech Rehearsal #4', time: '5:45pm - 6:30pm' },
        { group: 'Group 8', members: ['Cassidy', 'Jon', 'Chris'], rehearsal: 'Tech Rehearsal #5', time: '6:30pm - 9:30pm' }
      ]
    },
    {
      date: 'April 9',
      day: 'Thursday',
      venue: 'B. Iden Payne Theatre',
      groups: [
        { group: 'Group 9', members: ['Maddie', 'Tri', 'Gloria', 'Betty'], rehearsal: 'Tech Rehearsal #6', time: '3:30pm - 6:30pm' },
        { group: 'Group 10', members: ['Katelyn', 'Lauren', 'Jake', 'Gloria'], rehearsal: 'Tech Rehearsal #7', time: '6:30pm - 9:30pm' }
      ]
    },
    {
      date: 'April 10',
      day: 'Friday',
      venue: 'B. Iden Payne Theatre',
      groups: [
        { group: 'Group 11', members: ['Cat', 'Leili', 'Spencer'], rehearsal: 'Tech Rehearsal #8', time: '3:30pm - 6:30pm' },
        { group: 'Group 12', members: ['Kendall', 'Nico'], rehearsal: 'Tech Rehearsal #9', time: '6:30pm - 9:30pm' }
      ]
    },
    {
      date: 'April 21',
      day: 'Tuesday',
      venue: 'B. Iden Payne Theatre',
      groups: [
        { group: 'Final Tech', members: ['EVERYONE'], rehearsal: 'Tech Rehearsal #10', time: '7:00pm - 10:00pm' }
      ]
    }
  ];

  const tabs = [
    { id: 'tech-schedule' as Tab, label: 'Tech Schedule', icon: '🎛️' },
    { id: 'show-order' as Tab, label: 'Show Order', icon: '📋' },
    { id: 'behind-scenes' as Tab, label: 'Behind the Scenes', icon: '🎬' },
    { id: 'artist-statement' as Tab, label: 'Artist Statement', icon: '✍️' }
  ];

  return (
    <div className="evolution-page">
      <style>{`
        .evolution-page {
          max-width: 1000px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .page-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          padding: 0.35rem 0.75rem;
          background: linear-gradient(135deg, #E85D04, #DC520A);
          color: white;
          border-radius: 4px;
          text-transform: uppercase;
          margin-bottom: 1rem;
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
          max-width: 650px;
        }

        /* Tabs */
        .tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border);
          padding-bottom: 0.5rem;
          overflow-x: auto;
        }

        .tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 8px 8px 0 0;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .tab:hover {
          color: var(--text-primary);
          background: var(--border-light);
        }

        .tab.active {
          color: var(--accent);
          background: var(--bg-secondary);
          border-color: var(--border);
          border-bottom-color: var(--bg-secondary);
          margin-bottom: -1px;
        }

        .tab-icon {
          font-size: 1.1rem;
        }

        /* Updated Notice */
        .updated-notice {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(232, 93, 4, 0.1);
          border: 1px solid rgba(232, 93, 4, 0.3);
          border-radius: 6px;
          font-size: 0.8rem;
          color: var(--accent);
          margin-bottom: 1.5rem;
        }

        /* Schedule */
        .schedule-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .day-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
        }

        .day-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          background: var(--border-light);
          border-bottom: 1px solid var(--border);
        }

        .day-date {
          display: flex;
          align-items: baseline;
          gap: 0.75rem;
        }

        .day-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .day-full {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .day-venue {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          padding: 0.3rem 0.6rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--text-secondary);
        }

        .day-groups {
          padding: 1rem 1.5rem;
        }

        .group-row {
          display: grid;
          grid-template-columns: 100px 1fr 140px 140px;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid var(--border-light);
          align-items: center;
        }

        .group-row:last-child {
          border-bottom: none;
        }

        .group-row.final {
          background: linear-gradient(90deg, rgba(232, 93, 4, 0.05), transparent);
          margin: 0 -1.5rem;
          padding: 1rem 1.5rem;
          border-radius: 0;
        }

        .group-name {
          font-weight: 600;
          font-size: 0.9rem;
        }

        .group-members {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .group-rehearsal {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .group-time {
          font-weight: 500;
          font-size: 0.9rem;
          text-align: right;
        }

        /* Coming Soon */
        .coming-soon {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          text-align: center;
        }

        .coming-soon-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .coming-soon-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .coming-soon-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          max-width: 400px;
        }

        @media (max-width: 768px) {
          .group-row {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }

          .group-time {
            text-align: left;
          }

          .day-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }

          .tabs {
            gap: 0.25rem;
          }

          .tab {
            padding: 0.6rem 0.9rem;
            font-size: 0.8rem;
          }
        }
      `}</style>

      <header className="page-header">
        <div className="page-badge">🎭 April 24, 2026</div>
        <h1 className="page-title">EVOLUTION Performance</h1>
        <p className="page-subtitle">
          Everything you need for EVOLUTION 2026 — tech schedules, show order, behind-the-scenes coordination, and artist statements.
        </p>
      </header>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'tech-schedule' && (
        <div className="tech-schedule">
          <div className="updated-notice">
            ⚠️ <strong>UPDATED</strong> — Schedule subject to change. Check back for updates.
          </div>
          
          <div className="schedule-container">
            {techSchedule.map((day, dayIndex) => (
              <div key={dayIndex} className="day-card">
                <div className="day-header">
                  <div className="day-date">
                    <span className="day-name">{day.date}</span>
                    <span className="day-full">{day.day}</span>
                  </div>
                  <span className="day-venue">{day.venue}</span>
                </div>
                <div className="day-groups">
                  {day.groups.map((group, groupIndex) => (
                    <div 
                      key={groupIndex} 
                      className={`group-row ${group.group === 'Final Tech' ? 'final' : ''}`}
                    >
                      <div className="group-name">{group.group}</div>
                      <div className="group-members">{group.members.join(' / ')}</div>
                      <div className="group-rehearsal">{group.rehearsal}</div>
                      <div className="group-time">{group.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'show-order' && (
        <div className="coming-soon">
          <div className="coming-soon-icon">📋</div>
          <h2 className="coming-soon-title">Show Order</h2>
          <p className="coming-soon-text">
            Performance running order will be posted here once finalized after tech rehearsals.
          </p>
        </div>
      )}

      {activeTab === 'behind-scenes' && (
        <div className="coming-soon">
          <div className="coming-soon-icon">🎬</div>
          <h2 className="coming-soon-title">Behind the Scenes</h2>
          <p className="coming-soon-text">
            Backstage coordination, crew assignments, and production notes will appear here.
          </p>
        </div>
      )}

      {activeTab === 'artist-statement' && (
        <div className="coming-soon">
          <div className="coming-soon-icon">✍️</div>
          <h2 className="coming-soon-title">Artist Statements</h2>
          <p className="coming-soon-text">
            Submit and view artist statements for program notes and documentation.
          </p>
        </div>
      )}
    </div>
  );
}
