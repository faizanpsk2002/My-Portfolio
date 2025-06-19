import React, { useEffect } from "react";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript"],
    },
    {
      category: "Library & Database",
      items: ["React.js", "SQL", "MySQL"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "Netlify"],
    },
    {
      category: "Cloud Platforms",
      items: ["AWS Cloud", "EC2", "S3", "VPC", "CloudWatch", "IAM"],
    },
  ];

  return (
    <section className="skills-section" data-aos="fade-up">
      <h2 data-aos="fade-down" data-aos-delay="100">My Skills</h2>

      <div className="skills-container">
        {skills.map((skillGroup, index) => (
          <div
            className="skill-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <h3>{skillGroup.category}</h3>
            <ul>
              {skillGroup.items.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
