import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Emma Watson',
    location: 'Sydney, Australia',
    rating: 5,
    date: 'June 2026',
    comment: 'Absolutely wonderful experience! Our therapists arrived at our Seminyak villa exactly on time. The Balinese massage was deep, relaxing, and very professional. Skip the busy street spas, this is 10 times better!',
    type: 'Couples Balinese Massage'
  },
  {
    id: 2,
    name: 'David Miller',
    location: 'London, UK',
    rating: 5,
    date: 'May 2026',
    comment: 'Got a terrible sunburn surfing in Uluwatu. The Sunburn Soothing Massage with fresh aloe vera was an absolute lifesaver. The cooling effect was instant and my skin stopped peeling. Highly recommended for surfers!',
    type: 'Sunburn Soothing Massage'
  },
  {
    id: 3,
    name: 'Sarah & Michael',
    location: 'Munich, Germany',
    rating: 5,
    date: 'June 2026',
    comment: 'Excellent service. The therapists set up clean sheets and brought organic essential oils. Very respectful and highly skilled. Booking via WhatsApp took less than 2 minutes. We will book again next week.',
    type: 'Family Home Service'
  },
  {
    id: 4,
    name: 'Chloe Laurent',
    location: 'Paris, France',
    rating: 5,
    date: 'April 2026',
    comment: 'The Lymphatic Massage was incredible. The therapist knew exactly how to release swelling after my long flight to Bali. Very gentle strokes and professional behavior. Worth every Rupiah!',
    type: 'Lymphatic Drainage Massage'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        
        <div className="section-header text-center">
          <span className="subtitle">Guest Experiences</span>
          <h2 className="title">Loved by Travelers in Bali</h2>
          <p className="description">
            Read stories of deep relaxation and healing from guests who booked our home & hotel service across Bali's premier destinations.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map(t => (
            <div key={t.id} className="testimonial-card glass">
              <div className="card-header">
                <div className="stars">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="star-icon">★</span>
                  ))}
                </div>
                <span className="verified-badge">✓ Verified Review</span>
              </div>
              
              <p className="comment">"{t.comment}"</p>
              
              <div className="card-footer">
                <div className="avatar">
                  {t.name.charAt(0)}
                </div>
                <div className="user-info">
                  <h4>{t.name}</h4>
                  <p>{t.location} &bull; <span className="treatment-type">{t.type}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small Google Review CTA Banner */}
        <div className="google-review-banner glass">
          <div className="google-logo-wrapper">
            <span className="google-icon">G</span>
            <div>
              <h3>Healing Spa & Massage Bali</h3>
              <p>Average rating <strong>5.0 / 5.0</strong> based on 120+ reviews</p>
            </div>
          </div>
          <a href="https://maps.app.goo.gl/M3LZ3GcJ9eRdti5r8" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            View on Google Maps
          </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
