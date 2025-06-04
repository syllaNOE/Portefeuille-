import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash, Check, X } from 'lucide-react';
import { useStore } from '../../store/useStore';
import Button from '../shared/Button';
import { IExperience } from '../../types';

const ExperienceAdmin: React.FC = () => {
  const { t } = useTranslation();
  const { experiences, addExperience, updateExperience, deleteExperience } = useStore();
  
  // UI States
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<IExperience>>({
    title: '',
    company: '',
    date: '',
    description: '',
    skills: [],
  });
  
  const resetForm = () => {
    setFormData({
      title: '',
      company: '',
      date: '',
      description: '',
      skills: [],
    });
  };
  
  const handleAddNew = () => {
    setIsAdding(true);
    setEditingId(null);
    resetForm();
  };
  
  const handleEdit = (experience: IExperience) => {
    setIsAdding(false);
    setEditingId(experience.id);
    setFormData({
      title: experience.title,
      company: experience.company,
      date: experience.date,
      description: experience.description,
      skills: experience.skills,
    });
  };
  
  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this experience?')) {
      deleteExperience(id);
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
  
  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const skills = e.target.value
      .split(',')
      .map(skill => skill.trim())
      .filter(skill => skill !== '');
    
    setFormData(prev => ({ ...prev, skills }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isAdding) {
      const newExperience: IExperience = {
        id: Date.now().toString(),
        title: formData.title || '',
        company: formData.company || '',
        date: formData.date || '',
        description: formData.description || '',
        skills: formData.skills || [],
      };
      
      addExperience(newExperience);
    } else if (editingId) {
      updateExperience(editingId, formData);
    }
    
    handleCancel();
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">{t('admin.sections.experience')}</h1>
        
        <Button 
          variant="primary"
          onClick={handleAddNew}
        >
          <Plus size={16} className="mr-2" />
          {t('admin.actions.add')}
        </Button>
      </div>
      
      {/* Experience Form */}
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
                <label className="block text-sm font-medium mb-1">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-border rounded-md bg-background"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-border rounded-md bg-background"
                  placeholder="MM/YYYY - MM/YYYY or Present"
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
                <label className="block text-sm font-medium mb-1">Skills (comma separated)</label>
                <input
                  type="text"
                  value={formData.skills?.join(', ')}
                  onChange={handleSkillsChange}
                  required
                  className="w-full p-2 border border-border rounded-md bg-background"
                  placeholder="Python, SQL, Data Analysis"
                />
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
      
      {/* Experiences List */}
      <div className="space-y-4">
        {experiences.length === 0 ? (
          <div className="bg-background-light rounded-lg p-6 text-center">
            <p className="text-text-light">No experiences yet. Add your first experience!</p>
          </div>
        ) : (
          experiences.map((experience) => (
            <motion.div
              key={experience.id}
              className="bg-background-light rounded-lg border border-border shadow-sm overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium">{experience.title}</h3>
                    <p className="text-text-light">{experience.company} • {experience.date}</p>
                    <p className="mt-2">{experience.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mt-3">
                      {experience.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="bg-background px-2 py-0.5 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => handleEdit(experience)}
                      className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20"
                      aria-label="Edit experience"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(experience.id)}
                      className="p-2 bg-error/10 text-error rounded-lg hover:bg-error/20"
                      aria-label="Delete experience"
                    >
                      <Trash size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default ExperienceAdmin;