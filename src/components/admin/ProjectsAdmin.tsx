import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash, Eye, Check, X } from 'lucide-react';
import { useStore } from '../../store/useStore';
import Button from '../shared/Button';
import { IProject } from '../../types';

const ProjectsAdmin: React.FC = () => {
  const { t } = useTranslation();
  const { projects, addProject, updateProject, deleteProject } = useStore();
  
  // UI States
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<IProject>>({
    title: '',
    description: '',
    image: '',
    technologies: [],
    github: '',
    demo: '',
    featured: false,
  });
  
  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      image: '',
      technologies: [],
      github: '',
      demo: '',
      featured: false,
    });
  };
  
  const handleAddNew = () => {
    setIsAdding(true);
    setEditingId(null);
    resetForm();
  };
  
  const handleEdit = (project: IProject) => {
    setIsAdding(false);
    setEditingId(project.id);
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      technologies: project.technologies,
      github: project.github || '',
      demo: project.demo || '',
      featured: project.featured,
    });
  };
  
  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      deleteProject(id);
    }
  };
  
  const handleCancel = () => {
    setIsAdding(false);
    setEditingId(null);
    resetForm();
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleTechnologiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const technologies = e.target.value
      .split(',')
      .map(tech => tech.trim())
      .filter(tech => tech !== '');
    
    setFormData(prev => ({ ...prev, technologies }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isAdding) {
      const newProject: IProject = {
        id: Date.now().toString(),
        title: formData.title || '',
        description: formData.description || '',
        image: formData.image || '',
        technologies: formData.technologies || [],
        github: formData.github || undefined,
        demo: formData.demo || undefined,
        featured: formData.featured || false,
      };
      
      addProject(newProject);
    } else if (editingId) {
      updateProject(editingId, formData);
    }
    
    handleCancel();
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">{t('admin.sections.projects')}</h1>
        
        <Button 
          variant="primary"
          onClick={handleAddNew}
        >
          <Plus size={16} className="mr-2" />
          {t('admin.actions.add')}
        </Button>
      </div>
      
      {/* Project Form */}
      {(isAdding || editingId) && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-background rounded-lg border border-border p-4 mb-6"
        >
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-border rounded-md bg-background"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-border rounded-md bg-background"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full p-2 border border-border rounded-md bg-background"
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Technologies (comma separated)</label>
                <input
                  type="text"
                  value={formData.technologies?.join(', ')}
                  onChange={handleTechnologiesChange}
                  required
                  className="w-full p-2 border border-border rounded-md bg-background"
                  placeholder="React, TypeScript, Tailwind CSS"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">GitHub URL</label>
                <input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-border rounded-md bg-background"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Demo URL</label>
                <input
                  type="url"
                  name="demo"
                  value={formData.demo}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-border rounded-md bg-background"
                />
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="featured"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-primary border-border rounded"
                />
                <label htmlFor="featured" className="ml-2 block text-sm">
                  Featured Project
                </label>
              </div>
            </div>
            
            <div className="flex justify-end mt-4 space-x-3">
              <Button
                variant="ghost"
                onClick={handleCancel}
              >
                <X size={16} className="mr-2" />
                {t('admin.actions.cancel')}
              </Button>
              
              <Button
                variant="primary"
                type="submit"
              >
                <Check size={16} className="mr-2" />
                {isAdding ? t('admin.actions.add') : t('admin.actions.save')}
              </Button>
            </div>
          </form>
        </motion.div>
      )}
      
      {/* Projects List */}
      <div className="space-y-4">
        {projects.length === 0 ? (
          <div className="bg-background-light rounded-lg p-6 text-center">
            <p className="text-text-light">No projects yet. Add your first project!</p>
          </div>
        ) : (
          projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-background-light rounded-lg border border-border shadow-sm overflow-hidden flex flex-col md:flex-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Project image */}
              <div className="w-full md:w-48 h-32 md:h-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Project details */}
              <div className="p-4 flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium">{project.title}</h3>
                    <p className="text-text-light text-sm line-clamp-2 mt-1">{project.description}</p>
                  </div>
                  {project.featured && (
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-1 mt-3">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-background px-2 py-0.5 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex md:flex-col justify-end gap-2 p-4 border-t md:border-t-0 md:border-l border-border">
                <button
                  onClick={() => handleEdit(project)}
                  className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20"
                  aria-label="Edit project"
                >
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="p-2 bg-error/10 text-error rounded-lg hover:bg-error/20"
                  aria-label="Delete project"
                >
                  <Trash size={18} />
                </button>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProjectsAdmin;