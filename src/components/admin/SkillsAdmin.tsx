import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash, Check, X } from 'lucide-react';
import { useStore } from '../../store/useStore';
import Button from '../shared/Button';
import { ISkill } from '../../types';

const SkillsAdmin: React.FC = () => {
  const { t } = useTranslation();
  const { skills, addSkill, updateSkill, deleteSkill } = useStore();
  
  // UI States
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<ISkill>>({
    name: '',
    level: 50,
    category: 'dataScience',
  });
  
  const resetForm = () => {
    setFormData({
      name: '',
      level: 50,
      category: 'dataScience',
    });
  };
  
  const handleAddNew = () => {
    setIsAdding(true);
    setEditingId(null);
    resetForm();
  };
  
  const handleEdit = (skill: ISkill) => {
    setIsAdding(false);
    setEditingId(skill.id);
    setFormData({
      name: skill.name,
      level: skill.level,
      category: skill.category,
    });
  };
  
  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this skill?')) {
      deleteSkill(id);
    }
  };
  
  const handleCancel = () => {
    setIsAdding(false);
    setEditingId(null);
    resetForm();
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const level = parseInt(e.target.value, 10);
    setFormData(prev => ({ ...prev, level }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isAdding) {
      const newSkill: ISkill = {
        id: Date.now().toString(),
        name: formData.name || '',
        level: formData.level || 0,
        category: formData.category as 'dataScience' | 'bi' | 'ml' | 'cloud' | 'tools',
      };
      
      addSkill(newSkill);
    } else if (editingId) {
      updateSkill(editingId, formData);
    }
    
    handleCancel();
  };
  
  // Group skills by category
  const skillsByCategory: Record<string, ISkill[]> = {
    dataScience: skills.filter(skill => skill.category === 'dataScience'),
    bi: skills.filter(skill => skill.category === 'bi'),
    ml: skills.filter(skill => skill.category === 'ml'),
    cloud: skills.filter(skill => skill.category === 'cloud'),
    tools: skills.filter(skill => skill.category === 'tools')
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">{t('admin.sections.skills')}</h1>
        
        <Button 
          variant="primary"
          onClick={handleAddNew}
        >
          <Plus size={16} className="mr-2" />
          {t('admin.actions.add')}
        </Button>
      </div>
      
      {/* Skill Form */}
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
                <label className="block text-sm font-medium mb-1">Skill Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-border rounded-md bg-background"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-border rounded-md bg-background"
                >
                  <option value="dataScience">{t('skills.categories.dataScience')}</option>
                  <option value="bi">{t('skills.categories.bi')}</option>
                  <option value="ml">{t('skills.categories.ml')}</option>
                  <option value="cloud">{t('skills.categories.cloud')}</option>
                  <option value="tools">{t('skills.categories.tools')}</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Proficiency Level: {formData.level}%
                </label>
                <input
                  type="range"
                  name="level"
                  value={formData.level}
                  onChange={handleLevelChange}
                  min="1"
                  max="100"
                  className="w-full h-2 bg-background-light rounded-lg appearance-none cursor-pointer"
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
      
      {/* Skills List by Category */}
      {Object.keys(skillsByCategory).map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-lg font-semibold mb-4">
            {t(`skills.categories.${category}`)}
          </h2>
          
          {skillsByCategory[category].length === 0 ? (
            <p className="text-text-light text-sm">No skills in this category</p>
          ) : (
            <div className="space-y-3">
              {skillsByCategory[category].map((skill) => (
                <motion.div
                  key={skill.id}
                  className="bg-background-light rounded-lg border border-border shadow-sm p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <h3 className="font-medium">{skill.name}</h3>
                      <div className="flex items-center mt-1">
                        <div className="flex-1 h-2 bg-background rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className="ml-2 text-sm text-text-light">{skill.level}%</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => handleEdit(skill)}
                        className="p-1.5 bg-primary/10 text-primary rounded-md hover:bg-primary/20"
                        aria-label="Edit skill"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(skill.id)}
                        className="p-1.5 bg-error/10 text-error rounded-md hover:bg-error/20"
                        aria-label="Delete skill"
                      >
                        <Trash size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      ))}
      
      {skills.length === 0 && (
        <div className="bg-background-light rounded-lg p-6 text-center">
          <p className="text-text-light">No skills yet. Add your first skill!</p>
        </div>
      )}
    </div>
  );
};

export default SkillsAdmin;