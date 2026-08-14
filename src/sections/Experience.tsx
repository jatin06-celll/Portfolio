import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';
import { Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader title="Experience" />
        
        <div className="max-w-4xl mx-auto">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-dark-border"></div>
              
              <div className="md:w-1/2 md:pr-12 md:text-right relative mb-12">
                <div className="absolute left-[-32px] md:left-auto md:-right-[24px] top-1 w-12 h-12 bg-dark rounded-full border-4 border-dark-border flex items-center justify-center z-10 text-accent">
                  <Briefcase size={20} />
                </div>
                
                <div className="glass-panel p-6 text-left md:text-right">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <div className="flex flex-col md:items-end mt-1 mb-4">
                    <span className="text-accent font-medium">{exp.company}</span>
                    <span className="text-gray-500 text-sm font-mono">{exp.duration}</span>
                  </div>
                  
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex md:justify-end items-start gap-2">
                        <span className="md:hidden text-accent mt-1">•</span>
                        <span>{point}</span>
                        <span className="hidden md:block text-accent mt-1">•</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
