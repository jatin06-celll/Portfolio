import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 relative bg-dark-lighter/10 border-t border-dark-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-dark border border-dark-border rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent">
              <FileText size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Grab My Resume</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
              Looking for a formal overview? Here is my complete resume, highlighting my technical skills, educational background, and professional experience.
            </p>
            
            <a 
              href={portfolioData.resumeUrl}
              className="inline-flex items-center gap-3 btn-primary"
            >
              <Eye size={20} />
              <span>View Resume</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
