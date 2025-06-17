
import React from 'react';
import { Eye, Calculator, Wrench } from 'lucide-react';

const HowWeWorkSection = () => {
  const steps = [
    {
      icon: Eye,
      title: 'Take a Look',
      description: 'We visit your property to assess the project requirements and understand your vision',
      image: 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=400&h=300&fit=crop'
    },
    {
      icon: Calculator,
      title: 'Price it Up',
      description: 'We provide detailed, transparent pricing with no hidden costs or surprises',
      image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&h=300&fit=crop'
    },
    {
      icon: Wrench,
      title: 'Get it Done',
      description: 'Our experienced team delivers exceptional results on time and within budget',
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section id="how-we-work" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 heading-spacing">
            How We <span className="font-medium text-yellow-500">Work</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures your project runs smoothly from initial consultation to completion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="glassmorphic-card p-6 hover:shadow-2xl transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-yellow-500 p-3 rounded-lg">
                      <IconComponent className="text-gray-900" size={24} />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-gray-900 mb-3 heading-spacing">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-body">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
