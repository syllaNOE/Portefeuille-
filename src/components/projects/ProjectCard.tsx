import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Eye } from 'lucide-react';
import { IProject } from '../../types';
import Button from '../shared/Button';

interface ProjectCardProps {
  project: IProject;
  onClick: (project: IProject) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const { t } = useTranslation();
  
  return (
    <motion.div 
      className="bg-background border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            variant="primary"
            size="sm"
            onClick={() => onClick(project)}
            className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <Eye size={16} className="mr-2" />
            {t('projects.viewProject')}
          </Button>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-text-light line-clamp-2 mb-4 h-12">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index} 
              className="bg-background-light px-2 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-background-light px-2 py-1 rounded-full text-xs font-medium">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex space-x-2 mt-auto">
          {project.github && (
            <Button
              variant="ghost"
              size="sm"
              href={project.github}
              external
              className="flex-1"
            >
              <Github size={16} className="mr-2" />
              {t('projects.githubLink')}
            </Button>
          )}
          {project.demo && (
            <Button
              variant="outline"
              size="sm"
              href={project.demo}
              external
              className="flex-1"
            >
              <ExternalLink size={16} className="mr-2" />
              {t('projects.demoLink')}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;