// src/components/Projects.jsx
// Logo priority: /logos/<file>.png → CDN fallback → initials monogram

const PROJECTS = [
  {
    title: "Face Recognition on the Edge",
    logo: "/logos/aws.png",
    fallback: "https://cdn.simpleicons.org/amazonaws/FF9900",
    role: "Edge AI Pipeline",
    period: "2025",
    link: null,
    bullets: [
      "Real-time face recognition running on-device, ~60% lower latency vs. server-side inference.",
      "MTCNN for detection + FaceNet for identity matching, achieving >95% accuracy in testing.",
      "Multi-camera deployment via AWS Greengrass, Lambda, and SQS for concurrent processing.",
    ],
    tags: ["Python", "AWS Greengrass", "Lambda", "SQS", "MTCNN", "FaceNet", "Flask", "boto3"],
  },
  {
    title: "Reyts Fintech App",
    logo: "/logos/firebase.png",
    fallback: "https://cdn.simpleicons.org/firebase/FFCA28",
    role: "Cross-platform Mobile",
    period: "2024",
    link: null,
    bullets: [
      "P2P currency-exchange app in React Native for a Canadian startup; live FX rates and secure auth.",
      "Firestore transactions + offline storage made transfers ~40% faster under poor connectivity.",
      "Dashboard for spend tracking lifted user engagement by ~35%.",
    ],
    tags: ["React Native", "TypeScript", "Firebase", "Tailwind CSS"],
  },
  {
    title: "Slack Incident Chatbot",
    logo: "/logos/slack.png",
    fallback: "https://cdn.simpleicons.org/slack/4A154B",
    role: "Automation · ASU Ops",
    period: "2022 – 2024",
    link: null,
    bullets: [
      "Slack bot that pulls the right ServiceNow runbook into an outage channel in seconds.",
      "Slash commands and quick replies cut incident response time by ~20% for ASU Ops.",
      "Rate limiting, logging, and sandboxed test mode for safe onboarding of new team members.",
    ],
    tags: ["Python", "Slack API", "ServiceNow", "Ngrok"],
  },
  {
    title: "Geo-Construct Services",
    logo: "/logos/dotnet.png",
    fallback: "https://cdn.simpleicons.org/dotnet/512BD4",
    role: "Web Platform",
    period: "2024",
    link: null,
    bullets: [
      "Disaster-tracking platform that aggregates live earthquake and weather data from external APIs.",
      "Optimized data loading made map updates ~45% faster; added hashed passwords, CAPTCHA, rate limiting.",
    ],
    tags: ["C#", "ASP.NET", "WCF", "SOAP", "REST", "XML"],
  },
  {
    title: "Smart Meal Planner",
    logo: "/logos/swift.png",
    fallback: "https://cdn.simpleicons.org/swift/F05138",
    role: "iOS App",
    period: "2025",
    link: null,
    bullets: [
      "iOS app for meal planning, grocery lists, and recipe suggestions. Users saved ~30-40% of weekly planning time.",
      "MapKit store locator + Recipe API suggest meals based on what you already have.",
    ],
    tags: ["SwiftUI", "Swift", "Firebase", "MapKit", "Recipe API"],
  },
  {
    title: "Gym Progress Tracker",
    logo: "/logos/python.png",
    fallback: "https://cdn.simpleicons.org/python/3776AB",
    role: "Web App",
    period: "2023 – 2024",
    link: null,
    bullets: [
      "Flask app for logging workouts, tracking goals, and maintaining streaks. Users became ~40% more consistent.",
      "Matplotlib + Pandas charts visualize strength curves, volume load, and calories over time.",
    ],
    tags: ["Python", "Flask", "SQLite", "Pandas", "Matplotlib"],
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

const Projects = () => {
  return (
    <div className="grid gap-2">
      {PROJECTS.map((p, i) => (
        <div key={i} className="entry">
          <div className="row">
            <div className="company">
              <Logo src={p.logo} fallback={p.fallback} name={p.title} />
              <span className="company-name">{p.title}</span>
            </div>
            <div className="subtle">
              <span className="role">{p.role}</span>
              <span className="period">{p.period}</span>
            </div>
          </div>

          <ul className="bullets mt-2">
            {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
          </ul>

          <div className="project-link-row">
            <div className="tagsline">
              {p.tags.map((t, j) => (
                <span key={j}>
                  {j !== 0 && <span className="sep">·</span>}
                  <span>{t}</span>
                </span>
              ))}
            </div>
            {p.link && (
              <a className="btn-ghost" href={p.link} target="_blank" rel="noopener noreferrer">
                View ↗
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
