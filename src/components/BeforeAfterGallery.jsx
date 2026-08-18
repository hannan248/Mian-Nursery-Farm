import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, COMPANY_INFO } from '../data/nurseryData';
import { SlidersHorizontal, CheckCircle2, Send, ArrowRight } from 'lucide-react';

export default function BeforeAfterGallery() {
  const [activeProject, setActiveProject] = useState(PORTFOLIO_PROJECTS[0]);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [viewMode, setViewMode] = useState('before-after'); // 'before-after' | '3d-render'

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleRequestSimilar = (title) => {
    const text = `Hello Mian Nursery! I love your project '${title}'. I have a similar property and want a 3D landscape layout & quote.`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="portfolio" className="py-24 px-4 md:px-8 bg-cream text-forest relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block mb-2">
            Real Estate Transformations Across Pakistan
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-forest mb-4">
            Before & After <span className="text-gradient-gold italic">Landscape Gallery</span>
          </h2>
          <p className="text-forest/70 text-sm md:text-base font-light">
            Slide horizontally to see how raw land is converted into breathtaking luxury gardens using our 3D blueprints and nursery specimens.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex justify-center items-center gap-3 mb-10 overflow-x-auto pb-2">
          {PORTFOLIO_PROJECTS.map((proj) => (
            <button
              key={proj.id}
              onClick={() => {
                setActiveProject(proj);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
                activeProject.id === proj.id
                  ? 'bg-forest text-gold shadow-lg border border-gold/30'
                  : 'bg-white text-forest/70 border border-forest/10 hover:bg-forest/5'
              }`}
            >
              {proj.title}
            </button>
          ))}
        </div>

        {/* Main Comparison Stage Box */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 md:p-8 border border-forest/10 shadow-xl">
          
          {/* Left Column: Interactive Comparison Canvas */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-forest/80">
                  Landscaping Specification: {activeProject.plotSize}
                </span>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-1.5 p-1 rounded-lg bg-sand border border-forest/10 text-[11px] font-bold">
                <button
                  onClick={() => setViewMode('before-after')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    viewMode === 'before-after' ? 'bg-forest text-gold shadow-sm' : 'text-forest/60'
                  }`}
                >
                  Before / After
                </button>
                <button
                  onClick={() => setViewMode('3d-render')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    viewMode === '3d-render' ? 'bg-forest text-gold shadow-sm' : 'text-forest/60'
                  }`}
                >
                  3D Render
                </button>
              </div>
            </div>

            {/* Slider Container */}
            {viewMode === 'before-after' ? (
              <div
                className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-forest/10 shadow-inner group"
                onMouseMove={handleSliderMove}
                onTouchMove={handleTouchMove}
              >
                {/* Background Image: AFTER LANDSCAPE */}
                <img
                  src={activeProject.afterImg}
                  alt="After Landscape"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-md bg-emerald-accent/90 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                  AFTER: FINISHED GARDEN
                </div>

                {/* Foreground Image: BEFORE RAW LAND (Clipped) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={activeProject.beforeImg}
                    alt="Before Landscape"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', height: '100%' }}
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/80 text-gold text-[11px] font-bold uppercase tracking-wider shadow-md">
                    BEFORE: RAW GROUND
                  </div>
                </div>

                {/* Vertical Divider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-gold shadow-[0_0_15px_rgba(212,175,55,0.8)] cursor-ew-resize"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gold text-forest flex items-center justify-center shadow-lg border-2 border-white">
                    <SlidersHorizontal className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ) : (
              /* 3D Render View */
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-forest/10 shadow-inner">
                <img
                  src={activeProject.render3DImg}
                  alt="3D Architectural Render"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-forest-dark/90 text-gold text-[11px] font-bold uppercase tracking-wider border border-gold/30">
                  3D ARCHITECTURAL BLUEPRINT
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Project Details & Specs */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest border border-gold/30 mb-3 inline-block">
                {activeProject.category}
              </span>
              <h3 className="font-serif text-2xl font-bold text-forest mb-3">
                {activeProject.title}
              </h3>
              <p className="text-xs text-forest/70 font-light leading-relaxed mb-6">
                {activeProject.description}
              </p>

              {/* Execution Specs List */}
              <div className="space-y-2 mb-8">
                <p className="text-xs font-bold uppercase tracking-wider text-forest/50">Services We Provided & Executed:</p>
                {activeProject.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-forest/85">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleRequestSimilar(activeProject.title)}
              className="w-full py-4 rounded-xl bg-forest text-gold font-bold text-xs uppercase tracking-widest hover:bg-gold hover:text-forest transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Send className="w-4 h-4" /> Request Design For My Land
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
