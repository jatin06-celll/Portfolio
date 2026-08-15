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
        
        <div className="max-w-4xl mx-auto space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl glass-panel overflow-hidden border border-dark-border"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-purple-500"></div>
              
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="flex items-center gap-2 text-accent font-medium mb-3">
                    <Briefcase size={18} />
                    <span>{exp.duration}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
                
                <div className="md:w-2/3 flex items-center">
                  <ul className="space-y-3 text-gray-300 text-sm md:text-base">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-accent mt-1 flex-shrink-0 text-xl leading-none">•</span>
                        <span>{point}</span>
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
