
import React from 'react';
import { CheckCircle } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    'Brickwork',
    'Block work', 
    'Plastering',
    'Carpentry & Joinery',
    'Concreting',
    'Floor Screeding',
    'Patios',
    'Kitchens & Bathrooms',
    'Ceramic Wall & Floor Tiling',
    'Garage Conversions',
    'Renovations & Refurbishments'
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 heading-spacing">
            Products & <span className="font-medium text-yellow-500">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ABC Building Services prides itself on offering a comprehensive range of services to meet your every need
            from extensions to simply fixing your kitchen sink. I am happy to be of service whatever your needs may be.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glassmorphic p-6 hover:bg-white/10 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-yellow-500 flex-shrink-0" size={24} />
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-yellow-600 transition-colors">
                  {service}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
