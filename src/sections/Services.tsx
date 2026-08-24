import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { LayoutTemplate, Hexagon, Layers, Globe, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const services = [
    {
      id: "Poster Design",
      title: "Poster Design",
      description: "Create eye-catching and professional posters for businesses, promotions, products and social media.",
      icon: <LayoutTemplate className="w-10 h-10" />
    },
    {
      id: "Logo Design",
      title: "Logo Design",
      description: "Create memorable logos that represent the identity and personality of a brand perfectly.",
      icon: <Hexagon className="w-10 h-10" />
    },
    {
      id: "Business Branding",
      title: "Business Branding",
      description: "Build consistent visual identities including colors, typography, brand assets and marketing materials.",
      icon: <Layers className="w-10 h-10" />
    },
    {
      id: "Website Development",
      title: "Website Development",
      description: "Create modern, responsive and professional websites for businesses and personal brands.",
      icon: <Globe className="w-10 h-10" />
    }
  ];

  const handleOrderClick = (serviceId: string) => {
    onSelectService(serviceId);
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="Our Services" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111111] border border-white/5 rounded-3xl p-8 hover:border-brand-yellow/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle hover background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-start justify-between mb-8 relative z-10">
                <div className="w-16 h-16 bg-brand-yellow/10 rounded-xl flex items-center justify-center text-brand-yellow group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <div className="text-6xl font-black text-white/5 select-none pointer-events-none">
                  0{index + 1}
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wider">{service.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-8 min-h-[60px]">
                  {service.description}
                </p>
                
                <button 
                  onClick={() => handleOrderClick(service.id)}
                  className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-yellow hover:text-yellow-300 transition-colors"
                >
                  ORDER THIS SERVICE <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
