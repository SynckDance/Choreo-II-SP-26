import { useState } from 'react';

const weeklySchedule = [
  { week: 1, dates: 'Jan 13, 15', topic: 'Course Overview + Tour B. Iden Payne Theatre with Jeff Grapko and AET', assignment: null },
  { week: 2, dates: 'Jan 20, 22', topic: 'Two Body Problem + Lab Time with AET', assignment: null },
  { week: 3, dates: 'Jan 27, 29', topic: 'Art of Collaboration + Lab Time with AET', assignment: { name: 'Collaborative Partnership', due: '01/29', points: 5 } },
  { week: 4, dates: 'Feb 3, 5', topic: 'Stage/Film + Lab Time with AET', assignment: null },
  { week: 5, dates: 'Feb 10, 12', topic: 'Stage/Film + Lab Time with AET', assignment: null },
  { week: 6, dates: 'Feb 17, 19', topic: 'Stage/Film + Lab Time with AET', assignment: null },
  { week: 7, dates: 'Feb 24, 26', topic: 'Stage/Film + Lab Time with AET', assignment: null },
  { week: 8, dates: 'Mar 3, 5', topic: 'Stage/Film + Lab Time with AET', assignment: { name: 'Mid-Semester Showing', due: '03/05', points: 5 } },
  { week: 9, dates: 'Mar 10, 12', topic: 'Stage/Film + Lab Time with AET', assignment: null },
  { week: 10, dates: 'Mar 17, 19', topic: 'SPRING BREAK', assignment: null, isBreak: true },
  { week: 11, dates: 'Mar 24, 26', topic: 'Showings - Stage/Film + Lab Time', assignment: { name: 'Final Design Submission', due: '03/24', points: 10 } },
  { week: 12, dates: 'Mar 31, Apr 2', topic: 'Showings - Stage/Film + Lab Time', assignment: null },
  { week: 13, dates: 'Apr 7, 9', topic: 'Tech Rehearsals Begin (Groups 1-9)', assignment: null },
  { week: 14, dates: 'Apr 14, 16', topic: 'Final Showings - Performance Prep', assignment: { name: 'Final Studio Showing', due: '04/16', points: 10 } },
  { week: 15, dates: 'Apr 20, 22', topic: 'Production Week - Tech/Dress Rehearsals', assignment: null },
  { week: 16, dates: 'Apr 23', topic: 'EVOLUTION Performance', assignment: null, isFinal: true },
];

const techSchedule = [
  { date: 'Apr 6', day: 'Mon', event: 'Group 1 Tech Rehearsal', time: '6:30-9:30pm' },
  { date: 'Apr 7', day: 'Tue', event: 'Group 2 Tech Rehearsal', time: '3:30-6:30pm' },
  { date: 'Apr 7', day: 'Tue', event: 'Group 3 Tech Rehearsal', time: '6:30-9:30pm' },
  { date: 'Apr 8', day: 'Wed', event: 'Group 4 Tech Rehearsal', time: '3:30-6:30pm' },
  { date: 'Apr 8', day: 'Wed', event: 'Group 5 Tech Rehearsal', time: '6:30-9:30pm' },
  { date: 'Apr 9', day: 'Thu', event: 'Group 6 Tech Rehearsal', time: '3:30-6:30pm' },
  { date: 'Apr 9', day: 'Thu', event: 'Group 7 Tech Rehearsal', time: '6:30-9:30pm' },
  { date: 'Apr 10', day: 'Fri', event: 'Group 8 Tech Rehearsal', time: '3:30-6:30pm' },
  { date: 'Apr 10', day: 'Fri', event: 'Group 9 Tech Rehearsal', time: '6:30-9:30pm' },
  { date: 'Apr 20', day: 'Mon', event: 'Restore + LX Focus', time: '2:00-5:00pm' },
  { date: 'Apr 21', day: 'Tue', event: 'Restore + LX Focus', time: '2:00-5:00pm' },
  { date: 'Apr 21', day: 'Tue', event: 'ALL Tech Rehearsal', time: '7:00-10:00pm' },
  { date: 'Apr 22', day: 'Wed', event: 'ALL Dress Rehearsal', time: '7:00-10:00pm' },
  { date: 'Apr 23', day: 'Thu', event: 'EVOLUTION Performance', time: '7:30pm', highlight: true },
  { date: 'Apr 24', day: 'Fri', event: 'Strike', time: '9:00am-12:00pm' },
];

export default function Timeline() {
  const [view, setView] = useState<'semester' | 'evolution'>('semester');

  return (
    <div className="timeline-page">
      <style>{`
        .timeline-page {
          max-width: 1000px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: 2rem;
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

        /* View Toggle */
        .view-toggle {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .view-btn {
          padding: 0.6rem 1.25rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .view-btn:hover {
          border-color: var(--text-muted);
        }

        .view-btn.active {
          background: var(--accent);
          border-color: var(--accent);
          color: white;
        }

        /* Schedule Table */
        .schedule-container {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
        }

        .schedule-header {
          display: grid;
          grid-template-columns: 60px 100px 1fr 200px;
          padding: 1rem 1.5rem;
          background: var(--bg-primary);
          border-bottom: 1px solid var(--border);
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }

        .schedule-row {
          display: grid;
          grid-template-columns: 60px 100px 1fr 200px;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--border);
          align-items: center;
          transition: background 0.2s ease;
        }

        .schedule-row:last-child {
          border-bottom: none;
        }

        .schedule-row:hover {
          background: var(--border-light);
        }

        .schedule-row.break {
          background: var(--border-light);
          color: var(--text-muted);
        }

        .schedule-row.final {
          background: rgba(232, 93, 4, 0.1);
        }

        .week-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .week-dates {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .week-topic {
          font-size: 0.9rem;
        }

        .week-assignment {
          text-align: right;
        }

        .assignment-badge {
          display: inline-block;
          font-size: 0.75rem;
          padding: 0.35rem 0.6rem;
          background: var(--accent);
          color: white;
          border-radius: 4px;
        }

        .assignment-due {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        /* Tech Schedule */
        .tech-header {
          display: grid;
          grid-template-columns: 80px 50px 1fr 120px;
          padding: 1rem 1.5rem;
          background: var(--bg-primary);
          border-bottom: 1px solid var(--border);
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }

        .tech-row {
          display: grid;
          grid-template-columns: 80px 50px 1fr 120px;
          padding: 0.875rem 1.5rem;
          border-bottom: 1px solid var(--border);
          align-items: center;
          font-size: 0.9rem;
        }

        .tech-row:last-child {
          border-bottom: none;
        }

        .tech-row.highlight {
          background: rgba(232, 93, 4, 0.1);
          font-weight: 600;
        }

        .tech-date {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
        }

        .tech-day {
          color: var(--text-muted);
          font-size: 0.8rem;
        }

        .tech-time {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          color: var(--text-secondary);
          text-align: right;
        }

        .venue-note {
          padding: 1rem 1.5rem;
          background: var(--border-light);
          font-size: 0.8rem;
          color: var(--text-secondary);
          text-align: center;
        }

        @media (max-width: 700px) {
          .schedule-header,
          .schedule-row {
            grid-template-columns: 50px 1fr;
            gap: 0.5rem;
          }

          .schedule-header > *:nth-child(2),
          .schedule-header > *:nth-child(4),
          .schedule-row > *:nth-child(2),
          .schedule-row > *:nth-child(4) {
            display: none;
          }

          .tech-header,
          .tech-row {
            grid-template-columns: 60px 1fr 80px;
          }

          .tech-header > *:nth-child(2),
          .tech-row > *:nth-child(2) {
            display: none;
          }
        }
      `}</style>

      <div className="page-header">
        <h1 className="page-title">Timeline</h1>
        <p className="page-subtitle">
          Semester schedule and Evolution tech calendar. Keep track of assignments, showings, and performance dates.
        </p>
      </div>

      <div className="view-toggle">
        <button
          className={`view-btn ${view === 'semester' ? 'active' : ''}`}
          onClick={() => setView('semester')}
        >
          📅 Semester Schedule
        </button>
        <button
          className={`view-btn ${view === 'evolution' ? 'active' : ''}`}
          onClick={() => setView('evolution')}
        >
          🎭 Evolution Tech Calendar
        </button>
      </div>

      {view === 'semester' ? (
        <div className="schedule-container">
          <div className="schedule-header">
            <div>Week</div>
            <div>Dates</div>
            <div>Topic</div>
            <div style={{ textAlign: 'right' }}>Assignment</div>
          </div>
          {weeklySchedule.map((week) => (
            <div
              key={week.week}
              className={`schedule-row ${week.isBreak ? 'break' : ''} ${week.isFinal ? 'final' : ''}`}
            >
              <div className="week-num">{week.week}</div>
              <div className="week-dates">{week.dates}</div>
              <div className="week-topic">{week.topic}</div>
              <div className="week-assignment">
                {week.assignment && (
                  <>
                    <div className="assignment-badge">{week.assignment.name}</div>
                    <div className="assignment-due">Due: {week.assignment.due} · {week.assignment.points} pts</div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="schedule-container">
          <div className="tech-header">
            <div>Date</div>
            <div>Day</div>
            <div>Event</div>
            <div style={{ textAlign: 'right' }}>Time</div>
          </div>
          {techSchedule.map((item, i) => (
            <div key={i} className={`tech-row ${item.highlight ? 'highlight' : ''}`}>
              <div className="tech-date">{item.date}</div>
              <div className="tech-day">{item.day}</div>
              <div>{item.event}</div>
              <div className="tech-time">{item.time}</div>
            </div>
          ))}
          <div className="venue-note">
            All events at B. Iden Payne Theatre
          </div>
        </div>
      )}
    </div>
  );
}
