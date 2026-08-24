import { motion } from 'motion/react';
import { ArrowDown, Palette } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background ambient effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Placeholder for Official Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 bg-[#0D0D0D] border border-brand-yellow/30 rounded-2xl flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(250,204,21,0.15)]">
            <Palette className="w-12 h-12 text-brand-yellow" />
            <span className="absolute -bottom-6 text-xs text-gray-500 whitespace-nowrap">Official Logo Placeholder</span>
          </div>
          {/* Animated decorative lines around logo */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-10px] border border-dashed border-brand-yellow/20 rounded-[24px] z-0"
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-[100px] leading-[0.85] font-black uppercase tracking-tighter mb-8"
        >
          AAGHAZ<br /><span className="text-brand-yellow" style={{ textShadow: '0 0 40px rgba(250, 204, 21, 0.3)' }}>.PK</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <span className="bg-white/5 border border-white/10 text-brand-yellow text-[10px] uppercase tracking-[0.3em] px-4 py-2 rounded-full font-bold">Creative starts here</span>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Creative design solutions that help brands stand out, connect with their audience, and grow.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a 
            href="#order"
            className="bg-brand-yellow text-black px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center justify-center"
          >
            ORDER NOW
          </a>
          <a 
            href="#services"
            className="bg-transparent border-2 border-brand-yellow text-brand-yellow px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-brand-yellow/10 transition-all flex items-center justify-center"
          >
            OUR SERVICES
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-brand-yellow w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
