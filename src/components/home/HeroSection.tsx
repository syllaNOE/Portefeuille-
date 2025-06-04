import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown, FileText, Mail } from 'lucide-react';
import Button from '../shared/Button';
import { useStore } from '../../store/useStore';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const { profile, resumeUrl } = useStore();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = useRef(150);
  const deletingSpeed = useRef(75);
  const pauseDuration = useRef(1500);
  
  const dynamicTextList = t('home.dynamicText', { returnObjects: true }) as string[];
  
  // Text typing effect
  useEffect(() => {
    const currentWord = dynamicTextList[currentTextIndex];
    let timer: NodeJS.Timeout;
    
    if (!isDeleting && displayText === currentWord) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), pauseDuration.current);
    } else if (isDeleting && displayText === '') {
      // Move to next word
      setIsDeleting(false);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % dynamicTextList.length);
    } else if (!isDeleting) {
      // Add a character
      timer = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
      }, typingSpeed.current);
    } else {
      // Remove a character
      timer = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
      }, deletingSpeed.current);
    }
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex, dynamicTextList]);
  
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Récupérer le CV depuis le localStorage
    const storedResume = localStorage.getItem('resume');
    
    if (storedResume) {
      // Créer un nouvel onglet avec le PDF
      const newWindow = window.open();
      if (newWindow) {
        newWindow.document.write(`
          <html>
            <head>
              <title>CV - ${profile.name}</title>
              <style>
                body, html {
                  margin: 0;
                  padding: 0;
                  height: 100%;
                  overflow: hidden;
                }
                embed {
                  width: 100%;
                  height: 100%;
                }
              </style>
            </head>
            <body>
              <embed src="${storedResume}" type="application/pdf" />
            </body>
          </html>
        `);
      }
    } else {
      alert('CV non disponible. Veuillez télécharger votre CV dans la section Admin.');
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative mx-auto"
        >
          <div className="w-40 h-40 md:w-48 md:h-48 mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/50 to-secondary/50 animate-pulse-slow"></div>
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-full object-cover rounded-full border-4 border-background p-1 relative z-10"
            />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-success px-3 py-1 rounded-full text-white text-sm font-medium z-20">
              Available
            </div>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute inset-0 -m-6 rounded-full border-2 border-primary/20 animate-pulse-slow"></div>
          <div className="absolute inset-0 -m-12 rounded-full border-2 border-secondary/20 animate-pulse-slow delay-150"></div>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
          {profile.name}
        </h1>
        <h2 className="text-xl md:text-2xl text-text-light mb-6">
          {profile.title}
        </h2>
        
        <div className="h-16 flex items-center justify-center mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium">
            <span className="text-primary">{displayText}</span>
            <span className="animate-pulse">|</span>
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Button 
            variant="primary" 
            size="lg"
            to="/projects"
          >
            {t('home.cta')}
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleResumeClick}
          >
            <FileText size={18} className="mr-2" />
            {t('home.resume')}
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg"
            to="/contact"
          >
            <Mail size={18} className="mr-2" />
            {t('home.contact')}
          </Button>
        </div>
      </motion.div>
      
      <motion.button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 1,
        }}
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default HeroSection;