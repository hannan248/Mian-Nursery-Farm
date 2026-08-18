import React, { useState } from 'react';
import { PLANTS_CATALOG, COMPANY_INFO } from '../data/nurseryData';
import { Search, Filter, MessageSquare, Sun, Droplets, Ruler, X, ShoppingBag } from 'lucide-react';

export default function PlantCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalPlant, setActiveModalPlant] = useState(null);

  const categories = ['All', 'Mature Trees', 'Palms', 'Indoor Plants', 'Flowering Shrubs', 'Exotic & Rare', 'Fruit Plants', 'Turf & Lawns'];

  const filteredPlants = PLANTS_CATALOG.filter((plant) => {
    const matchesCategory = selectedCategory === 'All' || plant.category === selectedCategory;
    const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          plant.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOrderWhatsApp = (plant) => {
    const text = `Hello Mian Nursery! I want to inquire about purchasing: '${plant.name}' (${plant.category}). Height: ${plant.height}. Please confirm price and delivery options.`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="catalog" className="py-24 px-4 md:px-8 bg-forest-dark text-cream relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold block mb-2">
            Direct from Pattoki 35-Acre Grounds
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-cream mb-4">
            Botanic Nursery Catalog & <span className="text-gradient-gold italic">Specimens</span>
          </h2>
          <p className="text-cream/80 text-sm md:text-base font-light">
            Browse our curated selection of acclimatized mature trees, silver palms, indoor air purifiers, and wholesale lawn sod harvested fresh daily.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-forest/80 border border-gold/20 backdrop-blur-md">
          {/* Categories Pill Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-gold text-forest shadow-md shadow-gold/20'
                    : 'bg-white/5 text-cream/70 hover:bg-white/10 hover:text-cream'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search plants, palms, bonsai..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-forest-dark border border-white/15 text-cream text-xs focus:outline-none focus:border-gold transition-colors placeholder:text-cream/40"
            />
          </div>
        </div>

        {/* Plants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPlants.map((plant) => (
            <div
              key={plant.id}
              className="group rounded-2xl bg-forest/50 border border-white/10 overflow-hidden hover:border-gold/50 shadow-lg transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-forest">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover zoom-image"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-forest-dark/80 backdrop-blur-sm border border-gold/30 text-gold text-[10px] font-bold uppercase tracking-wider">
                    {plant.tag}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-cream text-[10px] font-semibold">
                    {plant.category}
                  </div>
                </div>

                {/* Plant Content */}
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-cream mb-2 group-hover:text-gold transition-colors">
                    {plant.name}
                  </h3>
                  <p className="text-xs text-cream/70 font-light line-clamp-2 mb-4 leading-relaxed">
                    {plant.description}
                  </p>

                  {/* Badges (Height, Light, Water) */}
                  <div className="grid grid-cols-3 gap-1.5 py-3 border-t border-b border-white/10 text-[11px] font-medium text-cream/80 mb-4">
                    <span className="flex items-center gap-1" title="Height">
                      <Ruler className="w-3 h-3 text-gold shrink-0" /> {plant.height}
                    </span>
                    <span className="flex items-center gap-1" title="Sunlight Requirement">
                      <Sun className="w-3 h-3 text-amber-400 shrink-0" /> {plant.light}
                    </span>
                    <span className="flex items-center gap-1" title="Watering Need">
                      <Droplets className="w-3 h-3 text-blue-400 shrink-0" /> {plant.water}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="p-5 pt-0 flex items-center gap-2">
                <button
                  onClick={() => setActiveModalPlant(plant)}
                  className="flex-1 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-cream hover:bg-white/10 transition-colors"
                >
                  Quick View
                </button>
                <button
                  onClick={() => handleOrderWhatsApp(plant)}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-gold text-forest font-bold text-xs uppercase tracking-wider hover:bg-cream transition-all flex items-center justify-center gap-1.5 shadow-md shadow-gold/20"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-forest" /> Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPlants.length === 0 && (
          <div className="text-center py-16 text-cream/60">
            <p className="text-base">No plants found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-4 px-4 py-2 rounded-xl bg-gold text-forest text-xs font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      {activeModalPlant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-forest-dark border border-gold/30 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8 text-cream">
            <button
              onClick={() => setActiveModalPlant(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-cream hover:text-gold transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="rounded-xl overflow-hidden aspect-square border border-white/10">
                <img
                  src={activeModalPlant.image}
                  alt={activeModalPlant.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest border border-gold/30">
                  {activeModalPlant.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-cream mt-3 mb-2">
                  {activeModalPlant.name}
                </h3>
                <p className="text-xs text-cream/80 leading-relaxed font-light mb-4">
                  {activeModalPlant.description}
                </p>

                <div className="space-y-2 py-3 border-t border-b border-white/10 text-xs mb-6">
                  <div className="flex justify-between">
                    <span className="text-cream/60">Specimen Height:</span>
                    <span className="font-bold text-cream">{activeModalPlant.height}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cream/60">Sunlight Needs:</span>
                    <span className="font-bold text-amber-300">{activeModalPlant.light}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cream/60">Water Frequency:</span>
                    <span className="font-bold text-blue-300">{activeModalPlant.water}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    handleOrderWhatsApp(activeModalPlant);
                    setActiveModalPlant(null);
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-gold text-forest font-bold text-xs uppercase tracking-widest hover:bg-cream transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold/20"
                >
                  <ShoppingBag className="w-4 h-4" /> Inquire via WhatsApp Direct
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
