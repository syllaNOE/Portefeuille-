import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import { IProject } from '../../types';
import Button from '../shared/Button';

interface ProjectModalProps {
  project: IProject | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const { t } = useTranslation();
  
  if (!project) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl max-h-[90vh] overflow-auto bg-background rounded-xl shadow-xl z-50 p-0"
          >
            {/* Image header */}
            <div className="relative w-full aspect-video">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover rounded-t-xl"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-background rounded-full p-2 shadow-lg hover:bg-background-light transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              
              <p className="text-text mb-6">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-background-light px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                {project.github && (
                  <Button
                    variant="primary"
                    href={project.github}
                    external
                  >
                    <Github size={18} className="mr-2" />
                    {t('projects.githubLink')}
                  </Button>
                )}
                {project.demo && (
                  <Button
                    variant="secondary"
                    href={project.demo}
                    external
                  >
                    <ExternalLink size={18} className="mr-2" />
                    {t('projects.demoLink')}
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;