import React, { useEffect } from "react";
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const projectList = [
    {
      title: "Calculator",
      description: "This is a calculator using html and css.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/faizanpsk2002/Calculator.git",
    },
    {
      title: "Job Portal",
      description:
        "A fully functional online portal built using .Net and Blazer with Register, login, and Job Seeker.",
      techStack: ["DotNet", "Blazer"],
      link: "https://github.com/faizanpsk2002/JobPortal.git",
    },
    {
      title: "Currency Converter Web App",
      description: "The real time currency converter web app using web api.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/faizanpsk2002/Currency-Converter-Web-App.git",
    },
  ];

  return (
    <section className="projects-section" data-aos="fade-up">
      <h2 data-aos="fade-down" data-aos-delay="100">My Projects</h2>

      <div className="projects-container">
        {projectList.map((project, index) => (
          <div
            className="project-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p> <strong>Tech Stack:</strong> {project.techStack.join(", ")} </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
