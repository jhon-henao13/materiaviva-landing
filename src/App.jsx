import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCarousel from './components/StatsCarousel';
import Pergolas from './components/Pergolas';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <StatsCarousel />
        <Pergolas />
      </main>
      <Footer />
    </div>
  );
}

export default App;