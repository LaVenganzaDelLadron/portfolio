import { useState } from 'react';
import './Contact.css';
import Button from '../../components/Button/Button';
import Reveal from '../../components/Reveal/Reveal';
import { socialLinks } from '../../data/content';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-inner contact-grid">
        <Reveal className="contact-copy">
          <p className="section-title__eyebrow">Contact</p>
          <h2>Let&apos;s build something meaningful</h2>
          <p>
            I&apos;m available for freelance work, product builds, and security-minded collaborations. If you have a project in mind, reach out and I&apos;ll get back to you shortly.
          </p>

          <div className="contact-socials">
            {socialLinks.map((link) => (
              'text' in link ? (
                <span key={link.label} className="contact-social-text">
                  {link.text}
                </span>
              ) : (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              )
            ))}
          </div>
        </Reveal>

        <Reveal className="contact-form-panel">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" rows={5} placeholder="Tell me a little about your idea" required />
            </label>
            <Button href="" variant="primary">Send Message</Button>
            {submitted ? <p className="contact-form__success">Thanks! Your message is ready to send.</p> : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}