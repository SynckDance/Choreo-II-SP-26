import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SignedIn, SignedOut, SignIn } from '@clerk/clerk-react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pathways from './pages/Pathways';
import Tracks from './pages/Tracks';
import Labs from './pages/Labs';
import Timeline from './pages/Timeline';
import Resources from './pages/Resources';
import Books from './pages/Books';
import StageDesigns from './pages/StageDesigns';
import FilmTrack from './pages/FilmTrack';
import StudyLab from './pages/StudyLab';
import TwoBodyProblem from './pages/TwoBodyProblem';

function SignInPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#FAFAFA'
    }}>
      <SignIn routing="hash" />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <SignedOut>
        <Routes>
          <Route path="*" element={<SignInPage />} />
        </Routes>
      </SignedOut>
      <SignedIn>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="pathways" element={<Pathways />} />
            <Route path="tracks" element={<Tracks />} />
            <Route path="tracks/stage" element={<Tracks />} />
            <Route path="tracks/film" element={<FilmTrack />} />
            <Route path="labs" element={<Labs />} />
            <Route path="labs/two-body-problem" element={<TwoBodyProblem />} />
            <Route path="timeline" element={<Timeline />} />
            <Route path="resources" element={<Resources />} />
            <Route path="resources/stage-designs" element={<StageDesigns />} />
            <Route path="resources/study-lab" element={<StudyLab />} />
            <Route path="books" element={<Books />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </SignedIn>
    </HashRouter>
  );
}
