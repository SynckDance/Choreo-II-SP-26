import { HashRouter, Routes, Route } from 'react-router-dom'
import { SignedIn, SignedOut, SignIn, UserButton } from '@clerk/clerk-react'
import { Layout } from './components/Layout'
import { Welcome } from './pages/Welcome'
import { PerformanceOutcome } from './pages/PerformanceOutcome'
import { Workflow } from './pages/Workflow'
import { PathwayA } from './pages/PathwayA'
import { PathwayB } from './pages/PathwayB'
import { PathwayC } from './pages/PathwayC'
import { SemesterMap } from './pages/SemesterMap'
import { Templates } from './pages/Templates'
import { Assessment } from './pages/Assessment'
import { PerformanceHub } from './pages/PerformanceHub'
import { Evolution } from './pages/Evolution'
import { StageTrack } from './pages/StageTrack'
import FilmTrack from './pages/FilmTrack'
import { StudyLab } from './pages/StudyLab'
import { LightingGlossary } from './pages/LightingGlossary'
import StageDesigns from './pages/StageDesigns'
import { FilmWorkflow } from './pages/FilmWorkflow'

// Sign-in page component
function SignInPage() {
  return (
    <div 
      style={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0A0A0A',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        padding: '2rem'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 
          style={{ 
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
            fontWeight: 800,
            color: '#fff',
            marginBottom: '0.5rem',
            letterSpacing: '-0.03em'
          }}
        >
          Choreography <span style={{ color: '#FF6B6B' }}>II</span>
        </h1>
        <p 
          style={{ 
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.75rem',
            color: '#666',
            textTransform: 'uppercase',
            letterSpacing: '0.15em'
          }}
        >
          T D 332N · Spring 2025 · UT Austin
        </p>
        
        {/* Decorative dots */}
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', margin: '1.5rem 0' }}>
          {['#FF6B6B', '#4ECDC4', '#4D7CFF', '#FFE066'].map((color, i) => (
            <span 
              key={i}
              style={{
                width: '12px',
                height: '12px',
                background: color,
                animation: `bounce 1.5s ease-in-out ${i * 0.2}s infinite`
              }}
            />
          ))}
        </div>
      </div>
      
      <div 
        style={{ 
          background: '#fff',
          padding: '2rem',
          border: '3px solid #FF6B6B',
          maxWidth: '400px',
          width: '100%'
        }}
      >
        <SignIn 
          appearance={{
            elements: {
              rootBox: { width: '100%' },
              card: { boxShadow: 'none', border: 'none' },
              headerTitle: { 
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700 
              },
              headerSubtitle: { 
                fontFamily: "'DM Sans', sans-serif" 
              },
              formButtonPrimary: {
                background: '#FF6B6B',
                fontFamily: "'Space Mono', monospace",
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 700,
                border: '2px solid #FF6B6B',
                borderRadius: 0
              },
              formFieldInput: {
                borderRadius: 0,
                border: '2px solid #0A0A0A',
                fontFamily: "'DM Sans', sans-serif"
              },
              footerActionLink: {
                color: '#FF6B6B'
              }
            }
          }}
        />
      </div>
      
      <p 
        style={{ 
          marginTop: '2rem',
          color: '#666',
          fontSize: '0.875rem',
          fontFamily: "'DM Sans', sans-serif"
        }}
      >
        Course access for enrolled students only.
      </p>
    </div>
  )
}

// Export UserButton for use in Layout
export { UserButton }

function App() {
  return (
    <HashRouter>
      <SignedOut>
        <SignInPage />
      </SignedOut>
      <SignedIn>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path="performance-outcome" element={<PerformanceOutcome />} />
            <Route path="workflow" element={<Workflow />} />
            <Route path="pathway-a" element={<PathwayA />} />
            <Route path="pathway-b" element={<PathwayB />} />
            <Route path="pathway-c" element={<PathwayC />} />
            <Route path="semester-map" element={<SemesterMap />} />
            <Route path="templates" element={<Templates />} />
            <Route path="assessment" element={<Assessment />} />
            <Route path="performance-hub" element={<PerformanceHub />} />
            <Route path="evolution" element={<Evolution />} />
            <Route path="stage" element={<StageTrack />} />
            <Route path="film" element={<FilmTrack />} />
            <Route path="study-lab" element={<StudyLab />} />
            <Route path="lighting-glossary" element={<LightingGlossary />} />
            <Route path="stage-designs" element={<StageDesigns />} />
            <Route path="film-workflow" element={<FilmWorkflow />} />
          </Route>
        </Routes>
      </SignedIn>
    </HashRouter>
  )
}

export default App
