// src/components/Hero.jsx

const GITHUB_URL   = "https://github.com/aaronbarought";
const LINKEDIN_URL = "https://www.linkedin.com/in/aryan-barot-73092322b/";
const RESUME_PATH  = "/Aryan_Barot_Resume.pdf"; // file must live in /public

const Hero = () => {
  return (
    <header className="hero">
      <h1 className="heading-xl">Aryan Barot</h1>

      <div className="hero-links">
        <a className="btn-outline" href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
          Resume
        </a>

        {/* <-- email opens default mail app */}
        <a className="btn-outline" href="mailto:cs.aryanbarot@gmail.com">
          Email
        </a>

        <a className="btn-outline" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a className="btn-outline" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>

      <p className="hero-desc">
        <strong>Software Engineer</strong>
        <br />
        I build reliable backends and data pipelines. I’m excited
        by systems that learn and act in the real world from edge AI to autonomous,
        self-driving–style experiences.
      </p>

      <p className="hero-sub">Previously Coinbase, ContextQA, Reyts fintech and ASU Ops.</p>
    </header>
  );
};

export default Hero;
