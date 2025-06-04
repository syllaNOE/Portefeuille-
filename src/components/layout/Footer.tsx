import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Database, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  // Social links
  const socialLinks = [
    { 
      icon: <Github size={18} />, 
      href: 'https://github.com/username', 
      label: 'GitHub'
    },
    { 
      icon: <Linkedin size={18} />, 
      href: 'https://linkedin.com/in/nouho-sylla', 
      label: 'LinkedIn'
    },
    { 
      icon: <Mail size={18} />, 
      href: 'mailto:snouho.ylla@gmail.com', 
      label: 'Email'
    }
  ];

  return (
    <footer className="w-full py-6 bg-background-light/50 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <Database className="h-6 w-6 text-primary" />
            <span className="ml-2 font-semibold">Nouho Sylla</span>
          </div>
          
          {/* Social links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-text-light hover:text-primary transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="text-sm text-text-light text-center md:text-right">
            <p>© {currentYear} Nouho Sylla. {t('footer.rights')}</p>
            <p className="flex items-center justify-center md:justify-end mt-1">
              {t('footer.madeWith')} <Heart className="h-3 w-3 mx-1 text-error" /> <span>React & Tailwind</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;