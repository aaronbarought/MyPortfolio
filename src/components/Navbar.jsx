import { NavLink } from "react-router-dom"

const LINKS = [
  { to: "/work", label: "work" },
  { to: "/projects", label: "projects" },
  { to: "/education", label: "education" },
  { to: "/now", label: "now" },
]

const Navbar = () => {
  return (
    <nav className="nav">
      {LINKS.map(({ to, label }) => (
        <NavLink key={to} to={to} className={({ isActive }) => (isActive ? "active" : "")}>
          {label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
