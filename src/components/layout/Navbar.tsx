import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useStore } from '../../store/useStore';
import { Sun, Moon, Globe, Menu, X, Database, Github, Linkedin, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Toggle language between 'en' and 'fr'
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  // Handle scroll event to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Nav links configuration
  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/experience', label: t('nav.experience') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/skills', label: t('nav.skills') },
    { to: '/education', label: t('nav.education') },
    { to: '/contact', label: t('nav.contact') }
  ];

  // Social links
  const socialLinks = [
    { 
      icon: <Github size={20} />, 
      href: 'https://github.com/username', 
      label: 'GitHub'
    },
    { 
      icon: <Linkedin size={20} />, 
      href: 'https://linkedin.com/in/nouho-sylla', 
      label: 'LinkedIn'
    },
    { 
      icon: <Mail size={20} />, 
      href: 'mailto:snouho.ylla@gmail.com', 
      label: 'Email'
    }
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <Database className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold hidden sm:block">Nouho Sylla</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-primary bg-primary/10' 
                      : 'text-text-light hover:text-text hover:bg-background-light'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/admin"
              className={({ isActive }) => 
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-secondary bg-secondary/10' 
                    : 'text-text-light hover:text-text hover:bg-background-light'
                }`
              }
            >
              {t('nav.admin')}
            </NavLink>
          </nav>

          {/* Controls (Theme, Language) */}
          <div className="hidden md:flex items-center space-x-2">
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
            
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-md text-text-light hover:text-primary hover:bg-background-light transition-colors"
              aria-label="Toggle language"
            >
              <Globe size={20} />
              <span className="sr-only">
                {i18n.language === 'en' ? 'Switch to French' : 'Switch to English'}
              </span>
            </button>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-text-light hover:text-primary hover:bg-background-light transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              <span className="sr-only">
                {theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-text-light hover:text-text hover:bg-background-light focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-background border-t border-border"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive 
                      ? 'text-primary bg-primary/10' 
                      : 'text-text-light hover:text-text hover:bg-background-light'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/admin"
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive 
                    ? 'text-secondary bg-secondary/10' 
                    : 'text-text-light hover:text-text hover:bg-background-light'
                }`
              }
            >
              {t('nav.admin')}
            </NavLink>
          </div>
          
          {/* Mobile Controls */}
          <div className="px-4 py-3 border-t border-border flex justify-between">
            <div className="flex space-x-2">
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
            
            <div className="flex space-x-2">
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-md text-text-light hover:text-primary hover:bg-background-light transition-colors"
                aria-label="Toggle language"
              >
                <Globe size={20} />
              </button>
              
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md text-text-light hover:text-primary hover:bg-background-light transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;