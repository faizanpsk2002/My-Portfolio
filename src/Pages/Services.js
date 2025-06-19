import React, { useEffect } from "react";
import "./Services.css";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Web Development",
    icon: "fas fa-code",
    description:
      "Building responsive and dynamic websites using modern tech like React.js, JavaScript, HTML5, and CSS3.",
  },
  {
    title: "Web Design",
    icon: "fas fa-pencil-ruler",
    description:
      "Creating clean and user-friendly interfaces that enhance user experience and engagement.",
  },
  {
    title: "Software Development",
    icon: "fas fa-laptop-code",
    description:
      "Creating efficient and scalable software using modern technologies with a focus on performance, usability, and clean code.",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="services-section" id="services">
      <h2 className="section-title" data-aos="fade-down">My Services</h2>
      <p className="section-subtitle" data-aos="fade-up">What I Offer</p>

      <div className="services-container">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
