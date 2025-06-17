
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 heading-spacing">
            Get In <span className="font-medium text-yellow-500">Touch</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free consultation and quote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-medium text-white mb-8 heading-spacing">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Phone className="text-gray-900" size={24} />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-white/80 text-body">01803 392700</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Mail className="text-gray-900" size={24} />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-white/80 text-body">info@abccontractors.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <MapPin className="text-gray-900" size={24} />
                </div>
                <div>
                  <p className="text-white font-medium">Service Area</p>
                  <p className="text-white/80 text-body">South Devon & Surrounding Areas</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Clock className="text-gray-900" size={24} />
                </div>
                <div>
                  <p className="text-white font-medium">Business Hours</p>
                  <p className="text-white/80 text-body">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-white/80 text-body">Saturday: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glassmorphic-card p-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-medium text-white mb-6 heading-spacing">Send us a Message</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-white font-medium mb-2">Project Type</label>
                <select
                  id="project"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="">Select project type</option>
                  <option value="kitchen">Kitchen Renovation</option>
                  <option value="bathroom">Bathroom Renovation</option>
                  <option value="extension">Home Extension</option>
                  <option value="garage">Garage Conversion</option>
                  <option value="patio">Patio Installation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button type="submit" className="neuomorphic-btn w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
