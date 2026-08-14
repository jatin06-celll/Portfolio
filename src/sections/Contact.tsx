import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative border-t border-dark-border bg-dark-lighter/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something Secure.</h2>
            <p className="text-xl text-gray-400 mb-12">
              Interested in backend development, cybersecurity, or building systems that solve real problems? Let's connect.
            </p>
            
            <a 
              href={`mailto:${portfolioData.contact.email}`}
              className="inline-flex items-center gap-2 btn-primary text-lg px-8 py-4 mb-16"
            >
              <Send size={20} />
              <span>Initiate Connection</span>
            </a>
            
            <div className="flex justify-center gap-6">
              <a 
                href={`mailto:${portfolioData.contact.email}`}
                className="p-4 glass-panel hover:border-accent transition-colors group"
                aria-label="Email"
              >
                <Mail size={28} className="text-gray-400 group-hover:text-accent transition-colors" />
              </a>
              <a 
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-panel hover:border-accent transition-colors group"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} className="text-gray-400 group-hover:text-accent transition-colors" />
              </a>
              <a 
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-panel hover:border-accent transition-colors group"
                aria-label="GitHub"
              >
                <FaGithub size={28} className="text-gray-400 group-hover:text-accent transition-colors" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
