import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        
        <div className="footer-grid">
          
          {/* Column 1: Brand Info */}
          <div className="footer-col brand-col">
            <a href="#home" className="footer-logo">
              <span className="logo-icon">🌿</span>
              <div className="logo-text">
                <span className="logo-main">HEALING SPA</span>
                <span className="logo-sub">BALI &bull; HOME SERVICE</span>
              </div>
            </a>
            <p className="brand-desc">
              Experience the highest quality traditional Balinese massage, sunburn treatments, and body therapies delivered directly to your private hotel room or villa.
            </p>
            <div className="work-hours">
              <span className="hours-icon">⏰</span>
              <div>
                <h4>Operating Hours</h4>
                <p>Available 24 Hours / 7 Days</p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col links-col">
            <h3 className="footer-col-title">Navigation</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Our Spa</a></li>
              <li><a href="#services">Our Treatments</a></li>
              <li><a href="#testimonials">Guest Reviews</a></li>
              <li><a href="#booking">Book Therapist</a></li>
            </ul>
          </div>

          {/* Column 3: Service Coverage Area */}
          <div className="footer-col coverage-col">
            <h3 className="footer-col-title">Coverage Areas</h3>
            <p className="coverage-desc">We deliver home and hotel massage services to all major areas in Bali:</p>
            <ul className="coverage-list">
              <li>📍 Canggu & Pererenan</li>
              <li>📍 Seminyak & Kerobokan</li>
              <li>📍 Ubud & surrounding</li>
              <li>📍 Uluwatu & Pecatu</li>
              <li>📍 Kuta & Legian</li>
              <li>📍 Sanur, Jimbaran & Nusa Dua</li>
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className="footer-col contact-col">
            <h3 className="footer-col-title">Get in Touch</h3>
            <p className="contact-desc">For inquiries or custom bookings, reach out to us directly:</p>
            <div className="contact-details">
              <a href="https://wa.me/62881037342111" target="_blank" rel="noopener noreferrer" className="contact-item">
                <span className="contact-icon">💬</span>
                <div>
                  <h4>WhatsApp (24/7)</h4>
                  <p>+62 881-0373-42111</p>
                </div>
              </a>
              <a href="mailto:info@healingspamassage.id" className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <h4>Email Address</h4>
                  <p>info@healingspamassage.id</p>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="bottom-content">
            <p>&copy; {currentYear} Healing Massage Bali Spa. All Rights Reserved.</p>
            <p className="pitch-credit">
              Designed with care by <a href="#" className="designer-link">Masbroo Studio</a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
