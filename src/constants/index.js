import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm Aryan Barot, a full-stack developer and Computer Science student at Arizona State University. With experience in software engineering and data operations, I specialize in Python, C++, C#, AWS, Firebase, JavaScript, React, Node.js, and SQL. I've worked on optimizing web applications, automating workflows, and building scalable solutions. Explore my portfolio to see my experience, projects, and let's connect`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Oct 2024 - Present",
    role: "Intern",
    company: "Coinbase",
    description: `CX, payments risk, staking, fraud detection.`,
    technologies: ["Python", "Go", "AWS S3", "SQL", "Apache Airflow"],
  },
  {
    year: "May 2024 - Aug 2024",
    role: "Software Developer Intern",
    company: "ContextQA",
    description: `Graph optimization, behavioral analytics, QA automation, internal tooling`,
    technologies: ["Python", "NetworkX", "PyVis", "FastAPI", "BeautifulSoup"],
  },
  {
    year: "Oct 2022 - Oct 2024",
    role: "Data Operations Assistant",
    company: "Arizona State Univrsity - Enterprise Technology",
    description: `Designed a Slack bot to retrieve runbooks from ServiceNow improving incident management time by 20%. Installed and configured servers, firewalls, and power facilities in data centers to support 40+ administrative and research applications and handled their physical maintenance. Led the scrum process for 18 projects using JIRA for agile development in biweekly sprints. Achieved 97% project completion success by managing incidents, tickets, and ServiceNow tasks. Trained and evaluated 4 student workers for their application development and documentation.`,
    technologies: ["Python", "JIRA", "ServiceNow", "Slack"],
  },
  {
    year: "Aug 2022 - Dec 2022",
    role: "Teaching Assistant",
    company: "ASU - Ira Fulton Schoool Of Engineering",
    description: `Managed a class of 200+ students and held office hours for doubts, discussions, and reviews. Created 25 coding assignments and problem-solving assessments to evaluate student performance. Held interactive group sessions to promote learning and research on the latest industry trends. Assisted the professor in revising the lecture content and managing 4 research projects.`,
    technologies: ["Java"],
  },
  {
    year: "Jan 2022 - Oct 2022",
    role: "Data Verifier",
    company: "ASU Admission Services",
    description: `Automated cleaning and preprocessing for data of 80k+ students using Python & Pandas scripts. Established standard procedures for verification of transcripts in compliance with university policies.`,
    technologies: ["Python", "Pandas"],
  },
];

export const PROJECTS = [
  {
    title: "Slack Bot",
    image: project1,
    description:
      "Designed a Slack bot to retrieve runbooks from ServiceNow improving incident management time by 20%",
    technologies: ["Python","Slack API", "Flask", "BeautifulSoup", "ngrok"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Tempe, AZ",

  email: "cs.aryanbarot@gmail.com",
};
