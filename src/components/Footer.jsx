import React from 'react';
import { COMPANY_INFO } from '../data/nurseryData';
import { Leaf, Facebook, MessageSquare, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-cream/70 pt-20 pb-10 px-4 md:px-8 border-t border-gold/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
        
        {/* Col 1 & 2: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center text-forest font-bold shadow-lg shadow-gold/20">
              <Leaf className="w-5 h-5 fill-forest" />
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-tight text-cream block leading-none">
                Mian <span className="text-gold">Nursery</span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/70 block mt-0.5">
                & 3D Landscaping
              </span>
            </div>
          </div>

          <p className="text-xs text-cream/70 font-light leading-relaxed max-w-sm">
            Near Multan Road Bypass, Gehlan Phattak, Pattoki, Punjab. A 35-acre nursery farm stocking over 2,500 plant varieties, cultivating the region's finest flora and designing photorealistic 3D landscapes for private estates and commercial developments since 1998.
          </p>

          <div className="pt-2 flex items-center gap-3">
            <a
              href={COMPANY_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cream hover:text-gold hover:border-gold transition-colors"
              title="Mian Nursery Facebook Page"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-emerald-accent/20 border border-emerald-accent/40 flex items-center justify-center text-emerald-300 hover:bg-emerald-accent hover:text-white transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 3: Quick Navigation */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gold">Navigation</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#services" className="hover:text-gold transition-colors">Landscaping Services</a></li>
            <li><a href="#catalog" className="hover:text-gold transition-colors">Botanic Plant Catalog</a></li>
            <li><a href="#portfolio" className="hover:text-gold transition-colors">3D Render & Before/After</a></li>
            <li><a href="#calculator" className="hover:text-gold transition-colors">Garden Cost Estimator</a></li>
            <li><a href="#contact" className="hover:text-gold transition-colors">Book Site Consultation</a></li>
          </ul>
        </div>

        {/* Col 4: Delivery Cities */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gold">Tree Delivery Regions</h4>
          <ul className="space-y-2 text-xs">
            <li><span className="text-cream/90 font-medium">Pattoki Nursery Hub</span></li>
            <li><span className="text-cream/90 font-medium">Lahore & DHA Phases</span></li>
            <li><span className="text-cream/90 font-medium">Islamabad & Rawalpindi</span></li>
            <li><span className="text-cream/90 font-medium">Faisalabad & Multan</span></li>
            <li><span className="text-cream/90 font-medium">Sialkot & Gujranwala</span></li>
            <li><span className="text-cream/90 font-medium">Nationwide Crane Transport</span></li>
          </ul>
        </div>

        {/* Col 5: Direct Contact */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gold">Contact Info</h4>
          <div className="space-y-2 text-xs text-cream/80">
            <p className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-gold shrink-0" /> {COMPANY_INFO.phone}
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" /> Pattoki & Lahore, Pakistan
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-widest text-cream/50">
        <p>© {new Date().getFullYear()} Mian Nursery Farm & 3D Landscaping. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href={COMPANY_INFO.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
            Official Facebook Page
          </a>
        </div>
      </div>
    </footer>
  );
}
