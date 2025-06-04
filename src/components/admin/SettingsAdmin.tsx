import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Save, RefreshCw, Check } from 'lucide-react';
import Button from '../shared/Button';
import { useStore } from '../../store/useStore';

const SettingsAdmin: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { profile, setProfile, resumeUrl, setResumeUrl } = useStore();
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  
  // Handle input changes for profile
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ [name]: value });
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success message
    setSaveSuccess(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setSaveSuccess(false);
    }, 3000);
  };
  
  // Handle language change
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };
  
  const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    try {
      setIsUploading(true);
      
      // Vérifier le type de fichier
      if (file.type !== 'application/pdf') {
        throw new Error('Le fichier doit être au format PDF');
      }
      
      // Créer un objet FileReader pour lire le fichier
      const reader = new FileReader();
      
      // Convertir le fichier en base64
      reader.readAsDataURL(file);
      
      reader.onload = () => {
        // Le résultat est une chaîne base64
        const base64String = reader.result as string;
        
        // Stocker le fichier base64 dans le localStorage
        localStorage.setItem('resume', base64String);
        
        // Mettre à jour l'URL du CV dans le store
        setResumeUrl(base64String);
        
        // Réinitialiser le champ de fichier
        e.target.value = '';
        
        // Afficher un message de succès
        alert('CV téléchargé avec succès !');
      };
      
      reader.onerror = () => {
        throw new Error('Erreur lors de la lecture du fichier');
      };
      
    } catch (error) {
      console.error('Erreur lors du téléchargement du CV:', error);
      alert(error instanceof Error ? error.message : 'Une erreur est survenue lors du téléchargement du CV');
    } finally {
      setIsUploading(false);
    }
  };
  
  return (
    <div>
      <h1 className="text-xl font-semibold mb-6">{t('admin.sections.settings')}</h1>
      
      {/* Success Message */}
      {saveSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="bg-success/10 border border-success/30 text-success p-4 rounded-md mb-6 flex items-center"
        >
          <Check size={20} className="mr-2" />
          <span>{t('admin.messages.saveSuccess')}</span>
        </motion.div>
      )}
      
      <form onSubmit={handleSubmit}>
        {/* Profile Settings */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4">Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-background-light p-4 rounded-lg border border-border">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                className="w-full p-2 border border-border rounded-md bg-background"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={profile.title}
                onChange={handleProfileChange}
                className="w-full p-2 border border-border rounded-md bg-background"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                className="w-full p-2 border border-border rounded-md bg-background"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={handleProfileChange}
                className="w-full p-2 border border-border rounded-md bg-background"
              />
            </div>

            {/* Profile Image URL */}
            <div>
              <label className="block text-sm font-medium mb-1">Profile Image URL</label>
              <input
                type="url"
                name="image"
                value={profile.image}
                onChange={handleProfileChange}
                className="w-full p-2 border border-border rounded-md bg-background"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">LinkedIn Username</label>
              <input
                type="text"
                name="linkedin"
                value={profile.linkedin}
                onChange={handleProfileChange}
                className="w-full p-2 border border-border rounded-md bg-background"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">GitHub Username</label>
              <input
                type="text"
                name="github"
                value={profile.github}
                onChange={handleProfileChange}
                className="w-full p-2 border border-border rounded-md bg-background"
              />
            </div>
          </div>
        </div>
        
        {/* Resume Settings */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4">Resume</h2>
          <div className="space-y-4 bg-background-light p-4 rounded-lg border border-border">
            <div>
              <label className="block text-sm font-medium mb-1">Current Resume</label>
              <div className="flex items-center space-x-4">
                <span className="text-text-light">
                  {resumeUrl ? 'CV disponible' : 'Aucun CV téléchargé'}
                </span>
                {resumeUrl && (
                  <a 
                    href={resumeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm"
                  >
                    Voir →
                  </a>
                )}
              </div>
            </div>
            
            <div>
              <p className="text-sm text-text-light mb-2">Upload a new resume:</p>
              <input
                type="file"
                accept=".pdf"
                onChange={handleResumeUpload}
                disabled={isUploading}
                className="block w-full text-sm text-text-light
                  file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0
                  file:text-sm file:font-medium file:bg-primary/10 file:text-primary
                  hover:file:bg-primary/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              />
              {isUploading && (
                <p className="text-sm text-primary mt-2">Uploading...</p>
              )}
            </div>
          </div>
        </div>
        
        {/* Language Settings */}
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4">Language</h2>
          <div className="bg-background-light p-4 rounded-lg border border-border">
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => handleLanguageChange('en')}
                className={`px-4 py-2 rounded-md ${
                  i18n.language === 'en'
                    ? 'bg-primary text-white'
                    : 'bg-background hover:bg-background-light'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => handleLanguageChange('fr')}
                className={`px-4 py-2 rounded-md ${
                  i18n.language === 'fr'
                    ? 'bg-primary text-white'
                    : 'bg-background hover:bg-background-light'
                }`}
              >
                Français
              </button>
            </div>
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            variant="primary"
            type="submit"
          >
            <Save size={16} className="mr-2" />
            {t('admin.actions.save')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SettingsAdmin;