import React, { useState, useEffect } from 'react';
import { Leaf, Phone, MessageSquare, Menu, X, Facebook } from 'lucide-react';
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
          ? 'glass-nav py-3 shadow-sm'
          : 'bg-white/90 backdrop-blur-md py-4 border-b border-slate-200/80 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white font-bold shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
            <Leaf className="w-5 h-5 fill-white" />
          </div>
          <div>
            <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-slate-900 block leading-none">
              Mian <span className="text-emerald-700">Nursery</span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 block mt-0.5">
              & 3D Landscaping
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-widest text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-emerald-700 transition-colors flex items-center gap-1.5 py-1 relative group"
            >
              {link.name}
              {link.badge && (
                <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[9px] font-extrabold border border-emerald-200">
                  {link.badge}
                </span>
              )}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
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
            className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-blue-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-blue-600 transition-colors"
            title="Follow Mian Nursery on Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>

          {/* Direct Call */}
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-emerald-700 px-3.5 py-2 rounded-lg bg-slate-100 border border-slate-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" /> {COMPANY_INFO.phone}
          </a>

          {/* WhatsApp Action */}
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-emerald-800 transition-all shadow-md shadow-emerald-700/20"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" /> WhatsApp Quote
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:text-emerald-700 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white/98 backdrop-blur-2xl border-b border-slate-200 p-5 shadow-2xl flex flex-col gap-4 text-slate-900 animate-fadeIn z-50 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-2 font-semibold uppercase text-xs sm:text-sm tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-4 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 transition-colors flex items-center justify-between border border-slate-100"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 rounded bg-emerald-700 text-white text-[10px] font-bold">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 text-emerald-700" /> Call {COMPANY_INFO.phone}
            </a>

            <a
              href={COMPANY_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs uppercase tracking-wider"
            >
              <Facebook className="w-4 h-4" /> Visit Facebook Page
            </a>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-emerald-700/20"
            >
              <MessageSquare className="w-4 h-4" /> Get Free 3D Quote on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
