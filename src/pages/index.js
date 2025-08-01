import Head from 'next/head';
import { useState } from 'react';

const Home = () => {
  // State to manage the mobile menu's open/closed state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Reignite Solutions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Reignite Solutions - Digital solutions that drive growth." />
        <link rel="icon" href="/favicon.ico" />
        {/*
          NOTE: Tailwind is assumed to be configured in your Next.js project,
          so a CDN link is not needed here.
        */}
      </Head>

      <div className="bg-gray-50 text-gray-800 font-inter">

        {/* Header and Navigation Bar */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            {/* Logo/Company Name */}
            <a href="/" className="text-2xl font-bold text-gray-900">
              <span className="text-indigo-600">Reignite</span> Solutions
            </a>

            {/* Navigation Links (Desktop) */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">Home</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">About</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">Services</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">Contact</a>
            </div>

            {/* Call-to-Action Button (Desktop) */}
            <div className="hidden md:block">
              <a href="#" className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all duration-200 shadow-md">
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
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
          </nav>

          {/* Mobile Menu Content (conditionally rendered) */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white shadow-md rounded-b-lg">
              <div className="flex flex-col items-start px-4 py-4 space-y-4">
                <a href="#" className="block w-full text-gray-600 hover:text-indigo-600 transition-colors duration-200 py-2">Home</a>
                <a href="#" className="block w-full text-gray-600 hover:text-indigo-600 transition-colors duration-200 py-2">About</a>
                <a href="#" className="block w-full text-gray-600 hover:text-indigo-600 transition-colors duration-200 py-2">Services</a>
                <a href="#" className="block w-full text-gray-600 hover:text-indigo-600 transition-colors duration-200 py-2">Contact</a>
                <a href="#" className="block w-full text-center px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all duration-200 shadow-md mt-4">
                  Get Started
                </a>
              </div>
            </div>
          )}
        </header>

        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-indigo-50 to-white py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Reignite Your Brand's Potential
              </h1>
              {/* Subheadline */}
              <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
                We specialize in creating elegant and powerful digital solutions that drive growth and connect you with your audience.
              </p>
              {/* Call-to-Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#" className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1">
                  Our Services
                </a>
                <a href="#" className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg ring-1 ring-inset ring-gray-300 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
                  Learn More
                </a>
              </div>
            </div>
          </section>

          {/* Placeholder for additional sections */}
          <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">More Content Here</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Example Card 1 */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900">Digital Strategy</h3>
                <p className="mt-2 text-gray-600">
                  We help you define and execute a clear digital strategy to achieve your business goals.
                </p>
              </div>
              {/* Example Card 2 */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900">Web Development</h3>
                <p className="mt-2 text-gray-600">
                  From simple sites to complex applications, we build fast, responsive, and secure web experiences.
                </p>
              </div>
              {/* Example Card 3 */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900">SEO & Marketing</h3>
                <p className="mt-2 text-gray-600">
                  Boost your visibility and reach new customers with our proven SEO and digital marketing techniques.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2025 Reignite Solutions. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
};

export default Home;
