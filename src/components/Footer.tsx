import { Facebook, Instagram, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <a href="#home" className="inline-block mb-4 group">
            <img 
              src="/Screenshot_20260824_235330.jpg" 
              alt="Aaghaz.Pk Logo" 
              className="h-12 md:h-16 w-auto object-contain rounded transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const span = e.currentTarget.parentElement?.querySelector('span');
                if (span) span.classList.remove('hidden');
              }}
            />
            <span className="hidden text-3xl font-black tracking-tighter uppercase">
              AAGHAZ.PK
            </span>
          </a>
          <br/>
          <p className="bg-white/5 border border-white/10 text-brand-yellow text-[10px] uppercase tracking-[0.3em] px-3 py-1 rounded-full inline-block mb-6">Creative starts here</p>
          <p className="text-gray-400 text-sm max-w-xs font-light">
            Professional visual design and digital services for businesses and brands helping them stand out and grow.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-sm font-bold uppercase tracking-wider">
            {['Home', 'About', 'Services', 'Portfolio', 'Order', 'Contact'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-brand-yellow transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-6">Connect</h4>
          <div className="flex gap-4">
            <a href="https://wa.me/923439438029" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111111] border border-white/5 flex items-center justify-center text-white hover:bg-brand-yellow hover:text-black transition-all">
              <MessageCircle size={20} />
            </a>
            <a href="https://instagram.com/aaghaz.pk100" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111111] border border-white/5 flex items-center justify-center text-white hover:bg-brand-yellow hover:text-black transition-all">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com/aaghaz.pk100" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111111] border border-white/5 flex items-center justify-center text-white hover:bg-brand-yellow hover:text-black transition-all">
              <Facebook size={20} />
            </a>
            <a href="mailto:aaghaz.pk100@gmail.com" className="w-10 h-10 rounded-full bg-[#111111] border border-white/5 flex items-center justify-center text-white hover:bg-brand-yellow hover:text-black transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-gray-500 uppercase tracking-widest">&copy; 2026 AAGHAZ.PK — Professional Design Group</p>
        <div className="flex gap-1 items-center">
          <div className="w-1 h-1 bg-brand-yellow"></div>
          <div className="w-1 h-1 bg-white/20"></div>
          <div className="w-1 h-1 bg-white/20"></div>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest italic font-medium ml-2">Pakistan-based Creative Hub</span>
        </div>
      </div>
    </footer>
  );
}
