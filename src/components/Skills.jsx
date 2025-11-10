const SKILLS = [
  "Python","Go","JavaScript","TypeScript","React","Node.js",
  "SQL","Airflow","AWS","Docker","C++","C#","FastAPI","NetworkX","PyVis"
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="card">
        <div className="badges">
          {SKILLS.map((s, i) => <span key={i} className="badge">{s}</span>)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
