import { useState } from 'react';
import './Navbar.css';
import { navItems } from '../../data/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#home" className="navbar__brand">
          DarkGlitch
        </a>

        <nav className="navbar__links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="navbar__link">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open ? (
        <div className="navbar__mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="navbar__link" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
