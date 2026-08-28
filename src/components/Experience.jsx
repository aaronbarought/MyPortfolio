// src/components/Experience.jsx

const EXPERIENCES = [
  {
    company: "Amazon",
    logo: "/logos/amazon.png",
    fallback: "https://cdn.simpleicons.org/amazon/FF9900",
    role: "Software Development Engineer",
    period: "Aug 2026 – Present",
    bullets: [
      "Building payment tokenization infrastructure.",
    ],
    tags: [],
  },
  {
    company: "Intuit Credit Karma",
    logo: "/logos/creditkarma.png",
    fallback: "https://cdn.simpleicons.org/intuit/236CFF",
    role: "Software Engineer Intern",
    period: "May 2026 – Jul 2026",
    bullets: [
      "Built PLAID, an automated incident first-responder in Python on GCP that polls PagerDuty every 60s, runs AI triage via Claude, and posts diagnosis into Slack threads, reducing mean time to first response for Personal Loans oncall alerts.",
      "Integrated the New Relic GraphQL API to replay alert condition NRQL, compute z-score deviation across historical firings, and surface FACET breakdowns by partner and error type to classify 4,188+ alerts as noise vs. critical.",
      "Designed a multi-signal context engine ingesting New Relic metrics, Anodot anomaly scores, o11y MCP (SLOs and deploy correlation), Splunk logs, and runbooks with confidence-gated autoresolution to suppress recurring false positives.",
      "Shipped 189+ unit tests and an accuracy harness scoring false-negative rate across labeled incidents, plus a coverage map spanning 574 alert conditions to validate triage quality.",
    ],
    tags: ["Python", "GCP", "Claude", "New Relic", "PagerDuty", "Splunk", "Slack API"],
  },
  {
    company: "Coinbase",
    logo: "/logos/coinbase.png",
    fallback: "https://cdn.simpleicons.org/coinbase/0052FF",
    role: "Software Engineer Intern",
    period: "Oct 2024 – Jan 2025",
    bullets: [
      "Migrated blockchain data-fetching from a legacy pipeline to AWS S3 in Python and Go; optimized throughput by 50% and reduced latency.",
      "Automated Slack channel discovery for pull requests, saving engineers 10 hours per week.",
      "Developed production-grade ETL processes using SQL, Apache Airflow, and Go to enhance transaction accuracy.",
    ],
    tags: ["Python", "Go", "AWS S3", "SQL", "Airflow"],
  },
  {
    company: "ContextQA",
    logo: "/logos/contextqa.png",
    fallback: "https://cdn.simpleicons.org/testcafe/36B6E7",
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
    fallback: "/logos/asu.png",
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
    fallback: "/logos/asu.png",
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
    fallback: "/logos/asu.png",
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
