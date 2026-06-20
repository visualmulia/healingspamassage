import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMobileMenu}>
          <span className="logo-icon">🌿</span>
          <div className="logo-text">
            <span className="logo-main">HEALING SPA</span>
            <span className="logo-sub">BALI &bull; HOME SERVICE</span>
          </div>
        </a>

        {/* Hamburger Menu Icon */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
          <li><a href="#services" onClick={closeMobileMenu}>Treatments</a></li>
          <li><a href="#testimonials" onClick={closeMobileMenu}>Reviews</a></li>
          <li className="nav-btn-container">
            <a href="#booking" className="btn btn-accent nav-cta" onClick={closeMobileMenu}>
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
