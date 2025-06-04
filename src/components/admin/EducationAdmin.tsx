import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash, Check, X } from 'lucide-react';
import { useStore } from '../../store/useStore';
import Button from '../shared/Button';
import { IDegree } from '../../types';

const EducationAdmin: React.FC = () => {
  const { t } = useTranslation();
  const { degrees, addDegree, updateDegree, deleteDegree } = useStore();
  
  // UI States
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<IDegree>>({
    title: '',
    institution: '',
    year: '',
    description: '',
  });
  
  const resetForm = () => {
    setFormData({
      title: '',
      institution: '',
      year: '',
      description: '',
    });
  };
  
  const handleAddNew = () => {
    setIsAdding(true);
    setEditingId(null);
    resetForm();
  };
  
  const handleEdit = (degree: IDegree) => {
    setIsAdding(false);
    setEditingId(degree.id);
    setFormData({
      title: degree.title,
      institution: degree.institution,
      year: degree.year,
      description: degree.description,
    });
  };
  
  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this degree?')) {
      deleteDegree(id);
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isAdding) {
      const newDegree: IDegree = {
        id: Date.now().toString(),
        title: formData.title || '',
        institution: formData.institution || '',
        year: formData.year || '',
        description: formData.description || '',
      };
      
      addDegree(newDegree);
    } else if (editingId) {
      updateDegree(editingId, formData);
    }
    
    handleCancel();
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">{t('admin.sections.education')}</h1>
        
        <Button 
          variant="primary"
          onClick={handleAddNew}
        >
          <Plus size={16} className="mr-2" />
          {t('admin.actions.add')}
        </Button>
      </div>
      
      {/* Education Form */}
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
                <label className="block text-sm font-medium mb-1">Degree Title</label>
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
                <label className="block text-sm font-medium mb-1">Institution</label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-border rounded-md bg-background"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Year</label>
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-border rounded-md bg-background"
                  placeholder="2025"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full p-2 border border-border rounded-md bg-background"
                ></textarea>
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
      
      {/* Education List */}
      <div className="space-y-4">
        {degrees.length === 0 ? (
          <div className="bg-background-light rounded-lg p-6 text-center">
            <p className="text-text-light">No education entries yet. Add your first degree!</p>
          </div>
        ) : (
          degrees.map((degree) => (
            <motion.div
              key={degree.id}
              className="bg-background-light rounded-lg border border-border shadow-sm overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-medium">{degree.title}</h3>
                      <span className="bg-secondary/10 text-secondary text-xs px-2 py-0.5 rounded-full">
                        {degree.year}
                      </span>
                    </div>
                    <p className="text-text-light">{degree.institution}</p>
                    <p className="mt-2">{degree.description}</p>
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => handleEdit(degree)}
                      className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20"
                      aria-label="Edit education"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(degree.id)}
                      className="p-2 bg-error/10 text-error rounded-lg hover:bg-error/20"
                      aria-label="Delete education"
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

export default EducationAdmin;