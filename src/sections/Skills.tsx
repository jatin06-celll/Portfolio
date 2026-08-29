import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const skillCategories = [
    { title: "Languages", skills: portfolioData.skills.languages },
    { title: "Web Development", skills: portfolioData.skills.web },
    { title: "Databases", skills: portfolioData.skills.databases },
    { title: "Core Concepts", skills: portfolioData.skills.core },
    { title: "AI & Developer Tools", skills: portfolioData.skills.tools },
    { title: "Cloud / DevOps", skills: portfolioData.skills.cloudDevOps },
  ];

  return (
    <section id="skills" className="py-20 bg-dark-lighter/30">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader title="Technical Arsenal" />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} className="glass-panel p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-accent">&gt;</span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="tech-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
