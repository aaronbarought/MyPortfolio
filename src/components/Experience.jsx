// Experience.jsx
// Journal-style: logo + company, darker role, light bullets, clean tags line

const EXPERIENCES = [
  {
    company: "Intuit Credit Karma",
    logo: "https://logo.clearbit.com/coinbase.com",
    role: "Software Engineer Intern - GenAI",
    period: "May 2026 - Present",
    bullets: ["GenAI, LLM's, Integrating AI into Financial Products"],
    tags: ["TBD"]
  },
  {
    company: "Coinbase",
    logo: "https://logo.clearbit.com/coinbase.com",
    role: "Intern",
    period: "Oct 2024 – May 2026",
    bullets: ["Blockchain, Payments, Consumer"],
    tags: ["Python", "Go", "AWS S3", "SQL", "Airflow"]
  },
  {
    company: "ContextQA",
    logo: "https://logo.clearbit.com/contextqa.com",
    role: "Software Developer Intern",
    period: "May 2024 – Jul 2024",
    bullets: [
      "Built graph optimization algorithms for Lululemon providing personalized targeted customer experience",
      "Graph optimization, behavioral analytics, QA automation, internal tooling"
    ],
    tags: ["Python", "NetworkX", "PyVis", "FastAPI", "BeautifulSoup"]
  },
  {
    company: "Arizona State University",
    logo: "https://logo.clearbit.com/asu.edu",
    role: "Data Operations Assistant",
    period: "Oct 2022 – Oct 2024",
    bullets: [
      "Built Slack bot for ServiceNow runbooks reducing response time for ASU Ops: −20% incident response time.",
      "Supported 40+ apps; led Scrum for 18 projects (97% completion).",
      "Data integrity, Incident management, IT infrastructure"
    ],
    tags: ["Python", "ServiceNow", "JIRA", "Slack API"]
  },

  // --- NEW ENTRIES YOU ASKED FOR ---
  {
    company: "ASU – Ira A. Fulton Schools of Engineering",
    logo: "https://logo.clearbit.com/asu.edu",
    role: "Teaching Assistant",
    period: "Aug 2022 – Dec 2022",
    bullets: [
      "Managed 200+ students; held office hours and review sessions.",
      "Designed 25 coding/assessment tasks; refreshed lecture materials.",
      "Facilitated interactive groups sessions; supported 4 research projects."
    ],
    // one standout two-word tag as requested
    tags: ["Java","Algorithms","ML Research"]
  },
  {
    company: "ASU Admission Services",
    logo: "https://logo.clearbit.com/asu.edu",
    role: "Data Verifier",
    period: "Jan 2022 – Oct 2022",
    bullets: [
      "Automated cleaning/preprocessing for 80k+ student records.",
      "Standardized transcript verification to meet policy."
    ],
    // one standout two-word tag as requested
    tags: ["Python","Pandas"]
  }
];

const Logo = ({ src, name }) => {
  const initials = (name || "?").split(" ").map(w => w[0]).join("").slice(0,2).toUpperCase();
  return (
    <img
      className="logo"
      src={src}
      alt={`${name} logo`}
      onError={(e) => {
        e.currentTarget.onerror = null;
        const svg = encodeURIComponent(
          `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'>
            <rect width='100%' height='100%' rx='6' ry='6' fill='#fff'/>
            <text x='50%' y='58%' font-family='Inter, Arial' font-size='16' text-anchor='middle' fill='#222'>${initials}</text>
          </svg>`
        );
        e.currentTarget.src = `data:image/svg+xml;charset=utf8,${svg}`;
      }}
    />
  );
};

const Experience = () => {
  return (
    <div className="grid gap-6">
      {EXPERIENCES.map((e, i) => (
        <div key={i} className="entry">
          <div className="row">
            <div className="company">
              <Logo src={e.logo} name={e.company} />
              <div className="text-[18px] font-semibold">{e.company}</div>
            </div>
            <div className="subtle">
              <span className="role">{e.role}</span>
              {" "}
              <span className="period">• {e.period}</span>
            </div>
          </div>

          <ul className="bullets mt-2 space-y-1">
            {e.bullets.map((b, j) => <li key={j}>• {b}</li>)}
          </ul>

          {e.tags?.length > 0 && (
            <div className="tagsline">
              {e.tags.map((t, j) => (
                <span key={j}>
                  {j !== 0 && <span className="sep">•</span>}
                  <span>{t}</span>
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Experience;
