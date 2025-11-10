import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import WorkPage from "./pages/Work"
import ProjectsPage from "./pages/Projects"
import EducationPage from "./pages/Education"

const App = () => {
  return (
    <div className="container-narrow">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/work" replace />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/education" element={<EducationPage />} />
      </Routes>
    </div>
  )
}

export default App
