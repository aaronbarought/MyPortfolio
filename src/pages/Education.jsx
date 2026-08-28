import Hero from "../components/Hero"
import { Logo } from "../components/Experience"

const Education = () => {
  const schools = [
    {
      school: "Arizona State University",
      degree: "B.S. Computer Science",
      period: "2021 – 2025",
      sources: [
        "/logos/asu.png",
        "https://www.google.com/s2/favicons?domain=asu.edu&sz=128",
      ],
      bullets: [],
    },
    {
      school: "CodePath",
      degree: "Technical Interview Prep",
      period: "Jun 2024 – Aug 2024",
      sources: [
        "/logos/codepath.png",
        "https://www.google.com/s2/favicons?domain=codepath.org&sz=128",
      ],
      bullets: [
        "Solved LeetCode-style problems weekly with peers; strengthened DS&A and interview technique.",
      ],
    },
  ]

  return (
    <>
      <Hero />
      <h2 className="section-title">Education</h2>

      <div className="grid gap-2">
        {schools.map((s, i) => (
          <div key={i} className="entry">
            <div className="row">
              <div className="company">
                <Logo sources={s.sources} name={s.school} />
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
