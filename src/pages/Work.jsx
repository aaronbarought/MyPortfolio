import Hero from "../components/Hero"
import Experience from "../components/Experience"

const WorkPage = () => {
  return (
    <>
      <Hero />
      <h2 className="section-title">Work Experience</h2>
      <p className="section-hint">hover a company for notes from the margin</p>
      <Experience />
    </>
  )
}

export default WorkPage
