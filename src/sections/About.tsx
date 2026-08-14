import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader title="About Me" />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose prose-invert max-w-none"
          >
            <p className="text-lg text-gray-300 leading-relaxed font-sans">
              {portfolioData.about.text}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-blue-500/20 blur-3xl rounded-full"></div>
            <div className="glass-panel p-6 relative border border-dark-border">
              <div className="flex items-center justify-between mb-4 border-b border-dark-border pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-500 font-mono">system_status.sh</div>
              </div>
              <div className="font-mono text-sm text-gray-300 space-y-2">
                <p><span className="text-accent">~</span> $ whoami</p>
                <p className="text-white">jatin_pathak</p>
                <p><span className="text-accent">~</span> $ cat current_focus.txt</p>
                <p className="text-white">Backend Systems, Network Security, API Design</p>
                <p><span className="text-accent">~</span> $ uptime</p>
                <p className="text-white">B.E. Student (2023-2027) | CGPA: 7.92</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
