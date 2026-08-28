import Hero from "../components/Hero"

// Update LAST_UPDATED whenever you edit the entries below.
const LAST_UPDATED = "August 2026"

const ENTRIES = [
  {
    heading: "Working on",
    body: "Payment tokenization infrastructure at Amazon. Just started in August, so most of my time goes to reading code and learning how money actually moves through the system.",
  },
  {
    heading: "Learning",
    body: "Distributed systems fundamentals more rigorously than my coursework covered. Consistency models, consensus, and what actually breaks at scale.",
  },
  {
    heading: "Thinking about",
    body: "How much of oncall work is genuinely judgment versus pattern matching. Building PLAID at Credit Karma made me suspect more of it is pattern matching than engineers like to admit.",
  },
]

const Now = () => {
  return (
    <>
      <Hero />

      <h2 className="section-title">Now</h2>
      <p className="section-hint">what I'm focused on at the moment</p>

      <div className="entry now-entry">
        <div className="now-date">{LAST_UPDATED}</div>

        {ENTRIES.map((e, i) => (
          <div className="now-block" key={i}>
            <h3 className="now-heading">{e.heading}</h3>
            <p className="now-body">{e.body}</p>
          </div>
        ))}

        <p className="now-foot">
          This is a{" "}
          <a
            className="link"
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            now page
          </a>
          . Last updated {LAST_UPDATED}.
        </p>
      </div>
    </>
  )
}

export default Now
