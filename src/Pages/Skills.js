import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['Python', 'JavaScript'],
    },
    {
      category: 'Library & Database',
      items: ['React.js', 'SQL', 'MySQL'],
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'VS Code', 'Netlify'],
    },
    {
      category: 'Cloud Platforms',
      items: ['AWS Cloud', 'EC2', 'S3', 'VPC', 'CloudWatch', 'IAM'],
    },
  ];

  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skill-card">
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
