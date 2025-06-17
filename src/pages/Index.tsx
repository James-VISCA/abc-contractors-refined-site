
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ImageCarousel from '../components/ImageCarousel';
import ServicesSection from '../components/ServicesSection';
import HowWeWorkSection from '../components/HowWeWorkSection';
import TestimonialsSection from '../components/TestimonialsSection';
import MissionSection from '../components/MissionSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Add scroll-based animations
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-blur-in');
        }
      });
    };

    // Add animation class to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('animate-on-scroll');
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <HeroSection />
      <ImageCarousel />
      <ServicesSection />
      <HowWeWorkSection />
      <TestimonialsSection />
      <MissionSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
