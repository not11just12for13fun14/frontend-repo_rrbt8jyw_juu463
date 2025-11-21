import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import USPs from './components/USPs';
import About from './components/About';
import LogosBar, { CTA, Pricing } from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-emerald-50">
      <Navbar />
      <main>
        <Hero />
        <LogosBar />
        <USPs />
        <About />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
