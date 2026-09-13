import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PlantCatalog from './components/PlantCatalog';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import GardenCalculator from './components/GardenCalculator';
import ClientShowcase from './components/ClientShowcase';
import FaqSection from './components/FaqSection';
import ContactAndLocation from './components/ContactAndLocation';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-600 selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PlantCatalog />
        <BeforeAfterGallery />
        <GardenCalculator />
        <ClientShowcase />
        <FaqSection />
        <ContactAndLocation />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
