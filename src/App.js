import React from 'react';
import Header from './Header';
import ThumbnailGrid from './ThumbnailGrid';
import Footer from './Footer';
import { EMAIL_TO } from './consts';

import 'tailwindcss/tailwind.css';
import './App.css';

const App = () => (
  <div className="flex flex-col min-h-screen bg-dark-bg text-gray-300 font-mono">
    <nav className="py-4 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-accent glitch">Impossible Motion</h1>
      </div>
    </nav>

    <main className="flex-grow container mx-auto px-4 py-16">
      <Header />
      <ThumbnailGrid />

      <div className="mt-20 text-center">
        <h3 className="text-xl font-semibold mb-4">Interested? Reach out.</h3>
        <a href={`mailto:${EMAIL_TO}`} className="inline-block bg-transparent border border-accent text-accent hover:bg-accent hover:text-black font-semibold py-2 px-6 transition-colors duration-300">
          Contact
        </a>
      </div>
    </main>

    <Footer />
  </div>
);

export default App;
