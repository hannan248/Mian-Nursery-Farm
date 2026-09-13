import React from 'react';
import { Phone, MessageSquare, MapPin, FileText, User } from 'lucide-react';
import { COMPANY_INFO } from '../data/nurseryData';

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-between pt-28 bg-white text-slate-900 border-b border-slate-200 overflow-hidden">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 max-w-full w-[800px] h-[350px] bg-emerald-100/50 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Banner Content (Full Width Container) */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 my-auto relative z-10">
        
        {/* Top Badge */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest shadow-sm">
            <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700" />
            NTN #: {COMPANY_INFO.ntn}
          </div>
        </div>

        {/* Main Title Banner */}
        <div className="text-center max-w-5xl mx-auto mb-6 sm:mb-8">
          <h1 className="font-serif text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-emerald-800 tracking-tight leading-tight sm:leading-none mb-4 sm:mb-6 drop-shadow-sm">
            MIAN NURSERY FARM
          </h1>

          {/* Subheading Box */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 shadow-sm">
            <p className="text-sm sm:text-xl md:text-2xl font-bold text-slate-800 leading-snug">
              Deal in All Kinds of Landscaping & <br className="hidden sm:inline" />
              <span className="text-emerald-700 font-extrabold">Indoor, Outdoor Plants Supply</span>
            </p>
          </div>
        </div>

        {/* Visual Bonsai & Landscaping Showcase Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto pt-2 sm:pt-4">
          
          {/* Indoor Plants Card */}
          <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all">
            <img
              src="/images/plant_heart_shaped_topiary.jpg"
              alt="Bonsai & Topiary Plants"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover border border-emerald-300 shrink-0"
            />
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">Indoor & Topiary Flora</h3>
              <p className="text-[11px] text-slate-600 mt-0.5">Sculpted Topiary & Air Purifiers</p>
            </div>
          </div>

          {/* Outdoor Landscaping Card */}
          <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all">
            <img
              src="/images/3d_villa_front_elevation.jpg"
              alt="Outdoor Palms & Landscaping"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover border border-emerald-300 shrink-0"
            />
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">Outdoor Landscaping</h3>
              <p className="text-[11px] text-slate-600 mt-0.5">Mature Palms & 3D Execution</p>
            </div>
          </div>

          {/* Direct Supply Card */}
          <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all sm:col-span-2 md:col-span-1">
            <img
              src="/images/plant_cycad_sago_specimen.jpg"
              alt="Direct Pattoki Supply"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover border border-emerald-300 shrink-0"
            />
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">Direct Pattoki Nursery</h3>
              <p className="text-[11px] text-slate-600 mt-0.5">Wholesale & Retail Supply</p>
            </div>
          </div>

        </div>

      </div>

      {/* Full-Width Solid Green Bottom Banner Bar */}
      <div className="w-full bg-emerald-800 text-white py-6 sm:py-8 px-4 md:px-8 border-t-4 border-emerald-600 shadow-2xl relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          
          {/* Left / Info Stack */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <div className="px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/20 text-emerald-100 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider whitespace-nowrap flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-emerald-300" /> Prop: {COMPANY_INFO.proprietor}
            </div>

            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-emerald-100">
              <MapPin className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>{COMPANY_INFO.pattokiAddress}</span>
            </div>
          </div>

          {/* Right / Contact Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2.5 w-full md:w-auto">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/-/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-emerald-900 font-extrabold text-xs uppercase tracking-wider hover:bg-emerald-50 transition-all shadow-md"
            >
              <Phone className="w-4 h-4 fill-emerald-800" /> {COMPANY_INFO.phone}
            </a>

            <a
              href={`tel:${COMPANY_INFO.phone2.replace(/-/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-emerald-900 font-extrabold text-xs uppercase tracking-wider hover:bg-emerald-50 transition-all shadow-md"
            >
              <Phone className="w-4 h-4 fill-emerald-800" /> {COMPANY_INFO.phone2}
            </a>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider hover:bg-emerald-500 border border-emerald-400 transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-white" /> WhatsApp Mian Saad
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
