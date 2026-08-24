import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { X, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<{ src: string, title: string, category: string } | null>(null);

  const categories = ['All', 'Logos', 'Branding', 'Product Mockups'];

  const projects = [
    { id: 1, title: 'Iceberg Identity', category: 'Branding', image: '/file_00000000f04c8211a8c9c065024c63fa.png' },
    { id: 2, title: 'Brewista Coffee', category: 'Branding', image: '/Screenshot_20260824_235233.jpg' },
    { id: 3, title: 'Hurmat e Shereen', category: 'Branding', image: '/Screenshot_20260824_235238.jpg' },
    { id: 4, title: 'Kafiya Roasters', category: 'Branding', image: '/Screenshot_20260824_235215.jpg' },
    { id: 5, title: 'Pakwaan', category: 'Branding', image: '/Screenshot_20260824_235213.jpg' },
    { id: 6, title: 'Wild Focus', category: 'Logos', image: '/Screenshot_20260824_235218.jpg' },
    { id: 7, title: 'Brewista Minimal', category: 'Logos', image: '/Screenshot_20260824_235222.jpg' },
    { id: 8, title: 'Capture Moments', category: 'Logos', image: '/Screenshot_20260824_235228.jpg' },
    { id: 9, title: 'Tasty Bites', category: 'Logos', image: '/Screenshot_20260824_235407.jpg' },
    { id: 10, title: 'Skyline Properties', category: 'Logos', image: '/Screenshot_20260824_235428.jpg' },
    { id: 11, title: 'AquaTrans', category: 'Logos', image: '/Screenshot_20260824_235424.jpg' },
    { id: 12, title: 'Gul School Van', category: 'Logos', image: '/file_0000000059408208bf21cc46e50ead2b.png' },
    { id: 13, title: 'Hamid Superfoam', category: 'Logos', image: '/file_00000000e3a08211be6ed1e2ae1b4375.png' },
    { id: 14, title: 'Almadina Biryani', category: 'Logos', image: '/file_000000004c0482118d72866ed1a95d0c.png' },
    { id: 15, title: 'Aurelia', category: 'Logos', image: '/file_00000000cd5481fab6974bbcfa48b7d1.jpg' },
    { id: 16, title: 'Verdant Perfume', category: 'Product Mockups', image: '/Screenshot_20260824_235250.jpg' },
    { id: 17, title: 'Altris Watch', category: 'Product Mockups', image: '/Screenshot_20260824_235301.jpg' },
    { id: 18, title: 'Verde Shampoo', category: 'Product Mockups', image: '/Screenshot_20260824_235313.jpg' },
    { id: 19, title: 'Verdea Cream', category: 'Product Mockups', image: '/Screenshot_20260824_235319.jpg' },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Fallback image generator for placeholders so the site doesn't look broken
  // before the user uploads their actual files.
  const getFallbackImage = (title: string) => {
    return `https://placehold.co/800x600/18181b/facc15?text=${encodeURIComponent(title)}&font=Montserrat`;
  };

  return (
    <section id="portfolio" className="py-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Our Best Work" 
          subtitle="Creative work designed to make brands stand out."
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-12 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                filter === cat 
                  ? 'bg-brand-yellow text-black' 
                  : 'bg-[#0D0D0D] text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative rounded-3xl overflow-hidden bg-[#0D0D0D] border border-white/5 cursor-pointer break-inside-avoid"
                onClick={() => setSelectedImage({ src: project.image, title: project.title, category: project.category })}
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = getFallbackImage(project.title);
                  }}
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-brand-yellow text-xs font-bold uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-4">{project.title}</h4>
                  <div className="w-10 h-10 rounded-full bg-brand-yellow text-black flex items-center justify-center">
                    <ExternalLink size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 bg-[#0D0D0D] border border-white/5 rounded-full flex items-center justify-center text-white hover:bg-brand-yellow hover:text-black transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-5xl w-full relative"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking the image container
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                onError={(e) => {
                  e.currentTarget.src = getFallbackImage(selectedImage.title);
                }}
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center">
                <span className="text-brand-yellow text-sm font-bold uppercase tracking-widest">{selectedImage.category}</span>
                <h3 className="text-3xl font-bold text-white mt-2">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
