import React, { useState } from 'react';
import './Services.css';

// Treatment Data
export const treatmentsData = [
  {
    id: 'balinese',
    name: 'Traditional Balinese Massage',
    category: 'Massage & Therapeutic',
    icon: '💆‍♀️',
    description: 'A traditional full-body treatment combining acupressure, reflexology, gentle stretching, and skin rolling. Restores deep harmony and blood circulation.',
    benefits: [
      'Relieves muscle tension and joint pain',
      'Improves blood circulation and oxygen flow',
      'Reduces stress levels and anxiety',
      'Promotes deep, restful sleep'
    ],
    pricing: {
      60: 200000,
      90: 280000,
      120: 350000
    },
    popular: true
  },
  {
    id: 'sunburn',
    name: 'Sunburn Soothing Massage',
    category: 'Specialized Healing',
    icon: '☀️',
    description: 'A cooling, ultra-gentle massage utilizing 100% natural, fresh organic cold aloe vera gel and cucumber extract. Ideal for sun-damaged and sensitive skin.',
    benefits: [
      'Instantly cools and calms sun-damaged skin',
      'Reduces peeling, redness, and inflammation',
      'Hydrates and regenerates skin cells',
      'Zero oil - fully absorption-based cooling gel'
    ],
    pricing: {
      60: 220000,
      90: 300000
    },
    popular: true
  },
  {
    id: 'lymphatic',
    name: 'Lymphatic Drainage Massage',
    category: 'Detox & Wellness',
    icon: '🧴',
    description: 'A highly specialized, light-pressure rhythmic massage designed to stimulate the flow of lymph fluid, aiding the body in natural detoxification and reducing fluid retention.',
    benefits: [
      'Supports the body\'s immune system',
      'Reduces swelling, bloating, and water retention',
      'Helps flush toxins and metabolic waste',
      'Promotes cellular regeneration and glowing skin'
    ],
    pricing: {
      60: 250000,
      90: 330000,
      120: 400000
    },
    popular: false
  },
  {
    id: 'madero',
    name: 'Madero Therapy (Wood Massage)',
    category: 'Body Sculpting',
    icon: '🪵',
    description: 'An innovative body contouring technique using anatomical wooden rollers. Highly effective for breaking down fat cells, sculpting the body, and fighting cellulite.',
    benefits: [
      'Breaks down stubborn cellulite and localized fat',
      'Stimulates lymphatic drainage and blood flow',
      'Tones, firms, and contours thighs, arms, and belly',
      'Boosts metabolism and immune response'
    ],
    pricing: {
      60: 300000,
      90: 400000
    },
    popular: false
  },
  {
    id: 'deep-tissue',
    name: 'Deep Tissue / Sports Massage',
    category: 'Massage & Therapeutic',
    icon: '💪',
    description: 'Focuses on realigning deeper layers of muscles and connective tissue. Highly recommended for chronic muscle pain, tightness, and recovery from sports activities.',
    benefits: [
      'Releases chronic muscle knots and tight bands',
      'Increases range of motion and joint flexibility',
      'Speeds up muscle recovery after sports/surfing',
      'Helps relieve lower back and neck pain'
    ],
    pricing: {
      60: 220000,
      90: 300000,
      120: 380000
    },
    popular: false
  },
  {
    id: 'aromatherapy',
    name: 'Sensory Aromatherapy',
    category: 'Massage & Therapeutic',
    icon: '🌸',
    description: 'A relaxing massage with light-to-medium strokes combined with custom botanical essential oil blends (Lavender, Frangipani, or Lemongrass) to restore mental peace.',
    benefits: [
      'Balances emotional state and calms the mind',
      'Soothes nervous system and counters fatigue',
      'Essential oils nourish and soften the skin',
      'Aromas promote deep sensory relaxation'
    ],
    pricing: {
      60: 210000,
      90: 290000,
      120: 360000
    },
    popular: false
  }
];

const Services = ({ onSelectTreatment }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedDetails, setSelectedDetails] = useState(null);

  const categories = ['All', 'Massage & Therapeutic', 'Specialized Healing', 'Detox & Wellness', 'Body Sculpting'];

  const filteredTreatments = activeCategory === 'All'
    ? treatmentsData
    : treatmentsData.filter(t => t.category === activeCategory);

  const handleBookNow = (treatmentId) => {
    if (onSelectTreatment) {
      onSelectTreatment(treatmentId);
      // Smooth scroll to booking
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="services" className="section services-section section-dark">
      <div className="container">
        
        <div className="section-header text-center">
          <span className="subtitle">Indulgent Spa Menu</span>
          <h2 className="title">Select Your Healing Journey</h2>
          <p className="description">
            Choose from our range of traditional Balinese therapies, cooling sunburn relief, and specialized body treatments. All prices are fully inclusive of therapist travel.
          </p>
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {filteredTreatments.map(t => (
            <div key={t.id} className={`service-card glass ${t.popular ? 'popular' : ''}`}>
              {t.popular && <span className="popular-badge">Guest Favorite</span>}
              <div className="service-header">
                <span className="service-icon-bg">{t.icon}</span>
                <span className="service-cat">{t.category}</span>
              </div>
              <h3 className="service-title">{t.name}</h3>
              <p className="service-desc">{t.description}</p>
              
              <div className="service-price-wrapper">
                <span className="price-label">Starts from</span>
                <span className="price-value">IDR {t.pricing[60].toLocaleString('id-ID')}</span>
                <span className="price-time">/ 60 Min</span>
              </div>

              <div className="service-footer">
                <button className="btn-details" onClick={() => setSelectedDetails(t)}>
                  View Benefits & Prices
                </button>
                <button className="btn btn-accent btn-book-service" onClick={() => handleBookNow(t.id)}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Details Modal */}
        {selectedDetails && (
          <div className="modal-overlay" onClick={() => setSelectedDetails(null)}>
            <div className="modal-content glass" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedDetails(null)}>&times;</button>
              <div className="modal-header">
                <span className="modal-icon">{selectedDetails.icon}</span>
                <div>
                  <span className="service-cat">{selectedDetails.category}</span>
                  <h2>{selectedDetails.name}</h2>
                </div>
              </div>
              
              <div className="modal-body">
                <div className="modal-section">
                  <h3>Description</h3>
                  <p>{selectedDetails.description}</p>
                </div>

                <div className="modal-section">
                  <h3>Therapeutic Benefits</h3>
                  <ul className="modal-benefits">
                    {selectedDetails.benefits.map((b, i) => (
                      <li key={i}>🌿 {b}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h3>Pricing Details</h3>
                  <div className="modal-pricing-grid">
                    {Object.entries(selectedDetails.pricing).map(([duration, price]) => (
                      <div key={duration} className="modal-pricing-row">
                        <span className="modal-duration">⏰ {duration} Minutes</span>
                        <span className="modal-price">IDR {price.toLocaleString('id-ID')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button className="btn btn-primary" onClick={() => setSelectedDetails(null)}>Close</button>
                <button className="btn btn-accent" onClick={() => {
                  handleBookNow(selectedDetails.id);
                  setSelectedDetails(null);
                }}>
                  Book This Treatment
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Services;
