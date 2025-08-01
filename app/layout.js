// app/layout.js

import React from 'react';
import Header from '../components/Header'; // Import your Header component
import Footer from '../components/Footer'; // Import your Footer component
// The path has been corrected to go up one level and into the styles folder.
import '../styles/globals.css';

// This is the root layout for your entire application.
// It wraps around every page and provides the shared UI.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children} {/* This is where your page content will be rendered */}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}