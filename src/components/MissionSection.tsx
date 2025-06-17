
import React from 'react';
import { Heart, Users, Award } from 'lucide-react';

const MissionSection = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 heading-spacing">
            Our <span className="font-medium text-yellow-500">Mission</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              At ABC Contractors, we believe that building is more than just construction - it's about creating spaces 
              where memories are made, families grow, and dreams come to life. Our mission is to transform your vision 
              into reality with uncompromising quality, integrity, and craftsmanship.
            </p>
            <p className="text-lg text-gray-600 text-body">
              With over 40 years of experience, we've built our reputation on trust, reliability, and excellence. 
              Every project we undertake is a commitment to not just meet, but exceed your expectations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-yellow-600" size={32} />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2 heading-spacing">Built with Passion</h3>
            <p className="text-gray-600 text-body">
              Every project is crafted with dedication and attention to detail that shows in the final result.
            </p>
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-yellow-600" size={32} />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2 heading-spacing">People First</h3>
            <p className="text-gray-600 text-body">
              We build lasting relationships with our clients based on trust, communication, and mutual respect.
            </p>
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-yellow-600" size={32} />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2 heading-spacing">Excellence Delivered</h3>
            <p className="text-gray-600 text-body">
              Four decades of experience ensuring quality workmanship and professional service on every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
