import { useState, useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Send } from 'lucide-react';

interface OrderProps {
  selectedService: string;
}

export default function Order({ selectedService }: OrderProps) {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    service: '',
    budget: '',
    deadline: '',
    details: ''
  });

  // Update form if selectedService prop changes (e.g. from clicking a service card)
  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const text = `Hello Aaghaz.Pk! I would like to place an order.

Name: ${formData.name}
WhatsApp: ${formData.whatsapp}
Email: ${formData.email || 'N/A'}
Service: ${formData.service}
Budget: ${formData.budget || 'Not specified'}
Deadline: ${formData.deadline || 'N/A'}

Project Details:
${formData.details}

I found Aaghaz.Pk through your website.`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/923439438029?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="order" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Start Your Project" 
          subtitle="Tell us what you need and let's bring your idea to life."
        />
        
        <div className="bg-[#0D0D0D] border border-white/5 rounded-[40px] p-8 md:p-12 mt-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Name <span className="text-red-500">*</span></label>
                <input 
                  required
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full bg-[#111111] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow  transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">WhatsApp Number <span className="text-red-500">*</span></label>
                <input 
                  required
                  type="tel" 
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="e.g. +92 3XX XXXXXXX"
                  className="w-full bg-[#111111] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow  transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Email (Optional)</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-[#111111] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow  transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Select Service <span className="text-red-500">*</span></label>
                <select 
                  required
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-[#111111] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow  transition-all appearance-none"
                >
                  <option value="" disabled>Choose a service</option>
                  <option value="Poster Design">Poster Design</option>
                  <option value="Logo Design">Logo Design</option>
                  <option value="Business Branding">Business Branding</option>
                  <option value="Website Development">Website Development</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Budget <span className="text-red-500">*</span></label>
                <select 
                  required
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-[#111111] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow  transition-all appearance-none"
                >
                  <option value="" disabled>Select your budget range</option>
                  <option value="Under Rs. 5,000">Under Rs. 5,000</option>
                  <option value="Rs. 5,000 – Rs. 10,000">Rs. 5,000 – Rs. 10,000</option>
                  <option value="Rs. 10,000 – Rs. 25,000">Rs. 10,000 – Rs. 25,000</option>
                  <option value="Rs. 25,000+">Rs. 25,000+</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Deadline (Optional)</label>
                <input 
                  type="text" 
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  placeholder="e.g. 2 weeks, ASAP"
                  className="w-full bg-[#111111] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow  transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-300">Project Details <span className="text-red-500">*</span></label>
              <textarea 
                required
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us about your brand, goals, style preferences, and any specific requirements..."
                className="w-full bg-[#111111] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-all resize-y"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-brand-yellow text-black font-black uppercase tracking-widest text-sm py-4 rounded-full flex items-center justify-center gap-2 hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] transition-all mt-4"
            >
              SEND ORDER ON WHATSAPP <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
