// src/components/Hero.jsx

const GITHUB_URL   = "https://github.com/aaronbarought";
const LINKEDIN_URL = "https://www.linkedin.com/in/aryan-barot-73092322b/";
const RESUME_PATH  = "/Aryan_Barot_Resume.pdf";
const EMAIL        = "cs.aryanbarot@gmail.com";

const IconResume = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
       strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="15" y2="13" />
    <line x1="8" y1="17" x2="13" y2="17" />
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
       strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

const IconGitHub = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21H9z" />
  </svg>
);

const Hero = () => {
  return (
    <header className="hero">
      <h1 className="heading-xl">Aryan Barot</h1>

      <div className="hero-links">
        <a className="tag-btn" href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
          <IconResume /> Resume
        </a>
        <a className="tag-btn" href={`mailto:${EMAIL}`}>
          <IconMail /> Email
        </a>
        <a className="tag-btn" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          <IconGitHub /> GitHub
        </a>
        <a className="tag-btn" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          <IconLinkedIn /> LinkedIn
        </a>
      </div>

      <p className="hero-desc">
        <strong>Software Engineer at Amazon</strong>, working on payment tokenization
        infrastructure. Before this I built PLAID at Credit Karma, a conversational
        agent that triages oncall incidents, and data pipelines at Coinbase moving
        blockchain data at scale. I care about systems that hold up when things go wrong.
      </p>

      <p className="hero-sub">
        Currently at Amazon · Previously Credit Karma · Coinbase · ContextQA · ASU
      </p>
    </header>
  );
};

export default Hero;
