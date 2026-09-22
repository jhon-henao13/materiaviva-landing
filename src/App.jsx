import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        {/* Próximas secciones irán aquí: Pérgolass, Decks, Reseñas, FAQ */}
      </main>
      <Footer />
    </div>
  );
}

export default App;