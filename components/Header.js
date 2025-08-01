// components/Header.js
'use client';

import React, { useState, useEffect } from 'react';

const Header = () => {
  // State to manage the header's visibility
  const [isVisible, setIsVisible] = useState(true);
  // State to track the last scroll position
  const [lastScrollY, setLastScrollY] = useState(0);

  // Effect hook to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Logic to show/hide the header based on scroll direction
      if (window.scrollY > lastScrollY && window.scrollY > 5) {
        // Scrolling down past 5px from the top
        setIsVisible(false);
      } else if (window.scrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // Scrolling to the very bottom of the page
        setIsVisible(true);
      }

      // Update the last scroll position
      setLastScrollY(window.scrollY);
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // Re-run the effect when lastScrollY changes

  return (
    <header className={`
      fixed top-4 left-1/2 -translate-x-1/2 z-50
      bg-gray-800 text-white p-4 shadow-lg
      rounded-xl transition-transform duration-300 ease-in-out
      ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
      w-full max-w-5xl mx-auto
    `}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Logo and company name */}
        <div className="flex items-center space-x-3">
          <img
            src="https://placehold.co/40x40/ffffff/000000?text=R"
            alt="Company Logo"
            className="rounded-full"
          />
          <h1 className="text-xl font-bold">Reignite Solutions</h1>
        </div>

        {/* Right side: Main navigation */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-blue-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
