import { useEffect, useState } from 'react';
import './Hero.css';
import Button from '../../components/Button/Button';
import Reveal from '../../components/Reveal/Reveal';
import profileImage from '../../assets/images/profile/profile.jpeg';
import { heroStats, socialLinks } from '../../data/content';

const titles = [
  'Full Stack Developer',
  'Security Researcher',
  'Penetration Tester',
  'Ethical Hacker',
];

export default function Hero() {
  const [openImage, setOpenImage] = useState(false);

  const [text, setText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentTitle.slice(0, text.length + 1);
          setText(nextText);

          if (nextText === currentTitle) {
            setTimeout(() => {
              setIsDeleting(true);
            }, 1500);
          }
        } else {
          const nextText = currentTitle.slice(0, text.length - 1);
          setText(nextText);

          if (nextText === '') {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, titleIndex]);

  return (
    <>
      <section id="home" className="hero-section">
        <div className="hero-grid">
          <Reveal className="hero-copy">
            <div className="hero-badge">
              {text}
              <span className="typing-cursor">|</span>
            </div>

            <h1>
              Hey, I&apos;m <span>Elton John Justaga</span>
            </h1>

            <p>
              I build polished digital products and resilient systems with a
              strong focus on user experience, scalable architecture, and
              secure engineering.
            </p>

            <div className="hero-actions">
              <Button href="#projects">View Projects</Button>

              <Button href="#contact" variant="secondary">
                Contact Me
              </Button>
            </div>

            <div className="hero-socials">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-social"
                >
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
                <span />
                <span />
                <span />
              </div>

              <div className="hero-card__content">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="hero-profile-image"
                  onClick={() => setOpenImage(true)}
                />

                <div className="hero-card__panel">
                  <p className="hero-panel__eyebrow">
                    Currently crafting
                  </p>

                  <h3>Secure, modern products</h3>

                  <p>Python • Java • C/C++ • Lua</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {openImage && (
        <div
          className="hero-image-modal"
          onClick={() => setOpenImage(false)}
        >
          <img
            src={profileImage}
            alt="Full Profile"
            className="hero-image-modal__img"
          />
        </div>
      )}
    </>
  );
}