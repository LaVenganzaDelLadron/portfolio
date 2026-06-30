import './Hero.css';
import Button from '../../components/Button/Button';
import Reveal from '../../components/Reveal/Reveal';
import profileImage from '../../assets/images/profile/profile.jpeg';
import { heroStats, socialLinks } from '../../data/content';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        <Reveal className="hero-copy">
          <div className="hero-badge">Full Stack Developer • Cybersecurity Enthusiast</div>
          <h1>
            Hey, I&apos;m <span>Dark Glitch</span>
          </h1>
          <p>
            I build polished digital products and resilient systems with a strong focus on user experience, scalable architecture, and secure engineering.
          </p>

          <div className="hero-actions">
            <Button href="#projects">View Projects</Button>
            <Button href="#contact" variant="secondary">Contact Me</Button>
          </div>

          <div className="hero-socials">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hero-social">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hero-stats">
            {heroStats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <p className="hero-stat__value">{stat.value}</p>
                <p className="hero-stat__label">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="hero-visual">
          <div className="hero-card">
            <div className="hero-card__window">
              <span /><span /><span />
            </div>
            <div className="hero-card__content">
              <img src={profileImage} alt="Portrait of the portfolio owner" />
              <div className="hero-card__panel">
                <p className="hero-panel__eyebrow">Currently crafting</p>
                <h3>Secure, modern products</h3>
                <p>React • TypeScript • Node.js • Python</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}