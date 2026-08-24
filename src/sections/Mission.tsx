import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { Sparkles, Award, Fingerprint, TrendingUp } from 'lucide-react';

export default function Mission() {
  const missions = [
    {
      title: "Creativity",
      description: "Creating unique and meaningful designs that capture attention.",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: "Quality",
      description: "Delivering clean, professional and high-quality work every time.",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Identity",
      description: "Helping businesses build recognizable, consistent brands.",
      icon: <Fingerprint className="w-8 h-8" />
    },
    {
      title: "Growth",
      description: "Creating strategic designs that support and accelerate business growth.",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  return (
    <section id="mission" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Our Mission" 
          subtitle="Our mission is to help businesses transform their ideas into powerful visual identities through creative design, strategic branding, and modern digital experiences."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#0D0D0D] border border-white/5 rounded-3xl p-8 hover:border-brand-yellow/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow mb-6 group-hover:scale-110 transition-all duration-300">
                {mission.icon}
              </div>
              <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider group-hover:text-brand-yellow transition-colors">{mission.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{mission.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
