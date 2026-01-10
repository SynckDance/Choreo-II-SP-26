import { Link } from 'react-router-dom';

export function PathwayC() {
  return (
    <div className="page-container">
      <div className="badge" style={{ background: 'var(--color-mint)', color: '#000' }}>Pathway C</div>
      <h1 className="page-title" style={{ marginTop: '1rem' }}>Technical Collaboration</h1>
      <p className="page-subtitle">Working with designers and technicians to realize your vision</p>

      {/* Big Statement */}
      <div className="card card-dark" style={{ marginTop: '2rem' }}>
        <p className="text-xl m-0" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
          At the core of dance making is the idea of collaboration. Collaboration is not hiring. It is not purchasing. It is not broadly defined as a transaction.
        </p>
      </div>

      {/* Definition */}
      <h2 className="section-heading">
        <span className="section-number">01</span>
        What is Collaboration?
      </h2>

      <div className="definition-block">
        <p className="text-lg m-0">
          We define <strong>collaboration</strong> as the kind of interaction that reveals a depth in our dance-making that we would not otherwise discover if we did the work ourselves.
        </p>
      </div>

      <div className="callout callout-caution" style={{ marginTop: '1.5rem' }}>
        <div className="callout-title">Remember</div>
        <p className="m-0 font-semibold">
          Evolution is a collaboration, not a commission.
        </p>
      </div>

      {/* AET Collaboration */}
      <h2 className="section-heading">
        <span className="section-number">02</span>
        AET Music Composers
      </h2>

      <div className="prose">
        <p>
          This semester, you will work alongside composers from Arts and Entertainment Technologies 
          (AET) in a shared creative environment. This is not commissioning music for your piece—
          it's exploring sound, rhythm, and interdisciplinary making together.
        </p>
      </div>

      <div className="card" style={{ marginTop: '1rem', borderColor: 'var(--color-mint)' }}>
        <h4 className="font-bold mb-3">Lab Time with AET</h4>
        <p className="text-sm text-gray-600 mb-3">
          Every Thursday is dedicated lab time for collaboration with AET composers.
        </p>
        <ul className="content-list text-sm">
          <li>Explore early ideas for sound and rhythm</li>
          <li>Develop musical direction together</li>
          <li>Create original compositions</li>
          <li>Experiment with multichannel ideas</li>
        </ul>
      </div>

      {/* Assignment 1 */}
      <h2 className="section-heading">
        <span className="section-number">03</span>
        Assignment #1: Collaborative Partnership
      </h2>

      <div className="card" style={{ borderColor: 'var(--color-coral)' }}>
        <div className="flex justify-between items-start mb-3">
          <span className="tag tag-coral">Due January 29</span>
          <span className="font-bold">5 pts</span>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Establish the core collaborators for your work this semester.
        </p>
        <ul className="content-list text-sm">
          <li>Identify and confirm a dance partner (co-choreographer or co-creative partner)</li>
          <li>Begin developing a collaboration with a composer (AET)</li>
          <li>Submit list of collaborators and collaboration notes in your Google Folder</li>
        </ul>
        <p className="text-xs text-gray-500 mt-3" style={{ fontFamily: 'var(--font-mono)' }}>
          + COUNTED AS PARTICIPATION POINTS
        </p>
      </div>

      {/* Collaboration Principles */}
      <h2 className="section-heading">
        <span className="section-number">04</span>
        Principles of Collaboration
      </h2>

      <div className="grid gap-3 mt-4">
        <div className="card">
          <h4 className="font-bold mb-2">Respect Process</h4>
          <p className="text-sm text-gray-600 m-0">
            Honor each person's creative process. Allow time for ideas to develop. 
            Don't rush to conclusions.
          </p>
        </div>
        <div className="card">
          <h4 className="font-bold mb-2">Invite Dialogue</h4>
          <p className="text-sm text-gray-600 m-0">
            Create space for conversation. Ask questions. Listen actively. 
            Share your thinking openly.
          </p>
        </div>
        <div className="card">
          <h4 className="font-bold mb-2">Cultivate Shared Ownership</h4>
          <p className="text-sm text-gray-600 m-0">
            The work belongs to everyone involved. Celebrate contributions. 
            Make decisions together.
          </p>
        </div>
        <div className="card">
          <h4 className="font-bold mb-2">Embrace Difference</h4>
          <p className="text-sm text-gray-600 m-0">
            Different perspectives enrich the work. Welcome what others bring 
            that you couldn't bring alone.
          </p>
        </div>
      </div>

      {/* Working with Dancers */}
      <h2 className="section-heading">
        <span className="section-number">05</span>
        Working with Dancers
      </h2>

      <div className="prose">
        <p>
          Your dancers are not vessels to fill with your movement. They are collaborators 
          who bring their own bodies, histories, and artistry to the work.
        </p>
      </div>

      <div className="two-col-grid">
        <div className="card">
          <h4 className="font-bold mb-2">Lead Rehearsals</h4>
          <p className="text-sm text-gray-600 m-0">
            Communicate clearly. Set expectations. Create a productive environment. 
            Manage time wisely.
          </p>
        </div>
        <div className="card">
          <h4 className="font-bold mb-2">Schedule Thoughtfully</h4>
          <p className="text-sm text-gray-600 m-0">
            Respect your dancers' time. Book studio spaces through the TA. 
            Plan ahead.
          </p>
        </div>
      </div>

      {/* Working with Designers */}
      <h2 className="section-heading">
        <span className="section-number">06</span>
        Working with Designers & Technicians
      </h2>

      <div className="prose">
        <p>
          Tech rehearsals are where your collaboration with designers and technicians 
          becomes most visible. Come prepared, communicate clearly, and be flexible.
        </p>
      </div>

      <div className="card card-yellow" style={{ marginTop: '1rem' }}>
        <h4 className="font-bold mb-3">Tech Week Preparation</h4>
        <ul className="content-list text-sm">
          <li>Submit all design materials before your tech slot</li>
          <li>Know your piece thoroughly</li>
          <li>Be ready to articulate what you need</li>
          <li>Be open to problem-solving in the moment</li>
          <li>Thank your collaborators</li>
        </ul>
      </div>

      {/* Communication */}
      <h2 className="section-heading">
        <span className="section-number">07</span>
        Communication Norms
      </h2>

      <div className="grid gap-3 mt-4">
        <div className="card">
          <p className="text-sm text-gray-600 m-0">
            Contact your project choreographer and/or designated faculty mentor via their 
            <strong> preferred method of communication</strong> for project-specific communication.
          </p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-600 m-0">
            If you are part of a student or Guest Artist project, please inform your designated 
            choreographer <strong>as well as ALL the permanent faculty members</strong> in writing 
            of any missed rehearsals.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-4 mt-8">
        <Link to="/pathway-b" className="card no-underline flex-1 text-center" style={{ borderColor: 'var(--color-blue)' }}>
          <p className="text-sm text-gray-500 m-0" style={{ fontFamily: 'var(--font-mono)' }}>PREV</p>
          <p className="font-bold m-0">← Pathway B: Production</p>
        </Link>
        <Link to="/semester-map" className="card no-underline flex-1 text-center">
          <p className="text-sm text-gray-500 m-0" style={{ fontFamily: 'var(--font-mono)' }}>NEXT</p>
          <p className="font-bold m-0">Semester Map →</p>
        </Link>
      </div>

    </div>
  );
}
