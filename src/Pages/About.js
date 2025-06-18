import React from "react";
import "./About.css";
import avatar from "../assets/img.png";
import { ReactTyped } from "react-typed";

const About = () => {
  return (
    <section className="about-section">
      <h2 className="section-title">About me</h2>
      <div className="section-subtitle">
        <span className="line"></span>
        <span className="subtitle-text">who I am</span>
        <span className="line"></span>
      </div>

      <div className="about-wrapper">
        <div className="about-img">
          <img src={avatar} alt="Avatar" />
        </div>

        <div className="about-info">
          <h3>
            I am <span className="highlight">Mohammed Faizan</span> and I'm a{" "}
            <ReactTyped
              strings={[
                "Software Engineer",
                "Web Developer",
                "AWS Cloud Enthusiast",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </h3>

          <p>
            I'm a passionate web developer with a strong focus on building responsive 
            and user-friendly web applications using React, JavaScript, and modern 
            design principles.
          </p>
          <p>
            Skilled in writing clean, maintainable code and collaborating with
            teams to bring ideas to life. My current tech stack includes
            React.js, HTML5, CSS3, JavaScript, Git, GitHub, and AWS (basic).
          </p>
          <p>
            Always eager to learn and grow, I enjoy contributing to meaningful
            projects and improving the user experience across platforms.
          </p>
          <a href="/resume.pdf" download className="btn download-btn">Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default About;
