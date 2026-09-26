import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCarousel from './components/StatsCarousel';
import Pergolas from './components/Pergolas';
import VideoSection from './components/VideoSection';
import DecksSection from './components/DecksSection';
import GoogleReviewsSection from './components/GoogleReviewsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <StatsCarousel />
        <Pergolas />
        <VideoSection />
        <DecksSection />
        <GoogleReviewsSection />
        <FaqSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;