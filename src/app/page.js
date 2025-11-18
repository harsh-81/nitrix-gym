import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Transformations from '@/components/Transformations';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Services from '@/components/Services';
import Trainers from '@/components/Trainers';
import Pricing from '@/components/Pricing';
import ContactAndFooter from '@/components/ContactAndFooter';
import WhatsAppButton from '@/components/WhatsAppButton';

// The main App component that assembles the entire landing page.
export default function Home() {
  return (
    <div className="bg-black font-['Inter',_sans-serif] leading-normal tracking-normal">
      <Navbar />
      <main>
        <Hero />
        <Transformations /> 
        <Testimonials />    
        <About />
        <Services />
        <Trainers />
        <Pricing />
        <ContactAndFooter />
      </main>
      <WhatsAppButton />
    </div>
  );
}
