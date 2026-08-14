import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectModal } from '../components/ProjectModal';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Network, Lock, ShieldAlert, Cpu } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof portfolioData.projects[0] | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'dpi': return <Network size={32} className="text-accent" />;
      case 'vault': return <Lock size={32} className="text-accent" />;
      case 'ciphershield': return <ShieldAlert size={32} className="text-accent" />;
      case 'socketchess': return <Cpu size={32} className="text-accent" />;
      default: return <Cpu size={32} className="text-accent" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-dark-lighter/30">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader 
          title="Featured Systems" 
          subtitle="A selection of backend and cybersecurity projects demonstrating system architecture, network processing, and secure integrations." 
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel group relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="p-6 md:p-8 flex-grow flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-dark border border-dark-border rounded-xl flex items-center justify-center">
                    {getProjectIcon(project.id)}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {project.shortDescription}
                </p>

                <div className="space-y-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="tech-pill text-[10px]">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="tech-pill text-[10px] bg-transparent">+{project.stack.length - 4}</span>
                    )}
                  </div>
                  
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-3 mt-4 text-sm font-mono text-accent border border-accent/20 rounded hover:bg-accent/10 transition-colors"
                  >
                    [ EXECUTE view_details ]
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
