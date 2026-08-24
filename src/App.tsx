import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Mission from './sections/Mission';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Order from './sections/Order';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState('');

  return (
    <div className="min-h-screen selection:bg-brand-yellow selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mission />
        <Services onSelectService={setSelectedService} />
        <Portfolio />
        <Order selectedService={selectedService} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
