import React from "react";
import "./Home.css";
import { ReactTyped } from "react-typed";

// Import other sections
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="home-page">

      {/* Home Section */}
      <section className="home-container" id="home">
        <div className="home-content">
          <h1 className="greeting">
            Hello, my name is <span className="highlight">Mohammed Faizan</span>
          </h1>

          <h2 className="typing-intro">
            And I'm a{" "}
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
          </h2>

          <p className="description">
            Graduated with a Bachelor's degree in Computer Engineering. I'm a
            passionate web developer with a strong focus on building responsive and 
            user-friendly web applications using React, JavaScript, and modern design 
            principles.
          </p>

          <a
            href="https://github.com/faizanpsk2002"
            className="btn github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> Visit GitHub
          </a>
        </div>
      </section>

      {/* Other Sections Rendered Here */}
      <About />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
};

export default Home;
