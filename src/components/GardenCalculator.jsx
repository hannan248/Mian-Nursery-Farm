import React, { useState } from 'react';
import { Calculator, Check, MessageSquare, Sparkles, ShieldAlert, ArrowRight } from 'lucide-react';
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
    <section id="calculator" className="py-24 px-4 md:px-8 bg-forest-dark text-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest mb-4">
            <Calculator className="w-3.5 h-3.5" /> Instant Budget Planning
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream mb-4">
            Garden Cost <span className="text-gradient-gold italic">Estimator</span>
          </h2>
          <p className="text-cream/80 text-sm md:text-base font-light">
            Select your plot dimensions and desired 3D features to receive an immediate estimated cost range for full landscape execution.
          </p>
        </div>

        {/* Calculator Box Grid */}
        <div className="grid lg:grid-cols-12 gap-8 bg-forest/80 border border-gold/30 rounded-3xl p-6 sm:p-10 shadow-2xl glass-panel-dark">
          
          {/* Left Column: Choices */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Plot Size Selector */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-gold block mb-3">
                1. Select Plot Area Dimensions
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {plotOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setPlotSize(option.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      plotSize === option.id
                        ? 'bg-gradient-gold text-forest border-gold font-bold shadow-md shadow-gold/20'
                        : 'bg-white/5 border-white/10 text-cream hover:bg-white/10'
                    }`}
                  >
                    <p className="text-sm font-bold">{option.label}</p>
                    <p className="text-[11px] opacity-75">{option.sqft.toLocaleString()} Sq Ft</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Feature Checkboxes */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-gold block mb-3">
                2. Choose Landscape Features & Infrastructure
              </label>
              <div className="space-y-3">
                {featuresList.map((feat) => {
                  const isChecked = selectedFeatures[feat.id];
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-emerald-accent/20 border-emerald-accent/50 text-cream'
                          : 'bg-white/5 border-white/10 text-cream/70 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                            isChecked ? 'bg-gold border-gold text-forest' : 'border-white/30 bg-transparent'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-medium">{feat.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Instant Live Quote Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-forest-dark via-forest to-forest-dark border border-gold/40 shadow-xl">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold block mb-2">
                Turnkey Landscape Package
              </span>
              <h3 className="font-serif text-3xl font-bold text-cream mb-1">
                {currentPlot.label} Garden
              </h3>
              <p className="text-xs text-cream/60 mb-6">
                Covers soil work, plants, materials, labor & 12-month care warranty.
              </p>

              {/* Consultation Info Box */}
              <div className="p-6 rounded-xl bg-black/40 border border-gold/30 text-center mb-6">
                <p className="text-xs uppercase tracking-widest text-gold mb-2 font-bold">Custom 3D Plan & Quotation</p>
                <p className="text-xs text-cream/80 font-light leading-relaxed">
                  Tailored blueprint with plant specs and customized budget breakdown.
                </p>
              </div>

              <div className="space-y-2 text-xs text-cream/80 mb-8">
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-cream/60">Plot Area:</span>
                  <span className="font-bold">{currentPlot.sqft.toLocaleString()} Sq Ft</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-cream/60">Selected Features:</span>
                  <span className="font-bold text-gold">
                    {Object.values(selectedFeatures).filter(Boolean).length} Active
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-cream/60">Site Survey:</span>
                  <span className="font-bold text-emerald-300">Free in Lahore & Pattoki</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Export Button */}
            <button
              onClick={handleWhatsAppExport}
              className="w-full py-4 rounded-xl bg-gradient-gold text-forest font-bold text-xs uppercase tracking-widest hover:bg-cream transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold/25"
            >
              <MessageSquare className="w-4 h-4 fill-forest" /> Get Official 3D Quote on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
