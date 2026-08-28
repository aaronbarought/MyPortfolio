import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import ThemeToggle from "./components/ThemeToggle"
import AskMe from "./components/AskMe"
import WorkPage from "./pages/Work"
import ProjectsPage from "./pages/Projects"
import EducationPage from "./pages/Education"

const App = () => {
  const location = useLocation()

  return (
    <div className="container-narrow">
      <ThemeToggle />
      <Navbar />

      {/* key on pathname remounts the subtree so the page-turn animation replays */}
      <div className="page-turn" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Navigate to="/work" replace />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/education" element={<EducationPage />} />
        </Routes>
      </div>

      <AskMe />
    </div>
  )
}

export default App
