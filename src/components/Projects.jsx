// src/components/Projects.jsx

const PROJECTS = [
  // 1) Edge on top
  {
    title: "Face Recognition on the Edge",
    logo: "https://logo.clearbit.com/asu.edu",
    role: "Edge AI Pipeline",
    period: "2025",
    bullets: [
      "Built a real-time face recognition system that runs on edge devices, not just the cloud — results came ~60% faster.",
      "Used MTCNN for detecting faces and FaceNet for matching, reaching over 95% accuracy in testing.",
      "Connected devices to AWS (Greengrass, Lambda, SQS) so multiple cameras could run at once without slowing down."
    ],
    tags: ["Python", "Greengrass", "Lambda", "SQS", "MTCNN", "FaceNet", "Flask", "boto3"]
  },

  // 2) Reyts second with Canadian startup mention
  {
    title: "Reyts Fintech App",
    logo: "https://logo.clearbit.com/reyts.com", // placeholder visual; falls back to initials if not found
    role: "Cross-platform Mobile",
    period: "2024",
    bullets: [
      "Built a P2P currency-exchange app in React Native for a Canadian startup (Reyts). Secure login and real-time FX rates.",
      "Used Firestore transactions and offline storage, making transfers smoother and ~40% faster.",
      "Designed a clean dashboard for spend and transfers; user engagement went up by ~35%."
    ],
    tags: ["React Native", "TypeScript", "Firebase", "Live Rates", "Tailwind CSS"]
  },

  // 3) Slack bot
  {
    title: "Slack – Incident Chatbot",
    logo: "https://logo.clearbit.com/slack.com",
    role: "Automation",
    period: "Dec 2022 – Oct 2024",
    bullets: [
      "Built a Slack bot that instantly pulls ServiceNow documents into outage channels so teams don’t waste time searching.",
      "Slash commands and quick replies show the right runbook in seconds; helped reduce response time by ~20%.",
      "Added logging, rate limits, and a safe test mode so new members can practice without risk."
    ],
    tags: ["Python", "Slack API", "ServiceNow", "Ngrok", "API"]
  },

  // 4) Geo-Construct
  {
    title: "Geo-Construct Services",
    logo: "https://logo.clearbit.com/microsoft.com",
    role: "Web Platform",
    period: "2024",
    bullets: [
      "Created a web platform that tracks disasters using earthquake and weather data from live APIs.",
      "Optimized data loading which made updates ~45% faster and more reliable.",
      "Added security features like hashed passwords, CAPTCHA, and request limits to prevent misuse."
    ],
    tags: ["C#", "ASP.NET", "WCF", "SOAP", "REST", "XML"]
  },

  // 5) Smart Meal Planner (ASU logo)
  {
    title: "Smart Meal Planner",
    logo: "https://logo.clearbit.com/asu.edu",
    role: "iOS App",
    period: "2025",
    bullets: [
      "An iOS app that plans meals, creates grocery lists, and suggests recipes — saving users time every day.",
      "MapKit store locator + Recipe API suggest meals from what you have; users spent ~30–40% less time deciding."
    ],
    tags: ["SwiftUI", "Swift", "Firebase", "MapKit", "Recipe API"]
  },

  // 6) Gym Progress Tracker
  {
    title: "Gym Progress Tracker",
    logo: "https://logo.clearbit.com/github.com",
    role: "Web App",
    period: "2023 – 2024",
    bullets: [
      "Flask app to log workouts, track goals, and keep streaks; many users became ~40% more consistent.",
      "Charts with Matplotlib and Pandas make progress easy to see: strength curves, volume load, and calories."
    ],
    tags: ["Python", "Flask", "SQLite", "Pandas", "Matplotlib"]
  }
];

// graceful fallback logos
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

const Projects = () => {
  return (
    <div className="grid gap-6">
      {PROJECTS.map((p, i) => (
        <div key={i} className="entry">
          <div className="row">
            <div className="company">
              <Logo src={p.logo} name={p.title} />
              <div className="text-[18px] font-semibold">{p.title}</div>
            </div>
            <div className="subtle">
              <span className="role">{p.role}</span>{" "}
              <span className="period">• {p.period}</span>
            </div>
          </div>

          <ul className="bullets mt-2 space-y-1">
            {p.bullets.map((b, j) => <li key={j}>• {b}</li>)}
          </ul>

          {p.tags?.length > 0 && (
            <div className="tagsline">
              {p.tags.map((t, j) => (
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

export default Projects;
