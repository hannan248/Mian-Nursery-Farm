import React from 'react';
import { CLIENT_LOGOS, COMPANY_INFO } from '../data/nurseryData';
import { Building2, Award, ShieldCheck, Trees } from 'lucide-react';

export default function ClientShowcase() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white text-slate-900 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700 block mb-2">
            Trusted Across Pakistan
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            Prestigious Housing Societies & <span className="text-emerald-700 italic">Commercial Clients</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-light">
            Housing authorities, cantonment boards, hotel chains, and private developers rely on Mian Nursery for mature plant supply and 3D landscape architecture.
          </p>
        </div>

        {/* Clients Badge Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-14">
          {CLIENT_LOGOS.map((client, idx) => (
            <div
              key={idx}
              className="group p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:bg-white shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center text-center h-24"
            >
              <Building2 className="w-6 h-6 text-slate-400 group-hover:text-emerald-700 transition-colors mb-2" />
              <span className="text-xs font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                {client.label}
              </span>
            </div>
          ))}
        </div>

        {/* Accreditation Cards */}
        <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-slate-200">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-slate-900">28+ Years Heritage</h4>
              <p className="text-xs text-slate-600 font-light mt-1">
                Family-run horticulture mastery based in Pattoki since {COMPANY_INFO.established}.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
              <Trees className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-slate-900">35 Acres Nursery Grounds</h4>
              <p className="text-xs text-slate-600 font-light mt-1">
                One of the largest wholesale specimen nurseries in Pattoki, Punjab.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-slate-900">12-Month Plant Warranty</h4>
              <p className="text-xs text-slate-600 font-light mt-1">
                Full aftercare support, root health replacement guarantee & routine visits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
