import React from 'react';
import { ArrowRight, Boxes, Sparkles, MessageSquare, Award, Trees, MapPin, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/nurseryData';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-32 pb-16 px-4 md:px-8 bg-forest-dark overflow-hidden text-cream">
      {/* Background Image Overlay with Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2000&auto=format&fit=crop"
          alt="Mian Nursery Farm & 3D Landscaping"
          className="w-full h-full object-cover object-center opacity-30 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/80 to-black/60" />
      </div>

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-accent/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-[0.25em] mb-6 shadow-glow-gold">
          <Sparkles className="w-4 h-4" /> Est. {COMPANY_INFO.established} · Pattoki Nursery & Lahore Studio
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold text-cream leading-[1.08] max-w-5xl tracking-tight mb-6">
          Living heritage, <br className="hidden sm:inline" />
          <span className="text-gradient-gold italic font-normal">3D landscape architectural</span> mastery.
        </h1>

        {/* Subtitle */}
        <p className="text-cream/90 text-base sm:text-xl font-light leading-relaxed max-w-2xl mb-10">
          Transform your residence, penthouse, or multi-kanal farmhouse into a luxury paradise. Explore real-time 3D garden designs, mature Date Palms, and turnkey lawn execution from Pattoki's heritage nursery.
        </p>

        {/* Action Buttons Grid */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <a
            href="#services"
            className="group inline-flex items-center gap-3 bg-gradient-gold text-forest px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] shadow-lg shadow-gold/25 hover:scale-[1.02] hover:bg-cream transition-all"
          >
            <Boxes className="w-4 h-4" />
            Explore Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-gold/40 text-cream px-7 py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold/10 hover:border-gold transition-all"
          >
            <MessageSquare className="w-4 h-4 text-gold" />
            WhatsApp Architect
          </a>

          <a
            href="#catalog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cream/70 hover:text-gold px-4 py-4 transition-colors"
          >
            Browse Mature Plants &rarr;
          </a>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap items-center gap-6 text-xs text-cream/80 border-t border-white/10 pt-6">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-gold" /> Photorealistic 3D Blueprinting
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-gold" /> 35-Acres Nursery Ground Supply
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-gold" /> Nationwide Crane Tree Delivery
          </span>
        </div>
      </div>

      {/* Bottom Stats Counter Banner */}
      <div className="relative z-10 max-w-7xl mx-auto w-full border-t border-gold/20 pt-8 mt-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <p className="font-serif text-3xl md:text-4xl font-bold text-gold">{COMPANY_INFO.yearsExperience}</p>
          <p className="text-xs uppercase tracking-widest text-cream/60 mt-1">Years Heritage (Since 1998)</p>
        </div>
        <div>
          <p className="font-serif text-3xl md:text-4xl font-bold text-gold">{COMPANY_INFO.acres}</p>
          <p className="text-xs uppercase tracking-widest text-cream/60 mt-1">Pattoki Nursery Acres</p>
        </div>
        <div>
          <p className="font-serif text-3xl md:text-4xl font-bold text-gold">{COMPANY_INFO.varieties}</p>
          <p className="text-xs uppercase tracking-widest text-cream/60 mt-1">Botanic Varieties</p>
        </div>
        <div>
          <p className="font-serif text-3xl md:text-4xl font-bold text-gold">{COMPANY_INFO.projectsCompleted}</p>
          <p className="text-xs uppercase tracking-widest text-cream/60 mt-1">Farmhouses & Villas</p>
        </div>
      </div>
    </section>
  );
}
