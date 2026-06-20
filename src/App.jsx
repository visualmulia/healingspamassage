import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [selectedTreatmentId, setSelectedTreatmentId] = useState(null);

  const handleSelectTreatment = (treatmentId) => {
    setSelectedTreatmentId(treatmentId);
  };

  const handleClearSelectedTreatment = () => {
    setSelectedTreatmentId(null);
  };

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services onSelectTreatment={handleSelectTreatment} />
      <BookingForm 
        selectedTreatmentId={selectedTreatmentId} 
        clearSelectedTreatment={handleClearSelectedTreatment} 
      />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
