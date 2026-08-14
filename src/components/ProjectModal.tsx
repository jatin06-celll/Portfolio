import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

type Project = typeof portfolioData.projects[0];

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-dark-card border border-dark-border rounded-xl shadow-2xl"
        >
          <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-dark-card/90 backdrop-blur-md border-b border-dark-border">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-dark rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-6 space-y-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Project Overview</h4>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span key={i} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 size={18} className="text-accent mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 pt-4 border-t border-dark-border">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2"
                >
                  <FaGithub size={20} />
                  <span>View Source</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
