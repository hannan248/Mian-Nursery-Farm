import React from 'react';
import { SERVICES, COMPANY_INFO } from '../data/nurseryData';
import { Boxes, Trees, Landmark, Droplets, Flower2, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function ServicesSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Boxes': return <Boxes className="w-6 h-6 text-emerald-700 group-hover:text-white transition-colors" />;
      case 'TreePalms': return <Trees className="w-6 h-6 text-emerald-700 group-hover:text-white transition-colors" />;
      case 'Landmark': return <Landmark className="w-6 h-6 text-emerald-700 group-hover:text-white transition-colors" />;
      case 'Droplets': return <Droplets className="w-6 h-6 text-emerald-700 group-hover:text-white transition-colors" />;
      case 'Flower2': return <Flower2 className="w-6 h-6 text-emerald-700 group-hover:text-white transition-colors" />;
      default: return <Sparkles className="w-6 h-6 text-emerald-700 group-hover:text-white transition-colors" />;
    }
  };

  const handleInquireService = (title) => {
    const msg = `Hello Mian Nursery! I would like to inquire about your service: '${title}'. Please provide a consultation and 3D quote.`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="services" className="py-24 px-4 md:px-8 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200 pb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700 block mb-2">
              Professional Services We Provide
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Landscaping Services We Provide & <br />
              <span className="text-emerald-700 italic">Nursery Solutions</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600 font-light leading-relaxed">
            From 3D master planning to crane-loaded mature tree installation, Mian Nursery provides complete turnkey excellence across Pakistan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-700 transition-colors">
                    {getIcon(service.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider border border-emerald-200">
                    {service.badge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
                  {service.subtitle}
                </p>

                <p className="text-xs md:text-sm text-slate-600 font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-8 pt-4 border-t border-slate-100">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleInquireService(service.title)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs uppercase tracking-wider group-hover:bg-emerald-700 group-hover:text-white transition-all shadow-sm"
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
