import React from 'react';
import { SERVICES, COMPANY_INFO } from '../data/nurseryData';
import { Boxes, Trees, Landmark, Droplets, Flower2, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function ServicesSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Boxes': return <Boxes className="w-6 h-6 text-gold" />;
      case 'TreePalms': return <Trees className="w-6 h-6 text-gold" />;
      case 'Landmark': return <Landmark className="w-6 h-6 text-gold" />;
      case 'Droplets': return <Droplets className="w-6 h-6 text-gold" />;
      case 'Flower2': return <Flower2 className="w-6 h-6 text-gold" />;
      default: return <Sparkles className="w-6 h-6 text-gold" />;
    }
  };

  const handleInquireService = (title) => {
    const msg = `Hello Mian Nursery! I would like to inquire about your service: '${title}'. Please provide a consultation and 3D quote.`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="services" className="py-24 px-4 md:px-8 bg-cream text-forest relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-forest/10 pb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block mb-2">
              Professional Services We Provide
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-forest">
              Landscaping Services We Provide & <br />
              <span className="text-gradient-gold italic">Nursery Solutions</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-forest/70 font-light leading-relaxed">
            From 3D master planning to crane-loaded mature tree installation, Mian Nursery provides complete turnkey excellence across Pakistan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group p-8 rounded-2xl bg-white border border-forest/10 hover:border-gold/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-forest/5 border border-forest/10 flex items-center justify-center group-hover:bg-forest group-hover:text-gold transition-colors">
                    {getIcon(service.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-wider">
                    {service.badge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-forest mb-1 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-forest/50 mb-4">
                  {service.subtitle}
                </p>

                <p className="text-xs md:text-sm text-forest/75 font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-8 pt-4 border-t border-forest/5">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-medium text-forest/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-accent shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleInquireService(service.title)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-forest/5 text-forest font-bold text-xs uppercase tracking-wider group-hover:bg-gradient-gold group-hover:text-forest transition-all"
              >
                Inquire Service We Provide <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
