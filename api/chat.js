// Vercel serverless function. Runs server-side only.
// ANTHROPIC_API_KEY lives in Vercel env vars and is never sent to the browser.

const BIO = `
Aryan Barot is a software engineer. Contact: barotaryan1313@gmail.com.
Portfolio: https://my-portfolio-eosin-eta-66.vercel.app
LinkedIn: https://www.linkedin.com/in/aryan-barot-73092322b/
GitHub: https://github.com/aaronbarought

EDUCATION
- Arizona State University, B.S. Computer Science. GRADUATED May 2025. GPA 3.54/4.00.
  He is no longer a student. He works full-time as a Software Development Engineer at Amazon.
- Coursework: Data Structures & Algorithms, OOP, Distributed Software Development,
  Software Engineering, Operating Systems, Digital System Design, Mobile App
  Development, Cloud Computing.
- CodePath Technical Interview Prep (Jun-Aug 2024).

EXPERIENCE
1. Amazon - Software Development Engineer (Aug 2026 - Present)
   - Building payment tokenization infrastructure.

2. Intuit Credit Karma - Software Engineer Intern (May 2026 - Jul 2026), Personal Loans Vertical
   - Built PLAID, an automated incident first-responder in Python on GCP. Polls
     PagerDuty every 60s, runs AI triage via Claude, posts diagnosis into Slack
     threads. Conversational: engineers reply in-thread to ask follow-up questions.
     Reduced mean time to first response for oncall alerts.
   - Integrated New Relic GraphQL API to replay alert condition NRQL, compute
     z-score deviation across historical firings, surface FACET breakdowns by
     partner and error type. Classified 4,188+ alerts as noise vs. critical.
   - Designed a multi-signal context engine ingesting New Relic metrics, Anodot
     anomaly scores, o11y MCP (SLOs/deploy correlation), Splunk logs, and runbooks,
     with confidence-gated autoresolution to suppress recurring false positives.
   - Shipped 189+ unit tests and an accuracy harness scoring false-negative rate
     across labeled incidents, plus a coverage map spanning 574 alert conditions.

3. Coinbase - Software Engineer Intern (Oct 2024 - Jan 2025)
   - Migrated blockchain data-fetching from a legacy pipeline to AWS S3 in Python
     and Go. Optimized throughput by 50% and reduced latency.
   - Automated Slack channel discovery for pull requests, saving engineers 10 hrs/week.
   - Built production-grade ETL with SQL, Apache Airflow, and Go.

4. ContextQA - Software Developer Intern (May 2024 - Jul 2024)
   - Graph optimization algorithms for Lululemon's personalization pipeline
     (NetworkX, PyVis). Behavioral analytics for customer targeting. FastAPI
     endpoints. Automated QA workflows, BeautifulSoup scraping.

5. Arizona State University - Data Operations Assistant (Oct 2022 - Oct 2024)
   - Slack bot surfacing ServiceNow runbooks in real time, cutting incident
     response time ~20%. Supported 40+ enterprise apps. Led Scrum across 18
     concurrent projects at 97% on-time.

6. ASU Fulton Schools of Engineering - Teaching Assistant (Aug 2022 - Dec 2022)
   - Principles of Programming with Java. 200+ students.

7. ASU Admission Services - Data Verifier (Jan 2022 - Oct 2022)
   - Automated cleaning/preprocessing for 80k+ student records.

PROJECTS
- Face Recognition on the Edge (2025): on-device real-time face recognition, ~60%
  lower latency vs server-side inference. MTCNN detection + FaceNet matching, >95%
  accuracy. Multi-camera deployment via AWS Greengrass, Lambda, SQS.
- Reyts Fintech App (2024): P2P currency-exchange app in React Native for a Canadian
  startup. Live FX rates, secure auth, Firestore transactions with offline storage
  (~40% faster transfers on poor connectivity). Live at https://reyts.com and shipped
  on the App Store and Google Play.
- Slack Incident Chatbot (2022-2024): pulls the right ServiceNow runbook into an
  outage channel in seconds. Cut incident response time ~20% for ASU Ops.
- Geo-Construct Services (2024): disaster-tracking platform aggregating live
  earthquake and weather data. C#, ASP.NET, WCF, SOAP.
- Smart Meal Planner (2025): SwiftUI + Firebase meal planning with grocery lists and
  MapKit store locator.
- Gym Progress Tracker (2023-2024): Flask fitness tracker with Matplotlib/Pandas
  visualizations.

Most of Aryan's professional work is under NDA, so the projects above are the
publicly shareable ones. Reyts is the only one with a public link.

SKILLS
Languages: Python, Java, JavaScript, TypeScript, C++, C, C#, Go, Swift, SQL, Ruby
Frameworks: React, Node.js, Next.js, Vue.js, Tailwind, Flask, .NET, Pandas,
  SwiftUI, TensorFlow, PyTorch
Tools: Git, AWS, GCP, REST APIs, MySQL, PostgreSQL, Firebase, Terraform,
  ServiceNow, Datadog, Spark, Splunk, New Relic, PagerDuty, JIRA, Redis, MongoDB,
  Snowflake, Apache Airflow

INTERESTS
Edge AI, autonomous systems, and infrastructure that scales.
`.trim();

const today = () =>
  new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

const buildSystem = () => `You are a friendly assistant embedded in Aryan Barot's personal portfolio website. You answer visitors' questions about Aryan's background, experience, and skills.

Rules:
- Answer ONLY from the profile below. If something isn't covered, say you don't have that detail and point them to Aryan directly at barotaryan1313@gmail.com.
- Never invent projects, employers, dates, metrics, or technologies. Accuracy matters more than sounding impressive.
- Keep answers to 2-4 sentences. Conversational, warm, concrete.
- Write in third person about Aryan ("He built...", "Aryan worked on...").
- If asked something off-topic (not about Aryan or his work), redirect politely.
- Don't use emoji.
- TODAY'S DATE IS ${today()}. Every date in the profile that falls before today is in
  the PAST and already finished. Never describe finished things as ongoing or upcoming.
- Aryan has already graduated. Never say he is "pursuing", "studying", "currently
  enrolled", or "graduating". Say he graduated from ASU in May 2025.
- Only the Amazon role is current. Every other role has ended.

PROFILE
${BIO}`;

export default async function handler(req, res) {
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(503).json({
      error: "Chat isn't configured yet. Set ANTHROPIC_API_KEY in Vercel.",
    });
  }

  try {
    const { messages } = req.body || {};

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "messages array required" });
    }

    // Cap history and length to bound cost/abuse from a public endpoint
    const trimmed = messages.slice(-8).map((m) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: String(m.content || "").slice(0, 1000),
    }));

    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 400,
        system: buildSystem(),
        messages: trimmed,
      }),
    });

    if (!r.ok) {
      const detail = await r.text();
      console.error("Anthropic API error:", r.status, detail);
      return res.status(502).json({ error: "Upstream error. Try again in a moment." });
    }

    const data = await r.json();
    const reply = (data.content || [])
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("")
      .trim();

    return res.status(200).json({ reply: reply || "Sorry, I didn't catch that." });
  } catch (err) {
    console.error("chat handler failed:", err);
    return res.status(500).json({ error: "Something went wrong." });
  }
}
