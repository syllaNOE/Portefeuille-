import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/shared/PageTransition';
import AdminSidebar from '../components/admin/AdminSidebar';
import { Menu, X } from 'lucide-react';

// Admin dashboard components
import AdminDashboard from '../components/admin/AdminDashboard';
import ProjectsAdmin from '../components/admin/ProjectsAdmin';
import ExperienceAdmin from '../components/admin/ExperienceAdmin';
import EducationAdmin from '../components/admin/EducationAdmin';
import SkillsAdmin from '../components/admin/SkillsAdmin';
import CertificationsAdmin from '../components/admin/CertificationsAdmin';
import SettingsAdmin from '../components/admin/SettingsAdmin';

const AdminPage: React.FC = () => {
  const { t } = useTranslation();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const location = useLocation();
  
  // Get current section name based on path
  const getSectionName = () => {
    const path = location.pathname.split('/').pop() || '';
    
    switch (path) {
      case 'admin':
        return t('admin.dashboard');
      case 'projects':
        return t('admin.sections.projects');
      case 'experience':
        return t('admin.sections.experience');
      case 'education':
        return t('admin.sections.education');
      case 'skills':
        return t('admin.sections.skills');
      case 'certifications':
        return t('admin.sections.certifications');
      case 'settings':
        return t('admin.sections.settings');
      default:
        return t('admin.dashboard');
    }
  };
  
  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-8rem)] flex flex-col md:flex-row">
        {/* Desktop Sidebar */}
        <AdminSidebar />
        
        {/* Mobile Sidebar */}
        {isMobileSidebarOpen && (
          <AdminSidebar 
            mobile 
            onClose={() => setIsMobileSidebarOpen(false)}
          />
        )}
        
        {/* Content Area */}
        <div className="flex-1 p-4 md:p-6">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-6 md:hidden">
            <h1 className="text-2xl font-bold">{getSectionName()}</h1>
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="p-2 rounded-md bg-background-light"
              aria-label="Open sidebar"
            >
              <Menu size={24} />
            </button>
          </div>
          
          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">{getSectionName()}</h1>
          </div>
          
          {/* Admin Content */}
          <div className="bg-background rounded-xl border border-border p-4 md:p-6">
            <Routes>
              <Route index element={<AdminDashboard />} />
              <Route path="projects" element={<ProjectsAdmin />} />
              <Route path="experience" element={<ExperienceAdmin />} />
              <Route path="education" element={<EducationAdmin />} />
              <Route path="skills" element={<SkillsAdmin />} />
              <Route path="certifications" element={<CertificationsAdmin />} />
              <Route path="settings" element={<SettingsAdmin />} />
              <Route path="*" element={<Navigate to="/admin\" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AdminPage;