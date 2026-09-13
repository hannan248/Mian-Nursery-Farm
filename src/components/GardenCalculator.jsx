import React, { useState } from 'react';
import { Calculator, Check, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/nurseryData';

export default function GardenCalculator() {
  const [plotSize, setPlotSize] = useState('1kanal');
  const [selectedFeatures, setSelectedFeatures] = useState({
    blueprint3d: true,
    lawnTurf: true,
    maturePalms: true,
    irrigation: false,
    fountain: false,
    lighting: true,
  });

  const plotOptions = [
    { id: '5marla', label: '5 Marla', sqft: 1125, baseMultiplier: 0.3 },
    { id: '10marla', label: '10 Marla', sqft: 2250, baseMultiplier: 0.55 },
    { id: '1kanal', label: '1 Kanal', sqft: 4500, baseMultiplier: 1.0 },
    { id: '2kanal', label: '2 Kanal Villa', sqft: 9000, baseMultiplier: 1.8 },
    { id: 'farmhouse', label: '4+ Kanal Farmhouse', sqft: 18000, baseMultiplier: 3.2 },
  ];

  const featuresList = [
    { id: 'blueprint3d', name: 'Photorealistic 3D Blueprint & VR Walkthrough', price: 25000 },
    { id: 'lawnTurf', name: 'Fresh Fine Dhaka Grass SOD & Soil Preparation', price: 65000 },
    { id: 'maturePalms', name: '4x Mature Date Palms / Silver Bismarckia Palms', price: 140000 },
    { id: 'irrigation', name: 'Automatic Pop-Up Sprinkler & Timer System', price: 85000 },
    { id: 'fountain', name: 'Custom Architectural Water Fountain / Waterfall', price: 175000 },
    { id: 'lighting', name: 'Hardscape Pathway Pavers & Warm Ambient LED Lights', price: 95000 },
  ];

  const toggleFeature = (id) => {
    setSelectedFeatures((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const currentPlot = plotOptions.find((p) => p.id === plotSize) || plotOptions[2];

  const handleWhatsAppExport = () => {
    const activeFeatsNames = featuresList
      .filter((f) => selectedFeatures[f.id])
      .map((f) => f.name)
      .join(', ');

    const text = `Hello Mian Nursery! I used your online Garden Estimator for a [${currentPlot.label} (${currentPlot.sqft} Sq Ft)] plot.\n\nSelected Features:\n- ${activeFeatsNames}\n\nPlease share detailed 3D quote & site survey availability.`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="calculator" className="py-24 px-4 md:px-8 bg-slate-50 text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-4">
            <Calculator className="w-3.5 h-3.5 text-emerald-700" /> Instant Budget Planning
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Garden Cost <span className="text-emerald-700 italic">Estimator</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-light">
            Select your plot dimensions and desired 3D features to receive an immediate estimated cost range for full landscape execution.
          </p>
        </div>

        {/* Calculator Box Grid */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 bg-white border border-slate-200 rounded-3xl p-4 sm:p-10 shadow-xl">
          
          {/* Left Column: Choices */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Step 1: Plot Size Selector */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-3">
                1. Select Plot Area Dimensions
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {plotOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setPlotSize(option.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      plotSize === option.id
                        ? 'bg-emerald-700 text-white border-emerald-700 font-bold shadow-md shadow-emerald-700/20'
                        : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    <p className="text-xs sm:text-sm font-bold">{option.label}</p>
                    <p className="text-[10px] sm:text-[11px] opacity-80">{option.sqft.toLocaleString()} Sq Ft</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Feature Checkboxes */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-3">
                2. Choose Landscape Features & Infrastructure
              </label>
              <div className="space-y-2.5 sm:space-y-3">
                {featuresList.map((feat) => {
                  const isChecked = selectedFeatures[feat.id];
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3 sm:p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-emerald-50 border-emerald-300 text-slate-900 font-medium'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                            isChecked ? 'bg-emerald-700 border-emerald-700 text-white' : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-medium leading-snug">{feat.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Instant Live Quote Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-emerald-800 to-emerald-900 border border-emerald-700 text-white shadow-xl">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-200 block mb-2">
                Turnkey Landscape Package
              </span>
              <h3 className="font-serif text-3xl font-bold text-white mb-1">
                {currentPlot.label} Garden
              </h3>
              <p className="text-xs text-emerald-100 mb-6 font-light">
                Covers soil work, plants, materials, labor & 12-month care warranty.
              </p>

              {/* Consultation Info Box */}
              <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-700/60 text-center mb-6">
                <p className="text-xs uppercase tracking-widest text-emerald-300 mb-2 font-bold">Custom 3D Plan & Quotation</p>
                <p className="text-xs text-emerald-100 font-light leading-relaxed">
                  Tailored blueprint with plant specs and customized budget breakdown.
                </p>
              </div>

              <div className="space-y-2 text-xs text-emerald-100 mb-8">
                <div className="flex justify-between py-1 border-b border-emerald-700/50">
                  <span className="text-emerald-200">Plot Area:</span>
                  <span className="font-bold text-white">{currentPlot.sqft.toLocaleString()} Sq Ft</span>
                </div>
                <div className="flex justify-between py-1 border-b border-emerald-700/50">
                  <span className="text-emerald-200">Selected Features:</span>
                  <span className="font-bold text-emerald-300">
                    {Object.values(selectedFeatures).filter(Boolean).length} Active
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-emerald-700/50">
                  <span className="text-emerald-200">Site Survey:</span>
                  <span className="font-bold text-emerald-200">Free in Lahore & Pattoki</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Export Button */}
            <button
              onClick={handleWhatsAppExport}
              className="w-full py-4 rounded-xl bg-white text-emerald-900 font-bold text-xs uppercase tracking-widest hover:bg-emerald-50 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageSquare className="w-4 h-4 fill-emerald-900" /> Get Official 3D Quote on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
