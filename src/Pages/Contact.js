import React, { useEffect } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title" data-aos="fade-down">
        Contact me
      </h2>
      <p className="contact-subtitle" data-aos="fade-up">
        Have a question, opportunity, or just want to say hello? Fill out the
        form below!
      </p>

      <div className="contact-wrapper">
        {/* Left Side - Contact Info */}
        <div className="contact-info" data-aos="fade-right">
          <h3>Don't be shy</h3>
          <p>
            Feel free to get in touch with me. I’m always open to discussing new
            projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="info-block">
            <i className="fas fa-user icon"></i>
            <div>
              <strong>Name</strong>
              <p>Mohammed Faizan</p>
            </div>
          </div>

          <div className="info-block">
            <i className="fas fa-map-marker-alt icon"></i>
            <div>
              <strong>Address</strong>
              <p>Maharashtra, India</p>
            </div>
          </div>

          <div className="info-block">
            <i className="fas fa-envelope icon"></i>
            <div>
              <strong>Email</strong>
              <p>faizan.eng2024@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <form
          className="contact-form"
          action="https://formsubmit.co/faizan.eng2024@gmail.com"
          method="POST"
          data-aos="fade-left"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" rows="5" placeholder="Message.." required />
          <button type="submit">Send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
