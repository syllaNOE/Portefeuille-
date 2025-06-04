import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash, Check, X } from 'lucide-react';
import { useStore } from '../../store/useStore';
import Button from '../shared/Button';
import { ICertification } from '../../types';

const CertificationsAdmin: React.FC = () => {
  const { t } = useTranslation();
  const { certifications, addCertification, updateCertification, deleteCertification } = useStore();
  
  // UI States
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<ICertification>>({
    title: '',
    issuer: '',
    date: '',
    credential: '',
    url: '',
  });
  
  const resetForm = () => {
    setFormData({
      title: '',
      issuer: '',
      date: '',
      credential: '',
      url: '',
    });
  };
  
  const handleAddNew = () => {
    setIsAdding(true);
    setEditingId(null);
    resetForm();
  };
  
  const handleEdit = (certification: ICertification) => {
    setIsAdding(false);
    setEditingId(certification.id);
    setFormData({
      title: certification.title,
      issuer: certification.issuer,
      date: certification.date,
      credential: certification.credential,
      url: certification.url || '',
    });
  };
  
  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this certification?')) {
      deleteCertification(id);
    }
  };
  
  const handleCancel = () => {
    setIsAdding(false);
    setEditingId(null);
    resetForm();
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isAdding) {
      const newCertification: ICertification = {
        id: Date.now().toString(),
        title: formData.title || '',
        issuer: formData.issuer || '',
        date: formData.date || '',
        credential: formData.credential || '',
        url: formData.url,
      };
      
      addCertification(newCertification);
    } else if (editingId) {
      updateCertification(editingId, formData);
    }
    
    handleCancel();
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">{t('admin.sections.certifications')}</h1>
        
        <Button 
          variant="primary"
          onClick={handleAddNew}
        >
          <Plus size={16} className="mr-2" />
          {t('admin.actions.add')}
        </Button>
      </div>
      
      {/* Certification Form */}
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
                <label className="block text-sm font-medium mb-1">Certification Title</label>
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
                <label className="block text-sm font-medium mb-1">Issuer</label>
                <input
                  type="text"
                  name="issuer"
                  value={formData.issuer}
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
                  placeholder="2023"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Credential ID</label>
                <input
                  type="text"
                  name="credential"
                  value={formData.credential}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-border rounded-md bg-background"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Verification URL</label>
                <input
                  type="url"
                  name="url"
                  value={formData.url}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-border rounded-md bg-background"
                  placeholder="https://www.example.com/verify/12345"
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
      
      {/* Certifications List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.length === 0 ? (
          <div className="bg-background-light rounded-lg p-6 text-center md:col-span-2">
            <p className="text-text-light">No certifications yet. Add your first certification!</p>
          </div>
        ) : (
          certifications.map((certification) => (
            <motion.div
              key={certification.id}
              className="bg-background-light rounded-lg border border-border shadow-sm overflow-hidden p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-medium">{certification.title}</h3>
                  <p className="text-text-light">{certification.issuer}</p>
                  <div className="mt-2 flex items-center">
                    <span className="text-sm bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">
                      {certification.date}
                    </span>
                    <span className="mx-2 text-text-light">•</span>
                    <span className="text-sm text-text-light">
                      ID: {certification.credential}
                    </span>
                  </div>
                  
                  {certification.url && (
                    <a 
                      href={certification.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm mt-2 inline-block"
                    >
                      Verify →
                    </a>
                  )}
                </div>
                
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => handleEdit(certification)}
                    className="p-1.5 bg-primary/10 text-primary rounded-md hover:bg-primary/20"
                    aria-label="Edit certification"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(certification.id)}
                    className="p-1.5 bg-error/10 text-error rounded-md hover:bg-error/20"
                    aria-label="Delete certification"
                  >
                    <Trash size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default CertificationsAdmin;