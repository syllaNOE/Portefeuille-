import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  LayoutDashboard, 
  Briefcase, 
  Code, 
  GraduationCap, 
  Award,
  Lightbulb,
  Settings,
  LogOut
} from 'lucide-react';
import { useStore } from '../../store/useStore';

interface AdminSidebarProps {
  mobile?: boolean;
  onClose?: () => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ 
  mobile = false,
  onClose 
}) => {
  const { t } = useTranslation();
  const { logout } = useStore();
  
  const handleLogout = () => {
    logout();
    if (onClose) {
      onClose();
    }
  };
  
  const menuItems = [
    {
      to: '/admin',
      exact: true,
      icon: <LayoutDashboard size={20} />,
      label: t('admin.dashboard')
    },
    {
      to: '/admin/projects',
      icon: <Code size={20} />,
      label: t('admin.sections.projects')
    },
    {
      to: '/admin/experience',
      icon: <Briefcase size={20} />,
      label: t('admin.sections.experience')
    },
    {
      to: '/admin/education',
      icon: <GraduationCap size={20} />,
      label: t('admin.sections.education')
    },
    {
      to: '/admin/skills',
      icon: <Lightbulb size={20} />,
      label: t('admin.sections.skills')
    },
    {
      to: '/admin/certifications',
      icon: <Award size={20} />,
      label: t('admin.sections.certifications')
    },
    {
      to: '/admin/settings',
      icon: <Settings size={20} />,
      label: t('admin.sections.settings')
    }
  ];
  
  const sidebarClasses = mobile 
    ? 'fixed inset-y-0 left-0 transform translate-x-0 w-64 bg-background border-r border-border z-30 transition duration-300 ease-in-out'
    : 'w-64 bg-background border-r border-border h-full flex-shrink-0 hidden md:block';
    
  return (
    <div className={sidebarClasses}>
      <div className="h-16 flex items-center justify-center border-b border-border">
        <h1 className="text-xl font-semibold">Admin Dashboard</h1>
        {mobile && (
          <button
            onClick={onClose}
            className="absolute right-4 p-2 rounded-full hover:bg-background-light"
            aria-label="Close sidebar"
          >
            &times;
          </button>
        )}
      </div>
      
      <nav className="mt-6 px-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                end={item.exact}
                onClick={onClose}
                className={({ isActive }) => 
                  `flex items-center px-4 py-3 rounded-md transition-colors ${
                    isActive 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-text hover:bg-background-light'
                  }`
                }
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
          
          <li className="pt-4 mt-4 border-t border-border">
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-3 rounded-md w-full text-text hover:bg-error/10 hover:text-error transition-colors"
            >
              <LogOut size={20} className="mr-3" />
              <span>{t('admin.logout')}</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;