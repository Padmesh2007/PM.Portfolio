import React from 'react';
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';

const Contact = () => (
  <section id="contact" style={{ background: 'var(--bg-secondary)' }}>
    <div className="section-label reveal">Get In Touch</div>
    <h2 className="section-heading reveal delay-1">Contact Me</h2>
    <div className="contact-wrapper">
      <div className="reveal delay-1">
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
          Open to full-time roles, freelance projects, and collaborative opportunities. Let's create something remarkable together.
        </p>
        <div className="contact-links">
          <a className="contact-link" href="mailto:padmeshmurugan07@gmail.com">
            <div className="contact-link-icon"><FaEnvelope /></div>
            padmeshmurugan07@gmail.com
          </a>
          <a className="contact-link" href="https://linkedin.com/in/padmesh-m-3b8ba4314" target="_blank" rel="noreferrer">
            <div className="contact-link-icon"><FaLinkedin /></div>
            linkedin.com/in/padmesh-m-3b8ba4314
          </a>
          <a className="contact-link" href="tel:9363983922">
            <div className="contact-link-icon"><FaPhone /></div>
            +91 93639 83922
          </a>
        </div>
      </div>
      <div className="contact-form reveal delay-2">
        <div className="form-group"><label>Your Name</label><input className="form-input" type="text" placeholder="John Smith" /></div>
        <div className="form-group"><label>Email Address</label><input className="form-input" type="email" placeholder="john@company.com" /></div>
        <div className="form-group"><label>Subject</label><input className="form-input" type="text" placeholder="Job Opportunity / Collaboration" /></div>
        <div className="form-group"><label>Message</label><textarea className="form-input form-textarea" placeholder="Tell me about the project or role..."></textarea></div>
        <button className="btn-primary" style={{ width: '100%', fontSize: '1rem', padding: '0.9rem' }} onClick={() => alert('Message sent!')}>Send Message →</button>
      </div>
    </div>
  </section>
);

export default Contact;
