import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { MessageCircle, Mail, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  const contacts = [
    {
      title: "WhatsApp",
      value: "03439438029",
      url: "https://wa.me/923439438029",
      icon: <MessageCircle size={20} />
    },
    {
      title: "Email",
      value: "aaghaz.pk100@gmail.com",
      url: "mailto:aaghaz.pk100@gmail.com",
      icon: <Mail size={20} />
    },
    {
      title: "Instagram",
      value: "@aaghaz.pk100",
      url: "https://instagram.com/aaghaz.pk100",
      icon: <Instagram size={20} />
    },
    {
      title: "Facebook",
      value: "Aaghaz.Pk",
      url: "https://facebook.com/aaghaz.pk100",
      icon: <Facebook size={20} />
    }
  ];

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <SectionHeading 
          title="Contact Us" 
          subtitle="Have a project in mind? Let's create something amazing together."
        />
        
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 400, damping: 15, delay: index * 0.1 }}
              className="group relative flex items-center gap-3 bg-[#0D0D0D] border border-white/5 hover:border-brand-yellow/50 rounded-full py-3 px-6 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(250,204,21,0.15)]"
            >
              {/* Subtle hover background glow */}
              <div className="absolute inset-0 bg-brand-yellow/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              
              <div className="relative text-gray-400 group-hover:text-brand-yellow transition-colors duration-300">
                {contact.icon}
              </div>
              <div className="relative flex flex-col items-start">
                <span className="text-white font-medium text-sm leading-tight">{contact.value}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
