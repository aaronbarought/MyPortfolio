import Hero from "../components/Hero"

const Education = () => {
  const schools = [
    {
      school: "Arizona State University",
      degree: "B.S. Computer Science",
      period: "2021 – 2025",
      logo: "https://logo.clearbit.com/asu.edu",
      bullets: []
    },
    {
      school: "CodePath",
      degree: "Technical Interview Prep",
      period: "Jun 2024 – Aug 2024",
      logo: "https://logo.clearbit.com/codepath.org",
      bullets: [
        "Solved LeetCode-style problems with peers; deepened DS&A and interview techniques."
      ]
    },
    {
      school: "Arizona State University",
      degree: "M.S. Computer Science",
      period: "Pursuing",
      logo: "https://logo.clearbit.com/asu.edu",
      bullets: []
    }
  ]

  const Logo = ({ src, name }) => {
    const initials = (name || "?").split(" ").map(w => w[0]).join("").slice(0,2).toUpperCase()
    return (
      <img
        className="logo"
        src={src}
        alt={`${name} logo`}
        onError={(e) => {
          e.currentTarget.onerror = null
          const svg = encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'>
              <rect width='100%' height='100%' rx='6' ry='6' fill='#fff'/>
              <text x='50%' y='58%' font-family='Inter, Arial' font-size='16' text-anchor='middle' fill='#222'>${initials}</text>
            </svg>`
          )
          e.currentTarget.src = `data:image/svg+xml;charset=utf8,${svg}`
        }}
      />
    )
  }

  return (
    <>
      <Hero />
      <h2 className="section-title">Education</h2>

      <div className="grid gap-6">
        {schools.map((s, i) => (
          <div key={i} className="entry">
            <div className="row">
              <div className="company">
                <Logo src={s.logo} name={s.school} />
                <div className="text-[18px] font-semibold">{s.school}</div>
              </div>
              <div className="subtle">
                <span className="role">{s.degree}</span>{" "}
                <span className="period">• {s.period}</span>
              </div>
            </div>

            {s.bullets?.length > 0 && (
              <ul className="bullets mt-2 space-y-1">
                {s.bullets.map((b, j) => <li key={j}>• {b}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default Education
