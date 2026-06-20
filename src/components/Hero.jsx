import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-spa.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section" style={{ backgroundImage: `linear-gradient(rgba(7, 23, 17, 0.75), rgba(7, 23, 17, 0.85)), url(${heroImage})` }}>
      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <span className="hero-subtitle">Premium Home & Hotel Spa Service</span>
          <h1 className="hero-title">
            Rejuvenating Massage <br />
            <span>Delivered to Your Villa</span>
          </h1>
          <p className="hero-description">
            Experience the healing power of authentic Balinese massage, sunburn relief, madero therapy, and lymphatic drainage without leaving your accommodation. Available 24/7.
          </p>
          <div className="hero-actions">
            <a href="#booking" className="btn btn-accent">
              Book a Therapist
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="#services" className="btn btn-outline-white">
              Explore Treatments
            </a>
          </div>
        </div>

        {/* Floating Quick Trust Badges */}
        <div className="hero-badges glass">
          <div className="badge-item">
            <span className="badge-icon">⭐</span>
            <div className="badge-text">
              <h4>5.0 Rating</h4>
              <p>Top Rated in Bali</p>
            </div>
          </div>
          <div className="badge-divider"></div>
          <div className="badge-item">
            <span className="badge-icon">💆‍♀️</span>
            <div className="badge-text">
              <h4>Certified</h4>
              <p>Licensed Therapists</p>
            </div>
          </div>
          <div className="badge-divider"></div>
          <div className="badge-item">
            <span className="badge-icon">🏡</span>
            <div className="badge-text">
              <h4>Home & Hotel</h4>
              <p>We Come to You</p>
            </div>
          </div>
          <div className="badge-divider"></div>
          <div className="badge-item">
            <span className="badge-icon">⏰</span>
            <div className="badge-text">
              <h4>24/7 Available</h4>
              <p>Book Anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
