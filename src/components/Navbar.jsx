import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled || isMenuOpen ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="navbar-logo">
          <a href="#" onClick={closeMenu}>
            <img src="/logo.png" alt="Bloom Advisors" className="logo-img" />
          </a>
        </div>
        <div className="navbar-actions">
          <button className="btn-consult">BOOK A CONSULTATION</button>
          <button className="btn-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X size={28} className="menu-icon" />
            ) : (
              <Menu size={28} className="menu-icon" />
            )}
          </button>
        </div>
      </nav>

      {/* Full-Screen Overlay Menu */}
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-overlay-content">
          <ul className="menu-links">
            <li style={{ '--animation-order': 1 }}>
              <a href="#about-us-section" onClick={closeMenu}>Who We Are</a>
            </li>
            <li style={{ '--animation-order': 2 }}>
              <a href="#services" onClick={closeMenu}>Services</a>
            </li>
            <li style={{ '--animation-order': 3 }}>
              <a href="#case-studies" onClick={closeMenu}>Approach</a>
            </li>
            <li style={{ '--animation-order': 4 }}>
              <a href="#projects" onClick={closeMenu}>Projects</a>
            </li>
            <li style={{ '--animation-order': 5 }}>
              <a href="#results" onClick={closeMenu}>Modules</a>
            </li>
            <li style={{ '--animation-order': 6 }}>
              <a href="#team" onClick={closeMenu}>Our Team</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
