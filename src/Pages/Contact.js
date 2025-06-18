import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <p>Have a question, opportunity, or just want to say hello? Fill out the form below!</p>

      <form
        className="contact-form"
        action="https://formsubmit.co/faizan.eng2024@gmail.com"
        method="POST"
      >
        {/* Optional hidden fields */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New message from Portfolio!" />
        <input type="hidden" name="_template" value="table" />

        {/* Form fields */}
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
