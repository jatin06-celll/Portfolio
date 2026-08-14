import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-dark border-t border-dark-border text-center">
      <div className="container mx-auto px-6">
        <p className="text-gray-500 font-mono text-sm">
          &copy; {currentYear} {portfolioData.hero.name}. Built with React, Tailwind, and Node.js principles.
        </p>
      </div>
    </footer>
  );
};
