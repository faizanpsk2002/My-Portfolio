import React, { useEffect } from "react";
import "./Home.css";
import { ReactTyped } from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";

// Import other sections
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./Contact";

const Home = () => {
  useEffect(() => {
      AOS.init({ duration: 1000, once: false });
    }, []);

  return (
    <div className="home-page">
      {/* Home Section */}
      <section className="home-container" id="home" data-aos="zoom-in">
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
            passionate web developer with a strong focus on building responsive
            and user-friendly web applications using React, JavaScript, and
            modern design principles.
          </p>

          <a
            href="https://github.com/faizanpsk2002"
            className="btn github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
            {' '}
          <a
            href="https://www.linkedin.com/in/mohammed-faizan-b9626522b"
            className="btn github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> Linkedin
          </a>
        </div>
      </section>

      {/* Other Sections Rendered Here */}
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
