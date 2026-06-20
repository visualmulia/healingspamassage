import React from 'react';
import './About.css';
import aboutImage from '../assets/about-spa.png';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        <div className="about-grid">
          
          {/* Left Column: Image with organic frame */}
          <div className="about-image-wrapper">
            <div className="about-image-frame">
              <img src={aboutImage} alt="Traditional Balinese Spa Elements" className="about-img" />
              <div className="experience-badge animate-float">
                <h3>8+</h3>
                <p>Years of Healing</p>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="about-content">
            <div className="section-header">
              <span className="subtitle">Authentic Balinese Sanctuary</span>
              <h2 className="title">Professional Spa Experience Brought to Your Doorstep</h2>
            </div>
            
            <p className="about-lead">
              At Healing Spa & Massage Bali, we believe that true wellness shouldn't require travel. We bring the luxury, tranquility, and therapeutic power of a 5-star Balinese spa directly to your villa, hotel, or home.
            </p>
            
            <p className="about-body">
              Our team consists of highly trained, licensed native Balinese therapists who are dedicated to restoring your body's natural harmony. Whether you are seeking deep tissue relaxation, relief from severe sunburn, or detoxifying therapies, we tailor each session to your personal health needs.
            </p>

            {/* Core Features List */}
            <div className="about-features">
              <div className="feature-card">
                <span className="feature-icon">🌿</span>
                <div>
                  <h4>100% Organic Products</h4>
                  <p>We use cold-pressed virgin coconut oil and premium natural essential oils.</p>
                </div>
              </div>
              <div className="feature-card">
                <span className="feature-icon">✨</span>
                <div>
                  <h4>Sanitized & Pristine</h4>
                  <p>Freshly laundered linens, towels, and disinfected equipment for every guest.</p>
                </div>
              </div>
              <div className="feature-card">
                <span className="feature-icon">🚕</span>
                <div>
                  <h4>Zero Travel Stress</h4>
                  <p>Skip the Bali traffic. Relax immediately in your own private sanctuary.</p>
                </div>
              </div>
            </div>

            <div className="about-action">
              <a href="#services" className="btn btn-primary">Our Spa Menu</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
