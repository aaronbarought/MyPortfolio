import { useEffect, useState } from "react"

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light"
  try {
    const saved = window.localStorage.getItem("theme")
    if (saved === "light" || saved === "dark") return saved
  } catch {
    // localStorage can throw in private mode; fall through to system preference
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    try {
      window.localStorage.setItem("theme", theme)
    } catch {
      // ignore write failures
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"))

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Daylight" : "Night notebook"}
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  )
}

export default ThemeToggle
