import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import CollaborationLab from './pages/CollaborationLab';
import ChoreographyForCamera from './pages/ChoreographyForCamera';
import GenerativeMethods from './pages/GenerativeMethods';
import Evolution from './pages/Evolution';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pathways" element={<Pathways />} />
          <Route path="tracks" element={<Tracks />} />
          <Route path="tracks/stage" element={<Tracks />} />
          <Route path="tracks/film" element={<FilmTrack />} />
          <Route path="labs" element={<Labs />} />
          <Route path="labs/two-body-problem" element={<TwoBodyProblem />} />
          <Route path="labs/collaboration" element={<CollaborationLab />} />
          <Route path="labs/choreography-for-camera" element={<ChoreographyForCamera />} />
          <Route path="labs/generative-methods" element={<GenerativeMethods />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="resources" element={<Resources />} />
          <Route path="resources/stage-designs" element={<StageDesigns />} />
          <Route path="resources/study-lab" element={<StudyLab />} />
          <Route path="books" element={<Books />} />
          <Route path="evolution" element={<Evolution />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
