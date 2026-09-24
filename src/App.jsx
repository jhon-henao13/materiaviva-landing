import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCarousel from './components/StatsCarousel';
import Pergolas from './components/Pergolas';
import DecksSection from './components/DecksSection';
import GoogleReviewsSection from './components/GoogleReviewsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton'; // <-- IMPORTAR AQUÍ

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <StatsCarousel />
        <Pergolas />
        <DecksSection />
        <GoogleReviewsSection />
        <FaqSection />
      </main>
      <Footer />
      <WhatsAppButton /> {/* <-- AGREGAR AQUÍ */}
    </div>
  );
}

export default App;