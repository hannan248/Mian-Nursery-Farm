import React, { useState } from 'react';
import { PROJECTS_3D_GALLERY, COMPANY_INFO } from '../data/nurseryData';
import { Eye, Layers, Sparkles, MessageSquare, CheckCircle2, X, Box } from 'lucide-react';

export default function Projects3DGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All 3D Designs');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All 3D Designs', 'Villa Elevations', 'Night Lighting', 'Water Features', 'Commercial 3D'];

  const filteredProjects = PROJECTS_3D_GALLERY.filter((proj) => {
    if (selectedCategory === 'All 3D Designs') return true;
    return proj.category === selectedCategory;
  });

  const handleRequest3D = (projectTitle) => {
    const msg = `Hello Mian Nursery! I saw your 3D Architectural Project render: '${projectTitle}'. I want a similar 3D landscape design blueprint for my property. Please share survey details.`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="projects3d" className="py-24 px-4 md:px-8 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-emerald-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-400 text-xs font-extrabold uppercase tracking-widest mb-4 shadow-sm">
            <Box className="w-4 h-4 text-emerald-400" /> Architectural 3D CAD Master Plans
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            3D Landscape Projects & <span className="text-emerald-400 italic">Visualizations</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed">
            Photorealistic 3D CAD garden blueprints, night lighting simulations, and water feature architectural renders created for villas, farmhouses & commercial projects across Pakistan.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex justify-center items-center gap-2 mb-12 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all uppercase tracking-wider ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 border border-emerald-500'
                  : 'bg-slate-800/90 text-slate-300 border border-slate-700 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="group rounded-2xl bg-slate-800/80 border border-slate-700/80 overflow-hidden hover:border-emerald-500 shadow-lg hover:shadow-2xl hover:shadow-emerald-950/50 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover zoom-image"
                    loading="lazy"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-emerald-700/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider shadow-md border border-emerald-500/50 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-300" /> {proj.tag}
                  </div>

                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-slate-900/90 backdrop-blur-md text-emerald-300 text-[10px] font-semibold border border-slate-700">
                    {proj.category}
                  </div>

                  {/* Overlay Click Button */}
                  <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => setActiveModalProject(proj)}
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-xl flex items-center gap-2 hover:bg-emerald-500 transition-all transform group-hover:scale-105"
                    >
                      <Eye className="w-4 h-4" /> Expand 3D View
                    </button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-5 line-clamp-2">
                    {proj.description}
                  </p>

                  {/* Specs Pill Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-700/60">
                    {proj.features.map((feat, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 text-[10px] font-medium border border-slate-700 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" /> {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleRequest3D(proj.title)}
                  className="w-full py-3 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs uppercase tracking-wider hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" /> Order Similar 3D Design
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* High-Res Lightbox Modal */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl p-5 sm:p-8 text-white max-h-[92vh] overflow-y-auto">
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-emerald-600 transition-colors z-20 shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-12 gap-6 items-center">
                {/* Modal Large Image */}
                <div className="md:col-span-7 rounded-2xl overflow-hidden aspect-[16/10] border border-slate-700 shadow-xl bg-slate-950">
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Modal Details */}
                <div className="md:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 text-[10px] font-bold uppercase tracking-widest border border-emerald-700">
                        {activeModalProject.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-amber-950 text-amber-400 text-[10px] font-bold uppercase tracking-widest border border-amber-700">
                        {activeModalProject.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-white mb-3">
                      {activeModalProject.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
                      {activeModalProject.description}
                    </p>

                    <div className="space-y-2 py-4 border-t border-b border-slate-800 text-xs mb-6">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-2">3D Blueprint Specifications:</p>
                      {activeModalProject.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      handleRequest3D(activeModalProject.title);
                      setActiveModalProject(null);
                    }}
                    className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" /> Request This 3D Blueprint
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
