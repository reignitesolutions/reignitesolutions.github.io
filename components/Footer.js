// components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 shadow-inner mt-auto">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          
          {/* Column 1: Company Name and Tagline */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white">Reignite Solutions</h3>
            <p className="mt-2 text-sm text-gray-400">
              Igniting your brand's potential with powerful digital solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex-1 md:text-center">
            <h4 className="font-semibold text-white mb-2">Quick Links</h4>
            <nav className="flex flex-col">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Home</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">About Us</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Services</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Contact</a>
              <a href="#" className="mt-2 text-sm text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
            </nav>
          </div>

          {/* Column 3: Contact Details */}
          <div className="flex-1 md:text-right">
            <h4 className="font-semibold text-white mb-2">Contact Us</h4>
            <address className="not-italic text-sm text-gray-400 space-y-1">
              <p>234 Leeds Road, Ilkley, West Yorkshire, LS29 8LN</p>
              <p className="mt-2"><a href="mailto:info@reignitesolutions.com" className="hover:text-white">hello@reignites.co.uk</a></p>
              <p><a href="tel:+447397897186" className="hover:text-white">+44 (7397) 897 186</a></p>
            </address>
          </div>

          {/* Column 4: Social Media Icons */}
          <div className="flex-1 md:text-right">
            <h4 className="font-semibold text-white mb-2">Follow Us</h4>
            <div className="flex justify-start md:justify-end space-x-4 mt-4">
              {/* LinkedIn Icon as a placeholder */}
              <a href="https://www.linkedin.com/company/reignitesolutions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="material-symbols-outlined text-2xl">groups</span>
              </a>
              {/* Twitter Icon as a placeholder */}
              <a href="https://twitter.com/reignitesolutions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="material-symbols-outlined text-2xl">alternate_email</span>
              </a>
              {/* Instagram Icon as a placeholder */}
              <a href="https://www.instagram.com/reignitesolutions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="material-symbols-outlined text-2xl">photo_camera</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-6 border-t border-gray-700 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Reignite Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
