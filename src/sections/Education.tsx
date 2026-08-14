import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Users, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Education & Certification Column */}
          <div>
            <SectionHeader title="Education" />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-6 mb-12 border-l-4 border-l-accent"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dark rounded-lg border border-dark-border text-accent">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{portfolioData.education.degree}</h3>
                  <p className="text-accent font-medium mt-1">{portfolioData.education.institution}</p>
                  <p className="text-gray-400 text-sm mt-1">{portfolioData.education.location} | {portfolioData.education.period}</p>
                  <div className="mt-4 inline-block px-3 py-1 bg-dark border border-dark-border rounded text-sm text-gray-300 font-mono">
                    CGPA: <span className="text-white font-bold">{portfolioData.education.cgpa}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <SectionHeader title="Certifications" />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-6"
            >
              {portfolioData.certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-dark rounded-lg border border-dark-border text-accent">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                    <p className="text-gray-400 mt-1">{cert.issuer}</p>
                    <p className="text-gray-500 text-sm font-mono mt-1">{cert.date}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Extracurricular Column */}
          <div>
            <SectionHeader title="Extracurricular" />
            <div className="space-y-6">
              {portfolioData.extracurricular.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-panel p-6"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-dark rounded-lg border border-dark-border text-accent">
                      <Users size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{activity.role}</h3>
                      <p className="text-accent text-sm mt-1">{activity.organization}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-300 text-sm pl-4">
                    {activity.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent mt-1 opacity-50">-</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
