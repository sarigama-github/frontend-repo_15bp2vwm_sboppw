import { useRef } from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const howRef = useRef(null);

  const handleScrollToHow = () => {
    howRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero onScrollToHow={handleScrollToHow} />
      <div ref={howRef}>
        <HowItWorks />
      </div>
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
