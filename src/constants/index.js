import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I’m Aryan Barot, a passionate full stack developer with a solid foundation in both front-end and back-end technologies. I’m currently pursuing a Bachelor's degree in Computer Science at Arizona State University, with hands-on experience from roles like my Software Developer Internship at ContextQA and technical positions at ASU.

My expertise includes Python, C++, C#, JavaScript, React, Node.js, and SQL, and I've successfully built and optimized web applications, developed automation tools, and improved data workflows. I’m driven by a passion for problem-solving and creating innovative solutions that enhance user experiences.

Explore my portfolio to see the projects I've worked on, and let’s connect to discuss how we can collaborate on future tech innovations!`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - present",
    role: "Intern",
    company: "Coinbase",
    description: `Migrated blockchain data-fetching code from a legacy pipeline to a new storage system using Python, Go, and AWS S3, significantly enhancing data processing efficiency and scalability.
    Optimized data processing pipeline, achieving a 50% performance improvement in backfilling staking data, reducing latency and increasing system throughput.
    Automated the process for finding Slack channels based on Pull Requests, saving engineers 10 hours per week and streamlining communication.
    Developed and deployed production-level ETL processes for blockchain staking data using SQL, Apache Airflow, and Go, improving transaction accuracy and system performance.`,
    technologies: ["Python", "Go", "AWS S3", "SQL", "Apache Airflow"],
  },
  {
    year: "2024",
    role: "Software Developer Intern",
    company: "ContextQA",
    description: `Built graph optimization algorithms for Lululemon website to provide personalized targeted customer experience resulting in 20k+ additional successful orders per month.
    Visualized user journeys using Networkx and Pyvis, improving user behavior analysis by 25%.
    Developed an extraction model with BeautifulSoup and NLP, categorizing all the interactive web page elements for accurate identification and classification.
    Created REST API endpoints with FastAPI for automated testing, enhancing test efficiency by 60%.
    `,
    technologies: ["Python", "NetworkX", "PyVis", "FastAPI", "BeautifulSoup"],
  },
  {
    year: "2022 - October 2024",
    role: "Data Operations Assistant",
    company: "Arizona State Univrsity - Enterprise Technology",
    description: `Designed a Slack bot to retrieve runbooks from ServiceNow improving incident management time by 20%. Installed and configured servers, firewalls, and power facilities in data centers to support 40+ administrative and research applications and handled their physical maintenance. Led the scrum process for 18 projects using JIRA for agile development in biweekly sprints. Achieved 97% project completion success by managing incidents, tickets, and ServiceNow tasks. Trained and evaluated 4 student workers for their application development and documentation.`,
    technologies: ["Python", "JIRA", "ServiceNow", "Slack"],
  },
  {
    year: "2022",
    role: "Teaching Assistant",
    company: "ASU - Ira Fulton Schoool Of Engineering",
    description: `Managed a class of 200+ students and held office hours for doubts, discussions, and reviews. Created 25 coding assignments and problem-solving assessments to evaluate student performance. Held interactive group sessions to promote learning and research on the latest industry trends. Assisted the professor in revising the lecture content and managing 4 research projects.`,
    technologies: ["Java"],
  },
  {
    year: "2022",
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
