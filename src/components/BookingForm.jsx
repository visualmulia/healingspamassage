import React, { useState, useEffect } from 'react';
import './BookingForm.css';
import { treatmentsData } from './Services';

const BookingForm = ({ selectedTreatmentId, clearSelectedTreatment }) => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatmentId: treatmentsData[0].id,
    duration: 60,
    pax: 1,
    therapistPref: 'No Preference',
    date: '',
    time: '',
    address: ''
  });

  const [estimatedPrice, setEstimatedPrice] = useState(0);

  // Sync selected treatment from parent (e.g., clicking "Book Now" in Services list)
  useEffect(() => {
    if (selectedTreatmentId) {
      const selectedObj = treatmentsData.find(t => t.id === selectedTreatmentId);
      if (selectedObj) {
        // Find closest available duration
        const availableDurations = Object.keys(selectedObj.pricing).map(Number);
        const durationVal = availableDurations.includes(90) ? 90 : availableDurations[0];
        
        setFormData(prev => ({
          ...prev,
          treatmentId: selectedTreatmentId,
          duration: durationVal
        }));
      }
    }
  }, [selectedTreatmentId]);

  // Find currently selected treatment details
  const currentTreatment = treatmentsData.find(t => t.id === formData.treatmentId) || treatmentsData[0];
  const availableDurations = Object.keys(currentTreatment.pricing).map(Number);

  // Calculate pricing
  useEffect(() => {
    const basePrice = currentTreatment.pricing[formData.duration] || currentTreatment.pricing[60];
    const total = basePrice * formData.pax;
    setEstimatedPrice(total);
  }, [formData.treatmentId, formData.duration, formData.pax]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const updated = { ...prev, [name]: value };
      
      // If we change treatment, make sure the duration is valid for that treatment
      if (name === 'treatmentId') {
        const nextTreatment = treatmentsData.find(t => t.id === value) || treatmentsData[0];
        const nextDurations = Object.keys(nextTreatment.pricing).map(Number);
        if (!nextDurations.includes(prev.duration)) {
          updated.duration = nextDurations[0];
        }
      }
      return updated;
    });
  };

  const handlePaxChange = (amount) => {
    setFormData(prev => ({
      ...prev,
      pax: Math.max(1, prev.pax + amount)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.address || !formData.date || !formData.time) {
      alert('Please fill in all required fields (Name, Villa/Hotel Address, Date, and Time).');
      return;
    }

    // Target Spa WhatsApp Number
    const waNumber = '62881037342111';
    
    // Format Message
    const msg = `Hello Healing Spa Bali 🌿
I would like to book a home/hotel service massage session.

*Booking details:*
• Name: ${formData.name}
• Treatment: ${currentTreatment.name}
• Duration: ${formData.duration} Minutes
• Pax: ${formData.pax} Person(s)
• Therapist: ${formData.therapistPref}
• Date: ${formData.date}
• Time: ${formData.time}
• Hotel/Villa Address: ${formData.address}

*Estimated Total Price:* IDR ${estimatedPrice.toLocaleString('id-ID')} (Travel fee is included)

Thank you!`;

    // Encode URL and redirect
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');

    if (clearSelectedTreatment) {
      clearSelectedTreatment();
    }
  };

  return (
    <section id="booking" className="section booking-section">
      <div className="container">
        
        <div className="section-header text-center">
          <span className="subtitle">Easy Scheduling</span>
          <h2 className="title">Book Your Villa Massage</h2>
          <p className="description">
            Customize your treatment details below. When you submit, a pre-formatted WhatsApp message will open to confirm your booking instantly.
          </p>
        </div>

        <div className="booking-grid">
          
          {/* Left Column: Form */}
          <form className="booking-form glass" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-6">
                <label htmlFor="name">Full Name <span className="required">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  required
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="phone">Contact Number (WhatsApp)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +61 412 345 678"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-8">
                <label htmlFor="treatmentId">Select Treatment</label>
                <select
                  id="treatmentId"
                  name="treatmentId"
                  value={formData.treatmentId}
                  onChange={handleChange}
                >
                  {treatmentsData.map(t => (
                    <option key={t.id} value={t.id}>{t.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group col-4">
                <label htmlFor="duration">Duration</label>
                <select
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                >
                  {availableDurations.map(d => (
                    <option key={d} value={d}>{d} Min</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-6">
                <label>Number of People (Pax)</label>
                <div className="pax-counter">
                  <button type="button" onClick={() => handlePaxChange(-1)} disabled={formData.pax <= 1}>-</button>
                  <span className="pax-val">{formData.pax}</span>
                  <button type="button" onClick={() => handlePaxChange(1)}>+</button>
                </div>
              </div>
              
              <div className="form-group col-6">
                <label htmlFor="therapistPref">Therapist Preference</label>
                <select
                  id="therapistPref"
                  name="therapistPref"
                  value={formData.therapistPref}
                  onChange={handleChange}
                >
                  <option value="No Preference">No Preference</option>
                  <option value="Female Therapist">Female Therapist</option>
                  <option value="Male Therapist">Male Therapist</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-6">
                <label htmlFor="date">Select Date <span className="required">*</span></label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group col-6">
                <label htmlFor="time">Select Time <span className="required">*</span></label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">Hotel / Villa Name & Room Number <span className="required">*</span></label>
              <textarea
                id="address"
                name="address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                placeholder="e.g. W Bali Seminyak, Villa 210, Jl. Petitenget"
                required
              ></textarea>
              <span className="helper-text">Please include your villa name and room number so our therapist can find you easily.</span>
            </div>

            <button type="submit" className="btn btn-primary btn-submit">
              Send Booking Request via WhatsApp 💬
            </button>
          </form>

          {/* Right Column: Pricing Summary Card */}
          <div className="booking-summary glass">
            <h3 className="summary-title">Booking Summary</h3>
            <div className="summary-divider"></div>
            
            <div className="summary-details">
              <div className="summary-row">
                <span className="summary-label">Treatment</span>
                <span className="summary-val">{currentTreatment.name}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Duration</span>
                <span className="summary-val">{formData.duration} Minutes</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Guests</span>
                <span className="summary-val">{formData.pax} Person(s)</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Therapist Pref</span>
                <span className="summary-val">{formData.therapistPref}</span>
              </div>
              {formData.date && (
                <div className="summary-row">
                  <span className="summary-label">Date & Time</span>
                  <span className="summary-val">{formData.date} at {formData.time || '--:--'}</span>
                </div>
              )}
              <div className="summary-row">
                <span className="summary-label">Travel & Tax</span>
                <span className="summary-val success-text">FREE / INCLUDED</span>
              </div>
            </div>

            <div className="summary-total-section">
              <div className="summary-divider"></div>
              <div className="summary-total-row">
                <span>Estimated Total</span>
                <div className="total-price-box">
                  <span className="price-currency">IDR</span>
                  <span className="price-amount">{estimatedPrice.toLocaleString('id-ID')}</span>
                </div>
              </div>
              <p className="summary-disclaimer">
                Payment can be made in Cash (IDR) directly to the therapist, or via Bank Transfer upon arrival.
              </p>
            </div>
            
            <div className="summary-guarantees">
              <div className="guarantee-item">
                <span className="guarantee-icon">🛡️</span>
                <p><strong>Instant Confirmation</strong> - Checked immediately via WhatsApp.</p>
              </div>
              <div className="guarantee-item">
                <span className="guarantee-icon">💧</span>
                <p><strong>Free Cancellation</strong> - No deposit required. Pay after treatment.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingForm;
