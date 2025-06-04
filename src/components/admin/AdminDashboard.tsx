import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Code, 
  GraduationCap, 
  Award,
  Lightbulb,
  Settings,
  RefreshCw,
  Edit,
  Plus
} from 'lucide-react';
import { useStore } from '../../store/useStore';

const AdminDashboard: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { projects, experiences, degrees, certifications, skills } = useStore();
  
  // Dashboard cards data
  const dashboardCards = [
    {
      title: t('admin.sections.projects'),
      count: projects.length,
      icon: <Code className="w-8 h-8 text-primary" />,
      color: 'primary',
      path: '/admin/projects'
    },
    {
      title: t('admin.sections.experience'),
      count: experiences.length,
      icon: <Briefcase className="w-8 h-8 text-accent" />,
      color: 'accent',
      path: '/admin/experience'
    },
    {
      title: t('admin.sections.education'),
      count: degrees.length,
      icon: <GraduationCap className="w-8 h-8 text-secondary" />,
      color: 'secondary',
      path: '/admin/education'
    },
    {
      title: t('admin.sections.skills'),
      count: skills.length,
      icon: <Lightbulb className="w-8 h-8 text-warning" />,
      color: 'warning',
      path: '/admin/skills'
    },
    {
      title: t('admin.sections.certifications'),
      count: certifications.length,
      icon: <Award className="w-8 h-8 text-success" />,
      color: 'success',
      path: '/admin/certifications'
    },
    {
      title: t('admin.sections.settings'),
      icon: <Settings className="w-8 h-8 text-text-light" />,
      color: 'text-light',
      path: '/admin/settings'
    }
  ];
  
  // Recent activity (just for demo)
  const recentActivity = [
    { 
      action: 'Added a new project', 
      date: '2 days ago',
      icon: <Plus className="w-4 h-4" /> 
    },
    { 
      action: 'Updated skills section', 
      date: '4 days ago',
      icon: <RefreshCw className="w-4 h-4" /> 
    },
    { 
      action: 'Edited about information', 
      date: '1 week ago',
      icon: <Edit className="w-4 h-4" /> 
    },
  ];
  
  return (
    <div>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {dashboardCards.map((card, index) => {
          const colorClass = `text-${card.color}`;
          const bgColorClass = `bg-${card.color}/10`;
          
          return (
            <motion.div
              key={index}
              className="bg-background-light rounded-xl border border-border shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => navigate(card.path)}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`${bgColorClass} p-3 rounded-xl`}>
                  <span className={colorClass}>{card.icon}</span>
                </div>
                {'count' in card && (
                  <span className="text-3xl font-bold">{card.count}</span>
                )}
              </div>
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-text-light text-sm mt-1">
                {card.title !== t('admin.sections.settings') 
                  ? 'Manage and edit content'
                  : 'Configure site settings'
                }
              </p>
            </motion.div>
          );
        })}
      </motion.div>
      
      {/* Recent Activity */}
      <motion.div 
        className="mt-8 bg-background-light rounded-xl border border-border shadow-sm p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center">
              <div className="bg-background-light p-2 rounded-full mr-3">
                {activity.icon}
              </div>
              <div>
                <p>{activity.action}</p>
                <p className="text-text-light text-sm">{activity.date}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;