import React from 'react';
import { EMAIL_TO } from './consts';

const Footer = () => (
  <footer className="py-8 mt-16 border-t border-gray-800">
    <div className="container mx-auto px-4 text-center">
      <p className="text-xs">&copy; 2025 Impossible Motion. All rights reserved.</p>
      <p className="mt-2 text-xs">
        <a href={`mailto:${EMAIL_TO}`} className="text-accent hover:underline">{EMAIL_TO}</a>
      </p>
    </div>
  </footer>
);

export default Footer;
