import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectModal } from '../components/ProjectModal';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Network, Lock, ShieldAlert, Cpu, ChevronLeft, ChevronRight, Brain, BookOpen } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const PROJECTS_PER_PAGE = 2;

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof portfolioData.projects[0] | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const totalPages = Math.ceil(portfolioData.projects.length / PROJECTS_PER_PAGE);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'dpi': return <Network size={32} className="text-accent" />;
      case 'vault': return <Lock size={32} className="text-accent" />;
      case 'ciphershield': return <ShieldAlert size={32} className="text-accent" />;
      case 'socketchess': return <Cpu size={32} className="text-accent" />;
      case 'dsabot': return <Brain size={32} className="text-accent" />;
      case 'wsd': return <BookOpen size={32} className="text-accent" />;
      default: return <Cpu size={32} className="text-accent" />;
    }
  };

  const getCurrentProjects = () => {
    const start = currentPage * PROJECTS_PER_PAGE;
    return portfolioData.projects.slice(start, start + PROJECTS_PER_PAGE);
  };

  const goToPage = useCallback((page: number) => {
    setDirection(page > currentPage ? 1 : -1);
    setCurrentPage(page);
  }, [currentPage]);

  const nextPage = useCallback(() => {
    if (currentPage < totalPages - 1) {
      setDirection(1);
      setCurrentPage(prev => prev + 1);
    }
  }, [currentPage, totalPages]);

  const prevPage = useCallback(() => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(prev => prev - 1);
    }
  }, [currentPage]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentPage(prev => (prev + 1) % totalPages);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 600 : -600,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -600 : 600,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section id="projects" className="py-20 bg-dark-lighter/30">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader 
          title="Featured Systems" 
          subtitle="A selection of backend, cybersecurity, and AI/ML projects demonstrating system architecture, network processing, and intelligent systems." 
        />

        {/* Page counter */}
        <div className="flex items-center justify-center mb-8 gap-3">
          <span className="text-xs font-mono text-gray-500 tracking-wider">
            [ {String(currentPage + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')} ]
          </span>
        </div>
        
        {/* Carousel container */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
              currentPage === 0
                ? 'border-dark-border/30 text-gray-600 cursor-not-allowed opacity-30'
                : 'border-accent/40 text-accent hover:bg-accent/10 hover:border-accent hover:shadow-[0_0_20px_rgba(0,255,65,0.2)]'
            }`}
            aria-label="Previous projects"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
              currentPage === totalPages - 1
                ? 'border-dark-border/30 text-gray-600 cursor-not-allowed opacity-30'
                : 'border-accent/40 text-accent hover:bg-accent/10 hover:border-accent hover:shadow-[0_0_20px_rgba(0,255,65,0.2)]'
            }`}
            aria-label="Next projects"
          >
            <ChevronRight size={20} />
          </button>

          {/* Projects grid with AnimatePresence */}
          <div className="overflow-hidden min-h-[420px] md:min-h-[380px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentPage}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="grid md:grid-cols-2 gap-8"
              >
                {getCurrentProjects().map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    className="glass-panel group relative overflow-hidden flex flex-col h-full"
                  >
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Animated corner accent */}
                    <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                      <div className="absolute top-0 left-0 w-[1px] h-0 bg-accent/60 group-hover:h-16 transition-all duration-500"></div>
                      <div className="absolute top-0 left-0 h-[1px] w-0 bg-accent/60 group-hover:w-16 transition-all duration-500"></div>
                    </div>
                    
                    <div className="p-6 md:p-8 flex-grow flex flex-col relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-14 h-14 bg-dark border border-dark-border rounded-xl flex items-center justify-center group-hover:border-accent/30 group-hover:shadow-[0_0_15px_rgba(0,255,65,0.15)] transition-all duration-500">
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
                      
                      <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
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
                          className="w-full py-3 mt-4 text-sm font-mono text-accent border border-accent/20 rounded hover:bg-accent/10 hover:border-accent/40 transition-all duration-300"
                        >
                          [ EXECUTE view_details ]
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center mt-10 gap-3">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`relative transition-all duration-400 ${
                i === currentPage
                  ? 'w-10 h-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(0,255,65,0.5)]'
                  : 'w-2.5 h-2.5 rounded-full bg-dark-border hover:bg-gray-500'
              }`}
              aria-label={`Go to page ${i + 1}`}
            >
              {i === currentPage && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Keyboard hint */}
        <p className="text-center mt-4 text-[11px] font-mono text-gray-600 tracking-wider">
          Use arrows or dots to navigate
        </p>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
