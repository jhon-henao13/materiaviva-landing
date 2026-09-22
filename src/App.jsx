import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCarousel from './components/StatsCarousel';
import Pergolas from './components/Pergolas';
import DecksSection from './components/DecksSection';
import GoogleReviewsSection from './components/GoogleReviewsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <StatsCarousel />
        <Pergolas />
        <DecksSection />
        <GoogleReviewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;