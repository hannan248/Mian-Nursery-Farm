import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/nurseryData';
import { MapPin, Phone, Mail, Clock, MessageSquare, Facebook, Send, Calendar, CheckCircle2 } from 'lucide-react';

export default function ContactAndLocation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Lahore',
    plotSize: '1 Kanal',
    service: '3D Architectural Landscape Design',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Send formatted message to WhatsApp
    const msg = `New Consultation Request from Mian Nursery Website:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- City: ${formData.city}\n- Plot Size: ${formData.plotSize}\n- Service Requested: ${formData.service}\n- Notes: ${formData.message}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-forest-dark text-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block mb-2">
            Get In Touch With Our Landscape Architects
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream mb-4">
            Book Your Free <span className="text-gradient-gold italic">3D Consultation</span>
          </h2>
          <p className="text-cream/80 text-sm md:text-base font-light">
            Visit our 35-acre nursery in Pattoki, stop by our Lahore studio, or book an on-site survey for your villa or farmhouse.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-forest/80 border border-gold/30 rounded-3xl p-6 sm:p-10 shadow-2xl glass-panel-dark">
            <h3 className="font-serif text-2xl font-bold text-cream mb-2">
              Request Site Survey & 3D Plan
            </h3>
            <p className="text-xs text-cream/70 font-light mb-8">
              Fill out the details below and our lead landscape architect will contact you within 2 business hours.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-accent/20 border border-emerald-accent/50 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-300 mx-auto" />
                <h4 className="font-serif text-2xl font-bold text-cream">Consultation Submitted!</h4>
                <p className="text-xs text-cream/80 leading-relaxed">
                  Redirecting to WhatsApp to send your site dimensions directly to our architect...
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-gold text-forest text-xs font-bold uppercase tracking-wider mt-4"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-cream/70 block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mian Tanveer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-forest-dark border border-white/15 text-cream text-xs focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-cream/70 block mb-2">
                      WhatsApp Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-forest-dark border border-white/15 text-cream text-xs focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-cream/70 block mb-2">
                      City / Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Lahore / Pattoki / Islamabad"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-forest-dark border border-white/15 text-cream text-xs focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-cream/70 block mb-2">
                      Property Plot Size
                    </label>
                    <select
                      value={formData.plotSize}
                      onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-forest-dark border border-white/15 text-cream text-xs focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="5 Marla">5 Marla</option>
                      <option value="10 Marla">10 Marla</option>
                      <option value="1 Kanal">1 Kanal Villa</option>
                      <option value="2 Kanal">2 Kanal Estate</option>
                      <option value="4+ Kanal Farmhouse">4+ Kanal Farmhouse</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-cream/70 block mb-2">
                    Primary Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-forest-dark border border-white/15 text-cream text-xs focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="3D Architectural Landscape Design">3D Architectural Landscape Design</option>
                    <option value="Mature Date Palms & Tree Supply">Mature Date Palms & Tree Supply</option>
                    <option value="Turnkey Villa / Farmhouse Execution">Turnkey Villa / Farmhouse Execution</option>
                    <option value="Automatic Irrigation & Lawn Sod">Automatic Irrigation & Lawn Sod</option>
                    <option value="Wholesale Nursery Order">Wholesale Nursery Order</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-cream/70 block mb-2">
                    Additional Requirements / Plot Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your garden vision, pool setup, fountains, or palm tree needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-forest-dark border border-white/15 text-cream text-xs focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-gold text-forest font-bold text-xs uppercase tracking-widest hover:bg-cream transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold/25"
                >
                  <Send className="w-4 h-4" /> Submit & Connect on WhatsApp
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Cards & Social */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Location Card 1: Pattoki */}
            <div className="p-6 rounded-2xl bg-forest/60 border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-gold">
                <MapPin className="w-5 h-5" />
                <h4 className="font-serif text-lg font-bold text-cream">Pattoki Nursery Farm Ground</h4>
              </div>
              <p className="text-xs text-cream/80 leading-relaxed font-light">
                {COMPANY_INFO.pattokiAddress}
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-cream/60 border-t border-white/10">
                <span>Visiting Hours:</span>
                <span className="font-semibold text-cream">Mon - Sun: 8:00 AM - 7:00 PM</span>
              </div>
            </div>

            {/* Location Card 2: Lahore Studio */}
            <div className="p-6 rounded-2xl bg-forest/60 border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-gold">
                <MapPin className="w-5 h-5" />
                <h4 className="font-serif text-lg font-bold text-cream">Lahore Landscape Studio</h4>
              </div>
              <p className="text-xs text-cream/80 leading-relaxed font-light">
                {COMPANY_INFO.lahoreStudio}
              </p>
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-forest to-forest-dark border border-gold/40 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gold">Direct Contact</p>
                  <p className="font-serif text-xl font-bold text-cream">{COMPANY_INFO.phone}</p>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-forest transition-colors"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>

              {/* Facebook Page Highlight Button */}
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-blue-600/30 border border-blue-500/40 text-blue-300 hover:bg-blue-600 hover:text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all shadow-lg"
              >
                <Facebook className="w-4 h-4 fill-blue-300" /> Visit Official Facebook Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
