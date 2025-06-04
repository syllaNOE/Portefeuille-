import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/shared/PageTransition';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import Button from '../components/shared/Button';
import { ChevronRight, Briefcase, Lightbulb, Code } from 'lucide-react';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Data Science',
      description: 'Building data-driven solutions with Python, SQL, and advanced analytics techniques',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Machine Learning',
      description: 'Developing models for prediction, classification, and natural language processing',
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Business Intelligence',
      description: 'Creating dashboards and visualizations to drive business decisions',
    },
  ];
  
  return (
    <PageTransition>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Featured Section */}
      <section id="about-section" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.title')}</h2>
            <p className="text-lg text-text-light">
              {t('about.description')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-background-light p-8 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-text-light mb-4">{feature.description}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  to={`/${feature.title.toLowerCase().replace(' ', '-')}`}
                  className="text-primary hover:text-primary/90"
                >
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Button>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              variant="primary" 
              size="lg"
              to="/about"
            >
              {t('about.title')} <ChevronRight size={18} className="ml-1" />
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HomePage;