import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const BOOKING_URL = 'https://outlook.office.com/bookwithme/user/e99565bbfe2d464a800fa3e1a350b053@bloomadvisors.uk/meetingtype/9L1KQFzxUkmChE8jx-Tgww2?anonymous&ismsaljsauthenabled&ep=mlink';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll only for the mobile dropdown
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isDarkHeroPage = 
    location.pathname === '/' ||
    location.pathname === '/services' || 
    location.pathname.startsWith('/projects') || 
    location.pathname === '/about';

  return (
    <>
      <nav className={`navbar ${isScrolled || isMobileMenuOpen ? 'scrolled' : ''} ${isDarkHeroPage ? 'dark-hero-page' : ''}`}>
        <div className="navbar-logo">
          <Link to="/" onClick={closeMobileMenu}>
            <img src="/logo.png" alt="Bloom Advisors" className="logo-img" />
          </Link>
        </div>

        {/* Desktop Navigation Links (Center) */}
        <div className="navbar-links-desktop">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
          <Link to="/projects" className={location.pathname.startsWith('/projects') ? 'active' : ''}>Our Work</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
        </div>

        <div className="navbar-actions">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-consult">
            BOOK A CONSULTATION
          </a>
          
          {/* Mobile Menu Toggle */}
          <button className="btn-mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
 
      {/* Mobile Dropdown Menu */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          <Link to="/" onClick={closeMobileMenu} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/services" onClick={closeMobileMenu} className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
          <Link to="/projects" onClick={closeMobileMenu} className={location.pathname.startsWith('/projects') ? 'active' : ''}>Our Work</Link>
          <Link to="/about" onClick={closeMobileMenu} className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
          <Link to="/contact" onClick={closeMobileMenu} className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu} className="mobile-btn-consult">Book a Consultation</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
