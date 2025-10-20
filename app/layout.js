// app/layout.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

// This is your base metadata. Every page will inherit these values.
export const metadata = {
  title: {
    template: '%s | Reignite Solutions', // e.g., "About Us | Reignite Solutions"
    default: 'Reignite Solutions', // The default title for pages without one
  },
  description: 'Reignite Solutions is a strategic and creative partner for ambitious businesses. We help companies unlock their full potential through bold thinking, practical action, and hands-on delivery.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@400;700&family=Noto+Sans:wght@400;700&display=swap"
          rel="stylesheet"
          media="print"
          onLoad="this.media='all'"
        />
        <noscript>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@400;700&family=Noto+Sans:wght@400;400&display=swap" />
        </noscript>
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />

      </head>
          <body>
        <div className="flex flex-col min-h-screen font-sans bg-gray-100">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
