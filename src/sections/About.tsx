import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { PenTool, Target, Monitor, Briefcase } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: <PenTool size={24} />, title: 'Creative Design' },
    { icon: <Target size={24} />, title: 'Professional Branding' },
    { icon: <Monitor size={24} />, title: 'Modern Websites' },
    { icon: <Briefcase size={24} />, title: 'Business-Focused Solutions' },
  ];

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading title="About Us" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white leading-snug">
              Transforming ideas into <span className="text-brand-yellow">professional visual experiences</span>.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Aaghaz.Pk is a creative design group focused on helping businesses build strong and memorable visual identities. From posters and logos to complete branding and modern websites, we turn ideas into professional visual experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  className="flex items-center gap-3 text-sm font-semibold text-gray-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow">
                    {item.icon}
                  </div>
                  <span>{item.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative rounded-3xl overflow-hidden border border-white/5 bg-[#0D0D0D] p-8 flex flex-col items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="w-full h-full border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center gap-4 relative z-10">
                 <span className="text-6xl font-black text-white tracking-tighter">AAGHAZ</span>
                 <span className="text-xl text-brand-yellow font-bold tracking-widest uppercase">Creative Group</span>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-yellow/20 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
