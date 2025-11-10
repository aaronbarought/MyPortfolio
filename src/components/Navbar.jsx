import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to="/work" className={({isActive}) => isActive ? "active" : ""}>work</NavLink>
      <NavLink to="/projects" className={({isActive}) => isActive ? "active" : ""}>projects</NavLink>
      <NavLink to="/education" className={({isActive}) => isActive ? "active" : ""}>education</NavLink>
    </nav>
  )
}

export default Navbar
