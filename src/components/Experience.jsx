// src/components/Experience.jsx

const EXPERIENCES = [
  {
    company: "Intuit Credit Karma",
    logo: "/logos/creditkarma.png",
    fallback: "https://logo.clearbit.com/creditkarma.com",
    role: "Software Engineer Intern",
    period: "May 2025 – Present",
    bullets: [
      "Personal Loans Team, building features with Generative AI (GenAI).",
    ],
    tags: ["GenAI"],
  },
  {
    company: "Coinbase",
    logo: "/logos/coinbase.png",
    fallback: "https://logo.clearbit.com/coinbase.com",
    role: "Software Engineer Intern",
    period: "Oct 2024 – Jan 2025",
    bullets: [
      "Worked on backend infrastructure across the Consumer Experience and Payments teams.",
      "Built and maintained data pipelines in Python and Go; contributed to AWS S3-based data workflows.",
      "Wrote SQL queries and used Apache Airflow for orchestration across internal data systems.",
    ],
    tags: ["Python", "Go", "AWS S3", "SQL", "Airflow"],
  },
  {
    company: "ContextQA",
    logo: "/logos/contextqa.png",
    fallback: "https://logo.clearbit.com/contextqa.com",
    role: "Software Developer Intern",
    period: "May 2024 – Jul 2024",
    bullets: [
      "Built graph optimization algorithms for Lululemon's personalization pipeline using NetworkX and PyVis.",
      "Improved customer targeting through behavioral analytics; integrated FastAPI endpoints for internal tooling.",
      "Automated QA workflows and scraped structured data with BeautifulSoup.",
    ],
    tags: ["Python", "NetworkX", "PyVis", "FastAPI", "BeautifulSoup"],
  },
  {
    company: "Arizona State University",
    logo: "/logos/asu.png",
    fallback: "https://logo.clearbit.com/asu.edu",
    role: "Data Operations Assistant",
    period: "Oct 2022 – Oct 2024",
    bullets: [
      "Built a Slack bot that surfaces ServiceNow runbooks in real time, cutting incident response time by ~20%.",
      "Supported 40+ enterprise applications; led Scrum across 18 concurrent projects (97% on-time).",
      "Owned data integrity and incident management workflows for ASU IT infrastructure.",
    ],
    tags: ["Python", "ServiceNow", "JIRA", "Slack API"],
  },
  {
    company: "ASU – Fulton Schools of Engineering",
    logo: "/logos/asu.png",
    fallback: "https://logo.clearbit.com/asu.edu",
    role: "Teaching Assistant",
    period: "Aug 2022 – Dec 2022",
    bullets: [
      "Led office hours and review sessions for 200+ students across intro CS and algorithms courses.",
      "Designed 25 coding assignments and assessments; refreshed lecture materials each semester.",
      "Supported 4 active research projects and facilitated weekly study groups.",
    ],
    tags: ["Java", "Algorithms", "ML Research"],
  },
  {
    company: "ASU Admission Services",
    logo: "/logos/asu.png",
    fallback: "https://logo.clearbit.com/asu.edu",
    role: "Data Verifier",
    period: "Jan 2022 – Oct 2022",
    bullets: [
      "Automated cleaning and preprocessing for 80k+ student records.",
      "Standardized transcript verification workflows to meet institutional policy.",
    ],
    tags: ["Python", "Pandas"],
  },
];

const Logo = ({ src, fallback, name }) => {
  const initials = (name || "?").split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  const monogram = `data:image/svg+xml;charset=utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'>
      <rect width='100%' height='100%' rx='8' ry='8' fill='#ede5d8'/>
      <text x='50%' y='50%' font-family='Georgia,serif' font-size='15' font-weight='700'
        text-anchor='middle' dominant-baseline='middle' fill='#6e6762'>${initials}</text>
    </svg>`
  )}`;

  const handleError = (e) => {
    const tried = e.currentTarget.dataset.tried;
    if (!tried && fallback) {
      e.currentTarget.dataset.tried = "1";
      e.currentTarget.src = fallback;
    } else {
      e.currentTarget.onerror = null;
      e.currentTarget.src = monogram;
    }
  };

  return (
    <img className="logo" src={src} alt={`${name} logo`} onError={handleError} />
  );
};

const Experience = () => {
  return (
    <div className="grid gap-2">
      {EXPERIENCES.map((e, i) => (
        <div key={i} className="entry">
          <div className="row">
            <div className="company">
              <Logo src={e.logo} fallback={e.fallback} name={e.company} />
              <span className="company-name">{e.company}</span>
            </div>
            <div className="subtle">
              <span className="role">{e.role}</span>
              <span className="period">{e.period}</span>
            </div>
          </div>

          <ul className="bullets mt-2">
            {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
          </ul>

          {e.tags?.length > 0 && (
            <div className="tagsline">
              {e.tags.map((t, j) => (
                <span key={j}>
                  {j !== 0 && <span className="sep">·</span>}
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
