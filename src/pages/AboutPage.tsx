import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PageTransition from '../components/shared/PageTransition';
import Section from '../components/shared/Section';
import Button from '../components/shared/Button';
import { ChevronRight } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  const softSkills = t('about.softSkills.skills', { returnObjects: true }) as string[];
  
  return (
    <PageTransition>
      <Section 
        title={t('about.title')}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Bio section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Nouho Sylla</h3>
            <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
              Data Scientist / Analyst
            </div>
            
            <p className="text-lg mb-6 leading-relaxed">{t('about.description')}</p>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">{t('about.softSkills.title')}</h4>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <motion.span 
                    key={index}
                    className="bg-background-light px-3 py-1 rounded-full text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div className="space-x-4">
              <Button 
                variant="primary" 
                size="md"
                to="/experience"
              >
                Experience <ChevronRight size={16} className="ml-1" />
              </Button>
              <Button 
                variant="outline" 
                size="md"
                to="/contact"
              >
                Contact <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          </motion.div>
          
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-first md:order-last"
          >
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl border-4 border-primary/20 shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Nouho Sylla" 
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-lg shadow-lg border border-border">
                <div className="flex items-center">
                  <span className="h-3 w-3 bg-success rounded-full mr-2 animate-pulse"></span>
                  <span className="text-sm font-medium">Available for projects</span>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -z-10 -top-5 -left-5 h-full w-full rounded-2xl border-2 border-primary"></div>
            </div>
          </motion.div>
        </div>
      </Section>
    </PageTransition>
  );
};

export default AboutPage;