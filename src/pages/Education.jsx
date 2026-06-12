import Hero from "../components/Hero"

const Education = () => {
  const schools = [
    {
      school: "Arizona State University",
      degree: "B.S. Computer Science",
      period: "2021 – 2025",
      logo: "/logos/asu.png",
      fallback: "https://logo.clearbit.com/asu.edu",
      bullets: [],
    },
    {
      school: "CodePath",
      degree: "Technical Interview Prep",
      period: "Jun 2024 – Aug 2024",
      logo: "https://logo.clearbit.com/codepath.org",
      fallback: null,
      bullets: [
        "Solved LeetCode-style problems weekly with peers; strengthened DS&A and interview technique.",
      ],
    },
  ]

  const Logo = ({ src, fallback, name }) => {
    const initials = (name || "?").split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase()
    const monogram = `data:image/svg+xml;charset=utf8,${encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'>
        <rect width='100%' height='100%' rx='8' ry='8' fill='#ede5d8'/>
        <text x='50%' y='50%' font-family='Georgia,serif' font-size='15' font-weight='700'
          text-anchor='middle' dominant-baseline='middle' fill='#6e6762'>${initials}</text>
      </svg>`
    )}`

    const handleError = (e) => {
      const tried = e.currentTarget.dataset.tried
      if (!tried && fallback) {
        e.currentTarget.dataset.tried = "1"
        e.currentTarget.src = fallback
      } else {
        e.currentTarget.onerror = null
        e.currentTarget.src = monogram
      }
    }

    return (
      <img className="logo" src={src} alt={`${name} logo`} onError={handleError} />
    )
  }

  return (
    <>
      <Hero />
      <h2 className="section-title">Education</h2>

      <div className="grid gap-2">
        {schools.map((s, i) => (
          <div key={i} className="entry">
            <div className="row">
              <div className="company">
                <Logo src={s.logo} fallback={s.fallback} name={s.school} />
                <span className="company-name">{s.school}</span>
              </div>
              <div className="subtle">
                <span className="role">{s.degree}</span>
                <span className="period">{s.period}</span>
              </div>
            </div>

            {s.bullets?.length > 0 && (
              <ul className="bullets mt-2">
                {s.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default Education
