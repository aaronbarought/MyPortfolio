// src/components/Hero.jsx

const GITHUB_URL   = "https://github.com/aaronbarought";
const LINKEDIN_URL = "https://www.linkedin.com/in/aryan-barot-73092322b/";
const RESUME_PATH  = "/Aryan_Barot_Resume.pdf";

const Hero = () => {
  return (
    <header className="hero">
      <h1 className="heading-xl">Aryan Barot</h1>

      <div className="hero-links">
        <a className="btn-outline" href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
          Resume ↗
        </a>
        <a className="btn-outline" href="mailto:cs.aryanbarot@gmail.com">
          Email
        </a>
        <a className="btn-outline" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
        <a className="btn-outline" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
      </div>

      <p className="hero-desc">
        <strong>Software Engineer</strong>. I build reliable backends, data pipelines, and
        systems that ship. Interested in edge AI, autonomous systems, and infrastructure that scales.
      </p>

      <p className="hero-sub">
        Currently at Intuit Credit Karma · Previously Coinbase · ContextQA · Reyts · ASU
      </p>
    </header>
  );
};

export default Hero;
