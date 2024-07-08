import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sdt85ot', 'template_pkvljnf', form.current, 'dmn7VTaW4ygDQKuOs')
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };
  
  return (
    <div className="container">
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
      <div className="footer">
        <h6>CONNECT ME ON</h6><br />
        <a href="https://www.instagram.com/vishakhs0019" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" height="30" />
        </a>
        <a href="https://github.com/Vishakhs0019" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" height="30" />
        </a>
        <a href="https://www.linkedin.com/in/vishakh-s-0a684b255" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" height="30" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
