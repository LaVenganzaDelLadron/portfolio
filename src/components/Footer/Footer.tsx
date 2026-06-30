import './Footer.css';
import { socialLinks } from '../../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <p className="footer__title">Dark Glitch</p>
          <p className="footer__copy">© 2026. Crafted with React, TypeScript, and thoughtful design.</p>
        </div>

        <div className="footer__socials">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="footer__social">
              {link.label}
            </a>
          ))}
        </div>

        <a href="#home" className="footer__top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
