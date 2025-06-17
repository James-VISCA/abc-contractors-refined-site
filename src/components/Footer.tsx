
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 heading-spacing">ABC Contractors</h3>
            <p className="text-white/80 text-body mb-4">
              Building excellence for over 40 years. Your trusted partner for all construction and renovation needs in South Devon.
            </p>
            <div className="flex space-x-4">
              <div className="bg-yellow-500 p-2 rounded">
                <Phone className="text-gray-900" size={20} />
              </div>
              <div className="bg-yellow-500 p-2 rounded">
                <Mail className="text-gray-900" size={20} />
              </div>
              <div className="bg-yellow-500 p-2 rounded">
                <MapPin className="text-gray-900" size={20} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4 heading-spacing">Services</h4>
            <ul className="space-y-2 text-white/80 text-body">
              <li>Brickwork & Block work</li>
              <li>Kitchens & Bathrooms</li>
              <li>Carpentry & Joinery</li>
              <li>Garage Conversions</li>
              <li>Home Extensions</li>
              <li>Renovations</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4 heading-spacing">Contact Info</h4>
            <div className="space-y-3 text-white/80 text-body">
              <p>Phone: 01803 392700</p>
              <p>Email: info@abccontractors.com</p>
              <p>Service Area: South Devon</p>
              <p>Hours: Mon-Fri 8AM-6PM, Sat 9AM-4PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-body">
            © 2024 ABC Contractors. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
