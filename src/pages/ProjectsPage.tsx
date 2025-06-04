import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PageTransition from '../components/shared/PageTransition';
import Section from '../components/shared/Section';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectModal from '../components/projects/ProjectModal';
import { useStore } from '../store/useStore';
import { IProject } from '../types';

const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();
  const { projects } = useStore();
  
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Get available filters from projects
  const filters = Object.keys(t('projects.filters', { returnObjects: true }) as object);
  
  // Filter projects based on selected filter
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(filter.toLowerCase())
        )
      );
      
  const handleOpenProject = (project: IProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <PageTransition>
      <Section 
        title={t('projects.title')}
        subtitle="Selected projects showcasing my skills and experience"
      >
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filterValue) => (
            <button
              key={filterValue}
              onClick={() => setFilter(filterValue)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === filterValue
                  ? 'bg-primary text-white'
                  : 'bg-background-light hover:bg-background-light/80'
              }`}
            >
              {t(`projects.filters.${filterValue}`)}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              onClick={handleOpenProject}
            />
          ))}
        </motion.div>
        
        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-lg text-text-light">
              No projects found with the selected filter.
            </p>
          </motion.div>
        )}
      </Section>
      
      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
      />
    </PageTransition>
  );
};

export default ProjectsPage;