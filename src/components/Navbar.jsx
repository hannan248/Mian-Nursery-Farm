import React, { useState, useEffect } from 'react';
import { Leaf, Phone, MessageSquare, Menu, X, Sparkles, Facebook } from 'lucide-react';
import { COMPANY_INFO } from '../data/nurseryData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Plant Catalog', href: '#catalog' },
    { name: '3D Projects', href: '#portfolio' },
    { name: 'Cost Estimator', href: '#calculator' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-cream'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center text-forest font-bold shadow-lg shadow-gold/20 group-hover:scale-105 transition-transform">
            <Leaf className="w-5 h-5 fill-forest" />
          </div>
          <div>
            <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-cream block leading-none">
              Mian <span className="text-gold">Nursery</span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/70 block mt-0.5">
              & 3D Landscaping
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-widest text-cream/90">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-gold transition-colors flex items-center gap-1.5 py-1 relative group"
            >
              {link.name}
              {link.badge && (
                <span className="px-1.5 py-0.5 rounded bg-gold/20 text-gold text-[9px] font-extrabold border border-gold/30">
                  {link.badge}
                </span>
              )}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Facebook Link */}
          <a
            href={COMPANY_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-blue-600/30 border border-white/15 flex items-center justify-center text-cream hover:text-blue-400 transition-colors"
            title="Follow Mian Nursery on Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>

          {/* Direct Call */}
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold text-cream/90 hover:text-gold px-3 py-2 rounded-lg bg-white/5 border border-white/10 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gold" /> {COMPANY_INFO.phone}
          </a>

          {/* WhatsApp Action */}
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-gold text-forest px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-cream hover:text-forest transition-all shadow-md shadow-gold/20"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-forest" /> WhatsApp Quote
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-white/10 border border-white/15 text-cream hover:text-gold transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-forest-dark/95 backdrop-blur-2xl border-b border-gold/20 p-6 shadow-2xl flex flex-col gap-4 text-cream animate-fadeIn z-50">
          <nav className="flex flex-col gap-3 font-semibold uppercase text-sm tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-4 rounded-lg bg-white/5 hover:bg-white/10 hover:text-gold transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 rounded bg-gold text-forest text-xs font-bold">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={COMPANY_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-300 font-bold text-xs uppercase tracking-wider"
            >
              <Facebook className="w-4 h-4" /> Visit Facebook Page
            </a>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-gold text-forest font-bold text-xs uppercase tracking-wider shadow-lg"
            >
              <MessageSquare className="w-4 h-4" /> Get Free 3D Quote on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
