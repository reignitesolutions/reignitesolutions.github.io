'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Header = () => {
  // State to manage the header's visibility, the services dropdown, and the mobile menu
  const [isVisible, setIsVisible] = useState(true);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false); // Renamed state for the About Us dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Use a ref to track the last scroll position without causing re-renders
  const lastScrollY = useRef(0);
  const headerRef = useRef(null);

  // Effect hook to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Logic to show/hide the header based on scroll direction and a threshold
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // Scrolling down past a 50px threshold.
        // We add a small delay to ensure the transition is registered.
        setTimeout(() => setIsVisible(false), 50);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setIsVisible(true);
      } else if ((window.innerHeight + currentScrollY) >= document.body.offsetHeight) {
        // Scrolling to the very bottom of the page
        setIsVisible(true);
      }

      // Update the ref with the current scroll position
      lastScrollY.current = currentScrollY;
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty dependency array ensures this effect only runs once

  // A function to close all menus
  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsAboutUsOpen(false); // Close the About Us dropdown
  };

  return (
    <>
      <header ref={headerRef} className={`
        fixed left-1/2 -translate-x-1/2 z-50
        bg-white text-gray-800 p-4 shadow-lg
        rounded-xl transition-all duration-500 ease-in-out
        ${isVisible ? 'top-4' : 'top-[-100px]'}
        w-[95%] md:w-[90%] lg:max-w-5xl mx-auto
        flex justify-between items-center
      `}>
        {/* Left side: Logo and company name */}
        <div className="flex items-center space-x-3">
          <Link href="/" passHref onClick={closeAllMenus}>
            <div className="flex items-center">
              <div className="h-16 w-16 bg-white flex items-center justify-center mr-3 border-4 border-black overflow-hidden">
                <img src="https://placehold.co/75x75/f3081d/FFF?font=noto-sans&text=R!" alt="Reignite Solutions LTD Logo" className="mx-auto md:mx-0 object-cover h-full w-full" loading="eager" />
              </div>
              <span id="company-name-text" className="text-2xl text-left font-bold text-black leading-none">Reignite<br/>Solutions</span>
            </div>
          </Link>
        </div>

        {/* Right side: Main navigation (hidden on mobile) */}
        <nav className="relative hidden md:flex">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-indigo-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-indigo-600 transition-colors">
                Services
              </Link>
            </li>
            
            {/* About Us Dropdown Menu */}
            <li
              className="relative"
              onMouseEnter={() => setIsAboutUsOpen(true)}
              onMouseLeave={() => setIsAboutUsOpen(false)}
            >
              <div
                className="hover:text-indigo-600 transition-colors focus:outline-none flex items-center cursor-pointer"
              >
                About Us
                {/* Dropdown Arrow Icon */}
                <svg 
                  className={`ml-1 h-4 w-4 inline-block transform transition-transform ${isAboutUsOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {isAboutUsOpen && (
                <ul className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-xl overflow-hidden py-2">
                  <li>
                    <Link href="/why-reignite" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Why Reignite?
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Our Values
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Meet the Team
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      FAQ
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/contact" className="hover:text-indigo-600 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button (only visible on mobile) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-600 hover:text-indigo-600 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            // Close icon (X)
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </header>
      
      {/* Mobile Menu Content (conditionally rendered) */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-24 left-1/2 -translate-x-1/2 w-[95%] bg-white shadow-lg rounded-xl overflow-hidden py-4 z-40 transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center px-4 space-y-4">
            <Link href="/" onClick={closeAllMenus} className="w-full text-center py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200">Home</Link>
            <Link href="/services" onClick={closeAllMenus} className="w-full text-center py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200">Services</Link>

            {/* Mobile About Us Dropdown */}
            <div className="w-full text-center">
              <button
                onClick={() => setIsAboutUsOpen(!isAboutUsOpen)}
                className="w-full py-2 flex justify-center items-center text-gray-800 hover:bg-gray-100 transition-colors duration-200"
              >
                About Us
                <svg
                  className={`ml-1 h-4 w-4 transform transition-transform ${isAboutUsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isAboutUsOpen && (
                <div className="mt-2 flex flex-col items-center bg-gray-50 rounded-lg">
                  <Link href="/why-reignite" onClick={closeAllMenus} className="w-full py-2 px-4 text-gray-700 hover:bg-gray-200">Why Reignite?</Link>
                  <Link href="#" onClick={closeAllMenus} className="w-full py-2 px-4 text-gray-700 hover:bg-gray-200">Our Values</Link>
                  <Link href="#" onClick={closeAllMenus} className="w-full py-2 px-4 text-gray-700 hover:bg-gray-200">Meet the Team</Link>
                  <Link href="#" onClick={closeAllMenus} className="w-full py-2 px-4 text-gray-700 hover:bg-gray-200">FAQ</Link>
                </div>
              )}
            </div>

            <Link href="/contact" onClick={closeAllMenus} className="w-full text-center py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200">Contact</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
