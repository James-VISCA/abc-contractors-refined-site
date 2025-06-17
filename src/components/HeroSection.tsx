
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 heading-spacing">
          Building Dreams,
          <br />
          <span className="font-medium">Crafting Excellence</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
          40 years of experience in providing professional and affordable solutions 
          to all your building and maintenance requirements
        </p>
        
        <button 
          onClick={handleContactClick}
          className="neuomorphic-btn inline-flex items-center gap-2 text-lg"
        >
          Contact Us
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
