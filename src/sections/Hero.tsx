import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Database, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span className="text-sm font-mono text-gray-400 border border-dark-border bg-dark-lighter/50 px-3 py-1 rounded-full">
              {portfolioData.hero.status}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {portfolioData.hero.name} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
              {portfolioData.hero.headline}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl leading-relaxed"
          >
            {portfolioData.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#projects" className="btn-primary text-center">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary text-center">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative floating icons */}
      <div className="absolute right-[10%] top-[30%] hidden lg:block opacity-10">
        <Terminal size={120} />
      </div>
      <div className="absolute right-[25%] top-[60%] hidden lg:block opacity-10">
        <Shield size={80} />
      </div>
      <div className="absolute right-[5%] top-[70%] hidden lg:block opacity-10">
        <Database size={100} />
      </div>
      <div className="absolute left-[5%] bottom-[10%] hidden lg:block opacity-10">
        <Code2 size={90} />
      </div>
    </section>
  );
};
