import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Mission', href: '#mission' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="z-50 flex items-center gap-2 group">
          <img 
            src="/Screenshot_20260824_235330.jpg" 
            alt="Aaghaz.Pk Logo" 
            className="h-10 md:h-12 w-auto object-contain rounded transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Fallback if image isn't available
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.querySelector('span')?.classList.remove('hidden');
            }}
          />
          <span className="hidden text-2xl font-black tracking-tighter uppercase">
            AAGHAZ.PK
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 text-sm font-medium uppercase tracking-widest text-gray-400">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-brand-yellow transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <a 
            href="#order"
            className="bg-brand-yellow text-black px-6 py-2 rounded-full text-xs font-black uppercase tracking-wider hover:bg-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.4)] transition-all"
          >
            ORDER NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col gap-8 items-center text-xl font-medium uppercase tracking-widest text-gray-400">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="hover:text-brand-yellow transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#order"
                onClick={() => setIsOpen(false)}
                className="bg-brand-yellow text-black px-8 py-3 rounded-full text-sm font-black tracking-wider hover:bg-yellow-400 mt-4"
              >
                ORDER NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
